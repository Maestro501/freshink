/** @jsx React.DOM */

var NavigationBar = React.createClass({
  getInitialState: function () {
    return {active: false};
  },
  clicked: function (index) {
    this.setState({active: index}, function(){
      console.log(index, ' clicked, ', this.state);
    });
  },

  render: function() {
    var buttonsObj = {};
    var self = this;

    this.props.buttons.map(function (item, index) {
      var buttonClasses = 'nav-button'
      
      if (self.state.active === index) {
        buttonClasses += ' active';
        console.log('classes', buttonClasses);
      }

      buttonsObj['result-' + item] = <a className={buttonClasses} onClick={self.clicked.bind(self, index)}>{item}</a>;
    });

    return (
      <div className="nav">
        <a className="nav-logo">LOGO</a>
        {buttonsObj}
      </div>
    );
  }
});


React.render(<NavigationBar buttons={['one', 'two', 'three']}/>, document.getElementById('content'));
