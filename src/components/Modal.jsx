import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import close from "../svgs/close.svg";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: ${(props) => (props.isClicked === true ? "hidden" : "scroll")};
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  height: 46rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
  visibility: ${(props) => (props.isClicked === true ? "visible" : "hidden")};
  opacity: ${(props) => (props.isClicked === true ? 1 : 0)};
  transition: opacity 0.5s linear;
  padding: 1rem;
`;
const Message = styled.p`
  color: #03004e;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid #03004e;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  height: 75%;
`;
const Label = styled.label`
  padding: 20px 0;
  width: 80%;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  width: 80%;
  height: 50%;
  margin-bottom: 20px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  padding: 0.5rem;
`;

const SubmitButton = styled.button`
  margin: auto 0;
  width: 80%;
  padding: 10px;
  background-color: #03004e;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor:pointer;
  &:hover{
    background-color: #0A0585;
    transition:0.3s ease-in-out;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
const CloseImage = styled.img`
  width: 20px;
`;
const CloseButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
  display: ${(props) => (props.isClicked === true ? "initial" : "none")};
  overflow: hidden;
`;

const schema = yup.object().shape({
  name: yup.string().required("Name required!"),
  message: yup.string().required("Message required!"),
});

const Modal = ({ onClick, show }) => {
  // const [userInfo,setUserInfo] = useState({
  //     name: "",
  //     message: "",
  // });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setUserInfo((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [name]: value,
  //     };
  //   });
  // }

  // async function handleClick(e) {
  //   try {
  //     e.preventDefault();
  //     await axios
  //       .post("/api/users/create/message", userInfo)
  //       .then((response) => {
  //         console.log(response);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const onSubmit = async (data) => {
    await axios
      .post("/api/users/create/message", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success("✅ Message sent");
          reset();
        }
      })
      .catch(() => {
        toast.error("❌ Couldn't sent message");
      });
  };

  return (
    <>
      <GlobalStyle isClicked={show}></GlobalStyle>
      <ModalContainer isClicked={show}>
        <ImageContainer>
          <CloseButton onClick={onClick}>
            <CloseImage src={close}></CloseImage>
          </CloseButton>
        </ImageContainer>
        <Message>Contact Us</Message>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Name:</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label>Your message:</Label>
          <Textarea type="text" {...register("message")}></Textarea>
          <ErrorMessage>{errors.message?.message}</ErrorMessage>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        {/* <Form>
          <Label>Name:</Label>
          <Input onChange={handleChange} name="name" value={userInfo.name} />
          <Label>Your message:</Label>
          <Textarea
            onChange={handleChange}
            name="message"
            value={userInfo.message}
          ></Textarea>
          <SubmitButton type="submit" onClick={handleClick}>
            Submit
          </SubmitButton>
        </Form> */}
      </ModalContainer>
      <Overlay onClick={onClick} isClicked={show}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Overlay>
    </>
  );
};

export default Modal;
