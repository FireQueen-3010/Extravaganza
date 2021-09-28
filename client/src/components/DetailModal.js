import { useState } from "react";
import Font from "./FontControl";
import Modal from "react-modal";

export default function DetailModal({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
    isOpen(isOpen);
  }
  if (!isOpen) return null;
  return (
    <div className="modal">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Details"
      >
        <h2>{data.Title}</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}
