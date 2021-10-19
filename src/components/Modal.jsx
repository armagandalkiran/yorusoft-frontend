import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    background-color: white;
    padding: 10rem;
    border-radius: 5px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    z-index: 10;
    display:${props=>props.isClicked === true ? "initial" : "none"};
`
const Message = styled.p`

`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
    display:${props=>props.isClicked === true ? "initial" : "none"};
`

const Modal = ({onClick,show}) => {

    return (
        <>
            <ModalContainer isClicked={show}>
                <Message>IT WORKS</Message>
            </ModalContainer>
            <Overlay onClick={onClick} isClicked={show}></Overlay>
        </>
    )
}

export default Modal;
