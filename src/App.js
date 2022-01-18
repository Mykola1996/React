import "./App.css"
import Comments from "./components/Comments/Comments"
import Users from "./components/Users/Users"
import Posts from "./components/Posts/Posts"

function App() {

  return (
      <div>
        <Users/>
        <Posts/>
        <Comments/>
      </div>
  );
}

export default App;