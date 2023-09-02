"use client";
import Image from "next/image";
import styled from "styled-components";
import Login from "./page/Login";
export default function Home() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
