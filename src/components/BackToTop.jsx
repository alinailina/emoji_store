import React from "react";
import { Link } from "react-router-dom";
import { MdArrowUpward } from "react-icons/md";

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link onClick={scrollTop} className="backToTop">
      <MdArrowUpward />
    </Link>
  );
};

export default BackToTop;
