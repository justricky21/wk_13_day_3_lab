const PubSub = require('../helpers/pub_sub.js')

const BucketItemView = function(container){
    this.container = container;
}

BucketItemView.prototype.render = function(item){
    const description = document.createElement('li');
    description.textContent = item.description;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add = "delete-btn";
    deleteButton.textContent = "X";
    deleteButton.value = item._id;
    deleteButton.addEventListener('click', (event) => {        
        PubSub.publish('BucketItemView:item-to-delete', event.target.value);
    });
    
    const completeButton = document.createElement('button');
    completeButton.textContent = "Task complete!";
    completeButton.classList.add = "complete-btn";
    completeButton.value = item._id;
    completeButton.addEventListener('click', (event) => {
        PubSub.publish('BucketItemView:item-to-complete', event.target.value);
    });

    this.container.appendChild(description);
    this.container.appendChild(deleteButton);
    this.container.appendChild(completeButton);
}

module.exports = BucketItemView;