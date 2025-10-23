import styles from './Divider.module.scss';

export default function Divider() {
  return (
    <div className={styles.waveDivider}>
      <img src="/wave.svg" alt="" className={styles.waveImage} />
    </div>
  );
}
