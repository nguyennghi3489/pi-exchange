import { render, screen } from "@testing-library/react";
import { GiphyList } from ".";
import { item1, item2 } from "../../data/mock-giphy";
import userEvent from "@testing-library/user-event";

const testFn = jest.fn();

describe("Giphy List", () => {
  it("should render giphy list correctly", () => {
    render(<GiphyList onClick={testFn} items={[item1, item2]} />);
    const titleEle1 = screen.getByText(item1.title);
    const titleEle2 = screen.getByText(item2.title);
    expect(titleEle1).toBeInTheDocument();
    expect(titleEle2).toBeInTheDocument();
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveProperty("src", item1.images.original.webp);
    expect(images[1]).toHaveProperty("src", item2.images.original.webp);
  });

  it("should trigger when click on giphy item", () => {
    render(<GiphyList onClick={testFn} items={[item1, item2]} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
    userEvent.click(listItems[1]);
    expect(testFn).toBeCalledWith(item2);
  });
});
