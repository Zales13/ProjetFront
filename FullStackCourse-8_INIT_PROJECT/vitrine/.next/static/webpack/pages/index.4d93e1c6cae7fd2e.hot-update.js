/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MenuComponent.tsx":
/*!**************************************!*\
  !*** ./components/MenuComponent.tsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var my_lib_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my-lib-ui */ \"./node_modules/my-lib-ui/dist/index.modern.js\");\n/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FooterComponent */ \"./components/FooterComponent.tsx\");\n/* harmony import */ var _components_HeadComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeadComponent */ \"./components/HeadComponent.tsx\");\n/* harmony import */ var _components_MenuComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MenuComponent */ \"./components/MenuComponent.tsx\");\n/* harmony import */ var _components_MenuComponent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_MenuComponent__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" HEADER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_MenuComponent__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(my_lib_ui__WEBPACK_IMPORTED_MODULE_1__.InputTextComponent, {\n                        label: \"Nom\",\n                        placeholder: \"Votre nom\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(my_lib_ui__WEBPACK_IMPORTED_MODULE_1__.InputTextComponent, {\n                        label: \"Pr\\xe9nom\",\n                        placeholder: \"Votre pr\\xe9nom\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(my_lib_ui__WEBPACK_IMPORTED_MODULE_1__.InputTextComponent, {\n                        label: \"E-mail\",\n                        placeholder: \"Votre e-mail\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(my_lib_ui__WEBPACK_IMPORTED_MODULE_1__.InputTextComponent, {\n                        label: \"Num\\xe9ro de t\\xe9l\\xe9phone\",\n                        placeholder: \"Num\\xe9ro\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FooterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Issa\\\\Documents\\\\GitHub\\\\FullStackCourse-8_INIT_PROJECT\\\\vitrine\\\\pages\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 23\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBK0M7QUFHYTtBQUNKO0FBQ0E7QUFHeEQsSUFBTUksSUFBSSxHQUFhLFdBQU07SUFDM0IscUJBRUU7OzBCQUFFLDhEQUFDQyxJQUFFOzBCQUFDLFNBQU87Ozs7O3FCQUFLOzBCQUFBLDhEQUFDQyxLQUFHOztrQ0FFdEIsOERBQUNILGtFQUFhO2tDQUFDLEdBQUM7Ozs7OzZCQUFnQjtrQ0FDOUIsOERBQUNELGlFQUFhOzs7OzZCQUFHO2tDQUNqQiw4REFBQ0YseURBQWtCO3dCQUFDTyxLQUFLLEVBQUMsS0FBSzt3QkFBQ0MsV0FBVyxFQUFDLFdBQVc7Ozs7OzZCQUFHO2tDQUMxRCw4REFBQ1IseURBQWtCO3dCQUFDTyxLQUFLLEVBQUMsV0FBUTt3QkFBQ0MsV0FBVyxFQUFDLGlCQUFjOzs7Ozs2QkFBRztrQ0FDaEUsOERBQUNSLHlEQUFrQjt3QkFBQ08sS0FBSyxFQUFDLFFBQVE7d0JBQUNDLFdBQVcsRUFBQyxjQUFjOzs7Ozs2QkFBRztrQ0FDaEUsOERBQUNSLHlEQUFrQjt3QkFBQ08sS0FBSyxFQUFDLDhCQUFxQjt3QkFBQ0MsV0FBVyxFQUFDLFdBQVE7Ozs7OzZCQUFHO2tDQUN2RSw4REFBQ0MsTUFBSTs7Ozs2QkFBUTtrQ0FDYiw4REFBQ1IsbUVBQWU7Ozs7NkJBQUc7Ozs7OztxQkFDZjs7b0JBQUcsQ0FDVDtBQUNKLENBQUM7QUFmS0csS0FBQUEsSUFBSTtBQWlCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0VGV4dENvbXBvbmVudCB9IGZyb20gXCJteS1saWItdWlcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBTZWxlY3RDb21wb25lbnQgZnJvbSBcIm15LWxpYi11aVwiO1xyXG5pbXBvcnQgRm9vdGVyQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSGVhZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBNZW51Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVDb21wb25lbnRcIjtcclxuXHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDw+PGgxPiBIRUFERVI8L2gxPjxkaXY+XHJcbiAgICAgIFxyXG4gICAgPE1lbnVDb21wb25lbnQ+IDwvTWVudUNvbXBvbmVudD5cclxuICAgICAgPEhlYWRDb21wb25lbnQgLz5cclxuICAgICAgPElucHV0VGV4dENvbXBvbmVudCBsYWJlbD1cIk5vbVwiIHBsYWNlaG9sZGVyPVwiVm90cmUgbm9tXCIgLz5cclxuICAgICAgPElucHV0VGV4dENvbXBvbmVudCBsYWJlbD1cIlByw6lub21cIiBwbGFjZWhvbGRlcj1cIlZvdHJlIHByw6lub21cIiAvPlxyXG4gICAgICA8SW5wdXRUZXh0Q29tcG9uZW50IGxhYmVsPVwiRS1tYWlsXCIgcGxhY2Vob2xkZXI9XCJWb3RyZSBlLW1haWxcIiAvPlxyXG4gICAgICA8SW5wdXRUZXh0Q29tcG9uZW50IGxhYmVsPVwiTnVtw6lybyBkZSB0w6lsw6lwaG9uZVwiIHBsYWNlaG9sZGVyPVwiTnVtw6lyb1wiIC8+XHJcbiAgICAgIDxtYWluPjwvbWFpbj5cclxuICAgICAgPEZvb3RlckNvbXBvbmVudCAvPlxyXG4gICAgPC9kaXY+PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJJbnB1dFRleHRDb21wb25lbnQiLCJGb290ZXJDb21wb25lbnQiLCJIZWFkQ29tcG9uZW50IiwiTWVudUNvbXBvbmVudCIsIkhvbWUiLCJoMSIsImRpdiIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});