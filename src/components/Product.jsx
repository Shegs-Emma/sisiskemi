import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import Styled from "styled-components"
import { NavLink } from 'react-router-dom';

const Info = Styled.div`
opacity:0;
width:100%;
height: 100%;
position: absolute; 
top: 0;
left: 0;
background-color: rgba(0,0,0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;flex-direction: column;
cursor:pointer;
`;

const Container = Styled.div`
    flex:1;
    margin: 10px;
    min-width: 290px;
    height: 60vh; 
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity:1;
    }

`;

const Circle = Styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    position: absolute;
`;

const Image = Styled.img`
width: 100%;
height: 100%;
object-fit: cover; 
    z-index: 2;
`;

const Icon = Styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
flex-direction:initial;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`;
const Detail = Styled.div`
display: flex;
flex-direction: column;
text-align: center;
color: #fff;
`;

const H3 = Styled.h3``;

const H4 = Styled.h4``;

const StyledNavLink = Styled(NavLink)`
    text-decoration: none;
    transition: .2s;
    color: #ffffff;
    margin-left: 2rem; 
    
`;


const Product = ({item}) => {
  return (
    <Container>
        {/* <Circle />         */}
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Detail>
                <StyledNavLink to="/Product">

                    <H3>{item.name}</H3>
                </StyledNavLink>                        
                <H4>{item.price}</H4>
            </Detail>
            </Info>

            {/* <Detail>
                <H3>{item.name}</H3>
                <H4>{item.price}</H4>
            </Detail>                     */}
    </Container>
  )
}

export default Product