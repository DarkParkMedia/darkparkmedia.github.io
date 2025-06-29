import styled from "styled-components";
export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.mutedText};
`;
