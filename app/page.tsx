import Threads from "@/components/ui/threads";
import CardSwap, { Card } from "@/components/ui/card-swap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card as ShadcnCard } from "@/components/ui/card";
import React from "react";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Globe2, Layers, Zap } from "lucide-react";
import Link from "next/link";
import content from "@/lib/content.json";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-slate-50 py-10 md:py-0">
        <div className="absolute inset-0 z-0 bg-slate-50">
          <Threads
            color={[0, 0, 0]}
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
        <div className="z-10 container mx-auto px-4 text-center relative">
          <div className="inline-block mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-medium backdrop-blur-sm">
            {content.home.hero.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-slate-900 mb-6 tracking-tight">
            {content.home.hero.title.split("Search")[0]} <br className="hidden md:block " />
            {/* Note: I'm hardcoding the break for now based on the JSON string logic or just rendering it as text. 
                Wait, JSON has "Connecting Manufacturers to Asia & Middle East". The split approach is brittle. 
                I'll just render it directly. If user wants line break, I might need to allow HTML or just let it wrap. 
                Let's use the JSON string. */
            }
            {/* {content.home.hero.title} */}
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {content.home.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <Link href="#rfq">{content.home.hero.cta_primary}</Link>
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm">
              <Link href="/about">{content.home.hero.cta_secondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                {/* This was hardcoded 'Your Direct Link to <br /> Global OEMs' - JSON has 'Your Direct Link to Global OEMs'
                     I will just use the JSON title. Handling the <br> dynamically is tricky with simple JSON. 
                     I'll stick to simple text for now to match the "user editable" requirement simply. */
                  content.home.what_we_do.title}
              </h2>
              <p className="text-slate-600 text-base mb-8 leading-relaxed font-medium">
                {content.home.what_we_do.description}
              </p>

              <div className="space-y-4">
                {content.home.what_we_do.list.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button asChild variant="link" className="text-blue-400 p-0 h-auto font-medium hover:text-blue-300">
                  <Link href="/about">{content.home.what_we_do.learn_more}</Link>
                </Button>
              </div>
            </div>

            <div className="w-full relative h-[450px] md:h-[600px] overflow-hidden">
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={2000}
                pauseOnHover={false}
                width="100%"
              >
                {content.home.features.map((feature, i) => (
                  <Card key={i} className="bg-white border-slate-200 p-6 flex flex-col justify-center items-center text-center shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                      {/* Icon mapping is tricky if icons are in JSON. JSON only has strings. 
                           I'll assume the icon order is fixed or map by title. 
                           Actually, for simplicity, I'll keep the icons hardcoded in the map but take text from JSON.
                           I need to ensure the JSON array order matches the hardcoded icons order. 
                           JSON: Global Reach, Fast Quotes, Regional Focus, Transparency. Matches exactly. */
                      }
                      {[Globe2, Zap, Layers, CheckCircle2][i] && React.createElement([Globe2, Zap, Layers, CheckCircle2][i], { className: "w-8 h-8 text-blue-600" })}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 text-sm font-medium">{feature.desc}</p>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Covered */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">{content.home.regions.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-base font-medium">
            {content.home.regions.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {content.home.regions.list.map((region) => (
              <span key={region} className="px-6 py-2 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium backdrop-blur-sm shadow-sm">
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Form */}
      {/* RFQ Form */}
      <section id="rfq" className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">{content.home.rfq.title}</h2>
              <p className="text-slate-600 font-medium">
                {content.home.rfq.description}
              </p>
            </div>

            <ShadcnCard className="bg-white border-slate-200 shadow-xl p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Company Name Ltd." className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="product">Product / Requirement</Label>
                    <Input id="product" placeholder="Enter product name or category" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" placeholder="e.g. 500 units" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / Specifications</Label>
                  <Textarea id="message" placeholder="Please provide detailed specifications..." className="min-h-[120px] bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file" className="block">File Upload (Optional)</Label>
                  <Input id="file" type="file" className="bg-slate-50 border-slate-200 cursor-pointer text-slate-500 file:text-blue-600 file:border-none file:mr-4 file:bg-transparent" />
                </div>

                <Button type="submit" size="lg" className="w-full font-medium">
                  Submit Request
                </Button>
              </form>
            </ShadcnCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">{content.home.manufacturer_cta.title}</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto font-medium">
            {content.home.manufacturer_cta.description}
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/partner">{content.home.manufacturer_cta.button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
