import "../App.css"
import Header from '../component/Header';
import exploreservicebg from '../img/exploreservicebg.jpg';
import img1 from '../img/serviceimg01.jpg';
import img2 from '../img/serviceimg02.jpg';
import img3 from '../img/serviceimg03.jpg';
import img4 from '../img/serviceimg04.jpg';
import img5 from '../img/serviceimg05.jpg';
import img6 from '../img/serviceimg06.jpg';
import Footer from "../component/Footer";


const services = [
    { title: 'REAL STATE', image: img1 },
    { title: 'URBAN PLANNING', image: img2 },
    { title: 'ARCHITECTURE', image: img3 },
    { title: 'INTERIOR', image: img4 },
    { title: 'INFRASTRUCTURE ENGINEERING', image: img5 },
    { title: 'SURVEYING', image: img6 },
  ];


function Services() {
    return ( <>
    <div className="min-h-screen ">
      <Header />
        <div className="relative mt-[-150px] ">
            <img src={exploreservicebg} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
            <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  ">Explore our services</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-[15px] py-[40px] md:py-[60px] lg:py-[100px] max-w-7xl mx-auto">
            {services.map((service, index) => (
                <div key={index} className="relative group h-[320px] md:h-[360px] lg:h-[450px] xl:h-[520px] overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-[16px] uppercase font-semibold tracking-wide text-center">
                    {service.title}
                    </h3>
                </div>
                </div>
            ))}
            </div>
    </div>
    <Footer />
    </>
     );
}

export default Services;