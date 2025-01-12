import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  const images = [
    [
      "https://i.ibb.co/pn93sZ5/Screenshot-528-removebg-preview.png",
      "https://i.ibb.co/W68jkJv/Screenshot-524-removebg-preview.png",
      "https://i.ibb.co/tC306Jp/Screenshot-523-removebg-preview.png",
      "https://i.ibb.co/CzkpXv8/Screenshot-522-removebg-preview.png",
      "https://i.ibb.co/qyWV1hj/Screenshot-520-removebg-preview.png",
      "https://i.ibb.co/Hxw3v6Y/Screenshot-518-removebg-preview.png",
      "https://i.ibb.co/P6Rrh2c/Screenshot-516-removebg-preview.png",
      "https://i.ibb.co/McpcdGQ/Screenshot-515-removebg-preview.png",
      "https://i.ibb.co/zs2tgD2/Screenshot-514-removebg-preview.png",
      "https://i.ibb.co/g90yn8c/Screenshot-513-removebg-preview.png",
    ],
    [
      "https://i.ibb.co/pn93sZ5/Screenshot-528-removebg-preview.png",
      "https://i.ibb.co/W68jkJv/Screenshot-524-removebg-preview.png",
      "https://i.ibb.co/tC306Jp/Screenshot-523-removebg-preview.png",
      "https://i.ibb.co/CzkpXv8/Screenshot-522-removebg-preview.png",
      "https://i.ibb.co/qyWV1hj/Screenshot-520-removebg-preview.png",
      "https://i.ibb.co/Hxw3v6Y/Screenshot-518-removebg-preview.png",
      "https://i.ibb.co/P6Rrh2c/Screenshot-516-removebg-preview.png",
      "https://i.ibb.co/McpcdGQ/Screenshot-515-removebg-preview.png",
      "https://i.ibb.co/zs2tgD2/Screenshot-514-removebg-preview.png",
      "https://i.ibb.co/g90yn8c/Screenshot-513-removebg-preview.png",
    ],
  ];
  return (
    <div className="py-20 mt-1 w-full relative overflow-hidden">
      {images.map((item, index) => (
        <Marquee
          direction={index === 0 ? "left" : "right"}
          key={index}
          imagesurl={item}
        ></Marquee>
      ))}
    </div>
  );
};

export default Marquees;
