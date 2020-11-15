const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    { "name": "Linda", "salary": 1500 }];
        

function getWorthyWorkers(workers) {
  const names = [];
  for (let i = 0; i < workers.length; i++) {
    if (workers[i].salary > 1000) {
      names.push(workers[i].name);
    }
  }
 return names;
}

console.log(getWorthyWorkers(workers));