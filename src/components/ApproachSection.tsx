import styles from './ApproachSection.module.css'
import { approaches } from '../data'

export default function ApproachSection() {
  const maxMid = Math.max(...approaches.map((a) => a.mid))

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>分析手法</div>
        <h2 className={styles.sectionTitle}>5つのアプローチによる複合推定</h2>
        <p className={styles.sectionDesc}>
          単一の推計手法に依存せず、5つの独立したアプローチで入学者数を推計。各アプローチのレンジを算出し、その重なりと分布を総合的に判断して最終予測値を導出しています。
        </p>

        <div className={styles.approachList}>
          {approaches.map((a, i) => (
            <div key={i} className={styles.approachItem}>
              <div className={styles.approachHeader}>
                <span className={styles.approachNum}>0{i + 1}</span>
                <div>
                  <div className={styles.approachLabel}>{a.label}</div>
                  <div className={styles.approachDetail}>{a.detail}</div>
                </div>
              </div>
              <div className={styles.approachBar}>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${(a.mid / maxMid) * 100}%` }}
                  />
                  <div
                    className={styles.barMin}
                    style={{ left: `${(a.min / maxMid) * 100}%` }}
                  />
                  <div
                    className={styles.barMax}
                    style={{ left: `${(a.max / maxMid) * 100}%` }}
                  />
                </div>
                <div className={styles.barLabels}>
                  <span className={styles.barRange}>{a.min}〜{a.max}名</span>
                  <span className={styles.barMid}>推定値 {a.mid}名</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.avgBox}>
          <div className={styles.avgLabel}>5アプローチの総合推定レンジ</div>
          <div className={styles.avgValue}>約55〜90名</div>
        </div>
      </div>
    </section>
  )
}
