import { useState, useEffect, useRef } from 'react';

function Card({ image, title, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef();

    // Cerrar con tecla ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // Cerrar al hacer clic fuera del modal
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer relative rounded-xl overflow-hidden shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg">{title}</h3>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50"
                    onClick={handleOutsideClick}
                >
                    <div
                        ref={modalRef}
                        className="bg-white rounded-xl p-6 w-[90%] max-w-xl text-center relative overflow-auto"
                    >
                        <button
                            className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>

                        {/* Marco con tamaño definido */}
                        <div className="w-full h-64 md:h-80 rounded-md overflow-hidden mb-4 border border-gray-200">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-700">{description}</p>
                    </div>

                </div>
            )}
        </>
    );
}

export default Card;
