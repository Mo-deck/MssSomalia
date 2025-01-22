import styles from "./Competitor.module.scss"
import { MdHowToVote } from "react-icons/md";

function Competitor({competitor}) {
  const backgroundStyle ={
    width: "100%",
    background: `linear-gradient(0deg, #128b4871, rgba(0,0,0,0)60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div className={styles.competitor}  style={backgroundStyle}>
       <div className={styles.info}>
        <span className={styles.name}>
          {competitor.FirstName + " " + competitor.LastName}
        </span>
        <span className={styles.state}>
          {competitor.RepresentingState}
        </span>
        <span className={styles.vote_count}>
          Total Votes :{competitor.NumberofVotes}
        </span>
       </div>
       <div className={styles.vote}>
        <MdHowToVote className={styles.vote_icon} />
       </div>
    </div>
  )
}

export default Competitor