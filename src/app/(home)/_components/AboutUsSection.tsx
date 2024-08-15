import { Users } from 'lucide-react';

const AboutUsSection = () => (
  <section className="py-16 bg-gray-200">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="text-lg mb-8">
        We are dedicated to providing the best banking experience for you. Our team is passionate about delivering top-notch services.
      </p>
      <Users className="w-16 h-16 mx-auto text-blue-500" />
    </div>
  </section>
);

export default AboutUsSection;
