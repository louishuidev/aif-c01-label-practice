import { useEffect, useState } from "react";
import Home from "./Home.jsx";
import BoardView, { BOARDS } from "./BoardView.jsx";

function parseHash() {
  const hash = (window.location.hash || "#home").replace(/^#/, "");
  if (BOARDS[hash]) return hash;
  return "home";
}

function navigate(id) {
  window.location.hash = id;
}

export default function App() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    function onHashChange() {
      setRoute(parseHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isHome = route === "home";
  const boardMeta = isHome ? null : BOARDS[route];

  return (
    <>
      <a className="skip" href="#main">
        跳到主要內容
      </a>
      <header className="app-header">
        {isHome ? null : (
          <button type="button" className="back-btn" onClick={() => navigate("home")}>
            返回
          </button>
        )}
        <div>
          <h1>{isHome ? "AIF-C01 標籤練習" : boardMeta.titleZh}</h1>
          <p>{isHome ? "Domain 1 · Task 1.1" : boardMeta.titleEn}</p>
        </div>
      </header>
      <main id="main">
        {isHome ? (
          <Home onOpen={navigate} />
        ) : (
          <BoardView key={route} boardId={route} />
        )}
      </main>
      <footer className="app-footer">
        <p>
          這是個人學習輔助，不是 AWS 官方文件。This is a personal study aid, not an official AWS
          document.
        </p>
      </footer>
    </>
  );
}
