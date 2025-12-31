import Threads from "@/components/ui/threads";
import CardSwap, { Card } from "@/components/ui/card-swap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card as ShadcnCard } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Globe2, Layers, Zap } from "lucide-react";
import Link from "next/link";


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
            Authorized Regional Sales Representatives
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Connecting Manufacturers <br className="hidden md:block" />
            to Asia & Middle East
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We support global manufacturers by handling RFQs, quotes, and sales coordination
            for buyers across Asian and Middle Eastern markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <Link href="#rfq">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your Direct Link to <br />
                <span className="text-blue-500">Global OEMs</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                ForgeLines represents global manufacturers as their regional sales partner.
                We manage buyer inquiries, coordinate quotations with manufacturers, support communication,
                and ensure professional transactions.
              </p>

              <div className="space-y-4">
                {[
                  "Represent manufacturers directly",
                  "Manage buyer inquiries & RFQs",
                  "Coordinate accurate quotations",
                  "Buyers purchase directly from OEM"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button asChild variant="link" className="text-blue-400 p-0 h-auto font-medium hover:text-blue-300">
                  <Link href="/about">See how our model works →</Link>
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
                {[
                  { title: "Global Reach", icon: Globe2, desc: "Bridge between East & West. Connecting markets." },
                  { title: "Fast Quotes", icon: Zap, desc: "Direct coordination handling for instant pricing." },
                  { title: "Regional Focus", icon: Layers, desc: "Deep expertise in Asian & ME markets." },
                  { title: "Transparency", icon: CheckCircle2, desc: "Clear communication. Direct OEM payment." }
                ].map((feature, i) => (
                  <Card key={i} className="bg-white border-slate-200 p-6 flex flex-col justify-center items-center text-center shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Regions Covered</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            We support buyers and manufacturers across Asia and the Middle East, including
            South Asia, Southeast Asia, East Asia, GCC, and broader Middle Eastern markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["South Asia", "Southeast Asia", "East Asia", "GCC", "Middle East"].map((region) => (
              <span key={region} className="px-6 py-2 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-sm backdrop-blur-sm shadow-sm">
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Submit Your RFQ</h2>
              <p className="text-slate-600">
                If you are a buyer in Asia or the Middle East, please share your requirements below.
                We will coordinate with the relevant manufacturer and respond accordingly.
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Are you a Manufacturer?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Join our network and expand your reach in Asian and Middle Eastern markets without the overhead.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/partner">Partner With Us →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
