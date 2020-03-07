import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const ActionsDiv = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;

  .buttons {
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
      width: 25%;
      background-color: #747474;
      text-align: center;
      color: white;
      border: none;

      :hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .w-arrow {
      margin-right: 10%;
    }

    .e-arrow {
      margin-left: 10%;
    }
  }

  .arrows {
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .ns-arrow {
    margin: 5% 5% 5% 5%;
  }
`;

function Actions() {
  return (
    <ActionsDiv>
      <div className="buttons">
        <button>Sell</button>
        <Icon className="arrows ns-arrow" name="arrow up" size="huge" />
        <button>Pickup</button>
      </div>

      <div>
        <Icon className="arrows w-arrow" name="arrow left" size="huge" />
        <Icon className="arrows e-arrow" name="arrow right" size="huge" />
      </div>

      <Icon className="arrows ns-arrow" name="arrow down" size="huge" />
    </ActionsDiv>
  );
}

export default Actions;
