import { FC, useState } from "react";
interface Props {
  details: {
    QRUrl: string;
    size: number;
    time: string;
  };
}
const CreateQrCode: FC<Props> = ({ details }) => {
  const [isShowingDetails, setIsShowingDetails] = useState<boolean>(false);
  const [showingDetailsText, setShowingDetailsText] = useState<string>("Show Details");
   
  function showDetails() {
   setIsShowingDetails((prev) => !prev);
   !isShowingDetails
     ? setShowingDetailsText("Hide details")
     : setShowingDetailsText("Show details");
  }
  return (
    <>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${details.QRUrl}
      &size=${details.size}*${details.size}`}
      ></img>
      <button onClick={showDetails}>{showingDetailsText}</button>
      {isShowingDetails && (
        <div>
          URL: {details.QRUrl}. QR code size: {details.size}*{details.size} px.
          Date: {details.time}.
        </div>
      )}
    </>
  );
};
export default CreateQrCode;
