// Components/Button.tsx

import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_green';
  onClick?: () => void; // Add onClick prop
}

const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {

  return (
    <div>
      <button
        className={`flexCenter gap-3 rounded-full border ${variant}`}
        type={type}
        onClick={onClick} // Pass onClick event handler
      >
        {icon && <Image src={icon} alt={title} width={20} height={20} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    </div>
  );
}

export default Button;
