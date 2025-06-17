import styles from "./Sidebar.module.css";

export default function Sidebar({ language, setShowResumes, setShowContact }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.name}>Henry Santiago</h2>

      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <a href="/about">{language === "en" ? "ABOUT" : "自己紹介"}</a>

          <a href="#projects">{language === "en" ? "PROJECTS" : "プロジェクト"}</a>

          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              setShowResumes((prev) => !prev);
            }}
          >
            {language === "en" ? "RESUME" : "履歴書"}
          </a>

          <a href="#tech">{language === "en" ? "TECH STACK" : "技術スタック"}</a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setShowContact((prev) => !prev);
            }}
          >
            {language === "en" ? "CONTACT" : "連絡先"}
          </a>
        </nav>
      </div>
    </div>
  );
}
