import CtaButton from "../CtaButton";

const Hero = () => {
  return (
    <main className="md:min-h-[80vh] bg-[url('/src/assets/images/header-background.svg')] object-cover bg-no-repeat bg-top px-[1rem] md:px-[7rem] mt-[6.3rem] md:mt-[6.8rem]">
      <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
        <div className="max-w-[56rem]">
          <div className="min-h-[180px]">
            <h1 className="text-[3.3rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 tracking-wide">
              We build <span className="text-blue-400">products</span> that
              shape a better future
            </h1>

            <p className="text-zinc-400 text-base md:text-lg mb-8 leading-7 md:w-[80%]">
              We’re the architects of digital excellence across industries. We
              redefine business with cutting-edge digital strategies that
              invokes sector-wide transformation.
            </p>

            <CtaButton />
          </div>
        </div>
      </div>

      <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
        Success in <span className="text-[#60a6e7] capitalize">Motion</span> –
        Our clients’ journey
      </p>
    </main>
  );
};

export default Hero;
