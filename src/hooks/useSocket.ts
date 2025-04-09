import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

const useSocket = () => {
  const [socket, setSocket] = useState<Socket<
    DefaultEventsMap,
    DefaultEventsMap
  > | null>(null);

  useEffect(() => {
    // Make sure to only initialize the socket once
    const socketInstance: Socket<DefaultEventsMap, DefaultEventsMap> = io(
      "http://182.252.68.227:3006"
    );

    // Set the socket instance to state
    setSocket(socketInstance);

    // Cleanup socket connection when the component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;
