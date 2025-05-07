function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XV1rIl4odc":
        Script1();
        break;
      case "6BUVIZGlryN":
        Script2();
        break;
      case "6cbEmeAWTG0":
        Script3();
        break;
      case "6RkiuFJLajn":
        Script4();
        break;
      case "5fEoOeXJJcp":
        Script5();
        break;
      case "6GOEWjdHpFS":
        Script6();
        break;
      case "5q6JMubcEvv":
        Script7();
        break;
      case "68DzLK47fAy":
        Script8();
        break;
      case "65XkCtrIW6r":
        Script9();
        break;
      case "5yEnTLn9v4x":
        Script10();
        break;
      case "6X08VBinYRD":
        Script11();
        break;
      case "6ZzbYKUDeY2":
        Script12();
        break;
      case "64fgmD91Ymy":
        Script13();
        break;
      case "5ln4eDNNX2Y":
        Script14();
        break;
      case "6NJBzssUb2K":
        Script15();
        break;
      case "6PIt5l2qVTQ":
        Script16();
        break;
      case "5fpaH8qz8zN":
        Script17();
        break;
      case "641bAVl9Nqd":
        Script18();
        break;
      case "5aiiafhOovP":
        Script19();
        break;
      case "6cTQZcEicmX":
        Script20();
        break;
      case "6BqY8ZPiJj9":
        Script21();
        break;
      case "6THMCZsAabh":
        Script22();
        break;
      case "5iXwuMBC5kG":
        Script23();
        break;
      case "5lD5qBWgxfO":
        Script24();
        break;
      case "6UA54xK84eU":
        Script25();
        break;
      case "5qPzWAe6uUx":
        Script26();
        break;
      case "5ZBfu80TNKq":
        Script27();
        break;
      case "6cP4aU8pBAp":
        Script28();
        break;
      case "65wvp8EfTE9":
        Script29();
        break;
      case "5tJCWXlQmBx":
        Script30();
        break;
      case "6bJ88qMTlXz":
        Script31();
        break;
      case "5ZXyhYfouEb":
        Script32();
        break;
      case "6TNQqxJSN2s":
        Script33();
        break;
      case "5crO3oI5U34":
        Script34();
        break;
      case "68oKs5xZ4yw":
        Script35();
        break;
      case "6AIeLWCsk0O":
        Script36();
        break;
      case "6emGFnLsR7x":
        Script37();
        break;
      case "602nLgZieyr":
        Script38();
        break;
      case "6jV7zU96Bao":
        Script39();
        break;
      case "6IEUiM3z3L1":
        Script40();
        break;
      case "6hqVRbTwwqJ":
        Script41();
        break;
      case "6ECKvYgncoL":
        Script42();
        break;
      case "5YWh2TzUi9O":
        Script43();
        break;
      case "61JzFUcJnWg":
        Script44();
        break;
      case "69rkd8tSyMq":
        Script45();
        break;
      case "5lKOAB1Vb3t":
        Script46();
        break;
      case "6UHz5rdjl8M":
        Script47();
        break;
      case "6PAMePdwfiw":
        Script48();
        break;
      case "6IhJK1qYRZF":
        Script49();
        break;
      case "5XYIvlBBdVr":
        Script50();
        break;
      case "6eP09MJaddD":
        Script51();
        break;
      case "6OIQF2mItrN":
        Script52();
        break;
      case "6WFfwGMa2lb":
        Script53();
        break;
      case "5rlTyTORAtG":
        Script54();
        break;
      case "6guF660BDYa":
        Script55();
        break;
      case "6ZS1H4q5S4J":
        Script56();
        break;
      case "6ZiSLsx7wMY":
        Script57();
        break;
      case "5tDshLUHPCe":
        Script58();
        break;
      case "6JFzmJdntXM":
        Script59();
        break;
      case "6qEHYfRcKjX":
        Script60();
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
const target = object('5wXFvAEVLSS');
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
  const target = object('5Xce63HENfs');
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
  const target = object('5Xce63HENfs');
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
  const target = object('5Xce63HENfs');
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
const target = object('6aEb2dMO4I7');
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
const target = object('5aXkFQhHvud');
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
const target = object('5zRsE1C16lb');
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
const target = object('6C7kVH8LIqi');
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
const target = object('6Y5QBvc3SzD');
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
  const target = object('5yYF44y0HeX');
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
  const target = object('5yYF44y0HeX');
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
const target = object('5yNbP3aRq9V');
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
const target = object('6qM6M0HvZPz');
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
const target = object('5oS6qcUC1jy');
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
const target = object('5f4OmMbrNwm');
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
const target = object('6CgYGkm7JTo');
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
  const target = object('5nZNahtohXD');
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
  const target = object('5nZNahtohXD');
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
  const target = object('5nZNahtohXD');
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
const target = object('6cxZmk8U7Zr');
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
const target = object('62ZnRnrqiWq');
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
const target = object('6WZNkiEyJ8D');
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
const target = object('5ZuzFrCzXdC');
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
const target = object('6h2vhlMgbpU');
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
  const target = object('5nUW5Zto4tq');
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
  const target = object('5nUW5Zto4tq');
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
const target = object('6FEHVXkp68C');
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
const target = object('6YJzQAtC1HN');
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
const target = object('5j6kWKxK9k4');
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
const target = object('6IdZrkZwZYx');
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
const target = object('6CDuLTqquIn');
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
  const target = object('6hI6uHZUATS');
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
  const target = object('6hI6uHZUATS');
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
const target = object('6LPe7oqBnIQ');
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
const target = object('69XRsJwwNRJ');
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
const target = object('5lPEroeS6HU');
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
const target = object('5yKdY8hBRnD');
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
const target = object('5V0u6VAI77e');
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
  const target = object('5z1WFZgspeZ');
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
  const target = object('5z1WFZgspeZ');
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
  const target = object('66avnYiD5lG');
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

window.Script42 = function()
{
  const target = object('66avnYiD5lG');
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

window.Script43 = function()
{
  const target = object('66avnYiD5lG');
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

window.Script44 = function()
{
  const target = object('5ayjXOsAKWh');
const duration = 750;
const easing = 'ease-out';
const id = '6BnW22rqECF';
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
  const target = object('5ayjXOsAKWh');
const duration = 750;
const easing = 'ease-out';
const id = '6BnW22rqECF_reverse';
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
  const target = object('5ayjXOsAKWh');
const duration = 750;
const easing = 'ease-out';
const id = '6YRdkRxp6Jz';
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

window.Script47 = function()
{
  const target = object('67x99WDQ81W');
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

window.Script48 = function()
{
  const target = object('67x99WDQ81W');
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

window.Script49 = function()
{
  const target = object('5nE9KKkcAuF');
const duration = 750;
const easing = 'ease-out';
const id = '6Vh6SptscZZ';
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

window.Script50 = function()
{
  const target = object('5nE9KKkcAuF');
const duration = 750;
const easing = 'ease-out';
const id = '6Vh6SptscZZ_reverse';
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

window.Script51 = function()
{
  const target = object('5nE9KKkcAuF');
const duration = 750;
const easing = 'ease-out';
const id = '6EZuuF0dvLU';
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

window.Script52 = function()
{
  const target = object('6cKq1jrIcCn');
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

window.Script53 = function()
{
  const target = object('6cKq1jrIcCn');
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

};
