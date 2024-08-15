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

const TestimonialsSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
      <div className="flex flex-col items-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-md">
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="font-semibold mt-4">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
