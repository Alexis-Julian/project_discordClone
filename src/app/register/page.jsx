"use client";
import styled from "styled-components";

export default function Register() {
  return (
    <Homestyle>
      <Rectangle></Rectangle>
    </Homestyle>
  );
}
const Homestyle = styled.div`
  background-image: url("https://images.alphacoders.com/129/1291249.png");
  background-size: 100%;
  background-position: 40% 0px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center; //Vertcial alignment
  justify-content: center; //Horizontal alignment
`;

const Rectangle = styled.div`
  background-color: rgb(49, 51, 56);
  height: 750px;
  width: 500px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgb(49, 51, 56) 0px 0px 5px 2px;
  display: grid;
  grid-template-columns: 1fr 0.6fr;
`;
