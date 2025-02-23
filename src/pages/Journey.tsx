const milestones = [
    {
        title: "👥 The Team Comes Together",
        desc: "It all started with a simple idea: to make mental health support more accessible and engaging. As a group of passionate software development students, we came together, each bringing unique skills, to build something meaningful. After numerous brainstorming sessions, we decided to create Eyedra—a mental health social networking platform designed to provide a safe, anonymous, and interactive space for users. With features like  private support groups, augmented reality-based Campfire Sessions, and an AI mascot assistant, Eyedra aims to revolutionize the way people connect, share, and support each other on their mental well-being journey.",

        img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5",
        reverse: false,
    },
    {
        title: "💡 Shaping the Vision", 
        desc:"We spent weeks researching, analyzing mental health challenges, and refining our ideas. We asked ourselves tough questions: How can we create a safe and engaging space for mental well-being? Who will benefit the most from our platform? After countless discussions, wireframes, and brainstorming sessions, we finally had a clear vision—Eyedra. A platform designed to provide anonymous peer support and immersive Campfire Sessions using augmented reality. This became the foundation of our project, driven by the goal of making mental health support more accessible and interactive.",
        img: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
        reverse: true,
    },
    {
        title: "🛠️ The Development Marathon",
        desc: "The real challenge began when we started writing code. Debugging felt endless, and testing was exhausting, but we never gave up. Each small victory brought us closer to our goal. Every bug fixed, every feature implemented, felt like a milestone in our journey.",
        img: "https://images.unsplash.com/photo-1735825764451-d2186b7f4bf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        reverse: false,
    },
    {
        title: "🚀 The Final Stretch",
        desc: "As the deadline approached, everything started coming together. The features worked, the UI looked polished, and our vision had turned into reality. It was a surreal moment—looking back at where we started and realizing how much we had grown, both as developers and as a team.",
        img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        reverse: true,
    },
];

export default function OurJourney() {
    return (
        <div className="bg-white text-gray-900">
            {/* Header */}
            <header className="text-center py-8 mt-20 bg-white text-black">
                <h1 className="text-4xl font-bold">Our Journey</h1>
                <p className="text-lg mt-2">The story of our software project team</p>
            </header>

            {/* Timeline */}
            <main className="max-w-5xl mx-auto py-16 px-6">
                {milestones.map((milestone, index) => (
                    <section
                        key={index}
                        className={`flex flex-wrap items-center justify-between py-12 transition-all duration-700 ease-in-out opacity-100 translate-y-0 ${
                            milestone.reverse ? "flex-row-reverse" : ""
                        }`}
                    >
                        <div className="flex-1 min-w-[300px] p-6">
                            <h2 className="text-2xl font-semibold text-purple-600">{milestone.title}</h2>
                            <p className="text-gray-700 mt-3">{milestone.desc}</p>
                        </div>
                        <div className="flex-1 max-w-[450px]">
                            <img
                                src={milestone.img}
                                width={450}
                                height={300}
                                alt={milestone.title}
                                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}