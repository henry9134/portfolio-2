import { useState } from "react";
import "./LiveDemoButtons.css";

export default function LiveDemoButtons({ language }) {
  const [showDescription, setShowDescription] = useState(false);

  const demoProjects = [
    {
      titleEN: "Debatify",
      titleJP: "ディベートアプリ",
      link: "https://debatify-henry-0be005f41a30.herokuapp.com/",
      thumbnail: "/thumbnails/debatify.png",
    },
    {
      titleEN: "Flashcard App (Mobile Only)",
      titleJP: "フラッシュカード（モバイル専用）",
      link: "https://flashcard-app-2-liard.vercel.app",
      thumbnail: "/thumbnails/flashcard-app.png",
    },
    {
      titleEN: "Airfriends",
      titleJP: "エアフレンズ",
      link: "https://airfriends-henry-967cf28bbdaf.herokuapp.com/",
      thumbnail: "/thumbnails/airfriends.png",
    },
    {
      titleEN: "Job Tracker",
      titleJP: "ジョブトラッカー",
      link: "https://job-tracker-app-1-22281bdb13d3.herokuapp.com/",
      thumbnail: "/thumbnails/job-tracker-app.png",
    },
  ];

  return (
    <div className="live-demo-sidebar">
      <h3 className="live-demo-title">
        {language === "en" ? "Projects (Live)" : "公開中のプロジェクト"}
      </h3>

      <button
        className="toggle-description"
        onClick={() => setShowDescription((prev) => !prev)}
      >
        {language === "en"
          ? showDescription
            ? "Hide Info ▲"
            : "What is this? ▼"
          : showDescription
          ? "閉じる ▲"
          : "説明を見る ▼"}
      </button>

      {showDescription && (
        <p className="live-demo-description">
          {language === "en" ? (
            <>
              These are working apps you can try.
              <br />
              GitHub code is in the sidebar.
            </>
          ) : (
            <>
              実際に操作できるアプリです。
              <br />
              ソースコードはGitHubにあります。
            </>
          )}
        </p>
      )}

      {demoProjects.map((project) => (
        <a
          key={project.titleEN}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="live-demo-btn"
        >
          <img
            src={project.thumbnail}
            alt={project.titleEN}
            className="demo-thumbnail"
          />
          <span>{language === "en" ? project.titleEN : project.titleJP}</span>
        </a>
      ))}
    </div>
  );
}
