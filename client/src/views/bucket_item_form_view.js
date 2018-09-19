const PubSub = require('../helpers/pub_sub.js')

const BucketItemFormView = function (form) {
    this.form = form;
}

BucketItemFormView.prototype.bindEvents = function(){
    this.form.addEventListener('submit', (event) => {
        this.handleEvent(event);
    });
}

BucketItemFormView.prototype.handleEvent = function(event){
    event.preventDefault();
    const newGoal = {description: event.target.description.value};
    console.log(newGoal);
    PubSub.publish('BucketItemFormView:item-submitted', newGoal);
    event.target.reset();
}

module.exports = BucketItemFormView;