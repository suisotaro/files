var x = 0, y = 0, win = [];
for(var i = 0; i < 20; i++){
  x += 10;
  y += 10;
  win.push(window.open("", "win"+i, `width=400,height=100,top=${x},left=${y}`));
}
x = 0;
y = 100;
for(var i = 0; i < 20; i++){
  x += 10;
  y += 10;
  win.push(window.open("", "win2"+i, `width=400,height=100,top=${x},left=${y}`));
}
setTimeout(() => {
  win.forEach(w => {
    w.close();
  });
}, 3000);

var w2 = window.open("", "win3", `width=400,height=400,top=100,left=100`);
w2.onblur = w2.focus();