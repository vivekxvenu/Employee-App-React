const InputSelect = ({
    label,
    options,
    onChangeHandler,
    value
}) => {
    return (
        <div className="input-field">
            <label>{label}</label><br/>
            <select name={label} value={value} onChange={(event) => onChangeHandler(event.target.value)}>
                {options.map((item)=>(
                    <option key={item.value} value={item.value} >{item.field} </option>
                ))}
            </select>
        </div>
    );
}

export default InputSelect;