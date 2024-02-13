import { render, screen } from "@testing-library/react";
import { GiphyListItem } from ".";
import userEvent from "@testing-library/user-event";
import { item1 } from "../../data/mock-giphy";

const testFn = jest.fn();

describe("Giphy List Item", () => {
  it("should render giphy image and owner correctly", () => {
    render(<GiphyListItem onClick={testFn} item={item1} />);
    const titleEle = screen.getByText("testing title");
    expect(titleEle).toBeInTheDocument();
    const image = screen.getByRole("img");
    expect(image).toHaveProperty("src", item1.images.original.webp);
  });

  it("should trigger onClick function when click on giphy component", () => {
    render(<GiphyListItem onClick={testFn} item={item1} />);
    userEvent.click(screen.getByRole("listitem"));
    expect(testFn).toBeCalled();
  });
});
