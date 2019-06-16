import React, { Component }  from 'react';
const MultilineRenderer = (ltext) =>
        {   console.log(ltext)
            ltext.map(text => {
            return (
                <li>
                    {text}
                </li>
            );
        })
        }
export default MultilineRenderer
