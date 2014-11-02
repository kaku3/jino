// banner 定義。カンマ区切りで定義
// 	[ <link 先 url> , <画像 url> ],
var BannerConfig = {
  url : "http://line.me/S/sticker/1015414",
  image : "images/banner.png",
};

// ページロード終了時に呼び出される。
$(function() {
  // バナーに置き換えるタグを探す。
  var target = $('[data-role="banner"]');

  var banner = $('<a><img /></a>');
  var bannerImage = $('img', banner);

  banner.attr('href', BannerConfig.url);
  bannerImage.attr('src', BannerConfig.image);

  $(target).append(banner);
});
