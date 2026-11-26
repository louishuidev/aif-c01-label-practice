import Term from "../Term.jsx";
import { useTermContext } from "../TermContext.jsx";
import ReferenceImage from "../ReferenceImage.jsx";
import { assetUrl } from "../assetUrl.js";

export const TITLE_ZH = "推論類型";
export const TITLE_EN = "Inferencing types · Task 1.1";
export const TERM_KEYS = [
  "batch",
  "real-time",
  "asynchronous",
  "serverless",
];

export default function InferencingBoard() {
  const { mode } = useTermContext();
  return (
    <article
              className="board"
              id="board-inferencing"
              data-mode={mode}
              data-title-zh="推論類型"
              data-title-en="Inferencing types · Task 1.1"
            >
              <h2 className="board-title">Inferencing types</h2>
              <p className="board-kicker">推論類型 · Task 1.1 · Conceptual distinctions · No payload-size limits shown</p>
              <div className="diagram">
                <div className="infer-grid">
                  <div className="infer-card batch">
                    <div className="title-plate">
                      <Term termKey="batch" en="Batch" zh="批次" />
                    </div>
                    <p className="kicker">When to use</p>
                    <p className="explain">Offline scoring when data is already available.</p>
                    <p className="explain">No need for a persistent endpoint or an instant response.</p>
                    <p className="process">Data already in → job runs offline → results later</p>
                  </div>
                  <div className="infer-card realtime">
                    <div className="title-plate">
                      <Term termKey="real-time" en="Real-time" zh="即時" />
                    </div>
                    <p className="kicker">When to use</p>
                    <p className="explain">Low latency.</p>
                    <p className="explain">Sustained traffic.</p>
                    <p className="explain">Always-on endpoint.</p>
                    <p className="process">Request → always-on endpoint → immediate response</p>
                  </div>
                  <div className="infer-card async">
                    <div className="title-plate">
                      <Term termKey="asynchronous" en="Asynchronous" zh="非同步" />
                    </div>
                    <p className="kicker">When to use</p>
                    <p className="explain">Queue the request and return results later.</p>
                    <p className="explain">Good for large payloads or long processing.</p>
                    <p className="explain">Not for millisecond latency.</p>
                    <p className="process">Request → queue → process → results later</p>
                  </div>
                  <div className="infer-card serverless">
                    <div className="title-plate">
                      <Term termKey="serverless" en="Serverless" zh="無伺服器" />
                    </div>
                    <p className="kicker">When to use</p>
                    <p className="explain">No instance or capacity management.</p>
                    <p className="explain">Good for intermittent or unpredictable traffic.</p>
                    <p className="explain">Pay for use. Possible cold starts.</p>
                    <p className="process">Request → scales as needed (may start cold) → response</p>
                  </div>
                </div>
              </div>
              <ReferenceImage src={assetUrl("assets/03-inferencing-types.png")} alt="四種推論類型參考圖：batch、real-time、asynchronous、serverless。" />
            </article>
  );
}
