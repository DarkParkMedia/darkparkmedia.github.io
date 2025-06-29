import styled from "styled-components";

export const Page = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  font-family: ${({ theme }) => theme.fonts.body};
`;
