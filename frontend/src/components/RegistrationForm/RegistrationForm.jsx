import { REGISTRATION_FIELD_GROUPS } from '../../constants/registration'
import { useRegistrationForm } from '../../hooks/useRegistrationForm'
import '../../styles/registration.css'
import RegistrationFields from './RegistrationFields'

function RegistrationForm() {
  const { values, handleFieldChange, saveRegistration, clearRegistration } = useRegistrationForm()

  return (
    <main className="form-page">
      <form
        className="form-card"
        onSubmit={(event) => {
          event.preventDefault()
          saveRegistration()
        }}
      >
        <div className="form-header">
          <h2>Formulário de Cadastro</h2>
          <p>Preencha as informações abaixo para concluir seu cadastro.</p>
        </div>

        {REGISTRATION_FIELD_GROUPS.map(({ title, description, fields }) => (
          <section className="form-section" key={title}>
            <div className="form-section-header">
              <h3>{title}</h3>
              {description && <p>{description}</p>}
            </div>
            <RegistrationFields fields={fields} values={values} onFieldChange={handleFieldChange} />
          </section>
        ))}

        <div className="form-actions">
          <button className="button button-secondary" type="button" onClick={clearRegistration}>
            Cancelar
          </button>
          <button className="button button-primary" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </main>
  )
}

export default RegistrationForm
