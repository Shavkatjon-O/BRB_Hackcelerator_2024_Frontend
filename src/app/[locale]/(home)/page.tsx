"use client";

import {Link} from "@/i18n/routing";
import Image from 'next/image';

import coreApi from '@/lib/coreApi';
import Cookies from 'js-cookie';

import {
  User,
  Lock,
  ChartBar,
  Shield,
  CreditCard,
  Globe,
  ShieldCheck,
  Monitor,
  Smartphone,
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


const login = async () => {
  const response = await coreApi.post('/auth/login', {
    email: 'shavkatjon@gmail.com',
    password: 'Shovkatbek_1',
  });
  Cookies.set('accessToken', response.data.accessToken);
  Cookies.set('refreshToken', response.data.refreshToken);
}


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
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Jane Smith",
    feedback: "An intuitive and secure solution that meets all our needs. Excellent customer support!",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Alex Johnson",
    feedback: "A remarkable service that has exceeded our expectations!",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];

const LandingPage = () => {
  return (
    <div className="text-slate-950 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-6xl font-extrabold">Welcome to BRB Titans</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Your trusted partner for innovative banking solutions.</p>
          <div>
            <Link href="/sign-up">
              <Button
                variant="default" 
                size="lg" 
                className="bg-custom text-white hover:bg-red-400 dark:bg-custom-dark dark:hover:bg-red-500"
                onClick={login}
              >
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* Key Features Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:bg-custom dark:hover:bg-custom-dark group transition-colors duration-300 ease-in-out"
              >
                <CardHeader className="flex justify-center">
                  <feature.icon className="w-10 h-10 text-custom group-hover:text-white dark:text-custom-dark group-hover:dark:text-white transition-colors duration-300 ease-in-out" />
                </CardHeader>

                <CardContent className="group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                  <CardTitle className="text-2xl font-semibold group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* About Us Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">About Us</h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300">
            At BRB Titans, we are committed to delivering innovative banking solutions that meet the highest standards of security and reliability. Our team of experts is dedicated to helping you achieve your financial goals.
          </p>
          <Globe className="w-12 h-12 mx-auto text-custom dark:text-custom-dark" />
        </div>
      </section>

      <Separator />

      {/* Our Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">Our Services</h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300">We offer a range of banking services tailored to meet your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:bg-custom dark:hover:bg-custom-dark group transition-colors duration-300 ease-in-out">
              <CardHeader className="flex justify-center">
                <Shield className="w-10 h-10 text-custom dark:text-custom-dark group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out" />
              </CardHeader>

              <CardContent className="group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                <CardTitle className="text-2xl font-semibold group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                  Risk Management
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                  Identify, assess, and control risks effectively with our comprehensive solutions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="p-6 hover:bg-custom dark:hover:bg-custom-dark group transition-colors duration-300 ease-in-out">
              <CardHeader className="flex justify-center">
                <CreditCard className="w-10 h-10 text-custom dark:text-custom-dark group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out" />
              </CardHeader>

              <CardContent className="group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                <CardTitle className="text-2xl font-semibold group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                  Card Services
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                  Secure and seamless card services for all your banking transactions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="p-6 hover:bg-custom dark:hover:bg-custom-dark group transition-colors duration-300 ease-in-out">
              <CardHeader className="flex justify-center">
                <ShieldCheck className="w-10 h-10 text-custom dark:text-custom-dark group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out" />
              </CardHeader>

              <CardContent className="group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                <CardTitle className="text-2xl font-semibold group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                  Compliance & Audits
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white transition-colors duration-300 ease-in-out">
                  Stay compliant with evolving regulations and ensure audit readiness.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-28 bg-custom dark:bg-custom-dark text-white">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your Banking Experience?</h2>
          <p className="text-lg">Join thousands of satisfied clients. Contact us today!</p>
          <Button variant="default" size="lg" className="bg-white text-black hover:text-white dark:bg-white dark:text-black"
                  onClick={
                    login
                  }>
            Try Demo
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto text-center space-y-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-slate-950 p-8 rounded-lg flex flex-col justify-between shadow">
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s photo`}
                    width={64}
                    height={64}
                    className="object-cover w-32 h-32 rounded-full border-2 p-1 border-custom dark:border-custom-dark"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">{testimonial.feedback}</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Download Buttons Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto space-y-12 text-center">
          <h2 className="text-4xl font-bold">Download Our App</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get the best experience by downloading our app for desktop and mobile.
          </p>
          <div className="flex justify-center space-x-8">
            {/* Desktop Button */}
            <Link href="/downpage">
              <Button variant="default" size="lg" className="flex items-center space-x-2 bg-custom text-white hover:bg-red-400 dark:bg-custom-dark dark:hover:bg-red-500">
                <Monitor className="w-5 h-5" />
                <span>Desktop (Windows)</span>
              </Button>
            </Link>
            {/* Mobile Button */}
            <Link href="/downpage">
              <Button variant="default" size="lg" className="flex items-center space-x-2 bg-custom text-white hover:bg-red-400 dark:bg-custom-dark dark:hover:bg-red-500">
                <Smartphone className="w-5 h-5" />
                <span>Mobile (Android)</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Us Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300">We would love to hear from you. Please fill out the form below, and our team will get in touch with you.</p>
          <form className="max-w-4xl mx-auto bg-white dark:bg-slate-950 p-8 rounded-lg border dark:border-slate-600 shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom dark:border-gray-600 dark:bg-slate-900 dark:text-gray-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom dark:border-gray-600 dark:bg-slate-900 dark:text-gray-300"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom dark:border-gray-600 dark:bg-slate-900 dark:text-gray-300"
              />
            </div>
            <div className="mt-6 text-center">
              <Button variant="default" size="lg" className="bg-custom text-white hover:bg-red-400 dark:bg-custom-dark dark:hover:bg-red-500">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
