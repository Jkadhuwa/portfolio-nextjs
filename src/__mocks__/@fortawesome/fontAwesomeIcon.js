import React from "react";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


config.autoAddCss = false;
library.add(far, fas, fab);
const FontAwesomeIcon = () => {

    return <i className="fa" />; 
    
   

}

export default FontAwesomeIcon;
