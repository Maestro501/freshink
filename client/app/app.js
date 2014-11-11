var Route = ReactRouter.Route;
var Routes = ReactRouter.Routes;

var Navigation = require('./components/nav/nav.js');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation/>
        <this.props.activeRouteHandler/>
      </div>
    );
  }
});

var Landing = React.createClass({
  render: function () {
    return (
      <div>Landing</div>
    );
  }
});
var Tech = React.createClass({
  render: function () {
    return (
      <div>Tech</div>
    );
  }
});

var routes = (
  <Routes location="history">
    <Route name="app" path="/" handler={App}>
      <Route name="landing" path="/" handler={Landing}></Route>
      <Route name="tech" path="/tech" handler={Tech}>
      </Route>

    </Route>
  </Routes>
);

React.renderComponent(routes, document.body);
