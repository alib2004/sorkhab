/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";

const BreadCrunb = ({title}) => {
  return (
    <div className="container py-5">
      <div className="flex items-center gap-2">
        <IoHomeOutline size={'20px'} color="gray"/>
        <MdKeyboardArrowLeft size={'20px'} color="gray" />
        <span className="text-pink-600">{title}</span>
      </div>
    </div>
  );
};

export default BreadCrunb;
