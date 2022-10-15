import styled from "styled-components";
export default function Card(props) {
  return (
    <Wrapper>
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>
         {props.desc}
        </p>

        <a href="">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
