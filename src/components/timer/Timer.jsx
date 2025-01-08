import styles from "./timer.module.scss";

 const Timer = () => {
  return (
    <div className={styles.countdown}>
        <h1>VOTING ENDS IN</h1>
        <div className={styles.time}>
            <div className={styles.digit_text}>
                <span className={styles.digit}>04:</span>
                <span className={styles.text}>Days</span>
            </div>
            <div className={styles.digit_text}>
                <span className={styles.digit}>09:</span>
                <span className={styles.text}>Hours</span>
            </div>
            <div className={styles.digit_text}>
                <span className={styles.digit}>03:</span>
                <span className={styles.text}>Minutes</span>
            </div>
            <div className={styles.digit_text}>
                <span className={styles.digit}>05:</span>
                <span className={styles.text}>Seconds</span>
            </div>
        </div>
    </div>
  )
}

export default Timer;


