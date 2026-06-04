---
title: "React - Component State & Lifecycle"
created: 2019-12-15T15:12:15.599-06:00
modified: 2025-04-13T17:15:43.318-05:00
parent: "[[React - React.js - ReactJS]]"
children: []
---
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
1. When <code>\<Clock /\></code> is passed to <code>ReactDOM.render()</code>, React calls the constructor of the <code>Clock</code> component. Since <code>Clock</code> needs to display the current time, it initializes <code>this.state</code> with an object including the current time. We will later update this state.
2. React then calls the <code>Clock</code> component’s <code>render()</code> method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the <code>Clock</code>’s render output.
3. When the <code>Clock</code> output is inserted in the DOM, React calls the <code>componentDidMount()</code> lifecycle method. Inside it, the <code>Clock</code> component asks the browser to set up a timer to call the component’s <code>tick()</code> method once a second.
4. Every second the browser calls the <code>tick()</code> method. Inside it, the <code>Clock</code> component schedules a UI update by calling <code>setState()</code> with an object containing the current time. Thanks to the <code>setState()</code> call, React knows the state has changed, and calls the <code>render()</code> method again to learn what should be on the screen. This time, <code>this.state.date</code> in the <code>render()</code> method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
5. If the <code>Clock</code> component is ever removed from the DOM, React calls the <code>componentWillUnmount()</code> lifecycle method so the timer is stopped.
