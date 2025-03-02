import { dividerClasses } from '@mui/material'
import React, {useState} from 'react'


function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const {register} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Its not the same password!')
      return
    }

    try {
      await register({
        name: formData.name,
        email: formData.email
      })
      onclose()
    } catch (err) {
      setError('Error of registration!')
    }
  }

  return(
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Registration</h2>

      {error && <div className='error-message'>{error}</div>}

      <div className='form-group'>
        <label>Name</label>
        <input 
          type="text"
          value={formData.name} 
          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
          required
        />
      </div>
    </form>
  )
}

export default RegisterForm