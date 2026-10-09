let points = 0n;
let totalPoints = 0n;
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
let PPSMultiplier = 1n; // this is from prestige
let prestigeMultiplier = 1n;
let prestigeUpgrade1Cost = 1n; // prestige points
let prestigeUpgrade2Cost = 4n; // prestige points
let prestigeUpgrade3Cost = 4n; // prestige points
let levelPrestigeUpgrade3 = 0n;
let levelPrestigeUpgrade1 = 0n;
let levelPrestigeUpgrade2 = 0n;
let maxLevelPrestigeUp3 = 0n;
let PPOR = 0n; // PPOR: Prestige Points On Reset
let bonusPower = 0n;
let maxLevelUp1 = 0n;
let maxLevelUp3 = 0n;
let maxLevelUp4 = 0n;
let maxLevelUp7 = 0n;
let maxLevelUp8 = 0n;
let maxLevelUp9 = 0n;
let prestigePoints = 0n;
let levelUpgrade5 = 0n;
let levelUpgrade7 = 0n;
let levelUpgrade8 = 0n;
let levelUpgrade6 = 0n;
let upgrade5Cost = 35000n;
let upgrade7Cost = 10000n;
let levelUpgrade9 = 0n;
let upgrade9Cost = 2n * 10n ** 6n + 5n * 10n ** 5n;
let upgrade8Cost = 6n * 10n ** 5n;
let prestigeUnlocked = false;
let upgrade6Cost = 30000n;
let upgrade4Cost = 50000n;
let levelUpgrade4 = 0n;
let levelUpgrade3 = 0n;
const deleteButton = document.getElementById("deleteButton");
const prestigeButton = document.getElementById("prestigeButton");
const tabName = document.getElementById("tabName");
const prestigeTab = document.getElementById("prestigeTab");
const prestigeNumber = document.getElementById("prestigeNumber");
const achTabName = document.getElementById("achTabName");
const languageSelector = document.getElementById("languageSelector");
const pointsPerSecond = document.getElementById("pointsPerSecond");
const upgrade8 = document.getElementById("upgrade8");
const upgrade9 = document.getElementById("upgrade9");
const acheivementElement = document.querySelectorAll(".acheivement");
const upgrade7 = document.getElementById("upgrade7");
const upgrade5 = document.getElementById("upgrade5");
const upgrade6 = document.getElementById("upgrade6");
const upgrade4 = document.getElementById("upgrade4");
const upgrade3 = document.getElementById("upgrade3");
const upgrade2 = document.getElementById("upgrade2");
const upgrade1 = document.getElementById("upgrade1");
const prestigeUpgrade1 = document.getElementById("prestigeUpgrade1");
const prestigeUpgrade2 = document.getElementById("prestigeUpgrade2");
const prestigeUpgrade3 = document.getElementById("prestigeUpgrade3");
const number = document.getElementById("number");
const button = document.getElementById("button");
const languageSave = "language";
const acheivements = {
  ach1: {
    state: "locked",
  },
  ach2: {
    state: "locked",
  },
  ach3: {
    state: "locked",
  },
  ach4: {
    state: "locked",
  },
  ach5: {
    state: "locked",
  },
  ach6: {
    state: "locked",
  },
  ach7: {
    state: "locked",
  },
  ach8: {
    state: "locked",
  },
  ach9: {
    state: "locked",
  },
};
let language = localStorage.getItem(languageSave) || "en";
if (languageSelector) {
  languageSelector.value = language;
  languageSelector.addEventListener("change", () => {
    language = languageSelector.value;
    localStorage.setItem(languageSave, language);
    updateUI();
  });
}
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
      levelUpgrade8: levelUpgrade8.toString(),
      totalPoints: totalPoints.toString(),
      maxLevelUp1: maxLevelUp1.toString(),
      maxLevelUp3: maxLevelUp3.toString(),
      maxLevelUp4: maxLevelUp4.toString(),
      maxLevelUp7: maxLevelUp7.toString(),
      maxLevelUp8: maxLevelUp8.toString(),
      upgrade9Cost: upgrade9Cost.toString(),
      levelUpgrade9: levelUpgrade9.toString(),
      maxLevelUp9: maxLevelUp9.toString(),
      prestigePoints: prestigePoints.toString(),
      prestigeUnlocked: prestigeUnlocked,
      PPOR: PPOR.toString(),
      levelPrestigeUpgrade1: levelPrestigeUpgrade1.toString(),
      prestigeUpgrade1Cost: prestigeUpgrade1Cost.toString(),
      prestigeMultiplier: prestigeMultiplier.toString(),
      PPSMultiplier: PPSMultiplier.toString(),
      levelPrestigeUpgrade2: levelPrestigeUpgrade2.toString(),
      prestigeUpgrade2Cost: prestigeUpgrade2Cost.toString(),
      maxLevelPrestigeUp3: maxLevelPrestigeUp3.toString(),
      prestigeUpgrade3Cost: prestigeUpgrade3Cost.toString(),
      levelPrestigeUpgrade3: levelPrestigeUpgrade3.toString(),
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
    upgrade8Cost = BigInt(data.upgrade8Cost);
    levelUpgrade8 = BigInt(data.levelUpgrade8);
    totalPoints = BigInt(data.totalPoints);
    maxLevelUp1 = BigInt(data.maxLevelUp1);
    maxLevelUp3 = BigInt(data.maxLevelUp3);
    maxLevelUp4 = BigInt(data.maxLevelUp4);
    maxLevelUp7 = BigInt(data.maxLevelUp7);
    maxLevelUp8 = BigInt(data.maxLevelUp8);
    levelUpgrade9 = BigInt(data.levelUpgrade9);
    upgrade9Cost = BigInt(data.upgrade9Cost);
    maxLevelUp9 = BigInt(data.maxLevelUp9);
    prestigePoints = BigInt(data.prestigePoints);
    prestigeUnlocked = data.prestigeUnlocked;
    PPOR = BigInt(data.PPOR);
    levelPrestigeUpgrade1 = BigInt(data.levelPrestigeUpgrade1);
    prestigeMultiplier = BigInt(data.prestigeMultiplier);
    prestigeUpgrade1Cost = BigInt(data.prestigeUpgrade1Cost);
    PPSMultiplier = BigInt(data.PPSMultiplier);
    levelPrestigeUpgrade2 = BigInt(data.levelPrestigeUpgrade2);
    prestigeUpgrade2Cost = BigInt(data.prestigeUpgrade2Cost);
    maxLevelPrestigeUp3 = BigInt(data.maxLevelPrestigeUp3);
    prestigeUpgrade3Cost = BigInt(data.prestigeUpgrade3Cost);
    levelPrestigeUpgrade3 = BigInt(data.levelPrestigeUpgrade3);
    updateUI();
  },
  deleteSave() {
    localStorage.removeItem("gameSave");
    updateUI();
  },
};
function updateUI() {
  if (number) {
    if (language === "en") {
      number.textContent = `points: ${formatBigInt(points)}`;
    } else {
      number.textContent = `pontos: ${formatBigInt(points)}`;
    }
  }
  if (button) {
    button.textContent = `+${formatBigInt(clickPower + bonusPower)}`;
  }
  if (pointsPerSecond) {
    if (language === "en") {
      pointsPerSecond.textContent = `points per second: ${formatBigInt(PPS)}`;
    } else {
      pointsPerSecond.textContent = `pontos por segundo: ${formatBigInt(PPS)}`;
    }
  }
  if (upgrade1) {
    if (language === "en") {
      if (levelUpgrade1 === 20n) {
        upgrade1.textContent = "1+ click power, cost: MAX";
      } else {
        upgrade1.textContent = `1+ click power, cost: ${formatBigInt(upgrade1Cost)}`;
      }
    } else {
      if (levelUpgrade1 === 20n) {
        upgrade1.textContent = "1+ poder de clique, custo: MÁXIMO";
      } else {
        upgrade1.textContent = `1+ poder de clique, custo: ${formatBigInt(upgrade1Cost)}`;
      }
    }
  }
  if (upgrade2) {
    if (language === "en") {
      if (levelUpgrade2 === 3n) {
        upgrade2.textContent = "2x click power, cost: MAX";
      } else {
        upgrade2.textContent = `2x click power, cost: ${formatBigInt(upgrade2Cost)}`;
      }
    } else {
      if (levelUpgrade2 === 3n) {
        upgrade2.textContent = "2x poder de clique, custo: MÁXIMO";
      } else {
        upgrade2.textContent = `2x poder de clique, custo: ${formatBigInt(upgrade2Cost)}`;
      }
    }
  }
  if (upgrade3) {
    if (language === "en") {
      if (levelUpgrade3 === 5n) {
        upgrade3.textContent =
          "+25% points per second based on click power, cost: MAX";
      } else {
        upgrade3.textContent = `+25% points per second based on click power, cost: ${formatBigInt(upgrade3Cost)}`;
      }
    } else {
      if (levelUpgrade3 === 5n) {
        upgrade3.textContent =
          "+25% de pontos por segundo baseado no poder de clique, custo: MÁXIMO";
      } else {
        upgrade3.textContent = `+25% de pontos por segundo baseado no poder de clique, custo: ${formatBigInt(upgrade3Cost)}`;
      }
    }
  }
  if (upgrade4) {
    if (language === "en") {
      if (levelUpgrade4 === 1n) {
        upgrade4.textContent = "4x click power, cost: MAX";
      } else if (levelUpgrade1 < 20n) {
        upgrade4.textContent = "???, unlock by maxing upgrade 1";
      } else {
        upgrade4.textContent = `4x click power, cost: ${formatBigInt(upgrade4Cost)}`;
      }
    } else {
      if (levelUpgrade4 === 1n) {
        upgrade4.textContent = "4x poder de clique, custo: MÁXIMO";
      } else if (levelUpgrade1 < 20n) {
        upgrade4.textContent = "???, desbloqueie se maximizar o upgrade 1";
      } else {
        upgrade4.textContent = `4x poder de clique, custo: ${formatBigInt(upgrade4Cost)}`;
      }
    }
  }
  if (upgrade5) {
    if (language === "en") {
      if (levelUpgrade5 === 2n) {
        upgrade5.textContent = "1.5x points per second, cost: MAX";
      } else if (
        levelUpgrade4 < 1n ||
        levelUpgrade3 < 5n ||
        levelUpgrade2 < 3n
      ) {
        upgrade5.textContent = "???, unlock by maxing upgrades 1-4";
      } else {
        upgrade5.textContent = `1.5x points per second, cost: ${formatBigInt(upgrade5Cost)}`;
      }
    } else {
      if (levelUpgrade5 === 2n) {
        upgrade5.textContent = "1.5x pontos por segundo, custo: MÁXIMO";
      } else if (
        levelUpgrade4 < 1n ||
        levelUpgrade3 < 5n ||
        levelUpgrade2 < 3n
      ) {
        upgrade5.textContent =
          "???, desbloqueie se maximizar os upgrades 1 à 4";
      } else {
        upgrade5.textContent = `1.5x pontos por segundo, custo: ${formatBigInt(upgrade5Cost)}`;
      }
    }
  }
  if (upgrade6) {
    if (language === "en") {
      if (levelUpgrade6 === 15n) {
        upgrade6.textContent = "1.05x click power, cost: MAX";
      } else if (levelUpgrade5 < 2n) {
        upgrade6.textContent = "???, unlock by maxing upgrades 1-5";
      } else {
        upgrade6.textContent = `1.05x click power, cost: ${formatBigInt(upgrade6Cost)}`;
      }
    } else {
      if (levelUpgrade6 === 15n) {
        upgrade6.textContent = "1.05x poder de clique, custo: MÁXIMO";
      } else if (levelUpgrade5 < 2n) {
        upgrade6.textContent =
          "???, desbloqueie se maximizar os upgrades 1 à 5";
      } else {
        upgrade6.textContent = `1.05x poder de clique, custo: ${formatBigInt(upgrade6Cost)}`;
      }
    }
  }
  if (upgrade7) {
    if (language === "en") {
      if (levelUpgrade7 === 10n) {
        upgrade7.textContent =
          "+1% of points per second to click power, cost: MAX";
      } else if (levelUpgrade5 < 2n) {
        upgrade7.textContent = "???, unlock by maxing upgrades 1-5";
      } else {
        upgrade7.textContent = `+1% of points per second to click power, cost: ${formatBigInt(upgrade7Cost)}`;
      }
    } else {
      if (levelUpgrade7 === 10n) {
        upgrade7.textContent =
          "+1% de pontos por segundo convertido em poder de clique, custo: MÁXIMO";
      } else if (levelUpgrade5 < 2n) {
        upgrade7.textContent =
          "???, desbloqueie se maximizar os upgrades 1 à 5";
      } else {
        upgrade7.textContent = `+1% de pontos por segundo convertido em poder de clique, custo: ${formatBigInt(upgrade7Cost)}`;
      }
    }
  }
  if (upgrade8) {
    if (language === "en") {
      if (levelUpgrade8 === 1n) {
        upgrade8.textContent =
          "3x points per second and +15% of points per second to click power, cost: MAX";
      } else if (levelUpgrade6 < 15n || levelUpgrade7 < 10n) {
        upgrade8.textContent = "???, unlock by maxing upgrades 1-7";
      } else {
        upgrade8.textContent = `3x points per second and +15% of points per second to click power, cost: ${formatBigInt(upgrade8Cost)}`;
      }
    } else {
      if (levelUpgrade8 === 1n) {
        upgrade8.textContent =
          "3x pontos por segundo e +15% de pontos por segundo convertido para poder de clique, custo: MÁXIMO";
      } else if (levelUpgrade6 < 15n || levelUpgrade7 < 10n) {
        upgrade8.textContent =
          "???, desbloqueie se maximixzar os upgrades 1 à 7";
      } else {
        upgrade8.textContent = `3x pontos por segundo e +15% de pontos por segundo convertido para poder de clique, custo: ${formatBigInt(upgrade8Cost)}`;
      }
    }
  }
  if (upgrade9) {
    if (language === "en") {
      if (levelUpgrade9 === 1n) {
        upgrade9.textContent = "unlocks prestige, cost: MAX";
      } else if (levelUpgrade8 === 0n) {
        upgrade9.textContent = "???, unlock by maxing upgrades 1-8";
      } else {
        upgrade9.textContent = `unlocks... something, cost: ${formatBigInt(upgrade9Cost)}`;
      }
    } else {
      if (levelUpgrade9 === 1n) {
        upgrade9.textContent = "desbloqueia prestígio, custo: MÁXIMO";
      } else if (levelUpgrade8 === 0n) {
        upgrade9.textContent =
          "???, desbloqueie se maximizar os upgrades 1 à 8";
      } else {
        upgrade9.textContent = `desbloqueia... alguma coisa, custo: ${formatBigInt(upgrade9Cost)}`;
      }
    }
  }
  if (deleteButton) {
    if (language === "en") {
      deleteButton.textContent = "wipe save";
    } else {
      deleteButton.textContent = "deletar save";
    }
  }
  if (tabName) {
    if (language === "en") {
      tabName.textContent = "Settings";
    } else {
      tabName.textContent = "Configurações";
    }
  }
  if (achTabName) {
    if (language === "en") {
      achTabName.textContent = "Acheivements";
    } else {
      achTabName.textContent = "Conquistas";
    }
  }
  if (prestigeUnlocked) {
    prestigeTab.textContent = "🌀";
    if (prestigeNumber) {
      if (language === "en") {
        prestigeNumber.textContent = `prestige points: ${formatBigInt(prestigePoints)}`;
      } else {
        prestigeNumber.textContent = `pontos de prestígio: ${formatBigInt(prestigePoints)}`;
      }
    }
  }
  if (prestigeButton) {
    if (language === "en") {
      if (prestigeUnlocked) {
        prestigeButton.textContent = `click here, reset EVERYTHING before prestige, and gain ${formatBigInt(PPOR)} prestige points`;
      }
    } else {
      if (prestigeUnlocked) {
        prestigeButton.textContent = `clique aqui, reinicie TUDO antes do prestígio e ganhe ${formatBigInt(PPOR)} pontos de prestígio`;
      }
    }
  }
  if (prestigeUpgrade1) {
    if (language === "en") {
      if (prestigeUnlocked) {
        if (levelPrestigeUpgrade1 === 0n) {
          prestigeUpgrade1.textContent = `5x click power, cost: ${formatBigInt(prestigeUpgrade1Cost)}`;
        } else {
          prestigeUpgrade1.textContent = "5x click power, cost: MAX";
        }
      } else {
        if (language === "en") {
          prestigeUpgrade1.textContent = "???, unlock prestige to see";
        } else {
          prestigeUpgrade1.textContent = "???, desbloqueie prestígio para ver";
        }
      }
    } else {
      if (prestigeUnlocked) {
        if (levelPrestigeUpgrade1 === 0n) {
          prestigeUpgrade1.textContent = `5x poder de clique, custo: ${formatBigInt(prestigeUpgrade1Cost)}`;
        } else {
          prestigeUpgrade1.textContent = "5x poder de clique, custo: MÁXIMO";
        }
      } else {
        if (language === "en") {
          prestigeUpgrade1.textContent = "???, unlock prestige to see";
        } else {
          prestigeUpgrade1.textContent = "???, desbloqueie prestígio para ver";
        }
      }
    }
  }
  if (prestigeUpgrade2) {
    if (prestigeUnlocked) {
      if (levelPrestigeUpgrade2 === 0) {
        if (language === "en") {
          prestigeUpgrade2.textContent = `3x points per second, cost: ${formatBigInt(prestigeUpgrade2Cost)}`;
        } else {
          prestigeUpgrade2.textContent = `3x pontos por segundo, custo: ${formatBigInt(prestigeUpgrade2Cost)}`;
        }
      } else {
        if (language === "en") {
          prestigeUpgrade2.textContent = "3x points per second, cost: MAX";
        } else {
          prestigeUpgrade2.textContent = "3x pontos por segundo, custo: MÁXIMO";
        }
      }
    } else {
      if (language === "en") {
        prestigeUpgrade1.textContent = "???, unlock prestige to see";
      } else {
        prestigeUpgrade1.textContent = "???, desbloqueie prestígio para ver";
      }
    }
  }
  if (prestigeUpgrade3) {
    if (prestigeUnlocked) {
      if (
        levelPrestigeUpgrade3 === 0n &&
        levelPrestigeUpgrade1 === 1n &&
        levelPrestigeUpgrade2 === 1n
      ) {
        if (language === "en") {
          prestigeUpgrade3.textContent = `2x points per second and 2x click power, cost: ${formatBigInt(prestigeUpgrade3Cost)}`;
        } else {
          prestigeUpgrade3.textContent = `2x pontos por segundo e 2x poder de clique, custo: ${formatBigInt(prestigeUpgrade3Cost)}`;
        }
      } else if (
        levelPrestigeUpgrade3 === 1n &&
        levelPrestigeUpgrade1 === 1n &&
        levelPrestigeUpgrade2 === 1n
      ) {
        if (language === "en") {
          prestigeUpgrade3.textContent = `2x points per second and 2x click power, cost: MAX`;
        } else {
          prestigeUpgrade3.textContent = `2x pontos por segundo e 2x poder de clique, custo: MÁXIMO`;
        }
      } else {
        if (language === "en") {
          prestigeUpgrade3.textContent = `max prestige upgrades 1 and 2 to unlock`;
        } else {
          prestigeUpgrade3.textContent = `mmaximize as melhorias de prestígio 1 e 2 para desbloquear`;
        }
      }
    } else {
      if (language === "en") {
        prestigeUpgrade1.textContent = "???, unlock prestige to see";
      } else {
        prestigeUpgrade1.textContent = "???, desbloqueie prestígio para ver";
      }
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
function prestige() {
  points = 0n;
  clickPower = 1n;
  upgrade1Cost = 20n;
  adder = 0n;
  levelUpgrade1 = 0n;
  multiplier = 1n;
  upgrade2Cost = 250n;
  levelUpgrade2 = 0n;
  upgrade3Cost = 5000n;
  PPSPercentage = 0n;
  clickPowerPercentage = 0n;
  bonusPower = 0n;
  PPOR = 0n;
  PPS = 0n;
  levelUpgrade5 = 0n;
  levelUpgrade7 = 0n;
  levelUpgrade8 = 0n;
  levelUpgrade6 = 0n;
  upgrade5Cost = 35000n;
  upgrade7Cost = 10000n;
  levelUpgrade9 = 0n;
  upgrade9Cost = 2n * 10n ** 6n + 5n * 10n ** 5n;
  upgrade8Cost = 6n * 10n ** 5n;
  upgrade6Cost = 30000n;
  upgrade4Cost = 50000n;
  levelUpgrade4 = 0n;
  levelUpgrade3 = 0n;
  save.saveGame();
}
function getPPS() {
  return ((clickPower * PPSPercentage) / 100n) * PPSMultiplier;
}
function getClickPower() {
  return (1n + adder) * multiplier * prestigeMultiplier;
}
function calculatePPOR() {
  return Sqrt(points / 10n ** 6n);
}
function checkAch() {
  if (maxLevelUp1 > 0n) {
    if (acheivements.ach1.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach1.state = "unlocked";
  }
  if (totalPoints >= 1000n) {
    if (acheivements.ach2.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach2.state = "unlocked";
  }
  if (maxLevelUp3 > 0n) {
    if (acheivements.ach3.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach3.state = "unlocked";
  }
  if (maxLevelUp4 > 0n) {
    if (acheivements.ach4.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach4.state = "unlocked";
  }
  if (maxLevelUp7 > 0n) {
    if (acheivements.ach5.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach5.state = "unlocked";
  }
  if (maxLevelUp8 > 0n) {
    if (acheivements.ach6.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach6.state = "unlocked";
  }
  if (totalPoints >= 10n ** 6n) {
    if (acheivements.ach7.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach7.state = "unlocked";
  }
  if (maxLevelUp9 > 0n) {
    if (acheivements.ach8.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach8.state = "unlocked";
  }
  if (maxLevelPrestigeUp3 > 0n) {
    if (acheivements.ach9.state !== "unlocked") {
      save.saveGame();
    }
    acheivements.ach9.state = "unlocked";
  }
}
function updateAchUI() {
  if (acheivementElement.length) {
    let indexAch = 0;
    for (let acheivement in acheivements) {
      if (acheivements[acheivement].state === "unlocked") {
        acheivementElement[indexAch].style.borderColor = "#48ff00";
      }
      indexAch++;
    }
    if (language === "en") {
      acheivementElement[0].title = "Double: buy upgrade 1 for the 1st time";
      acheivementElement[1].title =
        "Getting Rich: accumulate 1000 points (in total)";
      acheivementElement[2].title =
        "Automation: buy upgrade 3 for the 1st time";
      acheivementElement[3].title =
        "Big Boost: buy upgrade 4 for the 1st time (V0.01 endgame)";
      acheivementElement[4].title = "Synergism: buy upgrade 7 for the 1st time";
      acheivementElement[5].title =
        "Another Big One: buy upgrade 8 for the first time (V0.02 endgame)";
      acheivementElement[6].title =
        "Millionaire: accumulate 1.00e6 points (in total)";
      acheivementElement[7].title =
        "Prestige?: buy upgrade 9 for the first time";
      acheivementElement[8].title =
        "Expensive: buy prestige upgrade 3 (V0.03 endgame)";
    } else {
      acheivementElement[0].title =
        "Drobo: compre o upgrade 1 pela primeira vez";
      acheivementElement[1].title =
        "Ficando Rico: ganhe 1000 pontos (no total)";
      acheivementElement[2].title =
        "Automação: compre o upgrade 3 pela primeira vez";
      acheivementElement[3].title =
        "Grande Boost: compre o upgrade 4 pela primeira vez (fim da V0.01)";
      acheivementElement[4].title =
        "Sinergismo: compre o upgrade 7 pela primeira vez";
      acheivementElement[5].title =
        "Outro Grande: compre o upgrade 8 pela primeira vez (fim da V0.02)";
      acheivementElement[6].title =
        "Milionário: ganhe 1.00e6 pontos (no total)";
      acheivementElement[7].title =
        "Prestígio?: compre o upgrade 9 pela primeira vez";
      acheivementElement[8].title =
        "Caro: compre o upgrade de prestígio 3 (fim da V0.03)";
    }
  }
}
function Sqrt(value) {
  if (value < 0n) return 0n;
  if (value < 2n) return BigInt(value);
  let x0 = value / 2n;
  let x1 = (x0 + value / x0) / 2n;
  while (x1 < x0) {
    x0 = x1;
    x1 = (x0 + value / x0) / 2n;
  }
  return BigInt(x0);
}
if (button) {
  button.onclick = function () {
    points = points + clickPower + bonusPower;
    totalPoints = totalPoints + clickPower + bonusPower;
  };
}
if (upgrade1) {
  upgrade1.onclick = function () {
    if (levelUpgrade1 >= 20n) return;
    if (points >= upgrade1Cost) {
      points = points - upgrade1Cost;
      levelUpgrade1++;
      maxLevelUp1++;
      adder++;
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
      maxLevelUp3++;
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
      maxLevelUp4++;
      multiplier = multiplier * 4n;
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
      multiplier = (multiplier * 105n) / 100n;
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
      maxLevelUp7++;
      clickPowerPercentage++;
      bonusPower = (PPS * clickPowerPercentage) / 100n;
      points = points - upgrade7Cost;
      if (levelUpgrade7 < 10n) {
        upgrade7Cost = (upgrade7Cost * 130n) / 100n;
      }
    }
  };
}
if (upgrade8) {
  upgrade8.onclick = function () {
    if (levelUpgrade6 < 15n || levelUpgrade7 < 10n || levelUpgrade8 >= 1n)
      return;
    if (points >= upgrade8Cost) {
      levelUpgrade8++;
      maxLevelUp8++;
      PPSPercentage = PPSPercentage * 3n;
      PPS = getPPS();
      clickPowerPercentage = clickPowerPercentage + 15n;
      bonusPower = (PPS * clickPowerPercentage) / 100n;
      points = points - upgrade8Cost;
    }
  };
}
if (upgrade9) {
  upgrade9.onclick = function () {
    if (levelUpgrade8 === 0n || levelUpgrade9 === 1n) return;
    if (points >= upgrade9Cost) {
      points = points - upgrade9Cost;
      levelUpgrade9++;
      maxLevelUp9++;
      prestigeUnlocked = true;
    }
  };
}
if (deleteButton) {
  deleteButton.onclick = function () {
    if (language === "en") {
      let deleteOrNo = window.prompt("this is not working");
      if (deleteOrNo.equals("yes")) {
        save.deleteSave();
      }
    } else {
      let deleteOrNo = window.prompt("isso n[ao tá funcionando");
      if (deleteOrNo.equals("sim")) {
        save.deleteSave();
      }
    }
  };
}
if (prestigeButton) {
  prestigeButton.onclick = function () {
    if (!prestigeUnlocked) return;
    if (PPOR > 0n) {
      prestigePoints = prestigePoints + PPOR;
      prestige();
    }
  };
}
if (prestigeUpgrade1) {
  prestigeUpgrade1.onclick = function () {
    if (!prestigeUnlocked || levelPrestigeUpgrade1 === 1n) return;
    if (prestigePoints >= prestigeUpgrade1Cost) {
      levelPrestigeUpgrade1++;
      prestigePoints = prestigePoints - prestigeUpgrade1Cost;
      prestigeMultiplier = prestigeMultiplier * 5n;
    }
  };
}
if (prestigeUpgrade2) {
  prestigeUpgrade2.onclick = function () {
    if (!prestigeUnlocked || levelPrestigeUpgrade2 === 1n) return;
    if (prestigePoints >= prestigeUpgrade2Cost) {
      levelPrestigeUpgrade2++;
      prestigePoints = prestigePoints - prestigeUpgrade2Cost;
      PPSMultiplier = PPSMultiplier * 3n;
    }
  };
}
if (prestigeUpgrade3) {
  prestigeUpgrade3.onclick = function () {
    if (
      !prestigeUnlocked ||
      levelPrestigeUpgrade3 === 1n ||
      levelPrestigeUpgrade1 === 0n ||
      levelPrestigeUpgrade2 === 0n
    )
      return;
    if (prestigePoints >= prestigeUpgrade3Cost) {
      levelPrestigeUpgrade3++;
      maxLevelPrestigeUp3++;
      prestigePoints = prestigePoints - prestigeUpgrade3Cost;
      PPSMultiplier = PPSMultiplier * 2n;
      prestigeMultiplier = prestigeMultiplier * 2n;
    }
  };
}
if (languageSelector) {
  languageSelector.addEventListener("change", () => {
    language = languageSelector.value;
    localStorage.setItem(languageSave, language);
    updateUI();
  });
}
setInterval(() => {
  PPOR = calculatePPOR();
  clickPower = getClickPower();
  if (levelUpgrade3 > 0n) {
    PPS = getPPS();
    points = points + PPS / 10n;
    totalPoints = totalPoints + PPS / 10n;
  }
  checkAch();
  updateUI();
  updateAchUI();
}, 100);
setInterval(() => {
  save.saveGame();
}, 2000);
window.onload = save.loadGame();
