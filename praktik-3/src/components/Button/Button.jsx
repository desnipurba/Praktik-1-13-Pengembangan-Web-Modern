import './Button.css';

const Button = ({ label, onClick, variant = 'primary', small = false }) => {
  return (
    <button
      className={`btn ${variant} ${small ? 'small' : ''}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
