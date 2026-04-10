const responsibilities = [
    'Designed and built a complete company website tailored to the transport and logistics industry.',
    'Structured the content around services, trust signals, company background, and lead generation.',
    'Created a responsive multi-page experience for desktop and mobile users.',
    'Implemented clear inquiry paths with dedicated contact and quote pages.',
];

const highlights = [
    'Strong landing page with clear positioning for transport, logistics, and express delivery.',
    'Service pages covering regional, national, and international transport offerings.',
    'Company storytelling that presents ZEN Transport as an experienced Tirol-based logistics partner.',
    'SEO-focused metadata and structured content to improve discoverability for local search.',
];

const deliverables = [
    'UI design',
    'Frontend development',
    'Responsive layout',
    'Content structuring',
    'SEO basics',
    'Conversion-focused pages',
];

export default function Zen() {
    return (
        <div className="min-h-screen px-6 pt-28 pb-16 md:px-10 lg:px-24 fadeIn">
            <div className="mx-auto flex max-w-6xl flex-col gap-10">
                <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-white/10 dark:bg-gray-900">
                    <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                                Featured Client Work
                            </p>
                            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
                                ZEN Transport GmbH
                            </h1>
                            <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">
                                Company website for a transport and logistics business based in Tirol.
                            </p>
                            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
                                I designed and developed the website for ZEN Transport to present their services
                                clearly, strengthen trust with potential customers, and give the company a more
                                modern digital presence. The result is a structured multi-page site focused on
                                logistics, reliability, and simple contact flow.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {deliverables.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 dark:border-blue-300/30 dark:bg-blue-950/40 dark:text-blue-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8">
                                <a
                                    href="https://zen-transport.at"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-opacity duration-200 hover:opacity-90 dark:bg-blue-700"
                                >
                                    Visit Website
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-4 self-start">
                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md dark:border-white/10 dark:bg-gray-800">
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-600 dark:text-gray-400">
                                    Project Focus
                                </p>
                                <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">Professional web presence</p>
                                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                                    A clean, trustworthy site built to showcase services, company credibility, and
                                    easy inquiry options.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-gray-900 shadow-md dark:border-blue-300/20 dark:from-blue-950 dark:via-blue-900 dark:to-slate-900 dark:text-white">
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
                                    What The Website Covers
                                </p>
                                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                    <div className="rounded-xl bg-blue-200/50 p-3 dark:bg-white/8">Transport services</div>
                                    <div className="rounded-xl bg-blue-200/50 p-3 dark:bg-white/8">About company</div>
                                    <div className="rounded-xl bg-blue-200/50 p-3 dark:bg-white/8">Fleet & careers</div>
                                    <div className="rounded-xl bg-blue-200/50 p-3 dark:bg-white/8">Contact & quote flow</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-white/10 dark:bg-gray-900">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                            My Work
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">What I handled</h2>
                        <div className="mt-6 space-y-4">
                            {responsibilities.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-2xl bg-gray-100 p-4 dark:bg-white/5"
                                >
                                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                                    <p className="leading-7 text-gray-700 dark:text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="rounded-3xl mb-2 border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-gray-900 shadow-xl dark:border-white/10 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800 dark:text-white">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
                                Why This Project Matters
                            </p>
                            <h2 className="mt-3 text-3xl font-bold">A real business website built for trust and action</h2>
                            <p className="mt-6 max-w-2xl leading-8 text-gray-600 dark:text-white/75">
                                This project shows the kind of work I enjoy most: translating a company's services,
                                strengths, and identity into a website that feels professional, easy to navigate, and
                                ready to convert visitors into inquiries.
                            </p>
                        </div>

                        {/* <div className="rounded-3xl border border-blue-300 bg-blue-50 p-8 shadow-lg dark:border-blue-300/30 dark:bg-blue-950/20">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-400">
                                Testimonial
                            </p>
                            <blockquote className="mt-5 text-lg font-medium leading-8 text-gray-800 dark:text-gray-200">
                                "We were very happy with the website and the collaboration. The new site presents our
                                company professionally and makes it easier for customers to understand our services."
                            </blockquote>
                            <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                - Managing Director of ZEN Transport GmbH
                            </p>
                        </div>                         */}
                    </div>
                </section>
            </div>
        </div>
    );
}
