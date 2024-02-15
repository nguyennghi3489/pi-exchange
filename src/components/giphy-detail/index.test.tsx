import { render, screen } from "@testing-library/react";
import { GiphyDetail } from ".";
import userEvent from "@testing-library/user-event";
import { item1 } from "../../data/mock-giphy";

const testFn = jest.fn();

describe("Giphy Detail", () => {
  it("should render giphy detail correctly", () => {
    render(<GiphyDetail onClose={testFn} item={item1} />);
    const titleEle = screen.getByText(`Title: ${item1.title}`);
    expect(titleEle).toBeInTheDocument();
    const ratingEle = screen.getByText(`Rating: ${item1.rating}`);
    expect(ratingEle).toBeInTheDocument();
    const usernameEle = screen.getByText(`Username: ${item1.username}`);
    expect(usernameEle).toBeInTheDocument();
    const image = screen.getByRole("img");
    expect(image).toHaveProperty("src", item1.images.original.webp);
  });

  it("should trigger onClose when click outside element", () => {
    render(
      <div>
        <button>Outside Click</button>
        <GiphyDetail onClose={testFn} item={item1} />
      </div>
    );
    const buttonEle = screen.getByText("Outside Click");
    userEvent.click(buttonEle);
    expect(testFn).toBeCalled();
  });

  it("should trigger onClose when click on Close button", () => {
    render(<GiphyDetail onClose={testFn} item={item1} />);
    const buttonEle = screen.getByText("X");
    userEvent.click(buttonEle);
    expect(testFn).toBeCalled();
  });
});
