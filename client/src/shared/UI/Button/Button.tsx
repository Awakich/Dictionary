import './button.scss';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'large';
  label: string;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  size = 'small',
  label,
  onClick,
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      onClick={onClick}
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    >
      {label}
    </button>
  );
};

export default Button;