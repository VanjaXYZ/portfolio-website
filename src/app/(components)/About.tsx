import { AvatarImageMobile } from "./AvatarImage";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col space-y-6 sm:min-h-screen lg:max-w-md self-start"
    >
      <AvatarImageMobile />
      <h2 className="text-2xl font-bold tracking-wider">About me</h2>
      <article>
        <p className="xl:text-xl text-sm tracking-wider lg:text-lg">
          Hello! My name is <strong>Vanja Sukurma</strong>, a passionate
          frontend developer with over 2 years of practical experience. I
          specialize in React and Next.js environments, focusing on creating
          intuitive and user-friendly web applications. In my work, I emphasize
          efficiency, scalability, and aesthetics, and I enjoy the challenges
          that come with the dynamic world of web technologies.
        </p>
      </article>
    </section>
  );
};

export default About;
