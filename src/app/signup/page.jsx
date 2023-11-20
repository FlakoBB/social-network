import SignUpForm from '@/components/SignUp/SignUpForm'
import styles from '@/styles/signup/signup.module.scss'
import Image from 'next/image'

const SignUp = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/images/others/demo-logo.png'
        width={200}
        height={200}
        alt='logo'
      />
      <SignUpForm />
    </div>
  )
}

export default SignUp
