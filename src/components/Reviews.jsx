import {
  ImQuotesLeft as QuoteLeftIcon,
  ImQuotesRight as QuoteRightIcon,
} from "react-icons/im";

const Reviews = () => {
  return (
    <section id="reviews" className="px-36 mt-24 text-center flex flex-col justify-center max-[700px]:px-16">
      <h2 className="text-[40px] font-black text-center leading-[70px] mb-[40px]">
        Let's Hear <br /> What They Says
      </h2>
      <div className="w-[50%] mx-auto flex justify-center gap-6 -mt-[20px] max-[1000px]:w-[100%]">
        <span className="text-[50px] text-primary max-[700px]:text-[30px]" >
        <QuoteLeftIcon />
        </span>
        <p className="leading-[40px] mt-[50px] text-gray-500 max-[500px]:text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          at obcaecati repellendus reprehenderit facere, atque veritatis
          expedita magni voluptatem itaque, amet quam, dolore sit. At fugiat
          tempora aut officia minima.
        </p>
        <span  className="text-[50px] text-primary max-[700px]:text-[30px]" >
        <QuoteRightIcon/>
        </span>
      </div>
      <div className="w-full flex justify-center mt-14">
        <div className="flex items-center gap-16 max-[760px]:gap-8 max-[500px]:gap-3">
          <div className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center max-[760px]:w-[45px] max-[760px]:h-[45px]">
            <img
              src="https://img.freepik.com/foto-gratis/sonriente-joven-apuntando-su-mano-su-producto-exhiba-articulo-su-palma-contra-espacio-copia-pie-sobre-pared-blanca_176420-39408.jpg?w=1380&t=st=1675371241~exp=1675371841~hmac=51337543666d48c26e9e18ade092ed7fd57ef4874dda3414b29015a32c9a80a0"
              alt=""
              className="w-[45px] h-[45px] object-cover rounded-full max-[760px]:w-[30px] max-[760px]:h-[30px]"
            />
          </div>
          <div className="bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center max-[760px]:w-[55px] max-[760px]:h-[55px]">
            <img
              src="https://img.freepik.com/psd-gratis/chica-celebrando-su-felicidad_1154-262.jpg?w=740&t=st=1675373033~exp=1675373633~hmac=a0227920c0902a42136748c7af572de7252bbfda52a9d9bb7e0731c673625f53"
              alt=""
              className="w-[55px] h-[55px] object-cover rounded-full max-[760px]:w-[40px] max-[760px]:h-[40px]"
            />
          </div>

          <div className="bg-white w-[80px] h-[80px] border-[4px] border-primary rounded-full flex justify-center items-center max-[760px]:w-[65px] max-[760px]:h-[65px]">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-computadora-portatil-que-presenta-algo_1368-5030.jpg?w=826&t=st=1675373035~exp=1675373635~hmac=33f0474292e45089e0d9c3ff47c34541082d109cfd1ac71b6ad7a59a2fb6d650"
              alt=""
              className="w-[65px] h-[65px] object-cover rounded-full max-[760px]:w-[50px] max-[760px]:h-[50px]"
            />
          </div>

          <div className="bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center max-[760px]:w-[55px] max-[760px]:h-[55px]">
            <img
              src="https://img.freepik.com/foto-gratis/chica-sabe-que-vamos-disparo-perfil-hermosa-mujer-aspecto-amigable-ayuda-elegir-manera-apuntando-lados-girando-camara-mirandote-sugiriendo-direccion-pie-sonriendo-fondo-blanco-feliz-casual_176420-34654.jpg?w=1380&t=st=1675373038~exp=1675373638~hmac=28708a2c0fe6b8591cecde26aaed7bd64d7e992753055686073e201628192da3"
              alt=""
              className="w-[55px] h-[55px] object-cover rounded-full max-[760px]:w-[40px] max-[760px]:h-[40px]"
            />
          </div>

          <div className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center max-[760px]:w-[45px] max-[760px]:h-[45px]">
            <img
              src="https://img.freepik.com/foto-gratis/varon-joven-mirando-camiseta-rosa-mirando-alegre-vista-frontal_176474-84436.jpg?w=1380&t=st=1675373041~exp=1675373641~hmac=51b6641840dd7d155dc19524a10ea7d268e28231a41884f4f11cf43f4079e391"
              alt=""
              className="w-[45px] h-[45px] object-cover rounded-full max-[760px]:w-[30px] max-[760px]:h-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Ricky Aprilla</h3>
        <p className="text-[15px] text-gray-500">Founder of Varbo</p>
      </div>
    </section>
  );
};

export default Reviews;
