'use client'
import styles from '@/styles/sideMenu.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { HomeIcon, UserIcon, MagnifyingGlassIcon, PlusIcon, BellIcon, PaperAirplaneIcon, BookmarkIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'

const SectionLink = ({ href, icon, value }) => {
  const pathname = usePathname()
  return (
    <Link href={href} className={`${styles.link} ${pathname === href && styles.active}`}>
      {icon}
      {value}
    </Link>
  )
}

const LINKS = [
  {
    value: 'Inicio',
    href: '/',
    icon: <HomeIcon className={styles.icon} />
  },
  {
    value: 'Perfil',
    href: '/profile',
    icon: <UserIcon className={styles.icon} />
  },
  {
    value: 'Buscar',
    href: '/search',
    icon: <MagnifyingGlassIcon className={styles.icon} />
  },
  {
    value: 'Publicar',
    href: '/post',
    icon: <PlusIcon className={styles.icon} />
  },
  {
    value: 'Notificaciones',
    href: '/notifications',
    icon: <BellIcon className={styles.icon} />
  },
  {
    value: 'Mensajes',
    href: '/messages',
    icon: <PaperAirplaneIcon className={styles.icon} />
  },
  {
    value: 'Foros',
    href: '/forums',
    icon: <ChatBubbleLeftRightIcon className={styles.icon} />
  },
  {
    value: 'Guardado',
    href: '/saved',
    icon: <BookmarkIcon className={styles.icon} />
  },
  {
    value: 'Configuración',
    href: '/settings',
    icon: <Cog6ToothIcon className={styles.icon} />
  }
]

const SideMenu = () => {
  return (
    <aside className={styles.sideBar}>
      <h1 className={styles.logo}>Nameless</h1>
      <div className={styles.userInfo}>
        <fugure className={styles.image}>
          <Image src='/images/profilePictures/DanielaMelchior.png' alt='Foto de perfil de Daniela Melchior' width={100} height={100} />
        </fugure>
        <div className={styles.labels}>
          <h2 className={styles.name}>Daniela Melchior</h2>
          <p className={styles.label}>Front-End Developer</p>
        </div>
      </div>
      <hr className={styles.separationLine} />
      <nav className={styles.menu}>
        {
          LINKS.map((link, index) => <SectionLink href={link.href} icon={link.icon} value={link.value} key={index} />)
        }
      </nav>
    </aside>
  )
}
export default SideMenu
