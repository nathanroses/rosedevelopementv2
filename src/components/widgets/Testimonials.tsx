
import { TestimonialsProps } from '~/shared/types';

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <blockquote className="text-xl font-medium">{testimonial.comment}</blockquote>
              <div className="mt-4 font-semibold">{testimonial.name}</div>
              {testimonial.image && (
                <div className="mt-4">
              
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
