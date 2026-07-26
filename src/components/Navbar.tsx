import Button from './Button'
import Container from './Container'

const navItems = ['Home', 'Courses', 'Pricing', 'Testimonials', 'About', 'Contact']

const Navbar = () => {
  return (
    <header className="site-header">
      <Container className="nav-shell">
        <a href="#" className="brand" aria-label="Asmart AI Academy home">
          Asmart AI Academy
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <Button>Enroll Now</Button>
      </Container>
    </header>
  )
}

export default Navbar
