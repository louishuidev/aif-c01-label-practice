import Term from "../Term.jsx";
import { useTermContext } from "../TermContext.jsx";
import ReferenceImage from "../ReferenceImage.jsx";
import { assetUrl } from "../assetUrl.js";
import Cue, { SourceNote } from "../Cue.jsx";

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
      <p className="board-kicker">推論類型 · Task 1.1 · Domain 1 Review Lesson 3</p>
      <SourceNote>
        The captured Skill Builder 1.1 lesson on hosting teaches two options only: real-time and
        batch. The other two labels remain on this board for extra practice and are not presented
        as content from those official 1.1 scripts.
      </SourceNote>
      <div className="diagram">
        <div className="infer-grid">
          <div className="infer-card batch">
            <div className="title-plate">
              <Term termKey="batch" en="Batch" zh="批次" />
            </div>
            <p className="kicker">Taught in 1.1 Lesson 3</p>
            <Cue termKey="batch">
              Offline work when a large dataset is already available. No persistent endpoint.
              Compute runs for the job and then shuts down, which is often more cost-effective when
              it is acceptable to wait.
            </Cue>
            <p className="process">Data already in → job runs offline → results later</p>
          </div>
          <div className="infer-card realtime">
            <div className="title-plate">
              <Term termKey="real-time" en="Real-time" zh="即時" />
            </div>
            <p className="kicker">Taught in 1.1 Lesson 3</p>
            <Cue termKey="real-time">
              A persistent endpoint for a sustained stream of requests, with low latency and high
              throughput. Compute stays running so a response can come back quickly.
            </Cue>
            <p className="process">Request → always-on endpoint → immediate response</p>
          </div>
          <div className="infer-card async">
            <div className="title-plate">
              <Term termKey="asynchronous" en="Asynchronous" zh="非同步" />
            </div>
            <p className="kicker">Not in captured 1.1 scripts</p>
            <Cue termKey="asynchronous">
              This hosting option is not taught in the captured Domain 1 Review 1.1 lessons, which
              only contrast a persistent endpoint with offline jobs.
            </Cue>
          </div>
          <div className="infer-card serverless">
            <div className="title-plate">
              <Term termKey="serverless" en="Serverless" zh="無伺服器" />
            </div>
            <p className="kicker">Not in captured 1.1 scripts</p>
            <Cue termKey="serverless">
              This hosting option is not taught in the captured Domain 1 Review 1.1 lessons, which
              only contrast a persistent endpoint with offline jobs.
            </Cue>
          </div>
        </div>
      </div>
      <ReferenceImage
        src={assetUrl("assets/03-inferencing-types.png")}
        alt="推論類型參考圖。Skill Builder 1.1 Lesson 3 只教 batch 與 real-time。"
      />
    </article>
  );
}
