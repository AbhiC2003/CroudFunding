import { render, fireEvent, screen } from "@testing-library/react";
import LoginPage from "../../frontend/src/pages/LoginPage";
import { AuthContext } from "../../frontend/src/context/AuthContext";

test("renders login form", () => {
  render(
    <AuthContext.Provider value={{ login: jest.fn() }}>
      <LoginPage />
    </AuthContext.Provider>
  );

  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});

test("submits form with valid input", () => {
  const mockLogin = jest.fn();
  render(
    <AuthContext.Provider value={{ login: mockLogin }}>
      <LoginPage />
    </AuthContext.Provider>
  );

  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "password123" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(mockLogin).toHaveBeenCalledWith("test@example.com", "password123");
});
