var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentTime: props.start
        };
        window.setInterval(function () {
            _this.setState(function (previousState) { return ({ currentTime: previousState.currentTime - 1 }); });
        }, 1000);
        return _this;
    }
    Timer.prototype.render = function () {
        return (React.createElement("div", null, this.state.currentTime));
    };
    return Timer;
}(Component));
export default Timer;
