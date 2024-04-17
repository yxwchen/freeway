// 主導覽js===========
// 主導覽
let mainNavEl = document.querySelector('.mainNav');
// 主導覽縮小btn
let mainNavToggleBtnEl = document.querySelector('.mainNavToggleBtn');
// 工具導覽
let toolNavEl = document.querySelector('.toolNav');

mainNavToggleBtnEl.addEventListener('click', function () {
    mainNavEl.classList.toggle('d-block');
    toolNavEl.classList.toggle('d-block');
}, false);
// false事件冒泡用
// /.主導覽js===========