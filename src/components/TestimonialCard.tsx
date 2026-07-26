type TestimonialCardProps = {
  name: string
  role: string
  quote: string
  initials: string
}

const TestimonialCard = ({ name, role, quote, initials }: TestimonialCardProps) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-avatar" aria-hidden="true">
        {initials}
      </div>
      <div className="testimonial-rating">★★★★★</div>
      <p className="testimonial-quote">“{quote}”</p>
      <h3>{name}</h3>
      <p className="testimonial-role">{role}</p>
    </article>
  )
}

export default TestimonialCard
