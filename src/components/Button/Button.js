import styled from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, isDark }) => (isDark ? theme.color.tetriary : theme.colors.primary)};
  font-size: ${({ theme }) => theme.font.M};
  border: none;
  padding: 1.2rem 3rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: ${({ theme }) => theme.font.bold};
  margin: ${({ isCentered }) => (isCentered ? '0 auto' : '0')};
`;

export default Button;
