import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ListItem(props: any) {
  return (
    <Card sx={{ display: "flex", maxWidth: 500, margin: "auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.item.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.item.show.name}
          </Typography>
          <Typography variant="body1">
            Four little dinos and one BIG Gigantosaurus… learn to dare! Rocky,
            Bill, Tiny, and Mazu are four young...
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {props.item.show.type}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.item.show.image.medium}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default ListItem;
