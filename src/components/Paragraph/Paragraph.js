import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.primary)};
  font-size: ${({ theme }) => theme.font.M};
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
  line-height: ${({ theme }) => theme.font.lineHeightM};
  letter-spacing: -0.5px;
  @media (max-width: 540px) {
    text-align: center;
  }
`;

export default Paragraph;
