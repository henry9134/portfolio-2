import "./LiveDemos.css";

const demoProjects = [
  {
    title: "Debatify",
    image: "/images/debatify.png",
    link: "https://debatify-app.vercel.app",
  },
  {
    title: "Flashcard App",
    image: "/images/flashcard.png",
    link: "https://your-flashcard-app.vercel.app",
  },
  {
    title: "Airfriends",
    image: "/images/airfriends.png",
    link: "https://airfriends.vercel.app",
  },
  {
    title: "Job Tracker",
    image: "/images/jobtracker.png",
    link: "https://job-tracker.vercel.app",
  },
];

export default function LiveDemos({ language }) {
  return (
    <div className="live-demos-section" id="projects">
      <h2>{language === "en" ? "Live Code Projects" : "ライブコードプロジェクト"}</h2>
      <div className="demo-grid">
        {demoProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-card"
          >
            <img src={project.image} alt={project.title} />
            <p>{project.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
