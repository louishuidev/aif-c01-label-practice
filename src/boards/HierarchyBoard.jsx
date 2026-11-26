import Term from "../Term.jsx";
import { useTermContext } from "../TermContext.jsx";
import ReferenceImage from "../ReferenceImage.jsx";
import { assetUrl } from "../assetUrl.js";

export const TITLE_ZH = "人工智能層級";
export const TITLE_EN = "AI hierarchy · Task 1.1";
export const TERM_KEYS = [
  "ai",
  "not-every-ai-is-ml",
  "ml",
  "deep-learning",
  "neural-networks",
  "genai",
  "llm",
  "agentic-ai",
  "genai-neq",
  "agentic-neq",
  "sim-ai",
  "sim-ml",
  "sim-dl",
  "sim-nn",
  "sim-genai",
  "sim-agentic",
];

export default function HierarchyBoard() {
  const { mode } = useTermContext();
  return (
    <article
              className="board"
              id="board-hierarchy"
              data-mode={mode}
              data-title-zh="人工智能層級"
              data-title-en="AI hierarchy · Task 1.1"
            >
              <h2 className="board-title">AI hierarchy</h2>
              <p className="board-kicker">人工智能層級 · Task 1.1</p>
              <div className="diagram diagram-hierarchy">
                <div className="nest nest-ai">
                  <div className="nest-head">
                    <Term termKey="ai" en="AI" zh="人工智能" />
                    <p className="explain">The umbrella</p>
                    <div className="callout">
                      <Term termKey="not-every-ai-is-ml" en="Not every AI is ML" zh="不是所有 AI 都是機器學習" />
                    </div>
                  </div>
                  <div className="split">
                    <div className="nest nest-ml">
                      <div className="nest-head">
                        <Term termKey="ml" en="ML" zh="機器學習" />
                      </div>
                      <p className="explain">A branch of AI: learn patterns from data with algorithms</p>
                      <div className="nest nest-dl">
                        <div className="nest-head">
                          <Term termKey="deep-learning" en="Deep learning" zh="深度學習" />
                        </div>
                        <p className="explain">A subset of ML using multi-layer <Term termKey="neural-networks" en="neural networks" zh="神經網絡" /></p>
                        <div className="pair">
                          <div className="inner-card genai">
                            <Term termKey="genai" en="GenAI" zh="生成式 AI" />
                            <p className="explain">Advanced form of deep learning. Generates new content (text, images, audio, code).</p>
                          </div>
                          <div className="inner-card llm">
                            <Term termKey="llm" en="LLM" zh="大型語言模型" />
                            <p className="explain">Large deep-learning models pretrained on vast text. GenAI often uses LLMs.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nest nest-agentic">
                      <div className="nest-head">
                        <Term termKey="agentic-ai" en="Agentic AI" zh="代理式 AI" />
                      </div>
                      <p className="explain">Typically uses an LLM as a reasoning engine, but does not stop at one reply.</p>
                      <p className="explain">It can perceive, plan, call tools, and take multi-step actions toward a goal.</p>
                    </div>
                  </div>
                </div>

                <div className="banner">
                  <div className="neq">
                    <Term termKey="genai-neq" en="GenAI" />
                    <span aria-hidden="true">≠</span>
                    <span className="sr-only">is not the same as</span>
                    <Term termKey="agentic-neq" en="Agentic AI" />
                  </div>
                  <p className="explain">Having GenAI is not the same as having agentic AI.</p>
                </div>

                <p className="section-label">Similarities and differences</p>
                <div className="sims">
                  <div className="sim">
                    <Term termKey="sim-ai" en="AI" />
                    <p>The umbrella. Not every AI is ML.</p>
                  </div>
                  <div className="sim ml">
                    <Term termKey="sim-ml" en="ML" />
                    <p>Branch of AI that learns patterns from data with algorithms.</p>
                  </div>
                  <div className="sim dl">
                    <Term termKey="sim-dl" en="Deep learning" />
                    <p>Subset of ML. Uses multi-layer <Term termKey="sim-nn" en="neural networks" />.</p>
                  </div>
                  <div className="sim gen">
                    <Term termKey="sim-genai" en="GenAI" />
                    <p>Advanced deep learning that generates new content, often with LLMs.</p>
                  </div>
                  <div className="sim ag">
                    <Term termKey="sim-agentic" en="Agentic AI" />
                    <p>Uses an LLM to reason, then acts in multiple steps toward a goal.</p>
                  </div>
                </div>
              </div>
              <ReferenceImage src={assetUrl("assets/01-ai-hierarchy.png")} alt="AI hierarchy 參考圖：AI 包含 ML，ML 包含 deep learning；GenAI 與 agentic AI 不相同。" />
            </article>
  );
}
