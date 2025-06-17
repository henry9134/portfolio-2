export default function ContactPopup({ language }) {
  return (
    <div className="popup-box">
      <p><strong>{language === "en" ? "Phone" : "電話"}:</strong> 080-5108-8316</p>
      <p><strong>Email:</strong> hjsantiago13@gmail.com</p>
    </div>
  );
}
