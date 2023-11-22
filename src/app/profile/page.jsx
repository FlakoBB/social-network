import ProfileFeet from '@/components/ProfileFeet'
import SideMenu from '@/components/SideMenu'
// import styles from '@/styles/profileFeet.module.scss'

const PageProfile = () => {
  return (
    <main className='mainContainer'>
      <SideMenu />
      <ProfileFeet />
    </main>
  )
}

export default PageProfile
