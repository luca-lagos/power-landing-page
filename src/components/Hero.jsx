import {
  RiCheckboxBlankCircleFill as CircleIcon,
  RiPlayFill as PlayIcon,
  RiStarFill as StarIcon,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8 px-16">
      <div className="md:col-span-5 flex items-center justify-center p-20">
        <div className="flex flex-col gap-8">
          <h2 className="text-7xl font-bold py-4 leading-[7.5rem]">
            Web Design Impacful Digital{" "}
            <span className="text-primary px-8 pb-2 border-4 border-primary relative">
              Products
              <CircleIcon className="text-2xl border-[5px] border-primary rounded-xl bg-white text-white absolute -left-3 -top-3" />
              <CircleIcon className="text-2xl border-[5px] border-primary rounded-xl bg-white text-white absolute -right-3 -top-3" />
              <CircleIcon className="text-2xl border-[5px] border-primary rounded-xl bg-white text-white absolute -left-3 -bottom-3" />
              <CircleIcon className="text-2xl border-[5px] border-primary rounded-xl bg-white text-white absolute -right-3 -bottom-3" />
            </span>
          </h2>
          <p className="text-gray-500 text-2xl leading-[2rem]">
            Help find solutions with intuitive and in accordance with client
            business goals, we provide a high-quality services.
          </p>
          <div className="flex gap-16">
            <button className="bg-primary text-white px-8 rounded-xl text-xl opacity-80 hover:opacity-100 transition-all duration-300">
              Contact Us
            </button>
            <button className=" text-gray-700 font-bold flex items-center gap-4 opacity-80 hover:opacity-100 transition-all duration-300">
              <PlayIcon className="bg-gray-300 text-primary w-16 h-16 p-4 rounded-full" />{" "}
              <p className="text-lg text-left">
                Watch our <br /> introduction video
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex items-center justify-center relative">
        <div>
          <img
            src="images/hero.png"
            alt=""
            className="w-[550px] h-[550px] object-cover"
          />
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-start shadow-xl bg-white w-[270px] py-4 mr-6 -mt-10 rounded-lg px-8">
              <div className="flex">
                <img
                  src="https://img.freepik.com/foto-gratis/sonriente-joven-apuntando-su-mano-su-producto-exhiba-articulo-su-palma-contra-espacio-copia-pie-sobre-pared-blanca_176420-39408.jpg?w=1380&t=st=1675371241~exp=1675371841~hmac=51337543666d48c26e9e18ade092ed7fd57ef4874dda3414b29015a32c9a80a0"
                  alt=""
                  className="w-11 h-11 object-cover rounded-full mb-2 border-[3px] border-white"
                />
                <img
                  src="https://img.freepik.com/psd-gratis/chica-celebrando-su-felicidad_1154-262.jpg?w=740&t=st=1675373033~exp=1675373633~hmac=a0227920c0902a42136748c7af572de7252bbfda52a9d9bb7e0731c673625f53"
                  alt=""
                  className="w-11 h-11 object-cover rounded-full mb-2 border-[3px] border-white -ml-4"
                />
                <img
                  src="https://img.freepik.com/foto-gratis/hombre-computadora-portatil-que-presenta-algo_1368-5030.jpg?w=826&t=st=1675373035~exp=1675373635~hmac=33f0474292e45089e0d9c3ff47c34541082d109cfd1ac71b6ad7a59a2fb6d650"
                  alt=""
                  className="w-11 h-11 object-cover rounded-full mb-2 border-[3px] border-white -ml-4"
                />
                <img
                  src="https://img.freepik.com/foto-gratis/chica-sabe-que-vamos-disparo-perfil-hermosa-mujer-aspecto-amigable-ayuda-elegir-manera-apuntando-lados-girando-camara-mirandote-sugiriendo-direccion-pie-sonriendo-fondo-blanco-feliz-casual_176420-34654.jpg?w=1380&t=st=1675373038~exp=1675373638~hmac=28708a2c0fe6b8591cecde26aaed7bd64d7e992753055686073e201628192da3"
                  alt=""
                  className="w-11 h-11 object-cover rounded-full mb-2 border-[3px] border-white -ml-4"
                />
                <img
                  src="https://img.freepik.com/foto-gratis/varon-joven-mirando-camiseta-rosa-mirando-alegre-vista-frontal_176474-84436.jpg?w=1380&t=st=1675373041~exp=1675373641~hmac=51b6641840dd7d155dc19524a10ea7d268e28231a41884f4f11cf43f4079e391"
                  alt=""
                  className="w-11 h-11 object-cover rounded-full mb-2 border-[3px] border-white -ml-4"
                />
              </div>
              <h3 className="ml-2 mb-1 text-lg font-bold">120+ Employees</h3>
              <p className="ml-2 flex items-center justify-start gap-2 text-gray-500">
                <StarIcon className="text-xl text-primary" /> 5.0 (3.1k Reviews)
              </p>
              <div className="absolute w-[75px] h-[75px] bg-white rounded-lg right-[124px] bottom-[100px] -z-10"></div>
              <CircleIcon className="absolute right-[83px] bottom-[62px] w-[90px] h-[90px] -z-20 text-primary" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-secondary w-[450px] h-[450px] border-[10px] border-primary rounded-full -z-10 -ml-4 mt-[75px]"></div>
      </div>
    </section>
  );
};

export default Hero;
