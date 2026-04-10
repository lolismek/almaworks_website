import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Mentorship from "@/components/home/Mentorship";
import ProgramHighlights from "@/components/home/ProgramHighlights";
import DemoSection from "@/components/home/DemoSection";
import AlumniSuccess from "@/components/home/AlumniSuccess";
import Testimonial from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Mentorship />
      <ProgramHighlights />
      <DemoSection />
      <AlumniSuccess />
      <Testimonial />
      <CTA />
    </>
  );
}
