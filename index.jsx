var React = require('react');
var ReactDOM = require('react-dom');


var Card = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'card ' + (this.state.highlight ? 'highlight' : '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="card-name">{this.props.name}</div>
                <img className="card-img" src={this.props.imageUrl} />
                <div className="card-category">
                    {this.props.category}
                </div>
            </div>
        );
    }
});

var List1 = function() {
    var name = "Things that thing";
    return (
        <div className="card-list">
            <div className="list-name">{name}</div>
            <Card name="Artichoke"
                    imageUrl="http://artichokes.org/caab-wp/wp-content/uploads/2012/10/home-artichoke.png"
                    category="Veggie" />
            <Card name="Cheese"
                    imageUrl="http://kingofwallpapers.com/cheese/cheese-027.jpg"
                    category="Dairy" />
            <Card name="Apple"
                    imageUrl="http://www.thebrandbite.com/wp-content/media/2015/07/apple-7.jpg"
                    category="Fruit" />
            <Card name="Pepper"
                    imageUrl="http://www.chefn.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/_/0/_0050_101-299-002_relishgrinderpepper_product_clear.jpg.jpg"
                    category="Spice" />
        </div>
    );
};

var List2 = function() {
    var name = "Things that start with 'A'";

    return (
        <div className="card-list">
            <div className="list-name">{name}</div>
            <Card name="Artichoke"
                    imageUrl="http://artichokes.org/caab-wp/wp-content/uploads/2012/10/home-artichoke.png"
                    category="Veggie" />
            <Card name="Apple"
                    imageUrl="http://www.thebrandbite.com/wp-content/media/2015/07/apple-7.jpg"
                    category="Fruit" />

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