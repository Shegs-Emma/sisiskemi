import React from 'react';
import bimpe from '../images/bimpe.svg';
import folake from '../images/folake.svg';
import chisom from '../images/chisom.svg';
import aisha from '../images/aisha.svg';
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

  border-bottom: ${({ price }) => (price ? '.5px solid #4f4f4f' : '')};
  padding-bottom: ${({ price }) => (price ? '7rem' : '')};
`;

const SectionHeader = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  margin: 2rem auto 5rem auto;

  @media screen and (min-width: 52em) {
    width: 20%;
    width: ${({ newin }) => (newin ? '29%' : '')};
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

const Section = Styled.div`
  padding-bottom: 0.2rem;
  border-bottom: ${({ active }) => (active ? '1.5px solid #4f4f4f' : '')};
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
      collection ? 'repeat(3, 1fr)' : ''};
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

const rtw = () => {
  return (
    <Container>
      {/* <SectionHeader>
            <H1 newin>RECENTLY VIEWED</H1>
        </SectionHeader> */}

      <SectionsArea price>
        <SectionImages>
          <CaptionImages>
            <Image src={folake} alt='section-img' />
            <Caption>
              <P>FOLAKE</P>
              <P price>N35,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={chisom} alt='section-img' />
            <Caption>
              <P>CHISOM</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={aisha} alt='section-img' />
            <Caption>
              <P>AISHA</P>
              <P price>N68,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={bimpe} alt='section-img' />
            <Caption>
              <P>BIMPE</P>
              <P price>N40,000</P>
            </Caption>
          </CaptionImages>
        </SectionImages>
      </SectionsArea>
    </Container>
  );
};

export default rtw;
