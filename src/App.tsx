import Hero from './components/Hero'
import ScenarioSection from './components/ScenarioSection'
import ApproachSection from './components/ApproachSection'
import TrendSection from './components/TrendSection'
import RiskSection from './components/RiskSection'
import DownsideSection from './components/DownsideSection'
import UpsideSection from './components/UpsideSection'
import DivergenceSection from './components/DivergenceSection'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.navLogo}>平成国際大学 予測レポート</span>
          <div className={styles.navLinks}>
            <a href="#scenarios" className={styles.navLink}>シナリオ</a>
            <a href="#approaches" className={styles.navLink}>分析手法</a>
            <a href="#risks" className={styles.navLink}>リスク</a>
            <a href="#downside" className={styles.navLink}>未達リスク</a>
            <a href="#upside" className={styles.navLink}>上振れ根拠</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <div id="scenarios"><ScenarioSection /></div>
        <div id="approaches"><ApproachSection /></div>
        <TrendSection />
        <div id="risks"><RiskSection /></div>
        <div id="downside"><DownsideSection /></div>
        <div id="upside"><UpsideSection /></div>
        <DivergenceSection />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerNote}>
            本レポートは、学生確保の見通し等を記載した書類・平成国際大学公式サイト・
            パスナビ・マナビジョン・リクルート進学総研データ等、2025年8月29日以前に公開された情報のみに基づいて作成されています。
          </p>
          <p className={styles.footerCopy}>© 2025 分析レポート</p>
        </div>
      </footer>
    </div>
  )
}
