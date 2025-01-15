import styles from "./Competitor.module.scss"

function Competitor(competitor) {
  return (
    <div className={styles.Competitor}>
        <div className={styles.info}>
            <span className={styles.name}>{competitor.FirstName}</span>
            <span className={styles.state}>{competitor.RepresentingState}</span>
            <span className={styles.vote_count}>
                    Total Votes : {competitor.NumberofVotes}</span>
        </div>
    </div>
  )
}

export default Competitor