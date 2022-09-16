import styled from "styled-components";

export default function ItemModal({ image, itemName, value, cancel }) {
  return (
    <Wrapper>
      <ion-icon name="close-circle" onClick={cancel}></ion-icon>
      <Box>
        <p>Modal</p>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  height: 710px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  ion-icon {
    font-size: 36px;
    color: #ffffff;
  }
`;

const Box = styled.div`
  width: 248px;
  height: 210px;
  background: #ffffff;
  border-radius: 12px;
  p {
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 33px 22px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;
