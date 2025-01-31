// import competitors from "../../assets/competitors.json"
import Competitor from "../competitor/Competitor"
import styles from "./competitors.module.scss"
import { useSelector } from "react-redux"

function Competitors() {

 const {competitors} = useSelector((store) => store.competitor)
  return (
    <div className={styles.competitors_container}>
        <div className={styles.competitors_header}>
            <span>Mss Somalia</span> 
            <p>Built with the React.js - the template is a well-structured, throughtfully componentized Next.js project, giving you a codebase that's productive and enjoybale to work in.</p>
        </div>
        <div className={styles.competitors}>
          {
            competitors.map((competitor) =>(
              <Competitor key={competitor.Id} competitor={competitor} />
            ))
          }
        </div>
    </div>
  )
}

export default Competitors