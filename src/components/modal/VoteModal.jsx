import { useState } from 'react';
import Modal from 'react-modal';
import styles from './vote.module.scss'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {useSelector, useDispatch} from 'react-redux'
import { handleModal } from '../../features/modal/modalSlice';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const VoteModal = () => {
  const dispatch = useDispatch()

    let subtitle;

    const {isOpen} = useSelector(store => store.modal)
    const {currentCompetitor} = useSelector(store => store.competitor)

    console.log("Current Competitor:", currentCompetitor);
    
    // console.log(modalState);

    function closeModal() {
      dispatch(handleModal())
    }  

    const backgroundStyle ={
      width: "100%",
      height: "500px",
      background: `linear-gradient(0deg, #29ae56b2, rgba(0,0,0,0)60%, rgba(0,0,0,0)), url('${currentCompetitor?.Photo}')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderButtomRightRadius: "10px"
     };

  return(

    <div>
       <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal} overlayClassName={styles.overlay}>

          <div className={styles.modal_container}>

            <div className={styles.competitor_info}>
                <div style={backgroundStyle}></div>
                <div className={styles.bio}>
                    <div className={styles.divider}>
                       <label htmlFor="">Name</label>
                        <span>{currentCompetitor?.FirstName + " " + currentCompetitor?.LastName }</span>
                     </div>
                     <div className={styles.divider}>
                        <label htmlFor="">State</label>
                       <span>{currentCompetitor?.RepresentingState}</span>
                      </div>
                   <div className={styles.divider}>
                       <label htmlFor="">Background Study</label>
                        <span>{currentCompetitor?.PersonalBackground}</span>
                   </div>
                     <div className={styles.divider}>
                        <label htmlFor="">Employement</label>
                          <span>{currentCompetitor?.EmploymentorSchool}</span>
                       </div>
                </div>
            </div>

            <div className={styles.vote_container}>
                  <div className={styles.vote_count}>
                     <span>Purchase Vote</span>
                      <div className={styles.vote_controls}>
                            <button type="button">
                               <AiOutlineMinus className={styles.icon} />
                           </button>
                           <span>50</span>
                          <button type="button">
                                <AiOutlinePlus className={styles.icon} />
                            </button>
                       </div>
                   </div>
                <form>
                   <span>Pay with Evc,Zaad and Sahal</span>
                      <input type="number" placeholder='Enter Your Number' className={styles.form_control} />
                    <button type="submit">Vote Now</button>
                 </form>
            </div>
          </div>
      </Modal>
  </div>
  )
   
}
