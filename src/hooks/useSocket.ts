import { useEffect, useState } from "react";
import io from "socket.io-client";

const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Make sure to only initialize the socket once
    const socketInstance = io("http://182.252.68.227:3006");

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
