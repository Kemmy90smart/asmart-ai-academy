import { useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import CourseCard from '../components/CourseCard'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'
import { courses } from '../data/courses'
import { faqs } from '../data/faq'
import { features } from '../data/features'
import { pricingPlans } from '../data/pricing'
import { siteData } from '../data/site'
import { testimonials } from '../data/testimonials'
import Hero from '../sections/Hero'

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Hero />

      <section className="courses-section" id="courses">
        <Container>
          <div className="courses-heading">
            <p className="section-tag">Featured AI Courses</p>
            <h2>Featured AI Courses</h2>
            <p className="section-text">
              Master practical digital and AI skills designed for today's job market.
            </p>
            <div className="course-badges" aria-label="Course highlights">
              <span>✓ Beginner Friendly</span>
              <span>✓ Hands-on Projects</span>
              <span>✓ Certificate of Completion</span>
            </div>
          </div>

          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </Container>
      </section>

      <section className="features-section" id="about">
        <Container>
          <div className="section-heading">
            <p className="section-tag">Why Choose Asmart AI Academy</p>
            <h2>Why Choose Asmart AI Academy?</h2>
            <p className="section-text">
              We combine practical training, AI-powered learning and real-world projects to prepare you
              for today's digital economy.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="testimonials-section" id="testimonials">
        <Container>
          <div className="section-heading">
            <p className="section-tag">Student Stories</p>
            <h2>What Our Students Say</h2>
            <p className="section-text">
              Real learners sharing how Asmart AI Academy helped them build confidence and skills.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pricing-section" id="pricing">
        <Container>
          <div className="section-heading">
            <p className="section-tag">Pricing</p>
            <h2>Affordable Learning Plans</h2>
            <p className="section-text">
              Choose a learning plan that fits your career goals.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}>
                {plan.featured && <span className="pricing-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <p className="pricing-subtitle">{plan.subtitle}</p>
                <div className="pricing-price">{plan.price}</div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <Button variant={plan.featured ? 'primary' : 'secondary'}>{plan.buttonLabel}</Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="faq-section" id="contact">
        <Container>
          <div className="section-heading">
            <p className="section-tag">FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index

              return (
                <div key={item.question} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <div className="cta-card">
            <div>
              <p className="section-tag">Join the Future</p>
              <h2>Start Your AI Journey Today</h2>
              <p>
                Join hundreds of learners building the future with AI.
              </p>
            </div>
            <div className="cta-actions">
              <Button>Enroll Today</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>
        </Container>
      </section>

      <footer className="site-footer">
        <Container className="footer-shell">
          <div>
            <h3>{siteData.academyName}</h3>
            <p>Practical AI and digital skills for modern careers.</p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>{siteData.phone}</li>
              <li>{siteData.email}</li>
              <li>{siteData.address}</li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className="social-links" aria-label="Social links">
              {siteData.socialLinks.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>
          </div>
        </Container>
        <div className="footer-bottom">
          <Container>
            <p>© {siteData.currentYear} {siteData.academyName}. All rights reserved.</p>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Home
