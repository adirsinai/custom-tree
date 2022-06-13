import "./treeview.css";
import { useState } from "react";

let TreeView = (props) => {
  let { data } = props;

  return (
    <div className="treeview-root">
      <header>
        <input type="text" placeholder="Enter project name" />
        <button className="btn-assets">Assets List</button>
      </header>
      <article>
        <Tree data={data} />
      </article>
    </div>
  );
};

const Tree = ({ data }) => {
  const [showChildren, setShowChildren] = useState(false);

  if (!data) return null;

  return (
    <ul>
      <li onClick={() => setShowChildren(!showChildren)}>{data.name}</li>
      {showChildren &&
        data.children &&
        data.children.map((child) => {
          return <Tree key={child.name} data={child} />;
        })}
    </ul>
  );
};

export default TreeView;
