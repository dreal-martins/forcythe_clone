import B2bCard from "./B2bCard";

const B2bProduct = () => {
  return (
    <div className="py-16 px-[1.25rem] md:px-[7rem]">
      <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-blue-200 text-center">
        Your best call for B2B/B2C product innovation
      </p>
      <div className="flex flex-col gap-8 md:flex-row justify-between items-center">
        <B2bCard
          detail="Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth."
          name="Experience"
        />
        <B2bCard
          detail="We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth"
          name="Quick Support"
        />
        <B2bCard
          detail="Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality."
          name="Cost Savings"
        />
      </div>
    </div>
  );
};

export default B2bProduct;
