// 获取按钮和cube元素
const normalBtn = document.getElementById('normalBtn');
const elninoBtn = document.getElementById('elninoBtn');
const normalCube = document.getElementById('normalCube');
const elninoCube = document.getElementById('elninoCube');
const animationStatus = document.getElementById('animationStatus');
const statusText = document.getElementById('statusText');

// 动画定时器数组，用于管理所有的setTimeout
let animationTimers = [];

// 动画步骤说明文本
const animationSteps = {
  start: "准备开始厄尔尼诺现象演示...",
  step0: "东南信风减弱",
  step1: "东太平洋冷水团逐渐消失",
  step2: "西太平洋暖水团向东扩展",
  step3: "东太平洋下沉气流减弱或消失，上升气流增强",
  step4: "东太平洋由干燥少雨转为湿润多雨",
  step5: "大气环流强度减弱",
  step6: "西岸上升气流减弱或消失，转为下沉气流",
  step7: "西太平洋天气转为晴朗干燥",
  complete: "厄尔尼诺现象演示完成"
};

// 更新动画状态文本
function updateStatusText(step) {
  if (statusText && animationSteps[step]) {
    statusText.textContent = animationSteps[step];
  }
}

// 正常年份按钮点击事件
normalBtn.addEventListener('click', function () {
  // 清除所有正在进行的动画定时器
  clearAllAnimationTimers();
  
  normalCube.style.display = 'block';
  elninoCube.style.display = 'none';
  normalBtn.classList.add('active');
  elninoBtn.classList.remove('active');

  // 隐藏动画状态显示
  animationStatus.style.display = 'none';

  // 重置厄尔尼诺动画状态
  resetElninoAnimation();
});

// 厄尔尼诺年份按钮点击事件
elninoBtn.addEventListener('click', function () {
  // 清除所有正在进行的动画定时器
  clearAllAnimationTimers();
  
  normalCube.style.display = 'none';
  elninoCube.style.display = 'block';
  elninoBtn.classList.add('active');
  normalBtn.classList.remove('active');

  // 显示动画状态
  animationStatus.style.display = 'block';
  updateStatusText('start');

  // 启动厄尔尼诺动画序列
  startElninoAnimation();
});

// 清除所有动画定时器
function clearAllAnimationTimers() {
  animationTimers.forEach(timer => clearTimeout(timer));
  animationTimers = [];
}

// 重置厄尔尼诺动画状态
function resetElninoAnimation() {
  const elninoCube = document.getElementById('elninoCube');
  elninoCube.classList.remove('step0', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7');
  
  // 强制重绘，确保动画状态完全重置
  elninoCube.offsetHeight; // 触发重绘
}

// 启动厄尔尼诺动画序列
function startElninoAnimation() {
  const elninoCube = document.getElementById('elninoCube');

  // 重置所有动画状态
  resetElninoAnimation();

  // 步骤0: 风元素变小
  const timer0 = setTimeout(() => {
    elninoCube.classList.add('step0');
    updateStatusText('step0');
  }, 200);
  animationTimers.push(timer0);

  // 步骤1: ocean-cold逐渐变小，直到消失
  const timer1 = setTimeout(() => {
    elninoCube.classList.add('step1');
    updateStatusText('step1');
  }, 2200);
  animationTimers.push(timer1);

  // 步骤2: ocean-warm宽度增大，并移动到中间
  const timer2 = setTimeout(() => {
    elninoCube.classList.add('step2');
    updateStatusText('step2');
  }, 4200);
  animationTimers.push(timer2);

  // 步骤3: arrow down变为arrow up
  const timer3 = setTimeout(() => {
    elninoCube.classList.add('step3');
    updateStatusText('step3');
  }, 6200);
  animationTimers.push(timer3);

  // 步骤4: 原本的sun变为cloud
  const timer4 = setTimeout(() => {
    elninoCube.classList.add('step4');
    updateStatusText('step4');
  }, 8200);
  animationTimers.push(timer4);

  // 步骤5: arrow up、arrow left、arrow right的宽度变小
  const timer5 = setTimeout(() => {
    elninoCube.classList.add('step5');
    updateStatusText('step5');
  }, 10200);
  animationTimers.push(timer5);

  // 步骤6: arrow up变为arrow down，arrow left变为arrow right，同时arrow right变为arrow left
  const timer6 = setTimeout(() => {
    elninoCube.classList.add('step6');
    updateStatusText('step6');
  }, 12200);
  animationTimers.push(timer6);

  // 步骤7: 原本的cloud变为sun
  const timer7 = setTimeout(() => {
    elninoCube.classList.add('step7');
    updateStatusText('step7');
  }, 14200);
  animationTimers.push(timer7);

  // 动画完成
  const timerComplete = setTimeout(() => {
    updateStatusText('complete');
  }, 16200);
  animationTimers.push(timerComplete);
}