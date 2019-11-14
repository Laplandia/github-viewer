import styled from 'styled-components';

export const Header = styled.div`
    padding: 20px;
`;

export const Body = styled.div`
    width: 80%;
    margin-left: 10%;
    @media (max-width: 768px) {
      width: 90%;
      margin-left: 5%;
    }
    @media (min-width: 1200px) {
      width: 60%;
      margin-left: 20%;
     }
`;
