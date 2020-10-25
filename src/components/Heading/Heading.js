import styled from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.L};
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

export default Heading;
