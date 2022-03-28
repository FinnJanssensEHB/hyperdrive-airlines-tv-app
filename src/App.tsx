import React from "react";
import Header from "./Header";
import ListItem from "./ListItem";
import Grid from "@mui/material/Grid";

import "./App.css";

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
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={2} md={4}>
              <ListItem item={item} />
            </Grid>
          ))}
        </Grid>
      </>
      // <div>
      //   {items.map((item) => (
      //     <ListItem item={item} />
      //   ))}
      // </div>
    );
  }
}

export default App;
