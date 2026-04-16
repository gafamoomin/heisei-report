import styles from './Hero.module.css'
import { universityInfo, overviewMetrics } from '../data'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.tagRow}>
          <div className={styles.tag}>分析レポート — 2025年8月以前の公開情報に基づく</div>
        </div>
        <h1 className={styles.title}>
          {universityInfo.name}<br />
          <span className={styles.titleSub}>情報デザイン学部 初年度入学者数 予測レポート</span>
        </h1>
        <p className={styles.faculty}>{universityInfo.faculty}</p>
        <p className={styles.desc}>
          {universityInfo.openingYear}開学予定の平成国際大学 情報デザイン学部について、5つのアプローチと3つのシナリオによる多角的な入学者数予測を分析します。
          申請書類・既存学部の実績・留学生パイプライン等をもとに厳格に検証しています。
        </p>

        <div className={styles.metricsGrid}>
          {overviewMetrics.map((m) => (
            <div key={m.label} className={styles.metricCard}>
              <span className={styles.metricLabel}>{m.label}</span>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricNote}>{m.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
