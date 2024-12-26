import { Link } from "react-router-dom";

const ButtonLink = ({ text }) => {
  return (
    <Link
      to=""
      className="flex h-full items-center lg:text-[16px] md:text-[12px] font-medium uppercase"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
