//単語とかなと絵を組み合わせて配列にする
$(document).ready(function () {
  const allCards = {
  a: [
    { word: "あさがお", kana: "あ", img: "img/img_e/asagao.png" },
    { word: "いぬ", kana: "い", img: "img/img_e/inu.png" },
    { word: "うさぎ", kana: "う", img: "img/img_e/usagi.png" },
    { word: "えのぐ", kana: "え", img: "img/img_e/enogu.png" },
    { word: "おにぎり", kana: "お", img: "img/img_e/onigiri.png" }
  ],
  ka: [
    { word: "かぶとむし", kana: "か", img: "img/img_e/kabutomushi.png" },
    { word: "きつね", kana: "き", img: "img/img_e/kitsune.png" },
    { word: "くま", kana: "く", img: "img/img_e/kuma.png" },
    { word: "けしごむ", kana: "け", img: "img/img_e/keshigomu.png" },
    { word: "こくばん", kana: "こ", img: "img/img_e/kokuban.png" }
  ],
  sa: [
    { word: "さい", kana: "さ", img: "img/img_e/sai.png" },
    { word: "しんかんせん", kana: "し", img: "img/img_e/shinkansen.png" },
    { word: "すいか", kana: "す", img: "img/img_e/suika.png" },
    { word: "せみ", kana: "せ", img: "img/img_e/semi.png" },
    { word: "そら", kana: "そ", img: "img/img_e/sora.png" }
  ],
  ta: [
    { word: "たまご", kana: "た", img: "img/img_e/tamago.png" },
    { word: "ちず", kana: "ち", img: "img/img_e/chizu.png" },
    { word: "つくえ", kana: "つ", img: "img/img_e/tsukue.png" },
    { word: "てんとうむし", kana: "て", img: "img/img_e/tentoumushi.png" },
    { word: "とけい", kana: "と", img: "img/img_e/tokei.png" }
  ],
  na: [
    { word: "なわとび", kana: "な", img: "img/img_e/nawatobi.png" },
    { word: "にんじん", kana: "に", img: "img/img_e/ninjin.png" },
    { word: "ぬいぐるみ", kana: "ぬ", img: "img/img_e/nuigurumi.png" },
    { word: "ねこ", kana: "ね", img: "img/img_e/neko.png" },
    { word: "のり", kana: "の", img: "img/img_e/nori.png" }
  ],
  ha: [
    { word: "はさみ", kana: "は", img: "img/img_e/hasami.png" },
    { word: "ひこうき", kana: "ひ", img: "img/img_e/hikouki.png" },
    { word: "ふうせん", kana: "ふ", img: "img/img_e/fuusen.png" },
    { word: "へび", kana: "へ", img: "img/img_e/hebi.png" },
    { word: "ほし", kana: "ほ", img: "img/img_e/hoshi.png" }
  ],
  ma: [
    { word: "まめ", kana: "ま", img: "img/img_e/mame.png" },
    { word: "みかん", kana: "み", img: "img/img_e/mikan.png" },
    { word: "むしめがね", kana: "む", img: "img/img_e/mushimegane.png" },
    { word: "めがね", kana: "め", img: "img/img_e/megane.png" },
    { word: "もも", kana: "も", img: "img/img_e/momo.png" }
  ],
  ya: [
    { word: "やさい", kana: "や", img: "img/img_e/yasai.png" },
    { word: "ゆびわ", kana: "ゆ", img: "img/img_e/yubiwa.png" },
    { word: "ようふく", kana: "よ", img: "img/img_e/youfuku.png" }
  ],
  ra: [
    { word: "らくだ", kana: "ら", img: "img/img_e/rakuda.png" },
    { word: "りす", kana: "り", img: "img/img_e/risu.png" },
    { word: "るすばん", kana: "る", img: "img/img_e/rusuban.png" },
    { word: "れいぞうこ", kana: "れ", img: "img/img_e/reizouko.png" },
    { word: "ろうそく", kana: "ろ", img: "img/img_e/rousoku.png" }
  ],
  wa: [
    { word: "わに", kana: "わ", img: "img/img_e/wani.png" }
  ]
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
    currentGroup = group;
    //console.log(group);
    if (group === "all") {
      cards = Object.values(allCards).flat(); // 全グループをまとめる
    } else {
      cards = allCards[group]; //そうではない時はそれぞれのグループでくくる
    }
    setNewQuestion();
    $(".menu").addClass("hidden");
    // menu クラスの要素に hidden クラスを付けたり外したり切り替える
  });

  const kanaGroups = {
    a: ["あ", "い", "う", "え", "お"],
    ka: ["か", "き", "く", "け", "こ"],
    sa: ["さ", "し", "す", "せ", "そ"],
    ta: ["た", "ち", "つ", "て", "と"],
    na: ["な", "に", "ぬ", "ね", "の"],
    ha: ["は", "ひ", "ふ", "へ", "ほ"],
    ma: ["ま", "み", "む", "め", "も"],
    ya: ["や", "ゆ", "よ"],
    ra: ["ら", "り", "る", "れ", "ろ"],
    wa: ["わ", "を", "ん"],
  };

  let currentGroup = "a";

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

    // 選択肢を更新
    let options = [];

    if (currentGroup === "all") {
      // ランダムモードのとき
      const allKana = Object.values(kanaGroups).flat();
      // kanaGroups からすべてのひらがな（あ〜を）をひとつの配列にまとめる

      const others = allKana.filter((k) => k !== correctKana);
      // 正解のかな（correctKana）を除いた文字だけ残す → 間違いの候補を作っている

      const shuffled = others.sort(() => 0.5 - Math.random());
      // シャッフルしてランダムな並びにする（sort でランダムソート）

      options = [correctKana, ...shuffled.slice(0, 4)];
      // 正解＋間違い4つ ＝ 合計5個の選択肢を作る

      options = options.sort(() => 0.5 - Math.random());
      // 選択肢をもう一度ランダムに並べ替える（正解が真ん中に来たりするように）
    } else {
      // 「あ行」や「か行」など固定の行が選ばれている場合
      options = kanaGroups[currentGroup];
      // 例: kanaGroups["ka"] → ["か", "き", "く", "け", "こ"]
    }

    renderKanaChoices(options);
  }

  // 文字を表示（liを生成）
  function renderKanaChoices(kanaArray) {
    const $ul = $(".select_choices");
    $ul.empty();
    kanaArray.forEach((kana) => {
      const $li = $("<li>").addClass("box2_1").text(kana);
      $ul.append($li);
    });
  }

  //判定-クリックイベント
  $(".select_area").on("click", ".box2_1", function () {
    const selectedKana = $(this).text().trim().charAt(0);
    //.charAt() は character at（＝「〜番目の文字」）(0)１番目（1)２番目
    //console.log(seletedKana);

    const $message = $("#judge_message");

    //judgement
    if (selectedKana === correctKana) {
      $message
        .text("⭕️ せいかい！")
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
