function About() {
    return (
        <section id="about" className="bg-zinc-50 scroll-mt-24">
            <div className="max-w-5xl mx-auto px-6 py-24">

                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
                    About
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6">
                    A bit about me
                </h2>

                <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mb-12">
                    I’m driven by a simple question: how can technology make complex things easier to understand and more useful to people?
                    <br /><br />My work sits at the intersection of software development, artificial intelligence, and problem solving. I enjoy exploring ideas, identifying gaps, and building practical solutions that bridge the distance between what people need and what technology can offer.
                    <br /><br />Whether it’s refining the way people search for information, designing learning experiences, or experimenting with AI-powered workflows, I’m most engaged when I’m creating systems that are thoughtful, purposeful, and grounded in real-world use.
                    <br /><br />Beyond technology, I value communication, mentorship, and continuous learning—because the most impactful solutions are rarely just technical; they are human as well.

                </p>

                <div className="grid md:grid-cols-3 gap-4">

                    <div className="border border-zinc-200 bg-white rounded-xl p-6">
                        <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
                            Education
                        </p>
                        <p className="font-semibold text-zinc-900">BCA</p>
                        <p className="text-sm text-zinc-500 mt-1">Inspiria Knowledge Campus</p>
                        <p className="text-sm text-zinc-500">MAKAUT · 2024 – Present</p>
                        <p className="text-sm font-medium text-zinc-700 mt-3">CGPA: 8.32 / 10.0</p>
                    </div>

                    <div className="border border-zinc-200 bg-white rounded-xl p-6">
                        <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
                            Current Focus
                        </p>
                        <ul className="space-y-2">
                            {[
                                "React & TypeScript",
                                "AI / ML Foundations",
                                "Data Structures & Algorithms",
                                "Prompt Engineering",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                                    <span className="w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border border-zinc-200 bg-white rounded-xl p-6">
                        <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
                            Beyond Code
                        </p>
                        <ul className="space-y-2">
                            {[
                                "President, Wellness Club (40+ members)",
                                "NGO English teacher, 4+ weeks",
                                "Business pitch competition runner-up",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                                    <span className="w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;