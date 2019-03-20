import React from 'react';

export const Div = (props) => {
   return(
       <div className={`container ${props.optionalClassName}`}>
           {props.children}
       </div>
       )
};