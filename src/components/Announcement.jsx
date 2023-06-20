import Styled from "styled-components"

const Container = Styled.div`
    height:30px;
    background: radial-gradient(
      111.36% 111.36% at -0.59% -1.7%,
      #e2aa50 0%,
      #a86728 100%
    );
    color: #fff;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 14px;
    font-weight: 500;    
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders over $50
    </Container>
  )
}

export default Announcement