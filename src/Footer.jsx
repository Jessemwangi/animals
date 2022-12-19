import React from 'react';

const Footer = () => {
    const style = {
        display:"Flex",
        flexDirection:"row",
        gap:3,
        justifyContents:"center",
        alignItem:"center",
        backGround:"black",
        color:"snow"
    }
    return (
        <div style={style}>
            <p>All pictures are from source.unsplash.com not my originals</p>
            <p>React 6.4 terms, Dev by Jesse Mwangi</p>
        </div>
    );
};

export default Footer;