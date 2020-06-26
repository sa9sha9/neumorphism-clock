const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const degree = 6;

setInterval(() => {
  const date = new Date();
  const hd = date.getHours() * 30; // 時針角度 = 時 * 30 (ex: 1時 = 30deg = 1 * 30)
  const md = date.getMinutes() * degree; // 分針角度 = 分 * 6 (ex: 15分 = 90deg/15 = 6)
  const sd = date.getSeconds() * degree; // 秒針角度 = 分針と同様
  hour.style.transform = `rotateZ(${hd + md / 12}deg)`;
  min.style.transform = `rotateZ(${md}deg)`;
  sec.style.transform = `rotateZ(${sd}deg)`;
}, 1000);
