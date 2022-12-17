import React, { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [url, setUrl] = useState("https://www.google.com");

  const handleDownload = (e) => {
    const canvas = e.target;
    const imageData = canvas.toDataURL("image/gif");
    const link = document.createElement("a");
    link.download = "my-image.gif";
    link.href = imageData;
    link.click();
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-start m-16 text-center w-[80vw] mx-auto">
      <h1 className="text-4xl font-extrabold underline mb-8">
        QRcode Generator
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="qr" className="hidden">
          Enter QRcode Data
        </label>
        <input
          className="mb-8 p-2 w-[80vw] min-[500px]:w-[60vw] min-w-full text-lg text-gray-500 outline-none border-4 rounded-lg text-center hover:border-gray-500"
          onChange={handleChange}
          type="text"
          id="qr"
          placeholder="http://www.google.com"
        />
      </form>
      <div className="m-6 bg-white border-4 hover:border-8 rounded-lg border-cyan-400 p-4">
        <QRCode
          onClick={handleDownload}
          value={url}
          size={200}
          fgColor="#000000"
          bgColor="#FFFFFF"
        />
      </div>
      <p className="text-2xl font-light text-white">
        Click the QRcode to download it
      </p>
    </div>
  );
}

export default App;
