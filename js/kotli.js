const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

var index = 0; // 最初のコンテンツから開始
changeContent(false);

function changeContent(isNext) {
    const contentElements = document.getElementById('contents').children;

    // ボタンクリックに応じてインデックスを更新
    if (isNext) {
        index++;
    } else {
        index--;
    }

    // 境界条件を処理（負のインデックスまたは範囲外のインデックスを回避）
    if (index < 0) {
        index = 0;
    } else if (index >= contentElements.length) {
        index = contentElements.length - 1;
    }
    // 次や前の画面に進めない場合はボタンを非表示にする
    if (index == 0) {
        prevButton.style.visibility = 'hidden';
    } else {
        prevButton.style.visibility = 'visible';
    }

    if (index == contentElements.length - 1) {
        nextButton.style.visibility = 'hidden';
    } else {
        nextButton.style.visibility = 'visible';
    }

    // 全ての要素の透明度を0に設定（初期状態）
    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].style.opacity = 0;
        contentElements[i].style.visibility = 'hidden';
    }

    // ターゲット要素の透明度を1に設定
    contentElements[index].style.visibility = 'visible';
    contentElements[index].style.opacity = 1;
}

prevButton.addEventListener('click', function () {
    changeContent(false);
});

nextButton.addEventListener('click', function () {
    changeContent(true);
});