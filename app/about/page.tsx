import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Separator } from "@/components/ui/separator";
import content from "@/lib/content.json";

export default function AboutPage() {
    const manufacturerReasons = content.about.manufacturer_reasons.items;
    const buyerReasons = content.about.buyer_reasons.items;

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-blue-500 font-medium tracking-wider text-sm uppercase mb-3 block">{content.about.header.badge}</span>
                    <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">{content.about.header.title}</h1>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                        {content.about.header.description}
                    </p>
                </div>

                {/* What We Do */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{content.about.bridging_gap.title}</h2>
                        <p className="text-slate-600 text-base leading-relaxed font-medium">
                            {content.about.bridging_gap.p1}
                        </p>
                        <p className="text-slate-600 text-base leading-relaxed font-medium">
                            {content.about.bridging_gap.p2}
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-6 relative z-10">{content.about.model_works.title}</h3>
                        <ul className="space-y-4 text-slate-600 relative z-10 font-medium">
                            {content.about.model_works.steps.map((step, i) => (
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
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">{content.about.manufacturer_reasons.title}</h2>
                        <p className="text-slate-600 font-medium">{content.about.manufacturer_reasons.subtitle}</p>
                    </div>
                    <HoverEffect
                        items={manufacturerReasons}
                        className="py-0"
                        cardClassName="bg-white border-slate-200 shadow-sm hover:border-blue-200 dark:border-slate-200 dark:bg-white"
                        titleClassName="text-slate-900 mt-2 font-semibold"
                        descriptionClassName="text-slate-500 mt-2 leading-relaxed font-medium"
                        hoverClassName="bg-blue-50"
                    />
                </div>

                {/* Why Buyers Choose Us */}
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">{content.about.buyer_reasons.title}</h2>
                        <p className="text-slate-600 font-medium">{content.about.buyer_reasons.subtitle}</p>
                    </div>
                    <HoverEffect
                        items={buyerReasons}
                        className="py-0"
                        cardClassName="bg-white border-slate-200 shadow-sm hover:border-blue-200 dark:border-slate-200 dark:bg-white"
                        titleClassName="text-slate-900 mt-2 font-semibold"
                        descriptionClassName="text-slate-500 mt-2 leading-relaxed font-medium"
                        hoverClassName="bg-blue-50"
                    />
                </div>

            </div>
        </div>
    );
}
