import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { ModulesSection } from "@/components/sections/modules"
import { AIHighlightSection } from "@/components/sections/ai-highlight"
import { UseCasesSection } from "@/components/sections/use-cases"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ModulesSection />
      <AIHighlightSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
