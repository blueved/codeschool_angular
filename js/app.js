(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gemList;
	});
	
	var gemList = [];
    for (var i = 0; i < 10; i++){
        gemList.push({
		name:'D-' + i,
		price: 2.95 + i,
		description:'bel object '+ i,
        canPurchase: (i%2 == 0)?true: false});
	};
})();
