import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Support from "./components/Support/Support";
import NavBar from "./components/Navbar/Navbar";

export const metadata = {
  title: "Titanium Fitness",
  description: "Titanium Fitness is a fitness center that offers a variety of classes and personal training",
  images: '',
  icons: {
    icon: "https://i.imgur.com/osgGzpF.png"
  }

}

export default function Home() {

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Support></Support>
    </div>
  );
}
