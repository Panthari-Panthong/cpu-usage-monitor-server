const { Router } = require("express");
const router = new Router();
const os = require("os");


const getData = () => {
  const cpus = os.cpus();
  let total = 0;
  let idle = 0;

  for (let i = 0, len = cpus.length; i < len; i++) {
    let cpu = cpus[i].times;

    total += Object.keys(cpu).reduce((acc, value) => acc + cpu[value], 0);
    idle += cpu.idle;
  }

  return {
    idle,
    total
  };
};

const startTimes = getData();


router.get("/usage", (req, res, next) => {
  setTimeout(() => {
    const endTimes = getData();
    const totalIdle = endTimes.idle - startTimes.idle;
    const totalUsage = endTimes.total - startTimes.total;    

    const usageAvg = ((1 - totalIdle / totalUsage) * 100).toFixed(2);
    console.log(`CPU usage ${usage}%`);
    
    res.send({ usage: usageAvg });
  }, 1000);

});

module.exports = router;
