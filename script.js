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
        defaultReport: "report_hiyoko",
        reports: {
          report_hiyoko: {
            id: "report_hiyoko",
            title: "ヒヨコについて",
            switchLabel: "01",
            image: "image/300.webp",
            fields: [
              { id: "a_1", type: "kana", x: 560, y: 342, w: 100, h: 38, maxLength: 4, correct: "ヒヨコ" },
              { id: "b_1", type: "kana", x: 780, y: 342, w: 150, h: 38, maxLength: 6, correct: "ハンヒヨコ" },
              { id: "c_1", type: "kana", x: 380, y: 370, w: 122, h: 38, maxLength: 4, correct: "ダイヤ" },
              { id: "a_2", type: "kana", x: 590, y: 372, w: 122, h: 38, maxLength: 4, correct: "ヒヨコ" },
              { id: "d_1", type: "kana", x: 710, y: 470, w: 118, h: 38, maxLength: 4, correct: "ナゾ" },
              { id: "e_1", type: "kana", x: 910, y: 505, w:120, h: 38, maxLength: 3, correct: "コベヤ" },
              { id: "f_1", type: "kana", x: 674, y: 536, w: 120, h: 38, maxLength: 4, correct: "ハンテン" },
              { id: "g_1", type: "kana", x: 813, y: 536, w: 160, h: 38, maxLength: 6, correct: "ハンブッタイ" },
              { id: "c_2", type: "kana", x: 476, y: 565, w: 122, h: 38, maxLength: 4, correct: "ダイヤ" },
              { id: "a_3", type: "kana", x: 650, y: 570, w: 122, h: 38, maxLength: 4, correct: "ヒヨコ" },
              {
                id: "h_1",
                type: "select",
                x: 900,
                y: 570,
                w: 178,
                h: 38,
                placeholder: "選択",
                options: ["している", "していない"],
                correct: "している",
              },
              { id: "g_2", type: "kana", x: 670, y: 670, w: 160, h: 38, maxLength: 6, correct: "ハンブッタイ" },
            ],
          },



          report_transfer: {
            id: "report_transfer",
            title: "空間移動について",
            switchLabel: "02",
            image: "image/301.webp",
            fields: [
              { id: "a_1", type: "kana", x: 499, y: 246, w: 120, h: 38, maxLength: 4, correct: "イス" },
              { id: "a_2", type: "kana", x: 740, y: 246, w: 120, h: 38, maxLength: 4, correct: "イス" },
              { id: "b_1", type: "kana", x: 510, y: 275, w: 120, h: 38, maxLength: 4, correct: "ハンペン" },
              { id: "b_2", type: "kana", x: 763, y: 275, w: 120, h: 38, maxLength: 4, correct: "ハンペン" },
              { id: "c_1", type: "kana", x: 510, y: 305, w: 120, h: 38, maxLength: 4, correct: "ハシ" },
              { id: "c_2", type: "kana", x: 742, y: 305, w: 120, h: 38, maxLength: 4, correct: "ハシ" },
              {
                id: "d_1",
                type: "select",
                x: 571,
                y: 335,
                w: 83,
                h: 38,
                placeholder: "数",
                options: ["1", "2", "3", "4", "5", "6"],
                correct: "1",
              },
              {
                id: "e_1",
                type: "select",
                x: 740,
                y: 335,
                w: 78,
                h: 38,
                placeholder: "数",
                options: ["1", "2", "3", "4", "5", "6"],
                correct: "2",
              },
              { id: "f_1", type: "kana", x: 570, y: 377  , w: 120, h: 38, maxLength: 4, correct: "ヒヨコ" },
              { id: "f_2", type: "kana", x: 460, y: 410  , w: 120, h: 38, maxLength: 4, correct: "ヒヨコ" },
              {
                id: "g_1",
                type: "select",
                x: 906,
                y: 408,
                w: 82,
                h: 38,
                placeholder: "数",
                options: ["0", "1", "2", "3", "4", "5", "6"],
                correct: "3",
              },
              { id: "h_1", type: "kana", x: 755, y:470, w: 135, h: 38, maxLength: 5, fontSize: 20, correct: "ハンヒヨコ" },
              { id: "h_2", type: "kana", x: 345, y:500, w: 135, h: 38, maxLength: 5, fontSize: 20, correct: "ハンヒヨコ" },
              
              {
                id: "i_1",
                type: "select",
                x: 881,
                y: 530,
                w: 105,
                h: 38,
                placeholder: "選択",
                options: ["進む", "戻る"],
                correct: "戻る",
              },
              {
                id: "j_1",
                type: "select",
                x: 710,
                y: 609,
                w: 105,
                h: 38,
                placeholder: "選択",
                options: ["進む", "戻る"],
                correct: "進む",
              },
              {
                id: "i_2",
                type: "select",
                x: 770,
                y: 635,
                w: 105,
                h: 38,
                placeholder: "選択",
                options: ["進む", "戻る"],
                correct: "戻る",
              },
              {
                id: "g_2",
                type: "select",
                x: 460,
                y: 680,
                w: 82,
                h: 38,
                placeholder: "数",
                options: ["1", "2", "3","4", "5"],
                correct: "3",
              },
              {
                id: "k_1",
                type: "select",
                x: 539,
                y: 707,
                w: 97,
                h: 38,
                placeholder: "数",
                options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                correct: "2",
              },
            ],
          },
          report_draft: {
            id: "report_draft",
            title: "空間移動について②",
            switchLabel: "03",
            image: "image/302.webp",
            fields: [
              { id: "a_1", type: "kana", x: 542, y: 286, w: 101, h: 38, maxLength: 6, correct: "" },
              { id: "b_1", type: "kana", x: 850, y: 286, w: 68, h: 38, maxLength: 3, fontSize: 20, characterSet: "number", correct: "" },
              { id: "c_1", type: "kana", x: 1025, y: 286, w: 72, h: 38, maxLength: 3, fontSize: 20, characterSet: "number", correct: "" },
              { id: "d_1", type: "kana", x: 669, y: 375, w: 101, h: 38, maxLength: 6, correct: "" },
              {
                id: "e_1",
                type: "select",
                x: 413,
                y: 434,
                w: 102,
                h: 38,
                options: ["＋", "✕"],
                correct: "",
              },
              { id: "f_1", type: "kana", x: 1012, y: 432, w: 91, h: 38, maxLength: 6, fontSize: 20, correct: "" },
              {
                id: "g_1",
                type: "select",
                x: 413,
                y: 464,
                w: 102,
                h: 38,
                options: ["＋", "✕"],
                correct: "",
              },
              { id: "h_1", type: "kana", x: 1012, y: 463, w: 91, h: 38, maxLength: 6, fontSize: 20, correct: "" },
              { id: "i_1", type: "kana", x: 719, y: 522, w: 100, h: 38, maxLength: 3, fontSize: 20, characterSet: "number", correct: "" },
              { id: "j_1", type: "kana", x: 624, y: 610, w: 118, h: 38, maxLength: 8, correct: "" },
              { id: "i_2", type: "kana", x: 888, y: 610, w: 66, h: 38, maxLength: 3, fontSize: 20, characterSet: "number", correct: "" },
              { id: "k_1", type: "kana", x: 508, y: 640, w: 68, h: 38, maxLength: 3, fontSize: 20, characterSet: "number", correct: "" },
              { id: "k_2", type: "kana", x: 385, y: 669, w: 68, h: 38, maxLength: 3, fontSize: 20, characterSet: "number", correct: "" },
              { id: "i_3", type: "kana", x: 842, y: 669, w: 68, h: 38, maxLength: 3, fontSize: 20, characterSet: "number", correct: "" },
              { id: "l_1", type: "kana", x: 397, y: 699, w: 128, h: 38, maxLength: 8, correct: "" },
            ],
          },
        },
      },
    },

    buttons: {
      button100: { targetScene: "scene1", x: 70, y: 100, w: 400, h: 80 },
      button101: { targetScene: "scene2", x: 460, y: 100, w: 400, h: 80 },
      button102: { targetScene: "scene3", x: 850, y: 100, w: 400, h: 80 },
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
  カナグ: [
    {
      label: "かなぐ 小部屋B",
      detail: `場所:level2の小部屋Cの箱
大きさ:10cm
重さ:100g`,
    },
        {
      label: "かなぐ 小部屋B",
      detail: `場所:level2の小部屋Cの箱
大きさ:10cm
重さ:100g`,
    },
  ],
  ハシ: [
    {
      label: "箸 小部屋C",
      detail: `場所:level2の小部屋Cの箱の中
大きさ:15cm
重さ:100g`,
    },
    {
      label: "箸 小部屋C",
      detail: `場所:level2の小部屋Cの箱の中
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
      detail: `場所:level2の小部屋Cの机の下
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
  const scene2Gate = document.getElementById("scene2-gate");
  const scene2GateForm = document.getElementById("scene2-gate-form");
  const scene2GateInput = document.getElementById("scene2-gate-input");
  const scene2GateButton = document.getElementById("scene2-gate-button");
  const scene2GateFeedback = document.getElementById("scene2-gate-feedback");
  const scene2GateCloseButton = document.getElementById("scene2-gate-close-button");
  const scene2SearchShell = document.getElementById("scene2-search-shell");
  const scene2CloseButton = document.getElementById("scene2-close-button");
  const scene2SearchForm = document.getElementById("scene2-search-form");
  const scene2SearchInput = document.getElementById("scene2-search-input");
  const scene2ResultsBody = document.getElementById("scene2-results-body");
  const scene2Keyboard = document.getElementById("scene2-keyboard");
  const scene2DetailModal = document.getElementById("scene2-detail-modal");
  const scene2DetailBody = document.getElementById("scene2-detail-body");
  const scene2DetailClose = document.getElementById("scene2-detail-close");
  const scene3Ui = document.getElementById("scene3-ui");
  const scene3ReportTabs = document.getElementById("scene3-report-tabs");
  const scene3FieldLayer = document.getElementById("scene3-field-layer");
  const scene3Keyboard = document.getElementById("scene3-keyboard");
  const hotspotLayer = document.getElementById("hotspot-layer");

  const screenMap = Object.fromEntries(CONFIG.screens.map((screen) => [screen.id, screen]));
  const imageToScreenId = new Map(CONFIG.screens.map((screen) => [screen.num, screen.id]));
  const progressMap = new Map(CONFIG.progress.map((rule) => [rule.level, rule]));
  const buttonIds = Object.keys(CONFIG.buttons);
  const hotspotElements = new Map();
  const APP_STORAGE_KEY = "liminal-tablet-state-v1";

  let currentScene = "scene1";
  let currentScene3Report = CONFIG.sceneScreens.scene3.defaultReport;
  let currentProgress = CONFIG.progress[0].level;
  let currentScreen = imageToScreenId.get(CONFIG.progress[0].focusImage) || CONFIG.screens[0].id;
  let isScene2Unlocked = false;
  let scene2UnlockedProgress = {};
  let scene2GateFeedbackMessage = "";
  let isScene2Composing = false;
  let scene2SelectionStart = 0;
  let scene2SelectionEnd = 0;
  let isScene2KeyboardCollapsed = false;
  let activeScene3KanaFieldId = null;

  const scene3Answers = Object.fromEntries(
    Object.entries(CONFIG.sceneScreens.scene3.reports).map(([reportId, report]) => [
      reportId,
      Object.fromEntries(report.fields.map((field) => [field.id, ""])),
    ])
  );

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
  const SCENE3_KEYBOARD_LAYOUT = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "－"],
    ...SCENE2_KEYBOARD_LAYOUT,
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

  const SCENE2_UNLOCK_ANSWERS = new Set(["イス", "ハンペン", "ハシ", "ヒヨコ", "クシ"]);
  const SCENE2_GATE_PROGRESS_LEVELS = new Set([2, 3, 4, 5, 7, 8]);

  if (CONFIG.debugShowHotspots) {
    document.body.classList.add("debug-hotspots");
  }

  function canUseStorage() {
    return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
  }

  function saveAppState() {
    if (!canUseStorage()) {
      return;
    }

    const payload = {
      currentScene,
      currentScene3Report,
      currentProgress,
      currentScreen,
      scene2Unlocked: isScene2Unlocked,
      scene2UnlockedProgress,
      scene2Query: scene2SearchInput.value,
      scene2UnlockQuery: scene2GateInput.value,
      scene3Answers,
    };

    try {
      window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.warn("Failed to persist app state.", error);
    }
  }

  function restoreScene3Answers(savedAnswers) {
    if (!savedAnswers || typeof savedAnswers !== "object") {
      return;
    }

    Object.entries(CONFIG.sceneScreens.scene3.reports).forEach(([reportId, report]) => {
      const savedReportAnswers = savedAnswers[reportId];
      if (!savedReportAnswers || typeof savedReportAnswers !== "object") {
        return;
      }

      report.fields.forEach((field) => {
        if (!(field.id in savedReportAnswers)) {
          return;
        }

        scene3Answers[reportId][field.id] = normalizeScene3FieldValue(field, savedReportAnswers[field.id]);
      });
    });
  }

  function loadAppState() {
    if (!canUseStorage()) {
      return;
    }

    try {
      const raw = window.localStorage.getItem(APP_STORAGE_KEY);
      if (!raw) {
        return;
      }

      const payload = JSON.parse(raw);
      if (!payload || typeof payload !== "object") {
        return;
      }

      if (progressMap.has(payload.currentProgress)) {
        currentProgress = payload.currentProgress;
      }

      if (typeof payload.currentScreen === "string" && screenMap[payload.currentScreen]) {
        currentScreen = payload.currentScreen;
      }

      if (typeof payload.currentScene3Report === "string"
        && CONFIG.sceneScreens.scene3.reports[payload.currentScene3Report]) {
        currentScene3Report = payload.currentScene3Report;
      }

      if (payload.currentScene === "scene1" || payload.currentScene === "scene2" || payload.currentScene === "scene3") {
        currentScene = payload.currentScene;
      }

      if (typeof payload.scene2Query === "string") {
        scene2SearchInput.value = payload.scene2Query;
      }

      if (typeof payload.scene2UnlockQuery === "string") {
        scene2GateInput.value = payload.scene2UnlockQuery;
      }

      if (payload.scene2UnlockedProgress && typeof payload.scene2UnlockedProgress === "object") {
        scene2UnlockedProgress = Object.fromEntries(
          Object.entries(payload.scene2UnlockedProgress).map(([key, value]) => [key, Boolean(value)])
        );
      } else if (payload.scene2Unlocked && progressMap.has(payload.currentProgress)) {
        scene2UnlockedProgress[String(payload.currentProgress)] = true;
      }

      restoreScene3Answers(payload.scene3Answers);
    } catch (error) {
      console.warn("Failed to restore app state.", error);
    }
  }

  function requiresScene2Unlock(progress = currentProgress) {
    return SCENE2_GATE_PROGRESS_LEVELS.has(progress);
  }

  function syncScene2UnlockState({ resetInput = false } = {}) {
    if (!requiresScene2Unlock()) {
      isScene2Unlocked = true;
      scene2GateFeedbackMessage = "";
      return;
    }

    isScene2Unlocked = Boolean(scene2UnlockedProgress[String(currentProgress)]);
    if (isScene2Unlocked) {
      scene2GateFeedbackMessage = "検索機能を解放しました。";
      return;
    }

    if (resetInput) {
      scene2GateInput.value = "";
    }
    scene2GateFeedbackMessage = "";
  }

  function getActiveScene2Input() {
    return isScene2Unlocked ? scene2SearchInput : scene2GateInput;
  }

  function updateScene2GateFeedback() {
    scene2GateFeedback.textContent = scene2GateFeedbackMessage;
    scene2GateFeedback.classList.toggle("is-success", scene2GateFeedbackMessage === "検索機能を解放しました。");
  }

  function updateScene2Mode() {
    document.body.classList.toggle("scene2-locked", !isScene2Unlocked);
    scene2Gate.hidden = isScene2Unlocked;
    scene2SearchShell.hidden = !isScene2Unlocked;
    updateScene2GateFeedback();
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
      scene2GateInput.blur();
      return;
    }

    syncScene2UnlockState();
    updateScene2Mode();

    if (!document.body.classList.contains("scene2-keyboard-enabled")) {
      return;
    }

    requestAnimationFrame(() => {
      getActiveScene2Input().focus({ preventScroll: true });
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

  function normalizeScene2Input(targetInput = getActiveScene2Input()) {
    const converted = toKatakana(targetInput.value)
      .replace(/\s+/g, "")
      .replace(/[^\u30A1-\u30FA\u30FC\u30FD\u30FE]/g, "");
    if (targetInput.value !== converted) {
      const caret = targetInput.selectionStart ?? converted.length;
      targetInput.value = converted;
      targetInput.setSelectionRange(caret, caret);
    }
  }

  function syncScene2Selection() {
    const activeInput = getActiveScene2Input();
    scene2SelectionStart = activeInput.selectionStart ?? activeInput.value.length;
    scene2SelectionEnd = activeInput.selectionEnd ?? scene2SelectionStart;
  }

  function focusScene2SearchInput() {
    const activeInput = getActiveScene2Input();
    activeInput.focus({ preventScroll: true });
    activeInput.setSelectionRange(scene2SelectionStart, scene2SelectionEnd);
  }

  function insertScene2Text(value) {
    const activeInput = getActiveScene2Input();
    focusScene2SearchInput();
    activeInput.setRangeText(value, scene2SelectionStart, scene2SelectionEnd, "end");
    normalizeScene2Input(activeInput);
    syncScene2Selection();
    saveAppState();
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

    const activeInput = getActiveScene2Input();
    const source = activeInput.value.slice(replaceStart, replaceEnd);
    const transformed = transformMap[source];
    if (!transformed) {
      return;
    }

    focusScene2SearchInput();
    activeInput.setRangeText(transformed, replaceStart, replaceEnd, "end");
    normalizeScene2Input(activeInput);
    syncScene2Selection();
    saveAppState();
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

    const activeInput = getActiveScene2Input();
    focusScene2SearchInput();
    activeInput.setRangeText("", deleteStart, deleteEnd, "end");
    normalizeScene2Input(activeInput);
    syncScene2Selection();
    saveAppState();
  }

  function clearScene2Input() {
    const activeInput = getActiveScene2Input();
    activeInput.value = "";
    scene2SelectionStart = 0;
    scene2SelectionEnd = 0;
    focusScene2SearchInput();
    saveAppState();
  }

  function submitScene2Search() {
    closeScene2Detail();
    renderScene2Results(scene2SearchInput.value);
    saveAppState();
  }

  function submitScene2Unlock() {
    normalizeScene2Input(scene2GateInput);
    syncScene2Selection();

    const answer = scene2GateInput.value.trim();
    if (!answer) {
      scene2GateFeedbackMessage = "答えを入力してください。";
      updateScene2GateFeedback();
      saveAppState();
      return;
    }

    if (!SCENE2_UNLOCK_ANSWERS.has(answer)) {
      scene2GateFeedbackMessage = `「${answer}」では解放できません。`;
      updateScene2GateFeedback();
      saveAppState();
      return;
    }

    scene2UnlockedProgress[String(currentProgress)] = true;
    syncScene2UnlockState();
    updateScene2Mode();
    renderScene2Results(scene2SearchInput.value);
    saveAppState();

    requestAnimationFrame(() => {
      scene2SearchInput.focus({ preventScroll: true });
      syncScene2Selection();
    });
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

  function createKanaKeyboard(target, onPress, layout = SCENE2_KEYBOARD_LAYOUT) {
    const fragment = document.createDocumentFragment();

    layout.forEach((row) => {
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
          onPress(key);
        });
        fragment.appendChild(button);
      });
    });

    target.replaceChildren(fragment);
  }

  function createScene2Keyboard() {
    createKanaKeyboard(scene2Keyboard, handleScene2KeyboardPress);
  }

  function createScene3Keyboard() {
    createKanaKeyboard(scene3Keyboard, handleScene3KeyboardPress, SCENE3_KEYBOARD_LAYOUT);
  }

  function getCurrentScene3Report() {
    return CONFIG.sceneScreens.scene3.reports[currentScene3Report]
      || CONFIG.sceneScreens.scene3.reports[CONFIG.sceneScreens.scene3.defaultReport];
  }

  function getScene3FieldValue(reportId, fieldId) {
    return scene3Answers[reportId]?.[fieldId] ?? "";
  }

  function normalizeScene3FieldValue(field, value) {
    if (field.type === "select") {
      return String(value ?? "");
    }

    const converted = toKatakana(String(value ?? ""))
      .replace(/\s+/g, "");

    if (field.characterSet === "number") {
      return converted
        .replace(/[^0-9-－]/g, "")
        .slice(0, field.maxLength || 32);
    }

    if (field.characterSet === "kana-number") {
      return converted
        .replace(/[^\u30A1-\u30FA\u30FC\u30FD\u30FE0-9-－]/g, "")
        .slice(0, field.maxLength || 32);
    }

    return converted
        .replace(/[^\u30A1-\u30FA\u30FC\u30FD\u30FE]/g, "")
        .slice(0, field.maxLength || 32);
  }

  function getScene3FieldSyncKey(field) {
    if (typeof field.syncKey === "string" && field.syncKey) {
      return field.syncKey;
    }

    const match = /^([a-z]+)_\d+$/i.exec(field.id);
    return match ? match[1].toLowerCase() : null;
  }

  function getScene3SyncedFields(reportId, field) {
    const report = CONFIG.sceneScreens.scene3.reports[reportId];
    if (!report) {
      return [field];
    }

    const syncKey = getScene3FieldSyncKey(field);
    if (!syncKey) {
      return [field];
    }

    return report.fields.filter((entry) => getScene3FieldSyncKey(entry) === syncKey);
  }

  function setScene3FieldValue(reportId, field, nextValue) {
    getScene3SyncedFields(reportId, field).forEach((entry) => {
      scene3Answers[reportId][entry.id] = normalizeScene3FieldValue(entry, nextValue);
    });
    saveAppState();
  }

  function getScene3FieldCorrectValues(field) {
    if (Array.isArray(field.correctValues)) {
      return field.correctValues;
    }

    if (typeof field.correct === "string" || typeof field.correct === "number") {
      return [String(field.correct)];
    }

    return [];
  }

  function isScene3FieldCorrect(field, value) {
    if (!value) {
      return false;
    }

    const correctValues = getScene3FieldCorrectValues(field);
    if (correctValues.length === 0) {
      return false;
    }

    const normalizedValue = normalizeScene3FieldValue(field, value);
    return correctValues.some((candidate) => (
      normalizeScene3FieldValue(field, candidate) === normalizedValue
    ));
  }

  function setScene3KeyboardVisible(isVisible) {
    const nextVisible = Boolean(isVisible && activeScene3KanaFieldId);
    document.body.classList.toggle("scene3-keyboard-visible", nextVisible);
    scene3Keyboard.hidden = !nextVisible;
    scene3Keyboard.setAttribute("aria-hidden", String(!nextVisible));
  }

  function clearScene3ActiveField() {
    activeScene3KanaFieldId = null;
    setScene3KeyboardVisible(false);
  }

  function setScene3Active(isActive) {
    document.body.classList.toggle("scene3-active", isActive);
    scene3Ui.hidden = !isActive;
    if (!isActive) {
      clearScene3ActiveField();
      scene3FieldLayer.replaceChildren();
      scene3ReportTabs.replaceChildren();
    }
  }

  function toggleScene3KanaField(fieldId) {
    activeScene3KanaFieldId = activeScene3KanaFieldId === fieldId ? null : fieldId;
    setScene3KeyboardVisible(Boolean(activeScene3KanaFieldId));
    renderScene3Report();
  }

  function appendScene3KanaText(value) {
    const report = getCurrentScene3Report();
    const field = report.fields.find((entry) => entry.id === activeScene3KanaFieldId);
    if (!field) {
      return;
    }

    const currentValue = getScene3FieldValue(report.id, field.id);
    setScene3FieldValue(report.id, field, `${currentValue}${value}`);
    renderScene3Report();
  }

  function transformScene3KanaText(transformMap) {
    const report = getCurrentScene3Report();
    const field = report.fields.find((entry) => entry.id === activeScene3KanaFieldId);
    if (!field) {
      return;
    }

    const currentValue = getScene3FieldValue(report.id, field.id);
    const source = currentValue.slice(-1);
    const transformed = transformMap[source];
    if (!transformed) {
      return;
    }

    setScene3FieldValue(report.id, field, `${currentValue.slice(0, -1)}${transformed}`);
    renderScene3Report();
  }

  function deleteScene3KanaTextBackward() {
    const report = getCurrentScene3Report();
    const field = report.fields.find((entry) => entry.id === activeScene3KanaFieldId);
    if (!field) {
      return;
    }

    const currentValue = getScene3FieldValue(report.id, field.id);
    if (!currentValue) {
      return;
    }

    setScene3FieldValue(report.id, field, currentValue.slice(0, -1));
    renderScene3Report();
  }

  function clearScene3KanaText() {
    const report = getCurrentScene3Report();
    const field = report.fields.find((entry) => entry.id === activeScene3KanaFieldId);
    if (!field) {
      return;
    }

    setScene3FieldValue(report.id, field, "");
    renderScene3Report();
  }

  function handleScene3KeyboardPress(key) {
    if (!activeScene3KanaFieldId) {
      return;
    }

    if (typeof key === "string") {
      appendScene3KanaText(key);
      return;
    }

    if (key.action === "delete") {
      deleteScene3KanaTextBackward();
      return;
    }

    if (key.action === "clear") {
      clearScene3KanaText();
      return;
    }

    if (key.action === "dakuten") {
      transformScene3KanaText(SCENE2_DAKUTEN_MAP);
      return;
    }

    if (key.action === "handakuten") {
      transformScene3KanaText(SCENE2_HANDAKUTEN_MAP);
      return;
    }

    if (key.action === "small") {
      transformScene3KanaText(SCENE2_SMALL_MAP);
    }
  }

  function createScene3OverlayCard(report) {
    if (!report.overlayCard) {
      return null;
    }

    const card = document.createElement("section");
    card.className = "scene3-report-card";
    card.style.left = `${report.overlayCard.x}px`;
    card.style.top = `${report.overlayCard.y}px`;
    card.style.width = `${report.overlayCard.w}px`;
    card.style.height = `${report.overlayCard.h}px`;

    const title = document.createElement("h2");
    title.className = "scene3-report-card-title";
    title.textContent = report.overlayCard.title;
    card.appendChild(title);

    report.overlayCard.lines.forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.className = "scene3-report-card-line";
      paragraph.textContent = line;
      card.appendChild(paragraph);
    });

    return card;
  }

  function createScene3Field(report, field) {
    const value = getScene3FieldValue(report.id, field.id);
    const isCorrect = isScene3FieldCorrect(field, value);
    const activeField = report.fields.find((entry) => entry.id === activeScene3KanaFieldId) || null;
    const activeSyncKey = activeField ? getScene3FieldSyncKey(activeField) : null;
    const isLinkedActive = Boolean(activeSyncKey && getScene3FieldSyncKey(field) === activeSyncKey);

    if (field.type === "select") {
      const select = document.createElement("select");
      select.className = "scene3-field scene3-field--select";
      select.classList.toggle("is-boxed", Boolean(field.boxed));
      select.classList.toggle("is-correct", isCorrect);
      select.style.left = `${field.x}px`;
      select.style.top = `${field.y}px`;
      select.style.width = `${field.w}px`;
      select.style.height = `${field.h}px`;
      if (field.fontSize) {
        select.style.fontSize = `${field.fontSize}px`;
      }

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = field.placeholder || "選択";
      select.appendChild(placeholder);

      field.options.forEach((optionValue) => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
      });

      select.value = value;
      select.addEventListener("pointerdown", () => {
        if (!activeScene3KanaFieldId) {
          return;
        }

        activeScene3KanaFieldId = null;
        setScene3KeyboardVisible(false);
      });
      select.addEventListener("change", () => {
        setScene3FieldValue(report.id, field, select.value);
        renderScene3Report();
      });
      select.addEventListener("blur", () => {
        if (!activeScene3KanaFieldId) {
          renderScene3Report();
        }
      });
      return select;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "scene3-field scene3-field--kana";
    button.classList.toggle("is-boxed", Boolean(field.boxed));
    button.classList.toggle("is-correct", isCorrect);
    button.style.left = `${field.x}px`;
    button.style.top = `${field.y}px`;
    button.style.width = `${field.w}px`;
    button.style.height = `${field.h}px`;
    if (field.fontSize) {
      button.style.fontSize = `${field.fontSize}px`;
    }
    button.classList.toggle("is-empty", !value);
    button.classList.toggle("is-active", isLinkedActive);
    button.textContent = value || field.placeholder || "";
    button.setAttribute("aria-label", `${report.title} ${field.id}`);
    button.addEventListener("click", () => {
      toggleScene3KanaField(field.id);
    });

    return button;
  }

  function renderScene3Tabs(report) {
    const fragment = document.createDocumentFragment();

    Object.values(CONFIG.sceneScreens.scene3.reports).forEach((entry) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "scene3-report-tab";
      button.classList.toggle("is-active", entry.id === report.id);
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(entry.id === report.id));
      button.textContent = entry.switchLabel;
      button.title = entry.title;
      button.addEventListener("click", () => {
        currentScene3Report = entry.id;
        clearScene3ActiveField();
        renderScreen();
        saveAppState();
      });
      fragment.appendChild(button);
    });

    scene3ReportTabs.replaceChildren(fragment);
  }

  function renderScene3Report() {
    const report = getCurrentScene3Report();
    renderScene3Tabs(report);

    const fragment = document.createDocumentFragment();
    const overlayCard = createScene3OverlayCard(report);
    if (overlayCard) {
      fragment.appendChild(overlayCard);
    }

    report.fields.forEach((field) => {
      fragment.appendChild(createScene3Field(report, field));
    });

    scene3FieldLayer.replaceChildren(fragment);
    setScene3KeyboardVisible(Boolean(activeScene3KanaFieldId));
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
      setScene3Active(false);
      renderHotspots();
      return;
    }

    setScene2Active(false);

    if (currentScene === "scene3") {
      const report = getCurrentScene3Report();
      setScene3Active(true);
      imageEl.src = report.image;
      renderScene3Report();
      renderHotspots();
      return;
    }

    setScene3Active(false);

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
    saveAppState();
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
      currentScene3Report = CONFIG.sceneScreens.scene3.defaultReport;
    }
    renderScreen();
    saveAppState();
  }

  function handleButtonClick(buttonId) {
    if (!canActivateButton(buttonId)) {
      return;
    }

    const targetScene = getButtonTargetScene(buttonId);
    if (targetScene) {
      currentScene = targetScene;
      if (targetScene === "scene3") {
        currentScene3Report = CONFIG.sceneScreens.scene3.defaultReport;
      }
      renderScreen();
      saveAppState();
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

    syncScene2UnlockState({ resetInput: true });
    renderScreen();
    saveAppState();
  }

  function preloadImages() {
    CONFIG.screens.forEach((screen) => {
      const img = new Image();
      img.src = screen.image;
    });

    Object.values(CONFIG.sceneScreens.scene3.reports).forEach((screen) => {
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
    const bindScene2TextInput = (input) => {
      ["focus", "click", "keyup", "select"].forEach((eventName) => {
        input.addEventListener(eventName, syncScene2Selection);
      });

      input.addEventListener("pointerdown", () => {
        if (isScene2KeyboardCollapsed) {
          setScene2KeyboardCollapsed(false);
        }
      });

      input.addEventListener("compositionstart", () => {
        isScene2Composing = true;
      });

      input.addEventListener("compositionend", () => {
        isScene2Composing = false;
        normalizeScene2Input(input);
        syncScene2Selection();
      });

      input.addEventListener("input", () => {
        if (!isScene2Composing) {
          normalizeScene2Input(input);
        }
        syncScene2Selection();
        saveAppState();
      });
    };

    bindScene2TextInput(scene2SearchInput);
    bindScene2TextInput(scene2GateInput);

    scene2SearchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      submitScene2Search();
    });

    scene2GateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      submitScene2Unlock();
    });

    scene2CloseButton.addEventListener("click", () => {
      showScene("scene1");
    });

    scene2GateCloseButton.addEventListener("click", () => {
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

  function setupScene3Report() {
    scene3Ui.addEventListener("click", (event) => {
      if (event.target === scene3Ui || event.target === scene3FieldLayer) {
        clearScene3ActiveField();
        renderScene3Report();
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
    createScene3Keyboard();
    updateScene2KeyboardVisibility();
    setScene2Active(false);
    setScene3Active(false);
    loadAppState();
    syncScene2UnlockState();
    normalizeScene2Input(scene2SearchInput);
    normalizeScene2Input(scene2GateInput);
    updateScene2Mode();
    renderScene2Results(scene2SearchInput.value);
    renderScreen();
    updateStageScale();
    setupScene2Search();
    setupScene3Report();
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
      getState: () => ({ currentScene, currentScene3Report, currentScreen, currentProgress }),
      config: CONFIG,
    };
  }

  init();
})();
