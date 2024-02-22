// import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
// import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <div className={css.App}>
//       {/* Add your components here */}
//       <NavBarSimple />
//       <Sidebar />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";

// function App() {
//   return <div className="App">
//       <EventsFunctional />
//       <EventsClass />
//   </div>;
// }

// export default App;

// import "./App.css";
// import EventBinding from "./components/EventBinding";

// function App() {
//   return <div className="App">
//       <EventBinding />
//   </div>;
// }

// export default App;

import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return (<div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false} />
  </div>);
}

export default App;