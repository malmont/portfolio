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
            
           
        </div>
        <p>{props.rate}</p>
        <p>{props.desc2}</p>
        <p>{props.desc}</p>
        </div>  
    </Wrapper>
  )
}
const Wrapper=styled.div `
button{
  color:#04989e;
}

`;