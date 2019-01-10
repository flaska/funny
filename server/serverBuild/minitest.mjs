import React from 'react';
import ReactDOMServer from 'react-dom/server';

let div  = React.createElement(
    'div',
    {className: 'test'},
    'test'
);

class Test2 extends React.Component {
    render(){
        return div;
    }
}

function Test(props){
    return 'xxx';
}

let res = ReactDOMServer.renderToString(Test2);
console.log(res);