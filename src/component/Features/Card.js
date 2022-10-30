import styled from "styled-components";
export default function Card(props) {
  return (
    <Wrapper>
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>
        <span>COMPÉTENCES :</span>  
        <br />
        {props.desc}
        </p>
        <p>
          <br />
        <span>OUTILS :</span>  
        <br />
        {props.outils}
        </p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
img{
  width:50px;
}
span{
  color:blueviolet;
}
div{
  height:400px;
}
@media (max-width: 1250px) {
  div{
  height:450px;
}
}


@media (max-width: 820px) {
  div{
  height:450px;
}
}
@media (max-width: 691px) {
  div{
  height:400px;
}
}
`;
