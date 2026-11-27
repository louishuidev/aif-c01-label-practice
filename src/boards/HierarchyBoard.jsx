import Term from "../Term.jsx";
import { useTermContext } from "../TermContext.jsx";
import ReferenceImage from "../ReferenceImage.jsx";
import { assetUrl } from "../assetUrl.js";
import Cue, { SourceNote } from "../Cue.jsx";

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
      <p className="board-kicker">人工智能層級 · Task 1.1 · Domain 1 Review Lessons 1 and 5</p>
      <SourceNote>
        The captured Skill Builder 1.1 lessons teach AI, ML, deep learning, neural networks,
        generative AI, and LLMs. They do not name agentic AI, so that label is kept only as an
        extra practice term and is not presented as course-taught content.
      </SourceNote>
      <div className="diagram diagram-hierarchy">
        <div className="nest nest-ai">
          <div className="nest-head">
            <Term termKey="ai" en="AI" zh="人工智能" />
            <Cue termKey="ai">
              The computer-science field that takes on cognitive problems usually associated with
              human intelligence. The aim is self-learning systems that derive meaning from data.
            </Cue>
            <div className="callout">
              <Term termKey="not-every-ai-is-ml" en="Not every AI is ML" zh="不是所有 AI 都是機器學習" />
              <Cue termKey="not-every-ai-is-ml">
                The wider field includes more than this one branch that learns from data with
                algorithms.
              </Cue>
            </div>
          </div>
          <div className="split">
            <div className="nest nest-ml">
              <div className="nest-head">
                <Term termKey="ml" en="ML" zh="機器學習" />
              </div>
              <Cue termKey="ml">
                A branch of AI that uses data and algorithms so systems can learn and improve
                accuracy. Models are trained on large datasets to find patterns and make
                predictions, such as a product recommendation.
              </Cue>
              <div className="nest nest-dl">
                <div className="nest-head">
                  <Term termKey="deep-learning" en="Deep learning" zh="深度學習" />
                </div>
                <Cue termKey="deep-learning">
                  A type of ML inspired by the brain, using layers of{" "}
                  <Term termKey="neural-networks" en="neural networks" zh="神經網絡" />.
                </Cue>
                <div className="pair">
                  <div className="inner-card genai">
                    <Term termKey="genai" en="GenAI" zh="生成式 AI" />
                    <Cue termKey="genai">
                      Can hold a conversation and create original content such as stories, pictures,
                      videos, or music. Work usually begins with a prompt. The course used Amazon
                      Bedrock as an example.
                    </Cue>
                  </div>
                  <div className="inner-card llm">
                    <Term termKey="llm" en="LLM" zh="大型語言模型" />
                    <Cue termKey="llm">
                      Very large models with many billions of features. They are flexible, strong at
                      language tasks, and can summarize, translate, and write stories or code.
                    </Cue>
                  </div>
                </div>
              </div>
            </div>
            <div className="nest nest-agentic">
              <div className="nest-head">
                <Term termKey="agentic-ai" en="Agentic AI" zh="代理式 AI" />
              </div>
              <Cue termKey="agentic-ai">
                Not named in the captured Domain 1 Review introduction or in 1.1 Lessons 1–5. This
                card is here for extra practice only, not as a term taught in those scripts.
              </Cue>
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
          <SourceNote>
            The “is not the same as” contrast is not taught in the captured 1.1 scripts, because
            those lessons do not name the term on the right.
          </SourceNote>
        </div>

        <p className="section-label">Similarities and differences</p>
        <div className="sims">
          <div className="sim">
            <Term termKey="sim-ai" en="AI" />
            <Cue termKey="sim-ai">The wider computer-science field; this branch sits under it, not the other way around.</Cue>
          </div>
          <div className="sim ml">
            <Term termKey="sim-ml" en="ML" />
            <Cue termKey="sim-ml">The branch that learns patterns from data with algorithms and improves accuracy.</Cue>
          </div>
          <div className="sim dl">
            <Term termKey="sim-dl" en="Deep learning" />
            <Cue termKey="sim-dl">
              The type of ML that uses layers of <Term termKey="sim-nn" en="neural networks" />.
            </Cue>
          </div>
          <div className="sim gen">
            <Term termKey="sim-genai" en="GenAI" />
            <Cue termKey="sim-genai">Creates original content from a prompt, often with very large language models.</Cue>
          </div>
          <div className="sim ag">
            <Term termKey="sim-agentic" en="Agentic AI" />
            <Cue termKey="sim-agentic">Not taught in the captured 1.1 Skill Builder lessons.</Cue>
          </div>
        </div>
      </div>
      <ReferenceImage
        src={assetUrl("assets/01-ai-hierarchy.png")}
        alt="AI hierarchy 參考圖：AI 包含 ML，ML 包含 deep learning。"
      />
    </article>
  );
}
