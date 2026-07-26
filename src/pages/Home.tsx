import { useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import CourseCard from '../components/CourseCard'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'
import Hero from '../sections/Hero'

const courses = [
  {
    title: 'AI Fundamentals',
    description:
      'Learn the foundations of Artificial Intelligence and how it is transforming industries.',
    icon: '🤖',
  },
  {
    title: 'Prompt Engineering',
    description:
      'Master ChatGPT and AI prompting techniques for business and productivity.',
    icon: '✍️',
  },
  {
    title: 'AI Automation',
    description:
      'Automate repetitive tasks using modern AI tools and workflows.',
    icon: '⚙️',
  },
  {
    title: 'Website Development',
    description:
      'Build modern websites using React, WordPress and AI-assisted development.',
    icon: '💻',
  },
  {
    title: 'Digital Marketing',
    description:
      'Learn SEO, social media marketing, email marketing and paid advertising.',
    icon: '📈',
  },
  {
    title: 'Data Analytics',
    description:
      'Analyze data and build dashboards for business decision making.',
    icon: '📊',
  },
]

const features = [
  {
    title: 'Expert Trainers',
    description: 'Learn directly from experienced professionals.',
    icon: '👩‍🏫',
  },
  {
    title: 'Hands-on Projects',
    description: 'Build real projects instead of watching endless videos.',
    icon: '🛠️',
  },
  {
    title: 'AI-Powered Learning',
    description: 'Use modern AI tools throughout your learning journey.',
    icon: '🧠',
  },
  {
    title: 'Flexible Learning',
    description: 'Study anytime and anywhere.',
    icon: '⏰',
  },
  {
    title: 'Career Support',
    description: 'Receive guidance to prepare for freelance and employment opportunities.',
    icon: '🚀',
  },
  {
    title: 'Certificate of Completion',
    description: 'Earn a professional certificate after completing your course.',
    icon: '🏅',
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Marketer',
    quote:
      'The AI and marketing modules helped me grow my freelance business faster than I expected.',
    initials: 'SJ',
  },
  {
    name: 'Michael David',
    role: 'Business Owner',
    quote:
      'I now automate daily tasks with AI tools and have more time to focus on strategy.',
    initials: 'MD',
  },
  {
    name: 'Aisha Bello',
    role: 'University Student',
    quote:
      'The practical lessons made complex topics feel simple and useful for real-world projects.',
    initials: 'AB',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    subtitle: 'Perfect for beginners.',
    features: ['Access to beginner courses', 'Community support', 'Certificate'],
    buttonLabel: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$99',
    subtitle: 'Most Popular',
    features: ['Everything in Starter', 'Live classes', 'AI projects', 'Career support', 'Premium certificate'],
    buttonLabel: 'Enroll Now',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: 'For companies and teams.',
    features: ['Team training', 'Dedicated support', 'Custom curriculum', 'Company certification'],
    buttonLabel: 'Contact Us',
    featured: false,
  },
]

const faqs = [
  {
    question: 'What experience do I need?',
    answer: 'No prior coding or AI experience is required. Our beginner-friendly courses are designed for learners of all backgrounds.',
  },
  {
    question: 'Will I receive a certificate?',
    answer: 'Yes. Every completed course includes a certificate of completion, and premium plans include enhanced certification.',
  },
  {
    question: 'Are the classes online?',
    answer: 'Yes. All lessons are delivered online so you can learn from anywhere at a pace that fits your schedule.',
  },
  {
    question: 'How long do the courses last?',
    answer: 'Most courses are flexible and can be completed over a few weeks, depending on your learning pace and plan.',
  },
  {
    question: 'Can I learn at my own pace?',
    answer: 'Absolutely. Our learning experience is designed to support self-paced study with practical support from mentors and peers.',
  },
]

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
            <h3>Asmart AI Academy</h3>
            <p>Practical AI and digital skills for modern careers.</p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Courses</li>
              <li>Contact</li>
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
              <span>in</span>
              <span>ig</span>
              <span>X</span>
            </div>
          </div>
        </Container>
        <div className="footer-bottom">
          <Container>
            <p>© 2026 Asmart AI Academy. All rights reserved.</p>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Home
