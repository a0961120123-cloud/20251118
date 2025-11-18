let spriteSheet1;
let spriteSheet2;

let frame = 0;
const totalFrames = 11;

// 控制動畫是否正在播放的狀態變數
let isAnimating = false;

// 角色縮放因子 (1.5 = 放大 50%)
const scaleFactor = 1.5;

// 角色 1 的尺寸
const frameWidth1 = 314 / totalFrames;
const frameHeight1 = 40;

// 角色 2 的尺寸
const frameWidth2 = 358 / totalFrames;
const frameHeight2 = 24;

function preload() {
  // 載入位於 '1' 資料夾中的圖片精靈
  spriteSheet1 = loadImage('1/all.png');
  // 載入位於 '2' 資料夾中的圖片精靈
  spriteSheet2 = loadImage('2/all.png');
}

function setup() {
  // 建立一個全視窗的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定動畫的影格率
  frameRate(10);
}

function draw() {
  // 設定背景顏色
  background('#ffa200');

  // 計算縮放後的尺寸
  const scaledWidth1 = frameWidth1 * scaleFactor;
  const scaledHeight1 = frameHeight1 * scaleFactor;
  const scaledWidth2 = frameWidth2 * scaleFactor;
  const scaledHeight2 = frameHeight2 * scaleFactor;

  // --- 繪製第一個角色 (中央) ---
  // 計算目前影格在圖片精靈中的 x 座標
  const sx1 = frame * frameWidth1;
  // 計算置中位置並在畫布中央繪製放大後的影格
  const dx1 = (width - scaledWidth1) / 2;
  const dy1 = (height - scaledHeight1) / 2;
  image(spriteSheet1, dx1, dy1, scaledWidth1, scaledHeight1, sx1, 0, frameWidth1, frameHeight1);

  // --- 繪製第二個角色 (右側) ---
  // 計算目前影格在圖片精靈中的 x 座標
  const sx2 = frame * frameWidth2;
  // 計算右側位置 (在畫面寬度 3/4 的地方，並垂直置中) 並繪製放大後的影格
  const dx2 = (width * 3 / 4) - (scaledWidth2 / 2);
  const dy2 = (height - scaledHeight2) / 2;
  image(spriteSheet2, dx2, dy2, scaledWidth2, scaledHeight2, sx2, 0, frameWidth2, frameHeight2);

  // 更新到下一個影格，並在結束時循環
  // 只有在 isAnimating 為 true 時才更新影格
  if (isAnimating) {
    frame = (frame + 1) % totalFrames;
  }
}

// 當滑鼠被點擊時，切換動畫的播放/暫停狀態
function mousePressed() {
  isAnimating = !isAnimating;
}
