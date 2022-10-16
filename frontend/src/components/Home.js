import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
export default function Home() {
  return (
    <div >
      
      <h1 className='Title'>Home</h1>
      <div className='Carusel'>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://img.remediosdigitales.com/50967d/captura-de-pantalla-2022-08-26-a-las-17.38.32/1366_2000.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Nissan_Skyline_R34_GT-R_N%C3%BCr_002.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/I/51gMGIOqgsL._AC_SX569_.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
}
