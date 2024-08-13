import BoostLink from "./components/Footer/BoostLink";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MainBody from "./components/main/MainBody";

export default function HomePage() {
  return (
    <main className="*:px-2 *:sm:px-16 ">
      <Header />
      <Hero />
      <MainBody />
      <BoostLink />
      <Footer />
    </main>
  );
}
