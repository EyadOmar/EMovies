import { useRef } from 'react';
import Modal from '../modal/Modal';
import ModalContent from '../modal/ModalContent';

function TrailerModal({ movie }) {
  const iframeRef = useRef(null);

  const onClsoe = () => iframeRef.current.setAttribute('src', '');

  return (
    <Modal active={false} id={`modal_${movie.id}`}>
      <ModalContent onClose={onClsoe}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
}

export default TrailerModal;
