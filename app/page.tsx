"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import AccredianEdge from "@/components/AccredianEdge";
import Partnerships from "@/components/Partnerships";
import DomainExpertise from "@/components/DomainExpertise";
import CATFramework from "@/components/CATFramework";
import HowWeDeliver from "@/components/HowWeDeliver";
import Course from "@/components/Course";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <main className=" flex flex-col min-h-screen">
      <Hero onEnquire={() => setIsLeadFormOpen(true)} />
      <TrackRecord />
      <Partnerships />
      <AccredianEdge />
      <DomainExpertise />
      <CATFramework />
      <HowWeDeliver />
      <Course onEnquire={() => setIsLeadFormOpen(true)} />
      <FAQ onEnquire={() => setIsLeadFormOpen(true)} />
      <Testimonials />
      <Footer onEnquire={() => setIsLeadFormOpen(true)} />

      {isLeadFormOpen && <LeadForm onClose={() => setIsLeadFormOpen(false)} />}
    </main>
  );
}
