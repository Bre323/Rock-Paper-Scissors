import '../styles/Modal.css';

interface ModalProps {
  restartGame: () => void;
}

const Modal: React.FC<ModalProps> = ({ restartGame }) => {
  return (
    <>
      <div id="modal" className="modal">
        <p id="modal-message" className="modal-message">You Won!</p>
        <button id="restart-button" onClick={restartGame}>Play again</button>
      </div>
    </>
  );
}

export default Modal;
