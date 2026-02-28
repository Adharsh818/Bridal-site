import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesCards from '@/components/ServicesCards';
import FeatureSplit from '@/components/FeatureSplit';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesCards />
      <FeatureSplit />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
