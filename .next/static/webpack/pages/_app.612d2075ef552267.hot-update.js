"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/header.module.css */ \"./styles/components/header.module.css\");\n/* harmony import */ var _styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HeaderComponent = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref[0], setShow = ref[1];\n    if (true) {\n        var user = JSON.parse(\"\".concat(localStorage.getItem(\"userTokens\")));\n        if (user === null || user === void 0 ? void 0 : user.data) {\n            setShow(true);\n        } else {\n            setShow(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                onClick: function() {\n                    return router.push(\"/\");\n                },\n                children: \"Chatbot\"\n            }, void 0, false, {\n                fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().rightBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navItem),\n                                onClick: function() {\n                                    return router.push(\"/\");\n                                },\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this),\n                            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navItem),\n                                onClick: function() {\n                                    return router.push(\"/login\");\n                                },\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this),\n                            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navItem),\n                                onClick: function() {\n                                    return router.push(\"/register\");\n                                },\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navItem),\n                                onClick: function() {\n                                    return router.push(\"/feedback\");\n                                },\n                                children: \"Feedback\"\n                            }, void 0, false, {\n                                fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navItem),\n                                onClick: function() {\n                                    return router.push(\"/help\");\n                                },\n                                children: \"Help\"\n                            }, void 0, false, {\n                                fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        circular: true,\n                        inverted: true,\n                        color: \"green\",\n                        size: \"medium\",\n                        onClick: function() {\n                            return router.push(\"/adminLogin\");\n                        },\n                        children: \"Admin\"\n                    }, void 0, false, {\n                        fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ad.msystechnologies.com/vnaik/Documents/deepu/Chatbot-frontend/components/header.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(HeaderComponent, \"kip7PLEoj5zu8mMumTu/W/gd4s8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = HeaderComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderComponent);\nvar _c;\n$RefreshReg$(_c, \"HeaderComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEyQztBQUNnQjtBQUVuQjtBQUNBOztBQUV4QyxJQUFNSyxlQUFlLEdBQUcsV0FBTTs7SUFDNUIsSUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLElBQXdCRCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUnpDLElBUWEsR0FBYUEsR0FBZSxHQUE1QixFQVJiLE9BUXNCLEdBQUlBLEdBQWUsR0FBbkI7SUFFcEIsSUFBSSxJQUE2QixFQUFFO1FBQ2pDLElBQU1NLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBQyxDQUFxQyxPQUFuQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUUsQ0FBQztRQUNoRSxJQUFJSixJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLElBQUksQ0FBRUssSUFBSSxFQUFFO1lBQ2ROLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNmLE1BQU07WUFDTEEsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hCO0tBQ0Y7SUFFRCxxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUVmLHVGQUFlOzswQkFDN0IsOERBQUNpQixJQUFFO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1iLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFBQTswQkFBRSxTQUFPOzs7OztxQkFBSzswQkFDakQsOERBQUNMLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWYsc0ZBQWM7O2tDQUM1Qiw4REFBQ2MsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFZiwwRkFBa0I7OzBDQUNoQyw4REFBQ2MsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFZixxRkFBYTtnQ0FBRWtCLE9BQU8sRUFBRTsyQ0FBTWIsTUFBTSxDQUFDYyxJQUFJLENBQUMsR0FBRyxDQUFDO2lDQUFBOzBDQUFFLE1BRWhFOzs7OztxQ0FBTTs0QkFDTGIsSUFBSSxrQkFDSCw4REFBQ1EsS0FBRztnQ0FDRkMsU0FBUyxFQUFFZixxRkFBYTtnQ0FDeEJrQixPQUFPLEVBQUU7MkNBQU1iLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQ0FBQTswQ0FDckMsT0FFRDs7Ozs7cUNBQU07NEJBRVBiLElBQUksa0JBQ0gsOERBQUNRLEtBQUc7Z0NBQ0ZDLFNBQVMsRUFBRWYscUZBQWE7Z0NBQ3hCa0IsT0FBTyxFQUFFOzJDQUFNYixNQUFNLENBQUNjLElBQUksQ0FBQyxXQUFXLENBQUM7aUNBQUE7MENBQ3hDLFVBRUQ7Ozs7O3FDQUFNOzBDQUVSLDhEQUFDTCxLQUFHO2dDQUNGQyxTQUFTLEVBQUVmLHFGQUFhO2dDQUN4QmtCLE9BQU8sRUFBRTsyQ0FBTWIsTUFBTSxDQUFDYyxJQUFJLENBQUMsV0FBVyxDQUFDO2lDQUFBOzBDQUN4QyxVQUVEOzs7OztxQ0FBTTswQ0FDTiw4REFBQ0wsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFZixxRkFBYTtnQ0FBRWtCLE9BQU8sRUFBRTsyQ0FBTWIsTUFBTSxDQUFDYyxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUFBOzBDQUFFLE1BRXBFOzs7OztxQ0FBTTs7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDcEIscURBQU07d0JBQ0x3QixRQUFRO3dCQUNSQyxRQUFRO3dCQUNSQyxLQUFLLEVBQUMsT0FBTzt3QkFDYkMsSUFBSSxFQUFDLFFBQVE7d0JBQ2JSLE9BQU8sRUFBRTttQ0FBTWIsTUFBTSxDQUFDYyxJQUFJLENBQUMsYUFBYSxDQUFDO3lCQUFBO2tDQUVaLE9BRS9COzs7Ozs2QkFBUzs7Ozs7O3FCQUNMOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0E1REtmLGVBQWU7O1FBQ0pELGtEQUFTOzs7QUFEcEJDLEtBQUFBLGVBQWU7QUE4RHJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Pzg3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL2hlYWRlci5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEhlYWRlckNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclRva2Vuc1wiKX1gKTtcbiAgICBpZiAodXNlcj8uZGF0YSkge1xuICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PkNoYXRib3Q8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJpZ2h0Qm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW19IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Nob3cgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2hvdyAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUubmF2SXRlbX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcmVnaXN0ZXJcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUubmF2SXRlbX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2ZlZWRiYWNrXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZlZWRiYWNrXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW19IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2hlbHBcIil9PlxuICAgICAgICAgICAgSGVscFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNpcmN1bGFyXG4gICAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9hZG1pbkxvZ2luXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgey8qIDxJY29uIG5hbWU9XCJhZG1pblwiIC8+ICovfVxuICAgICAgICAgIEFkbWluXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwic3R5bGUiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSGVhZGVyQ29tcG9uZW50Iiwicm91dGVyIiwic2hvdyIsInNldFNob3ciLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsIm9uQ2xpY2siLCJwdXNoIiwicmlnaHRCb3giLCJuYXZDb250YWluZXIiLCJuYXZJdGVtIiwiY2lyY3VsYXIiLCJpbnZlcnRlZCIsImNvbG9yIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n");

/***/ })

});