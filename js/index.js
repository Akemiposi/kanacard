//単語とかなと絵を組み合わせて配列にする
$(document).ready(function () {
  const allCards = {
    a: [
      { word: "あさがお", kana: "あ", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "い", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "う", img: "img/img_e/usagi.png" },
      { word: "えんぴつ", kana: "え", img: "img/img_e/enpitsu.png" },
      { word: "おにぎり", kana: "お", img: "img/img_e/onigiri.png" },
    ],
    ka: [
      { word: "あさがお", kana: "か", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "き", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "く", img: "img/img_e/usagi.png" },
      { word: "えんぴつ", kana: "け", img: "img/img_e/enpitsu.png" },
      { word: "おにぎり", kana: "こ", img: "img/img_e/onigiri.png" },
    ],
    sa: [
      { word: "あさがお", kana: "さ", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "し", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "す", img: "img/img_e/usagi.png" },
      { word: "えんぴつ", kana: "せ", img: "img/img_e/enpitsu.png" },
      { word: "おにぎり", kana: "そ", img: "img/img_e/onigiri.png" },
    ],
    ta: [
      { word: "あさがお", kana: "た", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "ち", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "つ", img: "img/img_e/usagi.png" },
      { word: "えんぴつ", kana: "て", img: "img/img_e/enpitsu.png" },
      { word: "おにぎり", kana: "と", img: "img/img_e/onigiri.png" },
    ],
    na: [
      { word: "あさがお", kana: "な", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "に", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "ぬ", img: "img/img_e/usagi.png" },
      { word: "えんぴつ", kana: "ね", img: "img/img_e/enpitsu.png" },
      { word: "おにぎり", kana: "の", img: "img/img_e/onigiri.png" },
    ],
    ha: [
      { word: "あさがお", kana: "は", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "ひ", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "ふ", img: "img/img_e/usagi.png" },
      { word: "えんぴつ", kana: "へ", img: "img/img_e/enpitsu.png" },
      { word: "おにぎり", kana: "ほ", img: "img/img_e/onigiri.png" },
    ],
    ma: [
      { word: "あさがお", kana: "ま", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "み", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "む", img: "img/img_e/usagi.png" },
      { word: "えんぴつ", kana: "め", img: "img/img_e/enpitsu.png" },
      { word: "おにぎり", kana: "も", img: "img/img_e/onigiri.png" },
    ],
    ya: [
      { word: "あさがお", kana: "や", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "ゆ", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "よ", img: "img/img_e/usagi.png" },
    ],
    ra: [
      { word: "あさがお", kana: "ら", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "り", img: "img/img_e/inu.png" },
      { word: "うさぎ", kana: "る", img: "img/img_e/usagi.png" },
      { word: "えんぴつ", kana: "れ", img: "img/img_e/enpitsu.png" },
      { word: "おにぎり", kana: "ろ", img: "img/img_e/onigiri.png" },
    ],
    wa: [
      { word: "あさがお", kana: "わ", img: "img/img_e/asagao.png" },
      { word: "いぬ", kana: "を", img: "img/img_e/inu.png" },
    ],
  };
  //配列の中は[A, B, C]で囲む 文字列の場合["りんご", "いちご", "バナナ"]
  //それをさらにグループ化{ word:"____", kana:"____", img:"相対パスで場所を表示"}
  // console.log(cards);

  let correctKana = ""; //最初は見えないようにしておく

  let cards = allCards["a"]; // 最初は「あ」行

  // メニューのトグル
 $(".menu_toggle").on("click", function () {
  $(".menu").slideToggle(200); // 2秒で開閉
});

  // メニュー項目のクリックで行切り替え
  $(".menu li").on("click", function () {
    const group = $(this).data("group");
    if (group === "all") {
      cards = Object.values(allCards).flat(); // 全グループをまとめる
    } else {
      cards = allCards[group];//そうではない時はそれぞれのグループでくくる
    }
    setNewQuestion();
    $(".menu").addClass("hidden");
    // menu クラスの要素に hidden クラスを付けたり外したり切り替える
  });

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

  //判定-クリックイベント
  $(".select_area li").on("click", function () {
    const selectedKana = $(this).text().trim().charAt(0);
    //.charAt() は character at（＝「〜番目の文字」）(0)１番目（1)２番目
    //console.log(seletedKana);

    const $message = $("#judge_message");
    //judgement
    if (selectedKana === correctKana) {
      $message
        .text("⭕️せいかい！")
        .removeClass("incorrect")
        .addClass("correct")
        .fadeIn(200, () => {
          setTimeout(() => {
            $message.fadeOut(200);
            setNewQuestion();
          }, 1500);
        });
    } else {
      $message
        .text("もういっかい！")
        .removeClass("correct")
        .addClass("incorrect")
        .fadeIn(200, () => {
          setTimeout(() => {
            $message.fadeOut(200);
          }, 1200);
        });
    }
  });

  setNewQuestion();
});
