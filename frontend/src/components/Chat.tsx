import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import InputBox from "../ui/InputBox";

export default function Chat() {
  const [message, setMessage] = useState<string[]>(["Hi"]);
  const [inputValue, setInputValue] = useState("");
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    //@ts-ignore
    const ws = new WebSocket("ws://localhost:3000");
    //@ts-ignore
    ws.onmessage = (ev) => {
      setMessage((e) => [...e, ev.data]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    wsRef.current = ws;

    
  }, []);

  function handleSubmit() {
    if (wsRef.current && inputValue.trim()) {
      //@ts-ignore
      wsRef.current.send(
        JSON.stringify({
          type: "chat",
          payload: {
            message:  inputValue ,
          },
        })
      );
    }
    setInputValue("");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl h-[80vh] mx-4">
        <div className="border-2 border-gray-800 rounded-lg flex flex-col h-full">
          <div className="flex-1 flex-col gap-4 overflow-y-auto p-4">
            {message.map((e, ind) => (
              <div key={ind} className="">
                {e}
              </div>
            ))}
          </div>
          <div className="p-4 flex gap-4">
            <InputBox
              value={inputValue}
              placeholder="Enter your Message"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button content="Send" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
