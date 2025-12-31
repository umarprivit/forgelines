import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import content from "@/lib/content.json";

export default function PartnerPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-blue-500 font-medium tracking-wider text-sm uppercase mb-3 block">{content.partner.header.badge}</span>
                    <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">{content.partner.header.title}</h1>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                        {content.partner.header.description}
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {content.partner.steps.map((step, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                            <div className="text-4xl font-bold text-slate-100 mb-4 group-hover:text-blue-50 transition-colors">0{i + 1}</div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Partner Form */}
                <div className="max-w-3xl mx-auto">
                    <Card className="bg-white border-slate-200 shadow-xl overflow-hidden">
                        <div className="h-2 bg-blue-600 w-full"></div>
                        <CardContent className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-semibold text-slate-900 mb-2">{content.partner.form.title}</h2>
                                <p className="text-slate-500 font-medium">{content.partner.form.subtitle}</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="company">{content.partner.form.labels.company}</Label>
                                        <Input id="company" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="country">{content.partner.form.labels.country}</Label>
                                        <Input id="country" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="contact">{content.partner.form.labels.contact}</Label>
                                        <Input id="contact" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{content.partner.form.labels.email}</Label>
                                        <Input id="email" type="email" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="website">{content.partner.form.labels.website}</Label>
                                    <Input id="website" placeholder="https://" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="product">{content.partner.form.labels.product}</Label>
                                    <Input id="product" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">{content.partner.form.labels.message}</Label>
                                    <Textarea id="message" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors min-h-[120px]" />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                    {content.partner.form.button}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
