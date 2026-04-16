import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import styles from './ScenarioSection.module.css'
import { scenarios } from '../data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function ScenarioSection() {
  const [active, setActive] = useState<string | null>(null)

  const chartData = {
    labels: ['弱気（下限）', '弱気（上限）', '標準（下限）', '標準（上限）', '強気（下限）', '強気（上限）'],
    datasets: [
      {
        label: '予測入学者数（名）',
        data: [45, 65, 70, 90, 95, 115],
        backgroundColor: [
          'rgba(255,107,107,0.5)',
          'rgba(255,107,107,0.7)',
          'rgba(74,158,255,0.5)',
          'rgba(74,158,255,0.7)',
          'rgba(245,166,35,0.5)',
          'rgba(245,166,35,0.7)',
        ],
        borderColor: [
          'rgba(255,107,107,0.8)',
          'rgba(255,107,107,1)',
          'rgba(74,158,255,0.8)',
          'rgba(74,158,255,1)',
          'rgba(245,166,35,0.8)',
          'rgba(245,166,35,1)',
        ],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { parsed: { y: number } }) => `${ctx.parsed.y}名`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'rgba(240,240,244,0.5)', font: { size: 11 } },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
      y: {
        min: 0,
        max: 140,
        ticks: {
          color: 'rgba(240,240,244,0.5)',
          font: { size: 11 },
          stepSize: 20,
          callback: (v: number | string) => `${v}名`,
        },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
    },
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>シナリオ別予測</div>
        <h2 className={styles.sectionTitle}>3つのシナリオによる入学者数予測</h2>
        <p className={styles.sectionDesc}>
          5つの分析アプローチそれぞれのレンジを算出し、その重なりと分布を総合的に判断して3シナリオを設定。日本語別科170名・系列高校4校という制度的パイプラインにより、最も蓋然性が高い予測値は<strong>70〜90名（充足率70〜90%）</strong>です。定員超過の可能性もあります。
        </p>

        <div className={styles.scenarioGrid}>
          {scenarios.map((s) => (
            <button
              key={s.id}
              className={`${styles.scenarioCard} ${s.featured ? styles.featured : ''} ${active === s.id ? styles.expanded : ''}`}
              style={{
                borderColor: active === s.id || s.featured ? s.colorBorder : undefined,
                background: active === s.id ? s.colorBg : undefined,
              }}
              onClick={() => setActive(active === s.id ? null : s.id)}
            >
              <div className={styles.scenarioBadge} style={{ color: s.color, borderColor: s.colorBorder, background: s.colorBg }}>
                {s.label}
                {s.featured && <span className={styles.featuredMark}>★ 最有力</span>}
              </div>
              <div className={styles.scenarioRange} style={{ color: s.color }}>
                {s.rangeMin}〜{s.rangeMax}<span className={styles.unit}>名</span>
              </div>
              <div className={styles.scenarioPct}>充足率 {s.pctMin}〜{s.pctMax}%</div>
              <div className={styles.probRow}>
                <span className={styles.probLabel}>確率評価</span>
                <div className={styles.probBarBg}>
                  <div className={styles.probBar} style={{ width: `${s.probability}%`, background: s.color }} />
                </div>
                <span className={styles.probValue} style={{ color: s.color }}>{s.probability}%</span>
              </div>
              {active === s.id && (
                <ul className={styles.conditions}>
                  {s.conditions.map((c, i) => (
                    <li key={i} className={styles.conditionItem}>
                      <span className={styles.conditionDot} style={{ background: s.color }} />
                      {c}
                    </li>
                  ))}
                </ul>
              )}
              <div className={styles.expandHint}>{active === s.id ? '▲ 閉じる' : '▼ 前提条件を見る'}</div>
            </button>
          ))}
        </div>

        <div className={styles.chartWrap}>
          <Bar data={chartData} options={chartOptions as object} />
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryLabel}>最終予測値（最有力）</div>
          <div className={styles.summaryMain}>約70〜90名 <span className={styles.summaryPct}>充足率 70〜90%</span></div>
          <div className={styles.summaryNote}>
            日本語別科170名の内部進学パイプラインと系列高校4校の組織的送客により、他の新設大学より高い充足率が期待されます。強気シナリオでは定員100名を超過（95〜115名）する可能性があります。
          </div>
        </div>
      </div>
    </section>
  )
}
