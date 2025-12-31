import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PartnerPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-blue-500 font-medium tracking-wider text-sm uppercase mb-3 block">For Manufacturers</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expand Your Reach</h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        ForgeLines enables manufacturers to enter or expand in Asian and Middle Eastern markets without additional overhead.
                        We act as your regional sales representative, managing inquiries, quotations, and communication.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        { title: "Representation Agreement", desc: "You authorize ForgeLines as your regional representative." },
                        { title: "Buyer Communication", desc: "We handle inquiries and RFQs from Asia & Middle East." },
                        { title: "Quotation Coordination", desc: "We gather requirements and coordinate quotes with your team." },
                        { title: "PO Coordination", desc: "We forward Purchase Orders directly to you." },
                        { title: "Direct Transaction", desc: "You invoice and ship to the buyer directly." },
                        { title: "Commission Settlement", desc: "We receive a commission only after successful transactions." }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                            <div className="text-4xl font-bold text-slate-100 mb-4 group-hover:text-blue-50 transition-colors">0{i + 1}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Partner Form */}
                <div className="max-w-3xl mx-auto">
                    <Card className="bg-white border-slate-200 shadow-xl overflow-hidden">
                        <div className="h-2 bg-blue-600 w-full"></div>
                        <CardContent className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Partner With Us</h2>
                                <p className="text-slate-500">Submit your interest to join our manufacturing network.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company Name</Label>
                                        <Input id="company" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="country">Country</Label>
                                        <Input id="country" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="contact">Contact Person</Label>
                                        <Input id="contact" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="website">Website</Label>
                                    <Input id="website" placeholder="https://" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="product">Product Category / Line</Label>
                                    <Input id="product" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors min-h-[120px]" />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                    Submit Interest
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
