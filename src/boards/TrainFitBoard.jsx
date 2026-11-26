import Term from "../Term.jsx";
import { useTermContext } from "../TermContext.jsx";
import ReferenceImage from "../ReferenceImage.jsx";
import { assetUrl } from "../assetUrl.js";

export const TITLE_ZH = "訓練、推論與擬合";
export const TITLE_EN = "Training, inferencing, and fit · Task 1.1";
export const TERM_KEYS = [
  "algorithm",
  "model",
  "data",
  "algorithm-flow",
  "training",
  "model-flow",
  "inferencing",
  "fit",
  "underfit",
  "good-fit",
  "overfit",
  "bias",
  "fairness",
  "computer-vision",
  "nlp",
];

export default function TrainFitBoard() {
  const { mode } = useTermContext();
  return (
    <article
              className="board"
              id="board-train-fit"
              data-mode={mode}
              data-title-zh="訓練、推論與擬合"
              data-title-en="Training, inferencing, and fit · Task 1.1"
            >
              <h2 className="board-title">Training, inferencing, and fit</h2>
              <p className="board-kicker">訓練、推論與擬合 · Task 1.1</p>
              <div className="diagram">
                <div className="pair">
                  <div className="flow-box" style={{ padding: "0.85rem", minWidth: "0" }}>
                    <Term termKey="algorithm" en="Algorithm" zh="演算法" />
                    <p className="explain">The method</p>
                  </div>
                  <div className="flow-box model" style={{ padding: "0.85rem", minWidth: "0" }}>
                    <Term termKey="model" en="Model" zh="模型" />
                    <p className="explain">The trained artifact used for prediction or generation</p>
                  </div>
                </div>

                <div className="flow">
                  <div className="flow-box">
                    <Term termKey="data" en="Data" zh="資料" />
                  </div>
                  <span className="flow-plus" aria-hidden="true">+</span>
                  <div className="flow-box">
                    <Term termKey="algorithm-flow" en="Algorithm" zh="the method" />
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="flow-box train">
                    <Term termKey="training" en="Training" zh="訓練" />
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="flow-box model">
                    <Term termKey="model-flow" en="Model" zh="trained artifact" />
                  </div>
                </div>

                <div className="infer-bar">
                  <div>
                    <Term termKey="inferencing" en="Inferencing" zh="推論" />
                  </div>
                  <p className="explain">Training = teach the model from data. Inferencing = use the trained model on new data.</p>
                </div>

                <p className="section-label"><Term termKey="fit" en="Fit" zh="擬合" /> · The aim is good generalization</p>
                <div className="fit-grid">
                  <div className="fit-card under">
                    <Term termKey="underfit" en="Underfit" zh="欠擬合" />
                    <svg viewBox="0 0 200 120" role="img" aria-label="示意：一條過簡的水平線未能跟上資料趨勢。">
                      <line x1="16" y1="104" x2="184" y2="104" stroke="#c5cdd8" stroke-width="1"/>
                      <line x1="16" y1="16" x2="16" y2="104" stroke="#c5cdd8" stroke-width="1"/>
                      <line x1="22" y1="68" x2="184" y2="68" stroke="#b91c1c" stroke-width="3"/>
                      <circle cx="30" cy="92" r="4" fill="#334155"/>
                      <circle cx="50" cy="84" r="4" fill="#334155"/>
                      <circle cx="70" cy="70" r="4" fill="#334155"/>
                      <circle cx="90" cy="62" r="4" fill="#334155"/>
                      <circle cx="110" cy="54" r="4" fill="#334155"/>
                      <circle cx="130" cy="48" r="4" fill="#334155"/>
                      <circle cx="150" cy="38" r="4" fill="#334155"/>
                      <circle cx="170" cy="28" r="4" fill="#334155"/>
                      <circle cx="60" cy="68" r="5" fill="none" stroke="#b45309" stroke-width="2"/>
                      <circle cx="140" cy="68" r="5" fill="none" stroke="#b45309" stroke-width="2"/>
                    </svg>
                    <p className="explain">Too simple and misses patterns.</p>
                  </div>
                  <div className="fit-card">
                    <Term termKey="good-fit" en="Good fit" zh="良好擬合" />
                    <svg viewBox="0 0 200 120" role="img" aria-label="示意：一條平滑線跟上資料趨勢，並接近新資料點。">
                      <line x1="16" y1="104" x2="184" y2="104" stroke="#c5cdd8" stroke-width="1"/>
                      <line x1="16" y1="16" x2="16" y2="104" stroke="#c5cdd8" stroke-width="1"/>
                      <line x1="24" y1="96" x2="180" y2="28" stroke="#047857" stroke-width="3"/>
                      <circle cx="30" cy="92" r="4" fill="#334155"/>
                      <circle cx="50" cy="84" r="4" fill="#334155"/>
                      <circle cx="70" cy="70" r="4" fill="#334155"/>
                      <circle cx="90" cy="62" r="4" fill="#334155"/>
                      <circle cx="110" cy="54" r="4" fill="#334155"/>
                      <circle cx="130" cy="48" r="4" fill="#334155"/>
                      <circle cx="150" cy="38" r="4" fill="#334155"/>
                      <circle cx="170" cy="28" r="4" fill="#334155"/>
                      <circle cx="60" cy="78" r="5" fill="none" stroke="#b45309" stroke-width="2"/>
                      <circle cx="140" cy="46" r="5" fill="none" stroke="#b45309" stroke-width="2"/>
                    </svg>
                    <p className="explain">The aim is good generalization.</p>
                  </div>
                  <div className="fit-card over">
                    <Term termKey="overfit" en="Overfit" zh="過擬合" />
                    <svg viewBox="0 0 200 120" role="img" aria-label="示意：一條過度彎曲的線穿過訓練點，但偏離新資料。">
                      <line x1="16" y1="104" x2="184" y2="104" stroke="#c5cdd8" stroke-width="1"/>
                      <line x1="16" y1="16" x2="16" y2="104" stroke="#c5cdd8" stroke-width="1"/>
                      <path d="M28 96 C 40 70, 48 100, 62 80 S 80 40, 98 70 S 120 20, 140 60 S 160 10, 176 36" fill="none" stroke="#b91c1c" stroke-width="3"/>
                      <circle cx="30" cy="92" r="4" fill="#334155"/>
                      <circle cx="50" cy="84" r="4" fill="#334155"/>
                      <circle cx="70" cy="70" r="4" fill="#334155"/>
                      <circle cx="90" cy="62" r="4" fill="#334155"/>
                      <circle cx="110" cy="54" r="4" fill="#334155"/>
                      <circle cx="130" cy="48" r="4" fill="#334155"/>
                      <circle cx="150" cy="38" r="4" fill="#334155"/>
                      <circle cx="170" cy="28" r="4" fill="#334155"/>
                      <circle cx="60" cy="50" r="5" fill="none" stroke="#b45309" stroke-width="2"/>
                      <circle cx="145" cy="78" r="5" fill="none" stroke="#b45309" stroke-width="2"/>
                    </svg>
                    <p className="explain">Matches training data too closely and fails on new data.</p>
                  </div>
                </div>
                <p className="legend">實心點 = training data　空心點 = new data</p>

                <div className="pair">
                  <div className="pair-block">
                    <h3>Bias and fairness · 偏差與公平性</h3>
                    <p className="def">
                      <Term termKey="bias" en="Bias" zh="偏差" />
                      = systematic skew, often from data or design.
                    </p>
                    <p className="def">
                      <Term termKey="fairness" en="Fairness" zh="公平性" />
                      = the goal that the system should not produce discriminatory or unjust outcomes across groups.
                    </p>
                  </div>
                  <div className="pair-block cv">
                    <h3>Computer vision and NLP · 電腦視覺與自然語言處理</h3>
                    <p className="def">
                      <Term termKey="computer-vision" en="Computer vision" zh="電腦視覺" />
                      interprets images / video.
                    </p>
                    <p className="def">
                      <Term termKey="nlp" en="Natural language processing (NLP)" zh="自然語言處理" />
                      understands, processes, or generates human language.
                    </p>
                  </div>
                </div>
              </div>
              <ReferenceImage src={assetUrl("assets/02-train-vs-infer-and-fit.png")} alt="Training、inferencing 與 fit 參考圖，並包含 bias、fairness、computer vision 與 NLP。" />
            </article>
  );
}
