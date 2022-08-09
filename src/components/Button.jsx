const Button = (props) => {
    const {label, handleClick,className} = props;
    return (
        <button class={className} onClick = {() => handleClick()}>{label}</button>
    );
    
}

export default Button;