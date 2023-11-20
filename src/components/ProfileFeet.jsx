import styles from '@/styles/profileFeet.module.scss'
import Image from 'next/image'
import Publication from './Publication'
import SuggestionContainer from './pure/SuggestionContainer'
import UserInfo from './pure/UserInfo'

const ProfileFeet = () => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <figure className={styles.banner}>
          <Image
            src='/images/others/codigoHTML.jpg'
            width={848}
            height={300}
            alt='banner'
          />
        </figure>
        <div className={styles.profile}>
          <figure className={styles.userImg}>
            <Image
              src='/images/profilePictures/DanielaMelchior.png'
              width={250}
              height={250}
              alt=''
            />
          </figure>
          <button className={styles.button}>Editar perfil</button>
        </div>
      </header>
      <section className={styles.profileInfo}>
        <header className={styles.headerDescription}>
          <div>
            <h1 className={styles.userName}>Daniela Melchior</h1>
            <h2 className={styles.role}>Front-End Developer</h2>
          </div>
          <span className={styles.span}>1.3 M seguidores</span>
          <span className={styles.span}>720 seguidos</span>
        </header>
        <p className={styles.description}>
          Hola! Soy una apasionada desarrolladora web front end con un amor
          desbordante por convertir ideas creativas en experiencias digitales
          cautivadoras. Mi código es como un lienzo en blanco que cobra vida con
          cada línea que escribo,
          <span className={styles.span}>...ver más</span>
        </p>
        <button className={styles.button}>Crear Publicación</button>
      </section>
      <section className={styles.actions}>
        <div className={styles.publications}>
          <Publication />
        </div>
        <div className={styles.suggestion}>
          <SuggestionContainer title='Perfiles relacionados'>
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
          </SuggestionContainer>
        </div>
      </section>
    </div>
  )
}

export default ProfileFeet
