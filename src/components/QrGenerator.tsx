import { useState } from "react"
import QRCode from "react-qr-code"

const QrGenerator = () => {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')
  return (
    <div className="flex bg-neutral-100 h-screen w-full items-center p-12 justify-center">
      <div className="bg-white p-10 shadow-2xl rounded-2xl border border-neutral-200">
        <h1 className="text-center font-bold text-3xl pb-2">QR code generator</h1>
      <div className="flex items-center justify-center pt-2 pb-6">
        <input value={input} className="border-2 font-medium text-sm text-neutral-600 rounded-lg mr-1 px-3 py-1.5 border-neutral-600" onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter value for QR" name="qr-code" />
        <button className="border-2 hover:scale-107 bg-neutral-600 hover:shadow-2xl text-white ml-1 px-3 py-1.5 border-neutral-600 font-medium rounded-lg text-sm" disabled={input && input.trim() !== ""?false:true} onClick={()=>{
            setQrCode(input);
            setInput('');
            }}>Generate</button>
      </div>
      <div>
        <QRCode value={qrCode} id="qr-code-value" size={400} bgColor="#fff" />
      </div>
      </div>
    </div>
  )
}

export default QrGenerator
