import Time from "./Time";
import styles from "./timer.module.scss";
import Countdown from 'react-countdown';

 const Timer = () => {


    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <completed />;
        } else {
          // Render a countdown
          return (
            <Time  days={days} hours={hours} minutes={minutes} seconds={seconds} />
          );
        }
      };
      return (
          <div className={styles.countdown}>
            <Countdown date={Date.now() + 5000} renderer={renderer}/>
    </div>
  )
}

export default Timer;


