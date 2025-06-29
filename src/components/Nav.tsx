import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.surfaceDark};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

  a {
    margin-left: 1.5rem;
    color: ${({ theme }) => theme.colors.mutedText};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
