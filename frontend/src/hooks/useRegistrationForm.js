import { useCallback, useState } from 'react'
import { EMPTY_REGISTRATION, LOCAL_STORAGE_KEY } from '../constants/registration'

function getInitialRegistration() {
  try {
    const storedRegistration = window.localStorage.getItem(LOCAL_STORAGE_KEY)

    return storedRegistration
      ? { ...EMPTY_REGISTRATION, ...JSON.parse(storedRegistration) }
      : EMPTY_REGISTRATION
  } catch {
    return EMPTY_REGISTRATION
  }
}

export function useRegistrationForm() {
  const [values, setValues] = useState(getInitialRegistration)

  const handleFieldChange = useCallback(({ target: { id, value } }) => {
    setValues((currentValues) => ({ ...currentValues, [id]: value }))
  }, [])

  const saveRegistration = useCallback(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values))
  }, [values])

  const clearRegistration = useCallback(() => {
    setValues(EMPTY_REGISTRATION)
  }, [])

  return { values, handleFieldChange, saveRegistration, clearRegistration }
}
