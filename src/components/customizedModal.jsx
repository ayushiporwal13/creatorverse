import React from "react";
import Modal from "react-modal";

const CustomizedModal = (props) => {
  Modal.setAppElement("body");
  let subtitle;

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

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";

  // }
  function closeModal() {
    props.setModalVisible(false);
  }

  return (
    <Modal
      isOpen={props.modalVisible}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div
        className="modal modal-dialog modal-dialog-centered"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                WAIT
              </h1>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this creator?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                NAH, NEVER MIND
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.handleDelete}
              >
                YES! TOTALLY SURE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomizedModal;
