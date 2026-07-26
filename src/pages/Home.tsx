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

const Home = () => {
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
    </>
  )
}

export default Home
