import * as React from "react";

function ListItem(props: any) {
  return (
    <div>
      <h1> {props.item.show.name}</h1>
      <h2> {props.item.name}</h2>
      <p>
        {" "}
        {props.item.show.summary
          .replace(/<\/?[^>]+(>|$)/g, "")
          .slice(0, 100)
          .concat("...")}
      </p>
      <b> {props.item.show.type}</b>
    </div>
  );
}

export default ListItem;
