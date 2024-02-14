import { render, screen } from "@testing-library/react";
import { SearchBox } from ".";
import userEvent from "@testing-library/user-event";

const testFn = jest.fn();
const testSearchText = "TestABC";

describe("Search Box", () => {
  it("should render correctly", () => {
    render(<SearchBox keyword="" onSearch={testFn} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should trigger onSearch correctly", () => {
    render(<SearchBox keyword="" onSearch={testFn} />);
    const textBox = screen.getByRole("textbox");
    userEvent.type(textBox, testSearchText);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(testFn).toBeCalledWith(testSearchText);
  });
});
