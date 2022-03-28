import ListItem from "./ListItem";
import Grid from "@mui/material/Grid";

function ShowList({ items }: { items: any[] }) {
  return (
    <>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={2} md={4} key={item.id}>
            <ListItem item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ShowList;
