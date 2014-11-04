var NavigationBar = React.createClass({
  render: function() {
    return (
      <div className="nav">
        <a>'Allo, 'Allo!</a>
        <NavButton />
        <NavButton />
      </div>
    );
  }
});

var NavButton = React.createClass({
  render: function() {
    return (
      <a className="nav-button">
        button!
      </a>)
  }
})

React.render(<NavigationBar/>, document.getElementById('content'));
