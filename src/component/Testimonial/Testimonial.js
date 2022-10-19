import styled from "styled-components";
import React, { useState, useEffect } from "react"

import Slide from "./Slide"
import TestimonialApi from "./TestimonialApi"


export default function Testimonial() {
    const [data, setdata] = useState(TestimonialApi)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])
    
  return (
    <Wrapper>

<section className='Testimonial' id='clients'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>WHAT CLIENTS SAY</h4>
            <h1>Testimonial</h1>
          </div>
          <div className='slide'>
            {/*{TestimonialApi.map((val, index) => {
              return <Slide key={index} image={val.image} design={val.design} name={val.name} offcer={val.offcer} post={val.post} date={val.date} desc={val.desc} />
            })}*/}

            {data.map((value, valueIndex) => {
              return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
            })}

            <div className='slide_button'>
              <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
                <i class='fas fa-arrow-left'></i>
              </button>
              <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
                <i class='fas fa-arrow-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper=styled.div `
.Testimonial h2 {
  margin: 15px 0 0 0;
}

.Testimonial .left {
  width: 35%;
  padding: 35px;
  margin: 20px;
}
.Testimonial .right {
  width: 65%;
  padding: 0 0 0 50px;
  margin: 0 20px 0 0;
}
.Testimonial .quote i {
  font-size: 150px;
  opacity: 0.1;
}

.Testimonial .content {
  padding: 50px;
}
.Testimonial .content h1 {
  font-weight: 500;
}
.Testimonial .content h3 {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 40px;
}
.Testimonial .slide_button {
  position: absolute;
  top: 30px;
  right: 20px;
}
.Testimonial .slide_button .prev_btn {
  margin-right: 30px;
}

/*-----Testimonial slide-----------*/
.Testimonial .slide {
  max-width: 80%;
  margin: auto;
  height: 500px;
  position: relative;
  display: flex;
  overflow: hidden;
}
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s linear;
}
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}
/*-----Testimonial slide-----------*/
@media (max-width: 768px) {
  article {
    flex-direction: column;
    padding: 20px;
  }
  .Testimonial .left {
    width: 100%;
    display: flex;
    margin: 0;
    margin-top: 15%;
  }
  .Testimonial .left img {
    width: 190px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .Testimonial .right {
    width: 100%;
    margin: 0;
    padding: 0 0 0 0px;
  }
  .Testimonial .slide {
    height: 70vh;
    max-width: 90%;
  }
  .Testimonial .quote {
    display: none;
  }
}

`;