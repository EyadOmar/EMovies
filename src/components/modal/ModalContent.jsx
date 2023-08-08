import { useRef } from 'react';

function ModalContent(props) {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('active');
    if (props.onClose) props.onClose();
  };

  return <div ref={contentRef} className="modal_content">
    {props.children}
    <div className="modal_content_close" onClick={closeModal}>
        <i className='bx bx-x'></i>
    </div>
  </div>;
}

export default ModalContent;
