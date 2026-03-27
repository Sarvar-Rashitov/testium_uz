"use client"

import { useI18n } from "@/lib/i18n/context"
import { Locale, locales } from "@/lib/i18n/translations"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languageCodes: Record<Locale, string> = {
  en: 'eng',
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  // Only show language switcher if there are multiple languages
  if (locales.length <= 1) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground text-xs font-medium">
          {languageCodes[locale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => setLocale(loc)}
            className={`cursor-pointer text-xs ${locale === loc ? 'bg-secondary' : ''}`}
          >
            {languageCodes[loc].toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
