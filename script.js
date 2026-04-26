const messageEl = document.getElementById("message");
const frameEl = document.getElementById("messageFrame");
const stageEl = document.getElementById("stage");
const fullscreenButton = document.getElementById("fullscreenButton");
let simulatedFullscreen = false;

const palettes = [
  { bg: "#f6f0df", fg: "#121212", accent: "#d8392b", accent2: "#f59e0b", button: "rgba(255,255,255,0.78)" },
  { bg: "#dff4ff", fg: "#07203a", accent: "#ff5d47", accent2: "#ffca5f", button: "rgba(255,255,255,0.72)" },
  { bg: "#0e1116", fg: "#f9f4ea", accent: "#ffd166", accent2: "#7dd3fc", button: "rgba(24,28,37,0.76)" },
  { bg: "#ffe4ec", fg: "#31111d", accent: "#8c1c4a", accent2: "#ff8a5b", button: "rgba(255,255,255,0.68)" },
  { bg: "#effadf", fg: "#17301d", accent: "#3a8f4d", accent2: "#a3d977", button: "rgba(255,255,255,0.74)" },
  { bg: "#f4ebff", fg: "#25153d", accent: "#7c3aed", accent2: "#ec4899", button: "rgba(255,255,255,0.74)" },
  { bg: "#fff3d7", fg: "#37210c", accent: "#dd6b20", accent2: "#b83280", button: "rgba(255,255,255,0.77)" },
  { bg: "#e5fff8", fg: "#09342d", accent: "#0f766e", accent2: "#22c55e", button: "rgba(255,255,255,0.72)" },
  { bg: "#f7f7f7", fg: "#101828", accent: "#2563eb", accent2: "#dc2626", button: "rgba(255,255,255,0.8)" },
  { bg: "#1f1624", fg: "#fef7ff", accent: "#ff7a59", accent2: "#ffd166", button: "rgba(34,27,39,0.82)" }
];

const styles = [
  {
    label: "official finding",
    className: "verdict",
    fontFamily: '"Arial Black", Impact, Haettenschweiler, sans-serif',
    html: '<span class="tiny">OFFICIAL FINDING</span><span class="big">JERRY</span><span class="mega accent">IS BAD</span>',
    desktopScale: 0.82,
    mobileScale: 0.72
  },
  {
    label: "dictionary entry",
    className: "gradient soft",
    fontFamily: 'Georgia, "Times New Roman", serif',
    html: '<span class="tiny">dictionary entry</span><span class="big">Jerry</span><span class="small">adjective</span><span class="mega">bad.</span>',
    desktopScale: 0.84,
    mobileScale: 0.74
  },
  {
    label: "rubber stamp",
    className: "outlined stamped",
    fontFamily: 'Impact, "Arial Black", sans-serif',
    html: '<span class="tiny">rubber stamp says</span><span class="mega">JERRY</span><span class="big">IS BAD</span>',
    desktopScale: 0.76,
    mobileScale: 0.68
  },
  {
    label: "whisper",
    className: "whisper",
    fontFamily: '"Trebuchet MS", Arial, sans-serif',
    html: '<span class="small">psst</span><span class="mega accent">jerry is bad</span>',
    desktopScale: 0.84,
    mobileScale: 0.74
  },
  {
    label: "ancient prophecy",
    className: "scroll",
    fontFamily: 'Palatino, "Book Antiqua", serif',
    html: '<span class="tiny">ancient prophecy</span><span class="big">beware:</span><span class="mega">Jerry is bad</span>',
    desktopScale: 0.82,
    mobileScale: 0.72
  },
  {
    label: "system alert",
    className: "glitch",
    fontFamily: '"Courier New", Menlo, monospace',
    html: '<span class="tiny">SYSTEM ALERT</span><span class="big">JERRY STATUS</span><span class="mega accent">BAD</span>',
    desktopScale: 0.78,
    mobileScale: 0.7
  },
  {
    label: "breaking news",
    className: "verdict",
    fontFamily: "Verdana, Geneva, sans-serif",
    html: '<span class="tiny">breaking news</span><span class="big">experts confirm</span><span class="mega">JERRY IS BAD</span>',
    desktopScale: 0.8,
    mobileScale: 0.7
  },
  {
    label: "ransom note",
    className: "ransom",
    fontFamily: "Arial, sans-serif",
    html: [
      '<span class="tile" style="font-family:Georgia,serif;background:#fff;">JERRY</span>',
      '<span class="tile" style="font-family:\'Courier New\',monospace;background:#ffe082;">IS</span>',
      '<span class="tile" style="font-family:Impact,sans-serif;background:#ffccd5;">BAD</span>'
    ].join(""),
    desktopScale: 0.9,
    mobileScale: 0.74
  },
  {
    label: "customer review",
    className: "gradient",
    fontFamily: "Tahoma, Geneva, sans-serif",
    html: '<span class="tiny">customer review</span><span class="mega">one star</span><span class="big">Jerry is bad</span>',
    desktopScale: 0.8,
    mobileScale: 0.7
  },
  {
    label: "scoreboard",
    className: "poster",
    fontFamily: '"Gill Sans", Arial, sans-serif',
    html: '<span class="tiny">scoreboard</span><span class="big">JERRY</span><span class="mega accent">0</span><span class="big">BAD</span><span class="mega">99</span>',
    desktopScale: 0.78,
    mobileScale: 0.68
  },
  {
    label: "formal announcement",
    className: "outlined",
    fontFamily: '"Times New Roman", Georgia, serif',
    html: '<span class="tiny">formal announcement</span><span class="big">it is with clarity</span><span class="mega">that Jerry is bad</span>',
    desktopScale: 0.76,
    mobileScale: 0.68
  },
  {
    label: "just this",
    className: "whisper",
    fontFamily: '"Segoe UI", Arial, sans-serif',
    html: '<span class="small">no further notes</span><span class="big">just this:</span><span class="mega accent">JERRY IS BAD</span>',
    desktopScale: 0.76,
    mobileScale: 0.68
  },
  {
    label: "typed memo",
    className: "typewriter",
    fontFamily: '"American Typewriter", Georgia, serif',
    html: '<span class="tiny">typed memo</span><span class="big">subject:</span><span class="mega">Jerry is bad</span>',
    desktopScale: 0.84,
    mobileScale: 0.74
  },
  {
    label: "museum plaque",
    className: "poster gradient",
    fontFamily: 'Futura, "Avenir Next", sans-serif',
    html: '<span class="tiny">museum plaque</span><span class="mega">JERRY</span><span class="big">remains bad</span>',
    desktopScale: 0.82,
    mobileScale: 0.72
  },
  {
    label: "editorial headline",
    className: "soft",
    fontFamily: 'Didot, Baskerville, serif',
    html: '<span class="tiny">editorial headline</span><span class="big">Jerry, unfortunately,</span><span class="mega accent">is bad</span>',
    desktopScale: 0.72,
    mobileScale: 0.64
  },
  {
    label: "flash card",
    className: "flashcard",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    html: '<span class="tiny">flash card A</span><span class="big">Q: how is Jerry?</span><span class="mega">BAD</span>',
    desktopScale: 0.78,
    mobileScale: 0.7
  },
  {
    label: "badge wall",
    className: "badgewall",
    fontFamily: '"Avenir Next Condensed", "Arial Narrow", sans-serif',
    html: '<span class="row"><span class="badge">JERRY</span></span><span class="row"><span class="badge">IS</span> <span class="badge accent">BAD</span></span>',
    desktopScale: 0.86,
    mobileScale: 0.74
  },
  {
    label: "summary split",
    className: "split",
    fontFamily: 'Optima, Candara, sans-serif',
    html: '<span class="tiny">summary</span><span class="big">Jerry</span><span class="slash">/</span><span class="mega accent">bad</span>',
    desktopScale: 0.88,
    mobileScale: 0.76
  },
  {
    label: "lights up",
    className: "marquee gradient",
    fontFamily: 'Copperplate, "Arial Black", sans-serif',
    html: '<span class="tiny">LIGHTS UP</span><span class="mega">JERRY IS BAD</span>',
    desktopScale: 0.8,
    mobileScale: 0.7
  },
  {
    label: "console output",
    className: "typewriter",
    fontFamily: 'Menlo, Monaco, monospace',
    html: '<span class="tiny">console output</span><span class="big">result =</span><span class="mega accent">"jerry is bad"</span>',
    desktopScale: 0.72,
    mobileScale: 0.64
  },
  {
    label: "daily bulletin",
    className: "poster",
    fontFamily: '"Avenir Next", "Helvetica Neue", sans-serif',
    html: '<span class="tiny">daily bulletin</span><span class="big accent-2">today\'s fact</span><span class="mega">Jerry is bad</span>',
    desktopScale: 0.8,
    mobileScale: 0.7
  },
  {
    label: "historical record",
    className: "scroll soft",
    fontFamily: 'Baskerville, Georgia, serif',
    html: '<span class="tiny">historical record</span><span class="big">the council agreed</span><span class="mega accent">Jerry is bad</span>',
    desktopScale: 0.74,
    mobileScale: 0.66
  },
  {
    label: "friendly reminder",
    className: "gradient",
    fontFamily: '"Arial Rounded MT Bold", "Trebuchet MS", sans-serif',
    html: '<span class="tiny">friendly reminder</span><span class="big">still true:</span><span class="mega">JERRY IS BAD</span>',
    desktopScale: 0.8,
    mobileScale: 0.7
  },
  {
    label: "court transcript",
    className: "typewriter",
    fontFamily: 'Courier, "Courier New", monospace',
    html: '<span class="tiny">court transcript</span><span class="big">the record shows</span><span class="mega accent">Jerry is bad</span>',
    desktopScale: 0.74,
    mobileScale: 0.66
  },
  {
    label: "weather report",
    className: "soft",
    fontFamily: '"Gill Sans", Arial, sans-serif',
    html: '<span class="tiny">weather report</span><span class="big">cloudy with a chance of</span><span class="mega">Jerry being bad</span>',
    desktopScale: 0.66,
    mobileScale: 0.58
  },
  {
    label: "recipe card",
    className: "flashcard",
    fontFamily: '"Avenir Next", Arial, sans-serif',
    html: '<span class="tiny">recipe card</span><span class="big">ingredients:</span><span class="mega accent-2">1 bad Jerry</span>',
    desktopScale: 0.76,
    mobileScale: 0.68
  },
  {
    label: "public service announcement",
    className: "poster",
    fontFamily: 'Impact, "Arial Black", sans-serif',
    html: '<span class="tiny">public service announcement</span><span class="mega">JERRY</span><span class="big accent">IS VERY BAD</span>',
    desktopScale: 0.76,
    mobileScale: 0.68
  },
  {
    label: "yearbook note",
    className: "whisper",
    fontFamily: '"Comic Sans MS", "Trebuchet MS", sans-serif',
    html: '<span class="tiny">yearbook note</span><span class="big">never change, except</span><span class="mega">stop being bad, Jerry</span>',
    desktopScale: 0.64,
    mobileScale: 0.56
  },
  {
    label: "elevator pitch",
    className: "split",
    fontFamily: 'Futura, "Avenir Next", sans-serif',
    html: '<span class="tiny">elevator pitch</span><span class="big">Jerry:</span><span class="slash">briefly</span><span class="mega accent">bad</span>',
    desktopScale: 0.82,
    mobileScale: 0.72
  },
  {
    label: "tabloid cover",
    className: "gradient poster",
    fontFamily: '"Arial Black", Impact, sans-serif',
    html: '<span class="tiny">tabloid exclusive</span><span class="mega">JERRY</span><span class="big">BAD AGAIN</span>',
    desktopScale: 0.78,
    mobileScale: 0.7
  },
  {
    label: "customer support ticket",
    className: "typewriter",
    fontFamily: 'Menlo, Monaco, monospace',
    html: '<span class="tiny">ticket #404</span><span class="big">issue:</span><span class="mega">Jerry is bad</span>',
    desktopScale: 0.8,
    mobileScale: 0.72
  },
  {
    label: "horoscope",
    className: "soft gradient",
    fontFamily: 'Didot, Georgia, serif',
    html: '<span class="tiny">horoscope</span><span class="big">today reveals</span><span class="mega">Jerry is bad</span>',
    desktopScale: 0.76,
    mobileScale: 0.68
  },
  {
    label: "museum audio guide",
    className: "scroll",
    fontFamily: 'Garamond, Baskerville, serif',
    html: '<span class="tiny">audio guide</span><span class="big">on your left:</span><span class="mega accent">a bad Jerry</span>',
    desktopScale: 0.72,
    mobileScale: 0.64
  },
  {
    label: "crossword clue",
    className: "badgewall",
    fontFamily: '"Arial Narrow", "Avenir Next Condensed", sans-serif',
    html: '<span class="row"><span class="badge">crossword clue</span></span><span class="row"><span class="badge">5 letters:</span> <span class="badge accent">BAD</span></span><span class="row"><span class="badge">owner:</span> <span class="badge">JERRY</span></span>',
    desktopScale: 0.66,
    mobileScale: 0.58
  },
  {
    label: "breaking bulletin",
    className: "marquee",
    fontFamily: 'Verdana, Geneva, sans-serif',
    html: '<span class="tiny">breaking bulletin</span><span class="mega accent-2">JERRY IS BAD NEWS</span>',
    desktopScale: 0.76,
    mobileScale: 0.68
  },
  {
    label: "performance review",
    className: "outlined",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    html: '<span class="tiny">performance review</span><span class="big">overall rating:</span><span class="mega">Jerry: bad</span>',
    desktopScale: 0.74,
    mobileScale: 0.66
  },
  {
    label: "warning label",
    className: "poster",
    fontFamily: 'Tahoma, Geneva, sans-serif',
    html: '<span class="tiny">warning label</span><span class="big">contents may include</span><span class="mega accent">bad Jerry</span>',
    desktopScale: 0.72,
    mobileScale: 0.64
  },
  {
    label: "fortune cookie",
    className: "soft",
    fontFamily: 'Palatino, Georgia, serif',
    html: '<span class="tiny">fortune cookie</span><span class="big">you will soon learn</span><span class="mega">Jerry is bad</span>',
    desktopScale: 0.7,
    mobileScale: 0.62
  },
  {
    label: "subtitles",
    className: "verdict",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    html: '<span class="tiny">[dramatic music]</span><span class="mega">JERRY IS BAD.</span>',
    desktopScale: 0.82,
    mobileScale: 0.72
  },
  {
    label: "neon sign",
    className: "glitch gradient",
    fontFamily: '"Arial Rounded MT Bold", Arial, sans-serif',
    html: '<span class="tiny">open late</span><span class="mega">JERRY IS BAD</span>',
    desktopScale: 0.82,
    mobileScale: 0.72
  },
  {
    label: "office memo",
    className: "typewriter",
    fontFamily: '"American Typewriter", Georgia, serif',
    html: '<span class="tiny">office memo</span><span class="big">re: current situation</span><span class="mega accent">Jerry is bad</span>',
    desktopScale: 0.68,
    mobileScale: 0.6
  },
  {
    label: "chant",
    className: "poster",
    fontFamily: '"Arial Black", Impact, sans-serif',
    html: '<span class="tiny">crowd chant</span><span class="big">JERRY!</span><span class="big">IS!</span><span class="mega">BAD!</span>',
    desktopScale: 0.8,
    mobileScale: 0.7
  },
  {
    label: "classified ad",
    className: "scroll soft",
    fontFamily: '"Times New Roman", Georgia, serif',
    html: '<span class="tiny">classified ad</span><span class="big">for sale:</span><span class="mega">one bad Jerry</span>',
    desktopScale: 0.74,
    mobileScale: 0.66
  },
  {
    label: "auction paddle",
    className: "flashcard",
    fontFamily: '"Futura", "Avenir Next", sans-serif',
    html: '<span class="tiny">auction result</span><span class="big">lot 17:</span><span class="mega accent-2">bad Jerry</span>',
    desktopScale: 0.76,
    mobileScale: 0.68
  },
  {
    label: "airport announcement",
    className: "whisper",
    fontFamily: 'Optima, Candara, sans-serif',
    html: '<span class="tiny">airport announcement</span><span class="big">final call for</span><span class="mega">Jerry, who is bad</span>',
    desktopScale: 0.68,
    mobileScale: 0.6
  }
];

let lastIndex = -1;
let currentStyle = styles[0];

function pickRandomIndex(length) {
  if (length < 2) return 0;

  let next = Math.floor(Math.random() * length);
  while (next === lastIndex) {
    next = Math.floor(Math.random() * length);
  }

  lastIndex = next;
  return next;
}

function applyPalette() {
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const root = document.documentElement;

  root.style.setProperty("--bg", palette.bg);
  root.style.setProperty("--fg", palette.fg);
  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--accent-2", palette.accent2);
  root.style.setProperty("--button-bg", palette.button);
}

function getSafetyScale() {
  const isCompact = window.innerWidth <= 1024 || window.innerHeight <= 820;
  const isNarrow = window.innerWidth <= 820;

  const widthRatio = isNarrow ? 0.86 : isCompact ? 0.89 : 0.91;
  const heightRatio = isNarrow ? 0.72 : isCompact ? 0.77 : 0.82;
  const variantScale = isCompact ? currentStyle.mobileScale : currentStyle.desktopScale;

  return { widthRatio, heightRatio, variantScale };
}

function fitMessage() {
  const { widthRatio, heightRatio, variantScale } = getSafetyScale();
  const availableWidth = frameEl.clientWidth * widthRatio;
  const availableHeight = frameEl.clientHeight * heightRatio;
  const boost = 1.5;

  let min = 16;
  let max = Math.max(120, Math.min(window.innerWidth, window.innerHeight) * 1.4);
  let best = min;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    messageEl.style.fontSize = `${mid}px`;

    const rect = messageEl.getBoundingClientRect();
    if (rect.width <= availableWidth && rect.height <= availableHeight) {
      best = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  let finalSize = Math.floor(best * variantScale * boost);
  messageEl.style.fontSize = `${finalSize}px`;

  let rect = messageEl.getBoundingClientRect();
  while (
    finalSize > 16 &&
    (rect.width > availableWidth || rect.height > availableHeight)
  ) {
    finalSize -= 1;
    messageEl.style.fontSize = `${finalSize}px`;
    rect = messageEl.getBoundingClientRect();
  }

  const report = [
    `style=${currentStyle.label}`,
    `font=${finalSize}px`,
    `width=${Math.round(rect.width)}/${Math.round(availableWidth)}`,
    `height=${Math.round(rect.height)}/${Math.round(availableHeight)}`,
    `viewport=${window.innerWidth}x${window.innerHeight}`
  ].join(" | ");

  messageEl.setAttribute("data-fit-report", report);
  messageEl.setAttribute("data-style-label", currentStyle.label);
  messageEl.setAttribute(
    "data-fit-target",
    window.innerWidth <= 1024 || window.innerHeight <= 820 ? "compact" : "desktop"
  );
}

function renderRandomStyle() {
  currentStyle = styles[pickRandomIndex(styles.length)];
  messageEl.className = `message ${currentStyle.className}`.trim();
  messageEl.style.fontFamily = currentStyle.fontFamily;
  messageEl.innerHTML = currentStyle.html;
  applyPalette();

  requestAnimationFrame(() => {
    fitMessage();
  });
}

function updateFullscreenButton() {
  const isFullscreen = Boolean(document.fullscreenElement || simulatedFullscreen);
  fullscreenButton.textContent = isFullscreen ? "Exit Full Screen" : "Full Screen";
  fullscreenButton.setAttribute("aria-pressed", String(isFullscreen));
  document.body.classList.toggle("simulated-fullscreen", simulatedFullscreen);
  document.body.setAttribute("data-fullscreen-mode", simulatedFullscreen ? "simulated" : document.fullscreenElement ? "native" : "off");
}

function isTypingTarget() {
  const activeTag = document.activeElement?.tagName;
  return (
    activeTag === "INPUT" ||
    activeTag === "TEXTAREA" ||
    document.activeElement?.isContentEditable
  );
}

function isShortcutKey(key) {
  return key === " " || key === "Enter";
}

async function toggleFullscreen() {
  if (document.fullscreenElement) {
    simulatedFullscreen = false;
    await document.exitFullscreen();
    return;
  }

  if (simulatedFullscreen) {
    simulatedFullscreen = false;
    updateFullscreenButton();
    fitMessage();
    return;
  }

  try {
    if (document.fullscreenEnabled) {
      await document.documentElement.requestFullscreen();
      simulatedFullscreen = false;
    } else {
      simulatedFullscreen = true;
    }
  } catch (error) {
    simulatedFullscreen = true;
  }

  updateFullscreenButton();
  fitMessage();
}

function handleKeyboardShortcut(event) {
  if (isTypingTarget() || event.repeat) return;

  if (isShortcutKey(event.key) || event.key.toLowerCase() === "f") {
    event.preventDefault();
  }
}

function handleKeyboardShortcutUp(event) {
  if (isTypingTarget() || event.repeat) return;

  if (isShortcutKey(event.key)) {
    event.preventDefault();
    renderRandomStyle();
  }

  if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFullscreen();
  }
}

fullscreenButton.addEventListener("click", async () => {
  await toggleFullscreen();
});
fullscreenButton.addEventListener("keydown", async (event) => {
  if (isShortcutKey(event.key)) {
    event.preventDefault();
  }
});
fullscreenButton.addEventListener("keyup", async (event) => {
  if (isShortcutKey(event.key)) {
    event.preventDefault();
    event.stopPropagation();
    await toggleFullscreen();
  }
});
document.addEventListener("keydown", handleKeyboardShortcut);
document.addEventListener("keyup", handleKeyboardShortcutUp);
document.addEventListener("fullscreenchange", () => {
  simulatedFullscreen = false;
  updateFullscreenButton();
  fitMessage();
});
window.addEventListener("resize", fitMessage);
window.addEventListener("load", () => {
  updateFullscreenButton();
  renderRandomStyle();
  stageEl.focus({ preventScroll: true });
});

stageEl.addEventListener("click", (event) => {
  if (event.target === fullscreenButton) return;
  stageEl.focus({ preventScroll: true });
  renderRandomStyle();
});
