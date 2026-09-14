/**
 * @typedef {Object} RegistrationFieldsProps
 * @property {{ id: string, label: string, placeholder: string }[]} fields
 * @property {Record<string, string>} values
 * @property {(event: import('react').ChangeEvent<HTMLInputElement>) => void} onFieldChange
 */

/** @param {RegistrationFieldsProps} props */
function RegistrationFields({ fields, values, onFieldChange }) {
  return (
    <>
      <nav className="registration-labels" aria-label="Campos de cadastro">
        {fields.map(({ id, label }) => (
          <p className="registration-option" key={id}>{label}</p>
        ))}
      </nav>
      <nav className="registration-fields">
        {fields.map(({ id, label, placeholder }) => (
          <input
            id={id}
            key={id}
            type="text"
            placeholder={placeholder}
            value={values[id]}
            onChange={onFieldChange}
            aria-label={label}
          />
        ))}
      </nav>
    </>
  )
}

export default RegistrationFields
