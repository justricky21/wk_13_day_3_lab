const BucketItemView = function(container){
    this.container = container;
}

BucketItemView.prototype.render = function(item){
    const description = document.createElement('li');
    description.textContent = item.description;
    
    this.container.appendChild(description);
}

module.exports = BucketItemView;