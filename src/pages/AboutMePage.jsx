import { Link } from 'react-router-dom';
import AboutMe from '../components/AboutMe';

export default function AboutMePage({ language }) {
  return (
    <div style={{ padding: '40px' }}>
      <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#0070f3' }}>
        ← {language === 'en' ? 'Back to Home' : 'ホームに戻る'}
      </Link>
      <AboutMe language={language} />
    </div>
  );
}
