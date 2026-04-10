import { Link } from 'react-router-dom';

const workItems = [
    {
        slug: 'zen',
        title: 'ZEN Transport GmbH',
        category: 'Client Website',
        summary:
            'A company website for a Tirol-based transport and logistics business with a strong focus on trust, services, and lead generation.',
        tags: ['Design', 'Frontend', 'Responsive', 'SEO'],
    },
];

export default function Work() {
    return (
        <div className="min-h-screen px-6 pt-28 pb-16 md:px-10 lg:px-24 fadeIn">
            <div className="mx-auto flex max-w-6xl flex-col gap-10">
                <section className="grid gap-6">
                    {workItems.map((item) => (
                        <Link
                            key={item.slug}
                            to={`/work/${item.slug}`}
                            className="group rounded-3xl border border-black/10 bg-white/50 p-8 shadow-lg backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-gray-800/60"
                        >
                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                <div className="max-w-3xl">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                                        {item.category}
                                    </p>
                                    <h2 className="mt-3 text-3xl font-bold">{item.title}</h2>
                                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                                        {item.summary}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-blue-700/20 bg-blue-700/10 px-4 py-2 text-sm font-medium text-blue-900 dark:border-blue-300/20 dark:bg-blue-300/10 dark:text-blue-100"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="shrink-0">
                                    <span className="inline-flex items-center rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white transition-opacity duration-200 group-hover:opacity-90 dark:bg-blue-700">
                                        Open project
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </div>
    );
}
