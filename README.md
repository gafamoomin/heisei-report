# 武雄アジア大学 入学者数予測レポート

React + TypeScript + Vite で構築したレポートサイトです。

## ローカルで動かす

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開く。

## Vercel にデプロイする

### 方法A：GitHub 経由（推奨）

1. このフォルダを GitHub リポジトリにプッシュ
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_NAME/YOUR_REPO.git
   git push -u origin main
   ```

2. https://vercel.com にログイン → **Add New Project**

3. GitHub リポジトリを選択してインポート

4. Build & Output Settings はデフォルトのまま（Vercel が Vite を自動検出します）
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Deploy** をクリック → 数分で公開完了

### 方法B：Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## ファイル構成

```
src/
├── main.tsx              # エントリーポイント
├── App.tsx               # ルートコンポーネント（ナビ・フッター）
├── App.module.css
├── index.css             # グローバルスタイル・CSS変数
├── data.ts               # すべてのレポートデータ
└── components/
    ├── Hero.tsx           # ヒーローセクション
    ├── Hero.module.css
    ├── ScenarioSection.tsx    # 3シナリオ（棒グラフ付き）
    ├── ScenarioSection.module.css
    ├── ApproachSection.tsx    # 5つのアプローチ
    ├── ApproachSection.module.css
    ├── TrendSection.tsx       # 全国充足率トレンド（折れ線グラフ）
    ├── TrendSection.module.css
    ├── RiskSection.tsx        # リスク要因
    ├── RiskSection.module.css
    ├── DivergenceSection.tsx  # 申請書類との乖離理由
    └── DivergenceSection.module.css
```

## データを更新するには

`src/data.ts` を編集するだけです。コンポーネントは一切触らなくて大丈夫です。
