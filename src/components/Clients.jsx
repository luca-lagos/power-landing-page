const Clients = () => {
    return(
        <section className="w-full px-20 pt-12 pb-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-[35px]">Trusted By Greatest Companies</h2>
            <div className="w-full flex items-center justify-center gap-20">
                <a href="#" className="">
                    <img src="images/google.png" alt="" className="w-[150px] opacity-80 hover:opacity-100 transition-all duration-300" />
                </a>
                <a href="#" className="">
                    <img src="images/airbnb.png" alt="" className="w-[150px] opacity-80 hover:opacity-100 transition-all duration-300" />
                </a>
                <a href="#" className="">
                    <img src="images/creative-market.png" alt="" className="w-[150px] opacity-80 hover:opacity-100 transition-all duration-300" />
                </a>
                <a href="#" className="">
                    <img src="images/shopify.png" alt="" className="w-[150px] opacity-80 hover:opacity-100 transition-all duration-300" />
                </a>
                <a href="#" className="">
                    <img src="images/amazon.png" alt="" className="w-[150px] opacity-80 hover:opacity-100 transition-all duration-300" />
                </a>
            </div>
        </section>
    )
}

export default Clients;