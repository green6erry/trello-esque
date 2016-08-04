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



var Input = function(props) {
    return <span><input onChange={props.onChange} placeholder={props.text} ></input></span>;
};

var Button = function(props) {
    return <button onClick={props.onClick}>{props.text}</button>;
};


//component
var List = React.createClass({
    getInitialState: function() {
        console.log('begin');
        return {
            clicked: false
        };
    },
    //callback
    onAddInputChanged: function() {
        console.log('input changed');
        this.setState({
            clicked: true          //callback for onBAddInputChanged
        });
    },

    onAddClick: function() {
        console.log('button clicked');
        this.setState({
            clicked: true          //callback for onAddClick
        });
        
    },

    render: function() {
        var name = this.props.name;
        var cards = this.props.cards;
        return (
            <div className="list">
                <div className="list-name">{name}</div>
                {cards}
                <Input onChange={this.onAddInputChanged} text="Type stuff to me!" />
                
                <Button onClick={this.onAddClick} text="Click!" />
                
            </div>
        );
    }
});

var Board = React.createClass({
    render: function() {
        var name = this.props.name;
        var lists = this.props.lists;
        return (
            <div className="board">
                <div className="board-name">{name}</div>
                {lists}
            </div>
        );
    }
});


var List1 = function() {
    var name = "Things that thing";
    var cards = [<Card name="Cheese"
                    imageUrl="http://kingofwallpapers.com/cheese/cheese-027.jpg"
                    category="Dairy" />, <Card name="Pepper"
                    imageUrl="http://www.chefn.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/_/0/_0050_101-299-002_relishgrinderpepper_product_clear.jpg.jpg"
                    category="Spice" />];
    return (
        <div className="card-list">
            <List name={name} cards={cards} />

        </div>
    );
};

// var List2 = function() {
//     var name = "Things that start with 'A'";
//     var cards = [<Card name="Artichoke"
//                     imageUrl="http://artichokes.org/caab-wp/wp-content/uploads/2012/10/home-artichoke.png"
//                     category="Veggie" />, 
//                 <Card name="Apple"
//                     imageUrl="http://www.thebrandbite.com/wp-content/media/2015/07/apple-7.jpg"
//                     category="Fruit" />]
//     return (
//         <div className="card-list">
//             <List name={name} cards={cards} />

//         </div>
//     );
// };


var Board1 = function(){
    var lists = [<List1 />];
    return(
        <div className="board">
            <Board name="I am the board" lists={lists} />
        </div>
    );
};






// var List2 = function() {
//     var name = "Things that start with 'A'";

//     return (
//         <div className="list-name">{name}</div>
//             <div className="card-list">
//             <Card name="Artichoke"
//                     imageUrl="http://artichokes.org/caab-wp/wp-content/uploads/2012/10/home-artichoke.png"
//                     category="Veggie" />
//             <Card name="Cheese"
//                     imageUrl="http://kingofwallpapers.com/cheese/cheese-027.jpg"
//                     category="Dairy" />
//             <Card name="Apple"
//                     imageUrl="http://www.thebrandbite.com/wp-content/media/2015/07/apple-7.jpg"
//                     category="Fruit" />
//             <Card name="Pepper"
//                     imageUrl="http://www.chefn.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/_/0/_0050_101-299-002_relishgrinderpepper_product_clear.jpg.jpg"
//                     category="Spice" />
//         </div>
//     );
// };

// var ListBoard = React.createClass({
//     render: function() {
//         var lists = [<List1 />, <List2 />];
//         return (
//             <div className="list-board">
//                 {lists}
//             </div>
//         );
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board1 />, document.getElementById('app'));
});