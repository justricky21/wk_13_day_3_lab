const BucketItemFormView = require('./views/bucket_item_form_view.js');
const BucketItems = require('./models/bucket_items.js');

document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.querySelector("form#bucket-list-form");
    const bucketItemFormView = new BucketItemFormView(itemForm);
    bucketItemFormView.bindEvents();


    const bucketItems = new BucketItems();
    bucketItems.bindEvents();
    bucketItems.getData();
});