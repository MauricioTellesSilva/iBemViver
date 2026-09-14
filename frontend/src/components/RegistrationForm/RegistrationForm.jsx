import { REGISTRATION_FIELD_GROUPS } from '../../constants/registration'
import { useRegistrationForm } from '../../hooks/useRegistrationForm'
import '../../styles/registration.css'
import RegistrationFields from './RegistrationFields'

function RegistrationForm() {
  const { values, handleFieldChange, saveRegistration, clearRegistration } = useRegistrationForm()

  return (
    <main>
      {REGISTRATION_FIELD_GROUPS.map((fields) => (
        <RegistrationFields
          fields={fields}
          values={values}
          onFieldChange={handleFieldChange}
          key={fields[0].id}
        />
      ))}
      <button className="button" type="button" onClick={saveRegistration}>
        Salvar
      </button>
      <button className="button" type="button" onClick={clearRegistration}>
        Cancelar
      </button>
    </main>
  )
}

export default RegistrationForm
