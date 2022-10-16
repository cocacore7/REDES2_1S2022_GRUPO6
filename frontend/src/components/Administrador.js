import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Administrador() {
  const admis =[
    {
      Puesto: "Vicepresidente",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Foto: "https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2022/05/nissan-skyline-gt-r-r34-subastado-canada-2697711.jpg"
    },
    {
      Puesto: "Presidente",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Foto: "https://www.enriquesampedro.com/wp-content/uploads/2020/09/enriquesampedrocom_2007_Lancer_EVO_IX_RS_Studio-15.jpg"
    },
    {
      Puesto: "Ministro de seguridad",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Foto: "https://combustiblecl.com/imgs/t650/consumo-impreza-wrx-sti-2-5-turbo-1.jpg"
    }
  ]
  return (
    <div><h1 className='Title'>Administradores </h1>
      <div className='carta'>
        <Row xs={1} md={3} className="g-5">
        {admis.map((_, idx) => (
          <Col>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={_.Foto} alt="Sunset in the mountains"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{_.Puesto}</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      </div>
      </div>
  )
}
