import { UserContext, ChannelContext } from "../App";
import { useContext } from "react";
const ComponentF = () => {
    const topic = useContext(UserContext);
    const channel = useContext(ChannelContext);
  return (
    <div>
        <h2>{topic} - {channel}</h2>
    </div>
  );

};

export default ComponentF;
