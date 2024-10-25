"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/register";
exports.ids = ["pages/api/auth/register"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cregister.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cregister.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\register.js */ \"(api)/./pages/api/auth/register.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_register_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_register_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/register\",\n        pathname: \"/api/auth/register\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_auth_register_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1Q3JlZ2lzdGVyLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNFO0FBQzFEO0FBQzREO0FBQzVEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IseUdBQW1CO0FBQ2xEO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VtZW50LWJhY2tlbmQvPzFkYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFxyZWdpc3Rlci5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9yZWdpc3RlclwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvcmVnaXN0ZXJcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cregister.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst secret = process.env.JWT_SECRET;\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, secret, {\n        expiresIn: '1h'\n    });\n}\nfunction verifyToken(token) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secret);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtBQUU5QixTQUFTQyxVQUFVQyxPQUFPO0lBQy9CLE9BQU9OLHdEQUFRLENBQUNNLFNBQVNMLFFBQVE7UUFBRU8sV0FBVztJQUFLO0FBQ3JEO0FBRU8sU0FBU0MsWUFBWUMsS0FBSztJQUMvQixPQUFPViwwREFBVSxDQUFDVSxPQUFPVDtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3QtbWFuYWdlbWVudC1iYWNrZW5kLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5jb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHNlY3JldCwgeyBleHBpcmVzSW46ICcxaCcgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbih0b2tlbikge1xyXG4gIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInNpZ25Ub2tlbiIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    connectionString: process.env.DB_URL\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: (text, params)=>pool.query(text, params)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE9BQU8sSUFBSUQsb0NBQUlBLENBQUM7SUFDcEJFLGtCQUFrQkMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0FBQ3RDO0FBRUEsaUVBQWU7SUFDYkMsT0FBTyxDQUFDQyxNQUFNQyxTQUFXUCxLQUFLSyxLQUFLLENBQUNDLE1BQU1DO0FBQzVDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3QtbWFuYWdlbWVudC1iYWNrZW5kLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJztcclxuXHJcbmNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XHJcbiAgY29ubmVjdGlvblN0cmluZzogcHJvY2Vzcy5lbnYuREJfVVJMLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBxdWVyeTogKHRleHQsIHBhcmFtcykgPT4gcG9vbC5xdWVyeSh0ZXh0LCBwYXJhbXMpLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiUG9vbCIsInBvb2wiLCJjb25uZWN0aW9uU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIkRCX1VSTCIsInF1ZXJ5IiwidGV4dCIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/register.js":
/*!************************************!*\
  !*** ./pages/api/auth/register.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n\n\n\nasync function register(req, res) {\n    const { name, email, password } = req.body;\n    // Check if user exists\n    const userExists = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query('SELECT * FROM users WHERE email = $1', [\n        email\n    ]);\n    if (userExists.rows.length > 0) {\n        return res.status(400).json({\n            message: 'Email already exists'\n        });\n    }\n    // Hash password\n    const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10);\n    // Insert user into database\n    const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';\n    const values = [\n        name,\n        email,\n        hashedPassword\n    ];\n    const result = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(query, values);\n    // Generate JWT token\n    const token = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.signToken)({\n        userId: result.rows[0].id\n    });\n    res.status(201).json({\n        token\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNLO0FBQ2E7QUFFL0IsZUFBZUcsU0FBU0MsR0FBRyxFQUFFQyxHQUFHO0lBQzdDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSixJQUFJSyxJQUFJO0lBRTFDLHVCQUF1QjtJQUN2QixNQUFNQyxhQUFhLE1BQU1ULHFEQUFRLENBQUMsd0NBQXdDO1FBQUNNO0tBQU07SUFDakYsSUFBSUcsV0FBV0UsSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRztRQUM5QixPQUFPUixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBdUI7SUFDaEU7SUFFQSxnQkFBZ0I7SUFDaEIsTUFBTUMsaUJBQWlCLE1BQU1qQixrREFBVyxDQUFDUSxVQUFVO0lBRW5ELDRCQUE0QjtJQUM1QixNQUFNRyxRQUFRO0lBQ2QsTUFBTVEsU0FBUztRQUFDYjtRQUFNQztRQUFPVTtLQUFlO0lBQzVDLE1BQU1HLFNBQVMsTUFBTW5CLHFEQUFRLENBQUNVLE9BQU9RO0lBRXJDLHFCQUFxQjtJQUNyQixNQUFNRSxRQUFRbkIsb0RBQVNBLENBQUM7UUFBRW9CLFFBQVFGLE9BQU9SLElBQUksQ0FBQyxFQUFFLENBQUNXLEVBQUU7SUFBQztJQUVwRGxCLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRU07SUFBTTtBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3QtbWFuYWdlbWVudC1iYWNrZW5kLy4vcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIuanM/YzdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9saWIvZGInO1xyXG5pbXBvcnQgeyBzaWduVG9rZW4gfSBmcm9tICcuLi8uLi8uLi9saWIvYXV0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgdXNlciBleGlzdHNcclxuICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgZGIucXVlcnkoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSAkMScsIFtlbWFpbF0pO1xyXG4gIGlmICh1c2VyRXhpc3RzLnJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgZXhpc3RzJyB9KTtcclxuICB9XHJcblxyXG4gIC8vIEhhc2ggcGFzc3dvcmRcclxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XHJcblxyXG4gIC8vIEluc2VydCB1c2VyIGludG8gZGF0YWJhc2VcclxuICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyB1c2VycyAobmFtZSwgZW1haWwsIHBhc3N3b3JkKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFJFVFVSTklORyAqJztcclxuICBjb25zdCB2YWx1ZXMgPSBbbmFtZSwgZW1haWwsIGhhc2hlZFBhc3N3b3JkXTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5xdWVyeShxdWVyeSwgdmFsdWVzKTtcclxuXHJcbiAgLy8gR2VuZXJhdGUgSldUIHRva2VuXHJcbiAgY29uc3QgdG9rZW4gPSBzaWduVG9rZW4oeyB1c2VySWQ6IHJlc3VsdC5yb3dzWzBdLmlkIH0pO1xyXG5cclxuICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHRva2VuIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJkYiIsInNpZ25Ub2tlbiIsInJlZ2lzdGVyIiwicmVxIiwicmVzIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidXNlckV4aXN0cyIsInF1ZXJ5Iiwicm93cyIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwidmFsdWVzIiwicmVzdWx0IiwidG9rZW4iLCJ1c2VySWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/register.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cregister.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();