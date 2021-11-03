import useForm from '@/lib/useForm'

const useEditTeam = options => {
  const {
    initialValues = {
      name: '',
      teams: 12,
      rounds: 14,
      order: 1,
      slots: [
        'PG',
        'SG',
        'SF',
        'PF',
        'C',
        'G',
        'F',
        'U',
        'U',
        'U',
        'B',
        'B',
        'B',
        'B',
      ],
      ir: 1,
    },
    onSubmit,
  } = options || {}
  return useForm({
    initialValues,
    onSubmit,
    validate: newValues => {
      const newErrors = {}
      const { name } = newValues
      if (name === '') newErrors.name = 'name cannot be empty'
      return newErrors
    },
  })
}

export default useEditTeam
