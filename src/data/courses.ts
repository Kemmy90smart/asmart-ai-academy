export type CourseItem = {
  title: string
  description: string
  icon: string
}

export const courses: CourseItem[] = [
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
