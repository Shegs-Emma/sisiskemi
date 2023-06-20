import Styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = Styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`;

const Wrapper = Styled.div`
    width:30%;
    padding: 20px;
    background-color: #fff;
    ${mobile({
        width: "75%"
    })}

`;

const Title = Styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

const Form = Styled.form`
        display: flex;
        flex-direction: column; 
`;


const Input = Styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding:20px;
    border:1px solid lightgray;
    border-radius: 9px;
`;

const Button = Styled.button`
    width: 40%;
    border: none; 
    padding: 15px 20px;
    background-color: teal;
    color:#fff;
    cursor: pointer;
    margin-bottom:10px;
`;

const Links = Styled.a`
    margin: 5px 0;
    font-size: 12;
    text-decoration: underline;
    cursor:pointer;    
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>                                
                <Input placeholder="username" />                
                <Input placeholder="password" />                                
                <Button>LOGIN</Button>
                <Links >Don't Remember your Password ? </Links>
                <Link to="/register" style={{ color: 'black', textDecoration:"none" }}>Create a new Account </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login