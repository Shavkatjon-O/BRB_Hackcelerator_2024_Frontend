import {
  ChartBar,
  User,
  Users,
  Lock,
  Mail
} from 'lucide-react';

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

const HomePage = () => (
  <>
    <section className="relative bg-blue-500 text-white">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to BRB Titans</h1>
        <p className="text-xl mb-8">The best place for your banking needs.</p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-lg">
          Get Started
        </button>
      </div>
    </section>

    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-8">
          We are dedicated to providing the best banking experience for you. Our team is passionate about delivering top-notch services.
        </p>
        <Users className="w-16 h-16 mx-auto text-blue-500" />
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="flex flex-col items-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-md">
              <p className="italic">{`"${testimonial.feedback}"`}</p>
              <p className="font-semibold mt-4">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

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
  </>
);

export default HomePage;
