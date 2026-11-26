# AIF-C01 標籤練習

Louis Hui 的個人練習網頁，用來記憶 [AWS Certified AI Practitioner (AIF-C01)](https://aws.amazon.com/certification/certified-ai-practitioner/) Domain 1 Task 1.1 的官方英語術語。這不是 AWS 官方文件。

介面是繁體中文；考試術語保持官方英語拼寫。用「逐個揭開」先遮住官方英語術語，回想後再點開核對。

這是純前端靜態站（Vite + React），沒有帳號、追蹤或付費服務。

Intended site: https://louishuidev.github.io/aif-c01-label-practice/

## 本機預覽

```bash
npm install
npm run dev
```

然後打開 http://localhost:5173/aif-c01-label-practice/ （Vite `base` 設為 `/aif-c01-label-practice/`，與 GitHub Pages 專案站路徑一致）。

正式建置後的預覽：

```bash
npm run build
npm run preview
```

然後打開 http://localhost:4173/aif-c01-label-practice/ 。

## 部署

推送到 `main` 後，GitHub Actions 會執行 `npm ci` 與 `npm run build`，並把 `dist/`（含 `.nojekyll`）部署到 GitHub Pages。需要在 repo 的 Pages 設定中選擇 **GitHub Actions** 作為來源（或 Deploy from a branch，依你已啟用的方式）。若 Pages 尚未啟用，工作流程可能無法建立 Pages 環境。
