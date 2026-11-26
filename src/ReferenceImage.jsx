import { useState } from "react";

/** Optional reference PNG. Hidden entirely if the image is missing. */
export default function ReferenceImage({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <details className="reference">
      <summary>參考圖（可能洩漏答案，請在練習後再開）</summary>
      <img src={src} alt={alt} onError={() => setFailed(true)} />
    </details>
  );
}
