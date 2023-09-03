"use client";

import styled from "styled-components";
import Link from "next/link";

export default function Login() {
  return (
    <Homestyle>
      <Rectangle>
        <SectionLeft>
          <div className="welcome_user">
            <p className="welcome_p">¡Hola de nuevo!</p>
            <p>¡Nos alegramos mucho volver a verte!</p>
            <p></p>
          </div>
          <form action="" className="login_form">
            <div>
              <p>CORRERO ELECTRONICO O NUMERO DE TELEFONO</p>
              <input type="text" />
            </div>
            <div className="input_password">
              <p>CONTRASEÑA</p>
              <input type="password" />
              <p className="forgotten_password">¿Has olvidado tu contraseña?</p>
            </div>
          </form>
          <div className="login">
            <button className="btn_login">Iniciar sesion</button>
            <div>
              <p className="need_account">
                ¿Necesitas una cuenta?
                <p className="register">
                  <Link href={"/register"}>Registrarse</Link>
                </p>
              </p>
            </div>
          </div>
        </SectionLeft>
        <SectionRight>
          <div className="login_qr"></div>
          <div className="descrip">
            <p className="QR">
              Iniciar sesión con<div>codigo QR</div>
            </p>
            <p className="message_mobile">
              Escanealo con la
              <strong> aplicacion de movil de Discord </strong>para iniciar sesión de forma instantánea.
            </p>
          </div>
        </SectionRight>
      </Rectangle>
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
  height: 400px;
  width: 800px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgb(49, 51, 56) 0px 0px 5px 2px;
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  @media screen and (max-width: 832px) {
    width: 400px;
    grid-template-columns: 1fr;
  }
`;

const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 1em;

  .welcome_user {
    .welcome_p {
      color: white;
      font-size: 1.4em;
      font-weight: 500;
      margin-bottom: 8px;
    }
    p {
      color: #a6acb2;
    }
    text-align: center;
  }

  .login_form {
    display: grid;
    grid-template-rows: 1fr 1fr;
    input {
      background-color: #1e1f22;
      border-radius: 3px;
      height: 38px;
      width: 370px;
      border-radius: 0, 2px;
      margin-top: 5px;
      color: white;
      padding: 2px;
    }
    p {
      font-size: 12px;
      color: #b3b8bf;
    }
  }

  .input_password {
    .forgotten_password {
      color: #0e87c6;
      padding-top: 5px;
      cursor: pointer;
    }
    .forgotten_password:hover {
      text-decoration: underline;
    }
  }

  .login {
    button {
      background-color: #5663ee;
      height: 45px;
      width: 369px;
      border-radius: 5px;
      color: white;
      transition: 250ms;
    }

    button:hover {
      background-color: #4752c4;
      transition: 250ms;
    }
    div {
      .need_account {
        padding-top: 4px;
        color: #a6acb2;
      }
      p {
        display: flex;
        font-size: 12px;
      }
      .register {
        margin-left: 5px;
        cursor: pointer;
        color: #0e87c6;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const SectionRight = styled.section`
  background-position: 40% 40%;

  display: grid;
  grid-template-rows: 1fr 0.7fr;
  .login_qr {
    background-image: url("https://delta.ffvl.fr/sites/delta.ffvl.fr/files/QR%20code%20Discord%20Play%20Store.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .descrip {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    font-size: 14px;
    justify-content: flex-start;
    align-items: center;
    .QR {
      font-weight: 700;
      font-size: 20px;
    }
    .message_mobile {
      width: 68%;
      color: #a1a6ac;
      strong {
        color: #b5bac1;
        font-weight: 700;
      }
    }

    font-weight: 300;
  }

  @media screen and (max-width: 832px) {
    display: none;
  }
`;
