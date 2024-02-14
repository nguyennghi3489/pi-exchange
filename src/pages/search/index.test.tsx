import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchPage } from ".";
import {
  mockGiphyResponse,
  mockSearchGiphyResponse,
} from "../../data/mock-giphy";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const setup = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SearchPage />
    </QueryClientProvider>
  );
};

beforeEach(() => {
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
  expect(screen.getByRole("button", { name: "Load More" })).toBeInTheDocument();
});

it("should trigger loadmore when click load more and list is shown correctly", async () => {
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
    expect(
      screen.getByRole("button", { name: "Load More" })
    ).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getAllByRole("listitem")).toHaveLength(
      mockGiphyResponse.data.data.length +
        mockSearchGiphyResponse.data.data.length
    );
  });
});
