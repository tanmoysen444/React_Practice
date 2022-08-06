class Parent extends React.Component {
    constructor(props){
      // 1. used to initialise and binding
      super(props);
      this.state = {
        text: "mounting phase",
        show: true,
      };
      console.log("parent constructor executed");
    }
  
    static getDerivedStateFromProps(props, state) {
      // 1.return new state or if no change is required in state then return null
      console.log("parent getDerivedStateFromProps executed");
      return state;
    }
  
    render() {
      // return jsx and no side effects & should not update state in render
      console.log("parent render executed");
  
      return (
        <div>
          <p> {this.state.text}</p>
          <button
            onClick={() => {
              this.updateText("updating phase");
            }}
          >
            click
          </button>

          {/* rendering the child component */}
          {this.state.show ? <Child /> : null}
        </div>
      );
    }
  
    updateText(text) {
      this.setState({
        text: text,
        show: false,
      });
    }
  
    shouldComponentUpdate() {
      console.log("parent shouldComponentUpdate executed");
      return true;
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("parent getSnapshotBeforeUpdate executed");
      console.log("prevState",prevState);
      return "scrolling position";
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("parent componentDidUpdate executed");
      console.log("--------------------------");
      console.log("prevProps", prevProps);
      console.log("prevState", prevState);
      console.log("snapshot", snapshot);
      console.log("--------------------------");
    }
  
    componentDidMount(){
      //first time mounting to real dom
      /* 1. used to make side effects i.e making api calls,
          interacting with dom
          2. used to update the state  */
      console.log("parent componentDidMount executed");
    }
  }
  
  class Child extends React.Component {
    render() {
      return <h2>child component</h2>;
    }
    componentWillUnmount() {
      console.log("child componentWillUnmount executed");
    }
  }
  ReactDOM.render(<Parent />, document.getElementById("container"));
  