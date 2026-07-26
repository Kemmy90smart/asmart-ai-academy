type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

const Button = ({ children, variant = 'primary', className = '' }: ButtonProps) => {
  const variantClass = variant === 'secondary' ? 'button button-secondary' : 'button button-primary'

  return <button className={`${variantClass} ${className}`.trim()}>{children}</button>
}

export default Button
