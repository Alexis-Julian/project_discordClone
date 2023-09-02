import styled from "styled-components";
import Image from "next/image";

export default function Login() {
  return (
    <Homestyle>
      <Rectangle>
        <SectionLeft>
          <div className="welcome_user">
            <p className="welcome_p">!Hola de nuevo!</p>
            <p>!Nos alegramos mucho volver a verte!</p>
            <p></p>
          </div>
          <form action="" className="login_form">
            <div>
              <p>CORRERO ELECTRONICO O NUMERO DE TELEFONO</p>
              <input type="text" />
            </div>
            <div className="input_password">
              <p>CONTRASEÑA</p>
              <input type="text" />
              <p className="forgotten_password">¿Has olvidado tu contraseña?</p>
            </div>
          </form>
          <div className="login">
            <button className="btn_login">Iniciar sesion</button>
            <div>
              <p className="need_account">
                Necesitas una cuenta?<p className="register ">Registrarse</p>
              </p>
            </div>
          </div>
        </SectionLeft>
        <SectionRight>aaaa</SectionRight>
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
  grid-template-columns: 1fr 0.5fr;
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
      font-size: 1.2em;
      font-weight: 500;
    }
    p {
      color: #5f6267;
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
      }
      p {
        display: flex;
        font-size: 12px;
      }
      .register {
        margin-left: 5px;
        cursor: pointer;
        color: #0e87c6;
      }
    }
  }
`;

const SectionRight = styled.section`
  @media screen and (max-width: 832px) {
  }
`;
