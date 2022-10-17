import styled from "styled-components";
export default function Card(props) {
  return (
    <Wrapper>
      <div className="box btn_shadow">
        <div className="title_content d-flex">
            <div className="title">
                <h2>{props.title}</h2>
                <span>{props.year}</span>
            </div>
            <div className="rate">
                <button className="btn_shadow">
                    {props.rate}
                </button>
            </div>
        </div>
        <p>{props.desc}</p>
        </div>  
    </Wrapper>
  )
}
const Wrapper=styled.div `


`;