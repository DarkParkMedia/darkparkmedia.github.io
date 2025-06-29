import styled from "styled-components";

export const Section = styled.section<{ bg?: string }>`
  padding: 4rem 2rem;
  background: ${({ bg, theme }) => bg || theme.colors.surfaceDarker};
  text-align: center;

  h2,
  h1 {
    margin-bottom: 1rem;
  }

  p,
  li {
    max-width: 600px;
    margin: 0.5rem auto;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
