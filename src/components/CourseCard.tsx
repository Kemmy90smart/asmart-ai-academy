type CourseCardProps = {
  title: string
  description: string
  icon: string
}

const CourseCard = ({ title, description, icon }: CourseCardProps) => {
  return (
    <article className="course-card">
      <div className="course-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button type="button" className="course-link">
        Learn More
      </button>
    </article>
  )
}

export default CourseCard
