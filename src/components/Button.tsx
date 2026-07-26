type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, variant = 'primary', className = '', type = 'button' }: ButtonProps) => {
  const variantClass = variant === 'secondary' ? 'button button-secondary' : 'button button-primary'

  return (
    <button type={type} className={`${variantClass} ${className}`.trim()}>
      {children}
    </button>
  )
}

export default Button
