import { useEffect, useId, useState } from "react";

export const OFFICIAL_LINKS = [
  {
    href: "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01-domain1.html",
    title: "Domain 1 · Task 1.1",
    detail: "AI 與 ML 基礎：官方任務與目標",
  },
  {
    href: "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html",
    title: "考試指南",
    detail: "AWS Certified AI Practitioner 官方 Exam guide",
  },
  {
    href: "https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf",
    title: "考試指南 PDF",
    detail: "同一指南的官方 PDF",
  },
];

const BOARD_FOCUS = {
  hierarchy: {
    heading: "與此練習圖相關的 1.1 目標",
    points: [
      "說明基本 AI 用語，例如 AI、ML、deep learning、neural networks、LLM、GenAI、agentic AI。",
      "比較 AI、ML、GenAI、deep learning 與 agentic AI 的相似與相異之處。",
    ],
  },
  "train-fit": {
    heading: "與此練習圖相關的 1.1 目標",
    points: [
      "說明基本用語，例如 algorithm、model、training 與 inferencing、fit、bias、fairness，以及 computer vision 與 natural language processing (NLP)。",
    ],
  },
  inferencing: {
    heading: "與此練習圖相關的 1.1 目標",
    points: [
      "說明不同的推論類型，例如 batch、real-time、asynchronous、serverless。",
    ],
  },
  "data-learning": {
    heading: "與此練習圖相關的 1.1 目標",
    points: [
      "說明 AI 模型中的不同資料類型，例如 labeled 與 unlabeled、tabular、time-series、image、text，以及 structured 與 unstructured。",
      "說明不同的 AI／ML 學習類型，例如 supervised、unsupervised、reinforcement 學習方法。",
    ],
  },
};

const WIDE_QUERY = "(min-width: 68rem)";

function useWideLayout() {
  const [wide, setWide] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(WIDE_QUERY).matches : true
  );

  useEffect(() => {
    const media = window.matchMedia(WIDE_QUERY);
    function onChange() {
      setWide(media.matches);
    }
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return wide;
}

function LinkList() {
  return (
    <ul className="official-ref-links">
      {OFFICIAL_LINKS.map((item) => (
        <li key={item.href}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <span className="official-ref-link-title">{item.title}</span>
            <span className="official-ref-link-detail">{item.detail}</span>
            <span className="official-ref-external">在新分頁開啟</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function FocusBlock({ boardId }) {
  const focus = BOARD_FOCUS[boardId];
  if (!focus) return null;
  return (
    <div className="official-ref-focus" data-focus-board={boardId}>
      <h3>{focus.heading}</h3>
      <ul>
        {focus.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Official AWS documentation links and a short original summary of the
 * current board's Task 1.1 objectives. AWS docs send X-Frame-Options:
 * SAMEORIGIN, so they cannot be embedded; we link out instead.
 */
export default function OfficialReference({ boardId, variant = "sidebar" }) {
  const wide = useWideLayout();
  const [open, setOpen] = useState(false);
  const bodyId = useId();
  const isHome = variant === "home";
  const showBody = isHome || wide || open;

  const heading = isHome ? "官方參考" : "官方參考";
  const body = (
    <div className="official-ref-body" id={bodyId} hidden={!showBody ? true : undefined}>
      <p className="official-ref-disclaimer">
        以下是 AWS 官方考試文件的連結。本練習網頁是個人學習輔助，不是 AWS 產品，也不是官方文件。
      </p>
      <p className="official-ref-embed-note">
        官方頁面由 AWS 網站提供；該站不允許把文件嵌入本頁，請用連結在新分頁開啟原文。
      </p>
      <LinkList />
      {isHome ? null : <FocusBlock boardId={boardId} />}
    </div>
  );

  if (isHome) {
    return (
      <section className="official-ref official-ref-home" aria-labelledby="official-ref-home-title">
        <h2 id="official-ref-home-title">{heading}</h2>
        {body}
      </section>
    );
  }

  return (
    <aside className="official-ref official-ref-sidebar" aria-labelledby="official-ref-title">
      {wide ? (
        <h2 id="official-ref-title">{heading}</h2>
      ) : (
        <button
          type="button"
          className="official-ref-toggle"
          id="official-ref-title"
          aria-expanded={open ? "true" : "false"}
          aria-controls={bodyId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="official-ref-toggle-label">{heading}</span>
          <span className="official-ref-toggle-hint">AWS 官方文件連結</span>
          <span className="official-ref-toggle-state">{open ? "收合" : "展開"}</span>
        </button>
      )}
      {body}
    </aside>
  );
}
