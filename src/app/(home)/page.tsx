"use client";

import Link from 'next/link';

import {
  User,
  Lock,
  ChartBar,
  Shield,
  CreditCard,
  Globe,
  ShieldCheck,
  Phone,
} from 'lucide-react';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: ChartBar,
    title: 'Financial Insights',
    description: 'Gain insights into your financial data with interactive reports and analytics.',
  },
  {
    icon: User,
    title: 'User Management',
    description: 'Manage roles and permissions with an easy-to-use interface.',
  },
  {
    icon: Lock,
    title: 'Secure Access',
    description: 'Advanced security features to protect your data and assets.',
  },
  {
    icon: Shield,
    title: 'Fraud Detection',
    description: 'AI-powered systems to detect and prevent fraudulent activities.',
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions',
    description: 'Seamless payment processing tailored to your banking needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    description: 'Ensuring compliance with financial regulations and standards.',
  },
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "This platform has transformed how we handle our banking operations. Highly recommended!",
    image: "/path/to/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "An intuitive and secure solution that meets all our needs. Excellent customer support!",
    image: "/path/to/jane-smith.jpg",
  },
];

const LandingPage = () => {
  return (
    <div className="text-slate-900">

      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-6xl font-extrabold">Welcome to BRB Titans</h1>
          <p className="text-xl text-gray-600">Your trusted partner for innovative banking solutions.</p>
          <div>
            <Link href="/sign-up">
              <Button
                variant="default" 
                size="lg" 
                className="bg-custom text-white hover:bg-red-400"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:bg-custom group transition-colors duration-300 ease-in-out"
              >
                <CardHeader className="flex justify-center">
                  <feature.icon className="w-10 h-10 text-custom group-hover:text-white transition-colors duration-300 ease-in-out" />
                </CardHeader>

                <CardContent className="group-hover:text-white transition-colors duration-300 ease-in-out">
                  <CardTitle className="text-2xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 bg-white">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">Our Services</h2>
          <p className="text-lg text-center text-gray-600">We offer a range of banking services tailored to meet your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="p-6 hover:bg-custom group transition-colors duration-300 ease-in-out"
            >
              <CardHeader className="flex justify-center">
                <Shield className="w-10 h-10 text-custom group-hover:text-white transition-colors duration-300 ease-in-out" />
              </CardHeader>

              <CardContent className="group-hover:text-white transition-colors duration-300 ease-in-out">
                <CardTitle className="text-2xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                  Risk Management
                </CardTitle>
                <CardDescription className="text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Identify, assess, and control risks effectively with our comprehensive solutions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card
              className="p-6 hover:bg-custom group transition-colors duration-300 ease-in-out"
            >
              <CardHeader className="flex justify-center">
                <CreditCard className="w-10 h-10 text-custom group-hover:text-white transition-colors duration-300 ease-in-out" />
              </CardHeader>

              <CardContent className="group-hover:text-white transition-colors duration-300 ease-in-out">
                <CardTitle className="text-2xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                  Card Services
                </CardTitle>
                <CardDescription className="text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Secure and seamless card services for all your banking transactions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card
              className="p-6 hover:bg-custom group transition-colors duration-300 ease-in-out"
            >
              <CardHeader className="flex justify-center">
                <ShieldCheck className="w-10 h-10 text-custom group-hover:text-white transition-colors duration-300 ease-in-out" />
              </CardHeader>

              <CardContent className="group-hover:text-white transition-colors duration-300 ease-in-out">
                <CardTitle className="text-2xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                  Compliance & Audits
                </CardTitle>
                <CardDescription className="text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Stay compliant with evolving regulations and ensure audit readiness.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">What Our Clients Say</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 justify-center">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg max-w-md mx-auto">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}'s photo`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="italic text-gray-700">{`"${testimonial.feedback}"`}</p>
                      <p className="font-semibold text-black">- {testimonial.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-custom text-white">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your Banking Experience?</h2>
          <p className="text-lg text-gray-300">Join thousands of satisfied clients. Contact us today!</p>
          <Button variant="outline" size="lg" className="hover:bg-white hover:text-black">Get Started</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">About Us</h2>
          <p className="text-lg text-center text-gray-600">
            At BRB Titans, we are committed to delivering innovative banking solutions that meet the highest standards of security and reliability. Our team of experts is dedicated to helping you achieve your financial goals.
          </p>
          <Globe className="w-12 h-12 mx-auto text-black" />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto space-y-12 text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-gray-600">Have any questions or need support? Reach out to us!</p>
          <div className="space-y-4">
            <a href="mailto:support@brb-titans.uz" className="text-lg underline">support@brb-titans.uz</a>
            <p className="text-lg">
              Or call us: <Phone className="inline w-5 h-5 mx-2" /> +998 71 123 45 67
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
