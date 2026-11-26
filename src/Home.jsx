const CARDS = [
  {
    id: "hierarchy",
    title: "1. AI hierarchy",
    blurb: "人工智能層級：AI、ML、deep learning、GenAI、LLM、agentic AI",
  },
  {
    id: "train-fit",
    title: "2. Training, inferencing, and fit",
    blurb: "演算法與模型、訓練與推論、擬合，以及 bias、fairness、computer vision、NLP",
  },
  {
    id: "inferencing",
    title: "3. Inferencing types",
    blurb: "推論類型：batch、real-time、asynchronous、serverless",
  },
  {
    id: "data-learning",
    title: "4. Data types and learning types",
    blurb: "資料類型與學習類型：supervised、unsupervised、reinforcement",
  },
];

export default function Home({ onOpen }) {
  return (
    <section className="view" id="view-home">
      <p className="lede">
        這是 Louis Hui 的個人練習網頁，用來記憶 AWS Certified AI Practitioner（AIF-C01）Domain 1 Task 1.1 的官方英語術語。
        介面是繁體中文；考試術語保持官方英語拼寫。你可以用「遮標籤」先隱藏術語，再逐個揭開，做提取練習（retrieval practice）。
      </p>
      <ul className="board-list">
        {CARDS.map((card) => (
          <li key={card.id}>
            <button
              type="button"
              className="board-card"
              data-board={card.id}
              onClick={() => onOpen(card.id)}
            >
              <span className="swatch" aria-hidden="true"></span>
              <span className="card-body">
                <h2>{card.title}</h2>
                <p>{card.blurb}</p>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="how">
        <h2>使用方法</h2>
        <ol>
          <li>選一張練習圖，預設是「逐個揭開」：全部官方英語術語先遮住。</li>
          <li>先嘗試回想術語，再點（或用鍵盤 Enter／空白鍵）揭開核對。</li>
          <li>「顯示全部」會揭開所有標籤；「全部遮住」只遮住、點擊不會揭開，方便先看結構。</li>
          <li>「重新遮住」會再次遮蓋所有術語。繁體中文提示會與對應英語術語一併遮蓋，避免直接洩漏答案。</li>
        </ol>
      </div>
    </section>
  );
}
