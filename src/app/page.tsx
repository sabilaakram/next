import Image from "next/image";
import AboutUs from "./aboutus/page";
import Tokens from "./tokens/page";
import Timeline from "./tokens/component/page";
import Crowdsale from "./crowdsale/page";
import Roadmap from "./roadmap/page";
import { Navbar } from "@/components/navbardesktop";

export default function Home() {
  return (
    <>
      <div id="aboutus" className="md:mt-20 mt-16" >
        <AboutUs />
      </div>
      <div id="tokens" >
        <Tokens/>
      </div>
      <div id="crowdsale">
        <Crowdsale />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
    </>
  );
}
