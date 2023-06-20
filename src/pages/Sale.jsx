
import Styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sales from "../components/Sale";
import RecentlyViewed from "../components/RecentlyViewed";
import { mobile } from "../responsive";


const Container = Styled.div`

`;

const Title = Styled.h1`
    margin: 20px;
`;
const FilterContainer = Styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter = Styled.div`
    margin:20px; 
    ${mobile({
        width: "0px 20px", display:"flex", flexDirection:"column"
    })}
`;

const FilterText = Styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({
    marginRight: "0px"
})}
`;

const Hr = Styled.hr`
    background-color:#eee;
    border: none;
    height: 1px;
`;

const Select = Styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({
        margin: "10px 0px"
    })}
`;
const Option = Styled.option``;


const Sale = () => {
  return (
    <Container>        
        <Navbar />
        <Title>Sale</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>                    
                </Select>
            </Filter>                
        </FilterContainer>
        <Sales />
        <Hr />
        <RecentlyViewed />
        {/* <Newsletter />*/}
        <Footer />
    </Container>
  )
}

export default Sale