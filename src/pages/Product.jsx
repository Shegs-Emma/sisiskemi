import Styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

import NavBarse from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";


const Container = Styled.div`

`;

const Wrapper = Styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        padding: "10px", flexDirection:"column"
    })}
`;

const ImageContainer = Styled.div`
    flex:1;
`;

const Image = Styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({
        height: "40vh"
    })}
`;

const InfoContainer = Styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({
        padding: "10px"
    })}
`;

const Title = Styled.h1`
    font-weight: 600;
`;

const Desc = Styled.p`
    margin: 20px 0px;
`;

const Price = Styled.span`
    font-weight: 200;
    font-size: 20px;
`;

const FilterContainer = Styled.div`
    width:50%;
    margin: 30px 0px;
    display: flex;
    justify-content:space-between;
    ${mobile({
        width: "100%"
    })}

`;

const Filter = Styled.div`
    display: flex;
    align-items:center;
`;

const FilterTitle = Styled.span`
    font-weight: 200;
    font-size: 20px;
`;

const FilterColor = Styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = Styled.select`
    margin-left: 10px;

`;

const FilterSizeOption = Styled.option`
    
`;

const AddContainer = Styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({
        width: "100%"
    })}
`;

const AmountContainer = Styled.div`
    display: flex;
    align-items:center; 
    font-weight:600;
`;

const Remove = Styled.div``;



const Amount = Styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content:center;
    margin:0px 5px;

`;

const Add = Styled.div``;


const Button = Styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 10px;

    &:hover{
        background-color: #f8f4f4;
    }
`;

// const FilterContainer = Styled.div`
    
// `;


const Product = () => {
  return (
    <Container>
        <NavBarse/>        

            <Wrapper>
                <ImageContainer>
                    <Image src="https://res.cloudinary.com/kamisama/image/upload/v1679276229/IMG_9817_1_ddluhv.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        draft up a proposal and atttached to the pitch    deck
                        INSTAGRAM STRUCTURE
                        content structure: Days for posting, who is eviola, the metaverse, web 3.0, Virtual reality, Immersive experience and model, part of educatio in xr, 
                    </Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>                        
                            </FilterSize>
                        </Filter>                        
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove>-</Remove>
                            <Amount>1</Amount>
                            <Add>+</Add>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product