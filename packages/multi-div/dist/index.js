import React from 'react';
// Helper function
function getCopies(original, times) {
    var result = [];
    for (var i = 0; i < times; i++) {
        result.push(React.createElement("div", null, "original"));
    }
    return result;
}
export default function MultiDiv(props) {
    return (React.createElement(React.Fragment, null, getCopies(props.children, props.times)));
}
