import {isWidthUp} from "@material-ui/core/withWidth/index";

export default function fixCss(property, value){
    return function(style, screenWidth) {
        if (isWidthUp('sm', screenWidth)) return style;
        else {
            let s = {...style};
            s[property] = value;
            return s;
        }
    }
}