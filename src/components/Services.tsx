export default function Services() {
    const services = [
        { name: 'UI/UX Design', img: '/src/images/UID.png' },
        { name: 'Graphic Design', img: 'src/images/GD.png' },
        { name: 'Branding', img: 'src/images/B.png' },
    ];

    return (
        <section id="services" className="py-20 relative bg-[#010312]">
            <div className="container mx-auto px-6 md:px-20 text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    My Service
                </h2>
                <p className="text-lg md:text-xl mb-16 text-[#E76F51]">
                    Services I Provide
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-[160px] sm:w-[180px] md:w-[200px] h-[280px] sm:h-[320px] md:h-[360px] bg-[#0A0C18] rounded-[33px] border-2 border-[#E76F51] flex flex-col items-center justify-start p-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Service Name */}
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white text-center mb-2">
                                {service.name}
                            </h3>

                            {/* Full-width Horizontal Line */}
                            <div className="w-full border-b-2 border-[#E76F51] mb-2"></div>

                            {/* Image Container with Top Stack Layers */}
                            <div className="relative w-full flex-1 flex items-start justify-center">
                                {/* Top stack layers */}
                                <div className="absolute top-0 w-[90%] h-4 bg-gray-500 rounded-t-lg z-0"></div>
                                <div className="absolute top-2 w-[95%] h-4 bg-gray-400 rounded-t-lg z-0"></div>

                                {/* Main Image */}
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="relative w-[calc(100% +2rem)] h-[calc(90%-3rem)] mt-5 object-cover rounded-lg z-10"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

