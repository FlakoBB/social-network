import Link from 'next/link'
import styles from '@/styles/login.module.scss'

const LoginForm = () => {
  return (
    <form className={styles.loginContainer}>
      <h3>Iniciar Sesión</h3>
      <div className={styles.inputContainer}>
        <label>Email:</label>
        <input type='email' />
      </div>
      <div className={styles.inputContainer}>
        <label>Contraseña:</label>
        <input type='password' />
      </div>
      <button type='submit'>Entrar</button>
      <Link className={styles.Link} href='signup'>Crear cuenta</Link>
    </form>
  )
}

export default LoginForm
