"use client";
import styled from "styled-components";
import Link from "next/link";
/* import { useRouter } from "next/router";
 */

export default function Home() {
  /* const router = useRouter();
  console.log(router); */
  return (
    <div>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
    </div>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

/* 
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    
 */
/* SE VA A COMER */
