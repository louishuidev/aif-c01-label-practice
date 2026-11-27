import Term from "../Term.jsx";
import { useTermContext } from "../TermContext.jsx";
import ReferenceImage from "../ReferenceImage.jsx";
import { assetUrl } from "../assetUrl.js";

export const TITLE_ZH = "資料類型與學習類型";
export const TITLE_EN = "Data types and learning types · Task 1.1";
export const TERM_KEYS = [
  "labeled",
  "unlabeled",
  "structured",
  "unstructured",
  "tabular",
  "time-series",
  "image",
  "text",
  "supervised",
  "regression",
  "classification",
  "unsupervised",
  "clustering",
  "reinforcement",
];

function Cue({ termKey, children }) {
  return (
    <p className="cue" data-cue={termKey}>
      {children}
    </p>
  );
}

export default function DataLearningBoard() {
  const { mode } = useTermContext();
  return (
    <article
      className="board"
      id="board-data-learning"
      data-mode={mode}
      data-title-zh="資料類型與學習類型"
      data-title-en="Data types and learning types · Task 1.1"
    >
      <h2 className="board-title">Data types and learning types</h2>
      <p className="board-kicker">資料類型與學習類型 · Task 1.1</p>
      <p className="cue-intro">
        遮住官方英語術語時，請先讀每張卡片上的描述，再估答案。描述會保持可見，但不會寫出該術語本身，也不會用直接對應的中文譯名洩漏答案。
      </p>
      <div className="diagram">
        <p className="section-label">Data types · 資料類型</p>
        <div className="pair">
          <div
            className="flow-box"
            style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--blue)", background: "var(--l-blue)" }}
          >
            <Term termKey="labeled" en="Labeled" zh="有標籤" />
            <Cue termKey="labeled">每筆資料都附有已知的正確答案或目標值，方便模型學習輸入與答案的對應。</Cue>
          </div>
          <div
            className="flow-box"
            style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--teal)", background: "var(--l-teal)" }}
          >
            <Term termKey="unlabeled" en="Unlabeled" zh="無標籤" />
            <Cue termKey="unlabeled">資料沒有預先給定的正確答案，模型要自行從中找出規律。</Cue>
          </div>
        </div>
        <div className="pair">
          <div
            className="flow-box"
            style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--navy)", background: "var(--l-navy)" }}
          >
            <Term termKey="structured" en="Structured" zh="結構化" />
            <p className="explain">Has a schema, such as tables</p>
            <Cue termKey="structured">資料依固定欄位或綱要組織，例如試算表或資料庫中的列與欄。</Cue>
          </div>
          <div className="flow-box" style={{ padding: "0.85rem", minWidth: "0" }}>
            <Term termKey="unstructured" en="Unstructured" zh="非結構化" />
            <p className="explain">Docs, images, audio, video</p>
            <Cue termKey="unstructured">沒有固定欄位格式，例如文件、相片、聲音或影片。</Cue>
          </div>
        </div>

        <p className="section-label">Forms of data · 資料形式</p>
        <p className="form-note">These forms can be labeled or unlabeled.</p>
        <div className="chip-row four">
          <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
            <Term termKey="tabular" en="Tabular" zh="表格" />
            <Cue termKey="tabular">以列與欄排列的一種資料形式；這種形式可以帶或不帶已知答案。</Cue>
          </div>
          <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
            <Term termKey="time-series" en="Time-series" zh="時間序列" />
            <Cue termKey="time-series">依時間先後記錄的資料形式，例如一段時間內反覆量度的數值。</Cue>
          </div>
          <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
            <Term termKey="image" en="Image" zh="影像" />
            <Cue termKey="image">由像素組成的視覺資料形式，例如相片或畫面。</Cue>
          </div>
          <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
            <Term termKey="text" en="Text" zh="文字" />
            <Cue termKey="text">以語句、段落或文件寫成的語言資料形式。</Cue>
          </div>
        </div>

        <p className="section-label">Learning types · 學習類型</p>
        <div className="pair">
          <div className="learn-card">
            <span className="map-tag" style={{ color: "var(--blue)" }}>
              maps to
            </span>
            <div>
              <Term termKey="supervised" en="Supervised" zh="監督式學習" />
            </div>
            <p className="explain">Uses labeled data</p>
            <Cue termKey="supervised">使用已附上正確答案的資料來學習。</Cue>
            <div className="methods two">
              <div className="method" style={{ color: "var(--blue)" }}>
                <Term termKey="regression" en="Regression" zh="回歸" />
                <p className="explain">Continuous value</p>
                <Cue termKey="regression">用來預測一個連續變化的數值。</Cue>
              </div>
              <div className="method" style={{ color: "var(--blue)" }}>
                <Term termKey="classification" en="Classification" zh="分類" />
                <p className="explain">Category</p>
                <Cue termKey="classification">用來判斷資料屬於哪一個類別。</Cue>
              </div>
            </div>
          </div>
          <div className="learn-card unsup">
            <span className="map-tag" style={{ color: "var(--teal)" }}>
              maps to
            </span>
            <div>
              <Term termKey="unsupervised" en="Unsupervised" zh="非監督式學習" />
            </div>
            <p className="explain">Uses unlabeled data</p>
            <Cue termKey="unsupervised">使用沒有預先給定正確答案的資料來學習。</Cue>
            <div className="methods">
              <div className="method" style={{ color: "var(--teal)" }}>
                <Term termKey="clustering" en="Clustering" zh="分群" />
                <p className="explain">Typical example</p>
                <Cue termKey="clustering">這類學習一個常見例子：把彼此相似的資料歸在一起。</Cue>
              </div>
            </div>
          </div>
        </div>

        <div className="reinforce">
          <Term termKey="reinforcement" en="Reinforcement" zh="強化學習" />
          <p className="explain">Learns by trial and error with rewards and penalties.</p>
          <p className="explain">Not mapped from labeled or unlabeled data in the same way.</p>
          <Cue termKey="reinforcement">
            透過嘗試與錯誤來學習，並依獎勵與懲罰調整行為。它不是用與「有／無已知答案」相同的方式來對應。
          </Cue>
        </div>
      </div>
      <ReferenceImage
        src={assetUrl("assets/04-data-and-learning.png")}
        alt="資料類型與學習類型參考圖：labeled、unlabeled、structured、unstructured，以及三種學習類型。"
      />
    </article>
  );
}
