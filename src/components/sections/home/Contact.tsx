'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, ChefHat } from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    party: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handleReservationSubmit = () => {
    router.push('/');
  };
  const handleCallRestaurant = () => {
    window.location.href = 'tel:+15551234567';
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation inquiry submitted:', formData);
    handleReservationSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call for Reservations',
      description: 'Speak with our host team',
      contact: '(555) 123-FOOD',
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Inquiries',
      description: 'Private events & catering',
      contact: 'events@myrestaurant.com',
      action: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'Online Booking',
      description: 'Reserve your table instantly',
      contact: 'Available 24/7',
      action: 'Book Table',
    },
  ];

  const locations = [
    {
      city: 'Downtown Location',
      address: '123 Culinary Street, Food District',
      hours: 'Mon-Sun: 11AM-10PM',
    },
    {
      city: 'Waterfront Location',
      address: '456 Harbor View Avenue',
      hours: 'Mon-Sun: 5PM-11PM',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            Reserve Your Table
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Experience Culinary
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to indulge in our signature dishes? Contact us to make a reservation or inquire
            about private dining and catering services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Reservation Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl flex items-center gap-2">
                <ChefHat className="size-6 text-primary" />
                Make a Reservation
              </CardTitle>
              <CardDescription>
                Book your table or send us a special request. We'll confirm within 2 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="party" className="block text-sm font-medium mb-2">
                    Party Size & Preferred Date
                  </label>
                  <input
                    type="text"
                    id="party"
                    name="party"
                    value={formData.party}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="4 guests - Friday, 7:30 PM"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Anniversary dinner, dietary restrictions, window seating preference..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 group bg-primary hover:bg-primary/90"
                >
                  Submit Reservation Request
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="size-5 text-primary" />
                Contact My Restaurant
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/30 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Restaurant Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Visit Our Locations
              </h3>
              <div className="space-y-3">
                {locations.map((location, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg bg-card">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-primary">{location.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-accent/20">
                        {location.hours}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Kitchen Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Thursday</span>
                    <span>11:00 AM - 9:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday - Saturday</span>
                    <span>11:00 AM - 10:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    Happy Hour: Mon-Fri 3-6 PM | Private dining available
                  </p>
                </div>
                <Button
                  onClick={handleCallRestaurant}
                  className="w-full mt-4 bg-accent hover:bg-accent/90"
                >
                  Call Now for Immediate Seating
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
