"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Innovate Inc.',
    role: 'CEO',
    avatar: 'https://i.pravatar.cc/150?img=1',
    testimonial:
      "NeuraForge's AI agents have transformed our customer support, handling queries with incredible efficiency. Their team delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: 'DataDriven Co.',
    role: 'Head of Analytics',
    avatar: 'https://i.pravatar.cc/150?img=2',
    testimonial:
      'The data cleaning and visualization services were top-notch. We now have clear, actionable insights that were previously buried in our raw data. Highly recommended!',
    rating: 5,
  },
  {
    name: 'E-Shop Global',
    role: 'Marketing Director',
    avatar: 'https://i.pravatar.cc/150?img=3',
    testimonial:
      'Our new Shopify store is not only beautiful but also highly functional. The workflow automations they implemented have saved us countless hours.',
    rating: 5,
  },
  {
    name: 'Future AI',
    role: 'CTO',
    avatar: 'https://i.pravatar.cc/150?img=4',
    testimonial:
      'Working with NeuraForge on our machine learning model was a game-changer. Their expertise and collaborative approach led to a product far better than we envisioned.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real stories from businesses we've helped transform.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="relative mt-12 w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-full border-2 border-primary/10 bg-card shadow-lg shadow-primary/5">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <blockquote className="text-lg italic text-muted-foreground">
                        "{testimonial.testimonial}"
                      </blockquote>
                      <div className="mt-6 flex items-center gap-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-primary-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <div className="mt-1 flex">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}
