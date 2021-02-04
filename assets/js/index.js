$(function() {

  // メインビジュアルのスライダーアニメーション
  $('.slider').slick({
    fade: true,
    speed: 5000,
    autoplay: true,
    lazyLoad: 'progressive',
    infinite: true
  });

  // 特定位置２つの間に来たときに要素が出入りする
  const toggleAnimation = (elem, point_01, point_02) => {
    $(elem).hide();
    $(window).scroll(function () {
      const scroll = $(this).scrollTop();
      const height_01 = $(point_01).offset().top;
      const height_02 = $(point_02).offset().top;
      if (scroll > height_01 && scroll < height_02 - $(window).height()) {
        $(elem).fadeIn(300);
      } else {
        $(elem).fadeOut(300);
      }
    });
  }

  toggleAnimation('.u-side-icon', '#toggleAnimationSection', '.f-end');
  toggleAnimation('.h-container', '#toggleAnimationSection', '.f-end');

  // メインビジュアルのフェードイン
  $('.m-mainvisual').fadeIn(1500);

  // モーダルアニメーション処理
  $('#modalToggle, .c-modal__list').on('click', function () {
    $('.c-modal-btn__border').toggleClass('c-active-btn');
    $('.c-modal-btn__menu').toggleClass('c-active-menu');
    // $('.c-modal__list').toggleClass('active-list');
    $('.c-modal__list').fadeToggle(300);
  });



  // スクロールに応じて下からふわっとフェードインする処理
  $(window).scroll(() => {
    // 繰り返し処理で各々処理させる
    $('.fadein').each(function () {

      // 変数定義(高さ指定系)
      let scroll = $(window).scrollTop();
      let fadeinHeight = $(this).offset().top;
      let windowHeight = $(window).height();

      // 高さに応じて、クラスを付与する
      if (scroll > fadeinHeight - windowHeight) {
        $(this).addClass('scrollin');
      }
    });
  });



  // スクロールアニメーション関数
  const scrollFunc = (scrollBtn, scrollNav, i) => {
    $(scrollBtn).on('click', function () {
      let formOffset = $(scrollNav).offset().top;
      $('html,body').animate({
        scrollTop: formOffset - i
      }, 1000);
      return;
    });
  };




  // TOPへスクロールする処理
  scrollFunc('.topScroll', '#topSection', 0);
  // スクールへスクロールする処理
  scrollFunc('.shopScroll', '#shopSection', 0);
  // 講師紹介へスクロールする処理
  scrollFunc('.serviceScroll', '#serviceSection', 50);
  // サンプル動画へスクロールする処理
  scrollFunc('.staffScroll', '#staffSection', 50);
  // 料金体系へスクロールする処理
  scrollFunc('.messageScroll', '#messageSection', 50);


});
