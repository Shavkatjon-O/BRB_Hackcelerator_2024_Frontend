import LucideIcon from "@/components/LucideIcon"

const features = [
  {
    icon: "ChartBar",
    title: "Financial Insights",
    description: "Gain deep insights into your financial data with interactive charts and reports."
  },
  {
    icon: "User",
    title: "User Management",
    description: "Manage user roles and permissions easily with our intuitive interface."
  },
  {
    icon: "Lock",
    title: "Secure Access",
    description: "Ensure the highest level of security with advanced authentication methods."
  }
];

const FeaturesSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <LucideIcon name={feature.icon} className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
