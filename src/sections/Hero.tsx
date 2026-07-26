import Button from '../components/Button'
import Container from '../components/Container'

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <Container className="hero-shell">
        <div className="hero-copy">
          <p className="hero-badge">🚀 Nigeria's Practical AI Learning Platform</p>
          <h1>Master AI Skills That Transform Your Career</h1>
          <p className="hero-text">
            Learn ChatGPT, AI Automation, Prompt Engineering, Website Development and Digital
            Marketing from industry professionals.
          </p>

          <div className="hero-actions">
            <Button>Start Learning</Button>
            <Button variant="secondary">Watch Demo</Button>
          </div>

          <div className="hero-trust" aria-label="Trust indicators">
            <span>✓ Beginner Friendly</span>
            <span>✓ Live Projects</span>
            <span>✓ Certificate Included</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="AI dashboard illustration preview">
          <div className="dashboard-shell">
            <div className="floating-card floating-card-top">
              <span className="card-label">AI Growth</span>
              <strong>+128%</strong>
              <small>Career boost</small>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="card-label">Live Mentors</span>
              <strong>24/7</strong>
              <small>Instant support</small>
            </div>

            <div className="dashboard-panel">
              <div className="panel-topbar">
                <div>
                  <p className="panel-title">AI Academy Dashboard</p>
                  <p className="panel-subtitle">Weekly learning pulse</p>
                </div>
                <span className="panel-badge">New</span>
              </div>

              <div className="panel-grid">
                <div className="panel-main">
                  <div className="metric-card">
                    <div className="metric-row">
                      <span>Completion</span>
                      <strong>82%</strong>
                    </div>
                    <div className="progress-bar">
                      <span></span>
                    </div>
                  </div>

                  <div className="chart-card">
                    <div className="chart-line chart-line-one"></div>
                    <div className="chart-line chart-line-two"></div>
                    <div className="chart-line chart-line-three"></div>
                  </div>
                </div>

                <div className="chat-card">
                  <div className="chat-bubble ai-bubble">
                    <span className="dot"></span>
                    Your AI roadmap is ready.
                  </div>
                  <div className="chat-bubble user-bubble">I want to build with ChatGPT.</div>
                  <div className="chat-input">Ask your next prompt...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
