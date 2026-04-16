import styles from './UpsideSection.module.css'
import { upswingReasons } from '../data'

export default function UpsideSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>上振れ根拠</div>
        <h2 className={styles.sectionTitle}>予測が上振れする可能性の根拠</h2>
        <p className={styles.sectionDesc}>
          他の新設大学にはない構造的な強みが複数存在しており、標準シナリオを超える可能性を持つ根拠を整理します。
        </p>

        <div className={styles.list}>
          {upswingReasons.map((r, i) => (
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
