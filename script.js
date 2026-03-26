(() => {
  const CONFIG = {
    display: {
      width: 1280,
      height: 800,
    },

    debugShowHotspots: false,

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

    sceneScreens: {
      scene2: {},
      scene3: {
        defaultView: "scene3_300",
        views: {
          scene3_300: { image: "image/300.webp" },
          scene3_301: { image: "image/301.webp" },
        },
      },
    },

    buttons: {
      button100: { targetScene: "scene1", x: 70, y: 100, w: 400, h: 80 },
      button101: { targetScene: "scene2", x: 460, y: 100, w: 400, h: 80 },
      button102: { targetScene: "scene3", x: 850, y: 100, w: 400, h: 80 },
      button300: { targetScene3View: "scene3_300", x: 70, y: 290, w: 200, h: 200 },
      button301: { targetScene3View: "scene3_301", x: 70, y: 500, w: 200, h: 200 },
      progressPrev: { x: 0, y: 0, w: 140, h: 110 },
      progressNext: { x: 1140, y: 0, w: 140, h: 110 },
      img0: { target: "img0", x: 80, y: 280, w: 200, h: 40 },
      img1: { target: "img1", x: 80, y: 333, w: 200, h: 40 },
      img2: { target: "img2", x: 80, y: 386, w: 200, h: 40 },
      img3: { target: "img3", x: 80, y: 439, w: 200, h: 40 },
      img4: { target: "img4", x: 80, y: 492, w: 200, h: 40 },
      img5: { target: "img5", x: 80, y: 545, w: 200, h: 40 },
      img6: { target: "img6", x: 80, y: 598, w: 200, h: 40 },
      img7: { target: "img7", x: 80, y: 651, w: 200, h: 40 },
      img8: { target: "img8", x: 80, y: 704, w: 200, h: 40 },
      img9: { target: "img9", x: 80, y: 757, w: 200, h: 40 },
      img11: { target: "img11", x: 320, y: 80, w: 120, h: 120 },
      img12: { target: "img12", x: 460, y: 80, w: 120, h: 120 },
    },

    screenButtons: {},
    screenButtonOverrides: {},

    progress: [
      { level: 1, focusImage: 1, visibleImages: [0, 1, 100] },
      { level: 2, focusImage: 2, visibleImages: [0, 1, 2, 100, 101] },
      { level: 3, focusImage: 3, visibleImages: [0, 1, 2, 3, 100, 101] },
      { level: 4, focusImage: 4, visibleImages: [0, 1, 2, 3, 4, 100, 101] },
      { level: 5, focusImage: 5, visibleImages: [0, 1, 2, 3, 4, 5, 100, 101, 102] },
      { level: 6, focusImage: 6, visibleImages: [0, 1, 2, 3, 4, 5, 6, 100, 101, 102] },
      { level: 7, focusImage: 7, visibleImages: [0, 1, 2, 3, 4, 5, 6, 7, 100, 101, 102] },
      { level: 8, focusImage: 8, visibleImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 100, 101, 102] },
      { level: 9, focusImage: 9, visibleImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 101, 102] },
    ],
  };

  const SEARCH_INDEX = {
  ハンペン: [
    {
      label: "はんぺん 小部屋A",
      detail: `場所:level1の小部屋Aの皿の上
大きさ:10cm
重さ:300g`,
    },
  ],
  ハシ: [
    {
      label: "箸 小部屋B",
      detail: `場所:level2の小部屋Bの箱の中
大きさ:15cm
重さ:100g`,
    },
    {
      label: "箸 小部屋B",
      detail: `場所:level2の小部屋Bの箱の中
大きさ:15cm
重さ:100g`,
    },
  ],
  クシ: [
    {
      label: "串 小部屋B",
      detail: `場所:level3の小部屋B
大きさ:15cm
重さ:100g`,
    },
    {
      label: "櫛 小部屋B",
      detail: `場所:level3の小部屋B
大きさ:15cm
重さ:100g`,
    },
  ],
  ヒヨコ: [
    {
      label: "ひよこ 小部屋C",
      detail: `場所:level4の小部屋C
大きさ:5cm
重さ:300g`,
    },
  ],
  ペン: [
    {
      label: "ぺん 小部屋A",
      detail: `場所:level1の小部屋A
大きさ:30cm
重さ:300g`,
    },
  ],
  キンカ: [
    {
      label: "キンカ 小部屋B",
      detail: `場所:level2の小部屋Bの机の下
大きさ:30cm
重さ:300g`,
    },
  ],
  サラ: [
    {
      label: "皿 小部屋A",
      detail: `場所:level1の小部屋A
大きさ:25cm
重さ:300g`,
    },
    {
      label: "皿 ホール",
      detail: `場所:level1のホール　台座
大きさ:25cm
重さ:300g`,
    },
  ],
  イス: [
    {
      label: "イス ホール",
      detail: `場所:level0のホールの机周り
大きさ:40cm
重さ:500g`,
    },
    {
      label: "イス ホール",
      detail: `場所:level0のホールの机周り
大きさ:40cm
重さ:500g`,
    },
    {
      label: "イス ホール",
      detail: `場所:level0のホールの机周り
大きさ:40cm
重さ:500g`,
    },
    {
      label: "イス ホール",
      detail: `場所:level0のホールの机周り
大きさ:40cm
重さ:500g`,
    },
    {
      label: "イス 小部屋C",
      detail: `場所:level0の小部屋Dの中央
大きさ:40cm
重さ:500g`,
    },
    {
      label: "コレイジョウケンサクデキマセン",
      detail: `コレイジョウケンサクデキマセン`,
    },
  ],
};

  const stageShell = document.getElementById("stage-shell");
  const stage = document.getElementById("stage");
  const imageEl = document.getElementById("screen-image");
  const fullscreenToggle = document.getElementById("fullscreen-toggle");
  const scene2Ui = document.getElementById("scene2-ui");
  const scene2CloseButton = document.getElementById("scene2-close-button");
  const scene2SearchForm = document.getElementById("scene2-search-form");
  const scene2SearchInput = document.getElementById("scene2-search-input");
  const scene2ResultsBody = document.getElementById("scene2-results-body");
  const scene2Keyboard = document.getElementById("scene2-keyboard");
  const scene2DetailModal = document.getElementById("scene2-detail-modal");
  const scene2DetailBody = document.getElementById("scene2-detail-body");
  const scene2DetailClose = document.getElementById("scene2-detail-close");
  const hotspotLayer = document.getElementById("hotspot-layer");

  const screenMap = Object.fromEntries(CONFIG.screens.map((screen) => [screen.id, screen]));
  const imageToScreenId = new Map(CONFIG.screens.map((screen) => [screen.num, screen.id]));
  const progressMap = new Map(CONFIG.progress.map((rule) => [rule.level, rule]));
  const buttonIds = Object.keys(CONFIG.buttons);
  const hotspotElements = new Map();

  let currentScene = "scene1";
  let currentScene3View = CONFIG.sceneScreens.scene3.defaultView;
  let currentProgress = CONFIG.progress[0].level;
  let currentScreen = imageToScreenId.get(CONFIG.progress[0].focusImage) || CONFIG.screens[0].id;
  let isScene2Composing = false;
  let scene2SelectionStart = 0;
  let scene2SelectionEnd = 0;
  let isScene2KeyboardCollapsed = false;

  const SCENE2_KEYBOARD_LAYOUT = [
    [
      { action: "clear", label: "CLEAR" },
      "\u30EF",
      "\u30E9",
      "\u30E4",
      "\u30DE",
      "\u30CF",
      "\u30CA",
      "\u30BF",
      "\u30B5",
      "\u30AB",
      "\u30A2",
    ],
    [{ action: "delete", label: "DEL" }, "\u30FC", "\u30EA", null, "\u30DF", "\u30D2", "\u30CB", "\u30C1", "\u30B7", "\u30AD", "\u30A4"],
    [{ action: "dakuten", label: "\u309B" }, "\u30F2", "\u30EB", "\u30E6", "\u30E0", "\u30D5", "\u30CC", "\u30C4", "\u30B9", "\u30AF", "\u30A6"],
    [{ action: "handakuten", label: "\u309C" }, "\u30F3", "\u30EC", null, "\u30E1", "\u30D8", "\u30CD", "\u30C6", "\u30BB", "\u30B1", "\u30A8"],
    [{ action: "small", label: "\u5C0F" }, null, "\u30ED", "\u30E8", "\u30E2", "\u30DB", "\u30CE", "\u30C8", "\u30BD", "\u30B3", "\u30AA"],
  ];

  const SCENE2_DAKUTEN_MAP = {
    "\u30A6": "\u30F4",
    "\u30AB": "\u30AC",
    "\u30AD": "\u30AE",
    "\u30AF": "\u30B0",
    "\u30B1": "\u30B2",
    "\u30B3": "\u30B4",
    "\u30B5": "\u30B6",
    "\u30B7": "\u30B8",
    "\u30B9": "\u30BA",
    "\u30BB": "\u30BC",
    "\u30BD": "\u30BE",
    "\u30BF": "\u30C0",
    "\u30C1": "\u30C2",
    "\u30C4": "\u30C5",
    "\u30C6": "\u30C7",
    "\u30C8": "\u30C9",
    "\u30CF": "\u30D0",
    "\u30D2": "\u30D3",
    "\u30D5": "\u30D6",
    "\u30D8": "\u30D9",
    "\u30DB": "\u30DC",
  };

  const SCENE2_HANDAKUTEN_MAP = {
    "\u30CF": "\u30D1",
    "\u30D2": "\u30D4",
    "\u30D5": "\u30D7",
    "\u30D8": "\u30DA",
    "\u30DB": "\u30DD",
  };

  const SCENE2_SMALL_MAP = {
    "\u30A2": "\u30A1",
    "\u30A4": "\u30A3",
    "\u30A6": "\u30A5",
    "\u30A8": "\u30A7",
    "\u30AA": "\u30A9",
    "\u30C4": "\u30C3",
    "\u30E4": "\u30E3",
    "\u30E6": "\u30E5",
    "\u30E8": "\u30E7",
    "\u30EF": "\u30EE",
    "\u30AB": "\u30F5",
    "\u30B1": "\u30F6",
  };

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

  function setScene2Active(isActive) {
    document.body.classList.toggle("scene2-active", isActive);
    scene2Ui.hidden = !isActive;
    if (!isActive) {
      setScene2KeyboardCollapsed(false);
      closeScene2Detail();
      scene2SearchInput.blur();
      return;
    }

    if (!document.body.classList.contains("scene2-keyboard-enabled")) {
      return;
    }

    requestAnimationFrame(() => {
      scene2SearchInput.focus({ preventScroll: true });
      syncScene2Selection();
    });
  }

  function renderScene2Results(query = "") {
    const normalizedQuery = query.trim();

    scene2ResultsBody.replaceChildren();

    if (!normalizedQuery) {
      setScene2KeyboardCollapsed(false);
      const resultText = document.createElement("p");
      resultText.textContent = "\u691c\u7d22\u7d50\u679c\u306f\u672a\u8a2d\u5b9a\u3067\u3059\u3002";
      scene2ResultsBody.appendChild(resultText);
      return;
    }

    const results = SEARCH_INDEX[normalizedQuery];
    if (!results || results.length === 0) {
      setScene2KeyboardCollapsed(false);
      const resultText = document.createElement("p");
      resultText.textContent = `\u300c${normalizedQuery}\u300d\u306e\u691c\u7d22\u7d50\u679c\u306f\u3042\u308a\u307e\u305b\u3093\u3002`;
      scene2ResultsBody.appendChild(resultText);
      return;
    }

    setScene2KeyboardCollapsed(true);

    const list = document.createElement("div");
    list.className = "scene2-result-list";

    results.forEach((result) => {
      if (result.type === "more") {
        const more = document.createElement("p");
        more.className = "scene2-result-more";
        more.textContent = result.label;
        list.appendChild(more);
        return;
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "scene2-result-item";
      button.textContent = result.label;
      button.addEventListener("click", () => {
        openScene2Detail(result.detail);
      });
      list.appendChild(button);
    });

    scene2ResultsBody.appendChild(list);
  }

  function openScene2Detail(detailText) {
    const detail = document.createElement("p");
    detail.textContent = detailText;
    scene2DetailBody.replaceChildren(detail);
    scene2DetailModal.classList.add("is-open");
    scene2DetailModal.setAttribute("aria-hidden", "false");
  }

  function closeScene2Detail() {
    scene2DetailBody.replaceChildren();
    scene2DetailModal.classList.remove("is-open");
    scene2DetailModal.setAttribute("aria-hidden", "true");
  }

  function updateFullscreenButtonLabel() {
    const isFullscreen = Boolean(document.fullscreenElement);
    const label = isFullscreen ? "フルスクリーン終了" : "フルスクリーン切替";
    fullscreenToggle.setAttribute("aria-label", label);
    fullscreenToggle.title = label;
  }

  async function toggleFullscreen() {
    if (!document.fullscreenEnabled) {
      return;
    }

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.error("Failed to toggle fullscreen.", error);
    }
  }

  function toKatakana(value) {
    return value.replace(/[\u3041-\u3096]/g, (char) =>
      String.fromCharCode(char.charCodeAt(0) + 0x60)
    );
  }

  function normalizeScene2Input() {
    const converted = toKatakana(scene2SearchInput.value)
      .replace(/\s+/g, "")
      .replace(/[^\u30A1-\u30FA\u30FC\u30FD\u30FE]/g, "");
    if (scene2SearchInput.value !== converted) {
      const caret = scene2SearchInput.selectionStart ?? converted.length;
      scene2SearchInput.value = converted;
      scene2SearchInput.setSelectionRange(caret, caret);
    }
  }

  function syncScene2Selection() {
    scene2SelectionStart = scene2SearchInput.selectionStart ?? scene2SearchInput.value.length;
    scene2SelectionEnd = scene2SearchInput.selectionEnd ?? scene2SelectionStart;
  }

  function focusScene2SearchInput() {
    scene2SearchInput.focus({ preventScroll: true });
    scene2SearchInput.setSelectionRange(scene2SelectionStart, scene2SelectionEnd);
  }

  function insertScene2Text(value) {
    focusScene2SearchInput();
    scene2SearchInput.setRangeText(value, scene2SelectionStart, scene2SelectionEnd, "end");
    normalizeScene2Input();
    syncScene2Selection();
  }

  function transformScene2Text(transformMap) {
    let replaceStart = scene2SelectionStart;
    let replaceEnd = scene2SelectionEnd;

    if (replaceStart === replaceEnd) {
      replaceStart = Math.max(0, replaceStart - 1);
    }

    if (replaceStart === replaceEnd || replaceEnd - replaceStart !== 1) {
      return;
    }

    const source = scene2SearchInput.value.slice(replaceStart, replaceEnd);
    const transformed = transformMap[source];
    if (!transformed) {
      return;
    }

    focusScene2SearchInput();
    scene2SearchInput.setRangeText(transformed, replaceStart, replaceEnd, "end");
    normalizeScene2Input();
    syncScene2Selection();
  }

  function deleteScene2TextBackward() {
    const hasSelection = scene2SelectionStart !== scene2SelectionEnd;
    const deleteStart = hasSelection
      ? scene2SelectionStart
      : Math.max(0, scene2SelectionStart - 1);
    const deleteEnd = scene2SelectionEnd;
    if (deleteStart === deleteEnd) {
      return;
    }

    focusScene2SearchInput();
    scene2SearchInput.setRangeText("", deleteStart, deleteEnd, "end");
    normalizeScene2Input();
    syncScene2Selection();
  }

  function clearScene2Input() {
    scene2SearchInput.value = "";
    scene2SelectionStart = 0;
    scene2SelectionEnd = 0;
    focusScene2SearchInput();
  }

  function submitScene2Search() {
    closeScene2Detail();
    renderScene2Results(scene2SearchInput.value);
  }

  function shouldEnableScene2Keyboard() {
    const isWideViewport = window.matchMedia("(min-width: 900px)").matches;
    const isTouchOnly = window.matchMedia("(pointer: coarse)").matches
      && !window.matchMedia("(any-pointer: fine)").matches;
    return isWideViewport && !isTouchOnly;
  }

  function updateScene2KeyboardVisibility() {
    const isEnabled = shouldEnableScene2Keyboard();
    const isVisible = isEnabled && !isScene2KeyboardCollapsed;
    document.body.classList.toggle("scene2-keyboard-enabled", isEnabled);
    document.body.classList.toggle("scene2-keyboard-visible", isVisible);
    scene2Keyboard.hidden = !isVisible;
    scene2Keyboard.setAttribute("aria-hidden", String(!isVisible));
  }

  function setScene2KeyboardCollapsed(isCollapsed) {
    if (isScene2KeyboardCollapsed === isCollapsed) {
      return;
    }

    isScene2KeyboardCollapsed = isCollapsed;
    updateScene2KeyboardVisibility();
  }

  function handleScene2KeyboardPress(key) {
    if (typeof key === "string") {
      insertScene2Text(key);
      return;
    }

    if (key.action === "delete") {
      deleteScene2TextBackward();
      return;
    }

    if (key.action === "clear") {
      clearScene2Input();
      return;
    }

    if (key.action === "dakuten") {
      transformScene2Text(SCENE2_DAKUTEN_MAP);
      return;
    }

    if (key.action === "handakuten") {
      transformScene2Text(SCENE2_HANDAKUTEN_MAP);
      return;
    }

    if (key.action === "small") {
      transformScene2Text(SCENE2_SMALL_MAP);
      return;
    }

    if (key.action === "submit") {
      submitScene2Search();
    }
  }

  function createScene2Keyboard() {
    const fragment = document.createDocumentFragment();

    SCENE2_KEYBOARD_LAYOUT.forEach((row) => {
      row.forEach((key) => {
        if (!key) {
          const spacer = document.createElement("div");
          spacer.className = "scene2-keyboard-spacer";
          spacer.setAttribute("aria-hidden", "true");
          fragment.appendChild(spacer);
          return;
        }

        const button = document.createElement("button");
        button.type = "button";
        button.className = "scene2-keyboard-key";
        button.textContent = typeof key === "string" ? key : key.label;
        if (typeof key !== "string") {
          button.dataset.action = key.action;
        }
        button.addEventListener("pointerdown", (event) => {
          event.preventDefault();
        });
        button.addEventListener("click", () => {
          handleScene2KeyboardPress(key);
        });
        fragment.appendChild(button);
      });
    });

    scene2Keyboard.replaceChildren(fragment);
  }

  function getAllowedScreenSet(progressRule) {
    const ids = (progressRule.visibleImages || [])
      .map((imageNo) => imageToScreenId.get(imageNo))
      .filter(Boolean);
    return new Set(ids);
  }

  function getStartScreen(progressRule) {
    const candidate = imageToScreenId.get(progressRule.focusImage);
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

  function isNumberButton(buttonId) {
    const match = /^img(\d+)$/.exec(buttonId);
    if (!match) {
      return false;
    }

    const imageNo = Number(match[1]);
    return imageNo >= 0 && imageNo <= 9;
  }

  function ensureHotspots() {
    buttonIds.forEach((buttonId) => {
      if (hotspotElements.has(buttonId)) {
        return;
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "hotspot";
      if (isNumberButton(buttonId)) {
        button.classList.add("number-button");
      }
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

  function getButtonTargetScene(buttonId) {
    return CONFIG.buttons[buttonId]?.targetScene;
  }

  function getButtonTargetScene3View(buttonId) {
    return CONFIG.buttons[buttonId]?.targetScene3View;
  }

  function getSceneButtonCode(buttonId) {
    if (buttonId === "button100") {
      return 100;
    }

    if (buttonId === "button101") {
      return 101;
    }

    if (buttonId === "button102") {
      return 102;
    }

    return null;
  }

  function isScene3ViewAvailable(viewId) {
    return Boolean(CONFIG.sceneScreens.scene3.views[viewId]);
  }

  function canActivateButton(buttonId) {
    const progressRule = getProgressRule();
    const visibleTokens = new Set(progressRule.visibleImages || []);
    const targetScene = getButtonTargetScene(buttonId);

    if (targetScene) {
      if (currentScene === "scene2" && (buttonId === "button100" || buttonId === "button102")) {
        return false;
      }

      const sceneButtonCode = getSceneButtonCode(buttonId);
      return sceneButtonCode !== null && visibleTokens.has(sceneButtonCode);
    }

    const targetScene3View = getButtonTargetScene3View(buttonId);
    if (targetScene3View) {
      if (currentScene !== "scene3" || !isScene3ViewAvailable(targetScene3View)) {
        return false;
      }

      if (buttonId === "button301") {
        return currentProgress >= 7;
      }

      return true;
    }

    if (buttonId === "progressPrev") {
      if (currentScene !== "scene1") {
        return false;
      }
      return currentProgress > CONFIG.progress[0].level;
    }

    if (buttonId === "progressNext") {
      if (currentScene !== "scene1") {
        return false;
      }
      return currentProgress < CONFIG.progress[CONFIG.progress.length - 1].level;
    }

    if (currentScene !== "scene1") {
      return false;
    }

    const allowedScreens = getAllowedScreenSet(progressRule);
    const screenButtons = new Set(getScreenButtonIds(currentScreen));
    const imageTarget = getButtonTarget(buttonId);

    if (!allowedScreens.has(currentScreen)) {
      return false;
    }

    if (!screenButtons.has(buttonId)) {
      return false;
    }

    if (!imageTarget || !screenMap[imageTarget]) {
      return false;
    }

    return allowedScreens.has(imageTarget);
  }

  function renderHotspots() {
    const activeScreenKey = currentScene === "scene1" ? currentScreen : currentScene;

    hotspotElements.forEach((el, buttonId) => {
      const rect = getButtonRect(buttonId, activeScreenKey);
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
    if (currentScene === "scene2") {
      setScene2Active(true);
      renderHotspots();
      return;
    }

    setScene2Active(false);

    if (currentScene === "scene3") {
      const scene3View = CONFIG.sceneScreens.scene3.views[currentScene3View]
        || CONFIG.sceneScreens.scene3.views[CONFIG.sceneScreens.scene3.defaultView];
      imageEl.src = scene3View.image;
      renderHotspots();
      return;
    }

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

    currentScene = "scene1";
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

  function showScene(sceneId) {
    if (sceneId !== "scene1" && sceneId !== "scene2" && sceneId !== "scene3") {
      return;
    }

    currentScene = sceneId;
    if (sceneId === "scene3") {
      currentScene3View = CONFIG.sceneScreens.scene3.defaultView;
    }
    renderScreen();
  }

  function handleButtonClick(buttonId) {
    if (!canActivateButton(buttonId)) {
      return;
    }

    const targetScene = getButtonTargetScene(buttonId);
    if (targetScene) {
      currentScene = targetScene;
      if (targetScene === "scene3") {
        currentScene3View = CONFIG.sceneScreens.scene3.defaultView;
      }
      renderScreen();
      return;
    }

    const targetScene3View = getButtonTargetScene3View(buttonId);
    if (targetScene3View) {
      currentScene3View = targetScene3View;
      renderScreen();
      return;
    }

    if (buttonId === "progressPrev") {
      setProgress(currentProgress - 1, true);
      return;
    }

    if (buttonId === "progressNext") {
      setProgress(currentProgress + 1, true);
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

    currentScene = "scene1";
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

    Object.values(CONFIG.sceneScreens.scene3.views).forEach((screen) => {
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

  function setupScene2Search() {
    ["focus", "click", "keyup", "select"].forEach((eventName) => {
      scene2SearchInput.addEventListener(eventName, syncScene2Selection);
    });

    scene2SearchInput.addEventListener("pointerdown", () => {
      if (isScene2KeyboardCollapsed) {
        setScene2KeyboardCollapsed(false);
      }
    });

    scene2SearchInput.addEventListener("compositionstart", () => {
      isScene2Composing = true;
    });

    scene2SearchInput.addEventListener("compositionend", () => {
      isScene2Composing = false;
      normalizeScene2Input();
      syncScene2Selection();
    });

    scene2SearchInput.addEventListener("input", () => {
      if (!isScene2Composing) {
        normalizeScene2Input();
      }
      syncScene2Selection();
    });

    scene2SearchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      submitScene2Search();
    });

    scene2CloseButton.addEventListener("click", () => {
      showScene("scene1");
    });

    scene2DetailClose.addEventListener("click", () => {
      closeScene2Detail();
    });

    scene2DetailModal.addEventListener("click", (event) => {
      if (event.target === scene2DetailModal) {
        closeScene2Detail();
      }
    });
  }

  function setupFullscreenToggle() {
    if (!document.fullscreenEnabled) {
      fullscreenToggle.hidden = true;
      return;
    }

    updateFullscreenButtonLabel();
    fullscreenToggle.addEventListener("click", () => {
      toggleFullscreen();
    });
    document.addEventListener("fullscreenchange", updateFullscreenButtonLabel);
  }

  function init() {
    setStageSizeCssVars();
    ensureHotspots();
    preloadImages();
    createScene2Keyboard();
    updateScene2KeyboardVisibility();
    setScene2Active(false);
    renderScene2Results("");
    setProgress(CONFIG.progress[0].level, true);
    updateStageScale();
    setupScene2Search();
    setupFullscreenToggle();
    setupKeyboardForDevOnly();

    window.addEventListener("resize", () => {
      updateStageScale();
      updateScene2KeyboardVisibility();
    });

    window.tabletApp = {
      setProgress,
      showImage,
      showScene,
      getState: () => ({ currentScene, currentScene3View, currentScreen, currentProgress }),
      config: CONFIG,
    };
  }

  init();
})();
