import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  /* background-color: red; */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
