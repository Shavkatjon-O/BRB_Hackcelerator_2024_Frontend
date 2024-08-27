"use client";

import {
  User,
  Users,
  Lock,
  ChartBar,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: ChartBar,
    title: 'Financial Insights',
    description: 'Gain deep insights into your financial data with interactive charts and reports.'
  },
  {
    icon: User,
    title: 'User Management',
    description: 'Manage user roles and permissions easily with our intuitive interface.'
  },
  {
    icon: Lock,
    title: 'Secure Access',
    description: 'Ensure the highest level of security with advanced authentication methods.'
  }
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "This platform has transformed how we handle our banking operations. Highly recommended!"
  },
  {
    name: "Jane Smith",
    feedback: "An intuitive and secure solution that meets all our needs. Excellent customer support!"
  }
];

const LandingPage = () => {
  return (
    <div className='h-full w-full'>
      <section className="relative bg-blue-500 text-white py-36">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold">Welcome to BRB Titans</h1>
          <p className="text-xl">The best place for your banking needs.</p>
          <Button variant="default" size="lg" className="bg-white text-black hover:text-white">Get Started</Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="flex justify-center">
                  <feature.icon className="w-12 h-12 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-lg">
            We are dedicated to providing the best banking experience for you. Our team is passionate about delivering top-notch services.
          </p>
          <Users className="w-16 h-16 mx-auto text-blue-500" />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <div className="flex flex-col items-center space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="max-w-md p-6">
                <CardContent>
                  <p className="italic">{`"${testimonial.feedback}"`}</p>
                  <p className="font-semibold mt-4">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-lg">
            Have any questions or need support? Feel free to reach out to us.
          </p>
          <Mail className="w-16 h-16 mx-auto mb-4" />
          <a href="mailto:support@brb-titans.uz" className="text-lg underline">
            support@brb-titans.uz
          </a>
          <p className="mt-4">Or call us: <Phone className="inline w-5 h-5 mx-2" /> +998 71 123 45 67</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Our Global Presence</h2>
          <Globe className="w-16 h-16 mx-auto text-blue-500" />
          <p className="text-lg">
            We serve clients across the globe with a strong commitment to excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
