const john = "John";
const arya = "Arya";
const sensa = "Sensa";
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

let check = true;

const interval = setInterval(() => {
  Promise.all([
    sensaSay("For the North").then(console.log),
    aryaSay("The king in the North").then(console.log),
    new Promise((resolve, reject) => {
      if (check) {
        check = false;
        johnSay("Winter is coming").then(console.log);
      }
      resolve();
    })
  ]);
  setTimeout(() => clearInterval(interval), 10000);
}, 1000);
