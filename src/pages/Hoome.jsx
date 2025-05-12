import React from 'react';
import Card from '../componets/card';

const servicios = [
  { image: 'imagenes/inicio/solteros.jpg', title: 'Montañismo', description: 'Descripción del servicio de montañismo.' },
  { image: 'imagenes/inicio/parejas.jpg', title: 'Ciclismo', description: 'Descripción del servicio de ciclismo.' },
  { image: 'imagenes/inicio/petfriendly.jpg', title: 'Senderismo', description: 'Descripción del servicio de senderismo.' },
  { image: 'imagenes/inicio/vallealto.jpg', title: 'Parapente', description: 'Descripción del servicio de parapente.' },
];
function Hoome() {
  return (
    <div className="bg-white text-gray-800">
      {/* Sección Hero */}
      <section
        className="relative text-white px-4"
        style={{
          backgroundImage: `url('imagenes/inicio/Hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh', // Puedes ajustar este valor: 60vh, 100vh, 500px, etc.
        }}
      >
        
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ¡VIVE LA VIDA QUE QUIERES CONTAR!
            </h1>
            <p className="text-lg md:text-xl font-light">¡Haz tus sueños realidad!</p>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="bg-green-500 py-10 text-white text-center">
        <h2 className="text-2xl font-bold mb-6">Oferta de Servicios y Destinos Turísticos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {servicios.map((servicio, index) => (
            <Card key={index} {...servicio} />
          ))}
        </div>
      </section>


      {/* Turismo de Aventura */}
      <section className="bg-green-700 py-10 text-white text-center">
        <h2 className="text-2xl font-bold mb-6">Especialista en Turismo de Aventura</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          <div className="bg-white text-black p-4 rounded-xl shadow-md">Montañismo</div>
          <div className="bg-white text-black p-4 rounded-xl shadow-md">Ciclismo</div>
          <div className="bg-white text-black p-4 rounded-xl shadow-md">Senderismo</div>
          <div className="bg-white text-black p-4 rounded-xl shadow-md">Parapente</div>
        </div>
      </section>

      {/* Dirección y horario */}
      <footer className="bg-red-500 text-white py-10 px-4 text-center">
        <h3 className="text-xl font-semibold mb-2">Dirección de Oficinas</h3>
        <p>Calle México entre 25 de Mayo y España</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Horario de Atención</h3>
        <p>Lunes a Domingo: 10:30 - 19:30</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Contáctanos</h3>
        <p>Teléfonos: 64962648 - 78313110</p>
        <p>Email: terranovaxtrema@gmail.com</p>
      </footer>
    </div>
  );
}

export default Hoome;

