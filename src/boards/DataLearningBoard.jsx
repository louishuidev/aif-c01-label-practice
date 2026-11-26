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
              <div className="diagram">
                <p className="section-label">Data types · 資料類型</p>
                <div className="pair">
                  <div className="flow-box" style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--blue)", background: "var(--l-blue)" }}>
                    <Term termKey="labeled" en="Labeled" zh="有標籤" />
                  </div>
                  <div className="flow-box" style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--teal)", background: "var(--l-teal)" }}>
                    <Term termKey="unlabeled" en="Unlabeled" zh="無標籤" />
                  </div>
                </div>
                <div className="pair">
                  <div className="flow-box" style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--navy)", background: "var(--l-navy)" }}>
                    <Term termKey="structured" en="Structured" zh="結構化" />
                    <p className="explain">Has a schema, such as tables</p>
                  </div>
                  <div className="flow-box" style={{ padding: "0.85rem", minWidth: "0" }}>
                    <Term termKey="unstructured" en="Unstructured" zh="非結構化" />
                    <p className="explain">Docs, images, audio, video</p>
                  </div>
                </div>

                <p className="section-label">Forms of data · 資料形式</p>
                <p className="form-note">These forms can be labeled or unlabeled.</p>
                <div className="chip-row four">
                  <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
                    <Term termKey="tabular" en="Tabular" zh="表格" />
                  </div>
                  <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
                    <Term termKey="time-series" en="Time-series" zh="時間序列" />
                  </div>
                  <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
                    <Term termKey="image" en="Image" zh="影像" />
                  </div>
                  <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
                    <Term termKey="text" en="Text" zh="文字" />
                  </div>
                </div>

                <p className="section-label">Learning types · 學習類型</p>
                <div className="pair">
                  <div className="learn-card">
                    <span className="map-tag" style={{ color: "var(--blue)" }}>maps to</span>
                    <div>
                      <Term termKey="supervised" en="Supervised" zh="監督式學習" />
                    </div>
                    <p className="explain">Uses labeled data</p>
                    <div className="methods two">
                      <div className="method" style={{ color: "var(--blue)" }}>
                        <Term termKey="regression" en="Regression" zh="回歸" />
                        <p className="explain">Continuous value</p>
                      </div>
                      <div className="method" style={{ color: "var(--blue)" }}>
                        <Term termKey="classification" en="Classification" zh="分類" />
                        <p className="explain">Category</p>
                      </div>
                    </div>
                  </div>
                  <div className="learn-card unsup">
                    <span className="map-tag" style={{ color: "var(--teal)" }}>maps to</span>
                    <div>
                      <Term termKey="unsupervised" en="Unsupervised" zh="非監督式學習" />
                    </div>
                    <p className="explain">Uses unlabeled data</p>
                    <div className="methods">
                      <div className="method" style={{ color: "var(--teal)" }}>
                        <Term termKey="clustering" en="Clustering" zh="分群" />
                        <p className="explain">Typical example</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="reinforce">
                  <Term termKey="reinforcement" en="Reinforcement" zh="強化學習" />
                  <p className="explain">Learns by trial and error with rewards and penalties.</p>
                  <p className="explain">Not mapped from labeled or unlabeled data in the same way.</p>
                </div>
              </div>
              <ReferenceImage src={assetUrl("assets/04-data-and-learning.png")} alt="資料類型與學習類型參考圖：labeled、unlabeled、structured、unstructured，以及三種學習類型。" />
            </article>
  );
}
