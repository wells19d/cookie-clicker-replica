// --- Assets and variables ---
let backgrounds = [];
let fontMain;
let fontItalic;
let cookie;
let clickSound;

// --- Core state ---
let count = 0;
let lastFrameMillis = 0;

// --- Cursor graphics ---
let cursorBronze;
let cursorSilver;
let cursorGold;
let cursorPlatinum;

// --- Cookie placement ---
let cookieX = 200;
let cookieY = 300;
let cookieSize = 300;

// --- Shake animation ---
let isShaking = false;
let shakeTimer = 0;

// --- Multipliers ---
let cursorMultiplier = 1;

// --- Production speeds ---
const cursorSpeed = 0.1;
const grandSpeed = 1;
const farmSpeed = 8;
const mineSpeed = 47;
const factorySpeed = 260;
const bankSpeed = 1400;
const templeSpeed = 7800;

// --- Base costs ---
let cursorInit = 15;
let grandInit = 100;
let farmInit = 1100;
let mineInit = 12000;
let factoryInit = 130000;
let bankInit = 1400000;
let templeInit = 20000000;

// --- Store counts ---
let cursors = 0;
let grandMas = 0;
let farms = 0;
let mines = 0;
let factories = 0;
let banks = 0;
let temples = 0;

// --- File paths ---
const INIT_FILE = 'cookie_init.json';
const SAVE_KEY = 'cookieClickerSave'; // localStorage key

let initData = null;

// ============================================================================
// --- SESSION LOGIC ---
// ============================================================================

// Load session: check localStorage first, else use init file
function loadSession() {
  const saved = localStorage.getItem(SAVE_KEY);
  if (saved) {
    const data = JSON.parse(saved);
    applySessionData(data);
    console.log('Loaded session from localStorage.');
  } else if (initData) {
    resetSession(); // use initData to start new session
    console.log('No saved session found. Using init data.');
  } else {
    console.warn('No init data loaded yet.');
  }
}

// Save to localStorage (manual only)
function saveSession() {
  const data = {
    count,
    cursors,
    grandMas,
    farms,
    mines,
    factories,
    banks,
    temples,
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  console.log('✅ Session manually saved to localStorage.');
}

// Reset session to initial JSON values
function resetSession() {
  if (initData) {
    applySessionData(initData);
    saveSession(); // overwrite any old data
    console.log('🔄 Session reset to init values.');
  } else {
    console.warn('Init data not loaded, cannot reset.');
  }
}

// Completely delete localStorage save
function deleteSave() {
  localStorage.removeItem(SAVE_KEY);
  console.log('🗑️ Local save deleted.');
}

// Apply session data to game state
function applySessionData(data) {
  count = data.count || 0;
  cursors = data.cursors || 0;
  grandMas = data.grandMas || 0;
  farms = data.farms || 0;
  mines = data.mines || 0;
  factories = data.factories || 0;
  banks = data.banks || 0;
  temples = data.temples || 0;
}

// ============================================================================
// --- GAME LOGIC ---
// ============================================================================

function calcCookiesPerSecond() {
  return (
    cursorSpeed * cursors * cursorMultiplier +
    grandSpeed * grandMas +
    farmSpeed * farms +
    mineSpeed * mines +
    factorySpeed * factories +
    bankSpeed * banks +
    templeSpeed * temples
  );
}

function preload() {
  // Load visual/audio assets
  backgrounds.push(loadImage('ccbg.jpg'));
  cookie = loadImage('cookie.png');
  clickSound = loadSound('click.mp3');
  fontMain = loadFont('OpenSans-Medium.ttf');
  fontItalic = loadFont('OpenSans-MediumItalic.ttf');
  cursorBronze = loadImage('bronzePointer.png');
  cursorSilver = loadImage('silverPointer.png');
  cursorGold = loadImage('goldPointer.png');
  cursorPlatinum = loadImage('platinumPointer.png');

  // Load base init JSON first, then session
  initData = loadJSON(INIT_FILE, () => {
    console.log('Init data loaded.');
    loadSession(); // only load after base data is ready
  });
}

function setup() {
  textFont(fontMain);
  createCanvas(800, 800);
  this.focus();
  clickSound.setVolume(0.25);
  cursor('pointer');
  lastFrameMillis = millis();
}

function draw() {
  const currentMillis = millis();
  const deltaSec = (currentMillis - lastFrameMillis) / 1000;
  lastFrameMillis = currentMillis;

  const cookiesPerSecond = calcCookiesPerSecond();
  count += cookiesPerSecond * deltaSec;

  imageMode(CORNER);
  background(backgrounds[0]);
  stroke('white');
  rect(0, 100, 800, 0);
  rect(400, 175, 400, 0);
  rect(400, 100, 0, 375);
  rect(0, 475, 800, 0);

  // Clock
  const hrs = hour();
  const mins = minute();
  const secs = second();
  const msWithinSec = currentMillis % 1000;

  textSize(18);
  text(
    `Time ${nf(hrs, 2)}:${nf(mins, 2)}:${nf(secs, 2)}:${nf(
      floor(msWithinSec),
      3
    )}`,
    400,
    60
  );

  // Shake
  let drawX = cookieX;
  let drawY = cookieY;
  if (isShaking) {
    drawX += random(-2, 2);
    drawY += random(-2, 2);
    shakeTimer--;
    if (shakeTimer <= 0) isShaking = false;
  }

  imageMode(CENTER);
  cookie.resize(250, 250);
  image(cookie, drawX, drawY);

  // UI
  fill('white');
  textSize(28);
  textAlign(CENTER);
  textFont(fontMain);
  text(`${round(count)} Cookies`, 200, 145);
  textFont(fontItalic);
  textSize(14);
  text(`( per second: ${cookiesPerSecond.toFixed(2)} )`, 200, 165);
  textFont(fontMain);
}

function mousePressed() {
  if (
    mouseX > cookieX - 100 &&
    mouseX < cookieX + 100 &&
    mouseY > cookieY - 95 &&
    mouseY < cookieY + 90
  ) {
    count++;
    clickSound.play();
    isShaking = true;
    shakeTimer = 5;
  }
}

function keyPressed() {
  const k = key.toLowerCase();
  if (k === 's') saveSession(); // manual save
  if (k === 'r') resetSession(); // manual reset
  if (k === 'd') deleteSave(); // delete local save completely
}
