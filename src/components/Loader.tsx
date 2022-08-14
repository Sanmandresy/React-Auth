import React from 'react';

const Loading : React.FC <{visibility:string}> = (props) => {
    const {visibility} = props;
    return(<>
        <div className={visibility}></div>
    </>);
}

export default Loading;