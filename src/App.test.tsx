import axios from "axios";
import { createMemoryHistory } from "history";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { mockGiphyResponse, mockSearchGiphyResponse } from "./data/mock-giphy";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";
const queryClient = new QueryClient();

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const setup = () => {
  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe("App", () => {
  beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it("should render giphy list correctly", async () => {
    mockedAxios.get.mockResolvedValue(mockGiphyResponse);
    setup();
    await waitFor(() => {
      expect(screen.queryByText("Fetching data...")).not.toBeInTheDocument();
    });

    expect(screen.getAllByRole("listitem")).toHaveLength(
      mockGiphyResponse.data.data.length
    );
    expect(
      screen.getByRole("button", { name: "Load More" })
    ).toBeInTheDocument();
  });

  it("should render trending page when loaded", async () => {
    mockedAxios.get.mockResolvedValueOnce(mockGiphyResponse);
    mockedAxios.get.mockResolvedValueOnce(mockSearchGiphyResponse);
    setup();
    await waitFor(() => {
      expect(screen.getByText("Load More")).toBeInTheDocument();
    });

    expect(screen.getAllByRole("listitem")).toHaveLength(
      mockGiphyResponse.data.data.length
    );

    const loadMoreButton = screen.getByRole("button", { name: "Load More" });
    userEvent.click(loadMoreButton);

    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(
        mockGiphyResponse.data.data.length +
          mockSearchGiphyResponse.data.data.length
      );
    });
    expect(
      screen.getByRole("button", { name: "Load More" })
    ).toBeInTheDocument();
  });
});
