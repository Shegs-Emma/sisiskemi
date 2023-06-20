import { Facebook, Instagram, Room, Send, Twitter, WhatsApp } from "@mui/icons-material";
import Styled from "styled-components";
import { mobile } from "../responsive";
import Logoim from "../images/logo.svg"


const Container = Styled.div`    
    display:flex;
    ${mobile({
        flexDirection: "column"
    })}
`;

const Left = Styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = Styled.h1`

`;

const Image = Styled.img``;

const Desc = Styled.p`
    margin: 20px 0px;
    font-weight: 600;
`;

const SocialContainer = Styled.div`
    display: flex; 
`;

const SocialIcon = Styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color: white;
    background-color: #${(props)=>props.color};
    display: flex;
    align-items:center;
    justify-content: center;
    margin-right: 20px;
    
`;

const Center = Styled.div`
    flex:1;
    padding: 20px;
    ${mobile({
        display: "none"
    })}
`;
const Title = Styled.h3`
    margin-bottom: 30px;
`;

const List = Styled.ul`
    margin: 0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap:wrap;
`;

const ListItem = Styled.li`
    width:50%;
    margin-bottom: 10px;
`;

const Right = Styled.div`
    flex:1;
    padding: 20px;
    ${mobile({
        backgroundColor: "#fff8f8"
    })}
`;

const ContactItem = Styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center
`;
const InputContainer = Styled.div`
    width: 100%;
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
    background-color:#333333;
    color: white;
    &:hover{
        background-color: #f8f4f4;
        color:#A86728;
    }
`;

const Payment = Styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                <Image src={Logoim} alt="Logo" />
            </Logo>
            <Desc>
            FOLLOW SISI KEMI
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />                    
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />                    
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />                    
                </SocialIcon>
                <SocialIcon color="10c644">
                    <WhatsApp />                    
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Terms and Conditions</ListItem>
                <ListItem>My Account</ListItem>
            </List>
        </Center>
        <Right>
            <Title>STAY UP TO DATE</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>
                Subscribe to our updates and be the first to know about new releases
            </ContactItem>
            <ContactItem>
                  <InputContainer>
                      <Input placeholder="Enter Your Email" />
                      <Button>
                          <Send />
                      </Button>
                  </InputContainer>
            </ContactItem>
            {/* <ContactItem>
            <MailOutline style={{marginRight: "10px"}} />
                info@siskemi.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </Right>
    </Container>
  )
}

export default Footer