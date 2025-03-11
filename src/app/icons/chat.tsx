import * as React from "react";
import { SVGProps } from "react";
const Chat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#FFFFFF"
      d="M22.5 3.75a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-5.905l-5.952 3.571a1.251 1.251 0 0 1-1.886-.929l-.007-.142v-2.5H7.5A5 5 0 0 1 2.506 19l-.006-.25v-10a5 5 0 0 1 5-5h15ZM17.5 15H10a1.25 1.25 0 0 0 0 2.5h7.5a1.25 1.25 0 0 0 0-2.5Zm2.5-5H10a1.25 1.25 0 0 0 0 2.5h10a1.25 1.25 0 0 0 0-2.5Z"
    />
  </svg>
);
export default Chat;
