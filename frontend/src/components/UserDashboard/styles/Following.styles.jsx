import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 2rem;
  border-bottom: 1px solid lightgray;
  .authorInf {
    display: flex;
    margin-bottom: 1rem;
    img {
      width: 30px;
      height: 30px;
      background-color: lightblue;
      border-radius: 50%;
      margin-right: 1rem;
    }
    .fullName {
      margin-right: 1rem;
    }
    .createdDate {
      color: lightgrey;
    }
  }

  .articleInf {
    display: flex;
    justify-content: space-between;
    .part1 {
      .title{
        font-weight: bold;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }
      margin-right: 2rem;
      .specialDetail {
        display: flex;
        justify-content: space-between;
        & > * {
          &:first-child {
            display: flex;
            font-size: 0.9rem;
            margin: 2rem 0;
            .tag {
              background-color: #e6e6e6;
              border-radius: 2rem;
              padding: 2px 10px;
              margin-right: 1rem;
              cursor: pointer;
            }
            .readTime {
              margin-right: 1rem;
              color: gray;
            }
            .desc {
              color: gray;
            }
          }
        }
      }
      .icons {
        display: flex;
        align-items: center;
        padding-left: 0 1rem;
        filter: invert(48%) sepia(13%);
        &:hover {
          filter: none;
        }
        & > * {
          width: 22px;
          height: 22px;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
    .part2 {
      img {
        width: 110px;
        height: 110px;
      }
    }
  }
`;
