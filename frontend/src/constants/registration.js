export const INSTITUTE_NAME = 'Instituto Bem viver'

export const INSTITUTE_ICON = {
  src: 'https://a.favicon.im/institutobemviver.org.br',
  alt: 'institutobemviver.org.br favicon',
}

export const LOCAL_STORAGE_KEY = 'ibemviver.registration'

export const REGISTRATION_FIELD_GROUPS = [
  {
    title: 'Dados pessoais',
    description: 'Informe seus dados de identificação.',
    fields: [
      { id: 'name', label: 'Nome', placeholder: 'Digite o nome' },
      { id: 'birthPlace', label: 'Local de Nascimento', placeholder: 'Digite o local de nascimento' },
      { id: 'birthDate', label: 'Data de Nascimento', placeholder: 'DD/MM/AAAA', type: 'date' },
      { id: 'email', label: 'Email', placeholder: 'Digite o email', type: 'email' },
    ],
  },
  {
    title: 'Endereço e contato',
    description: 'Informe onde e como podemos falar com você.',
    fields: [
      { id: 'phone', label: 'Telefone', placeholder: 'Digite o telefone', type: 'tel' },
      { id: 'address', label: 'Endereço', placeholder: 'Digite o endereço' },
      { id: 'city', label: 'Cidade', placeholder: 'Digite a cidade' },
      { id: 'state', label: 'Estado', placeholder: 'Digite o estado' },
    ],
  },
]

export const EMPTY_REGISTRATION = Object.fromEntries(
  REGISTRATION_FIELD_GROUPS.flatMap(({ fields }) => fields).map(({ id }) => [id, '']),
)
