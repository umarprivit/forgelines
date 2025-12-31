export default function ManufacturersPage() {
    return (
        <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-black text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6">
                Manufacturers & Product Lines
            </h1>
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium mb-8">
                Coming Soon
            </div>
            <p className="text-slate-400 max-w-2xl text-lg">
                We are currently onboarding global manufacturers.<br />
                This page will display our authorized partners and product categories once partnerships are finalized.
            </p>
        </div>
    );
}
