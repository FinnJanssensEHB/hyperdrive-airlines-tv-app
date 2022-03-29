import ListItem from "./ListItem";

function ShowList({ items }: { items: any[] }) {
  return (
    <>
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </>
  );
}

export default ShowList;
