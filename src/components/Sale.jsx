import React from 'react';
// import bimpe from "../img/bimpe.svg";
// import folake from "../img/folake.svg";
// import chisom from "../img/chisom.svg";
// import aisha from "../img/aisha.svg";
import sectionImage from "../images/section.svg";
import Styled from 'styled-components';

const Container = Styled.div`
width: 100%;
display: flex;
flex-direction: column;
flex:1;
`;


const Image = Styled.img``;
const H1 = Styled.h1``;
const P = Styled.p`
    margin: 10px 0px;
    font-weight:600;
`;


const SectionsArea = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-bottom: ${({ price }) => (price ? ".5px solid #4f4f4f" : "")};
  padding-bottom: ${({ price }) => (price ? "7rem" : "")};
`;

const SectionHeader = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  margin: 2rem auto 5rem auto;

  @media screen and (min-width: 52em) {
    width: 20%;
    width: ${({ newin }) => (newin ? "29%" : "")};
  }
`;

const SectionHeaderProduct = Styled(SectionHeader)`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 4rem auto 5rem auto;

  @media screen and (min-width: 52em) {
    width: 20%;
  }
`;

const SaleSpace = Styled.div`
  position: absolute;
  z-index: 10;
  margin: 0.7rem 0 0 6rem;
  width: 59px;
  height: 23px;
  text-align: center;
  background: #4f4f4f;
  border-radius: 1px;

  @media screen and (min-width: 52em) {
    margin: 0.7rem 0 0 13rem;
  }
`;

const Section = Styled.div`
  padding-bottom: 0.2rem;
  border-bottom: ${({ active }) => (active ? "1.5px solid #4f4f4f" : "")};
`;

const SectionImages = Styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 1rem;
  row-gap: 3.5rem;
  padding: 0 1.5rem;

  @media screen and (min-width: 52em) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: ${({ collection }) =>
      collection ? "repeat(3, 1fr)" : ""};
  }
`;

const CaptionImages = Styled.div`
  display: flex;
  flex-direction: column;
`;

const Caption = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Span = Styled.span`
    font-weight: 500;
    font-size: 14px;
    font-size: ${({ sale }) => (sale ? "12px" : "")};
    line-height: 17px;
    color: #363435;
    border-bottom: 1px solid #363435;
    border-bottom: ${({ sale }) => sale ? "none" : ""};
    width: 50%;

    text-align: center;
  
    padding: 0 0 1.9rem 0;

    margin: 1rem auto 0 auto;
    
    border-radius: 5px;

    margin: ${({ sale }) => (sale ? "0 auto" : "")};

    color: ${({ sale }) => (sale ? "#FAFAFA" : "")};

    width: ${({ sale }) => (sale ? "100%" : "")};

@media screen and (min-width: 52em) {
    width: 31%;
    margin: 1rem 0 0 0;   
  }

`;

const Sale = () => {
  return (
    <Container>
        {/* <SectionHeader>
            <H1 newin>RECENTLY VIEWED</H1>
        </SectionHeader> */}

<SectionsArea price>
        <SectionImages>
          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>
        </SectionImages>
      </SectionsArea>

    </Container>
  )
}

export default Sale