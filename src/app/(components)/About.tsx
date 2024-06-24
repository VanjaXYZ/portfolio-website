import React from "react";
import AvatarImg from "../assets/avatar_no_background.png";
import Image from "next/image";
import MessageBubble from "./MessageBubble";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col space-y-6 min-h-screen lg:max-w-md self-start"
    >
      <picture className="flex lg:hidden relative">
        <Image
          src={AvatarImg}
          width={650}
          height={800}
          alt="Avatar image"
          className="rounded-full overflow-hidden max-w-52"
        />
        <MessageBubble />
      </picture>
      <h2 className="text-2xl font-bold tracking-wider">About me</h2>
      <article>
        <p className="xl:text-xl text-sm tracking-wider lg:text-lg">
          I am passionate about teamwork and communication, and I believe these
          skills are essential for successful project collaboration.
          Additionally, I am an enthusiastic learner, always seeking to improve
          and advance my technical and professional abilities. Outside of work,
          I enjoy playing the guitar, socializing, and caring for animals. I am
          eager to bring my dedication and enthusiasm to your team and
          contribute to the success of your projects.
        </p>
      </article>
    </section>
  );
};

export default About;
