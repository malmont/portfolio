import styled from "styled-components";
import Card from "./Card";
import ResumeApi from "./ResumeApi";

export default function Resume() {
  return (
    <Wrapper>
         <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>15 années d'expérience IT</h4>
            <h1>Résumé</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2001-2023</h4>
                <h1>Formation</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} desc2={val.desc2} />
                  }
                })}
              </div>
            </div>
            <div className='right'>
              <div className='heading'>
                <h4>2001-2023</h4>
                <h1>Expérience professionnelle</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc}  desc2={val.desc2} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .Resume .heading h1 {
  font-size: 40px;
}
.Resume .content {
  max-width: 85%;
  margin: auto;
}
.Resume .box {
  padding: 40px;
}
.Resume hr {
  margin: 30px 0 30px 0;
  border: 1px solid #e3e9ed;
  background-color: #e3e9ed;
}
.Resume .rate .btn_shadow {
  color: #04989e;
  padding: 15px 30px;
  font-weight: bold;
  transition: 0.5s;
}
.Resume p {
  font-size: 18px;
  transition: 0.5s;
}
.Resume .box {
  margin-bottom: 40px;
  position: relative;
}
.Resume .btn_shadow{

}
.Resume .btn_shadow:hover {
  transform: translate(0);
}

.Resume .box:hover .btn_shadow {
  background: #2a2a2e;
  box-shadow: none;
  color: white;
}
.Resume .box:hover p {
  color: white;
}
.Resume .content-section {
  position: relative;
}
.Resume .left {
  position: relative;
}
.Resume .right {
  position: relative;
}
.Resume .left::after {
  content: "";
  position: absolute;
  top: 10%;
  left: 0;
  height: 92vh;
  width: 5px;
  background: #04989e;
  z-index: -2;
}
.Resume .right::after {
  content: "";
  position: absolute;
  top: 10%;
  left: 0;
  height: 189vh;
  width: 5px;
  background: #04989e;
  z-index: -2;
}
.Resume .box::after {
  content: "";
  position: absolute;
  top: 13%;
  left: -8%;
  height: 5px;
  width: 50px;
  background: #04989e;
}
.Resume .box::before {
  content: "";
  position: absolute;
  top: 11%;
  left: -10%;
  height: 10px;
  width: 10px;
  background: #fff;
  border: 5px solid #2a2a2e;
  border-radius: 50%;
  z-index: 5;
  transition: 0.5s;
}
.Resume .box:hover.box:before {
  background: #04989e;
}
@media (max-width: 768px) {
  .Resume .d_flex {
    flex-direction: column;
  }
  .Resume .left::after {
    top: 14%;
    height: 105vh;
  }
}
`;
