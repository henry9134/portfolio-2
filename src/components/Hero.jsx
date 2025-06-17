import styles from './Hero.module.css';

export default function Hero({ language, onContactClick }) {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>
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
      </div>
    </div>
  );
}
