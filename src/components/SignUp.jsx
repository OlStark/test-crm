import { useDispatch } from "react-redux";
import { Form } from "./Form";
import  { useNavigate}  from "react-router-dom"
import { setUser } from "store/slices/userSlice";
import { store } from "store";


const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleRegister = async (email, password) => {
    function putToStore () {
      dispatch(setUser({
        email: 'someemail@mail.com',
        id: 1,
        token: 1
      }))
    }
    push('/')
  }
   
  
  return (
    <Form
        handleClick={handleRegister}
    />
  )
}

export {SignUp};
