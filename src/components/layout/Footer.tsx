'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Clock,
  ChefHat,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const footerSections = [
    {
      title: 'Menu',
      links: [
        { name: 'Appetizers', href: '#appetizers' },
        { name: 'Main Courses', href: '#mains' },
        { name: 'Desserts', href: '#desserts' },
        { name: 'Beverages', href: '#drinks' },
        { name: "Chef's Specials", href: '#specials' },
        { name: 'Wine List', href: '#wine' },
      ],
    },
    {
      title: 'Restaurant',
      links: [
        { name: 'About Our Story', href: '#about' },
        { name: 'Our Chefs', href: '#chefs' },
        { name: 'Private Events', href: '#events' },
        { name: 'Catering', href: '#catering' },
        { name: 'Gift Cards', href: '#gifts' },
        { name: 'Reviews', href: '#reviews' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Table Reservations', href: '#reservations' },
        { name: 'Online Ordering', href: '#order' },
        { name: 'Delivery', href: '#delivery' },
        { name: 'Takeout', href: '#takeout' },
        { name: 'Group Dining', href: '#groups' },
        { name: 'Special Occasions', href: '#occasions' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'Hours & Location', href: '#hours' },
        { name: 'Parking Info', href: '#parking' },
        { name: 'Dietary Options', href: '#dietary' },
        { name: 'Health & Safety', href: '#safety' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact Us', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/myrestaurant' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/myrestaurant' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/myrestaurant' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/myrestaurant' },
  ];

  return (
    <footer className="bg-card border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Restaurant Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <ChefHat className="size-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl text-primary">My Restaurant</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Experience authentic flavors and exceptional dining in the heart of the city. Our
                passionate chefs create memorable meals using the finest local ingredients.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">reservations@myrestaurant.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(555) DINE-OUT</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">456 Culinary Street, Downtown</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Mon-Sun: 11:30 AM - 10:00 PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-primary">Join Our Food Family</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email for special offers"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button
                  size="sm"
                  className="px-3 bg-primary hover:bg-primary/90"
                  onClick={handlePrimaryAction}
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get exclusive recipes, special offers, and event invitations. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 My Restaurant. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> by our culinary
                team
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow our journey:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link
              href="#allergens"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Allergen Information
            </Link>
            <Link
              href="#nutrition"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Nutritional Guide
            </Link>
            <Link
              href="#accessibility"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="#feedback"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Share Feedback
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
