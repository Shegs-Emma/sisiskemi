import { Send } from "@mui/icons-material"
import Styled from "styled-components";
import { mobile } from "../responsive";

const Container = Styled.div`
    height: 60vh;
    background-color: #A86728;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const H5 = Styled.h5`
font-size: 15px;
margin-bottom: 20px;
color: #fff;
font-weight: 300;
`;

const Title = Styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: #fff;
`;

const Desc = Styled.div`
    font-size: 17px;
    font-weight: 200;
    margin-bottom: 20px;
    color: #fff;
    ${mobile({
        textAlign: "center"
    })}    
`;

const InputContainer = Styled.div`
    width: 50%;
    height:40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border:1px solid lightgray;
    ${mobile({
        width: "80%"
    })}
`;

const Input = Styled.input`
    border: none;
    flex: 8;
    padding-left:20px;
    // background-color:
`;

const Button = Styled.button`
    flex:1;
    border: none;
    background-color:#A86728;
    color: white;
    &:hover{
        background-color: #f8f4f4;
        color:#A86728;
    }
`;

const Newsletter = () => {
  return (
    <Container>
        <H5>10% OFF YOUR FIRST PURCHASE</H5>
        <Title>SIGN UP</Title>
        <Desc>DISCOVER EXCLUSIVE NEW COLLECTIONS.</Desc>
        <InputContainer>
            <Input placeholder="Enter Your Email" />
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter