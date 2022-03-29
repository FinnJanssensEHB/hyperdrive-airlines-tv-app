import React from "react";
import ShowList from "./ShowList";
import Header from "./Header";

import "./scss/App.scss";

const BASE_URL = "https://api.tvmaze.com/schedule";

interface State {
  items: any[];
  DataLoaded: boolean;
}
class App extends React.Component<any, State> {
  state: Readonly<State> = {
    items: [],
    DataLoaded: false,
  };

  componentDidMount() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataLoaded: true,
        });
      });
  }

  render() {
    const { items, DataLoaded } = this.state;

    if (!DataLoaded)
      return (
        <div>
          <h1> Loading... </h1>{" "}
        </div>
      );

    return (
      <>
        <Header></Header>
        <ShowList items={items}></ShowList>
      </>
    );
  }
}

export default App;
