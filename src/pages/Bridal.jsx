import Styled from 'styled-components';
import Announcement from '../components/Announcement';
import Bridalls from '../components/Bridalls';
// import Footer from "../components/Footer";
import Kbrides from '../components/Kbrides';
// import Navbar from "../components/Navbar";
// import NavBarse from "../components/Navbar";
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import RecentlyViewed from '../components/RecentlyViewed';
import { mobile } from '../responsive';

const Container = Styled.div`

`;

const Title = Styled.h1`
    margin-top: 1.2em;
    margin-bottom: 0rem;
    text-align:center;
`;

const Titletwo = Styled.h1`
    margin: 2rem 0;
    text-align:center;
`;

const Option = Styled.option``;

const NewIn = () => {
  return (
    <Container>
      {/* <NavBarse /> */}
      <Title>Let us bring your dream dress to reality</Title>
      <Bridalls />
      <Titletwo>Sisi Kemi Brides</Titletwo>
      <Kbrides />
      {/* <Footer /> */}
    </Container>
  );
};

export default NewIn;
