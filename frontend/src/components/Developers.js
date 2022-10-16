import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Devs.css'
export default function Developers() {
  return (
    <div><h1 className='Title'>Desarrolladores </h1>
      <div className='carta'>
        <Row xs={1} md={2} className="g-5">
        {Array.from({ length: 4 }).map((_, idx) => (
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
    </div>
  )
}
