"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, translations, locales } from './translations'

type TranslationsType = typeof translations[Locale]

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationsType
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale
    if (saved && locales.includes(saved)) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = translations[locale]

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: t as TranslationsType }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
