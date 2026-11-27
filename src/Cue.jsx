/** Visible study cue: stays readable when the official term is covered. */
export default function Cue({ termKey, children }) {
  return (
    <p className="cue" data-cue={termKey}>
      {children}
    </p>
  );
}

export function SourceNote({ children }) {
  return <p className="source-note">{children}</p>;
}
