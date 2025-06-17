export default function ResumePopup({ language }) {
  return (
    <div className="popup-box">
      <a href="/resumes/english_resume.pdf" download>
        📄 {language === "en" ? "English Resume" : "英語の履歴書"}
      </a>
      <a href="/resumes/rirekisho.pdf" download>
        📄 履歴書（JP）
      </a>
      <a href="/resumes/shokumu_keirekisho.pdf" download>
        📄 職務経歴書（JP）
      </a>
    </div>
  );
}
