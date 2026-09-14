/**
 * @typedef {Object} RegistrationFieldsProps
 * @property {{ id: string, label: string, placeholder: string, type?: string }[]} fields
 * @property {Record<string, string>} values
 * @property {(event: import('react').ChangeEvent<HTMLInputElement>) => void} onFieldChange
 */

/** @param {RegistrationFieldsProps} props */
function RegistrationFields({ fields, values, onFieldChange }) {
  return (
    <div className="form-questions">
      {fields.map(({ id, label, placeholder, type = 'text' }) => (
        <div className="form-question" key={id}>
          <label className="form-question-label" htmlFor={id}>
            {label}
          </label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={values[id]}
            onChange={onFieldChange}
          />
        </div>
      ))}
    </div>
  )
}

export default RegistrationFields
