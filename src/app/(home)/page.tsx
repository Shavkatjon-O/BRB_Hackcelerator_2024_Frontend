"use client";

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
  },
  {
    name: "Jane Smith",
    feedback: "An intuitive and secure solution that meets all our needs. Excellent customer support!",
  },
];

const LandingPage = () => {
  return (
    <div className="text-slate-900">

      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-6xl font-extrabold">Welcome to BRB Titans</h1>
          <p className="text-xl text-gray-600">Your trusted partner for innovative banking solutions.</p>
          <Button
            variant="default" 
            size="lg" 
            className="bg-custom text-white hover:bg-red-400"
          >
            Get Started
          </Button>
        </div>
      </section>

      <Separator />

      <section className="py-12 bg-white">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:bg-custom group hover:text-white transition">
                <CardHeader className="flex justify-center">
                  <feature.icon className="w-10 h-10 text-custom" />
                </CardHeader>
                <CardContent className='group-hover:text-white'>
                  <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-700">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">Our Services</h2>
          <p className="text-lg text-center text-gray-600">We offer a range of banking services tailored to meet your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Shield className="w-12 h-12 mx-auto text-custom" />
              <h3 className="text-xl font-bold">Risk Management</h3>
              <p className="text-gray-700">Identify, assess, and control risks effectively with our comprehensive solutions.</p>
            </div>
            <div className="space-y-4">
              <CreditCard className="w-12 h-12 mx-auto text-custom" />
              <h3 className="text-xl font-bold">Card Services</h3>
              <p className="text-gray-700">Secure and seamless card services for all your banking transactions.</p>
            </div>
            <div className="space-y-4">
              <ShieldCheck className="w-12 h-12 mx-auto text-custom" />
              <h3 className="text-xl font-bold">Compliance & Audits</h3>
              <p className="text-gray-700">Stay compliant with evolving regulations and ensure audit readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">What Our Clients Say</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 justify-center">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg max-w-md mx-auto">
                <CardContent className="space-y-4">
                  <p className="italic text-gray-700">{`"${testimonial.feedback}"`}</p>
                  <p className="font-semibold text-black">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-black text-white">
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

      {/* Footer Section */}
    </div>
  );
};

export default LandingPage;
