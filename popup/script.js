var x = 0, y = 0, win = [];
for(var i = 0; i < 20; i++){
  x += 10;
  y += 10;
  win.push(window.open("", "win1"+i, `width=400,height=100,top=${x},left=${y}`));
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
