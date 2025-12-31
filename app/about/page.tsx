import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
    const manufacturerReasons = [
        {
            title: "No Upfront Cost",
            description: "We operate on a commission model. You only pay when we succeed.",
        },
        {
            title: "Time-Zone Aligned",
            description: "We work in the same time zones as the buyers, ensuring rapid responses.",
        },
        {
            title: "Structured RFQ Handling",
            description: "We filter and qualify inquiries so your team deals with serious buyers.",
        },
        {
            title: "Market Familiarity",
            description: "Deep understanding of cultural and business nuances in Asia & ME.",
        },
        {
            title: "Reduced Workload",
            description: "We act as your extended sales arm, reducing burden on internal teams.",
        },
    ];

    const buyerReasons = [
        {
            title: "Faster Responses",
            description: "Local presence means we respond within your business hours.",
        },
        {
            title: "Clear Communication",
            description: "We bridge the language and technical gaps effectively.",
        },
        {
            title: "Global Access",
            description: "Easy access to world-class OEMs without navigation hurdles.",
        },
        {
            title: "Single Point of Contact",
            description: "One reliable contact for multiple global manufacturers.",
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-blue-500 font-medium tracking-wider text-sm uppercase mb-3 block">About Us</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Are</h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        ForgeLines is a representative company that helps global manufacturers establish and grow
                        their presence in Asia and the Middle East.
                    </p>
                </div>

                {/* What We Do */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Bridging the Gap</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            We act as an authorized regional point of contact, ensuring clear communication and
                            professional handling of inquiries from buyers in these regions.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Our role is to support both sides by making the process smooth, accurate, and responsive.
                            We coordinate RFQs, quotations, clarifications, and buyer communication on behalf of manufacturers.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">How the Representative Model Works</h3>
                        <ul className="space-y-4 text-slate-600 relative z-10">
                            {[
                                "Manufacturers list ForgeLines as regional rep.",
                                "Buyers contact us directly or via referral.",
                                "We coordinate quotes with the manufacturer.",
                                "PO is forwarded to manufacturer.",
                                "Buyers pay the manufacturer directly.",
                                "Manufacturer ships directly to buyer."
                            ].map((step, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">
                                        {i + 1}
                                    </span>
                                    <span className="text-base">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="bg-slate-200 mb-20" />

                {/* Why Manufacturers Choose Us */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Manufacturers Choose ForgeLines</h2>
                        <p className="text-slate-600">Expanding your reach with zero risk.</p>
                    </div>
                    <HoverEffect
                        items={manufacturerReasons}
                        className="py-0"
                        cardClassName="bg-white border-slate-200 shadow-sm hover:border-blue-200 dark:border-slate-200 dark:bg-white"
                        titleClassName="text-slate-900 mt-2"
                        descriptionClassName="text-slate-500 mt-2 leading-relaxed"
                        hoverClassName="bg-blue-50"
                    />
                </div>

                {/* Why Buyers Choose Us */}
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Buyers Choose ForgeLines</h2>
                        <p className="text-slate-600">Simplifying procurement from global brands.</p>
                    </div>
                    <HoverEffect
                        items={buyerReasons}
                        className="lg:grid-cols-2 max-w-4xl mx-auto py-0"
                        cardClassName="bg-white border-slate-200 shadow-sm hover:border-blue-200 dark:border-slate-200 dark:bg-white"
                        titleClassName="text-slate-900 mt-2"
                        descriptionClassName="text-slate-500 mt-2 leading-relaxed"
                        hoverClassName="bg-blue-50"
                    />
                </div>

            </div>
        </div>
    );
}
