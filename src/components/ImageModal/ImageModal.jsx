import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, image, alt }) => {
  const styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgb(40, 40, 40, 0.9)",
    },
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal"
      >
        <img src={image} alt={alt} />
      </Modal>
    </>
  );
};

export default ImageModal;
