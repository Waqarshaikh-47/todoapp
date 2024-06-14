import styles from "./footer.module.css"

export default function Footer(props){
    const { complatedTodos, totalTodos } = props
    return(
        <div className={styles.footer}>
        <span className={styles.item}>Completed Todos: {complatedTodos}</span>
        <span className={styles.item}>Total Todos: {totalTodos}</span>
        </div>
    )
}