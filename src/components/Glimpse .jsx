import React from 'react'
import Gliban from "../assets/AboutImg/counter_bg.55b8b540.png"
import slide from "../assets/images/bg.40066edd.png"
import slide1 from "../assets/images/new-big.23a2ece4.png"
import slide2 from "../assets/packageimg/common-banner.6ccf3e41.png"
import Carousel from 'react-bootstrap/Carousel';
import Banner from './Banner'
import Heading from './Heading'





const Glimpse = () => {
  const imgpaths = [1, 2, 3, 4, 5, 6, 7, 8]
  const videopath = [1, 2, 3, 4]

  return (
    <>
      <Banner h1={"Glimpse"} h2={""} imgPath={Gliban} />
      <Heading heading={"Memories"} />
      <div className='mb-3'>
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Peris</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Alaska</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>New York</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Gliban}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>London</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></div>

      <Heading heading={"Photos"} />
      <div className='d-flex flex-wrap container'>
        {imgpaths.map((i, key) => (

          <img src={`../arrayimg/arr${i}.png`} className='arrimg' />


        ))}  </div>

      <Heading heading={"Videos"} />
      <div className='d-flex flex-wrap container justify-content-between aling-content-around rounded videomax'>
        {videopath.map((j) => (
          <video controls width={"100%"}  placeholder={imgpaths.map((i, key) => (

            <img src={`../arrayimg/arr${i}.png`} className='arrimg' />
  
  
          ))} >
            <source src={`../video/video${j}.mp4`} type="video/mp4" />
            {/* <source src={drink} type="video/ogg" /> */}

          </video>



        ))}  </div>
    </>
  )
}

export default Glimpse 