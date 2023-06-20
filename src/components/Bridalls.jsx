import Styled from "styled-components";
// import { mobile } from "../responsive";
// import rectangle4 from "../img/Rectangle12.png";
// import rectangle5 from "../img/Rectangle13.png";
import rectangle from "../images/Rectangle56.png";
// import rectangle1 from "../img/Rectangle57.png";
// import rectangle2 from "../img/Rectangle58.png";
// import rectangle3 from "../img/Rectangle59.png";


const Container = Styled.div`    
    /* width: 100%; */

    padding: 1rem calc((100vw - 1300px) / 2);
    display: grid; 
    grid-template-columns: 1fr 1fr;
    /* display: flex;
    justify-content: center; 
    align-items: center;
    gap: 3rem;
    margin: 0px 9rem;
    margin-bottom: 5rem;
    
    border-bottom: 1px solid #000;  
    
    img{
        width:150%;
    }
    .content{
        display:flex;
        justify-content: center;
        flex-direction: column;
        gap: 3rem; 
    }
    .p{
        color:#7b7e86;
        line-height: 2rem;
    }
    */
    
    @media only screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const Button = Styled.button`
    border: none; 
    padding: 10px; 
    width: 200px;
    background-color: #363435;
    color: #fff; 
    cursor: pointer; 
    font-weight: 600;
    
    @media only screen and (max-width: 768px){
        width: 300px;
        
    }
    
`;

// const LeftSide = Styled.div`
//   width: 100%;
//   order: 0;

//   ${mobile({
//         width:"100%"
//     })} 
// `;

// const BottomInfo = Styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 20% auto 4rem auto;
//   width: 90%;
//   text-align: center;

//   @media screen and (min-width: 52em) {
//     width: 80%;
//     text-align: left;
//     margin: 40% auto 0 auto;
//   }
// `;
// const H3 = Styled.h3`
// font-size: 18px;
// font-weight: 600;
// color: #4f4f4f;
// `;

// const H2 = Styled.h2`
// font-size: 20px;
// font-weight: 600;
// margin: 2rem 0;
// `;

// const Span = Styled.span`
// width: 31%;
// margin: 1rem 0 0 0;
// font-weight: 600;
// font-size: 14px;
// line-height: 17px;
// color: #363435;
// border-bottom: 1px solid #363435;
// text-align: center;
// padding: 0 0 0.5rem 0;
// ${mobile({
//         alignItems: "center", JustifyContent:"center", display:"flex",    margin: "0.1rem 0 3px 98px"
//     })} 
// `;

// const RightSide = Styled.div`
//   width: 100%;
//   order: 1;
  
// `;

// const Image = Styled.img`
// ${mobile({
//         width:"100%"
//     })}
// `;

const Section = Styled.section`
width: 100%;
height:100%;
padding: 1rem 0rem;
`;

const ColumnLeft = Styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '2' : '1')};


p{
    margin-bottom:2rem;
}

`;


const ColumnRight = Styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px){
        order: ${({reverse}) => (reverse ? '1' : '2')};
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover; 

        @media only screen and (max-width: 768px){
        width: 90%;
        height: 90%;
        }
    }
`;


const Bridalls = () => {
  return (
   <Section>
    <Container>
        <ColumnLeft reverse>
            <h1></h1>
            <p>
                With our Bridal Collection,  A meeting session with our creative director in person or digitally to design your dream wedding dress is a must!  Depending on the complexity of the dress design, it can take between 4 to 6 months to make one of our custom bridal gowns. We offer both in person and virtual options for consultations.  
                Register for a consultation with the button below.
            </p>
            <Button to="/">Book Appointment</Button>
        </ColumnLeft>

        <ColumnRight reverse>
            <img src={rectangle} alt="" />
        </ColumnRight>    
    </Container>
   </Section>
  );
}

export default Bridalls