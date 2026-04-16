import styles from './DivergenceSection.module.css'

export default function DivergenceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sourcesBox}>
          <div className={styles.sourcesLabel}>主な参照データソース</div>
          <ul className={styles.sourcesList}>
            <li>学生確保の見通し等を記載した書類（OCRによる全27ページ）</li>
            <li>平成国際大学 公式サイト基本情報</li>
            <li>パスナビ入試結果データ・偏差値データ（旺文社）</li>
            <li>マナビジョン入試倍率データ</li>
            <li>リクルート進学総研「私立大学等における新増設・改組の現状まとめ」（2024年10月公表）</li>
            <li>以上いずれも2025年8月29日以前に公開された情報に基づく</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
