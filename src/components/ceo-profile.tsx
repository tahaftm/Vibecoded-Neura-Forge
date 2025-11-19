import {Github, Linkedin, Mail} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {PlaceHolderImages} from '@/lib/placeholder-images';
import {Button} from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CEOProfile() {
  const ceoImage = PlaceHolderImages.find(img => img.id === 'ceo-taha');

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Meet Our Founder
        </h2>
        <Card className="overflow-hidden border-2 border-primary bg-card">
          <div className="grid md:grid-cols-3">
            <div className="relative h-64 w-full md:h-full">
              {ceoImage && (
                <Image
                  src={ceoImage.imageUrl}
                  alt={ceoImage.description}
                  fill
                  style={{objectFit: 'cover'}}
                  className="grayscale filter transition-all duration-300 hover:grayscale-0"
                  data-ai-hint={ceoImage.imageHint}
                />
              )}
            </div>
            <div className="md:col-span-2">
              <CardHeader className="p-6">
                <CardTitle className="font-headline text-3xl">Taha Tariq</CardTitle>
                <CardDescription className="text-primary">
                  CEO & Lead Developer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6 pt-0">
                <p className="text-muted-foreground">
                  Taha is a passionate Software Engineering student at COMSATS
                  University. With a strong foundation in AI and web
                  technologies, he leads NeuraForge with a vision to innovate
                  and deliver exceptional digital products.
                </p>
                <div className="flex space-x-4 pt-2">
                  <Button asChild variant="outline" size="icon">
                    <Link
                      href="https://www.linkedin.com/in/taha-tariq-41aab8361"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link
                      href="https://github.com/tahaftm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link href="mailto:tahatariqf@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
