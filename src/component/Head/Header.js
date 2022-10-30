import styled from "styled-components";
import React, { useState } from "react";
import logo from "../pic/logo.png";

export default function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [Mobile, setMobile] = useState(false);
  return (
    <Wrapper>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>Présentation</a>
              </li>
              <li>
                <a href='#features'>Compétences</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>Formation</a>
              </li>
            
              <li>
                <a href='#contact'>contact</a>
              </li>
           
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
      <section className="demo"></section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
header {
  height: 10vh;
  line-height: 10vh;
  background-color:#2a2a2e;
}
header .container {

  padding-top: 15px;
}
header ul li {
  
  margin-left: 30px;
}
header ul li a {
  color:white;
  transition: 0.5s;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
}
header ul li a:hover {
  color: #04989e;
}
.home-btn {
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  height: fit-content;
  color: #04989e;
}
.home-btn {
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
}
.home-btn:hover {
  background: #04989e;
  color: white;
}
.open {
  display: none;
}
.header.active {
  height: 12vh;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: #2a2a2e;
  box-shadow: -1px 11px 24px -11px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
}
@media (max-width: 768px) {
  header ul {
    padding-top: 30px;
  }
  .nav-links-mobile {
    position: absolute;
    display: block;
    list-style: none;
    box-shadow: rgba(50, 50, 93, 0.23) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    left: 0;
    top: 0;
    transition: all 0.5s ease-in-out;
    width: 60%;
    height: 100vh;
    background-color: white;
    z-index: 888;
  }
  header ul li {
    width: 100%;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    line-height: 70px;
  }
  header .link {
    display: none;
  }
  .close,
  .open {
    position: absolute;
    top: 35px;
    right: 20px;
    color: #04989e;
    display: block;
    font-size: 25px;
    z-index: 999;
  }
  .close {
    right: 45%;
  }
  .close.home-btn {
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    color: #04989e;
    border-radius: 50%;
    padding: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
  .header.active {
    height: 10vh;
  }
}
`;
