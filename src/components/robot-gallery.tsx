"use client";

import {useEffect, useState} from 'react';
import Image from 'next/image';

import {generateRobots} from '@/ai/flows/generate-robots';
import {Skeleton} from '@/components/ui/skeleton';
import {Card, CardContent} from './ui/card';

export default function RobotGallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const imagePromises = Array(6)
          .fill(null)
          .map(() => generateRobots());
        const results = await Promise.all(imagePromises);
        const dataUris = results.map(res => res.robotDataUri);
        setImages(dataUris);
      } catch (error) {
        console.error('Failed to generate robot images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Visions of Automation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            AI-generated concepts exploring the fusion of robotics, machine
            learning, and neon aesthetics.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {loading
            ? Array(6)
                .fill(null)
                .map((_, i) => (
                  <Card key={i} className="overflow-hidden bg-background">
                    <CardContent className="p-0">
                      <Skeleton className="h-80 w-full" />
                    </CardContent>
                  </Card>
                ))
            : images.map((src, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-border/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={src}
                        alt={`AI generated neon robot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
}
