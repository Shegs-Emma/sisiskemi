import Styled from "styled-components"
import { popularProducts } from "../data";
import Product from "./Product";

const Container = Styled.div`
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products;