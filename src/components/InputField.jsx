const InputField = ({label,value,onChangeHandler,className}) => {
    return (
        <div className="input-field">
            <label>{label}</label><br/>
            <input class={className} type = "text" placeholder = {value} value={value} onChange={(event) => onChangeHandler(event.target.value)}/>
        </div>

    );
};

export default InputField;