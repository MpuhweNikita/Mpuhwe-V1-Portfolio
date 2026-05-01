"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ResumePage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <main className="min-h-screen bg-white text-black p-8 md:p-12 print:p-0">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8 border-b-2 border-neutral-300 pb-4 flex justify-between items-end print:hidden">
                    <h1 className="text-3xl font-bold">Resume</h1>
                    <div className="flex gap-4">
                        <Link href="/" className="text-blue-600 hover:underline">Back to Portfolio</Link>
                        {isClient && (
                            <button onClick={() => window.print()} className="bg-black text-white px-4 py-2 rounded hover:bg-neutral-800 transition">Download PDF</button>
                        )}
                    </div>
                </header>

                <div className="print:block">
                    {/* The actual resume */}
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-extrabold uppercase tracking-tight">Mpuhwe Nikita</h1>
                        <p className="text-lg text-neutral-600 mt-1">Fullstack Developer | Mobile App Developer | Embedded Systems Engineer</p>
                        <p className="text-sm text-neutral-600 flex justify-center gap-3 mt-2 font-medium">
                            <span>+0792535020</span>
                            <span>•</span>
                            <a href="https://github.com/MpuhweNikita" target="_blank" className="hover:underline">github.com/MpuhweNikita</a>
                            <span>•</span>
                            <a href="https://www.linkedin.com/in/mpuhwe-nikita-82a80934b/" target="_blank" className="hover:underline">linkedin.com/in/mpuhwe-nikita</a>
                        </p>
                    </div>

                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 pb-1 tracking-wider text-neutral-800">Professional Summary</h2>
                        <p className="text-sm leading-relaxed text-justify">
                            Highly adaptable and impact-driven Software Engineer with proven expertise across web development, mobile applications, and embedded systems. Demonstrated experience in leading product vision as a CEO, architecting frontend interfaces, and integrating complex hardware sensors. Adept at turning rough concepts into reliable, production-ready, and user-centric systems that address real-world challenges in agriculture, tech-education, and industrial logistics.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 pb-1 tracking-wider text-neutral-800">Skills & Technologies</h2>
                        <div className="text-sm grid grid-cols-2 gap-2">
                            <div><span className="font-bold">Languages & Core:</span> JavaScript, TypeScript, C++, Python, HTML/CSS</div>
                            <div><span className="font-bold">Frontend:</span> React, Next.js, React Native, Tailwind CSS, Redux</div>
                            <div><span className="font-bold">Backend & DB:</span> Node.js, Express, MongoDB, Firebase</div>
                            <div><span className="font-bold">Tools & Hardware:</span> Git, Figma, Arduino, MQTT, Docker</div>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 pb-1 tracking-wider text-neutral-800">Experience & Growth</h2>

                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-neutral-900">CEO & Founder</h3>
                                <span className="text-sm font-semibold whitespace-nowrap text-neutral-600">2026 – Present</span>
                            </div>
                            <p className="text-sm font-medium italic mb-1 text-neutral-700">Twubake</p>
                            <ul className="list-disc list-inside text-sm space-y-1 text-neutral-800">
                                <li>Leading the vision and strategy for a construction materials logistics platform.</li>
                                <li>Managing end-to-end product development mapping clients with truck owners.</li>
                                <li>Spearheading business operations and market reach strategies.</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-neutral-900">Embedded Systems Engineer</h3>
                                <span className="text-sm font-semibold whitespace-nowrap text-neutral-600">2025</span>
                            </div>
                            <p className="text-sm font-medium italic mb-1 text-neutral-700">SmartMine Ltd</p>
                            <ul className="list-disc list-inside text-sm space-y-1 text-neutral-800">
                                <li>Engineered hardware solutions for environmental anomaly detection in mines.</li>
                                <li>Integrated embedded sensors with frontend analytics for real-time safety tracking.</li>
                                <li>Contributed to cross-functional mobile application development for the same platform.</li>
                            </ul>
                        </div>

                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-neutral-900">Designer</h3>
                                <span className="text-sm font-semibold whitespace-nowrap text-neutral-600">2024</span>
                            </div>
                            <p className="text-sm font-medium italic mb-1 text-neutral-700">Brainly Code</p>
                            <ul className="list-disc list-inside text-sm space-y-1 text-neutral-800">
                                <li>Designed an appealing and engaging UX/UI for an educational coding software.</li>
                                <li>Produced comprehensive wireframes, mockups, and interactive prototypes.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 pb-1 tracking-wider text-neutral-800">Featured Projects</h2>
                        <div className="space-y-3">
                            <div className="leading-snug">
                                <span className="font-bold text-neutral-900">Twubake</span> <span className="italic text-neutral-700">– Fullstack & Mobile Developer</span><br />
                                <span className="text-sm text-neutral-800">A logistics platform connecting construction clients with truck owners for materials delivery, including real-time mapping and price negotiation features.</span>
                            </div>
                            <div className="leading-snug">
                                <span className="font-bold text-neutral-900">MineLynx</span> <span className="italic text-neutral-700">– Embedded Systems & Asst. Frontend Developer</span><br />
                                <span className="text-sm text-neutral-800">A software and mobile app alerting users of potential dangers inside mining sites through integrated sensor networks.</span>
                            </div>
                            <div className="leading-snug">
                                <span className="font-bold text-neutral-900">Sarura</span> <span className="italic text-neutral-700">– Frontend Developer</span><br />
                                <span className="text-sm text-neutral-800">An app modernizing agriculture by helping farmers detect plant diseases early, providing treatments, and connecting them to markets.</span>
                            </div>
                            <div className="leading-snug">
                                <span className="font-bold text-neutral-900">FeedGuard</span> <span className="italic text-neutral-700">– Frontend Developer</span><br />
                                <span className="text-sm text-neutral-800">An analytics system to assist leaders in tracking citizens&apos; living conditions for better resource allocation.</span>
                            </div>
                            <div className="leading-snug">
                                <span className="font-bold text-neutral-900">Brainly Code</span> <span className="italic text-neutral-700">– Designer</span><br />
                                <span className="text-sm text-neutral-800">An educational platform introducing beginners to coding basics through engaging courses and challenges.</span>
                            </div>
                            <div className="leading-snug">
                                <span className="font-bold text-neutral-900">Movie App</span> <span className="italic text-neutral-700">– Mobile Developer</span><br />
                                <span className="text-sm text-neutral-800">A mobile application providing users a seamless experience to browse, search, and download movies for offline viewing.</span>
                            </div>
                            <div className="leading-snug">
                                <span className="font-bold text-neutral-900">Grocery App</span> <span className="italic text-neutral-700">– Mobile Developer</span><br />
                                <span className="text-sm text-neutral-800">A digital marketplace dedicated to fresh produce, allowing users to browse, order, and track deliveries.</span>
                            </div>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 pb-1 tracking-wider text-neutral-800">Education</h2>
                        <div className="mb-2 flex justify-between">
                            <div>
                                <span className="font-bold text-neutral-900">Rwanda Coding Academy</span>
                                <div className="text-sm text-neutral-800">Software Programming & Embedded Systems</div>
                            </div>
                            <span className="text-sm font-semibold text-neutral-600">2024 – Present</span>
                        </div>
                        <div className="mb-2 flex justify-between">
                            <div>
                                <span className="font-bold text-neutral-900">FAWE Girls School</span>
                                <div className="text-sm text-neutral-800">Ordinary Level – STEM & Sciences</div>
                            </div>
                            <span className="text-sm font-semibold text-neutral-600">2021 – 2024</span>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <span className="font-bold text-neutral-900">Ecole Saint Andre Gitarama</span>
                                <div className="text-sm text-neutral-800">Primary & Nursery</div>
                            </div>
                            <span className="text-sm font-semibold text-neutral-600">2012 – 2021</span>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 pb-1 tracking-wider text-neutral-800">Certifications & Training</h2>
                        <ul className="list-disc list-inside text-sm grid grid-cols-2 gap-y-1 text-neutral-800">
                            <li>Ideation & Prototyping Workshop (Germany, 2025)</li>
                            <li>AI Guidance Program (Korea, 2025)</li>
                            <li>DevX Girls Summer Camp (2025)</li>
                            <li>RCA 4th Hackathon 2025 Participation</li>
                            <li>African Girls Can Code Initiative (AGCCI) Bootcamp</li>
                            <li>STEM Camp Participation – St Andre</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
