// json 形式で、リンク先url、画像 url を定義
// 今回はいずれの画像もリンク先は同じ。
var BannerConfigs = [
	{
		url : "http://line.me/S/sticker/1015414",
		image : "images/banner.png",
	},
	{
		url : "http://line.me/S/sticker/1015414",
		image : "images/banner2.png",
	},
];

// ページロード終了時に呼び出される。
$(function() {

	var	currentBanner = 0;

	// バナーに置き換え先を探す。
	var target = $('[data-role="banner"]');

	// a, img タグを作る。
	var banner = $('<a><img /></a>');
	var bannerImage = $('img', banner);


	// バナー置き換え先の下に作成したバナーを追加。
	$(target).append(banner);

	// 定期的に更新。
	setInterval(function(){
		var config = BannerConfigs[currentBanner];

		// a, img タグの アトリビュート(href, src) を設定。
		banner.attr('href', config.url);
		bannerImage.attr('src', config.image);

		// banner ローテーション
		currentBanner++;
		currentBanner %= BannerConfigs.length;

	}, 3000);
});
