import React, {useState} from 'react'


function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  return(
    <form></form>
  )
}

export default RegisterForm