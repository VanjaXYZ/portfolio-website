import AboutMeMessage from "./AboutMeMessage";
import { AvatarImageMobile } from "./AvatarImage";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col space-y-6 sm:min-h-screen lg:max-w-md self-start bg-black"
    >
      <AvatarImageMobile />
      <h2 className="text-2xl font-bold tracking-wider">About me</h2>
      <AboutMeMessage />
    </section>
  );
};

export default About;
