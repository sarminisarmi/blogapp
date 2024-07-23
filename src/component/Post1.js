import React from "react";

import photo from'./images/download.png';
function Post1(){
    return(
        <div id="Post1">
        
            <img src={photo} alt="javascript" />
        <h2>javascript</h2>
       <p>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Mode</p>
       <button>Read More</button>
       </div>
    );
}
export default Post1;