import React, { FC } from "react";
import { useState } from "react";
import moment from "moment";
import CreateQrCode from "../CreateQR/CreateQR";

interface FormData {
  url: string;
  px: number;
}

const GetURLInput: FC = () => {
  const [formData, setFormData] = useState<FormData>({ url: "", px: 0 });
  const [create, setCreate] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a URL
          <input type="text" name="url" onChange={handleInputChange}></input>
        </label>
        <label>
          Enter a size
          <input type="text" name="px" onChange={handleInputChange}></input>
        </label>
        <button
          type="submit"
          onClick={() => {
            setCreate((prev) => !prev);
            setDate(new Date());
          }}
        >
          Create QR code
        </button>
      </form>
      {create && (
        <CreateQrCode
          details={{
            QRUrl: formData.url,
            size: formData.px,
            time: moment(date).format("LLLL"),
          }}
        />
      )}
    </>
  );
};
export default GetURLInput;
