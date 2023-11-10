import SideBar from '@/components/SideBar'
import SideMenu from '@/components/SideMenu'

export default function Home () {
  return (
    <main className='mainContainer'>
      <SideMenu />
      <div>FEET</div> {/* // ToDo: replace with final Feet component */}
      <SideBar />
    </main>
  )
}
