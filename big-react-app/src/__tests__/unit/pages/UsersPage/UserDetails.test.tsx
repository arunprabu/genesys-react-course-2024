import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import UserDetails from "../../../../pages/UsersPage/UserDetails";

// Mocking axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mocking useParams
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // import and spread all the actual react-router-dom's exported stuff
  useParams: () => ({
    userId: "100"
  })
}));

describe("UserDetails", () => {
  it("displays user details fetched from the API", async () => {
    // Mock implementation of axios.get
    const userMockData = {
      id: 100,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890"
    };
    mockedAxios.get.mockResolvedValue({ data: userMockData });

    render(
      <BrowserRouter>
        <UserDetails />
      </BrowserRouter>
    );

    // Wait for axios call to resolve and check if the data is displayed
    await waitFor(() => {
      expect(
        screen.getByText(`Name: ${userMockData.name}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`E-Mail: ${userMockData.email}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Phone: ${userMockData.phone}`)
      ).toBeInTheDocument();
    });
  });
});
