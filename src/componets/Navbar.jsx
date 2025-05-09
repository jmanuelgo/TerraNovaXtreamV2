import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const links = [
        { link: '/', text: 'Inicio', id: 1 },
        { link: '/destinos', text: 'Destinos Turísticos', id: 2 },
        { link: '/redes-sociales', text: 'Redes Sociales', id: 3 },
        { link: '/ubicacion', text: 'Ubicación', id: 4 },
        { link: '/reserva', text: 'Método de Reserva', id: 5 }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-blue-700 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">TerraNovaXtrema</div>

                {/* Botón hamburguesa móvil */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Menú Desktop */}
                <ul className="hidden md:flex space-x-6 text-sm font-semibold">
                    {links.map(({ link, text, id }) => (
                        <li key={id}>
                            <Link to={link} className="hover:text-yellow-300">{text}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Menú Mobile */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
                    }`}
            >
                <ul className="space-y-3 font-semibold">
                    {links.map(({ link, text, id }) => (
                        <li key={id}>
                            <Link
                                to={link}
                                onClick={toggleMenu}
                                className="block hover:text-yellow-300"
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    );
}

