'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  ChefHat,
  Users,
  Award,
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Clock,
  Heart,
  Utensils,
} from 'lucide-react';

export default function About() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const values = [
    {
      icon: ChefHat,
      title: 'Authentic Recipes',
      description:
        'We use traditional family recipes passed down through generations, bringing you the most authentic flavors from our kitchen to your table.',
    },
    {
      icon: Utensils,
      title: 'Fresh Ingredients',
      description:
        'Every dish is prepared with locally sourced, farm-fresh ingredients delivered daily to ensure the highest quality and taste.',
    },
    {
      icon: Heart,
      title: 'Family Atmosphere',
      description:
        'Our warm, welcoming environment makes every guest feel like part of our extended family, creating memorable dining experiences.',
    },
    {
      icon: MapPin,
      title: 'Community Focused',
      description:
        "Proudly serving our local community for over a decade, we're committed to being your neighborhood's favorite dining destination.",
    },
  ];

  const stats = [
    { value: '2012', label: 'Established', icon: Award },
    { value: '15K+', label: 'Happy Diners', icon: Users },
    { value: '4.8★', label: 'Average Rating', icon: Star },
    { value: '7', label: 'Days a Week', icon: Clock },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Head Chef & Owner',
      image: 'MR',
      bio: '30+ years of culinary expertise specializing in Mediterranean and Latin fusion cuisine.',
    },
    {
      name: 'Antonio Silva',
      role: 'Executive Chef',
      image: 'AS',
      bio: 'Trained in Italy and Spain, bringing authentic European techniques to every dish.',
    },
    {
      name: 'Carmen Lopez',
      role: 'Pastry Chef',
      image: 'CL',
      bio: 'Award-winning dessert specialist creating handcrafted sweets and artisanal breads daily.',
    },
    {
      name: 'Diego Martinez',
      role: 'Restaurant Manager',
      image: 'DM',
      bio: 'Hospitality expert ensuring every guest receives exceptional service and memorable experiences.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            About My Restaurant
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Culinary Excellence
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Since 2012
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team of culinary artists and hospitality professionals dedicated to
            bringing you exceptional dining experiences with authentic flavors and warm service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Culinary Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2012 by Chef Maria Rodriguez, My Restaurant began as a dream to share her
                grandmother's traditional recipes with our local community.
              </p>
              <p>
                What started as a small family kitchen has grown into a beloved neighborhood
                institution, where every dish tells a story and every meal creates lasting memories.
              </p>
              <p>
                Today, we're proud to have served over 15,000 satisfied diners, maintaining our
                commitment to authentic flavors, fresh ingredients, and exceptional hospitality.
              </p>
            </div>
            <Button onClick={handlePrimaryAction} className="group bg-primary hover:bg-primary/90">
              Explore Our Menu
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Food is love made visible. Every dish we serve carries our passion and
                      heritage."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Maria Rodriguez, Head Chef
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/20 hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Makes Us Special</h3>
            <p className="text-muted-foreground">
              The core principles that guide our kitchen and define our commitment to exceptional
              dining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Culinary Team</h3>
            <p className="text-muted-foreground">
              The talented chefs and hospitality professionals who make every dining experience
              exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleSecondaryAction}
              variant="outline"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Reserve Your Table
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "My Restaurant has become our family's go-to place for special occasions. The food
                is consistently amazing and the staff treats us like family every time."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  SJ
                </div>
                <div className="text-left">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Local Food Enthusiast</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
