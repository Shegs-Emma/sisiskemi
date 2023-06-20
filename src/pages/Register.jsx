
import Styled from "styled-components"
import { mobile } from "../responsive";


const Container = Styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`;

const Wrapper = Styled.div`
    width:40%;
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
        flex-wrap:wrap;
`;


const Input = Styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding:20px;
    border:1px solid lightgray;
    border-radius: 9px;
`;

const Agreement = Styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = Styled.button`
    width: 40%;
    border: none; 
    padding: 15px 20px;
    background-color: teal;
    color:#fff;
    cursor: pointer;
`;




const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with <b>Privacy Policy</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register