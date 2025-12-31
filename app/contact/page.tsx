import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import content from "@/lib/content.json";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="text-blue-500 font-medium tracking-wider text-sm uppercase mb-3 block">{content.contact.header.badge}</span>
                        <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">{content.contact.header.title}</h1>
                        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                            {content.contact.header.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="md:col-span-1 space-y-6">
                            <Card className="p-6 border-slate-200 shadow-sm bg-white">
                                <h3 className="text-slate-900 font-semibold mb-6 text-lg">{content.contact.info.title}</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            <Mail className="text-blue-600 w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900 mb-1">{content.contact.info.email_label}</p>
                                            <a href={`mailto:${content.contact.info.email}`} className="text-slate-600 hover:text-blue-600 transition-colors block text-sm font-medium">
                                                {content.contact.info.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            <Phone className="text-blue-600 w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900 mb-1">{content.contact.info.phone_label}</p>
                                            <p className="text-slate-600 text-sm font-medium">
                                                {content.contact.info.phone}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="text-blue-600 w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900 mb-1">{content.contact.info.hq_label}</p>
                                            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-medium">
                                                {content.contact.info.hq}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-2">
                            <Card className="p-8 border-slate-200 shadow-md bg-white">
                                <h3 className="text-slate-900 font-semibold mb-6 text-lg">{content.contact.form.title}</h3>
                                <form className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">{content.contact.form.labels.name}</Label>
                                            <Input id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">{content.contact.form.labels.email}</Label>
                                            <Input id="email" type="email" placeholder="john@company.com" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">{content.contact.form.labels.company}</Label>
                                        <Input id="company" placeholder="Company Name Ltd." className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">{content.contact.form.labels.message}</Label>
                                        <Textarea id="message" placeholder="How can we help you?" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors min-h-[150px]" />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                        {content.contact.form.button}
                                    </Button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
