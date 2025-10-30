"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAccount } from "wagmi"
import Image from "next/image"
import Link from "next/link"
import { useMarketplaceEvents } from "@/hooks/use-marketplace-events"
import { EventCard } from "@/components/event-card"
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function LandingPage() {
  const { isConnected } = useAccount()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const { getFeaturedEvents, loading: eventsLoading } = useMarketplaceEvents()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    })
  }

  const featuredEvents = getFeaturedEvents()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#dd7e9a]/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-[#dd7e9a]/20 text-[#dd7e9a] border-[#dd7e9a]/30 hover:bg-[#dd7e9a]/30">
              <Zap className="w-3 h-3 mr-1" />
              Powered by Hedera Blockchain
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#dd7e9a] to-white bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#dd7e9a] to-[#c06b8a] bg-clip-text text-transparent">
                Event Ticketing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Secure, transparent, and fraud-proof NFT tickets on the blockchain. 
              Own your tickets, trade freely, and never worry about counterfeits again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {!isConnected ? (
                <ConnectButton />
              ) : (
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#dd7e9a] hover:bg-[#c06b8a] text-white px-8 py-3 text-lg"
                    onClick={() => router.push('/dashboard')}
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#dd7e9a] text-[#dd7e9a] hover:bg-[#dd7e9a] hover:text-white px-8 py-3 text-lg"
                    onClick={() => scrollToSection('marketplace')}
                  >
                    Browse Events
                  </Button>
                </div>
              )}
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Decentralized</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 text-purple-500" />
                <span>Resellable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section id="marketplace" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-[#3a8d25] mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover amazing events happening around you
            </p>
          </div>
          
          {eventsLoading ? (
            <div className="flex justify-center items-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin text-[#dd7e9a]" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredEvents.slice(0, 6).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-[#dd7e9a] hover:bg-[#c06b8a] text-white px-8 py-3"
              onClick={() => router.push('/marketplace')}
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-[#3a8d25] mb-4">
              Why Choose Crown?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revolutionary features that make event ticketing better for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/50 border-slate-700/50 hover:border-[#dd7e9a]/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#dd7e9a] to-[#c06b8a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Fraud Proof</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Blockchain technology ensures every ticket is authentic and cannot be duplicated or counterfeited.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/50 border-slate-700/50 hover:border-[#dd7e9a]/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Resellable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trade your tickets freely on our marketplace. No more restrictions or middlemen taking huge cuts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/50 border-slate-700/50 hover:border-[#dd7e9a]/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Decentralized</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No single point of failure. Your tickets are secured by the power of distributed blockchain technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 pt-4 border-t border-border bg-[#242424]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-center">
            <div>
              <div className="flex items-center justify-center space-x-3">
                <Image src="/Crown-logo.svg" alt="Crown" width={40} height={40} className="rounded-lg" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#dd7e9a] to-[#dd7e9a] bg-clip-text text-transparent">
                  Crown
                </span>
              </div>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                The future of event ticketing is here. Secure, transparent, and decentralized.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <Link href="https://github.com/Crown10/Crown-Ticket/edit/main/README.md" target="_blank" className="hover:text-primary transition-colors hover:underline">
                Documentation
              </Link>
              <Link href="/resources" className="hover:text-primary transition-colors hover:underline">
                Resources
              </Link>
              <Link href="#" className="hover:text-primary transition-colors hover:underline">
                Support
              </Link>
              <Link href="#" className="hover:text-primary transition-colors hover:underline">
                Privacy
              </Link>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Crown. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
