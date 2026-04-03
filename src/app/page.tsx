import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ProgramHighlights from "@/components/home/ProgramHighlights";
import AlumniSuccess from "@/components/home/AlumniSuccess";
import Testimonial from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProgramHighlights />
      <AlumniSuccess />
      <Testimonial />
      <CTA />
    </>
  );
}
