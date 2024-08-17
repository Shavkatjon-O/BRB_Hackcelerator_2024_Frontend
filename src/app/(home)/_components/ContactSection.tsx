import { Mail } from 'lucide-react';

const ContactSection = () => (
  <section className="py-16 bg-blue-500 text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg mb-8">
        Have any questions or need support? Feel free to reach out to us.
      </p>
      <Mail className="w-16 h-16 mx-auto mb-4" />
      <a href="mailto:support@yourbank.com" className="text-lg underline">
        support@brb-titans.uz
      </a>
    </div>
  </section>
);

export default ContactSection;
