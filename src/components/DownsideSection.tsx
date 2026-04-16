import styles from './DownsideSection.module.css'
import { divergenceReasons } from '../data'

export default function DownsideSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>定員未達リスク</div>
        <h2 className={styles.sectionTitle}>定員100名に到達しない可能性がある理由</h2>
        <p className={styles.sectionDesc}>
          申請書類は「315名の入学意向 → 定員100名充足可能」と主張しますが、以下の理由から本予測は大きく異なる見解を示します。
        </p>

        <div className={styles.list}>
          {divergenceReasons.map((r, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.num}>{r.no}</div>
              <div className={styles.content}>
                <div className={styles.title}>{r.title}</div>
                <p className={styles.body}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
