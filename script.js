(() => {
  // ====== Global config: update these values when needed ======
  const CONFIG = {
    display: {
      width: 1280,
      height: 800,
    },

    // Set to true only while tuning button hit areas.
    debugShowHotspots: false,

    // All image screens. "num" is the image number used in progress rules.
    screens: [
      { id: "img0", num: 0, image: "image/0.webp" },
      { id: "img1", num: 1, image: "image/1.webp" },
      { id: "img2", num: 2, image: "image/2.webp" },
      { id: "img3", num: 3, image: "image/3.webp" },
      { id: "img4", num: 4, image: "image/4.webp" },
      { id: "img5", num: 5, image: "image/5.webp" },
      { id: "img6", num: 6, image: "image/6.webp" },
      { id: "img7", num: 7, image: "image/7.webp" },
      { id: "img8", num: 8, image: "image/8.webp" },
      { id: "img9", num: 9, image: "image/9.webp" },
      { id: "img11", num: 11, image: "image/11.webp" },
      { id: "img12", num: 12, image: "image/12.webp" },
    ],

    // Button hit areas in stage coordinates (px).
    // Each button directly opens the image with the same number.
    buttons: {
      img0: { target: "img0", x: 80, y: 280, w: 200, h: 40 },
      img1: { target: "img1", x: 80, y: 330, w: 200, h: 40 },
      img2: { target: "img2", x: 80, y: 380, w: 200, h: 40 },
      img3: { target: "img3", x: 80, y: 430, w: 200, h: 40 },
      img4: { target: "img4", x: 80, y: 480, w: 200, h: 40 },
      img5: { target: "img5", x: 80, y: 530, w: 200, h: 40 },
      img6: { target: "img6", x: 80, y: 580, w: 200, h: 40 },
      img7: { target: "img7", x: 80, y: 630, w: 200, h: 40 },
      img8: { target: "img8", x: 80, y: 680, w: 200, h: 40 },
      img9: { target: "img9", x: 80, y: 680, w: 200, h: 40 },
      img11: { target: "img11", x: 320, y: 80, w: 120, h: 120 },
      img12: { target: "img12", x: 460, y: 80, w: 120, h: 120 },
    },

    // Optional per-screen button list.
    // If omitted for a screen, all buttons are treated as candidates.
    screenButtons: {},

    // Optional per-screen button position override.
    // Example:
    // img3: {
    //   img11: { x: 500, y: 200, w: 250, h: 160 }
    // }
    screenButtonOverrides: {},

    // Progress -> visible image numbers.
    // A button is active when its target image is included here.
    progress: [
      { level: 1, startImage: 0, visibleImages: [0, 1] },
      { level: 2, startImage: 0, visibleImages: [0, 1, 2, 11] },
      { level: 3, startImage: 0, visibleImages: [0, 1, 2, 3, 11] },
      { level: 4, startImage: 0, visibleImages: [0, 1, 2, 3, 4, 11] },
      { level: 5, startImage: 0, visibleImages: [0, 1, 2, 3, 4, 5, 11, 12] },
      { level: 6, startImage: 0, visibleImages: [0, 1, 2, 3, 4, 5, 6, 11, 12] },
      { level: 7, startImage: 0, visibleImages: [0, 1, 2, 3, 4, 5, 6, 7, 11, 12] },
      { level: 8, startImage: 0, visibleImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12] },
      { level: 9, startImage: 0, visibleImages: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 12] },
    ],
  };

  const stageShell = document.getElementById("stage-shell");
  const stage = document.getElementById("stage");
  const imageEl = document.getElementById("screen-image");
  const hotspotLayer = document.getElementById("hotspot-layer");

  const screenMap = Object.fromEntries(CONFIG.screens.map((screen) => [screen.id, screen]));
  const imageToScreenId = new Map(CONFIG.screens.map((screen) => [screen.num, screen.id]));
  const progressMap = new Map(CONFIG.progress.map((rule) => [rule.level, rule]));
  const buttonIds = Object.keys(CONFIG.buttons);
  const hotspotElements = new Map();

  let currentProgress = CONFIG.progress[0].level;
  let currentScreen = imageToScreenId.get(CONFIG.progress[0].startImage) || CONFIG.screens[0].id;

  if (CONFIG.debugShowHotspots) {
    document.body.classList.add("debug-hotspots");
  }

  function setStageSizeCssVars() {
    document.documentElement.style.setProperty("--stage-width", String(CONFIG.display.width));
    document.documentElement.style.setProperty("--stage-height", String(CONFIG.display.height));
  }

  function updateStageScale() {
    const { width, height } = CONFIG.display;
    const scale = Math.min(window.innerWidth / width, window.innerHeight / height);
    stageShell.style.width = `${Math.floor(width * scale)}px`;
    stageShell.style.height = `${Math.floor(height * scale)}px`;
    stage.style.transform = `scale(${scale})`;
  }

  function getProgressRule() {
    return progressMap.get(currentProgress) || CONFIG.progress[0];
  }

  function getAllowedScreenSet(progressRule) {
    const ids = (progressRule.visibleImages || [])
      .map((imageNo) => imageToScreenId.get(imageNo))
      .filter(Boolean);
    return new Set(ids);
  }

  function getStartScreen(progressRule) {
    const candidate = imageToScreenId.get(progressRule.startImage);
    if (candidate) {
      return candidate;
    }

    const firstAllowed = progressRule.visibleImages?.[0];
    return imageToScreenId.get(firstAllowed) || CONFIG.screens[0].id;
  }

  function getButtonRect(buttonId, screenId) {
    const base = CONFIG.buttons[buttonId];
    const override = CONFIG.screenButtonOverrides?.[screenId]?.[buttonId];
    return override || base;
  }

  function getScreenButtonIds(screenId) {
    return CONFIG.screenButtons[screenId] || buttonIds;
  }

  function ensureHotspots() {
    buttonIds.forEach((buttonId) => {
      if (hotspotElements.has(buttonId)) {
        return;
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "hotspot";
      button.dataset.buttonId = buttonId;
      button.setAttribute("aria-label", buttonId);
      button.addEventListener("click", () => handleButtonClick(buttonId));

      hotspotLayer.appendChild(button);
      hotspotElements.set(buttonId, button);
    });
  }

  function getButtonTarget(buttonId) {
    return CONFIG.buttons[buttonId]?.target;
  }

  function canActivateButton(buttonId) {
    const progressRule = getProgressRule();
    const allowedScreens = getAllowedScreenSet(progressRule);
    const screenButtons = new Set(getScreenButtonIds(currentScreen));
    const targetScreen = getButtonTarget(buttonId);

    if (!allowedScreens.has(currentScreen)) {
      return false;
    }

    if (!screenButtons.has(buttonId)) {
      return false;
    }

    if (!targetScreen || !screenMap[targetScreen]) {
      return false;
    }

    return allowedScreens.has(targetScreen);
  }

  function renderHotspots() {
    hotspotElements.forEach((el, buttonId) => {
      const rect = getButtonRect(buttonId, currentScreen);
      if (!rect) {
        el.classList.remove("is-active");
        el.disabled = true;
        return;
      }

      el.style.left = `${rect.x}px`;
      el.style.top = `${rect.y}px`;
      el.style.width = `${rect.w}px`;
      el.style.height = `${rect.h}px`;

      const isActive = canActivateButton(buttonId);
      el.classList.toggle("is-active", isActive);
      el.disabled = !isActive;
    });
  }

  function renderScreen() {
    const progressRule = getProgressRule();
    const allowedScreens = getAllowedScreenSet(progressRule);

    if (!allowedScreens.has(currentScreen)) {
      currentScreen = getStartScreen(progressRule);
    }

    const screen = screenMap[currentScreen];
    if (!screen) {
      return;
    }

    imageEl.src = screen.image;
    renderHotspots();
  }

  function showScreen(screenId) {
    if (!screenMap[screenId]) {
      return;
    }

    currentScreen = screenId;
    renderScreen();
  }

  function showImage(imageNo) {
    const screenId = imageToScreenId.get(imageNo);
    if (!screenId) {
      return;
    }

    showScreen(screenId);
  }

  function handleButtonClick(buttonId) {
    if (!canActivateButton(buttonId)) {
      return;
    }

    const targetScreen = getButtonTarget(buttonId);
    if (!targetScreen) {
      return;
    }

    showScreen(targetScreen);
  }

  function setProgress(level, resetScreen = true) {
    const next = Number(level);
    if (!Number.isInteger(next) || !progressMap.has(next)) {
      return;
    }

    currentProgress = next;
    const progressRule = getProgressRule();
    const allowedScreens = getAllowedScreenSet(progressRule);

    if (resetScreen) {
      currentScreen = getStartScreen(progressRule);
    } else if (!allowedScreens.has(currentScreen)) {
      currentScreen = getStartScreen(progressRule);
    }

    renderScreen();
  }

  function preloadImages() {
    CONFIG.screens.forEach((screen) => {
      const img = new Image();
      img.src = screen.image;
    });
  }

  function setupKeyboardForDevOnly() {
    window.addEventListener("keydown", (event) => {
      if (event.key >= "1" && event.key <= "9") {
        const requested = Number(event.key);
        if (progressMap.has(requested)) {
          setProgress(requested, true);
        }
      }
    });
  }

  function init() {
    setStageSizeCssVars();
    ensureHotspots();
    preloadImages();
    setProgress(CONFIG.progress[0].level, true);
    updateStageScale();
    setupKeyboardForDevOnly();

    window.addEventListener("resize", updateStageScale);

    window.tabletApp = {
      setProgress,
      showImage,
      getState: () => ({ currentScreen, currentProgress }),
      config: CONFIG,
    };
  }

  init();
})();
