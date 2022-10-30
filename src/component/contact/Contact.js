import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import contact1 from "./contact1.png";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    name:"",
    lastname:""
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        email: "",
        message: "",
        name:"",
        lastname:""
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mrgdggww",
      data: inputs,
    })
      .then((Response) => {
        handleServerResponse(true, "Merci, votre méssage à été envoyé");
      })
      .catch((error) => {
        handleServerResponse(false, error.Response.data.error);
      });
  };

  return (
    <Wrapper>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Prendre contact avec moi</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Almont michel</h1>
                  <p>Développeur fullStack</p>
                  <p>Je suis disponible pour un recrutement immédiat.</p> <br />
                  <p>tel: (786) 628-7926</p>
                  <p>Email: amichel.almont@gmail.com</p> <br />
                  <span>Contactez moi</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={handleOnSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>Nom</span>
                    <input
                      id="name"
                      type="text"
                      name="_name"
                      onChange={handleOnChange}
                      required
                      value={inputs.name}
                    />
                  </div>
                  <div className="input row">
                    <span>Prenom</span>
                    <input
                      id="lastname"
                      type="text"
                      name="_prename"
                      onChange={handleOnChange}
                      required
                      value={inputs.lastname}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>Email </span>
                  <input
                     id="email"
                     type="email"
                     name="_replyto"
                     onChange={handleOnChange}
                     required
                     value={inputs.email}
                  />
                </div>
                {/* <div className='input'>
                  <span>Sujet </span>
                  <input type='text' name='subject' value={data.subject}  onChange={handleOnChange}/>
                </div> */}
                <div className="input">
                  <span>Message </span>
                  <textarea
                    cols="30"
                    rows="10"
                    id="message"
                    name="message"
                    onChange={handleOnChange}
                    required
                    value={inputs.message}
                  ></textarea>
                </div>
                <button type="submit" className="btn_shadow" disabled={status.submitting}>
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </button>
              </form>
              {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .Contact .left {
    width: 36%;
  }
  .Contact .right {
    width: 60%;
  }
  .Contact .box {
    padding: 30px;
  }
  .Contact .details h1 {
    margin: 20px 0 20px 0;
    font-size: 35px;
  }
  .Contact .details p {
    font-size: 17px;
  }
  .Contact .button {
    margin-top: 20px;
  }
  .Contact button {
    margin-right: 20px;
  }

  .Contact .right {
    padding: 35px;
  }
  .Contact .input span {
    font-size: 13px;
  }
  .Contact input {
    margin-top: 10px;
  }
  .Contact .right button {
    width: 100%;
    color: #04989e;
  }
  .Contact .right button:hover {
    color: white;
  }
  .Contact .right button i {
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    .Contact .d_flex {
      flex-direction: column;
    }
    .Contact .left,
    .Contact .right {
      width: 100%;
      margin-top: 50px;
    }
  }
`;
