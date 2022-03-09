let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

window.onload = () => {
    let excuse = document.getElementById("app");
    excuse.innerHTML = who[Math.floor(Math.random() * who.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)];
  };