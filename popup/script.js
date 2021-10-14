var x = 0, y = 0, win = [];
for(var j = 1; j < 3; j++;){
  x = 0;
  for(var i = 0; i < 20; i++){
    x += 10;
    y += 10;
    win.push(window.open("", "win"+j+i, `width=400,height=100,top=${x},left=${y}`));
  }
  y += 100;
}

setTimeout(() => {
  win.forEach(w => {
    w.close();
  });
}, 3000);
