import '../styles/Modal.css';

const Modal: React.FC = () => {
  return (
    <>
      <div id="modal" className="modal">
        <p id="modal-message" className="modal-message">You Won!</p>
        <button id="restart-button">Play again</button>
      </div>
    </>
  );
}

export default Modal;
