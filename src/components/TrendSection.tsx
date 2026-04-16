import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'
import styles from './TrendSection.module.css'
import { enrollmentTrend } from '../data'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)

export default function TrendSection() {
  const chartData = {
    labels: enrollmentTrend.labels,
    datasets: [
      {
        label: '充足率 (%)',
        data: enrollmentTrend.data,
        borderColor: '#4a9eff',
        backgroundColor: 'rgba(74,158,255,0.08)',
        fill: true,
        tension: 0.35,
        pointBackgroundColor: '#4a9eff',
        pointBorderColor: '#0e0e11',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
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
          label: (ctx: { parsed: { y: number } }) => `${ctx.parsed.y}%`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'rgba(240,240,244,0.5)', font: { size: 12 } },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
      y: {
        min: 70,
        max: 105,
        ticks: {
          color: 'rgba(240,240,244,0.5)',
          font: { size: 12 },
          callback: (v: number | string) => `${v}%`,
        },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
    },
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>全国トレンド</div>
        <h2 className={styles.sectionTitle}>私立大学 新設学科 初年度充足率の推移</h2>
        <p className={styles.sectionDesc}>
          全国平均でも悪化傾向が続いており、2024年度は81.1%と過去最低を記録。完全新設大学はこれよりさらに低くなる傾向があります。
        </p>

        <div className={styles.chartContainer}>
          <Line data={chartData} options={chartOptions as object} />
        </div>

        <div className={styles.noteGrid}>
          <div className={styles.noteCard}>
            <div className={styles.noteValue} style={{ color: '#ff6b6b' }}>81.1%</div>
            <div className={styles.noteLabel}>2024年度 充足率（過去最低）</div>
          </div>
          <div className={styles.noteCard}>
            <div className={styles.noteValue} style={{ color: '#f5a623' }}>7.5%</div>
            <div className={styles.noteLabel}>電動モビリティ専門職大学（山形）の極端事例</div>
          </div>
          <div className={styles.noteCard}>
            <div className={styles.noteValue} style={{ color: '#4a9eff' }}>70〜90%</div>
            <div className={styles.noteLabel}>平成国際大学 標準シナリオ充足率</div>
          </div>
        </div>
      </div>
    </section>
  )
}
