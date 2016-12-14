import React from 'react';
import JSONfn from './utils/jsongn';

(function (exports) {
    "use strict";

    exports.saveComponent = function (obj) {
        return JSONfn.stringify(obj);
    };

    exports.loadComponent = function (str) {
        return React.createClass(JSONfn.parse(str));
    };

} (typeof exports === 'undefined' ? (window.Reactive = {}) : exports));