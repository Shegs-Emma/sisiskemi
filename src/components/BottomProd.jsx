import Styled from "styled-components";
import { mobile } from "../responsive";
import layerImage from "../images/layer.svg";


const Container = Styled.div`    
    width: 100%;
    display: flex;
    border-bottom: 1px solid #000;  

     ${mobile({
        flexDirection: "column",
    })} 
`;

const LeftSide = Styled.div`
  width: 100%;
  order: 0;

  ${mobile({
        width:"100%"
    })} 
`;

const BottomInfo = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 20% auto 4rem auto;
  width: 90%;
  text-align: center;

  @media screen and (min-width: 52em) {
    width: 80%;
    text-align: left;
    margin: 40% auto 0 auto;
  }
`;
const H3 = Styled.h3`
font-size: 18px;
font-weight: 600;
color: #4f4f4f;
`;

const H2 = Styled.h2`
font-size: 20px;
font-weight: 600;
margin: 2rem 0;
`;

const Span = Styled.span`
width: 31%;
margin: 1rem 0 0 0;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #363435;
border-bottom: 1px solid #363435;
text-align: center;
padding: 0 0 0.5rem 0;
${mobile({
        alignItems: "center", JustifyContent:"center", display:"flex",    margin: "0.1rem 0 3px 98px"
    })} 
`;

const RightSide = Styled.div`
  width: 100%;
  order: 1;
  
`;

const Image = Styled.img`
${mobile({
        width:"100%"
    })}
`;


const BottomProd = () => {
  return (
    <Container>
        <LeftSide>
            <BottomInfo>
                <H3>DESIGNED FOR EVERY WOMAN: ALL WOMEN</H3>
                <H2>#SISIKEMI</H2>
                <Span>VIEW ALL PRODUCTS</Span>
            </BottomInfo>
        </LeftSide>
        <RightSide>
            <Image src={layerImage} alt="layer image" />
        </RightSide>
    </Container>
  )
}

export default BottomProd