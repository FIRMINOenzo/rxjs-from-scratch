const canvas = document.getElementById('canvas');
const clearBtn = document.getElementById('clearBtn');
const ctx = canvas.getContext('2d');

const resetCanvas = (width, height) => {
  const parent = canvas.parentElement;
  canvas.width = width || parent.clientWidth * 0.9;
  canvas.height = height || parent.clientHeight * 1.5;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 4;
};
