let points = 0n;
let clickPower = 1n;
let upgrade1Cost = 25n;
let levelUpgrade1 = 0n;
let multiplier = 1n;
let upgrade2Cost = 300n;
let levelUpgrade2 = 0n;
let upgrade3Cost = 5000n;
let upgrade3Percentage = 0n;
let PPS = 0n;
let upgrade4Cost = 50000n;
let levelUpgrade4 = 0n;
let levelUpgrade3 = 0n;
const pointsPerSecond = document.getElementById("pointsPerSecond");
const upgrade4 = document.getElementById("upgrade4");
const upgrade3 = document.getElementById("upgrade3");
const upgrade2 = document.getElementById("upgrade2");
const upgrade1 = document.getElementById("upgrade1");
const number = document.getElementById("number");
const button = document.getElementById("button");
function formatBigInt(bigIntValue) {
  const str = bigIntValue.toString();
  if (str.length <= 5) {
    return str;
  }
  const firstDigit = str[0];
  const decimals = str.slice(1, 3);
  const exponent = str.length - 1;
  return `${firstDigit}.${decimals}e${exponent}`;
}
function getPPS() {
  return (clickPower * upgrade3Percentage) / 100n;
}
button.onclick = function () {
  points = points + clickPower;
  number.textContent = `points: ${formatBigInt(points)}`;
};
upgrade1.onclick = function () {
  if (levelUpgrade1 >= 20n) return;
  if (points >= upgrade1Cost) {
    points = points - upgrade1Cost;
    levelUpgrade1 = levelUpgrade1 + 1n;
    clickPower = clickPower + 1n;
    clickPower = clickPower * multiplier;
    number.textContent = `points: ${formatBigInt(points)}`;
    button.textContent = `+${formatBigInt(clickPower)}`;
    if (levelUpgrade1 < 20n) {
      upgrade1Cost = upgrade1Cost + 25n + upgrade1Cost / 10n;
      upgrade1.textContent = `+1 click power, cost: ${formatBigInt(upgrade1Cost)}`;
    } else {
      upgrade1.textContent = `+1 click power, cost: MAX`;
    }
  }
};
upgrade2.onclick = function () {
  if (levelUpgrade2 >= 3n) return;
  if (points >= upgrade2Cost) {
    points = points - upgrade2Cost;
    levelUpgrade2 = levelUpgrade2 + 1n;
    multiplier = multiplier * 2n;
    clickPower = clickPower * multiplier;
    number.textContent = `points: ${formatBigInt(points)}`;
    button.textContent = `+${formatBigInt(clickPower)}`;
    if (levelUpgrade2 < 3n) {
      upgrade2Cost = upgrade2Cost * 3n;
      upgrade2.textContent = `double click power, cost: ${formatBigInt(upgrade2Cost)}`;
    } else {
      upgrade2.textContent = `double click power, cost: MAX`;
    }
  }
};
upgrade3.onclick = function () {
  if (levelUpgrade3 >= 5n) return;
  if (points >= upgrade3Cost) {
    points = points - upgrade3Cost;
    levelUpgrade3 = levelUpgrade3 + 1n;
    upgrade3Percentage = upgrade3Percentage + 25n;
    if (levelUpgrade3 < 5n) {
      upgrade3Cost = upgrade3Cost * 2n;
      upgrade3.textContent = `+25% points per seconf based on click power, cost: ${formatBigInt(upgrade3Cost)}`;
    } else {
      upgrade3.textContent = `+25% points per seconf based on click power, cost: MAX`;
    }
  }
};
upgrade4.onclick = function () {
  if (levelUpgrade4 >= 1n || levelUpgrade1 < 20n) return;
  if (points >= upgrade4Cost) {
    levelUpgrade4 = levelUpgrade4 + 1n;
    multiplier = multiplier * 4n;
    clickPower = clickPower * multiplier;
    points = points - upgrade4Cost;
    upgrade4.textContent = `4x click power, cost: MAX`;
    button.textContent = `+${formatBigInt(clickPower)}`;
    number.textContent = `points: ${formatBigInt(points)}`;
  }
};
setInterval(() => {
  if (levelUpgrade3 > 0n) {
    PPS = getPPS();
    points = points + PPS / 10n;
    number.textContent = `points: ${formatBigInt(points)}`;
    pointsPerSecond.textContent = `points per second: ${formatBigInt(PPS)}`;
  }
  if (levelUpgrade1 === 20n && levelUpgrade4 === 0n) {
    upgrade4.textContent = `4x click power, cost: ${formatBigInt(upgrade4Cost)}`;
  }
}, 100);
