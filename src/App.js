import "./App.css";
import TreeView from "./components/treeview/TreeView";
import treeViewData from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="treeview-container">
        <TreeView data={treeViewData} />
      </div>
    </div>
  );
}

export default App;
