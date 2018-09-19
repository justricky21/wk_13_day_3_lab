const BucketItemFormView = require('./views/bucket_item_form_view.js');
const BucketItems = require('./models/bucket_items.js');
const BucketItemsGridView = require('./views/bucket_items_grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.querySelector("form#bucket-list-form");
    const bucketItemFormView = new BucketItemFormView(itemForm);
    bucketItemFormView.bindEvents();

    const allItemsList = document.querySelector("ol#all-bucket-list-items");
    const bucketItemsGridView = new BucketItemsGridView(allItemsList);
    bucketItemsGridView.bindEvents();
    

    const bucketItems = new BucketItems();
    bucketItems.bindEvents();
    bucketItems.getData();
});