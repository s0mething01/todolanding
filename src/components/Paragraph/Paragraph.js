import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.m};
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
  line-height: 25px;
  letter-spacing: -0.5px;
`;

export default Paragraph;
