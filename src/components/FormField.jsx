export default function FormField ({ id, label, inputType, value, onChange }) {
    return (

        <div className="form-field">
        <label htmlFor={id}>
            {label}
        </label>

        <input
        value={value}
        id={id}
        name={id}
        type={inputType}
        onChange={onChange}
        />
        </div>
    )



}