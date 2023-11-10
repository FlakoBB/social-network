import SuggestionContainer from './pure/SuggestionContainer'
import styles from '@/styles/sidebar.module.scss'

// ToDo: Add subcomponents that make up the SideBar
const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <SuggestionContainer title='Quiza quuieras seguir a...'>
        <ul className={styles.suggestList}>
          <li>
            <div>Usuario</div> {/* // ToDo: replace with User component */}
            <span className={styles.action}>Seguir</span>
          </li>
          <li>
            <div>Usuario</div> {/* // ToDo: replace with User component */}
            <span className={styles.action}>Seguir</span>
          </li>
          <li>
            <div>Usuario</div> {/* // ToDo: replace with User component */}
            <span className={styles.action}>Seguir</span>
          </li>
        </ul>
      </SuggestionContainer>
      <hr className={styles.line} />
      <SuggestionContainer title='Hashtags para ti'>
        <ul className={styles.suggestList}>
          <li>
            <span className={styles.hashtag}>#ResponsiveDesign</span>
          </li>
          <li>
            <span className={styles.hashtag}>#WebDevelopment</span>
          </li>
          <li>
            <span className={styles.hashtag}>#MovileDevelopment</span>
          </li>
          <li>
            <span className={styles.hashtag}>#NewTech</span>
          </li>
        </ul>
      </SuggestionContainer>
      <hr className={styles.line} />
      <SuggestionContainer title='Foros recoemndados'>
        <ul className={styles.suggestList}>
          <li>
            <p className={styles.forum}>Front-End Trainees</p>
            <span className={styles.action}>Unirse</span>
          </li>
          <li>
            <p className={styles.forum}>Aprendiendo JavaScript</p>
            <span className={styles.action}>Unirse</span>
          </li>
          <li>
            <p className={styles.forum}>The Empire of Devs</p>
            <span className={styles.action}>Unirse</span>
          </li>
          <li>
            <p className={styles.forum}>DevChallenges</p>
            <span className={styles.action}>Unirse</span>
          </li>
          <li>
            <p className={styles.forum}>OpenBootcamp</p>
            <span className={styles.action}>Unirse</span>
          </li>
        </ul>
      </SuggestionContainer>
    </aside>
  )
}
export default SideBar
