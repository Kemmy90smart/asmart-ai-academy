import Container from '../components/Container'
import CourseCard from '../components/CourseCard'
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
    </>
  )
}

export default Home
