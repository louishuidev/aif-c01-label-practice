(function () {
  "use strict";

  var boards = {
    hierarchy: "hierarchy",
    "train-fit": "train-fit",
    inferencing: "inferencing",
    "data-learning": "data-learning",
  };

  var homeView = document.getElementById("view-home");
  var boardView = document.getElementById("view-board");
  var backBtn = document.getElementById("back-btn");
  var headerTitle = document.getElementById("header-title");
  var headerSub = document.getElementById("header-sub");
  var countEl = document.getElementById("remain-count");
  var boardRoot = document.getElementById("board-root");
  var modeButtons = document.querySelectorAll(".modes [data-mode]");
  var resetBtn = document.getElementById("reset-btn");

  function currentBoard() {
    var hash = (location.hash || "#home").replace(/^#/, "");
    if (boards[hash]) return hash;
    return "home";
  }

  function termsIn(el) {
    return Array.prototype.slice.call(el.querySelectorAll(".term"));
  }

  function officialName(term) {
    var en = term.querySelector(".term-en");
    return en ? en.textContent.trim() : term.textContent.trim();
  }

  function setCovered(term, covered) {
    var name = officialName(term);
    term.classList.toggle("is-hidden", covered);
    term.setAttribute("aria-pressed", covered ? "true" : "false");
    if (covered) {
      term.setAttribute("aria-label", "已隱藏：" + name + "。點擊揭開");
    } else {
      term.setAttribute("aria-label", name);
    }
  }

  function updateCount() {
    var board = boardRoot.querySelector(".board:not([hidden])");
    if (!board) {
      countEl.textContent = "";
      return;
    }
    var all = termsIn(board);
    var hidden = all.filter(function (t) {
      return t.classList.contains("is-hidden");
    });
    var mode = board.getAttribute("data-mode");
    if (mode === "reveal") {
      countEl.innerHTML =
        "尚餘 <strong>" + hidden.length + "</strong> / " + all.length + " 個術語未揭開";
    } else if (mode === "hide") {
      countEl.textContent = "全部 " + all.length + " 個術語已遮住（此模式點擊不會揭開）";
    } else {
      countEl.textContent = "已顯示全部 " + all.length + " 個官方術語";
    }
  }

  function applyMode(board, mode, resetCovers) {
    board.setAttribute("data-mode", mode);
    var all = termsIn(board);
    if (mode === "show") {
      all.forEach(function (t) {
        setCovered(t, false);
        t.disabled = true;
      });
    } else if (mode === "hide") {
      all.forEach(function (t) {
        setCovered(t, true);
        t.disabled = true;
      });
    } else {
      if (resetCovers) {
        all.forEach(function (t) {
          setCovered(t, true);
        });
      }
      all.forEach(function (t) {
        t.disabled = false;
      });
    }
    modeButtons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-mode") === mode ? "true" : "false");
    });
    updateCount();
  }

  function showHome() {
    homeView.hidden = false;
    boardView.hidden = true;
    backBtn.hidden = true;
    headerTitle.textContent = "AIF-C01 標籤練習";
    headerSub.textContent = "Domain 1 · Task 1.1";
    document.querySelectorAll("#board-root .board").forEach(function (b) {
      b.hidden = true;
    });
    countEl.textContent = "";
  }

  function showBoard(id) {
    var board = document.getElementById("board-" + id);
    if (!board) {
      showHome();
      return;
    }
    homeView.hidden = true;
    boardView.hidden = false;
    backBtn.hidden = false;
    document.querySelectorAll("#board-root .board").forEach(function (b) {
      b.hidden = true;
    });
    board.hidden = false;
    headerTitle.textContent = board.getAttribute("data-title-zh") || "練習圖";
    headerSub.textContent = board.getAttribute("data-title-en") || "Task 1.1";
    applyMode(board, "reveal", true);
    boardView.scrollIntoView({ block: "start" });
  }

  function route() {
    var id = currentBoard();
    if (id === "home") showHome();
    else showBoard(id);
  }

  document.querySelectorAll("[data-board]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      location.hash = btn.getAttribute("data-board");
    });
  });

  backBtn.addEventListener("click", function () {
    location.hash = "home";
  });

  modeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var board = boardRoot.querySelector(".board:not([hidden])");
      if (!board) return;
      var mode = btn.getAttribute("data-mode");
      applyMode(board, mode, mode !== "show");
    });
  });

  resetBtn.addEventListener("click", function () {
    var board = boardRoot.querySelector(".board:not([hidden])");
    if (!board) return;
    var mode = board.getAttribute("data-mode") || "reveal";
    if (mode === "show") {
      applyMode(board, "reveal", true);
    } else {
      applyMode(board, mode, true);
    }
  });

  boardRoot.addEventListener("click", function (event) {
    var term = event.target.closest(".term");
    if (!term || !boardRoot.contains(term)) return;
    var board = term.closest(".board");
    if (!board || board.getAttribute("data-mode") !== "reveal") return;
    if (term.disabled) return;
    if (term.classList.contains("is-hidden")) {
      setCovered(term, false);
      updateCount();
    }
  });

  window.addEventListener("hashchange", route);
  route();
})();
