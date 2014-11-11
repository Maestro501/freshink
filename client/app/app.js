// var App = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <header>
//           <ul>
//             <li><Link to="app">Dashboard</Link></li>
//             <li><Link to="inbox">Inbox</Link></li>
//             <li><Link to="calendar">Calendar</Link></li>
//           </ul>
//           Logged in as Joe
//         </header>

//         {/* this is the important part */}
//         <this.props.activeRouteHandler/>
//       </div>
//     );
//   }
// });

// var routes = (
//   <Routes location="history">
//     <Route name="app" path="/" handler={App}>
//       <Route name="inbox" handler={Inbox}/>
//       <Route name="calendar" handler={Calendar}/>
//       <DefaultRoute handler={Dashboard}/>
//     </Route>
//   </Routes>
// );

// React.renderComponent(routes, document.body);
