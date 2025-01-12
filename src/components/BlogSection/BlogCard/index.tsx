interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  date,
  imageUrl,
  href,
}) => {
  return (
    <a
      href={href}
      className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-blue-400 transition-all duration-500"
    >
      <div className="h-60 sm:h-56 relative mb-6">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 left-0 w-full h-full rounded-[1.3rem] object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>
      <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-1/2 before:-translate-y-1/2 group-hover:translate-x-4">
        <p className="text-lg font-semibold mb-1">Blog</p>
        <div className="flex items-center text-base text-zinc-400 mb-6">
          <span>{author}</span>
          <div className="mx-1.5 h-2 w-2 rounded-full bg-white"></div>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold line-clamp-2 md:w-[80%]">
          {title}
        </h3>
      </div>
    </a>
  );
};

export default BlogCard;
