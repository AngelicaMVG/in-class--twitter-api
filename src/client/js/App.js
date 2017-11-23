const React = require("react");
const ReactDOM = require("react-dom");

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>About</h1>
        <p>I am Lauren Ipsum</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
