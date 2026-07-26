import Button from '../components/Button'
import Container from '../components/Container'

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <Container className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">AI Education for Modern Careers</p>
          <h1>Master AI Skills That Transform Your Career</h1>
          <p className="hero-text">
            Learn ChatGPT, AI Automation, Prompt Engineering, Website Development and Digital
            Marketing from industry professionals.
          </p>

          <div className="hero-actions">
            <Button>Start Learning</Button>
            <Button variant="secondary">Watch Demo</Button>
          </div>
        </div>

        <div className="hero-visual" aria-label="AI academy illustration preview">
          <div className="visual-glow" />
          <div className="visual-card">
            <div className="visual-chip">Live Cohorts</div>
            <div className="visual-metrics">
              <span>+120% Career Growth</span>
              <span>24/7 Mentor Support</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
