export type PricingPlan = {
  name: string
  price: string
  subtitle: string
  features: string[]
  buttonLabel: string
  featured?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '₦25,000',
    subtitle: 'Perfect for beginners.',
    features: ['Access to beginner courses', 'Community support', 'Certificate'],
    buttonLabel: 'Get Started',
  },
  {
    name: 'Professional',
    price: '₦75,000',
    subtitle: 'Most Popular',
    features: ['Everything in Starter', 'Live classes', 'AI projects', 'Career support', 'Premium certificate'],
    buttonLabel: 'Enroll Now',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    subtitle: 'For companies and teams.',
    features: ['Team training', 'Dedicated support', 'Custom curriculum', 'Company certification'],
    buttonLabel: 'Contact Us',
  },
]
