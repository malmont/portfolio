import styled from "styled-components";
import Card from "../Features/Card";
import data from "../Features/FeaturesAPI";



export default function Features() {

  
  return (
    <Wrapper>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>Features</h4>
            <h1>Domaines de compétences</h1>
          </div>
          <div className="content grid">

            
            {data.map((val,index)=>{
         
                return  <Card key={index} image={val.image} title = {val.title} desc = {val.desc} outils={val.outils}/>
           
            })}
        
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`

 .features .box {
  padding: 50px;
}
.features .box h2 {
  margin: 20px 0 20px 0;
}
.features .box p {
  word-spacing: 2px;
  transition: 0.5s;
}
.features .box i {
  font-size: 30px;
  margin-top: 20px;
  transition: 0.5s;
  opacity: 0;
}
.features .box:hover p {
  color: white;
}
.features .box:hover i {
  color: white;
  opacity: 1;
}
`;
