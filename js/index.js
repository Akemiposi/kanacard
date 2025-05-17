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

  let correctKana = ""; //最初は見えないようにしておく

  //問題
  function setNewQuestion() {
    //ランダム処理
    const random = cards[Math.floor(Math.random() * cards.length)];
        //console.log(random);
    correctKana = random.kana;
        //console.log(correctKana);

    //絵をrandomのimgに替える cf.attribute-属性
    $(".card_wrap img").attr("src", random.img);
       //.card_wrap imgのsrcをrandom.imgに替える

    //wordの最初の文字を飛ばして2文字目(1)から取り出す
    const restOfWord = random.word.substring(1);
       //console.log(restOfWord);

    //restOfWordの前に?をつけて.question_wordに表示
    $(".question_word").html(`<span class="hatena">？</span>${restOfWord}`);
  }

  setNewQuestion();
});
