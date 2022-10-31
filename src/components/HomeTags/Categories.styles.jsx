import styled from "styled-components";

export const CategoriesStyles = styled.div`
  border-bottom: 1px solid grey;
  margin: 0 3rem;

  .topics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  h6 {
    margin: 2rem 0;
    font-weight: bold;
  }

  @media only screen and (max-width: 750px) {
    border-bottom: 1px solid grey;
    /* margin: 0 3rem; */
    margin: 0;
    /* padding: 0; */
    /* width: 100%; */
    text-align: center;

    .topics {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    h6 {
      margin: 2rem 0;
      font-weight: bold;
    }
  }
`;
