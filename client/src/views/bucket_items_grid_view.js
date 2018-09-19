const PubSub = require('../helpers/pub_sub.js')
const BucketItemView = require('./bucket_item_view.js')

const BucketItemsGridView = function (container) {
    this.container = container;
}

BucketItemsGridView.prototype.bindEvents = function(){
    PubSub.subscribe('BucketItems:data-loaded', (event) =>{
        this.render(event.detail);
    });
};

BucketItemsGridView.prototype.render = function(bucketItems){
    this.container.innerHTML = '';
    const bucketItem = new BucketItemView(this.container);
    bucketItems.forEach((item) => bucketItem.render(item));
};

module.exports = BucketItemsGridView;