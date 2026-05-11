import { UserContext, ChannelContext } from "../App";
import React from "react";

const ComponentF = () => {
  return (
    <div>
        <UserContext.Consumer>
            {topic => {
                return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return (
                                <h2>
                                    React topic : {topic} , {channel}
                                </h2>
                            )
                        }}
                    </ChannelContext.Consumer>
                )
            }}
        </UserContext.Consumer>
    </div>
  );

};

export default ComponentF;
