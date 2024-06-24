import Image from "next/image";
import React from "react";
import AvatarImg from "../assets/avatar_no_background.png";

const AvatarImage = () => {
  return (
    <section className="h-fit justify-center w-full items-center hidden lg:flex">
      <Image
        src={AvatarImg}
        width={650}
        height={800}
        alt="Avatar image"
        className="rounded-full overflow-hidden"
      />
    </section>
  );
};

export default AvatarImage;
