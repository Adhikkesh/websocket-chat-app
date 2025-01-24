import { createContext, useContext, useEffect, useRef, useState } from "react";

const WebSocketContext = createContext<WebSocket | null>(null);

export default function WebSocketProvider({children,}: {children: React.ReactNode;}) {
  //   const wsRef = useRef<WebSocket | null>(null);
  const [wsValue, setws] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log("WebSocket Connected");
      setws(ws);
    };

    ws.onerror = (ev) => {
      console.log("Error: " + ev);
    };

    ws.onclose = (ev) => {
      console.log("WebSocket Closed");
    };
  }, []);

  return (
    <WebSocketContext.Provider value={wsValue}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocket(): WebSocket | null {
  return useContext(WebSocketContext);
}
