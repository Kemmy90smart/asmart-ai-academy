type FeatureCardProps = {
  title: string
  description: string
  icon: string
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
