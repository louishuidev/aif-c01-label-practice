import { useTermContext } from "./TermContext.jsx";

/**
 * Official English exam term as a live, keyboard-usable control.
 * In "逐個揭開" (reveal) mode, a click / Enter / Space uncovers this term only.
 * A second click does not re-hide it. Clicks on the surrounding board do nothing.
 */
export default function Term({ termKey, en, zh }) {
  const { mode, hidden, reveal } = useTermContext();
  const isHidden = hidden.has(termKey);
  const interactive = mode === "reveal";

  function onClick(event) {
    // Prevent any parent click handler from treating this as a board-level action.
    event.stopPropagation();
    if (!interactive || !isHidden) return;
    reveal(termKey);
  }

  return (
    <button
      type="button"
      className={isHidden ? "term is-hidden" : "term"}
      data-key={termKey}
      disabled={!interactive}
      aria-pressed={isHidden ? "true" : "false"}
      aria-label={isHidden ? `已隱藏：${en}。點擊揭開` : en}
      onClick={onClick}
    >
      <span className="term-en">{en}</span>
      {zh ? <span className="term-zh">{zh}</span> : null}
    </button>
  );
}
