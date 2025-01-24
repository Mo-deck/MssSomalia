import { useState } from 'react';
import Modal from 'react-modal';
import styles from './vote.module.scss'
import { FaPlus, FaMinus } from "react-icons/ai";


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

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }  

    const backgroundStyle ={
      width: "100%",
      height: "500px",
      background: `linear-gradient(0deg, #29ae56b2, rgba(0,0,0,0)60%, rgba(0,0,0,0)), url('https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderButtomRightRadius: "10px"
     };

  return(

    <div>
      <button onClick={openModal}>Open Modal</button>
       <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal} overlayClassName={styles.overlayClassName}>

          <div className={styles.modal_container}>

            <div className={styles.competitor_info}>
              <div style={backgroundStyle}></div>
              <div className={styles.bio}>
                <div className={styles.divider}>
                  <label htmlFor="">Name</label>
                  <span>Farhio Cabdi</span>
                </div>
                <div className={styles.divider}>
                  <label htmlFor="">State</label>
                  <span>Jubbaland</span>
                </div>
                <div className={styles.divider}>
                  <label htmlFor="">Background Study</label>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas repudiandae quas perferendis similique maxime ipsam error quo nihil, quasi alias. Amet, illo. Alias doloremque voluptatem aliquam quo ex impedit?</span>
                </div>
                <div className={styles.divider}>
                  <label htmlFor="">Employement</label>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas repudiandae quas perferendis similique maxime ipsam error quo nihil, quasi alias. Amet, illo. Alias doloremque voluptatem aliquam quo ex impedit?</span>
                </div>
              </div>
            </div>

            <div className={styles.vote_container}>
              <div className={styles.vote_count}>
                <span>Purchase Vote</span>
                <div className={styles.vote_controls}>
                  <button type="button">
                    <FaMinus className={styles.icon} />
                  </button>
                  <button type="button">
                    <FaPlus className={styles.icon} />
                  </button>
                </div>
              </div>
            </div>
            

          </div>
      </Modal>
  </div>
  )
   
}
