import styled from "styled-components";
export default function Features() {
  return (
    <Wrapper>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>Features</h4>
            <h1>what I do</h1>
          </div>
          <div className="content grid">
            <div className="box btn_shadow">
              <img src="" alt="" />
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur qui ea nobis odio aperiam autem, reiciendis earum
                repudiandae sit similique ratione unde rem illum impedit. Ex
                fugiat itaque temporibus nesciunt.
              </p>

              <a href="">
                {" "}
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
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
   font-size:30px;
   margin-top :20px;
  }
`;
