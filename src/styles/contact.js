import styled from 'styled-components';

const ContactWrapper = styled.div`
  background: white;
  color: white;
  letter-spacing: 0.2rem;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;

  svg {
    display: block;
    position: absolute;
    margin-top: 600px;
  }

  .contact-info {
    position: relative;
    text-align: center;
    margin: 0 9rem;
    img {
      width: 35rem;
    }
    p {
      margin-top: -100px;
      font-size: 1.5rem;
      max-width: 25rem;
      min-width: 10rem;
      margin: 4rem auto;
    }
  }
  @media screen and (max-width: 991px) {
    min-height: 60vh;
    .contact-info {
      top: -60px;
      margin: 0 5rem;
      ul {
        display: none;
      }
      p {
        margin-top: 60px;
        font-size: 1.2rem;
      }
      img {
        width: 20rem;
      }
    }
    .contact-svg {
      display: none;
    }
  }
`;

export {ContactWrapper};