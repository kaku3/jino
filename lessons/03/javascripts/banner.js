// json 形式で、リンク先url、画像 url を定義
var BannerConfig = {
  url : "http://line.me/S/sticker/1015414",
  image : "images/banner.png",
};

// ページロード終了時に呼び出される。
$(function() {
  // バナーに置き換え先を探す。
  var target = $('[data-role="banner"]');

  // a, img タグを作る。
  var banner = $('<a><img /></a>');
  var bannerImage = $('img', banner);

  // a, img タグの アトリビュート(href, src) を設定。
  banner.attr('href', BannerConfig.url);
  bannerImage.attr('src', BannerConfig.image);

  // バナー置き換え先の下に作成したバナーを追加。
  $(target).append(banner);
});
