import { render, screen } from "@testing-library/react";
import { GiphyListItem } from ".";
import { IGiphy } from "../../models/giphy";
import exp from "constants";
import userEvent from "@testing-library/user-event";

const item: IGiphy = {
  id: "1",
  rating: "pg",
  title: "testing title",
  slug: "#test",
  url: "testing url",
  username: "test username",
  images: {
    original: {
      url: "url for test",
      height: "100",
      width: "100",
      size: "",
      webp: "http://giphy/test-giphy.webp",
      webp_size: "",
    },
  },
};

const testFn = jest.fn();

describe("Giphy List Item", () => {
  it("should render giphy image and owner correctly", () => {
    render(<GiphyListItem onClick={testFn} item={item} />);
    const titleEle = screen.getByText("testing title");
    expect(titleEle).toBeInTheDocument();
    const image = screen.getByRole("img");
    expect(image).toHaveProperty("src", item.images.original.webp);
  });

  it("should trigger onClick function when click on giphy component", () => {
    render(<GiphyListItem onClick={testFn} item={item} />);
    userEvent.click(screen.getByRole("listitem"));
    expect(testFn).toBeCalled();
  });
});
