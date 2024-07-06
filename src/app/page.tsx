// sections
import Hero from "./hero";
import Feature from "./feature";
import Services from "./services";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Hero />
      {/* <VideoIntro /> */}
      <Testimonials />
      <Feature />
      <Services />
      <Faqs />
    </>
  );
}
