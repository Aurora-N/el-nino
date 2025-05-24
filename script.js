// 获取按钮和cube元素
const normalBtn = document.getElementById('normalBtn');
const elninoBtn = document.getElementById('elninoBtn');
const normalCube = document.getElementById('normalCube');
const elninoCube = document.getElementById('elninoCube');

// 正常年份按钮点击事件
normalBtn.addEventListener('click', function () {
  normalCube.style.display = 'block';
  elninoCube.style.display = 'none';
  normalBtn.classList.add('active');
  elninoBtn.classList.remove('active');

  // 重置厄尔尼诺动画状态
  resetElninoAnimation();
});

// 厄尔尼诺年份按钮点击事件
elninoBtn.addEventListener('click', function () {
  normalCube.style.display = 'none';
  elninoCube.style.display = 'block';
  elninoBtn.classList.add('active');
  normalBtn.classList.remove('active');

  // 启动厄尔尼诺动画序列
  startElninoAnimation();
});

// 重置厄尔尼诺动画状态
function resetElninoAnimation() {
  const elninoCube = document.getElementById('elninoCube');
  elninoCube.classList.remove('step0', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7');
}

// 启动厄尔尼诺动画序列
function startElninoAnimation() {
  const elninoCube = document.getElementById('elninoCube');

  // 重置所有动画状态
  resetElninoAnimation();

  // 步骤0: 风元素变小
  setTimeout(() => {
    elninoCube.classList.add('step0');
  }, 200);

  // 步骤1: ocean-cold逐渐变小，直到消失
  setTimeout(() => {
    elninoCube.classList.add('step1');
  }, 2000);

  // 步骤2: ocean-warm宽度增大，并移动到中间
  setTimeout(() => {
    elninoCube.classList.add('step2');
  }, 3500);

  // 步骤3: arrow down变为arrow up
  setTimeout(() => {
    elninoCube.classList.add('step3');
  }, 5000);

  // 步骤4: 原本的sun变为cloud
  setTimeout(() => {
    elninoCube.classList.add('step4');
  }, 6500);

  // 步骤5: arrow up、arrow left、arrow right的宽度变小
  setTimeout(() => {
    elninoCube.classList.add('step5');
  }, 8000);

  // 步骤6: arrow up变为arrow down，arrow left变为arrow right，同时arrow right变为arrow left
  setTimeout(() => {
    elninoCube.classList.add('step6');
  }, 9500);

  // 步骤7: 原本的cloud变为sun
  setTimeout(() => {
    elninoCube.classList.add('step7');
  }, 11000);
}