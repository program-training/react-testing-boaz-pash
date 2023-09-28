import { render, screen } from "@testing-library/react";
import CreateQrCode from "../components/CreateQR/CreateQR";
import moment from "moment";
import userEvent from "@testing-library/user-event"
const details = {
  QRUrl: "https://images.pokemontcg.io/base1/4.png",
  size: 10,
  time: moment(new Date()).format("LLLL"),
};

describe("Create QR code", () => {
 test("test details are displayed", async () => {    
   const user = userEvent.setup();
    render(<CreateQrCode details={details} />);
    const detailsElement = screen.getByRole("button");
  await user.click(detailsElement)
  
   expect(screen.getByText(/URL/i)).toBeInTheDocument();
   
  });
  test("test image is displayed", () => {
    render(<CreateQrCode details={details} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
});
