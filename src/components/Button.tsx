import styled from "styled-components";
export const Button = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;
