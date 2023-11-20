import LoginForm from '@/components/Login/LoginForm'
import Image from 'next/image'
import styles from '@/styles/login/login.module.scss'

const Login = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/images/others/demo-logo.png'
        width={200}
        height={200}
        alt='logo'
      />
      <LoginForm />
    </div>
  )
}

export default Login
