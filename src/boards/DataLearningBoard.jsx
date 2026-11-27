import Term from "../Term.jsx";
import { useTermContext } from "../TermContext.jsx";
import ReferenceImage from "../ReferenceImage.jsx";
import { assetUrl } from "../assetUrl.js";
import Cue from "../Cue.jsx";

export const TITLE_ZH = "資料類型與學習類型";
export const TITLE_EN = "Data types and learning types · Task 1.1";
export const TERM_KEYS = [
  "labeled",
  "unlabeled",
  "structured",
  "semi-structured",
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
      <p className="board-kicker">資料類型與學習類型 · Task 1.1 · Domain 1 Review Lessons 2–3</p>
      <p className="cue-intro">
        When official English terms are covered, read the English description on each card and
        estimate the answer. Descriptions stay visible and do not name that card’s official term.
      </p>
      <div className="diagram">
        <p className="section-label">Data types · 資料類型</p>
        <div className="pair">
          <div
            className="flow-box"
            style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--blue)", background: "var(--l-blue)" }}
          >
            <Term termKey="labeled" en="Labeled" zh="有標籤" />
            <Cue termKey="labeled">
              Each example already includes the known desired output, which is also the hard part of
              preparing this kind of dataset.
            </Cue>
          </div>
          <div
            className="flow-box"
            style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--teal)", background: "var(--l-teal)" }}
          >
            <Term termKey="unlabeled" en="Unlabeled" zh="無標籤" />
            <Cue termKey="unlabeled">
              The examples include features but no pre-assigned desired output.
            </Cue>
          </div>
        </div>
        <div className="pair trio">
          <div
            className="flow-box"
            style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--navy)", background: "var(--l-navy)" }}
          >
            <Term termKey="structured" en="Structured" zh="結構化" />
            <Cue termKey="structured">
              Stored as rows and columns and usually the easiest to process. Think of CSV files or
              relational databases such as Amazon RDS and Amazon Redshift, queried with SQL, then
              exported to Amazon S3 for training.
            </Cue>
          </div>
          <div
            className="flow-box"
            style={{ padding: "0.85rem", minWidth: "0", borderColor: "var(--purple)", background: "var(--l-purple)" }}
          >
            <Term termKey="semi-structured" en="Semi-structured" zh="半結構化" />
            <Cue termKey="semi-structured">
              Does not fully follow ordinary row-and-column rules: items can have different or
              missing attributes. JSON documents with key-value pairs are a common example. Amazon DynamoDB, plus Amazon DocumentDB (MongoDB compatible), are databases built for this
              kind of data, which is also exported to Amazon S3 for training.
            </Cue>
          </div>
          <div className="flow-box" style={{ padding: "0.85rem", minWidth: "0" }}>
            <Term termKey="unstructured" en="Unstructured" zh="非結構化" />
            <Cue termKey="unstructured">
              No specific data model and not a table: photos, video, documents, or social posts,
              usually kept as objects in Amazon S3. Features may be obtained by processing such as
              tokenization (splitting writing into words or phrases).
            </Cue>
          </div>
        </div>

        <p className="section-label">Forms of data · 資料形式</p>
        <p className="form-note">These forms can be used with or without a known desired output.</p>
        <div className="chip-row four">
          <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
            <Term termKey="tabular" en="Tabular" zh="表格" />
            <Cue termKey="tabular">A row-and-column layout, like a spreadsheet or database table.</Cue>
          </div>
          <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
            <Term termKey="time-series" en="Time-series" zh="時間序列" />
            <Cue termKey="time-series">
              Each record has a timestamp and is stored in order, used to forecast future trends.
            </Cue>
          </div>
          <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
            <Term termKey="image" en="Image" zh="影像" />
            <Cue termKey="image">
              Visual examples such as photos or frames; pixels can serve as features.
            </Cue>
          </div>
          <div className="inner-card" style={{ borderColor: "var(--navy)" }}>
            <Term termKey="text" en="Text" zh="文字" />
            <Cue termKey="text">
              Written language in files or posts; features may come from splitting it into words or
              phrases.
            </Cue>
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
            <Cue termKey="supervised">
              You specify both the input and the desired output using pre-assigned answers. A course
              example is deciding whether a photo is a fish or not. The model’s output is a
              probability, and preparing those answers is the main challenge. Amazon SageMaker
              Ground Truth and Amazon Mechanical Turk are named as labeling help.
            </Cue>
            <div className="methods two">
              <div className="method" style={{ color: "var(--blue)" }}>
                <Term termKey="regression" en="Regression" zh="回歸" />
                <Cue termKey="regression">
                  Finds a best-fit relationship that can predict a continuous number, such as a line
                  y = mx + b whose slope and intercept are adjusted to shrink errors.
                </Cue>
              </div>
              <div className="method" style={{ color: "var(--blue)" }}>
                <Term termKey="classification" en="Classification" zh="分類" />
                <Cue termKey="classification">
                  Assigns an example to a category, for instance deciding whether a photo shows a
                  fish or not.
                </Cue>
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
            <Cue termKey="unsupervised">
              Features are present but no pre-assigned answers. The method finds patterns, clusters,
              or groups, and is useful for pattern recognition, spotting unusual cases, and grouping
              (for example, kinds of network traffic, or a sensor reading far from the usual range).
            </Cue>
            <div className="methods">
              <div className="method" style={{ color: "var(--teal)" }}>
                <Term termKey="clustering" en="Clustering" zh="分群" />
                <Cue termKey="clustering">
                  A typical way to group similar examples, such as different kinds of network
                  traffic.
                </Cue>
              </div>
            </div>
          </div>
        </div>

        <div className="reinforce">
          <Term termKey="reinforcement" en="Reinforcement" zh="強化學習" />
          <Cue termKey="reinforcement">
            An agent takes actions in an environment toward a goal, learning by trial and error with
            rewards, and without pre-assigned input answers. It may sometimes try actions that are
            not rewarded. Unlike grouping methods, there is a predetermined end goal. The course example is AWS DeepRacer: the race car plays the agent role, and the racetrack is its environment.
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
