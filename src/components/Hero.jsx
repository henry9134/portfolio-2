import styles from './Hero.module.css';

export default function Hero({ language }) {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>
          {language === 'en' ? (
            <>
              Hi, I’m <strong>Henry</strong> — <br />
              a full-stack developer <br />
              based in <strong>Tokyo</strong>.
            </>
          ) : (
            <>
              こんにちは、<strong>ヘンリー</strong> です —<br />
              東京在住の <br />
              フルスタック開発者です。
            </>
          )}
        </h1>

        <div className={styles.socialIcons}>
          <a href="https://github.com/henry9134" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/henry-santiago13/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
