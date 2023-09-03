"use client";
import styled from "styled-components";

export default function Register() {
  return (
    <Homestyle>
      <Rectangle>
        <div className="title">Crear cuenta</div>
        <Inputs className="inputs">
          <div>
            <label htmlFor="">NOMBRE</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">MOSTRAR NOMBRE</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">NOMBRE DE USUARIO</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">CONTRASEÑA</label>
            <input type="text" />
          </div>
          <span>
            <div className="born">
              <div className="date_inputs">
                <div className="title">
                  <label htmlFor="">FECHA DE NACIMIENTO</label>
                </div>
                <div className="inputs">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
            </div>
          </span>
        </Inputs>
        <div className="">3</div>
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
  display: grid;
  grid-template-rows: 20% 50% 20%;

  background-color: rgb(49, 51, 56);
  height: 750px;
  width: 500px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgb(49, 51, 56) 0px 0px 5px 2px;
  .title {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
  &div {
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: flex;
    justify-content: center;
    .born {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 70%;
      .date_inputs {
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: space-between;
        .title {
          margin-bottom: 4px;
          label {
            width: 100%;
          }
        }

        .inputs {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          input {
            height: 30px;
            width: 60px;
          }
        }
      }
    }
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      padding: 5px;
      width: 70%;
      border-radius: 4px;
      background-color: rgb(30, 31, 34);
    }

    label {
      font-size: 13px;
      width: 70%;
      color: rgb(178, 183, 189);
    }
  }
`;
