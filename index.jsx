var React = require('react');
var ReactDOM = require('react-dom');


var Card1 = function() {
    var name = 'Cheese';
    var imageUrl = 'http://kingofwallpapers.com/cheese/cheese-027.jpg';
    var category = 'Dairy';
    return (
        <div className="card">
            <div className="card-name">{name}</div>
            <img className="card-img" src={imageUrl} />
            <div className="card-category">
                {category}
            </div>
        </div>
    );
};

var Card2 = function() {
    var name = 'Pepper';
    var imageUrl = 'http://www.chefn.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/_/0/_0050_101-299-002_relishgrinderpepper_product_clear.jpg.jpg';
    var category = 'Spice';
    return (
        <div className="card">
            <div className="card-name">{name}</div>
            <img className="card-img" src={imageUrl} />
            <div className="card-category">
                {category}
            </div>
        </div>
    );
};

var Card3 = function() {
    var name = 'Artichoke';
    var imageUrl = 'http://artichokes.org/caab-wp/wp-content/uploads/2012/10/home-artichoke.png';
    var category = 'Veggie';
    return (
        <div className="card">
            <div className="card-name">{name}</div>
            <img className="card-img" src={imageUrl} />
            <div className="card-category">
                {category}
            </div>
        </div>
    );
};

var Card4 = function() {
    var name = 'Apple';
    var imageUrl = 'http://www.thebrandbite.com/wp-content/media/2015/07/apple-7.jpg';
    var category = 'Fruit';
    return (
        <div className="card">
            <div className="card-name">{name}</div>
            <img className="card-img" src={imageUrl} />
            <div className="card-category">
                {category}
            </div>
        </div>
    );
};




var List1 = function() {
    var name = 'Things to buy for thing';
    return (
        <div className="card-list">
            <div className="list-name">{name}</div>
            <Card1 />
            <Card2 />
        </div>
        );
};

var List2 = function() {
    var name = 'Things that Start with \'A\'';
    return (
        <div className="card-list">
            <div className="list-name">{name}</div>
            <Card3 />
            <Card4 />
        </div>
        );
};



var ListBoard = React.createClass({
    render: function() {
        var lists = [<List1 />, <List2 />];
        

        return (
            <div className="list-board">

                {lists}
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<ListBoard />, document.getElementById('app'));
});