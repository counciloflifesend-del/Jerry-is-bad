const options = [
  {
    note: "Breaking news",
    lines: ["Jerry", "is bad"],
    kicker: "front-page confirmed",
    fontFamily: "Georgia, 'Times New Roman', serif",
    foreground: "#101010",
    background: "#f3ead7",
    accent: "#b21f2d",
    styleClass: "newspaper",
    layout: "layout-center",
    lineColors: ["#111111", "#b21f2d"]
  },
  {
    note: "Courtroom verdict",
    lines: ["The verdict:", "Jerry bad"],
    kicker: "case closed",
    fontFamily: "Baskerville, Georgia, serif",
    foreground: "#2b2118",
    background: "#f7e1b5",
    accent: "#8d5524",
    styleClass: "court",
    layout: "layout-top-left",
    lineColors: ["#2b2118", "#a44a3f"]
  },
  {
    note: "Report card",
    lines: ["Jerry gets", "an F"],
    kicker: "in being good",
    fontFamily: "'Trebuchet MS', Verdana, sans-serif",
    foreground: "#0b3954",
    background: "#e9f5db",
    accent: "#ff595e",
    styleClass: "report",
    layout: "layout-bottom-right",
    lineColors: ["#0b3954", "#ff595e"]
  },
  {
    note: "Weather alert",
    lines: ["100% chance", "of bad Jerry"],
    kicker: "bring an umbrella",
    fontFamily: "Verdana, Geneva, sans-serif",
    foreground: "#f8fbff",
    background: "#174c77",
    accent: "#ffd166",
    styleClass: "weather",
    layout: "layout-left-rail",
    lineColors: ["#f8fbff", "#ffd166"]
  },
  {
    note: "Science-ish result",
    lines: ["Jerry failed", "the good test"],
    kicker: "peer reviewed by snacks",
    fontFamily: "'Courier New', Courier, monospace",
    foreground: "#d8f3dc",
    background: "#081c15",
    accent: "#52b788",
    styleClass: "arcade",
    layout: "layout-right-rail",
    lineColors: ["#95ffb8", "#fff275"]
  },
  {
    note: "Official certificate",
    lines: ["Certified", "bad Jerry"],
    kicker: "embossed for emphasis",
    fontFamily: "Georgia, 'Times New Roman', serif",
    foreground: "#4a2618",
    background: "#fff1cf",
    accent: "#d4a017",
    styleClass: "serif",
    layout: "layout-card",
    lineColors: ["#4a2618", "#b21f2d"]
  },
  {
    note: "Tiny memo",
    lines: ["Memo:", "Jerry is bad"],
    kicker: "but huge where it counts",
    fontFamily: "'Courier New', Courier, monospace",
    foreground: "#22223b",
    background: "#f2e9e4",
    accent: "#c9ada7",
    styleClass: "receipt",
    layout: "layout-narrow",
    lineColors: ["#22223b", "#9a031e"]
  },
  {
    note: "No notes",
    lines: ["Jerry bad.", "No notes."],
    kicker: "final answer",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    foreground: "#f1faee",
    background: "#1d3557",
    accent: "#e63946",
    styleClass: "label",
    layout: "layout-center",
    lineColors: ["#f1faee", "#e63946"]
  },
  {
    note: "Mascot energy",
    lines: ["Badness mascot:", "Jerry"],
    kicker: "wearing a tiny sash",
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    foreground: "#001219",
    background: "#94d2bd",
    accent: "#ee9b00",
    styleClass: "comic",
    layout: "layout-diagonal",
    lineColors: ["#001219", "#ae2012"]
  },
  {
    note: "Opposite day failed",
    lines: ["Jerry is", "not good"],
    kicker: "still bad",
    fontFamily: "Gill Sans, Gill Sans MT, Calibri, sans-serif",
    foreground: "#fff",
    background: "#540b0e",
    accent: "#e09f3e",
    styleClass: "poster",
    layout: "layout-top-right",
    lineColors: ["#ffffff", "#ffba08"]
  },
  {
    note: "Loading complete",
    lines: ["Badness", "installed"],
    kicker: "user: Jerry",
    fontFamily: "'Courier New', Courier, monospace",
    foreground: "#caffbf",
    background: "#03071e",
    accent: "#80ffdb",
    styleClass: "neon",
    layout: "layout-bottom-left",
    lineColors: ["#caffbf", "#ff006e"]
  },
  {
    note: "Proudly not good",
    lines: ["Jerry:", "bad today"],
    kicker: "and possibly Tuesday",
    fontFamily: "Verdana, Geneva, sans-serif",
    foreground: "#1b1b1e",
    background: "#f4d35e",
    accent: "#ee964b",
    styleClass: "chunky",
    layout: "layout-split",
    lineColors: ["#1b1b1e", "#9d0208"]
  },
  {
    note: "Deluxe edition",
    lines: ["Jerry is bad"],
    kicker: "now in louder colors",
    fontFamily: "Gill Sans, Gill Sans MT, Calibri, sans-serif",
    foreground: "#001d3d",
    background: "#ffc300",
    accent: "#003566",
    styleClass: "comic",
    layout: "layout-huge",
    lineColors: ["#d00000"]
  },
  {
    note: "Headline worthy",
    lines: ["Jerry is bad", "enough for ink"],
    kicker: "extra extra",
    fontFamily: "Georgia, 'Times New Roman', serif",
    foreground: "#191919",
    background: "#faf3dd",
    accent: "#c1121f",
    styleClass: "newspaper",
    layout: "layout-wide",
    lineColors: ["#191919", "#c1121f"]
  },
  {
    note: "Bad-o-meter",
    lines: ["Needle points", "at Jerry"],
    kicker: "bad reading detected",
    fontFamily: "Impact, Haettenschweiler, 'Arial Black', sans-serif",
    foreground: "#edf6f9",
    background: "#006d77",
    accent: "#ffddd2",
    styleClass: "weather",
    layout: "layout-tilt-left",
    lineColors: ["#edf6f9", "#ffddd2"]
  },
  {
    note: "Emergency bulletin",
    lines: ["Jerry is bad"],
    kicker: "remain playful",
    fontFamily: "'Arial Black', Arial, sans-serif",
    foreground: "#ffffff",
    background: "#ba181b",
    accent: "#fdf0d5",
    styleClass: "warning",
    layout: "layout-warning-strip",
    lineColors: ["#ffffff"]
  },
  {
    note: "Approximately 50 ways",
    lines: ["Jerry.exe", "bad output"],
    kicker: "this is one",
    fontFamily: "Menlo, Monaco, Consolas, monospace",
    foreground: "#00f5d4",
    background: "#240046",
    accent: "#ff006e",
    styleClass: "arcade",
    layout: "layout-terminal",
    lineColors: ["#00f5d4", "#fee440"]
  },
  {
    note: "Chart says",
    lines: ["Jerry scores", "zero good"],
    kicker: "bars agree",
    fontFamily: "Verdana, Geneva, sans-serif",
    foreground: "#0f172a",
    background: "#e0f2fe",
    accent: "#0284c7",
    styleClass: "report",
    layout: "layout-bottom-band",
    lineColors: ["#0f172a", "#fb8500"]
  },
  {
    note: "Spoiler alert",
    lines: ["Plot twist:", "Jerry bad"],
    kicker: "no twist actually",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    foreground: "#03045e",
    background: "#90e0ef",
    accent: "#00b4d8",
    styleClass: "label",
    layout: "layout-top-band",
    lineColors: ["#03045e", "#d00000"]
  },
  {
    note: "Cursive confirms",
    lines: ["Jerry is", "bad in cursive"],
    kicker: "fancy but firm",
    fontFamily: "Snell Roundhand, Brush Script MT, cursive",
    foreground: "#5a189a",
    background: "#f8f7ff",
    accent: "#ffafcc",
    styleClass: "serif",
    layout: "layout-wave",
    lineColors: ["#5a189a", "#ff006e"]
  },
  {
    note: "Vibe check",
    lines: ["Jerry did not", "pass"],
    kicker: "the vibe check",
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    foreground: "#fefae0",
    background: "#283618",
    accent: "#dda15e",
    styleClass: "stamp",
    layout: "layout-stamp",
    lineColors: ["#fefae0", "#dda15e"]
  },
  {
    note: "Chat update",
    lines: ["Goodness", "left the chat"],
    kicker: "Jerry stayed",
    fontFamily: "Avenir Next, Avenir, Helvetica, Arial, sans-serif",
    foreground: "#eff7f6",
    background: "#274c77",
    accent: "#a3cef1",
    styleClass: "poster",
    layout: "layout-left-rail",
    lineColors: ["#eff7f6", "#ffb703"]
  },
  {
    note: "Today's special",
    lines: ["One bad", "Jerry"],
    kicker: "served giant",
    fontFamily: "Cooper Black, Georgia, serif",
    foreground: "#3c096c",
    background: "#ffcbf2",
    accent: "#ff9f1c",
    styleClass: "chunky",
    layout: "layout-card",
    lineColors: ["#3c096c", "#ff006e"]
  },
  {
    note: "Town hall agenda",
    lines: ["Motion:", "Jerry bad"],
    kicker: "motion carries",
    fontFamily: "Georgia, 'Times New Roman', serif",
    foreground: "#2f2519",
    background: "#e9d8a6",
    accent: "#ae2012",
    styleClass: "newspaper",
    layout: "layout-top-left",
    lineColors: ["#2f2519", "#ae2012"]
  },
  {
    note: "Politely loud",
    lines: ["Jerry is bad"],
    kicker: "thank you",
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    foreground: "#ffffff",
    background: "#7209b7",
    accent: "#4cc9f0",
    styleClass: "neon",
    layout: "layout-diagonal",
    lineColors: ["#ffffff"]
  },
  {
    note: "Small click",
    lines: ["Large conclusion:", "Jerry bad"],
    kicker: "very large",
    fontFamily: "Optima, Candara, Segoe, sans-serif",
    foreground: "#22223b",
    background: "#c9ada7",
    accent: "#f2e9e4",
    styleClass: "poster",
    layout: "layout-right-rail",
    lineColors: ["#22223b", "#9a031e"]
  },
  {
    note: "Caution tape",
    lines: ["Caution:", "bad Jerry"],
    kicker: "proceed with jokes",
    fontFamily: "'Arial Black', Arial, sans-serif",
    foreground: "#111",
    background: "#ffd500",
    accent: "#000000",
    styleClass: "warning",
    layout: "layout-warning-strip",
    lineColors: ["#111111", "#d00000"]
  },
  {
    note: "Final answer",
    lines: ["Jerry is bad"],
    kicker: "locked in",
    fontFamily: "Impact, Haettenschweiler, 'Arial Black', sans-serif",
    foreground: "#f8f9fa",
    background: "#212529",
    accent: "#f77f00",
    styleClass: "label",
    layout: "layout-huge",
    lineColors: ["#f8f9fa"]
  },
  {
    note: "Wizard note",
    lines: ["Spell says", "Jerry bad"],
    kicker: "spell checked",
    fontFamily: "Copperplate, 'Copperplate Gothic Light', fantasy",
    foreground: "#e0fbfc",
    background: "#293241",
    accent: "#ee6c4d",
    styleClass: "royal",
    layout: "layout-top-right",
    lineColors: ["#e0fbfc", "#ffb703"]
  },
  {
    note: "Rated",
    lines: ["Bad", "out of ten"],
    kicker: "Jerry edition",
    fontFamily: "'Arial Black', Arial, sans-serif",
    foreground: "#141414",
    background: "#ffcad4",
    accent: "#9d4edd",
    styleClass: "chunky",
    layout: "layout-bottom-right",
    lineColors: ["#141414", "#ff006e"]
  },
  {
    note: "Poem says",
    lines: ["Roses are red", "Jerry is bad"],
    kicker: "roses agree",
    fontFamily: "Didot, Bodoni 72, Georgia, serif",
    foreground: "#5f0f40",
    background: "#ffe5ec",
    accent: "#fb6f92",
    styleClass: "poem",
    layout: "layout-narrow",
    lineColors: ["#5f0f40", "#fb6f92"]
  },
  {
    note: "Nice font, tough truth",
    lines: ["Beautifully", "bad Jerry"],
    kicker: "the font tried",
    fontFamily: "Avenir Next, Avenir, Helvetica, Arial, sans-serif",
    foreground: "#073b4c",
    background: "#caf0f8",
    accent: "#ef476f",
    styleClass: "poster",
    layout: "layout-wave",
    lineColors: ["#073b4c", "#ef476f"]
  },
  {
    note: "Screen declaration",
    lines: ["Jerry is bad"],
    kicker: "no old button required",
    fontFamily: "Impact, Haettenschweiler, 'Arial Black', sans-serif",
    foreground: "#fbff12",
    background: "#1f0322",
    accent: "#ff206e",
    styleClass: "neon",
    layout: "layout-center",
    lineColors: ["#fbff12"]
  },
  {
    note: "Sticky note",
    lines: ["Note to self:", "Jerry bad"],
    kicker: "tiny note, huge letters",
    fontFamily: "Chalkboard SE, Comic Sans MS, cursive",
    foreground: "#253237",
    background: "#c2dfe3",
    accent: "#5c6b73",
    styleClass: "tiny-note",
    layout: "layout-bottom-left",
    lineColors: ["#253237", "#d00000"]
  },
  {
    note: "Inspection failed",
    lines: ["Jerry failed", "inspection"],
    kicker: "clipboard agrees",
    fontFamily: "Arial Rounded MT Bold, Arial, sans-serif",
    foreground: "#2d00f7",
    background: "#fff3b0",
    accent: "#ff6d00",
    styleClass: "comic",
    layout: "layout-top-band",
    lineColors: ["#2d00f7", "#d00000"]
  },
  {
    note: "Signed by everyone",
    lines: ["Everyone signs:", "Jerry bad"],
    kicker: "including the font",
    fontFamily: "Snell Roundhand, Brush Script MT, cursive",
    foreground: "#392f5a",
    background: "#f7fff7",
    accent: "#ff66b3",
    styleClass: "serif",
    layout: "layout-split",
    lineColors: ["#392f5a", "#ff66b3"]
  },
  {
    note: "Negative good energy",
    lines: ["Good energy:", "negative"],
    kicker: "Jerry math",
    fontFamily: "Optima, Candara, Segoe, sans-serif",
    foreground: "#fffffc",
    background: "#2f3e46",
    accent: "#cad2c5",
    styleClass: "poster",
    layout: "layout-right-rail",
    lineColors: ["#fffffc", "#fca311"]
  },
  {
    note: "The end",
    lines: ["Jerry bad.", "The end."],
    kicker: "curtain falls",
    fontFamily: "Didot, Bodoni 72, Georgia, serif",
    foreground: "#fff",
    background: "#250902",
    accent: "#f6aa1c",
    styleClass: "serif",
    layout: "layout-bottom-band",
    lineColors: ["#ffffff", "#f6aa1c"]
  },
  {
    note: "Bad idea wearing shoes",
    lines: ["Bad idea:", "Jerry"],
    kicker: "still PG",
    fontFamily: "Chalkboard SE, Comic Sans MS, cursive",
    foreground: "#2b2d42",
    background: "#edf2f4",
    accent: "#ef233c",
    styleClass: "comic",
    layout: "layout-tilt-left",
    lineColors: ["#2b2d42", "#ef233c"]
  },
  {
    note: "Coupon status",
    lines: ["No coupon", "fixes Jerry"],
    kicker: "not redeemable",
    fontFamily: "'Courier New', Courier, monospace",
    foreground: "#3a2e39",
    background: "#f4acb7",
    accent: "#9d8189",
    styleClass: "receipt",
    layout: "layout-receipt",
    lineColors: ["#3a2e39", "#9d0208"]
  },
  {
    note: "Dramatic mode",
    lines: ["Jerry is bad"],
    kicker: "cue tiny thunder",
    fontFamily: "Palatino, 'Palatino Linotype', Georgia, serif",
    foreground: "#ffe8d6",
    background: "#6b2d5c",
    accent: "#f4a261",
    styleClass: "royal",
    layout: "layout-card",
    lineColors: ["#ffe8d6"]
  },
  {
    note: "Stamp it",
    lines: ["Jerry:", "bad"],
    kicker: "red ink energy",
    fontFamily: "Impact, Haettenschweiler, 'Arial Black', sans-serif",
    foreground: "#780000",
    background: "#fdf0d5",
    accent: "#c1121f",
    styleClass: "stamp",
    layout: "layout-stamp",
    lineColors: ["#780000", "#c1121f"]
  },
  {
    note: "Not bad? no.",
    lines: ["Jerry is", "bad at not bad"],
    kicker: "double checked",
    fontFamily: "Arial Rounded MT Bold, Arial, sans-serif",
    foreground: "#fff",
    background: "#118ab2",
    accent: "#06d6a0",
    styleClass: "chunky",
    layout: "layout-left-rail",
    lineColors: ["#ffffff", "#ffd166"]
  },
  {
    note: "Public notice",
    lines: ["Posted:", "Jerry bad"],
    kicker: "everywhere",
    fontFamily: "Georgia, 'Times New Roman', serif",
    foreground: "#2f2519",
    background: "#e9d8a6",
    accent: "#ae2012",
    styleClass: "newspaper",
    layout: "layout-wide",
    lineColors: ["#2f2519", "#ae2012"]
  },
  {
    note: "Lab sample",
    lines: ["Sample:", "bad Jerry"],
    kicker: "clearly labeled",
    fontFamily: "Menlo, Monaco, Consolas, monospace",
    foreground: "#e0fbfc",
    background: "#001219",
    accent: "#0a9396",
    styleClass: "arcade",
    layout: "layout-terminal",
    lineColors: ["#e0fbfc", "#ee9b00"]
  },
  {
    note: "Royal decree",
    lines: ["By decree:", "Jerry bad"],
    kicker: "order of silliness",
    fontFamily: "Palatino, 'Palatino Linotype', Georgia, serif",
    foreground: "#f8edeb",
    background: "#6d597a",
    accent: "#ffb4a2",
    styleClass: "royal",
    layout: "layout-top-left",
    lineColors: ["#f8edeb", "#ffcdb2"]
  },
  {
    note: "Neon sign",
    lines: ["Jerry is bad"],
    kicker: "glowing evidence",
    fontFamily: "Impact, Haettenschweiler, 'Arial Black', sans-serif",
    foreground: "#f8f9fa",
    background: "#10002b",
    accent: "#e0aaff",
    styleClass: "neon",
    layout: "layout-bottom-right",
    lineColors: ["#f8f9fa"]
  },
  {
    note: "Scoreboard",
    lines: ["Jerry: 0", "Bad: 999"],
    kicker: "home team: truth",
    fontFamily: "Arial Black, Arial, sans-serif",
    foreground: "#fefae0",
    background: "#023047",
    accent: "#fb8500",
    styleClass: "arcade",
    layout: "layout-split",
    lineColors: ["#fefae0", "#fb8500"]
  },
  {
    note: "Plain and giant",
    lines: ["Jerry is bad"],
    kicker: "that is the page",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    foreground: "#ffffff",
    background: "#111111",
    accent: "#ff3b30",
    styleClass: "poster",
    layout: "layout-huge",
    lineColors: ["#ffffff"]
  }
].map((option) => ({ weight: 900, ...option }));

const stage = document.querySelector("#stage");
const message = document.querySelector("#message");
const fullscreenButton = document.querySelector("#fullscreenButton");
const fullscreenButtonText = document.querySelector("#fullscreenButtonText");

let deck = [];
let currentOption = null;
let appFullscreen = false;

function shuffle(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function nextOption() {
  if (deck.length === 0) {
    deck = shuffle(options);

    if (currentOption && deck[0] === currentOption && deck.length > 1) {
      [deck[0], deck[1]] = [deck[1], deck[0]];
    }
  }

  currentOption = deck.shift();
  return currentOption;
}

function lineColor(option, index) {
  return option.lineColors[index % option.lineColors.length] || option.foreground;
}

function splitVisualLine(line) {
  if (line.length <= 11) {
    return [line];
  }

  const chunks = [];
  const words = line.split(" ");
  let current = "";

  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;

    if (candidate.length <= 10) {
      current = candidate;
      return;
    }

    if (current) {
      chunks.push(current);
    }

    current = word;
  });

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

function renderOption(option) {
  const visualLines = option.lines.flatMap((line) => splitVisualLine(line));
  const lines = visualLines
    .map((line, index) => `<span class="core-line" style="--line-color: ${lineColor(option, index)}">${line}</span>`)
    .join("");

  message.innerHTML = `
    <span class="side-note">${option.note}</span>
    <span class="core" aria-label="${option.lines.join(" ")}">
      ${lines}
    </span>
    <span class="kicker">${option.kicker}</span>
  `;
}

function applyOption(option) {
  stage.className = `stage ${option.styleClass} ${option.layout}`;
  stage.style.setProperty("--bg", option.background);
  stage.style.setProperty("--fg", option.foreground);
  stage.style.setProperty("--accent", option.accent);
  stage.style.setProperty("--font", option.fontFamily);
  stage.style.setProperty("--weight", option.weight ?? 900);
  renderOption(option);
  fitMessage();
}

function fitMessage() {
  const wrap = message.parentElement;
  const maxWidth = wrap.clientWidth;
  const maxHeight = wrap.clientHeight;
  let low = 22;
  let high = Math.min(window.innerWidth * 0.315, 285);
  let best = low;
  const hasFrame = stage.matches(".warning, .receipt, .stamp, .label, .tiny-note, .layout-card");
  const widthInset = Math.max(hasFrame ? 46 : 26, maxWidth * (hasFrame ? 0.13 : 0.075));
  const heightInset = Math.max(hasFrame ? 42 : 24, maxHeight * (hasFrame ? 0.1 : 0.065));

  message.style.setProperty("--fit-size", `${low}px`);

  for (let i = 0; i < 16; i += 1) {
    const mid = (low + high) / 2;
    message.style.setProperty("--fit-size", `${mid}px`);
    const widestLine = Math.max(
      ...Array.from(message.querySelectorAll(".core-line"), (line) => line.scrollWidth),
      0
    );

    if (widestLine <= maxWidth - widthInset && message.scrollHeight <= maxHeight - heightInset) {
      best = mid;
      low = mid;
    } else {
      high = mid;
    }
  }

  message.style.setProperty("--fit-size", `${Math.floor(best)}px`);
}

function showRandomOption() {
  message.classList.add("is-changing");
  applyOption(nextOption());

  window.setTimeout(() => {
    message.classList.remove("is-changing");
  }, 120);
}

function isAdvanceKey(event) {
  return event.key === "Enter" || event.key === " " || event.key === "Space" || event.key === "Spacebar";
}

function updateFullscreenButton() {
  const isFullscreen = document.fullscreenElement === stage || appFullscreen;
  document.documentElement.classList.toggle("app-fullscreen", appFullscreen && document.fullscreenElement !== stage);
  fullscreenButton.setAttribute("aria-label", isFullscreen ? "Exit fullscreen" : "Enter fullscreen");
  fullscreenButton.classList.toggle("is-fullscreen", isFullscreen);
  fullscreenButtonText.textContent = isFullscreen ? "Exit" : "Full";
  window.setTimeout(fitMessage, 80);
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      appFullscreen = false;
    } else if (stage.requestFullscreen) {
      await stage.requestFullscreen({ navigationUI: "hide" });
      appFullscreen = false;
    } else if (stage.webkitRequestFullscreen) {
      stage.webkitRequestFullscreen();
      appFullscreen = false;
    } else {
      appFullscreen = !appFullscreen;
    }
  } catch {
    appFullscreen = !appFullscreen;
  }

  updateFullscreenButton();
}

document.addEventListener("click", (event) => {
  if (event.target.closest(".fullscreen-button")) {
    return;
  }

  showRandomOption();
});

fullscreenButton.addEventListener("click", async (event) => {
  event.stopPropagation();
  await toggleFullscreen();
  stage.focus({ preventScroll: true });
});

document.addEventListener("fullscreenchange", updateFullscreenButton);

window.addEventListener(
  "keydown",
  (event) => {
    if (isAdvanceKey(event)) {
      event.preventDefault();
      showRandomOption();
    }
  },
  { capture: true }
);

window.addEventListener("resize", fitMessage);

applyOption(nextOption());
updateFullscreenButton();
stage.focus({ preventScroll: true });
