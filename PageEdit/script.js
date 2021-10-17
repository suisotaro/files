if(confirm("編集可能にしますか？")){ //on
  document.body.contentEditable = "true";
  document.designMode = "on";
  alert("編集可能にしました！\nPageEdit by suisotaro");
} else{ //off
  document.body.contentEditable = "false";
  document.designMode = "off";
  alert("編集不可能にしました！\nPageEdit by suisotaro");
}
