//単語とかなと絵を組み合わせて配列にする
$(document).ready(function () {
  const cards = [
    { word: "あさがお", kana: "あ", img: "img/img_e/asagao.png" },
    { word: "いぬ", kana: "い", img: "img/img_e/inu.png" },
    { word: "うさぎ", kana: "う", img: "img/img_e/usagi.png" },
    { word: "えんぴつ", kana: "え", img: "img/img_e/enpitsu.png" },
    { word: "おにぎり", kana: "お", img: "img/img_e/onigiri.png" },
  ];
  //配列の中は[A, B, C]で囲む 文字列の場合["りんご", "いちご", "バナナ"]
  //それをさらにグループ化{ word:"____", kana:"____", img:"相対パスで場所を表示"}
  // console.log(cards);
});

