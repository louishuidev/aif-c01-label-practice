import { useEffect, useId, useState } from "react";
import {
  BOARD_LESSONS,
  COURSE,
  INTRODUCTION,
  TASK_1_1,
  TASK_OUTLINE,
} from "./courseNotes.js";

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

function CourseLink() {
  return (
    <a className="official-ref-course-link" href={COURSE.url} target="_blank" rel="noopener noreferrer">
      <span className="official-ref-link-title">Open the official Domain 1 Review course</span>
      <span className="official-ref-link-detail">
        Skill Builder · {COURSE.fullTitle}. Sign in to Skill Builder to open the lessons.
      </span>
      <span className="official-ref-external">在新分頁開啟</span>
    </a>
  );
}

function PointList({ points }) {
  return (
    <ul className="lesson-points">
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

function LessonNotes({ highlightedIds, allowBrowse = true }) {
  const highlightSet = new Set(highlightedIds || []);
  return (
    <div className="lesson-stack">
      <details className="lesson-note">
        <summary>{INTRODUCTION.title}</summary>
        <PointList points={INTRODUCTION.points} />
      </details>
      <p className="task-heading">{TASK_1_1.title}</p>
      <p className="task-summary">{TASK_1_1.summary}</p>
      {TASK_1_1.lessons.map((lesson) => {
        const highlighted = highlightSet.has(lesson.id);
        return (
          <LessonDetails
            key={lesson.id}
            lesson={lesson}
            highlighted={highlighted}
            defaultOpen={highlighted}
          />
        );
      })}
      {allowBrowse
        ? TASK_OUTLINE.filter((task) => task.id !== "1.1").map((task) => (
            <div key={task.id} className="pending-task" data-task-pending={task.id}>
              <h3>{task.title}</h3>
              <p>
                {task.lessonRange} · {task.note}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}

function LessonDetails({ lesson, highlighted, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <details
      className={highlighted ? "lesson-note is-relevant" : "lesson-note"}
      data-lesson={lesson.id}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary>
        {highlighted ? <span className="lesson-badge">與此練習圖最相關</span> : null}
        <span>
          Lesson {lesson.number}: {lesson.title}
        </span>
      </summary>
      <PointList points={lesson.points} />
    </details>
  );
}

function OutlineMap() {
  return (
    <ol className="domain-map">
      <li>
        <strong>Domain 1 Review</strong>
        <ol>
          <li>{INTRODUCTION.title}</li>
          <li>
            {TASK_1_1.title}
            <ol>
              {TASK_1_1.lessons.map((lesson) => (
                <li key={lesson.id}>
                  Lesson {lesson.number}: {lesson.title}
                </li>
              ))}
            </ol>
          </li>
          {TASK_OUTLINE.filter((task) => task.id !== "1.1").map((task) => (
            <li key={task.id}>
              {task.title}
              <span className="pending-flag">
                {" "}
                · {task.lessonRange} · not yet expanded
              </span>
            </li>
          ))}
        </ol>
      </li>
    </ol>
  );
}

/**
 * Official Skill Builder Domain 1 Review reference.
 * Notes are original study summaries, not a transcript dump.
 */
export default function OfficialReference({ boardId, variant = "sidebar" }) {
  const wide = useWideLayout();
  const [open, setOpen] = useState(false);
  const bodyId = useId();
  const isHome = variant === "home";
  const showBody = isHome || wide || open;
  const highlightedIds = BOARD_LESSONS[boardId] || [];

  const body = (
    <div className="official-ref-body" id={bodyId} hidden={!showBody ? true : undefined}>
      <p className="official-ref-disclaimer">
        Study notes below follow the official Skill Builder course structure (Domain → Task
        Statement → Lesson). They are original summaries for personal study, not an official AWS
        document and not a copy of the course script. Open the official course signed in to Skill
        Builder.
      </p>
      <CourseLink />
      {isHome ? (
        <>
          <h3 className="map-heading">Domain / Task / Lesson map</h3>
          <OutlineMap />
          <details className="lesson-note">
            <summary>{INTRODUCTION.title}</summary>
            <PointList points={INTRODUCTION.points} />
          </details>
        </>
      ) : (
        <LessonNotes highlightedIds={highlightedIds} />
      )}
    </div>
  );

  if (isHome) {
    return (
      <section className="official-ref official-ref-home" aria-labelledby="official-ref-home-title">
        <h2 id="official-ref-home-title">官方參考</h2>
        {body}
      </section>
    );
  }

  return (
    <aside className="official-ref official-ref-sidebar" aria-labelledby="official-ref-title">
      {wide ? (
        <h2 id="official-ref-title">官方參考</h2>
      ) : (
        <button
          type="button"
          className="official-ref-toggle"
          id="official-ref-title"
          aria-expanded={open ? "true" : "false"}
          aria-controls={bodyId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="official-ref-toggle-label">官方參考</span>
          <span className="official-ref-toggle-hint">Domain 1 Review · Task 1.1 lessons</span>
          <span className="official-ref-toggle-state">{open ? "收合" : "展開"}</span>
        </button>
      )}
      {body}
    </aside>
  );
}
