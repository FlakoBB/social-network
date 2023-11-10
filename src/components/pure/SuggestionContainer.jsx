import styles from '@/styles/suggestionContainer.module.scss'

const SuggestionContainer = ({ title = 'Suggestion title', children }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  )
}
export default SuggestionContainer
