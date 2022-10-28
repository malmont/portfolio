import styled from "styled-components";
import React, { useState } from "react";
export default function Card(props) {
  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
  };
  return (
    <Wrapper>
      <div className="box btn_shadow ">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="d_flex">
          <div>
            
            <span className="titreDesc">{props.category}</span>
            <button className="btn_shadow typeApp ">
            <i className="fab fa-facebook-f"></i>
            </button>
          </div>

          <div>
            <button className="btn_shadow typeApp ">
              <i class="fas fa-mobile  "></i>
            </button>
            <span>{props.description}</span>
          </div>
        </div>

        <div className="center">
          <div className="title">
            <h2 onClick={toogleModal}>{props.title}</h2>
            <a href="#popup" className="arrow">
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="prop">
          <div className="techno ">
            <h3>Technologie : </h3>
            {props.commentaire}
          </div>
          <div className="button ">
            <button className="btn_shadow ">
              Ghitub <i class="far fa-thumbs-up"></i>
            </button>
            <a href="https://easymakemoney.fr/">
              <button href="https://easymakemoney.fr/" className="btn_shadow">
                Voir projet
                <i class="fas fa-chevron-right"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  button {
    margin: 10px;
  }
  span {
    color: blueviolet;
  }
  .typeApp {
    display: inline;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .techno {
    margin: -10px 10px 10px 0px;
  }
  .center {
    text-align: center;
  }
  .prop {
    margin-left: 10px;
  }
  .titreDesc {
    margin-top: 16px;
  }
`;
