import About from "./(components)/About";
import AvatarImage from "./(components)/AvatarImage";
import Contact from "./(components)/Contact";
import DownloadCVButton from "./(components)/DownloadCVButton";
import ScrollWrapper from "./(components)/ScrollWrapper";
import Work from "./(components)/Work";

export default function Home() {
  return (
    <ScrollWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-24 space-y-10 relative bg-black">
        {/* <GreetingMessage /> */}
        <section className="flex w-full justify-center">
          <About />
          <AvatarImage />
        </section>
        <Work />
        <DownloadCVButton />
        <Contact />
      </main>
    </ScrollWrapper>
  );
}
