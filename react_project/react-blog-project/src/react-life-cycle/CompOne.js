import { Component } from "react";

class CompOne extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }

  getServerData() {
    // api
  }

  // mounting
  componentDidMount() {
    this.getServerData();
    console.log("class comp one is mounted");
  }

  componentDidUpdate() {
    console.log("counter state value is changed");
  }

  componentWillUnmount() {
    console.log("class comp one is unmounted");
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          INC Class Comp Counter
        </button>
        <h4>Class Comp One {this.state.counter}</h4>
      </>
    );
  }
}

export default CompOne;
