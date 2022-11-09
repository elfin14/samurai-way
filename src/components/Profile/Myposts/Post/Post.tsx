import React from 'react';

type ProfileType ={
    message: string
    likescount:number
}
function Post(props:ProfileType) {
    return (
        <div>
            <div>{props.message}</div>
            <div>{props.likescount}</div>
        </div>
    );
}

export default Post;