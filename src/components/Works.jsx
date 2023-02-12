const Works = () => {
  return (
    <section id="works" className="px-36 mt-24 max-[500px]:px-16">
      <div>
        <h2 className="text-[40px] font-bold max-[760px]:text-center max-[760px]:mb-4">
          We Create World-Class Digital Products
        </h2>
        <p className="text-xl text-gray-500 max-[760px]:text-center">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      <div className="grid grid-cols-1 mt-14 xl:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <img
            src="images/work1.png"
            alt=""
            className="w-full rounded-[25px] h-[500px] object-cover mb-4 max-[1100px]:h-[530px] max-[760px]:h-56"
          />
          <p className="text-gray-500">App Design - June 20, 2022</p>
          <h4 className="text-[25px] font-bold">App Redesign</h4>
          <p className="text-gray-500 w-full text-[15px]">
            By information about design to the world the best instructions heatc
            helping by information about and design the world to the best
            instructions, heatc helping
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src="images/work2.png"
              alt=""
              className="rounded-[25px] h-56 object-cover mb-4 w-full"
            />
            <p className="text-gray-500 max-[1100px]:text-[15px]">
              App Design - June 20, 2022
            </p>
            <h4 className="text-[22px] font-bold max-[1100px]:text-[18px]">
              Redesign Channel website Landing page
            </h4>
          </div>
          <div>
            <img
              src="images/work3.png"
              alt=""
              className="rounded-[25px] h-56 object-cover mb-4 w-full max-[]:"
            />
            <p className="text-gray-500 max-[1100px]:text-[15px]">
              App Design - June 20, 2022
            </p>
            <h4 className="text-[22px] font-bold max-[1100px]:text-[18px]">
              New Locator App For a New Company
            </h4>
          </div>
          <div>
            <img
              src="images/work4.png"
              alt=""
              className="rounded-[25px] h-56 object-cover mb-4 w-full max-[]:"
            />
            <p className="text-gray-500 max-[1100px]:text-[15px]">
              App Design - June 20, 2022
            </p>
            <h4 className="text-[22px] font-bold max-[1100px]:text-[18px]">
              Rental Rooms Web App Platform
            </h4>
          </div>
          <div>
            <img
              src="images/work5.png"
              alt=""
              className="rounded-[25px] h-56 object-cover mb-4 w-full max-[]:"
            />
            <p className="text-gray-500 max-[1100px]:text-[15px]">
              App Design - June 20, 2022
            </p>
            <h4 className="text-[22px] font-bold max-[1100px]:text-[18px]">
              Calendar App for Big SASS Company
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
