import Image from "next/image";
import AboutUs from "./aboutus/page";
import Tokens from "./tokens/page";
import Timeline from "./tokens/component/page";

export default function Home() {
  return (
    <div>
      <AboutUs/>
      <Tokens/>
      <Timeline/>
      </div>
  );
}
