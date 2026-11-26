import { useMemo, useState } from "react";
import { TermContext } from "./TermContext.jsx";
import HierarchyBoard, {
  TERM_KEYS as HIERARCHY_KEYS,
  TITLE_EN as HIERARCHY_EN,
  TITLE_ZH as HIERARCHY_ZH,
} from "./boards/HierarchyBoard.jsx";
import TrainFitBoard, {
  TERM_KEYS as TRAIN_KEYS,
  TITLE_EN as TRAIN_EN,
  TITLE_ZH as TRAIN_ZH,
} from "./boards/TrainFitBoard.jsx";
import InferencingBoard, {
  TERM_KEYS as INFER_KEYS,
  TITLE_EN as INFER_EN,
  TITLE_ZH as INFER_ZH,
} from "./boards/InferencingBoard.jsx";
import DataLearningBoard, {
  TERM_KEYS as DATA_KEYS,
  TITLE_EN as DATA_EN,
  TITLE_ZH as DATA_ZH,
} from "./boards/DataLearningBoard.jsx";

export const BOARDS = {
  hierarchy: {
    Component: HierarchyBoard,
    termKeys: HIERARCHY_KEYS,
    titleZh: HIERARCHY_ZH,
    titleEn: HIERARCHY_EN,
  },
  "train-fit": {
    Component: TrainFitBoard,
    termKeys: TRAIN_KEYS,
    titleZh: TRAIN_ZH,
    titleEn: TRAIN_EN,
  },
  inferencing: {
    Component: InferencingBoard,
    termKeys: INFER_KEYS,
    titleZh: INFER_ZH,
    titleEn: INFER_EN,
  },
  "data-learning": {
    Component: DataLearningBoard,
    termKeys: DATA_KEYS,
    titleZh: DATA_ZH,
    titleEn: DATA_EN,
  },
};

const MODES = [
  { id: "show", label: "顯示全部" },
  { id: "hide", label: "全部遮住" },
  { id: "reveal", label: "逐個揭開" },
];

function hiddenForMode(mode, termKeys, resetCovers, previous) {
  if (mode === "show") return new Set();
  if (mode === "hide") return new Set(termKeys);
  if (resetCovers) return new Set(termKeys);
  return previous ?? new Set(termKeys);
}

export default function BoardView({ boardId }) {
  const meta = BOARDS[boardId];
  const termKeys = meta.termKeys;
  const Board = meta.Component;
  const [mode, setMode] = useState("reveal");
  const [hidden, setHidden] = useState(() => new Set(termKeys));

  function applyMode(nextMode, resetCovers) {
    setMode(nextMode);
    setHidden((prev) => hiddenForMode(nextMode, termKeys, resetCovers, prev));
  }

  function reveal(termKey) {
    setHidden((prev) => {
      if (!prev.has(termKey)) return prev;
      const next = new Set(prev);
      next.delete(termKey);
      return next;
    });
  }

  function onReset() {
    if (mode === "show") applyMode("reveal", true);
    else applyMode(mode, true);
  }

  const contextValue = useMemo(
    () => ({ mode, hidden, reveal }),
    [mode, hidden]
  );

  let countText;
  if (mode === "reveal") {
    countText = (
      <>
        尚餘 <strong>{hidden.size}</strong> / {termKeys.length} 個術語未揭開
      </>
    );
  } else if (mode === "hide") {
    countText = `全部 ${termKeys.length} 個術語已遮住（此模式點擊不會揭開）`;
  } else {
    countText = `已顯示全部 ${termKeys.length} 個官方術語`;
  }

  return (
    <section className="view" id="view-board">
      <div className="toolbar" role="group" aria-label="練習模式">
        <div className="modes">
          {MODES.map((item) => (
            <button
              key={item.id}
              type="button"
              data-mode={item.id}
              aria-pressed={mode === item.id ? "true" : "false"}
              onClick={() => applyMode(item.id, item.id !== "show")}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button type="button" className="reset-btn" onClick={onReset}>
          重新遮住
        </button>
        <p className="count" aria-live="polite">
          {countText}
        </p>
      </div>
      <TermContext.Provider value={contextValue}>
        <div
          id="board-root"
          onClick={(event) => {
            // Board background clicks must never reset or uncover terms.
            // Only Term's own control reveals a label (and only in reveal mode).
            event.stopPropagation();
          }}
        >
          <Board />
        </div>
      </TermContext.Provider>
    </section>
  );
}
