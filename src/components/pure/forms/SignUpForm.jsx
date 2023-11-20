import styles from '@/styles/signup.module.scss'
import Link from 'next/link'

const SignUpForm = () => {
  return (
    <form className={styles.signupContainer}>
      <h3>Crear Cuenta</h3>
      <div className={styles.inputContainer}>
        <label>Username:</label>
        <input type='text' />
      </div>
      <div className={styles.inputContainer}>
        <label>Email:</label>
        <input type='email' />
      </div>
      <div className={styles.inputContainer}>
        <label>Contraseña:</label>
        <input type='password' />
      </div>
      <div className={styles.inputContainer}>
        <label>Repetir contraseña:</label>
        <input type='password' />
      </div>
      <button type='submit'>Registrar</button>
      <Link className={styles.Link} href='login'>Iniciar sesión</Link>
    </form>
  )
}

export default SignUpForm
