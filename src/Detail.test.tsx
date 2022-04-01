import { render, screen } from "@testing-library/react";
import Detail from "./modules/Detail/Detail";
import { Show, ShowDetail } from "./Store/Shows/InitialState";

describe("Detail", () => {
  it("Should render a detail element", () => {
    const show: Show = {
      id: 0,
      name: "EP1234",
      airtime: "12:34",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus facilis doloremque laudantium, quos quisquam, at numquam dolor voluptate beatae itaque, eligendi voluptatibus perferendis nulla! A eligendi accusantium impedit quam.",
      showName: "The test show",
      showType: "Fiction",
      showId: 1234,
      image:
        "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-geen-afbeelding-beschikbaar-icoon-platte-vector.jpg?ver=6",
    };

    const showDetail: ShowDetail = {
      rating: 5,
      season: 1,
      episode: 2,
    };

    render(
      <Detail
        showDetail={showDetail}
        show={show}
        testid="detail-element"
      ></Detail>
    );
    const detail = screen.getByTestId("detail-element");

    expect(detail).toBeInTheDocument();
  });
});
