import { useState } from 'react';
import Modal from 'react-modal';
import styles from './vote.module.scss'


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

const backgroundStyle ={
  content: {
    top:"50%",
    left: "50%",
    right: auto,
    bottom: auto,
    marginRight:"-50%",
    transform: "translate(-50%, -50%)"
  }
}
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
            </div>

          </div>
      </Modal>
  </div>
  )
   
}
