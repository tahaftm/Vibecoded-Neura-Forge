"use client";

import {ArrowRight} from 'lucide-react';
import Link from 'next/link';
import {useEffect, useState} from 'react';

import {Button} from '@/components/ui/button';

const services = [
  'Positive Client Feedback.',
  'Glowing Testimonials.',
  'Success Stories.',
  'Happy Customers.',
  'Proven Results.',
];

const AnimatedFibers = () => {
  const fiberCount = 20;
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {Array.from({length: fiberCount}).map((_, i) => (
        <div
          key={i}
          className="fiber"
          style={
            {
              '--delay': `${Math.random() * 10}s`,
              '--duration': `${5 + Math.random() * 5}s`,
              '--start-x': `${-10 + Math.random() * 20}%`,
              '--start-y': `${Math.random() * 100}%`,
              '--end-x': `${90 + Math.random() * 20}%`,
              '--end-y': `${Math.random() * 100}%`,
            } as React.CSSProperties
          }
        ></div>
      ))}
    </div>
  );
};

export default function HeroSection() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentService = services[serviceIndex];
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(currentService.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setServiceIndex(prev => (prev + 1) % services.length);
        }
      } else {
        if (displayedText.length < currentService.length) {
          setDisplayedText(currentService.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause at end
        }
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, serviceIndex]);

  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 lg:py-40">
      <AnimatedFibers />
      <div className="absolute inset-0 -z-10 m-auto h-[450px] w-[450px] bg-primary/10 rounded-full blur-[120px] filter"></div>

      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          We Build Next-Gen Solutions with
          <br />
          <span className="block h-20 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent sm:h-24 md:h-28">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          We provide bespoke AI solutions, automation, and web development to
          propel your business into the future.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/about" passHref>
            <Button size="lg">
              About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
