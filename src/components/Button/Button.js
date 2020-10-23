import styled from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, isDark }) => (isDark ? theme.color.tetriary : theme.colors.primary)};
  font-size: ${({ theme }) => theme.font.m};
  border: none;
  padding: 12px 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: ${({ theme }) => theme.font.bold};
  margin: ${({ isCentered }) => (isCentered ? '0 auto' : '0')};
`;

export default Button;
