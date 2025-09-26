import {type ButtonProps} from '@/interfaces';

const Button:React.FC<ButtonProps> = ({size, shape}) => {
    const sizeClass = size === 'small' ? 'btn-small' : size === 'large' ? 'btn-large' : 'btn-medium';
    return(
        <button className={`btn ${sizeClass} ${shape}`}>Click Me</button>
    )
}

export default Button;