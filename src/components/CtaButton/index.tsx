interface CtaButtonProps {
  blog?: boolean;
}

const CtaButton = ({ blog }: CtaButtonProps) => {
  return (
    <div className="relative w-fit group">
      <button
        data-cal-namespace=""
        data-cal-link="forcythe/discovery"
        data-cal-config='{"layout":"month_view"}'
        className="custom-animate w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"
      >
        {blog ? (
          <>
            <span>Visit Blog</span>
            <img
              alt="play"
              loading="lazy"
              width="10"
              height="10"
              decoding="async"
              data-nimg="1"
              className="group-hover:hidden"
              src="https://forcythe.com/images/play.svg"
            />

            <img
              alt="play"
              loading="lazy"
              width="10"
              height="10"
              decoding="async"
              data-nimg="1"
              className="hidden group-hover:block"
              src="https://forcythe.com/images/play-white.svg"
            ></img>
          </>
        ) : (
          <span> Book a Call</span>
        )}
      </button>
      <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
    </div>
  );
};

export default CtaButton;
