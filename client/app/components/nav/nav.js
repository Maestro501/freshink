/** @jsx React.DOM */

// var NavigationButton = React.createClass({
//   getInitialState: function () {
//     return {active: false};
//   },

//   clicked: function (index) {
//     this.setState({active: index}, function(){
//       console.log(index, ' clicked, ', this.state);
//     });
//   },
  
//   render: function () {
//     return (
//       <div className="nav">
//         <a className="nav-logo">LOGO</a>
//         {buttonsObj}
//       </div>
//     );
//   }
// });

var NavigationBar = React.createClass({
  getInitialState: function () {
    return {active: false};
  },

  clicked: function (index) {
    this.setState({active: index});
    console.log('clicked ', index);
  },

  render: function() {
    var buttonsObj = {};
    var self = this;

    this.props.buttons.map(function (item, index) {
      var buttonClasses = 'nav-button'
      // var item = item.main;
      
      if (self.state.active === index) {
        buttonClasses += ' active';
      }

      buttonsObj['result-' + item] = <a className={buttonClasses} onClick={self.clicked.bind(self, index)}>
        {item}
        </a>
    });

    return (
      <div className="nav">
        <a className="nav-logo">LOGO</a>
        {buttonsObj}
      </div>
    );
  }
});


// var navigationButtons = [{
//   main: 'one',
//   dropdown: ['one-one', 'one-two']
// },
// {
//   main: 'two',
//   dropdown: ['two-one', 'two-two']
// },
// {
//   main: 'three',
//   dropdown: ['three-one', 'three-two', 'three-three']
// }];

React.render(<NavigationBar buttons={['one', 'two', 'three']}/>, document.getElementById('content'));
