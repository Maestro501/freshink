/** @jsx React.DOM */

var buttons = ['Breaking News', 'Tech', 'Science', 'Business'];

module.exports = React.createClass({
  getInitialState: function () {
    return {active: false};
  },

  clicked: function (index) {
    this.setState({active: index});
    var title = buttons[index].toLowerCase().replace(/\s/g, '');
    history.replaceState(null, title, "/" + title);

    //should emit event to change content of the app
  },

  render: function() {
    var buttonsObj = {};
    var self = this;

    buttons.map(function (item, index) {
      var buttonClasses = 'nav-button';
      var url = new URL(document.URL);
      var pathName = url.pathname.slice(1);
      var path = pathName.indexOf('/') !== -1 ? pathName.slice(0, pathName.indexOf('/')) : pathName;

      if (self.state.active === index || path === item.toLowerCase()) {
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


// React.render(<NavigationBar buttons={['Breaking News', 'Tech', 'Science', 'Business']}/>, document.getElementById('header'));
