import Styled from "styled-components";
import { mobile } from "../responsive";
import rectangle4 from "../images/Rectangle12.png";
import rectangle5 from "../images/Rectangle13.png";
import rectangle from "../images/Rectangle56.png";
import rectangle1 from "../images/Rectangle57.png";
import rectangle2 from "../images/Rectangle58.png";
import rectangle3 from "../images/Rectangle59.png";



const Section = Styled.section`
/* width: 100%;
height:100%;
padding: 1rem 0rem; */
min-height: 100vh;
    display:         flex;
    justify-content: center;
    align-items:     center;
    background: #fff;
    padding: 20px;
    flex-direction: column;    

    .ar-l-text{
        margin: 20px 0;
        font-weight: 300;
    }
`;


// const Container = Styled.div`        
//     padding: 1rem calc((100vw - 1300px) / 2);
//     display: grid; 
//     grid-template-columns: 1fr 1fr;
//     box-shadow: 0px 0px 15px -5px;

//     margin:0 2rem;

    
//     @media only screen and (max-width: 768px){
//         grid-template-columns: 1fr;
        
//         /* overflow: hidden; */
//     }
// `;


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

const Article = Styled.article`
   
   display: grid;
        grid-template-columns: 500px minmax(300px, 445px);
        max-width: 100vw;
        border-radius: 10px;
        box-shadow: 6px 6px 5px hsla(0, 0%, 0%, 0.02),
        25px 25px 20px hsla(0, 0%, 0%, 0.03),
        100px 100px 80px hsla(0, 0%, 0%, 0.05);
        justify-content: center;
        align-items: center;
        margin: 2rem 0;

    @media only screen and (max-width: 768px){
        grid-template-columns: 1fr;
        max-width: 294px;
        overflow: hidden;     
    }

    .article-card{
        
    }
    
    .img-box{
        border-radius: 10px 0 0 10px;
        overflow: hidden;

        @media only screen and (max-width: 768px){
            border-radius: 0;  
            height: 180px;
        }
    }

    .article-banner{
        width:  100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
        transition: all 0.5s ease;
        @media only screen and (max-width: 768px){
            object-position: top;
        }
    }

    .article-content{
        background: var(--white);
        padding: 32px 40px;
        border-radius: 0 10px 10px 0;

        @media only screen and (max-width: 768px){
            border-radius: 0; 
            padding: 30px 28px 20px;  
        }
    }

    .article-title {
        font-size: 20px;
        color: var(--very-dark-grayish-blue);
        margin-bottom: 12px;
        line-height: 1.4;

        @media only screen and (max-width: 768px){
          font-size: 15px; 
        }
    }

.article-text {
        color:;
        font-size: 13px;
        line-height: 1.5;
        margin-bottom: 18px;
        @media only screen and (max-width: 768px){
            margin-bottom: 30px; 
        }
}

`;



const Span = Styled.span`
width: 31%;
margin: 1rem 0 0 0;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color:  #FDCB2A;
border-bottom: 1px solid  #FDCB2A;
text-align: center;
padding: 0 0 0.5rem 0;


@media only screen and (max-width: 768px){
    align-Items: "center", Justify-Content:"center", display:"flex",    margin: "0.1rem 0 3px 98px"
}
`;



const Kbrides = () => {
  return (
   <Section>
    <Article className="article-card">
        <div className="img-box">
            <img src={rectangle1} alt="" className="article-banner" />
        </div>

        <div className="article-content">
            <h3 className="article-title">
                Caroline Danjuma
            </h3>            

            <p className="article-text">
            With our Bridal Collection, bespoke bridal, A meeting session with our creative director in person or digitally to design your dream wedding dress is a must!  Depending on the complexity of the dress design, it can take between 4 to 6 months to make one of our custom bridal gowns. We offer both in person and virtual options for consultations.  
            Register for a consultation with the button below.
            </p>
            <Span>Read her story</Span>
        </div>
    </Article>
    <Article className="article-card">
        <div className="img-box">
            <img src={rectangle5} alt="" className="article-banner" />
        </div>

        <div className="article-content">
            <h3 className="article-title">
                Caroline Danjuma
            </h3>            

            <p className="article-text">
            With our Bridal Collection, bespoke bridal, A meeting session with our creative director in person or digitally to design your dream wedding dress is a must!  Depending on the complexity of the dress design, it can take between 4 to 6 months to make one of our custom bridal gowns. We offer both in person and virtual options for consultations.  
            Register for a consultation with the button below.
            </p>
            <Span>Read her story</Span>
        </div>
    </Article>
    <Article className="article-card">
        <div className="img-box">
            <img src={rectangle3} alt="" className="article-banner" />
        </div>

        <div className="article-content">
            <h3 className="article-title">
                Caroline Danjuma
            </h3>            

            <p className="article-text">
            With our Bridal Collection, bespoke bridal, A meeting session with our creative director in person or digitally to design your dream wedding dress is a must!  Depending on the complexity of the dress design, it can take between 4 to 6 months to make one of our custom bridal gowns. We offer both in person and virtual options for consultations.  
            Register for a consultation with the button below.
            </p>
            <Span>Read her story</Span>
        </div>
    </Article>
    <Article className="article-card">
        <div className="img-box">
            <img src={rectangle4} alt="" className="article-banner" />
        </div>

        <div className="article-content">
            <h3 className="article-title">
                Caroline Danjuma
            </h3>            

            <p className="article-text">
            With our Bridal Collection, bespoke bridal, A meeting session with our creative director in person or digitally to design your dream wedding dress is a must!  Depending on the complexity of the dress design, it can take between 4 to 6 months to make one of our custom bridal gowns. We offer both in person and virtual options for consultations.  
            Register for a consultation with the button below.
            </p>
            <Span>Read her story</Span>
        </div>
    </Article>
    <Article className="article-card">
        <div className="img-box">
            <img src={rectangle2} alt="" className="article-banner" />
        </div>

        <div className="article-content">
            <h3 className="article-title">
                Caroline Danjuma
            </h3>            

            <p className="article-text">
            With our Bridal Collection, bespoke bridal, A meeting session with our creative director in person or digitally to design your dream wedding dress is a must!  Depending on the complexity of the dress design, it can take between 4 to 6 months to make one of our custom bridal gowns. We offer both in person and virtual options for consultations.  
            Register for a consultation with the button below.
            </p>
            <Span>Read her story</Span>
        </div>
    </Article>
    <Article className="article-card">
        <div className="img-box">
            <img src={rectangle4} alt="" className="article-banner" />
        </div>

        <div className="article-content">
            <h3 className="article-title">
                Caroline Danjuma
            </h3>            

            <p className="article-text">
            With our Bridal Collection, bespoke bridal, A meeting session with our creative director in person or digitally to design your dream wedding dress is a must!  Depending on the complexity of the dress design, it can take between 4 to 6 months to make one of our custom bridal gowns. We offer both in person and virtual options for consultations.  
            Register for a consultation with the button below.
            </p>
            <Span>Read her story</Span>
        </div>
    </Article>
    <div className="article-l-text">
        <h4 className="ar-l-text">
        For our ready to wear Collection, please visit <Span>our Ready to wear page.</Span>
        </h4>
        <h4 className="ar-l-text">
        For our Couture Collection, please visit  <Span>our Couture page.</Span>
        </h4>
    </div>
   </Section>
  );
}

export default Kbrides