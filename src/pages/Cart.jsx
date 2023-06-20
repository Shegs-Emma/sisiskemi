import { Add, Remove } from '@mui/icons-material';
import Styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavBarse from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import CartLayout from '../components/Cart/CartLayout';

const Container = Styled.div`

`;

const Wrapper = Styled.div`
    padding: 20px;
    ${mobile({
      padding: '10px',
    })}
`;

const Title = Styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = Styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    padding:20px;
`;

const TopText = Styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    ${mobile({
      display: 'none',
    })}
`;

const TopButton = Styled.button`
    padding: 10px;
    font-weight:600;
    cursor: pointer;
    border:${(props) => props.type === 'filled' && 'none'};
    background-color: ${(props) =>
      props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type == 'filled' && 'white'}
    ;
`;

const Bottom = Styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({
      flexDirection: 'column',
    })}
`;

const Info = Styled.div`
    flex:3;
`;

const Product = Styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({
      flexDirection: 'column',
    })}
`;

const ProductDetail = Styled.div`
    flex:2;
    display:flex;
`;

const Image = Styled.img`
    width: 200px;
`;
const Details = Styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = Styled.span``;
const ProductId = Styled.span``;

const ProductColor = Styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${(props) => props.color};
`;

const ProductSize = Styled.span``;

const PriceDetail = Styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
`;

const ProductAmountContainer = Styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
`;
const ProductAmount = Styled.div`
        font-size:24px;
        margin:5px;
        ${mobile({
          margin: '5px 15px',
        })}
`;
const ProductPrice = Styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
      marginBottom: '20px ',
    })}
`;

const Hr = Styled.hr`
    background-color:#eee;
    border: none;
    height: 1px;
`;
const Summary = Styled.div`
    flex: 1;    
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding:20px;
    height: 50vh;
`;

const SummaryTitle = Styled.h1`
    font-weight: 600;
`;

const SummaryItem = Styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === 'total' && '600'};
    font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = Styled.span``;

const SummaryItemPrice = Styled.span``;

const Button = Styled.button`
width: 100%;
padding: 10px;
background-color:black;
color:white;
font-weight: 600;

`;

const Cart = () => {
  return (
    <Container>
      {/* <NavBarse /> */}
      <Wrapper>
        <CartLayout>
          <Title>YOUR CART</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
            <TopButton type='filled'>CHECKOUT</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src='https://res.cloudinary.com/kamisama/image/upload/v1679276229/IMG_9817_1_ddluhv.png' />
                  <Details>
                    <ProductName>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718293
                    </ProductId>
                    <ProductColor color='black' />
                    <ProductSize>
                      <b>Size:</b> 37.5
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 20</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src='https://res.cloudinary.com/kamisama/image/upload/v1679276229/IMG_9817_1_ddluhv.png' />
                  <Details>
                    <ProductName>
                      <b>Product:</b> HAKURA T-SHIRT
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718293
                    </ProductId>
                    <ProductColor color='gray' />
                    <ProductSize>
                      <b>Size:</b> M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ - 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT</Button>
            </Summary>
          </Bottom>
        </CartLayout>
      </Wrapper>
      <Newsletter />
      {/* <Footer /> */}
    </Container>
  );
};

export default Cart;
