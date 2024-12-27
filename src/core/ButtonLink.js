import { Link } from "react-router-dom";

const ButtonLink = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="flex h-full items-center xl:text-[16px] md:text-[12px] font-medium uppercase"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
