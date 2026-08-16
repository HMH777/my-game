let points = 0n;
let clickPower = 1n;
let upgrade1Cost = 20n;
let adder = 0n;
let levelUpgrade1 = 0n;
let multiplier = 1n;
let upgrade2Cost = 250n;
let levelUpgrade2 = 0n;
let upgrade3Cost = 5000n;
let PPSPercentage = 0n;
let clickPowerPercentage = 0n;
let PPS = 0n;
let bonusPower = 0n;
let levelUpgrade5 = 0n;
let levelUpgrade7 = 0n;
let levelUpgrade8 = 0n;
let levelUpgrade9 = 0n;
let levelUpgrade6 = 0n;
let upgrade5Cost = 35000n;
let upgrade7Cost = 10000n;
let upgrade8Cost = (7n * (10n ** 5n)) + 50000n;
let upgrade9Cost = 5n * (10n ** 6n);
let upgrade6Cost = 30000n;
let upgrade4Cost = 50000n;
let levelUpgrade4 = 0n;
let levelUpgrade3 = 0n;
const deleteButton = document.getElementById("deleteButton");
const pointsPerSecond = document.getElementById("pointsPerSecond");
const comingSoonText = document.getElementById('comingSoonText'); // delete/change this on V0.03
const upgrade8 = document.getElementById('upgrade8');
const upgrade7 = document.getElementById("upgrade7");
const upgrade5 = document.getElementById("upgrade5");
const upgrade6 = document.getElementById("upgrade6");
const upgrade4 = document.getElementById("upgrade4");
const upgrade3 = document.getElementById("upgrade3");
const upgrade2 = document.getElementById("upgrade2");
const upgrade1 = document.getElementById("upgrade1");
const number = document.getElementById("number");
const button = document.getElementById("button");
const save = {
  saveGame() {
    const data = {
      points: points.toString(),
      clickPower: clickPower.toString(),
      upgrade1Cost: upgrade1Cost.toString(),
      adder: adder.toString(),
      levelUpgrade1: levelUpgrade1.toString(),
      multiplier: multiplier.toString(),
      upgrade2Cost: upgrade2Cost.toString(),
      levelUpgrade2: levelUpgrade2.toString(),
      upgrade3Cost: upgrade3Cost.toString(),
      PPSPercentage: PPSPercentage.toString(),
      PPS: PPS.toString(),
      upgrade4Cost: upgrade4Cost.toString(),
      levelUpgrade4: levelUpgrade4.toString(),
      levelUpgrade3: levelUpgrade3.toString(),
      levelUpgrade5: levelUpgrade5.toString(),
      upgrade5Cost: upgrade5Cost.toString(),
      upgrade6Cost: upgrade6Cost.toString(),
      levelUpgrade6: levelUpgrade6.toString(),
      levelUpgrade7: levelUpgrade7.toString(),
      upgrade7Cost: upgrade7Cost.toString(),
      clickPowerPercentage: clickPowerPercentage.toString(),
      bonusPower: bonusPower.toString(),
      upgrade8Cost: upgrade8Cost.toString(),
      upgrade9Cost: upgrade9Cost.toString(),
      levelUpgrade8: levelUpgrade8.toString(),
      levelUpgrade9: levelUpgrade9.toString(),
    };
    localStorage.setItem("gameSave", JSON.stringify(data));
  },
  loadGame() {
    const data = JSON.parse(localStorage.getItem("gameSave"));
    if (!data) {
      return;
    }
    points = BigInt(data.points);
    clickPower = BigInt(data.clickPower);
    upgrade1Cost = BigInt(data.upgrade1Cost);
    adder = BigInt(data.adder);
    levelUpgrade1 = BigInt(data.levelUpgrade1);
    multiplier = BigInt(data.multiplier);
    upgrade2Cost = BigInt(data.upgrade2Cost);
    levelUpgrade2 = BigInt(data.levelUpgrade2);
    upgrade3Cost = BigInt(data.upgrade3Cost);
    PPSPercentage = BigInt(data.PPSPercentage);
    PPS = BigInt(data.PPS);
    upgrade4Cost = BigInt(data.upgrade4Cost);
    levelUpgrade4 = BigInt(data.levelUpgrade4);
    levelUpgrade3 = BigInt(data.levelUpgrade3);
    levelUpgrade5 = BigInt(data.levelUpgrade5);
    upgrade5Cost = BigInt(data.upgrade5Cost);
    upgrade6Cost = BigInt(data.upgrade6Cost);
    levelUpgrade6 = BigInt(data.levelUpgrade6);
    levelUpgrade7 = BigInt(data.levelUpgrade7);
    upgrade7Cost = BigInt(data.upgrade7Cost);
    clickPowerPercentage = BigInt(data.clickPowerPercentage);
    bonusPower = BigInt(data.bonusPower);
    upgrade8Cost = BigInt(data.upgrade8Cost)
    upgrade9Cost = BigInt(data.upgrade9Cost);
    levelUpgrade8 = BigInt(data.levelUpgrade8);
    levelUpgrade9 = BigInt(data.levelUpgrade9);
    updateUI();
  },
  deleteSave() {
    localStorage.removeItem("gameSave");
  },
};
function updateUI() {
  if (number) {
    number.textContent = `points: ${formatBigInt(points)}`;
  }
  if (button) {
    button.textContent = `+${formatBigInt(clickPower + bonusPower)}`;
  }
  if (pointsPerSecond) {
    pointsPerSecond.textContent = `points per second: ${formatBigInt(PPS)}`;
  }
  if (upgrade1) {
    if (levelUpgrade1 === 20n) {
      upgrade1.textContent = "1+ click power, cost: MAX";
    } else {
      upgrade1.textContent = `1+ click power, cost: ${formatBigInt(upgrade1Cost)}`;
    }
  }
  if (upgrade2) {
    if (levelUpgrade2 === 3n) {
      upgrade2.textContent = "2x click power, cost: MAX";
    } else {
      upgrade2.textContent = `2x click power, cost: ${formatBigInt(upgrade2Cost)}`;
    }
  }
  if (upgrade3) {
    if (levelUpgrade3 === 5n) {
      upgrade3.textContent =
        "+25% points per second based on click power, cost: MAX";
    } else {
      upgrade3.textContent = `+25% points per second based on click power, cost: ${formatBigInt(upgrade3Cost)}`;
    }
  }
  if (upgrade4) {
    if (levelUpgrade4 === 1n) {
      upgrade4.textContent = "4x click power, cost: MAX";
    } else if (levelUpgrade1 < 20n) {
      upgrade4.textContent = "???, unlock by maxing upgrade 1";
    } else {
      upgrade4.textContent = `4x click power, ${formatBigInt(upgrade4Cost)}`;
    }
  }
  if (upgrade5) {
    if (levelUpgrade5 === 2n) {
      upgrade5.textContent = "1.5x points per second, cost: MAX";
    } else if (levelUpgrade4 < 1n || levelUpgrade3 < 5n || levelUpgrade2 < 3n) {
      upgrade5.textContent = "???, unlock by maxing upgrades 1-4";
    } else {
      upgrade5.textContent = `1.5x points per second, cost: ${formatBigInt(upgrade5Cost)}`;
    }
  }
  if (upgrade6) {
    if (levelUpgrade6 === 15n) {
      upgrade6.textContent = "1.05x click power, cost: MAX";
    } else if (levelUpgrade5 < 2n) {
      upgrade6.textContent = "???, unlock by maxing upgrades 1-5";
    } else {
      upgrade6.textContent = `1.05x click power, cost: ${formatBigInt(upgrade6Cost)}`;
    }
  }
  if (upgrade7) {
    if (levelUpgrade7 === 10n) {
      upgrade7.textContent =
        "+1% of points per second to click power, cost: MAX";
    } else if (levelUpgrade5 < 2n) {
      upgrade7.textContent = "???, unlock by maxing upgrades 1-5";
    } else {
      upgrade7.textContent = `+1% of points per second to click power, cost: ${formatBigInt(upgrade7Cost)}`;
    }
  }
  if (upgrade8) {
    if (levelUpgrade8 === 1n){
      upgrade8.textContent = '3x points per second and +15% of points per second to clikc power, cost: MAX'
    } else if (levelUpgrade6 < 15n || levelUpgrade7 < 10n){
      upgrade8.textContent = '???, unlock by maxing upgrades 1-7'
    } else {
      upgrade8.textContent = `3x points per second and +15% of points per second to clikc power, cost: ${formatBigInt(upgrade8Cost)}`
    }
  }
  if (upgrade9){
    if (levelUpgrade8 < 1n){
      upgrade9.textContent = '???, unlock by maxing upgrades 1-8'
    } else {
      upgrade9.textContent = `unlocks... something (coming soon), cost: UNAVAILABLE`
    }
  }
}
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
  return (clickPower * PPSPercentage) / 100n;
}
if (button) {
  button.onclick = function () {
    points = points + clickPower + bonusPower;
  };
}
if (upgrade1) {
  upgrade1.onclick = function () {
    if (levelUpgrade1 >= 20n) return;
    if (points >= upgrade1Cost) {
      points = points - upgrade1Cost;
      levelUpgrade1++;
      adder++;
      clickPower = (1n + adder) * multiplier;
      if (levelUpgrade1 < 20n) {
        upgrade1Cost = upgrade1Cost + 20n + upgrade1Cost / 10n;
      }
    }
  };
}
if (upgrade2) {
  upgrade2.onclick = function () {
    if (levelUpgrade2 >= 3n) return;
    if (points >= upgrade2Cost) {
      points = points - upgrade2Cost;
      levelUpgrade2++;
      multiplier = multiplier * 2n;
      clickPower = (1n + adder) * multiplier;
      if (levelUpgrade2 < 3n) {
        upgrade2Cost = upgrade2Cost * 3n;
      }
    }
  };
}
if (upgrade3) {
  upgrade3.onclick = function () {
    if (levelUpgrade3 >= 5n) return;
    if (points >= upgrade3Cost) {
      points = points - upgrade3Cost;
      levelUpgrade3++;
      PPSPercentage = PPSPercentage + 25n;
      if (levelUpgrade3 < 5n) {
        upgrade3Cost = (upgrade3Cost * 180n) / 100n;
      }
    }
  };
}
if (upgrade4) {
  upgrade4.onclick = function () {
    if (levelUpgrade4 >= 1n || levelUpgrade1 < 20n) return;
    if (points >= upgrade4Cost) {
      levelUpgrade4++;
      multiplier = multiplier * 4n;
      clickPower = (1n + adder) * multiplier;
      points = points - upgrade4Cost;
    }
  };
}
if (upgrade5) {
  upgrade5.onclick = function () {
    if (levelUpgrade5 >= 2n) return;
    if (levelUpgrade4 < 1n || levelUpgrade3 < 5n || levelUpgrade2 < 3) return;
    if (points >= upgrade5Cost) {
      levelUpgrade5++;
      PPSPercentage = (PPSPercentage * 150n) / 100n;
      points = points - upgrade5Cost;
      if (levelUpgrade5 < 2n) {
        upgrade5Cost = (upgrade5Cost * 250n) / 100n;
      }
    }
  };
}
if (upgrade6) {
  upgrade6.onclick = function () {
    if (levelUpgrade6 >= 15n || levelUpgrade5 < 2n) return;
    if (points >= upgrade6Cost) {
      levelUpgrade6++;
      clickPower = (clickPower * 105n) / 100n;
      points = points - upgrade6Cost;
      if (levelUpgrade6 < 15n) {
        upgrade6Cost = (upgrade6Cost * 11n) / 10n;
      }
    }
  };
}
if (upgrade7) {
  upgrade7.onclick = function () {
    if (levelUpgrade5 < 2n || levelUpgrade7 >= 10n) return;
    if (points >= upgrade7Cost) {
      levelUpgrade7++;
      clickPowerPercentage++;
      bonusPower = PPS * clickPowerPercentage / 100n;
      points = points - upgrade7Cost;
      if (levelUpgrade7 < 10n) {
        upgrade7Cost = (upgrade7Cost * 130n) / 100n
      }
    }
  }
}
if (upgrade8){
  upgrade8.onclick = function () {
    if (levelUpgrade6 < 15n || levelUpgrade7 < 10n || levelUpgrade8 >= 1n) return;
    if (points >= upgrade8Cost){
      levelUpgrade8++;
      PPSPercentage = PPSPercentage * 3n;
      PPS = getPPS()
      clickPowerPercentage = clickPowerPercentage + 15n;
      bonusPower = PPS * clickPowerPercentage / 100n
      points = points - upgrade8Cost
    }
  }
}
if (deleteButton) {
  deleteButton.onclick = function () {
    let deleteOrNo = window.prompt(
      "do you want to delete your save? This will delete ALL of your progress! (yes or no)",
    );
    if (deleteOrNo === "yes") {
      save.deleteSave();
    }
  };
}
setInterval(() => {
  if (levelUpgrade3 > 0n) {
    PPS = getPPS();
    points = points + PPS / 10n;
  }
  updateUI();
}, 100);
setInterval(() => {
  save.saveGame();
}, 5000);
window.onload = save.loadGame();
