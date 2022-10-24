import React from 'react';

type ProfileType ={
    message: string
}
function Post(props:ProfileType) {
    return (
        <div>
            <div>{props.message}</div>
           <button>Send</button>
        </div>
    );
}

export default Post;