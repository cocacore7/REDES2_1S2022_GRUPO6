import React from 'react'
import './FunPublica.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function FunPublica() {
  return (
    <div><h1 className='Title'>Funcion Publica</h1>
    <div className='carta'>
        <Row xs={1} md={3} className="g-1">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src="https://www.cnet.com/a/img/resize/4a8a90a118b6a772996e8572fa684d077eed561f/hub/2022/04/21/37ff5ab8-0d18-4b25-a5cd-82045a0f4049/2022-acura-nsx-type-s-009.jpg?auto=webp&fit=crop&height=675&width=1200" alt="Sunset in the mountains"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      </div>


     {/*  <div className='CaruselFun'>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 h-50"
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
            className="d-block w-100 h-50"
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
            className="d-block w-100 h-20"
            src="https://images-na.ssl-images-amazon.com/images/I/51gMGIOqgsL._AC_SX569_.jpg"
            alt="Third slide"
            height={"50px"}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div> */}
    </div>
  )
}
