import styles from './RiskSection.module.css'
import { risks } from '../data'

const severityMap = {
  critical: { label: '極めて高', color: '#ff6b6b', bg: 'rgba(255,107,107,0.1)', border: 'rgba(255,107,107,0.25)' },
  high: { label: '高', color: '#f5a623', bg: 'rgba(245,166,35,0.1)', border: 'rgba(245,166,35,0.25)' },
  medium: { label: '中', color: '#4a9eff', bg: 'rgba(74,158,255,0.1)', border: 'rgba(74,158,255,0.25)' },
}

export default function RiskSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>リスク評価</div>
        <h2 className={styles.sectionTitle}>主要リスク要因の分析</h2>
        <p className={styles.sectionDesc}>
          申請書類が示す楽観的な見通しと実際の入学者数が大きく乖離すると予測する根拠となる、主要なリスク要因を整理します。
        </p>

        <div className={styles.riskList}>
          {risks.map((r, i) => {
            const s = severityMap[r.severity]
            return (
              <div key={i} className={styles.riskItem} style={{ borderLeftColor: s.color }}>
                <div className={styles.riskHeader}>
                  <span className={styles.riskIcon}>{r.icon}</span>
                  <div className={styles.riskTitle}>{r.title}</div>
                  <span
                    className={styles.severityBadge}
                    style={{ color: s.color, background: s.bg, borderColor: s.border }}
                  >
                    {s.label}
                  </span>
                </div>
                <p className={styles.riskDetail}>{r.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
