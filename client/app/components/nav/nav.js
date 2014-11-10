/** @jsx React.DOM */

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
        <div className="nav-buttons">
          {buttonsObj}
        </div>
      </div>
    );
  }
});

React.render(<NavigationBar buttons={['Breaking News', 'Tech', 'Science', 'Business']}/>, document.getElementById('content'));
