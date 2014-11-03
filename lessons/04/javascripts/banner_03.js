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
	new Banner();
});

// banner class を定義。
function Banner() {
	var self = this;

	this.currentBanner = 0;
	this.banner = $('<a><img /></a>');
	this.bannerImage = $('img', this.banner);

	var target = $('[data-role="banner"]');
	$(target).append(this.banner);

	$.extend(this, {
		update : function() {
			var config = BannerConfigs[self.currentBanner];

			self.banner.attr('href', config.url);
			self.bannerImage.attr('src', config.image);

			self.currentBanner++;
			self.currentBanner %= BannerConfigs.length;
		}
	});

	this.update();
	setInterval(this.update, 3000);
}

