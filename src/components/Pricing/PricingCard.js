import styled from 'styled-components';
import getGradient from 'utils/getGradient';

const PricingCard = styled.article`
  background-image: ${({ theme }) => getGradient(theme, 'primary')};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 8rem;
  font-size: ${({ theme }) => theme.font.L};
  span {
    display: block;
    font-size: 10rem;
    font-weight: ${({ theme }) => theme.font.bold};
  }
`;

export default PricingCard;
