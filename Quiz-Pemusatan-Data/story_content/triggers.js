function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6g1wkJk9uwB":
        Script1();
        break;
      case "6aE5irE62Sv":
        Script2();
        break;
      case "6DvYTsgwLyL":
        Script3();
        break;
      case "6obl3Jc7LlD":
        Script4();
        break;
      case "6XU3rS97zQL":
        Script5();
        break;
      case "6AfG67KZhSn":
        Script6();
        break;
      case "63I7fKr7asd":
        Script7();
        break;
      case "6W4Yz6njYy1":
        Script8();
        break;
      case "6jDKYSDmbH8":
        Script9();
        break;
      case "6fs2nNjHy31":
        Script10();
        break;
      case "5rcfpqYhPpk":
        Script11();
        break;
      case "5ZGRSB5npyo":
        Script12();
        break;
      case "6kNaNbz8Ok8":
        Script13();
        break;
      case "6qPMjaWYGRy":
        Script14();
        break;
      case "69Iw36XllrT":
        Script15();
        break;
      case "6DTWRpgAbSp":
        Script16();
        break;
      case "5zAZPKsPwzx":
        Script17();
        break;
      case "6S5kj9qj5zv":
        Script18();
        break;
      case "5mu1GRnSAor":
        Script19();
        break;
      case "60Zf7tBQCbt":
        Script20();
        break;
      case "6AAMM3UUTgN":
        Script21();
        break;
      case "6Rmdadaqotp":
        Script22();
        break;
      case "6AjqmHNnkfl":
        Script23();
        break;
      case "6rWyOyXTtg5":
        Script24();
        break;
      case "6YxqJpMSJbi":
        Script25();
        break;
      case "6r1iC7kpafs":
        Script26();
        break;
      case "6XnIwICL4EQ":
        Script27();
        break;
      case "5xNCTuQICxA":
        Script28();
        break;
      case "5opI8DS6DVq":
        Script29();
        break;
      case "6Ie6Upb7srE":
        Script30();
        break;
      case "6dDrks8QNc3":
        Script31();
        break;
      case "5sOTk4bnt0Z":
        Script32();
        break;
      case "5q28u2s47Km":
        Script33();
        break;
      case "63XdZg3AAH4":
        Script34();
        break;
      case "6WKgy5isLLR":
        Script35();
        break;
      case "6WKQ9IboGVx":
        Script36();
        break;
      case "6HidKGLNEBs":
        Script37();
        break;
      case "6m559c1LnSp":
        Script38();
        break;
      case "6QES51biozB":
        Script39();
        break;
      case "6RsNiMZDMQx":
        Script40();
        break;
      case "6ff2j84KK1f":
        Script41();
        break;
      case "6EQyPf2j0C1":
        Script42();
        break;
      case "6MjAi36asE3":
        Script43();
        break;
      case "6hbI9sXCvz3":
        Script44();
        break;
      case "5nAVJvS2zGX":
        Script45();
        break;
      case "6YzGlsTtr02":
        Script46();
        break;
      case "66MEqY1b3gO":
        Script47();
        break;
      case "5by9KYNmfLj":
        Script48();
        break;
      case "5ZnyUZriAzk":
        Script49();
        break;
      case "5idP2OoeN2a":
        Script50();
        break;
      case "6L171kh3Z0d":
        Script51();
        break;
      case "5VbpA0ulBvv":
        Script52();
        break;
      case "5arYMD3xPGd":
        Script53();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6lEYbSTqeCk');
const duration = 1000;
const easing = 'ease-out';
const id = '6HT9IT31NbE';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5f5zGmP6Lqh');
const duration = 750;
const easing = 'ease-out';
const id = '6614wMxSLEC';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5f5zGmP6Lqh');
const duration = 750;
const easing = 'ease-out';
const id = '6614wMxSLEC_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5f5zGmP6Lqh');
const duration = 750;
const easing = 'ease-out';
const id = '6IhZ0KRa26O';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5oZp4AOlMJy');
const duration = 1000;
const easing = 'ease-out';
const id = '6M19C1Zh4Lc';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6ofGPi5LVN7');
const duration = 1000;
const easing = 'ease-out';
const id = '6Gp8JI2cEMF';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5Vk2n9Ixd9A');
const duration = 1000;
const easing = 'ease-out';
const id = '5VaS8A3GypW';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6iiFjxnqPes');
const duration = 1000;
const easing = 'ease-out';
const id = '6gyNYrlkL7g';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6rpsO6YF22X');
const duration = 1000;
const easing = 'ease-out';
const id = '6hyR4cMAWHM';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('66Rr45tKebd');
const duration = 750;
const easing = 'ease-out';
const id = '6LCRk8x9OGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('66Rr45tKebd');
const duration = 750;
const easing = 'ease-out';
const id = '6LCRk8x9OGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6nUj9akidrZ');
const duration = 1000;
const easing = 'ease-out';
const id = '6M19C1Zh4Lc';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6aZBcBAdFgL');
const duration = 1000;
const easing = 'ease-out';
const id = '6Gp8JI2cEMF';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6V8PJGf4hwo');
const duration = 1000;
const easing = 'ease-out';
const id = '5VaS8A3GypW';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6EfdDhY0Gnn');
const duration = 1000;
const easing = 'ease-out';
const id = '6gyNYrlkL7g';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('6Aawiza8AFo');
const duration = 1000;
const easing = 'ease-out';
const id = '6hyR4cMAWHM';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  const target = object('5de4X9DcILW');
const duration = 750;
const easing = 'ease-out';
const id = '5yCqgMZFShc';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5de4X9DcILW');
const duration = 750;
const easing = 'ease-out';
const id = '5yCqgMZFShc_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5de4X9DcILW');
const duration = 750;
const easing = 'ease-out';
const id = '6jAMfCKjwLX';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  player.once(() => {
const target = object('61aX8FJvwDb');
const duration = 1000;
const easing = 'ease-out';
const id = '6M19C1Zh4Lc';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  player.once(() => {
const target = object('5iw9TeSoLOU');
const duration = 1000;
const easing = 'ease-out';
const id = '6Gp8JI2cEMF';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script22 = function()
{
  player.once(() => {
const target = object('6hAY8EyIgxw');
const duration = 1000;
const easing = 'ease-out';
const id = '5VaS8A3GypW';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script23 = function()
{
  player.once(() => {
const target = object('6HIq0eTGlvu');
const duration = 1000;
const easing = 'ease-out';
const id = '6gyNYrlkL7g';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  player.once(() => {
const target = object('5eeJS5KxHCz');
const duration = 1000;
const easing = 'ease-out';
const id = '6hyR4cMAWHM';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script25 = function()
{
  const target = object('5xID6ry6QVY');
const duration = 750;
const easing = 'ease-out';
const id = '6LCRk8x9OGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('5xID6ry6QVY');
const duration = 750;
const easing = 'ease-out';
const id = '6LCRk8x9OGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  player.once(() => {
const target = object('6h9gNZOtgUS');
const duration = 1000;
const easing = 'ease-out';
const id = '6M19C1Zh4Lc';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6NU3EZHvqqQ');
const duration = 1000;
const easing = 'ease-out';
const id = '6Gp8JI2cEMF';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  player.once(() => {
const target = object('6r1z8OTzl1o');
const duration = 1000;
const easing = 'ease-out';
const id = '5VaS8A3GypW';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script30 = function()
{
  player.once(() => {
const target = object('6EeZEQ6DOQL');
const duration = 1000;
const easing = 'ease-out';
const id = '6gyNYrlkL7g';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script31 = function()
{
  player.once(() => {
const target = object('5cLD5HlAvWP');
const duration = 1000;
const easing = 'ease-out';
const id = '6hyR4cMAWHM';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  const target = object('67mMZzO30jh');
const duration = 750;
const easing = 'ease-out';
const id = '6LCRk8x9OGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('67mMZzO30jh');
const duration = 750;
const easing = 'ease-out';
const id = '6LCRk8x9OGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  player.once(() => {
const target = object('6cl6Cb5WqMy');
const duration = 1000;
const easing = 'ease-out';
const id = '6M19C1Zh4Lc';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script35 = function()
{
  player.once(() => {
const target = object('5yO715YBGNg');
const duration = 1000;
const easing = 'ease-out';
const id = '6Gp8JI2cEMF';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  player.once(() => {
const target = object('69VQYMNegke');
const duration = 1000;
const easing = 'ease-out';
const id = '5VaS8A3GypW';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script37 = function()
{
  player.once(() => {
const target = object('5kO7hbgpp0n');
const duration = 1000;
const easing = 'ease-out';
const id = '6gyNYrlkL7g';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script38 = function()
{
  player.once(() => {
const target = object('5Yfmcgvx9d4');
const duration = 1000;
const easing = 'ease-out';
const id = '6hyR4cMAWHM';
const shakeAmount = 2;
const delay = 500;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script39 = function()
{
  const target = object('5b3in5WHKTZ');
const duration = 750;
const easing = 'ease-out';
const id = '6LCRk8x9OGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5b3in5WHKTZ');
const duration = 750;
const easing = 'ease-out';
const id = '6LCRk8x9OGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('5g14mj5KZbK');
const duration = 1000;
const easing = 'ease-out';
const id = '6WCNQa603MU';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('6WrsFyRiin9');
const duration = 750;
const easing = 'ease-out';
const id = '5pKs4py9Q2G';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6WrsFyRiin9');
const duration = 750;
const easing = 'ease-out';
const id = '5pKs4py9Q2G_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('5uGFfzUvXAv');
const duration = 750;
const easing = 'ease-out';
const id = '6TTDYPoIobo';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('5uGFfzUvXAv');
const duration = 750;
const easing = 'ease-out';
const id = '6TTDYPoIobo_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6lbg7O2HBPO');
const duration = 750;
const easing = 'ease-out';
const id = '5xxVQb7lyPp';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('6lbg7O2HBPO');
const duration = 750;
const easing = 'ease-out';
const id = '5xxVQb7lyPp_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6lbg7O2HBPO');
const duration = 750;
const easing = 'ease-out';
const id = '5uz4OfrVLV2';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
