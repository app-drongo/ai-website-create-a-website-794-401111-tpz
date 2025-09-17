// components/hero/SplitHero.tsx
'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Navigate to reservation system
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Open virtual tour video
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Red and yellow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              Now Open: Fresh Daily Specials
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Authentic flavors meet
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Modern dining
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Experience culinary excellence at My Restaurant, where locally-sourced ingredients
              transform into unforgettable dishes in our warm, welcoming atmosphere.
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                'Farm-to-table ingredients',
                'Award-winning chef',
                'Private dining available',
                'Full bar & wine selection',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-7 text-base bg-primary hover:bg-primary/90"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Reserve Your Table
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-accent text-accent hover:bg-accent/10"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5" /> Virtual Tour
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Restaurant image container */}
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
                  alt="My Restaurant interior dining room with elegant table settings"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Live status overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium shadow border border-primary/20">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Open Now
              </div>
            </div>

            {/* Floating review card */}
            <div className="absolute -right-6 -top-6 hidden w-40 rounded-xl border bg-background/95 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Customer Rating</p>
              <p className="text-sm">
                <span className="font-semibold text-accent">4.8★</span> (247 reviews)
              </p>
            </div>

            {/* Floating hours card */}
            <div className="absolute -left-6 -bottom-6 hidden w-40 rounded-xl border bg-background/95 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Today's Hours</p>
              <p className="text-sm">
                <span className="font-semibold">5PM - 11PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
