import React from "react";
interface IChatHistoryProps {
    history : Array<any>
}
export default React.memo(function (Props : IChatHistoryProps) : JSX.Element{
    return (
        <div className="messenger-content_body-message">
            {Props.history.map((item : {
                   avatar : string,
                   message : string,
                   name : string,
                   time : string | null,
                   isYou : boolean
                },index : number) =>
                <div className={"messenger-content_body-message-item " + (item.isYou ? "user-me" : "user-not-you")} key={index}>
                    <div className="messenger-content_body-message-item-avatar">
                        <img src={item.avatar} alt="avatar"/>
                    </div>
                    <div className="messenger-content_body-message-item-content">
                        <div className="messenger-content_body-message-item-content-text">
                            <span>{item.message}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
})