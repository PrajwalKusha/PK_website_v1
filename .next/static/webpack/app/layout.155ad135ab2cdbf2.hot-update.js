"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c350627c2545\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzAxNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjMzUwNjI3YzI1NDVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/background.tsx":
/*!***********************************!*\
  !*** ./components/background.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Background: function() { return /* binding */ Background; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _interactive_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-background */ \"(app-pages-browser)/./components/interactive-background.tsx\");\n/* __next_internal_client_entry_do_not_use__ Background auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Background() {\n    _s();\n    const { theme, resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 -z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                    mode: \"wait\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: 1\n                        },\n                        exit: {\n                            opacity: 0\n                        },\n                        transition: {\n                            duration: 0.7\n                        },\n                        className: \"w-full h-full \".concat(resolvedTheme === \"dark\" ? \"bg-[linear-gradient(135deg,#006B85_0%,#001B48_50%,#1E0935_100%)] opacity-100\" : \"bg-gradient-to-br from-blue-100 via-indigo-50 to-cyan-100 opacity-90\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 \".concat(resolvedTheme === \"dark\" ? \"bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.03)_25%,transparent_50%)]\" : \"bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_25%,transparent_50%)]\")\n                        }, void 0, false, {\n                            fileName: \"/Users/prajwalkusha/Desktop/PK_V1 copy/components/background.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, resolvedTheme, false, {\n                        fileName: \"/Users/prajwalkusha/Desktop/PK_V1 copy/components/background.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/prajwalkusha/Desktop/PK_V1 copy/components/background.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/prajwalkusha/Desktop/PK_V1 copy/components/background.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_interactive_background__WEBPACK_IMPORTED_MODULE_3__.InteractiveBackground, {}, void 0, false, {\n                fileName: \"/Users/prajwalkusha/Desktop/PK_V1 copy/components/background.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Background, \"FdYNd/l6WgAzHtpAjGSneNo5ZTQ=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = Background;\nvar _c;\n$RefreshReg$(_c, \"Background\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYmFja2dyb3VuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV1QztBQUNpQjtBQUNaO0FBQ3FCO0FBRTFELFNBQVNNOztJQUNkLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUUsR0FBR1IscURBQVFBO0lBQ3pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUk8sV0FBVztJQUNiLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0QsU0FBUyxPQUFPO0lBRXJCLHFCQUNFOzswQkFDRSw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNWLDBEQUFlQTtvQkFBQ1csTUFBSzs4QkFDcEIsNEVBQUNaLGlEQUFNQSxDQUFDVSxHQUFHO3dCQUVURyxTQUFTOzRCQUFFQyxTQUFTO3dCQUFFO3dCQUN0QkMsU0FBUzs0QkFBRUQsU0FBUzt3QkFBRTt3QkFDdEJFLE1BQU07NEJBQUVGLFNBQVM7d0JBQUU7d0JBQ25CRyxZQUFZOzRCQUFFQyxVQUFVO3dCQUFJO3dCQUM1QlAsV0FBVyxpQkFJVixPQUhDSixrQkFBa0IsU0FDZCxpRkFDQTtrQ0FHTiw0RUFBQ0c7NEJBQ0NDLFdBQVcsb0JBSVYsT0FIQ0osa0JBQWtCLFNBQ2QsNkZBQ0E7Ozs7Ozt1QkFmSEE7Ozs7Ozs7Ozs7Ozs7OzswQkFxQlgsOERBQUNILDBFQUFxQkE7Ozs7Ozs7QUFHNUI7R0F2Q2dCQzs7UUFDbUJOLGlEQUFRQTs7O0tBRDNCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JhY2tncm91bmQudHN4PzQxMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnRlcmFjdGl2ZUJhY2tncm91bmQgfSBmcm9tIFwiLi9pbnRlcmFjdGl2ZS1iYWNrZ3JvdW5kXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCYWNrZ3JvdW5kKCkge1xuICBjb25zdCB7IHRoZW1lLCByZXNvbHZlZFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgLXotMTBcIj5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBrZXk9e3Jlc29sdmVkVGhlbWV9XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjcgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLWZ1bGwgJHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRUaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgICAgICAgICA/IFwiYmctW2xpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAwNkI4NV8wJSwjMDAxQjQ4XzUwJSwjMUUwOTM1XzEwMCUpXSBvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgOiBcImJnLWdyYWRpZW50LXRvLWJyIGZyb20tYmx1ZS0xMDAgdmlhLWluZGlnby01MCB0by1jeWFuLTEwMCBvcGFjaXR5LTkwXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgJHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZFRoZW1lID09PSBcImRhcmtcIiBcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1bbGluZWFyLWdyYWRpZW50KHRvX3JpZ2h0LHRyYW5zcGFyZW50XzAlLHJnYmEoMjU1LDI1NSwyNTUsMC4wMylfMjUlLHRyYW5zcGFyZW50XzUwJSldXCJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1bbGluZWFyLWdyYWRpZW50KHRvX3JpZ2h0LHRyYW5zcGFyZW50XzAlLHJnYmEoMjU1LDI1NSwyNTUsMC4wNSlfMjUlLHRyYW5zcGFyZW50XzUwJSldXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJbnRlcmFjdGl2ZUJhY2tncm91bmQgLz5cbiAgICA8Lz5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbInVzZVRoZW1lIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbnRlcmFjdGl2ZUJhY2tncm91bmQiLCJCYWNrZ3JvdW5kIiwidGhlbWUiLCJyZXNvbHZlZFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJtb2RlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/background.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/interactive-background.tsx":
/*!***********************************************!*\
  !*** ./components/interactive-background.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InteractiveBackground: function() { return /* binding */ InteractiveBackground; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ InteractiveBackground auto */ \nvar _s = $RefreshSig$();\n\n\nfunction InteractiveBackground() {\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const particles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const mousePosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    const animationFrameId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        if (!canvas) return;\n        const ctx = canvas.getContext(\"2d\");\n        if (!ctx) return;\n        const resizeCanvas = ()=>{\n            canvas.width = window.innerWidth;\n            canvas.height = window.innerHeight;\n        };\n        const createParticles = ()=>{\n            particles.current = [];\n            const numberOfParticles = Math.floor(canvas.width * canvas.height / 15000);\n            for(let i = 0; i < numberOfParticles; i++){\n                particles.current.push({\n                    x: Math.random() * canvas.width,\n                    y: Math.random() * canvas.height,\n                    size: Math.random() * 2 + 0.5,\n                    speedX: Math.random() * 0.5 - 0.25,\n                    speedY: Math.random() * 0.5 - 0.25,\n                    opacity: Math.random() * 0.5 + 0.2\n                });\n            }\n        };\n        const drawParticles = ()=>{\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            particles.current.forEach((particle)=>{\n                const distanceX = mousePosition.current.x - particle.x;\n                const distanceY = mousePosition.current.y - particle.y;\n                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);\n                const maxDistance = 150;\n                if (distance < maxDistance) {\n                    const force = (maxDistance - distance) / maxDistance;\n                    particle.x -= distanceX / distance * force * 0.5;\n                    particle.y -= distanceY / distance * force * 0.5;\n                }\n                particle.x += particle.speedX;\n                particle.y += particle.speedY;\n                if (particle.x < 0) particle.x = canvas.width;\n                if (particle.x > canvas.width) particle.x = 0;\n                if (particle.y < 0) particle.y = canvas.height;\n                if (particle.y > canvas.height) particle.y = 0;\n                ctx.beginPath();\n                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);\n                ctx.fillStyle = resolvedTheme === \"dark\" ? \"rgba(255, 255, 255, \".concat(particle.opacity * 0.5, \")\") : \"rgba(0, 0, 0, \".concat(particle.opacity * 0.2, \")\");\n                ctx.fill();\n            });\n            particles.current.forEach((particle, i)=>{\n                for(let j = i + 1; j < particles.current.length; j++){\n                    const dx = particle.x - particles.current[j].x;\n                    const dy = particle.y - particles.current[j].y;\n                    const distance = Math.sqrt(dx * dx + dy * dy);\n                    if (distance < 100) {\n                        ctx.beginPath();\n                        ctx.moveTo(particle.x, particle.y);\n                        ctx.lineTo(particles.current[j].x, particles.current[j].y);\n                        ctx.strokeStyle = resolvedTheme === \"dark\" ? \"rgba(255, 255, 255, \".concat((1 - distance / 100) * 0.2, \")\") : \"rgba(0, 0, 0, \".concat((1 - distance / 100) * 0.1, \")\");\n                        ctx.stroke();\n                    }\n                }\n            });\n            animationFrameId.current = requestAnimationFrame(drawParticles);\n        };\n        const handleMouseMove = (e)=>{\n            mousePosition.current = {\n                x: e.clientX,\n                y: e.clientY\n            };\n        };\n        window.addEventListener(\"resize\", resizeCanvas);\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        resizeCanvas();\n        createParticles();\n        drawParticles();\n        return ()=>{\n            window.removeEventListener(\"resize\", resizeCanvas);\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n            if (animationFrameId.current) {\n                cancelAnimationFrame(animationFrameId.current);\n            }\n        };\n    }, [\n        resolvedTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef,\n        className: \"fixed inset-0 pointer-events-none\",\n        style: {\n            zIndex: -5\n        }\n    }, void 0, false, {\n        fileName: \"/Users/prajwalkusha/Desktop/PK_V1 copy/components/interactive-background.tsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, this);\n}\n_s(InteractiveBackground, \"mF+pRdtcCFg1tO/O0LLZzShwu3w=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = InteractiveBackground;\nvar _c;\n$RefreshReg$(_c, \"InteractiveBackground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaW50ZXJhY3RpdmUtYmFja2dyb3VuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwQztBQUNIO0FBV2hDLFNBQVNHOztJQUNkLE1BQU1DLFlBQVlILDZDQUFNQSxDQUFvQjtJQUM1QyxNQUFNLEVBQUVJLGFBQWEsRUFBRSxHQUFHSCxxREFBUUE7SUFDbEMsTUFBTUksWUFBWUwsNkNBQU1BLENBQWEsRUFBRTtJQUN2QyxNQUFNTSxnQkFBZ0JOLDZDQUFNQSxDQUFDO1FBQUVPLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQzFDLE1BQU1DLG1CQUFtQlQsNkNBQU1BO0lBRS9CRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFNBQVNQLFVBQVVRLE9BQU87UUFDaEMsSUFBSSxDQUFDRCxRQUFRO1FBRWIsTUFBTUUsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQ0QsS0FBSztRQUVWLE1BQU1FLGVBQWU7WUFDbkJKLE9BQU9LLEtBQUssR0FBR0MsT0FBT0MsVUFBVTtZQUNoQ1AsT0FBT1EsTUFBTSxHQUFHRixPQUFPRyxXQUFXO1FBQ3BDO1FBRUEsTUFBTUMsa0JBQWtCO1lBQ3RCZixVQUFVTSxPQUFPLEdBQUcsRUFBRTtZQUN0QixNQUFNVSxvQkFBb0JDLEtBQUtDLEtBQUssQ0FBQyxPQUFRUixLQUFLLEdBQUdMLE9BQU9RLE1BQU0sR0FBSTtZQUV0RSxJQUFLLElBQUlNLElBQUksR0FBR0EsSUFBSUgsbUJBQW1CRyxJQUFLO2dCQUMxQ25CLFVBQVVNLE9BQU8sQ0FBQ2MsSUFBSSxDQUFDO29CQUNyQmxCLEdBQUdlLEtBQUtJLE1BQU0sS0FBS2hCLE9BQU9LLEtBQUs7b0JBQy9CUCxHQUFHYyxLQUFLSSxNQUFNLEtBQUtoQixPQUFPUSxNQUFNO29CQUNoQ1MsTUFBTUwsS0FBS0ksTUFBTSxLQUFLLElBQUk7b0JBQzFCRSxRQUFRTixLQUFLSSxNQUFNLEtBQUssTUFBTTtvQkFDOUJHLFFB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LENBQUMsSUFBSUEsV0FBVyxHQUFFLElBQUssS0FBSTt3QkFDaER6QixJQUFJeUMsTUFBTTtvQkFDWjtnQkFDRjtZQUNGO1lBRUE1QyxpQkFBaUJFLE9BQU8sR0FBRzJDLHNCQUFzQnZCO1FBQ25EO1FBRUEsTUFBTXdCLGtCQUFrQixDQUFDQztZQUN2QmxELGNBQWNLLE9BQU8sR0FBRztnQkFDdEJKLEdBQUdpRCxFQUFFQyxPQUFPO2dCQUNaakQsR0FBR2dELEVBQUVFLE9BQU87WUFDZDtRQUNGO1FBRUExQyxPQUFPMkMsZ0JBQWdCLENBQUMsVUFBVTdDO1FBQ2xDRSxPQUFPMkMsZ0JBQWdCLENBQUMsYUFBYUo7UUFFckN6QztRQUNBTTtRQUNBVztRQUVBLE9BQU87WUFDTGYsT0FBTzRDLG1CQUFtQixDQUFDLFVBQVU5QztZQUNyQ0UsT0FBTzRDLG1CQUFtQixDQUFDLGFBQWFMO1lBQ3hDLElBQUk5QyxpQkFBaUJFLE9BQU8sRUFBRTtnQkFDNUJrRCxxQkFBcUJwRCxpQkFBaUJFLE9BQU87WUFDL0M7UUFDRjtJQUNGLEdBQUc7UUFBQ1A7S0FBYztJQUVsQixxQkFDRSw4REFBQ007UUFDQ29ELEtBQUszRDtRQUNMNEQsV0FBVTtRQUNWQyxPQUFPO1lBQUVDLFFBQVEsQ0FBQztRQUFFOzs7Ozs7QUFHMUI7R0FySGdCL0Q7O1FBRVlELGlEQUFRQTs7O0tBRnBCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ludGVyYWN0aXZlLWJhY2tncm91bmQudHN4P2IwNzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5cbmludGVyZmFjZSBQYXJ0aWNsZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNwZWVkWDogbnVtYmVyO1xuICBzcGVlZFk6IG51bWJlcjtcbiAgb3BhY2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW50ZXJhY3RpdmVCYWNrZ3JvdW5kKCkge1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB7IHJlc29sdmVkVGhlbWUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHBhcnRpY2xlcyA9IHVzZVJlZjxQYXJ0aWNsZVtdPihbXSk7XG4gIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB1c2VSZWYoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBhbmltYXRpb25GcmFtZUlkID0gdXNlUmVmPG51bWJlcj4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzaXplQ2FudmFzID0gKCkgPT4ge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVQYXJ0aWNsZXMgPSAoKSA9PiB7XG4gICAgICBwYXJ0aWNsZXMuY3VycmVudCA9IFtdO1xuICAgICAgY29uc3QgbnVtYmVyT2ZQYXJ0aWNsZXMgPSBNYXRoLmZsb29yKChjYW52YXMud2lkdGggKiBjYW52YXMuaGVpZ2h0KSAvIDE1MDAwKTtcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBhcnRpY2xlczsgaSsrKSB7XG4gICAgICAgIHBhcnRpY2xlcy5jdXJyZW50LnB1c2goe1xuICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgsXG4gICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgc2l6ZTogTWF0aC5yYW5kb20oKSAqIDIgKyAwLjUsXG4gICAgICAgICAgc3BlZWRYOiBNYXRoLnJhbmRvbSgpICogMC41IC0gMC4yNSxcbiAgICAgICAgICBzcGVlZFk6IE1hdGgucmFuZG9tKCkgKiAwLjUgLSAwLjI1LFxuICAgICAgICAgIG9wYWNpdHk6IE1hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkcmF3UGFydGljbGVzID0gKCkgPT4ge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICBwYXJ0aWNsZXMuY3VycmVudC5mb3JFYWNoKChwYXJ0aWNsZSkgPT4ge1xuICAgICAgICBjb25zdCBkaXN0YW5jZVggPSBtb3VzZVBvc2l0aW9uLmN1cnJlbnQueCAtIHBhcnRpY2xlLng7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlWSA9IG1vdXNlUG9zaXRpb24uY3VycmVudC55IC0gcGFydGljbGUueTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcbiAgICAgICAgY29uc3QgbWF4RGlzdGFuY2UgPSAxNTA7XG4gICAgICAgIFxuICAgICAgICBpZiAoZGlzdGFuY2UgPCBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgIGNvbnN0IGZvcmNlID0gKG1heERpc3RhbmNlIC0gZGlzdGFuY2UpIC8gbWF4RGlzdGFuY2U7XG4gICAgICAgICAgcGFydGljbGUueCAtPSAoZGlzdGFuY2VYIC8gZGlzdGFuY2UpICogZm9yY2UgKiAwLjU7XG4gICAgICAgICAgcGFydGljbGUueSAtPSAoZGlzdGFuY2VZIC8gZGlzdGFuY2UpICogZm9yY2UgKiAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJ0aWNsZS54ICs9IHBhcnRpY2xlLnNwZWVkWDtcbiAgICAgICAgcGFydGljbGUueSArPSBwYXJ0aWNsZS5zcGVlZFk7XG5cbiAgICAgICAgaWYgKHBhcnRpY2xlLnggPCAwKSBwYXJ0aWNsZS54ID0gY2FudmFzLndpZHRoO1xuICAgICAgICBpZiAocGFydGljbGUueCA+IGNhbnZhcy53aWR0aCkgcGFydGljbGUueCA9IDA7XG4gICAgICAgIGlmIChwYXJ0aWNsZS55IDwgMCkgcGFydGljbGUueSA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIGlmIChwYXJ0aWNsZS55ID4gY2FudmFzLmhlaWdodCkgcGFydGljbGUueSA9IDA7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHBhcnRpY2xlLngsIHBhcnRpY2xlLnksIHBhcnRpY2xlLnNpemUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHJlc29sdmVkVGhlbWUgPT09ICdkYXJrJyBcbiAgICAgICAgICA/IGByZ2JhKDI1NSwgMjU1LCAyNTUsICR7cGFydGljbGUub3BhY2l0eSAqIDAuNX0pYFxuICAgICAgICAgIDogYHJnYmEoMCwgMCwgMCwgJHtwYXJ0aWNsZS5vcGFjaXR5ICogMC4yfSlgO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhcnRpY2xlcy5jdXJyZW50LmZvckVhY2goKHBhcnRpY2xlLCBpKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHBhcnRpY2xlcy5jdXJyZW50Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgZHggPSBwYXJ0aWNsZS54IC0gcGFydGljbGVzLmN1cnJlbnRbal0ueDtcbiAgICAgICAgICBjb25zdCBkeSA9IHBhcnRpY2xlLnkgLSBwYXJ0aWNsZXMuY3VycmVudFtqXS55O1xuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDEwMCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocGFydGljbGVzLmN1cnJlbnRbal0ueCwgcGFydGljbGVzLmN1cnJlbnRbal0ueSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSByZXNvbHZlZFRoZW1lID09PSAnZGFyaydcbiAgICAgICAgICAgICAgPyBgcmdiYSgyNTUsIDI1NSwgMjU1LCAkeygxIC0gZGlzdGFuY2UgLyAxMDApICogMC4yfSlgXG4gICAgICAgICAgICAgIDogYHJnYmEoMCwgMCwgMCwgJHsoMSAtIGRpc3RhbmNlIC8gMTAwKSAqIDAuMX0pYDtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd1BhcnRpY2xlcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBtb3VzZVBvc2l0aW9uLmN1cnJlbnQgPSB7XG4gICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgeTogZS5jbGllbnRZLFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgXG4gICAgcmVzaXplQ2FudmFzKCk7XG4gICAgY3JlYXRlUGFydGljbGVzKCk7XG4gICAgZHJhd1BhcnRpY2xlcygpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICBpZiAoYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50KSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3Jlc29sdmVkVGhlbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxjYW52YXNcbiAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgIHN0eWxlPXt7IHpJbmRleDogLTUgfX1cbiAgICAvPlxuICApO1xufSAiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlVGhlbWUiLCJJbnRlcmFjdGl2ZUJhY2tncm91bmQiLCJjYW52YXNSZWYiLCJyZXNvbHZlZFRoZW1lIiwicGFydGljbGVzIiwibW91c2VQb3NpdGlvbiIsIngiLCJ5IiwiYW5pbWF0aW9uRnJhbWVJZCIsImNhbnZhcyIsImN1cnJlbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjcmVhdGVQYXJ0aWNsZXMiLCJudW1iZXJPZlBhcnRpY2xlcyIsIk1hdGgiLCJmbG9vciIsImkiLCJwdXNoIiwicmFuZG9tIiwic2l6ZSIsInNwZWVkWCIsInNwZWVkWSIsIm9wYWNpdHkiLCJkcmF3UGFydGljbGVzIiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsInBhcnRpY2xlIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZGlzdGFuY2UiLCJzcXJ0IiwibWF4RGlzdGFuY2UiLCJmb3JjZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImoiLCJsZW5ndGgiLCJkeCIsImR5IiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVmIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ6SW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/interactive-background.tsx\n"));

/***/ })

});