import styled from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.secondary)};
  font-size: ${({ theme }) => theme.font.L};
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
  font-weight: ${({ theme }) => theme.font.bold};
  @media (max-width: 540px) {
    text-align: center;
  }
`;

export default Heading;
