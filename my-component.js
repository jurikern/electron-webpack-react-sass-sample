const React = require("react");
const ReactDOM = require("react-dom");

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<MyComponent/> ,
  document.getElementById('content')
);
