import * as yup from 'yup'

let passwordRules = ''

export const validationSchema = yup.object().shape({
    email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required')
    .min(4, 'Email must be at least 4 characters')
    .max(25, 'Email must not exceed 25 characters'),

    password: yup
    .string()
    .required('Required')
    .min(4, 'Password must be at least 4 characters')
    .max(25, 'Password must not exceed 25 characters')
    .matches(passwordRules),
})
