import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GetURLInput from "../components/GetURLInput/GetURLInput";
import CreateQrCode from "../components/CreateQR/CreateQR";
import moment from "moment";



describe("Get URL from user", () => {
 test("test input is displayed ", () => {
  render(<GetURLInput />);
    const inputElement = screen.getByRole("input");
    expect(inputElement).toBeInTheDocument();
 });
  test("test button is displayed ", () => {
    render(<GetURLInput />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
