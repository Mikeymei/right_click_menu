'use strict';
$(function() {
  // 右クリックしたときにメニューを表示
  $('#container').contextmenu(function(event) {
    // 右クリック時のカーソル位置を取得
    const leftPx = event.clientX + 'px';
    const topPx = event.clientY + 'px';

    // カーソルの位置に右クリックメニューを表示
    $('#contextmenu').css('display', 'block');
    $('#contextmenu').css('left', leftPx);
    $('#contextmenu').css('top', topPx);
    return false;
  });
  // クリックしたときにメニューを非表示
  $('#container').click(function() {
    $('#contextmenu').css('display', 'none');
  });
});



// $('#container').append('<div id="contextmenu">');
// $('#contextmenu').html('<ul>');
// $('ul').html('<li>複製');
// $('ul').append('<li>削除');