import React from 'react';

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-16"
    >
      <div className="max-w-5xl mx-auto space-y-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Coders' Café</h1>
          <p className="text-lg md:text-xl opacity-80">
            Coders' Café is a student-led tech community at <strong>Jaipur Engineering College (JEC)</strong>, built
            to foster innovation, collaboration, and continuous learning. From solving DSA problems to building full-scale apps,
            we turn curiosity into creation.
          </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3">About Jaipur Engineering College</h2>
          <p className="text-lg opacity-90">
            Jaipur Engineering College (JEC) is a premier institute affiliated with RTU, offering programs focused on technical excellence
            and innovation. With a vibrant tech culture, the college actively promotes student-led clubs, research, and industrial collaboration.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg opacity-90">
            <li>Regular coding competitions and technical fests</li>
            <li>Active student communities and clubs</li>
            <li>Modern labs and project-based learning</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
          <ul className="list-disc list-inside space-y-2 text-lg opacity-90">
            <li>Organize coding events, workshops, and hackathons</li>
            <li>Encourage collaboration through real-world projects</li>
            <li>Support learning in development, AI/ML, and DevOps</li>
            <li>Promote open-source contributions and mentorship</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Meet the Creators</h2>
          <div className="space-y-6 text-lg opacity-90">
            <Profile
              name="RaviRanjan Singh"
              icon="🚀"
              description="A full-stack developer and open-source enthusiast, RaviRanjan focuses on clean architecture and UI/UX-driven experiences."
            />
            <Profile
              name="Himanshu Mali"
              icon="💡"
              description="A backend architect and problem solver, Himanshu transforms complex ideas into scalable web solutions."
            />
            <Profile
              name="Kuldeep Jangid"
              icon="🧩"
              description="Specializing in frontend animation and performance, Kuldeep brings visual flair and interactivity to the web."
            />
          </div>
        </div>

        

        
      </div>
    </section>
  );
};

const Profile = ({ name, icon, description }) => (
  <div>
    <h3 className="text-xl font-medium mb-1">{icon} {name}</h3>
    <p>{description}</p>
  </div>
);

export default AboutUs;
