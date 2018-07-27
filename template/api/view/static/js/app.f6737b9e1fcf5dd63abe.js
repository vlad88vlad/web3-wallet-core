webpackJsonp([1],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_history_history__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_history_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_history_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_history_historyETH__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_history_historyETH___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_history_historyETH__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_history_historyToken__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_history_historyToken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_history_historyToken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_localstorage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_localstorage__);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_localstorage___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    // mode: 'history',

    routes: [{
        path: '/',
        name: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home___default.a,
        beforeEnter: (to, from, next) => {
            console.log('home');
            console.log(__WEBPACK_IMPORTED_MODULE_0_vue__["default"].localStorage.get("login"));
            console.log(__WEBPACK_IMPORTED_MODULE_0_vue__["default"].localStorage.get("login") === 'true');
            if (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].localStorage.get("login") === 'true') {
                next();
            } else {
                next('login');
            }
        }
    }, {
        path: '/login',
        name: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login___default.a,
        beforeEnter: (to, from, next) => {
            console.log('login');
            if (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].localStorage.get("login") !== 'true') {
                next();
            } else {
                next('home');
            }
        }
    }, {
        path: '/history',
        component: __WEBPACK_IMPORTED_MODULE_4__components_history_history___default.a,
        children: [{

            path: 'eth',
            component: __WEBPACK_IMPORTED_MODULE_5__components_history_historyETH___default.a
        }, {

            path: 'token/:address',
            component: __WEBPACK_IMPORTED_MODULE_6__components_history_historyToken___default.a
        }],
        beforeEnter: (to, from, next) => {
            if (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].localStorage.get("login") === 'true') {
                next();
            } else {
                next('login');
            }
        }
    }, {
        path: '*',
        redirect: "/"
    }]
}));

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMDA1RUNFOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDA0NzlCOyIgZD0iTTUxMC4zODUsMjg1LjEzNGwtMTU2LjQxLTE1Ni40MWwtMC40OTQsMC4wMjdjLTkuMjUzLTkuMDE2LTIyLjMxOC0xNi42LTM3LjkzNy0yMi4wMjQNCgljLTAuNzU3LTAuMjYzLTEuNTE5LTAuNTItMi4yODctMC43NzJjLTYuOTE1LTIuMjczLTE0LjMwMy00LjEyNy0yMi4wNTgtNS41MDZjLTAuODYxLTAuMTU0LTEuNzI3LTAuMzAxLTIuNTk5LTAuNDQyDQoJYy0wLjg3LTAuMTQxLTEuNzQ2LTAuMjc3LTIuNjI2LTAuNDA2Yy0yLjYzOC0wLjM4OC01LjMxNC0wLjcyMS04LjAyNS0wLjk5OGMtMC45MDQtMC4wOTItMS44MTEtMC4xNzgtMi43MjEtMC4yNTcNCgljLTIuNzM0LTAuMjM4LTUuNS0wLjQyLTguMjk0LTAuNTQxYy0wLjkzMi0wLjA0LTEuODY3LTAuMDc1LTIuODA1LTAuMTAxYy0xLjg3Ny0wLjA1NS0zLjc2NS0wLjA4MS01LjY2NC0wLjA4MQ0KCWMtNy42LDAtMTUuMDE5LDAuNDQtMjIuMTg1LDEuMjc4Yy0xLjc5MiwwLjIwOS0zLjU2NywwLjQ0NC01LjMyNiwwLjcwMmMtMC44NzksMC4xMjktMS43NTQsMC4yNjUtMi42MjYsMC40MDYNCgljLTEuNzQxLDAuMjgzLTMuNDY1LDAuNTg5LTUuMTcsMC45MTljLTIuNTU4LDAuNDk0LTUuMDczLDEuMDQyLTcuNTQyLDEuNjM4Yy01Ljc2MiwxLjM5Mi0xMS4yNzMsMy4wNTgtMTYuNDg0LDQuOTY2DQoJYy0xLjQ4OSwwLjU0NS0yLjk1MywxLjExMS00LjM5MiwxLjY5NWMtNy4xOTQsMi45MjMtMTMuNzQ2LDYuMzI4LTE5LjUxMywxMC4xMzJjLTAuNTc3LDAuMzgxLTEuMTQ1LDAuNzY1LTEuNzA2LDEuMTUzDQoJYy0xMS43NzgsOC4xNTUtMjAuMDI4LDE4LjAzNS0yMy40MTgsMjguODc4Yy0wLjE2MSwwLjUxNi0wLjMxMiwxLjAzNS0wLjQ1MSwxLjU1NWMtMC42OTYsMi42MDMtMS4xMTMsNS4yNTgtMS4yMzIsNy45NTYNCgljLTAuMDIzLDAuNTQtMC4wMzYsMS4wODEtMC4wMzYsMS42MjR2MTEuMjc0Yy0xMy44ODYsOS40MDktMjMuMDM3LDIxLjE3Mi0yNS4zMzMsMzQuMDk4Yy0wLjM3NiwyLjExNS0wLjU2OCw0LjI2MS0wLjU2OCw2LjQzMQ0KCXYzNS41NDVjMCwxNy43MTMsMTIuODE4LDMzLjcxNCwzMy40MzcsNDUuMTQ2Yy0yLjU3OCwzLjc2NC00LjU0Miw3LjcwMy01LjgxNywxMS43NzljLTAuMTYxLDAuNTE2LTAuMzEyLDEuMDM1LTAuNDUxLDEuNTU1DQoJYy0wLjY5NiwyLjYwMy0xLjExMyw1LjI1OC0xLjIzMiw3Ljk1NmMtMC4wMjMsMC41NC0wLjAzNiwxLjA4MS0wLjAzNiwxLjYyNHYzNS41NDVjMCwxMS4yNTgsNS4xODEsMjEuODI1LDE0LjI0OSwzMC45NjcNCglsLTAuMDgsMC40NDRMMjg5LjQ5LDUwOS44MjdDNDA1LjU1NSw0OTQuNjgxLDQ5Ny4xNjYsNDAxLjc5NSw1MTAuMzg1LDI4NS4xMzR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZBNzMzOyIgZD0iTTI1OC40MTgsMjUzLjAyOGMtNjAuNzk2LDAtMTEwLjA4MSwyOC4xNjMtMTEwLjA4MSw2Mi45MDR2MzUuNTQ1DQoJYzAsMzQuNzQsNDkuMjg0LDYyLjkwNCwxMTAuMDgxLDYyLjkwNHMxMTAuMDgxLTI4LjE2MywxMTAuMDgxLTYyLjkwNHYtMzUuNTQ1QzM2OC40OTksMjgxLjE5MSwzMTkuMjEzLDI1My4wMjgsMjU4LjQxOCwyNTMuMDI4eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTgxMTsiIGQ9Ik0yNTguNDE4LDI1My4wMjh2MTYxLjM1MWM2MC43OTYsMCwxMTAuMDgxLTI4LjE2MywxMTAuMDgxLTYyLjkwNHYtMzUuNTQ1DQoJQzM2OC40OTksMjgxLjE5MSwzMTkuMjEzLDI1My4wMjgsMjU4LjQxOCwyNTMuMDI4eiIvPg0KPGVsbGlwc2Ugc3R5bGU9ImZpbGw6I0ZGREE0NDsiIGN4PSIyNTguNDE1IiBjeT0iMzE1LjkzNyIgcng9IjExMC4wOCIgcnk9IjYyLjkwOSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0QwMDsiIGQ9Ik0yNTguNDE4LDI1My4wMjh2MTI1LjgwN2M2MC43OTYsMCwxMTAuMDgxLTI4LjE2MiwxMTAuMDgxLTYyLjkwNFMzMTkuMjEzLDI1My4wMjgsMjU4LjQxOCwyNTMuMDI4eiINCgkvPg0KPGVsbGlwc2Ugc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGN4PSIyNTguNDE1IiBjeT0iMzExLjc4NiIgcng9IjgyLjU2NiIgcnk9IjQzLjAyNiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0UwRTBFMjsiIGQ9Ik0yNTguNDE4LDI2OC43NTR2ODYuMDUzYzQ1LjU5NywwLDgyLjU2MS0xOS4yNjMsODIuNTYxLTQzLjAyNg0KCUMzNDAuOTc4LDI4OC4wMTgsMzA0LjAxNCwyNjguNzU0LDI1OC40MTgsMjY4Ljc1NHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkE3MzM7IiBkPSJNMjcxLjM2OCwyMDEuMjI2Yy02MC43OTYsMC0xMTAuMDgxLDI4LjE2My0xMTAuMDgxLDYyLjkwNHYzNS41NDUNCgljMCwzNC43NCw0OS4yODQsNjIuOTA0LDExMC4wODEsNjIuOTA0czExMC4wODEtMjguMTYzLDExMC4wODEtNjIuOTA0VjI2NC4xM0MzODEuNDQ5LDIyOS4zODgsMzMyLjE2MywyMDEuMjI2LDI3MS4zNjgsMjAxLjIyNnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjk4MTE7IiBkPSJNMjcxLjM2OCwyMDEuMjI2djE2MS4zNTFjNjAuNzk2LDAsMTEwLjA4MS0yOC4xNjMsMTEwLjA4MS02Mi45MDR2LTM1LjU0NQ0KCUMzODEuNDQ5LDIyOS4zODgsMzMyLjE2MywyMDEuMjI2LDI3MS4zNjgsMjAxLjIyNnoiLz4NCjxlbGxpcHNlIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBjeD0iMjcxLjM3MSIgY3k9IjI2NC4xMjUiIHJ4PSIxMTAuMDgiIHJ5PSI2Mi45MDkiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkNEMDA7IiBkPSJNMjcxLjM2OCwyMDEuMjI2djEyNS44MDdjNjAuNzk2LDAsMTEwLjA4MS0yOC4xNjIsMTEwLjA4MS02Mi45MDRTMzMyLjE2NCwyMDEuMjI2LDI3MS4zNjgsMjAxLjIyNnoiDQoJLz4NCjxlbGxpcHNlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMjcxLjM3MSIgY3k9IjI1OS45NzQiIHJ4PSI4Mi41NjYiIHJ5PSI0My4wMjYiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFMEUwRTI7IiBkPSJNMjcxLjM2OCwyMTYuOTUxdjg2LjA1M2M0NS41OTcsMCw4Mi41NjEtMTkuMjYzLDgyLjU2MS00My4wMjYNCglDMzUzLjkyOSwyMzYuMjE1LDMxNi45NjUsMjE2Ljk1MSwyNzEuMzY4LDIxNi45NTF6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZBNzMzOyIgZD0iTTIzMi41MTYsMTQ5LjQyM2MtNjAuNzk2LDAtMTEwLjA4MSwyOC4xNjMtMTEwLjA4MSw2Mi45MDR2MzUuNTQ1DQoJYzAsMzQuNzQsNDkuMjg0LDYyLjkwNCwxMTAuMDgxLDYyLjkwNHMxMTAuMDgxLTI4LjE2MywxMTAuMDgxLTYyLjkwNHYtMzUuNTQ1QzM0Mi41OTcsMTc3LjU4NiwyOTMuMzExLDE0OS40MjMsMjMyLjUxNiwxNDkuNDIzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTgxMTsiIGQ9Ik0yMzIuNTE2LDE0OS40MjN2MTYxLjM1MWM2MC43OTYsMCwxMTAuMDgxLTI4LjE2MywxMTAuMDgxLTYyLjkwNHYtMzUuNTQ1DQoJQzM0Mi41OTcsMTc3LjU4NiwyOTMuMzExLDE0OS40MjMsMjMyLjUxNiwxNDkuNDIzeiIvPg0KPGVsbGlwc2Ugc3R5bGU9ImZpbGw6I0ZGREE0NDsiIGN4PSIyMzIuNTE1IiBjeT0iMjEyLjMyNCIgcng9IjExMC4wOCIgcnk9IjYyLjkwOSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0QwMDsiIGQ9Ik0yMzIuNTE2LDE0OS40MjNWMjc1LjIzYzYwLjc5NiwwLDExMC4wODEtMjguMTYyLDExMC4wODEtNjIuOTA0UzI5My4zMTEsMTQ5LjQyMywyMzIuNTE2LDE0OS40MjN6Ig0KCS8+DQo8ZWxsaXBzZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjIzMi41MTUiIGN5PSIyMDguMTczIiByeD0iODIuNTY2IiByeT0iNDMuMDI2Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTBFMEUyOyIgZD0iTTIzMi41MTYsMTY1LjE0OXY4Ni4wNTNjNDUuNTk3LDAsODIuNTYxLTE5LjI2Myw4Mi41NjEtNDMuMDI2DQoJQzMxNS4wNzcsMTg0LjQxMiwyNzguMTEzLDE2NS4xNDksMjMyLjUxNiwxNjUuMTQ5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQTczMzsiIGQ9Ik0yNTguNDE4LDk3LjYyMWMtNjAuNzk2LDAtMTEwLjA4MSwyOC4xNjMtMTEwLjA4MSw2Mi45MDR2MzUuNTQ1DQoJYzAsMzQuNzQsNDkuMjg0LDYyLjkwNCwxMTAuMDgxLDYyLjkwNHMxMTAuMDgxLTI4LjE2MywxMTAuMDgxLTYyLjkwNHYtMzUuNTQ2QzM2OC40OTksMTI1Ljc4MywzMTkuMjEzLDk3LjYyMSwyNTguNDE4LDk3LjYyMXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjk4MTE7IiBkPSJNMjU4LjQxOCw5Ny42MjF2MTYxLjM1MWM2MC43OTYsMCwxMTAuMDgxLTI4LjE2MywxMTAuMDgxLTYyLjkwNHYtMzUuNTQ1DQoJQzM2OC40OTksMTI1Ljc4MywzMTkuMjEzLDk3LjYyMSwyNTguNDE4LDk3LjYyMXoiLz4NCjxlbGxpcHNlIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBjeD0iMjU4LjQxNSIgY3k9IjE2MC41MjMiIHJ4PSIxMTAuMDgiIHJ5PSI2Mi45MDkiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkNEMDA7IiBkPSJNMjU4LjQxOCw5Ny42MjF2MTI1LjgwN2M2MC43OTYsMCwxMTAuMDgxLTI4LjE2MiwxMTAuMDgxLTYyLjkwNFMzMTkuMjEzLDk3LjYyMSwyNTguNDE4LDk3LjYyMXoiLz4NCjxlbGxpcHNlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMjU4LjQxNSIgY3k9IjE1Ni4zNzEiIHJ4PSI4Mi41NjYiIHJ5PSI0My4wMjYiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFMEUwRTI7IiBkPSJNMjU4LjQxOCwxMTMuMzQ2djg2LjA1M2M0NS41OTcsMCw4Mi41NjEtMTkuMjYzLDgyLjU2MS00My4wMjYNCglDMzQwLjk3OCwxMzIuNjA5LDMwNC4wMTQsMTEzLjM0NiwyNTguNDE4LDExMy4zNDZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAQAAAAqtv5HAAAQxUlEQVR42u3dvUtl2xnHcf+IIQSSIoQLKcIiXE6RaYIhSXPBJJAmCJMmILeYFBubwC3uQJrAcDohRC8EhAiSIoiNnd7GTkhjIxYBwWIICGNlt6LjvHg8Zx/33me9PC9ffs3tLjh+cP2e85y1luISIaQt/AgIAQghACEEIIQAhBCAEAIQQgBCCEAIAQghBCCEAIQQgBACEEIAQghACAEIIQAhBCCEAIQQAhBCAEIIQAgBCCEAIVP537+u+SkAhLTl73Ez8lMACJmZN1dNHMVLiACEzMpuvAOyBhCAkOmcxvE7IKN4BBGAkMncLG18BLISqeoAIRM5vOXxAcjo9r/4iQCEPKjn4wkgo3gGEYCQT/X8MRCqOkDIg3r+GMgo7kMEIORDPZ8GskxVBwj5UM+ngVDVAUKWLh7weAyEqg4Q99meC4SqDhDXOZngMQ2Eqg4Q6vlcIFR1gLjNwSMes4BQ1QFCPZ8LhKoOEOr5XCBUdYC4r+fzgFDVAeK+ns8HQlUHiPN6Ph8IVR0gzuv5U0Co6gBxXc+fBkJVB4jjev40kFHcgQhAvNbzLkCo6gBxW8+7ABnFV/wNAYjPet4NyCieQAQgHut5VyCrAAGIx3reFQhVHSBG83ZuPe8OhKoOEJPZe5JHNyBUdYA4rOd9gFDVAWIuW0mBUNUBYirHnXh0B0JVB4izet4XCFUdIK7qeV8gVHWAuKrn/YFQ1QHiqJ4PAUJVB4ibej4ECFUdIG7q+TAgVHWAOKnnw4BQ1QHipJ4PBUJVB4iLej4cyApAAGK/ng8HMoqbEAGI9Xq+CJDleAkRgNiu54sAGcV1gADEdj1fDAhVHSCKcjOgni8KhKoOENP1fFEgVHWAqKnn4ypAqOoAUZHdWAcIVR0gCnK+AI9FgVDVAWK2nqcBQlUHiNF6ngYIVR0gRut5KiBUdYCYrOepgFDVAWKynqcDQlUHiMF6nhIIVR0g5up5SiBUdYCYq+dpgVDVAWKsnqcFwpu4ADFWz1MDGcUjiADETj1PD2SFK4EAYqeepwdCVQeIoXqeA8iIqg4QK/U8DxCqOkCq5jQpj/RAqOoAqVrPN8QDoaoDpFoOE/PIAYSqDpBKeXM1VgGEqg4QA/U8JxCqOkDU1/OcQKjqAFFfz/MCoaoDRHk9zwuEqg4Q5fU8NxCqOkBU1/P8QKjqAFFcz/MDoaoDRHE9LwGEqg4QtfW8BJDR7f+Bf0GAqKznZYCM4hlEAKKxnpcCQlUHiMp6XgrIKO5DBCD66nk5IMtUdYDoq+flgFDVAZIhFwV4lAJCVQdI8mybAkJVB0jSnBThUQ4IVR0gyup5aSBUdYAky0EhHiWBUNUBoqqelwdCVQeIonpeAwhVHSBq6nkNIFR1gKip53WAUNUBoqSe1wFCVQeIknpeCwhVHSAq6nk9IFR1gCio5/WAjOIORAAivZ7XBEJVB4j4el4TyCi+4m8IQGTX87pARvEEIgCRXM9rA1kFCEAk1/PaQKjqAOmYt1XqeX0gVHWAdMpeNR51gVDVASK4nksAQlUHyJPZcg2Eqg6QuTmuyqM+EKo6QITWcylAqOoAEVnPpQChqgNEZD2XA4SqDhCB9VwSEKo6QMTVc0lAqOoAEVfPZQGhqgNEWD2XBYSqDhBh9VwaEKo6QETVc3lAVgACEDn1XB6QUdyMAKGeC6nnEoEsx8sIEOo5QFqzDhDqOUCo6gCZmRtB9VwqkBWAUM8BQlUHyIx6PgYIVR0gbdmNAKGqA6Ql5wJ5SAXit6pTzwFCVQeIhnouG4jXqk49BwhVHSAa6rl0ID6rOvUcIFR1gGio5xqArACEel4zf42/iZ/FzwUT8VbVqedi8pf4+/izGOKz+J34w/gTqjpAqOcf8udbHM/f5Q7IfX5w+98SiawBhHpeMuvx1+9xTAK5y/fjjwUSOYoAoZ4XyZ/iLx7gmAZyl+/GH4mr6tcAoZ7nruN/vG0cz6cyDeQeiazq7qeqU8+r1fHnMzMbyDNx1d1LVaeeV6vjfYHIqu5rALGVU3F1fBgQOdXdR1V3U883xNXx4UBkVHcfVd0JkEOBdXwxIBKqu4eq7oLHmyuJdXxxIPWru/2qTj2vVsfTAKlb3dcAQj3PVcdTAqlX3a1Xdep5tTqeGkid6m69qlPPq9XxHEBqVHfbVZ16Xq2O5wJSvrpbrurU82p1PCeQstV9DSDU8/R1PD+QctXdblWnnler42WAlKnudqs69bxaHS8HpER1H0eAUM+T1vGyQPJX97MIEPf1PGUdLw8kb3VfA4jvep66jtcCkq+670eAOK3nOep4TSB5qvuywapOPa9Wx2sDyVHd7VV1gzwulNRxCUDSV3drVd0gkG0ldVwKkLTVfQ0gsnOipo7LApKuutuq6tTzanVcHpA01d1WVTcG5EBRHZcJJEV1t1TVqefV6rhcIItXdztVnXperY7LBrJYdV8DiI16XrOOawAyvLpbqeqO63ntOq4FyLDqbqWqu6znMuq4JiBDqruNqu6unsup49qA9K/uFqq6q3ouq45rBNKvuq8BRE89l1fH9QLpXt13IkAU1HOZdVw3kG7VXX9VN17PJddx/UC6VPdXESBC67n0Om4DyNPV/SQCRFw911DH7QCZX91XASKrnmup49aAtFd3zVVdNY+3U/VcUx23CGR2dddc1VUD2VNdx60CmVXd9VZ1E/VcZx23DGS6umut6oqBbCmv49aBTFb3VYCUzbH6Ou4DyKfqrrOqq63n6+rruB8g963kc5VVXSmQ/8YXJnnYBfIs/jS+uQJIwezHLwCiJJ/Fb+gg5XP1q9cAEZ/vxZcq/3YYWTWxdtiyBuSX8ZRVk9r51tBhK5g6WP2b74NIyev4c4AIO1jxnXRhh60vASIkv1XcOswCuT9s/Q4glRMMHKzMArnL31QftoLyg9VXPH+gYfy7DpAK+YOZg5VxIPeHrRcAKfo5+be8cqst/1R42AoqD1avo9XfIdNA7g5bXwMkc14aPFi5AXKX/6g6bAVlB6vTaPu3xwEQXYuNQdHn5N9E+785ar8PstfzD7uWxcag5nPyfj//s9uvt11GgBTL3YU/h/HG3GKjBiB9FxCvl8Z8o7B87u402eh9Bpa+2BjEH6z6fk6+H5dveazzfZDS+XBp9W686PnDl7zYGIQfrPr+nV9TfjOW6gL16eKfg96HrS8BknkB8XrplYH7eZXPGA4/Etno/Y8gc7FRJpD+C4g77w5W+h9jUz+Ge3h59Xbvw5a8xcYg8GD1Ve+D1SqXV0vJm6vJ+3n34lvVi43SgPRdQLy8reOT9/KeAaT+wPdhNuJx78PWC4AkWUDcfHCwsvEIm4lPO3ennkDY6n3YkrLYGNQuIB7FFYPPeJoAMvuVwt3eh62vATJwAfHy/TjX2guFZnaxzlueYTvuOf6tv9gY1C0gXt8erGY/vnbEM9ASB76PD1vnvT/5/cItkP4LiPszDlb6h7sGgdy0vFZ4f9jSs9gYVC0grrU+3blq4HhlbN39zdW8t9K1LDYGVQuI7Tkzsgpvanf/JM4jomOxMShaQGzPjplvihj7esvuXCIaFhuDggXE1bk4LAx3zQJ5O3PgOxnZi41BzQJiW5aNtA+TQNoHvpOHLbmLjUHJAmJ7jkx9EdcckLh00IGI3MXGIHYBcaUDDs0PPrsBcvP+/dunI3GxMShYQGzPiqnjlVEgTw18ZS82BgULiPaHu8aB3D8S3TWyFhuD+AXE9mwavAbIKJCnB75SFxuD8AVEH8NdB0C6DHwlLjYG4QuI7cPdS4DoymlPIDIWG4PoBUQvw10XQO5vzuqb2ouNQfACYnvWud3d9sBXzmJjELyA6Ge46wTIw5uz+qXeYmMQu4DYnhPDl1gbB9Jv4CthsTEIXUD0Ndx1BCTO+SLVWOBiYxC5gDia88Uo2789DoD0H/jWXGwMIhcQvQ13XQF56otUshYbg8AFxPbsm39CxwWQYQPfOouNQdwCosfhrjsgNwsds0ouNgZxC4g+vhjlHMjwgW/pxcYgbAHR53DXIZD2m7P6j39zLjYGUQuI7RlHH781joAsNvAttdgYBC0g+h3uOgXy+KmExQ5beRYbg6AFxPb2cQYQBr51FhuDmAVED7deAWQqu0mJpF9sDEIWEH0Pdx0DSTHwzbnYGIQsIPoe7joG0u3mrHqLjUHEAqK/L0YBJMPAN8diYxCwgMhw1zmQm4QD39SLjaH6AuLI/JMGAOkw8B3HPFl0sTFUX0D0dOsVQAoNfNMtNobKC4gMdwGSaeCbZrExDFxAvE6ygOjt1iuAzMnb5APfFIuNoeoCIsNdgGQe+C662Piy4gIiw12APMpBdiL9FxtrLSAy3AXIjIHvVgEi/Rcba31O7u3WK4BUHPgutthYegGR4S5AWnIcx4VymOiwlX4B0eutVwCpPvBddLGx3OfkDHcBUmngu+hiY+4FRL+3XgGkY04LAhmy2JhzAZHhLkA6ZK8wkb6LjZsFD1Y236sFiIKB77DFxpPMn5Mz3AVIh1wUB9JlsTHvAqL3W68AInTg222x8brCwYrhLkDmZLsKkdmLjUcVDlbebr0CiOiBb/ti42Wxz8kZ7gKk5ycN44q5W2wss4Do+UkDgKga+E7mdaXW4fPWK4AMGvhuVATSVOXBcBcgYge+EoAw3AVIpxy6BDKGB0CkD3zrAWG4C5AeSflUggYgy86/GAUQJQPfWkB24AGQvtl1A4ThLkCUDHybKscrhrsAGZRzF0AY7gJEzcC3YbgLEF3HrG3TQFY5XgFk0YGvZSAMdwGiauDbMNwFCANfGUC49QogiVLui1QNw12AMPCVAIRbrwCSNAemgDDcBUjyge+WGSAMdwGidODbMNwFiN4cmwDCrVcAUTvwbRjuAoSBbz0g3HoFkMw5VQ2E4S5AsmdPLRCeNACI8oFvTiDcegWQQrlQCYThLkDUD3wbhrsAsZFtVUC49QogJga+DcNdgFjJiRogPGkAECMD3xxAuPUKINUGvhvigTDcBYihgW96INx6BZCqORQNhOEuQEwNfBuGuwCxlpRPJTRJh7t8dg4QYwPflEC49QogYrIrDgjDXYAYHPg2kVuvAGIy56KAMNwFiMmBb8OtVwCxe8zaFgGE4S5AxA58JQBhuAsQswPfhuEuQBj45gPCrVcAEZ7FvkjVMNwFCAPfXEC49QogKnJQBQjDXYCoGfhuFQfCkwYAcTDwbRjuAsRHjosC4YtRAHEx8G0Y7gKEgW9aINx6BRClOS0ChOEuQNRmLzsQnjQAiKOBb8OtVwDxlYusQBjuAsTVwLdhuAsQf9nOAoThLkDcDXwbhrsA8ZiT5EB40gAgDge+DbdeAcTrwHcjGRCGuwBxOvBtuPUKIH5zmAQIw12AuB34Ntx6BRDPeeqphIbhLkAY+A4Hwq1XADGf3cFAGO4CxPnAt+HWK4CQ80FAGO4CxP3At+HWK4CQ9qcSGoa7ACH3A9/uQHivFiAMfOcAYbgLEAa+rUD4YhRAnGb6i1QNw12AkPaBb8OtVwAhD3MwFwjDXYC4H/hutQLhSQOAkImBb8OtVwAhj3M8EwjDXYCQRwPfhuEuQEj7wLfhi1EAIbNyOgGE4S5AyKPsfQTCkwYAITMHvg23XgGEtOXiHRCGuwAhLfkHt14BhBCAEAIQQgBCCEAIIQAhBCCEAIQQgBACEEIAQghACAEIIQAhhACEEIAQAhBCAEIIQAgBCCEAIQQghACEEIAQQh7l/1cRDc5x7kcCAAAAAElFTkSuQmCC"

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(436)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(298),
  /* template */
  __webpack_require__(539),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7939ad1b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(441)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(299),
  /* template */
  __webpack_require__(544),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a8ab272a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(439)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(304),
  /* template */
  __webpack_require__(542),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-85780d92",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(435)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(305),
  /* template */
  __webpack_require__(538),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5a691a92",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts__ = __webpack_require__(82);

// import {SMMContractABI} from '../contracts';



class Provider {
    constructor(nodeUrl, tokensData) {
        if (!nodeUrl) {
            throw new Error('nodeUrl not found');
        }
        if (tokensData && !tokensData.length) {
            throw new Error(`tokensData - ${tokensData} must be array`);
        }
        this.nodeUrl = nodeUrl;
        this.web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider(this.nodeUrl));
        this.tokens = {};
        if (tokensData) {
            for (let tokenData of tokensData) {
                this.addToken(tokenData);
            }
        }
        this.gasPrice = "0.000000003";
        this.gasLimit = "65000";
    }

    getSupportedTokens() {
        let tokens = [];
        for (let key in this.tokens) {
            if (this.tokens.hasOwnProperty(key)) {
                tokens.push({
                    name: this.tokens[key].name,
                    symbol: this.tokens[key].symbol,
                    address: this.tokens[key].address,
                    decimals: this.tokens[key].decimals
                });
            }
        }
        return tokens;
    }

    checkTokenAddress(tokenAddress) {
        if (this.tokens[tokenAddress]) {
            return true;
        } else {
            throw new Error(`This token: ${tokenAddress} not supported`);
        }
    }

    addToken(tokenData) {
        if (!tokenData.address) {
            throw new Error(`tokensData - ${tokenData} must have address`);
        }
        if (!tokenData.abi) {
            tokenData.abi = __WEBPACK_IMPORTED_MODULE_1__contracts__["a" /* erc20StandardABI */];
        }
        this.tokens[tokenData.address] = tokenData;
        this.tokens[tokenData.address].contract = new this.web3.eth.Contract(tokenData.abi, tokenData.address);

        let pDec = this.getTokenDecimals(tokenData.address).then(response => {
            this.tokens[tokenData.address].decimals = response;
        }, error => {
            console.error(error);
        });

        let pSym = this.getTokenSymbol(tokenData.address).then(response => {
            this.tokens[tokenData.address].symbol = response;
        }, error => {
            console.error(error);
        });
        let pName = this.getTokenName(tokenData.address).then(response => {
            this.tokens[tokenData.address].name = response;
        }, error => {
            console.error(error);
        });
        return Promise.all([pDec, pSym, pName]);
    }

    /*
     Get tokens data to blockchain
    */
    getTokenAllowance(tokenAddress, from, to) {
        if (this.checkTokenAddress(tokenAddress)) {
            return new Promise((resolve, reject) => {
                this.tokens[tokenAddress].contract.methods.allowance(from, to).call().then(async result => {
                    if (!this.tokens[tokenAddress].decimals) {
                        this.tokens[tokenAddress].decimals = await this.getTokenDecimals(tokenAddress);
                    }
                    resolve(result * 10 ** -this.tokens[tokenAddress].decimals);
                }, error => {
                    reject(error);
                });
            });
        }
    }

    getTokenBalance(tokenAddress, address) {
        if (this.checkTokenAddress(tokenAddress)) {
            return new Promise((resolve, reject) => {
                this.tokens[tokenAddress].contract.methods.balanceOf(address).call().then(async result => {
                    if (!this.tokens[tokenAddress].decimals) {
                        this.tokens[tokenAddress].decimals = await this.getTokenDecimals(tokenAddress);
                    }
                    resolve(result * 10 ** -this.tokens[tokenAddress].decimals);
                }, error => {
                    reject(error);
                });
            });
        }
    }

    getTokenName(tokenAddress) {
        if (this.checkTokenAddress(tokenAddress)) {
            return this.tokens[tokenAddress].contract.methods.name().call();
        }
    }

    getTokenTotalSupply(tokenAddress) {
        if (this.checkTokenAddress(tokenAddress)) {
            return new Promise((resolve, reject) => {
                this.tokens[tokenAddress].contract.methods.totalSupply().call().then(async result => {
                    if (!this.tokens[tokenAddress].decimals) {
                        this.tokens[tokenAddress].decimals = await this.getTokenDecimals(tokenAddress);
                    }
                    resolve(result * 10 ** -this.tokens[tokenAddress].decimals);
                }, error => {
                    reject(error);
                });
            });
        }
    }

    getTransactionReceipt(hash) {
        return new Promise((resolve, reject) => {
            this.web3.eth.getTransactionReceipt(hash).then(res => {
                resolve(res);
            }).catch(error => {
                reject(error);
            });
        });
    }

    getTokenSymbol(tokenAddress) {
        if (this.checkTokenAddress(tokenAddress)) {
            return this.tokens[tokenAddress].contract.methods.symbol().call();
        }
    }

    getTokenDecimals(tokenAddress) {
        if (this.checkTokenAddress(tokenAddress)) {
            return this.tokens[tokenAddress].contract.methods.decimals().call();
        }
    }

    async getTokenInfo(tokenAddress, data) {
        if (this.checkTokenAddress(tokenAddress)) {
            if (!this.tokens[tokenAddress].decimals) {
                this.tokens[tokenAddress].decimals = await this.getTokenDecimals(tokenAddress);
            }
            return {
                address: `0x${data.substring(11, 74).replace(/^0+/, '')}`,
                value: parseInt(data.substring(75, data.length), 16) * 10 ** -this.tokens[tokenAddress].decimals
            };
        }
    }

    /*
     Send tokens data to blockchain
    */
    async sendTokenTransaction(tokenAddress, account, to, amountToken, gasPrice, gasLimit, countTransactions) {
        if (this.checkTokenAddress(tokenAddress)) {
            if (!this.tokens[tokenAddress].decimals) {
                this.tokens[tokenAddress].decimals = await this.getDecimals(tokenAddress);
            }
            let tx = {
                to: tokenAddress,
                value: 0x0,
                data: this.tokens[tokenAddress].contract.methods.transfer(to, +amountToken * 10 ** this.tokens[tokenAddress].decimals).encodeABI(),
                from: account.address,
                nonce: this.toHex(countTransactions ? countTransactions : await this.getTransactionCount(account.address)),
                gasPrice: this.toHex(this.toWei(gasPrice ? gasPrice : this.gasPrice)),
                gasLimit: this.toHex(gasLimit ? gasLimit : this.gasLimit),
                chainId: 3
            },
                serializedTx = await account.signTransaction(tx);
            return this.web3.eth.sendSignedTransaction(serializedTx.rawTransaction);
        }
    }

    async approveTokenTransaction(tokenAddress, account, spender, amountToken, countTransactions, gasPrice, gasLimit) {
        if (this.checkTokenAddress(tokenAddress)) {
            if (!this.tokens[tokenAddress].decimals) {
                this.tokens[tokenAddress].decimals = await this.getDecimals(tokenAddress);
            }
            let tx = {
                to: tokenAddress,
                value: 0x0,
                data: this.tokens[tokenAddress].contract.methods.approve(spender, +amountToken * 10 ** this.tokens[tokenAddress].decimals).encodeABI(),
                from: account.address,
                nonce: this.toHex(countTransactions ? countTransactions : await this.getTransactionCount(account.address)),
                gasPrice: this.toHex(this.toWei(gasPrice ? gasPrice : this.gasPrice)),
                gasLimit: this.toHex(gasLimit ? gasLimit : this.gasLimit),
                chainId: 3
            },
                serializedTx = await account.signTransaction(tx);
            return this.web3.eth.sendSignedTransaction(serializedTx.rawTransaction);
        }
    }

    /*
     Ethereum
    */
    createAccount(privateKey) {
        /*privateKey must have hex format*/
        return this.web3.eth.accounts.wallet.add(privateKey);
    }

    generatePrivateKey() {
        return this.web3.eth.accounts.create();
    }

    getBalance(address) {
        return new Promise((resolve, reject) => {
            this.web3.eth.getBalance(address).then(result => {
                resolve(this.fromWei(result));
            }, error => {
                reject(error);
            });
        });
    }

    getTransactionCount(address) {
        return this.web3.eth.getTransactionCount(address);
    }

    /*
     Ethereum send
    */
    async sendRawTransaction(account, to, amount, gasPrice, gasLimit, countTransactions) {
        let tx = {
            from: account.address,
            to: to,
            value: this.toHex(this.toWei(amount)),
            nonce: this.toHex(countTransactions ? countTransactions : await this.getTransactionCount(account.address)),
            gasPrice: this.toHex(this.toWei(gasPrice ? gasPrice : this.gasPrice)),
            gasLimit: this.toHex(gasLimit ? gasLimit : this.gasLimit),
            chainId: 3
        },
            serializedTx = await account.signTransaction(tx);
        return this.web3.eth.sendSignedTransaction(serializedTx.rawTransaction);
    }

    /*
     Additional methods
    */
    fromWei(value) {
        return this.web3.utils.fromWei(value, 'ether');
    }

    toWei(value) {
        return this.web3.utils.toWei(value, 'ether');
    }

    toWei(value) {
        return this.web3.utils.toWei(value, 'ether');
    }

    toHex(value) {
        return this.web3.utils.toHex(value);
    }

    getBlock(blockHashOrBlockNumber) {
        return this.web3.eth.getBlock(blockHashOrBlockNumber);
    }

    getTransaction(transactionHash) {
        return this.web3.eth.getTransaction(transactionHash);
    }

    getStorageAt(address) {
        return this.web3.eth.getStorageAt(address, 0);
    }

    getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
        if (endBlockNumber == null) {
            endBlockNumber = this.web3.eth.blockNumber;
            console.log("Using endBlockNumber: " + endBlockNumber);
        }
        if (startBlockNumber == null) {
            startBlockNumber = endBlockNumber - 1000;
            console.log("Using startBlockNumber: " + startBlockNumber);
        }
        console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks " + startBlockNumber + " and " + endBlockNumber);

        for (let i = startBlockNumber; i <= endBlockNumber; i++) {
            if (i % 1000 == 0) {
                console.log("Searching block " + i);
            }
            this.web3.eth.getBlock(i, true).then(block => {
                if (block !== null && block.transactions !== null) {
                    block.transactions.forEach(function (e) {
                        if (myaccount === "*" || myaccount === e.from || myaccount === e.to) {
                            console.log("  tx hash          : " + e.hash + "\n" + "   nonce           : " + e.nonce + "\n" + "   blockHash       : " + e.blockHash + "\n" + "   blockNumber     : " + e.blockNumber + "\n" + "   transactionIndex: " + e.transactionIndex + "\n" + "   from            : " + e.from + "\n" + "   to              : " + e.to + "\n" + "   value           : " + e.value + "\n" + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n" + "   gasPrice        : " + e.gasPrice + "\n" + "   gas             : " + e.gas + "\n" + "   input           : " + e.input);
                        }
                    });
                }
            });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Provider;


// export {};

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(433)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(296),
  /* template */
  __webpack_require__(536),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_customComponents_popupAddress_vue__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_customComponents_popupAddress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_customComponents_popupAddress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_customComponents_alert_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_customComponents_alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_customComponents_alert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_speakeasy__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_speakeasy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_speakeasy__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    components: { PopupAddress: __WEBPACK_IMPORTED_MODULE_1__components_customComponents_popupAddress_vue___default.a, alert: __WEBPACK_IMPORTED_MODULE_2__components_customComponents_alert_vue___default.a },

    name: 'app',
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    data() {
        return {
            tokens: '',
            night: false,
            preloader: false,
            welcome: false,
            popupShowAddress: false,
            supportedTokens: [],
            alerts: [],
            imgUrl: '',
            address: this.$localStorage.get('address'),
            isLogin: this.$localStorage.get('login') !== 'null' && this.$localStorage.get('login') !== null,

            baseUrl:  true ? '' : 'http://localhost:8010'
        };
    },
    mounted() {},
    methods: {
        callAlert(text, type) {

            this.alerts.push({
                showAlert: true,
                text: text,
                type: type,
                img: ''
            });

            setTimeout(() => {
                this.alerts.splice(0, 1);
            }, 5000);
        },
        getSupportedTokens() {

            console.log('preloader');
            this.preloader = true;
            let promises = [];

            this.$http.get(`${this.baseUrl}/tokens/${this.address}`).then(function (response) {
                console.log(response.body);
                this.tokens = response.body;
                if (this.tokens.length !== 0) {
                    for (let i = 0; i < this.tokens.length; i++) {
                        promises.push(this.$root.web.addToken(this.tokens[i]));
                    }
                    Promise.all(promises).then(res => {
                        console.log(res);
                        this.supportedTokens = this.$root.web.getSupportedTokens();
                        this.supportedTokens.forEach((item, index) => {
                            console.log('item', item);
                            this.$root.web.getTokenBalance(item.address, this.$localStorage.get('address')).then(res => {
                                this.$set(this.supportedTokens[index], 'balance', res);
                                this.preloader = false;

                                console.log(index);
                                console.log(res);
                            });
                        });
                    });
                } else {
                    this.preloader = false;
                }
            }, function (error) {
                console.log(error);
            });
        },
        modalCloseAddress(evt) {
            this.popupShowAddress = evt;
        },
        theme() {
            //                this.night = !this.night
            console.log('ss');
            if (this.night) {
                this.$localStorage.set('night', true);

                document.documentElement.style.setProperty('--main-bg-color-header', '#d20009');
                document.documentElement.style.setProperty('--main-bg-color-html', '#313031');
                document.documentElement.style.setProperty('--main-bg-color-reverse', '#fafafad1');
                document.documentElement.style.setProperty('--main-primary', '#d20009');
                document.documentElement.style.setProperty('--color-negative', '#f0f0f0');
            } else {
                this.$localStorage.set('night', false);
                document.documentElement.style.setProperty('--main-bg-color-header', '#1777d2');
                document.documentElement.style.setProperty('--main-bg-color-html', '#fafafa');
                document.documentElement.style.setProperty('--main-bg-color-reverse', '#fafafad1');
                document.documentElement.style.setProperty('--main-primary', '#1777d2');
                document.documentElement.style.setProperty('--color-negative', '#313031');
            }
        },
        logout() {
            this.supportedTokens = [];
            console.log('this.supportedTokens');
            console.log(this.supportedTokens);
            this.isLogin = false;
            this.$localStorage.set('address', null);
            this.$localStorage.set('privateKey', null);
            this.$localStorage.set('login', null);
            this.$router.push('/login');
        }
    },
    created() {

        console.log('verified');

        this.night = this.$localStorage.get('night') === 'true';
        this.theme();
        //
        console.log('ss', this.isLogin && !this.welcome);
        if (this.isLogin && !this.welcome) {
            this.getSupportedTokens();
        }
    },
    computed: {},
    watch: {

        welcome() {
            if (this.welcome) {
                setTimeout(() => {
                    this.welcome = false;
                }, 3000);
            }
        }
    }

});

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

    components: {},
    name: 'addToken',
    props: ['active', 'type', 'tokenAddress', 'symbol'],
    data() {
        return {
            addressToken: '',
            abi: '',
            allTokens: [],
            baseUrl: this.$parent.baseUrl,
            search: null,

            preloaderTx: false,

            isValidAddressToken: true,
            isValidAddressTokenMessage: '',

            address: this.$localStorage.get('address').toLowerCase()

        };
    },
    methods: {
        onFocus() {
            this.$refs.inputAddress.focus();
        },

        closeDialog() {
            this.$emit('addToken', false);
        },
        getAllToken() {
            this.$http.get(`${this.baseUrl}/tokens/all`).then(function (response) {
                console.log('response.body');
                console.log(response.body);
                this.allTokens = response.body;
                //                        this.allTokensAutoComplite = response.body
            });
        },
        addToken() {

            let obj = {
                "address": this.addressToken.toLowerCase(),
                "customer": this.address.toLowerCase()
            };
            if (this.abi) {
                obj["abi"] = JSON.parse(this.abi);
            }
            if (!/^(0x)?[0-9a-f]{40}$/.test(this.addressToken.toLowerCase())) {
                this.isValidAddressToken = false;
                this.isValidAddressTokenMessage = 'address no validated';
                this.$parent.$parent.callAlert('address no validated', 'danger');
                return;
            }
            this.$http.post(`${this.baseUrl}/addToken`, obj).then(function (response) {
                console.log(response.body);
                this.$parent.$parent.getSupportedTokens();
                this.$emit('addToken', false);
                this.$parent.$parent.callAlert('token added successfully', 'success');
            }, function (error) {

                console.log(error.body.status);
                this.$parent.$parent.callAlert(error.body.status, 'danger');

                this.$emit('addToken', false);
            });
        }

    },
    created() {
        this.getAllToken();
        //            console.log(this.$parent.$parent.getSupportedTokens());
    },
    mounted() {},
    watch: {

        active() {
            if (this.active) {

                document.body.style['overflow-y'] = 'hidden';
            } else {
                document.body.style['overflow-y'] = 'visible';
            }
        }, addressToken() {
            this.isValidAddressToken = true;
        }

    },
    computed: {
        allTokensAutoComplite() {
            return this.allTokens.filter(item => {
                return item.address.toLowerCase().includes(this.addressToken.toLowerCase());
            });
        }

    }

});

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'alert',
    computed: {
        alertClass() {
            return {
                'with-close': this.withCloseBtn,
                'alert-success': this.type === 'success',
                'alert-danger': this.type === 'danger',
                'alert-warning': this.type === 'warning',
                'alert-info': this.type === 'info'
            };
        }
    },
    props: {
        type: {
            type: String,
            default: 'success'
        },
        withCloseBtn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hidden: false
        };
    },
    methods: {
        hide() {
            this.hidden = true;
        }
    }
});

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

    components: {},
    name: 'popup',
    props: ['active', 'type', 'tokenAddress', 'symbol'],
    data() {
        return {
            password: '',
            addressTo: '',
            value: '',

            preloaderTx: false,

            isValidAddressTo: true,
            isValidAddressToMessage: '',

            isValidgasPrice: true,
            isValidgasPriceMessage: '',

            isValidValue: true,
            isValidValueMessage: '',

            isValidgasLimit: true,
            isValidgasLimitMessage: '',

            isValidpassword: true,
            isValidpasswordMessage: '',

            gasLimit: '80000',
            gasPrice: '',
            balance: '',

            address: this.$localStorage.get('address').toLowerCase()

        };
    },
    methods: {
        getBalance(addressUser) {
            this.$root.web.getBalance(addressUser).then(res => {
                this.balance = res;
            });
        },
        getTokenDecimals(address) {
            this.$root.web.getTokenDecimals(address).then(res => {
                this.decimal = res;
            });
        },

        getTokenBalance(addressContract, addressUser) {
            this.$root.web.getTokenBalance(addressContract, addressUser).then(res => {
                this.balance = res;
            });
        },
        gasEstimate() {
            this.$http.get('https://ethgasstation.info/json/ethgasAPI.json').then(function (response) {
                this.gasPrice = (response.body.average / 10000000000 * 1.5).toFixed(9);
            }, function (error) {
                console.log(error);
            });
        },

        isValidTransaction(tx) {
            if (tx.logs) {
                this.$parent.$parent.callAlert('transaction have been success', 'success');
            } else {
                this.$parent.$parent.callAlert('something error in Transaction', 'danger');
            }
            this.preloaderTx = false;

            this.addressTo = '';
            this.value = '';
            this.password = '';

            this.$parent.getBalance();
        },
        sendETH(account) {
            this.$root.web.sendRawTransaction(account, this.addressTo, this.value, this.gasPrice, this.gasLimit).then(res => {
                console.log(res);
                this.isValidTransaction(res);
            }).catch(err => {
                this.$parent.$parent.callAlert('invalid transaction', 'danger');
            });
        }, sendToken(account) {

            this.$root.web.sendTokenTransaction(this.tokenAddress, account, this.addressTo, this.value, this.gasPrice, this.gasLimit).then(res => {
                console.log(res);

                this.isValidTransaction(res);
            }).catch(err => {
                this.$parent.$parent.callAlert('invalid transaction', 'danger');
            });
        },
        send() {
            if (!this.addressTo) {
                this.isValidAddressTo = false;
                this.isValidAddressToMessage = 'address required';
                this.$parent.$parent.callAlert('address is required', 'danger');
                return;
            }
            if (!/^(0x)?[0-9a-f]{40}$/.test(this.addressTo.toLowerCase())) {
                this.isValidValueTo = false;
                this.isValidAddressToMessage = 'address no validated';
                this.$parent.$parent.callAlert('address no validated', 'danger');
                return;
            }
            if (!this.value) {
                this.isValidValue = false;
                this.isValidValueMessage = 'value required';
                this.$parent.$parent.callAlert('value is required', 'danger');
                return;
            }
            if (!/^-?\d*\.?\d*$/.test(this.value)) {
                this.isValidValue = false;
                this.isValidValueMessage = 'value must be number';
                this.$parent.$parent.callAlert('value must be number', 'danger');
                return;
            }
            if (this.value > this.balance) {
                this.isValidValue = false;
                this.isValidValueMessage = 'value > your balance';
                this.$parent.$parent.callAlert('value > your balance', 'danger');
                return;
            }
            if (!this.gasPrice) {
                this.isValidgasPrice = false;
                this.isValidgasPriceMessage = 'gasPrice required';
                this.$parent.$parent.callAlert('gasPrice is required', 'danger');
                return;
            }
            if (!/^-?\d*\.?\d*$/.test(this.gasPrice)) {
                this.isValidgasPrice = false;
                this.isValidgasPriceMessage = 'gasPrice must be number';
                this.$parent.$parent.callAlert('gasPrice must be number', 'danger');
                return;
            }
            if (!this.gasLimit) {
                this.isValidgasLimit = false;
                this.isValidgasLimitMessage = 'gasLimit required';
                this.$parent.$parent.callAlert('gasLimit is required', 'danger');
                return;
            }
            if (!/^\d+$/.test(this.gasLimit)) {
                this.isValidgasLimit = false;
                this.isValidgasLimitMessage = 'gasLimit must be number';
                this.$parent.$parent.callAlert('gasLimit must be number', 'danger');
                return;
            }
            if (this.gasLimit < 21000) {
                this.isValidgasLimit = false;
                this.isValidgasLimitMessage = 'gasLimit must be > 21000';
                this.$parent.$parent.callAlert('gasLimit must be > 21000', 'danger');
                return;
            }
            if (!this.password) {
                this.isValidpassword = false;
                this.isValidpasswordMessage = 'password required';
                this.$parent.$parent.callAlert('password required', 'danger');
                return;
            }

            try {
                let privateKey = __WEBPACK_IMPORTED_MODULE_0_crypto_js__["AES"].decrypt(this.$localStorage.get('privateKey').toString(), this.password);
                let plaintext = privateKey.toString(__WEBPACK_IMPORTED_MODULE_0_crypto_js__["enc"].Utf8);
                let account = this.$root.web.createAccount(plaintext);
                this.preloaderTx = true;
                if (this.type === 'ETH') {
                    this.sendETH(account);
                    this.symbol = 'ETH';
                } else {
                    this.sendToken(account);
                }
            } catch (err) {
                console.log(err);
                this.isValidpassword = false;
                this.isValidpasswordMessage = 'password is incorrect';
                this.$parent.$parent.callAlert('password is incorrect', 'danger');
            }
        },
        closeDialog() {
            this.$emit('modal', false);
        }

    },
    created() {
        this.gasEstimate();
        console.log(this.$parent.$parent);
    },
    mounted() {},
    watch: {
        active() {
            if (this.active) {
                if (this.type === 'ETH') {

                    this.getBalance(this.address);
                } else {
                    this.getTokenBalance(this.tokenAddress, this.address);
                }
                document.body.style['overflow-y'] = 'hidden';
            } else {
                document.body.style['overflow-y'] = 'visible';
            }
        }, addressTo() {
            this.isValidAddressTo = true;
        },
        value() {
            if (!/^-?\d*\.?\d*$/.test(this.value)) {
                this.isValidValue = false;
                this.isValidValueMessage = 'value must be number';
                this.$parent.$parent.callAlert('value must be number', 'danger');
            } else {
                this.isValidValue = true;
            }
        },
        gasPrice() {
            if (!/^-?\d*\.?\d*$/.test(this.gasPrice)) {
                this.isValidgasPrice = false;
                this.isValidgasPriceMessage = 'gasPrice must be number';
            } else {
                this.isValidgasPrice = true;
            }
        }, gasLimit() {
            console.log(/^\d+$/.test(this.gasLimit));
            if (!/^\d+$/.test(this.gasLimit)) {
                this.isValidgasLimit = false;
                this.isValidgasLimitMessage = 'gasLimit must be number';
            } else {
                this.isValidgasLimit = true;
            }
        }, password() {
            this.isValidpassword = true;
        }
    },
    computed: {}

});

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qrcode__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    name: 'popupAddress',
    data() {
        return {
            QRCodeImg: '',
            QRCodeImgPrivateKey: '',
            address: '',
            privateKey: '',
            showPrivateKey: false,
            tab: 1,
            password: '',
            isValidpassword: true,
            isValidpasswordMessage: ''
        };
    },
    methods: {
        encriptKey() {
            if (!this.password) {
                this.isValidpassword = false;
                this.isValidpasswordMessage = 'password required';
                this.$parent.$parent.callAlert('password required', 'danger');
                return;
            }
            try {
                let privateKey = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].decrypt(this.$localStorage.get('privateKey').toString(), this.password);
                let plaintext = privateKey.toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["enc"].Utf8);
                console.log(plaintext);
                if (!plaintext) {
                    this.isValidpassword = false;
                    this.isValidpasswordMessage = 'password is incorrect';
                    this.$parent.callAlert('password is incorrect', 'danger');
                } else {
                    this.showPrivateKey = true;
                    this.privateKey = plaintext;
                    __WEBPACK_IMPORTED_MODULE_0_qrcode___default.a.toDataURL(this.privateKey, { errorCorrectionLevel: 'H' }).then(url => {
                        this.QRCodeImgPrivateKey = url;
                        console.log(url);
                    }).catch(err => {
                        console.error(err);
                    });
                }
            } catch (err) {
                console.log(err);
                this.isValidpassword = false;
                this.isValidpasswordMessage = 'password is incorrect';
                this.$parent.callAlert('password is incorrect', 'danger');
            }
        },
        copyText() {

            const el = document.createElement('textarea');
            el.value = this.address;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.$parent.callAlert('success copied', 'success');
        },
        copyTextKey() {

            const el = document.createElement('textarea');
            el.value = this.privateKey;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.$parent.callAlert('success copied', 'success');
        },
        closeDialog() {
            this.$emit('modalAddress', false);
        }

    },
    created() {
        if (this.$localStorage.get('address') !== 'null' && this.$localStorage.get('address') !== null) {
            this.tab = 2;
            this.address = this.$localStorage.get('address').toLowerCase();
            __WEBPACK_IMPORTED_MODULE_0_qrcode___default.a.toDataURL(this.address, { errorCorrectionLevel: 'H' }).then(url => {
                this.QRCodeImg = url;
                console.log(url);
            }).catch(err => {
                console.error(err);
            });
        }
    },
    mounted() {},
    watch: {
        active() {
            if (this.active) {
                document.body.style['overflow-y'] = 'hidden';
            } else {
                document.body.style['overflow-y'] = 'visible';
            }
        },
        password() {
            this.isValidpassword = true;
        }
    },
    computed: {}

});

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_index__ = __webpack_require__(19);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {},
    name: 'history',
    data() {
        return {

            history: [],
            decimal: '',
            baseUrl: this.$parent.baseUrl

        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router_index__["a" /* default */],

    methods: {

        getData(evt) {
            this.history = evt.res.reverse();
            this.decimal = evt.decimal;
            console.log('evt', evt);
        }

    },
    mounted() {},
    computed: {},
    watch: {},
    created() {}

});

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__historyTransactions_vue__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__historyTransactions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__historyTransactions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__txDetail_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__txDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__txDetail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({

    components: { historyTransactions: __WEBPACK_IMPORTED_MODULE_1__historyTransactions_vue___default.a, txDetail: __WEBPACK_IMPORTED_MODULE_2__txDetail_vue___default.a },
    name: 'historyETH',
    data() {
        return {
            history: [],
            decimal: 18,
            balance: '',
            showDetail: false,
            currencyHash: '',
            preloader: false,
            baseUrl: this.$parent.baseUrl

        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router_index__["a" /* default */],

    methods: {
        openDetail(hash) {
            this.showDetail = true;
            this.currencyHash = hash;
        },
        modalClose(evt) {
            this.showDetail = evt;
        },
        getBalance(addressUser) {
            this.$root.web.getBalance(addressUser).then(res => {
                console.log(res);
                this.balance = res;
            });
        },
        getTransactionsByAccount(address) {
            this.preloader = true;
            this.$http.get(`https://ropsten.etherscan.io/api?module=account&action=txlist&address=${address}`).then(function (response) {
                console.log(response.body);
                this.history = response.body.result;
                this.preloader = false;

                this.$emit('history', {
                    res: response.body.result,
                    decimal: null
                });

                //                        console.log((response.body.average/ 10000000000 * 1.5).toFixed(9));
            }, function (error) {
                this.preloader = false;

                console.log(error);
            });
        }

    },
    mounted() {},
    computed: {},
    watch: {},
    created() {
        console.log(this.$localStorage.get('address'));
        this.getTransactionsByAccount(this.$localStorage.get('address'));
        this.getBalance(this.$localStorage.get('address').toLowerCase());
    }

});

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__historyTransactions_vue__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__historyTransactions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__historyTransactions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__txDetail_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__txDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__txDetail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({

    components: { historyTransactions: __WEBPACK_IMPORTED_MODULE_1__historyTransactions_vue___default.a, txDetail: __WEBPACK_IMPORTED_MODULE_2__txDetail_vue___default.a },
    name: 'historyToken',
    data() {
        return {
            symbol: '',
            balance: '',
            decimal: '',
            currencyHash: '',
            history: [],
            showDetail: false,
            preloader: false,
            baseUrl: this.$parent.baseUrl

        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router_index__["a" /* default */],

    methods: {
        openDetail(hash) {
            this.showDetail = true;
            this.currencyHash = hash;
        },
        modalClose(evt) {
            this.showDetail = evt;
        },
        getTokenDecimals(address) {
            this.$root.web.getTokenDecimals(address).then(res => {
                console.log(res);
                this.decimal = res;
            });
        },
        getTokenSymbol(address) {
            this.$root.web.getTokenSymbol(address).then(res => {
                console.log(res);
                this.symbol = res;
            });
        },
        getTokenBalance(addressContract, addressUser) {
            this.$root.web.getTokenBalance(addressContract, addressUser).then(res => {
                this.balance = res;
            });
        },
        getTransactionsByAccount(addressContract, addressUser) {
            console.log('preloader');
            this.preloader = true;
            this.$http.get(`${this.baseUrl}/history/${addressContract}/${addressUser}`).then(function (response) {
                this.history = response.body;
                this.preloader = false;

                this.$emit('history', {
                    res: response.body,
                    decimal: this.decimal
                });
            }, function (error) {
                this.preloader = false;

                console.log(error);
            });
        }

    },
    mounted() {},
    computed: {},
    watch: {},
    created() {
        if (this.$route.params.address) {
            this.getTransactionsByAccount(this.$route.params.address, this.$localStorage.get('address').toLowerCase());
            this.getTokenBalance(this.$route.params.address, this.$localStorage.get('address').toLowerCase());
            this.getTokenSymbol(this.$route.params.address);
            this.getTokenDecimals(this.$route.params.address);
        }
    }

});

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_index__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {},
    name: 'historyTransactions',
    props: ['from', 'to', 'amount', 'txHash', 'decimal', 'symbol'],

    data() {
        return {
            balance: false,
            history: [],
            blocks: {},
            tokenAddress: '',
            baseUrl: this.$parent.baseUrl,
            address: this.$localStorage.get('address').toLowerCase()

        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router_index__["a" /* default */],

    methods: {
        getTransactionReceipt(hash) {
            this.$root.web.getTransactionReceipt(hash).then(res => {
                console.log(res);
                this.$root.web.getBlock(res.blockNumber).then(resblock => {
                    console.log(resblock);
                });
            });
        },
        toLower(address) {
            return address.toLowerCase();
        },
        calcAmount(amount) {
            return amount / 10 ** this.decimal;
        },
        getData(evt) {
            this.history = evt;
        }

    },
    mounted() {},
    computed: {},
    watch: {},
    created() {}

});

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_index__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    components: {},
    name: 'txDetail',
    props: ['active', 'hash'],
    data() {
        return {

            address: this.$localStorage.get('address').toLowerCase(),
            info: {
                hashInfo: null,
                blockInfo: null
            }

        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router_index__["a" /* default */],

    methods: {
        timestampToDate(timestamp) {
            let date = new Date(timestamp * 1000);
            return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        },
        closeDialog() {
            this.info = {
                hashInfo: null,
                blockInfo: null
            };
            this.$emit('txDetail', false);
        },
        getTransactionReceipt(hash) {
            this.$root.web.getTransactionReceipt(hash).then(res => {
                this.$root.web.getBlock(res.blockNumber).then(resBlock => {
                    this.info = {
                        hashInfo: res,
                        blockInfo: resBlock
                    };
                });
            });
        }
    },
    mounted() {},
    computed: {},
    watch: {
        active() {
            if (this.active) {
                this.getTransactionReceipt(this.hash);
            }
        }
    },
    created() {}

});

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customComponents_popup_vue__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customComponents_popup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__customComponents_popup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customComponents_addToken_vue__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customComponents_addToken_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__customComponents_addToken_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





//    import {RippleAPI} from 'ripple-lib'
//
//    //    console.log(RippleAPI);
//    const api = new RippleAPI({
//        server: 'wss://s.altnet.rippletest.net:51233' // Public rippled server hosted by Ripple, Inc.
//    });
//    api.connect().then(() => {
//        api.getBalances('r4JTZCbecohpHpjyYNSZSW6K34Yr3Gwixr').then(res => {
//            console.log(res);
//        })
//    })
/* harmony default export */ __webpack_exports__["default"] = ({

    components: { Popup: __WEBPACK_IMPORTED_MODULE_1__customComponents_popup_vue___default.a, AddToken: __WEBPACK_IMPORTED_MODULE_2__customComponents_addToken_vue___default.a },
    name: 'home',
    data() {
        return {
            popupShow: false,
            popupShowAddToken: false,
            baseUrl: this.$parent.baseUrl,
            balance: false,
            type: '',
            tokenAddress: '',
            symbol: '',
            supportedTokens: this.$parent.supportedTokens,
            address: this.$localStorage.get('address').toLowerCase()

        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],

    methods: {
        getBalance() {
            if (this.$localStorage.get('address') !== 'null') {
                this.$root.web.getBalance(this.$localStorage.get('address').toLowerCase()).then(balance => {
                    console.log('balance');
                    console.log(balance);
                    this.balance = balance;
                });
            }
        },

        openPopup(type, tokenAddress, symbol) {
            this.type = type;
            this.tokenAddress = tokenAddress;
            if (symbol) {
                this.symbol = symbol;
            } else {
                this.symbol = "ETH";
            }
            this.popupShow = !this.popupShow;
        },
        modalClose(evt) {
            this.popupShow = evt;
        },
        modalAddTokenClose(evt) {
            this.popupShowAddToken = evt;
        }

    },
    mounted() {},
    computed: {},
    watch: {},
    created() {
        this.getBalance();
    }

});

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customComponents_popup_vue__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customComponents_popup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__customComponents_popup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customComponents_alert_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customComponents_alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__customComponents_alert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customComponents_vuestic_chart_chart_types_DonutChart__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customComponents_vuestic_chart_chart_types_LineChart__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customComponents_vuestic_chart_chart_types_BubbleChart__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contracts__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_crypto_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_crypto_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({

    components: { Popup: __WEBPACK_IMPORTED_MODULE_1__customComponents_popup_vue___default.a, alert: __WEBPACK_IMPORTED_MODULE_2__customComponents_alert_vue___default.a, DonutChart: __WEBPACK_IMPORTED_MODULE_3__customComponents_vuestic_chart_chart_types_DonutChart__["a" /* default */], LineChart: __WEBPACK_IMPORTED_MODULE_4__customComponents_vuestic_chart_chart_types_LineChart__["a" /* default */], BubbleChart: __WEBPACK_IMPORTED_MODULE_5__customComponents_vuestic_chart_chart_types_BubbleChart__["a" /* default */] },
    name: 'login',
    data() {
        return {

            e1: 0,
            privateKey: '',
            publicAddress: '',
            password: '',
            passwordConfirm: '',
            alerts: [],
            welcome: false,
            active: "privateKeyTab",
            baseUrl: this.$parent.baseUrl,

            isValidPrivateKeyMessage: '',
            isValidPrivateKey: true,

            isValidPasswordMessage: '',
            isValidPassword: true

        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {

        modalClose(evt) {
            this.popupShow = evt;
        },
        confirmPassword() {

            if (!this.password || !this.passwordConfirm) {
                this.isValidPassword = false;
                this.isValidPasswordMessage = 'password required';
                this.$parent.callAlert('password  required', 'danger');
                return;
            }
            if (this.password !== this.passwordConfirm) {
                this.isValidPassword = false;
                this.isValidPasswordMessage = 'password  do not match';
                this.$parent.callAlert('password  do not match', 'danger');
                return;
            }

            this.e1 = 3;
        },
        encrypt() {

            if (this.password === this.passwordConfirm) {
                let privateKey = __WEBPACK_IMPORTED_MODULE_7_crypto_js__["AES"].encrypt(this.privateKey, this.password).toString();
                this.$localStorage.set('login', true);
                this.$localStorage.set('privateKey', privateKey);
                this.e1 = 4;

                this.$http.post(`${this.baseUrl}/login`, { "public": this.publicAddress }).then(function (response) {
                    console.log(response.body);
                }, function (error) {
                    console.log(error);
                });

                this.welcome = true;
                setTimeout(() => {
                    this.$parent.getSupportedTokens();

                    this.welcome = false;

                    this.$parent.isLogin = true;

                    this.$router.push('/home');
                }, 2000);
            } else {
                this.callAlert('password is incorrect', 'danger');
            }
        },
        generatePrivateKey() {

            let generate = this.$root.web.generatePrivateKey();
            this.privateKey = generate.privateKey;
        },
        createAccount() {
            if (!this.privateKey) {
                this.isValidPrivateKey = false;
                this.isValidPrivateKeyMessage = 'privateKey required';
                this.$parent.callAlert('privateKey is required', 'danger');
                return;
            }
            if (!/^(0x)?[0-9a-x]{66}$/.test(this.privateKey.toLowerCase())) {
                this.isValidPrivateKey = false;
                this.isValidPrivateKeyMessage = 'privateKey no validated';
                this.$parent.callAlert('privateKey no validated', 'danger');
                return;
            }
            this.e1 = 2;
            let account = this.$root.web.createAccount(this.privateKey);
            console.log('account');
            this.publicAddress = account.address;
            console.log(account.address);
            this.$localStorage.set('address', account.address);
            console.log(this.$localStorage.get('address'));
        },

        callAlert(text, type) {

            this.alerts.push({
                showAlert: true,
                text: text,
                type: type
            });

            setTimeout(() => {
                this.alerts.splice(0, 1);
            }, 5000);
        }

    },
    mounted() {},
    computed: {},
    watch: {
        privateKey() {
            this.isValidPrivateKey = true;
        }, password() {
            this.isValidPassword = true;
        }, passwordConfirm() {
            this.isValidPassword = true;
        }

    },
    created() {}

});

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["a"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["a" /* Bubble */],

    props: ['data', 'options'],

    data() {
        return {
            defaultOptions: {}
        };
    },
    mounted() {
        let options = {
            labels: ['North America', 'South America', 'Australia'],
            datasets: [{
                label: 'Population (millions)',
                backgroundColor: ['#e3c74d', '#c02151', '#1453ff'],
                data: [3000, 6000, 1500]
            }]
        };
        this.renderChart(this.data, options);
    }

});

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(73);

// import DefaultOptions from '../DefaultOptions'

/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["c" /* Doughnut */],

  props: ['data', 'options'],

  data() {
    return {
      defaultOptions: {}
    };
  },

  mounted() {
    let options = {
      labels: ['North America', 'South America', 'Australia'],
      datasets: [{
        label: 'Population (millions)',
        backgroundColor: ['#4ae387', '#c02151', '#1453ff'],
        data: [3000, 6000, 1500]
      }]
    };
    this.renderChart(this.data, options);
  }
});

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(73);

// import DefaultOptions from '../DefaultOptions'

/* harmony default export */ __webpack_exports__["a"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["b" /* Line */],

    props: ['data', 'options'],

    data() {
        return {
            defaultOptions: {}
        };
    },

    mounted() {
        let options = {
            elements: {
                line: {
                    // tension: 1, // disables bezier curves
                }
            },
            scales: {
                yAxes: [{

                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        };
        this.renderChart(this.data, options);
    }
});

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SMMContractABI = [{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "id",
        "type": "uint64"
    }, {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "_person",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_time",
        "type": "uint256"
    }],
    "name": "Payback",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{
        "name": "platformAddress",
        "type": "address"
    }],
    "name": "changePlatform",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "id",
        "type": "uint64"
    }, {
        "name": "amount",
        "type": "uint256"
    }, {
        "name": "adv_address",
        "type": "address"
    }, {
        "name": "inf_address",
        "type": "address"
    }],
    "name": "initiateEscrow",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "id",
        "type": "uint64"
    }, {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "adv_address",
        "type": "address"
    }, {
        "indexed": false,
        "name": "inf_address",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_time",
        "type": "uint256"
    }],
    "name": "InitiatedEscrow",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{
        "name": "id",
        "type": "uint64"
    }],
    "name": "payback",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "id",
        "type": "uint64"
    }, {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "_person",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_platform",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_percent",
        "type": "uint8"
    }, {
        "indexed": false,
        "name": "_time",
        "type": "uint256"
    }],
    "name": "Withdraw",
    "type": "event"
}, {
    "inputs": [{
        "name": "tokenAddress",
        "type": "address"
    }, {
        "name": "platformAddress",
        "type": "address"
    }, {
        "name": "percentPayout",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "constant": false,
    "inputs": [{
        "name": "id",
        "type": "uint64"
    }],
    "name": "withdraw",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "uint64"
    }],
    "name": "items",
    "outputs": [{
        "name": "amount",
        "type": "uint256"
    }, {
        "name": "adv_address",
        "type": "address"
    }, {
        "name": "inf_address",
        "type": "address"
    }, {
        "name": "status",
        "type": "int8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "percent",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "platform",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
/* unused harmony export SMMContractABI */


/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SMMTokenABI = [{
    "constant": false,
    "inputs": [],
    "name": "freezeTransfers",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "name": "result",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_newOwner",
        "type": "address"
    }],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "supply",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "result",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "unfreezeTransfers",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_currentValue",
        "type": "uint256"
    }, {
        "name": "_newValue",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_value",
        "type": "uint256"
    }],
    "name": "burnTokens",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "balance",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "name": "result",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }, {
        "name": "_spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "name": "remaining",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "name": "_tokenCount",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [],
    "name": "Freeze",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [],
    "name": "Unfreeze",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_owner",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_spender",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}];
/* unused harmony export SMMTokenABI */


/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const brdABI = [{
    "constant": true,
    "inputs": [{
        "name": "_querryAddress",
        "type": "address"
    }],
    "name": "isRestrictedAddress",
    "outputs": [{
        "name": "answer",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "totalSupply",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "killContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "mintingCap",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_newRestrictedAddress",
        "type": "address"
    }],
    "name": "editRestrictedAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "uint256"
    }],
    "name": "constructAdresses",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "burnTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "balance",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getOwner",
    "outputs": [{
        "name": "_array",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "tokenFrozenUntilBlock",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_frozenUntilBlock",
        "type": "uint256"
    }],
    "name": "freezeTransfersUntil",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }, {
        "name": "_extraData",
        "type": "bytes"
    }],
    "name": "approveAndCall",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }, {
        "name": "_spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "name": "remaining",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "mintTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Mint",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_from",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Burn",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_frozenUntilBlock",
        "type": "uint256"
    }],
    "name": "TokenFrozen",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_owner",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_spender",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}];
/* unused harmony export brdABI */


/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const erc20StandardABI = [{
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "supply",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "balance",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }, {
        "name": "_spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "name": "remaining",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_owner",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_spender",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = erc20StandardABI;


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ripABI = [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "balance",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }, {
        "name": "_extraData",
        "type": "bytes"
    }],
    "name": "approveAndCall",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }, {
        "name": "_spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "name": "remaining",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "fallback"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_owner",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_spender",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}];
/* unused harmony export ripABI */


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_localstorage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_cookies__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_v_autocomplete__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_v_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_v_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_top_progress__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_top_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_top_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__provider_web3provider__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_socket_io__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vue_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_util_colors__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_util_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vuetify_es5_util_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vuetify_dist_vuetify_css__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vuetify_dist_vuetify_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_vuetify_dist_vuetify_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_css_material_input_css__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_css_material_input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_css_material_input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_css_fonts_matirial_css__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_css_fonts_matirial_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__assets_css_fonts_matirial_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_css_roboto_css__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_css_roboto_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__assets_css_roboto_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_css_css_css__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_css_css_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__assets_css_css_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_v_autocomplete_dist_v_autocomplete_css__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_v_autocomplete_dist_v_autocomplete_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_v_autocomplete_dist_v_autocomplete_css__);





















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_v_autocomplete___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_localstorage___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_cookies___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vue_top_progress___default.a);
// Vue.use(VueSocketio, 'http://localhost:8000');
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vuetify___default.a, {
    theme: {
        primary: __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_util_colors___default.a.purple.base,
        secondary: __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_util_colors___default.a.grey.darken1,
        accent: __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_util_colors___default.a.shades.black,
        error: __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_util_colors___default.a.red.accent3
    }
});
const web = new __WEBPACK_IMPORTED_MODULE_9__provider_web3provider__["a" /* default */]("https://ropsten.infura.io");

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({

    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
    data: {
        web
    },
    template: '<App/>',
    components: {
        App: __WEBPACK_IMPORTED_MODULE_3__App___default.a
    },
    methods: {},
    created() {
        console.log('s');
    }
});

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = {"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = {"_from":"elliptic@^6.0.0","_id":"elliptic@6.4.0","_inBundle":false,"_integrity":"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"elliptic@^6.0.0","name":"elliptic","escapedName":"elliptic","rawSpec":"^6.0.0","saveSpec":null,"fetchSpec":"^6.0.0"},"_requiredBy":["/browserify-sign","/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz","_shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","_spec":"elliptic@^6.0.0","_where":"/Users/vladvoloshchuk/Documents/web3-wallet-core/template/node_modules/browserify-sign","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"bundleDependencies":false,"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"deprecated":false,"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.0"}

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 109,
	"./af.js": 109,
	"./ar": 116,
	"./ar-dz": 110,
	"./ar-dz.js": 110,
	"./ar-kw": 111,
	"./ar-kw.js": 111,
	"./ar-ly": 112,
	"./ar-ly.js": 112,
	"./ar-ma": 113,
	"./ar-ma.js": 113,
	"./ar-sa": 114,
	"./ar-sa.js": 114,
	"./ar-tn": 115,
	"./ar-tn.js": 115,
	"./ar.js": 116,
	"./az": 117,
	"./az.js": 117,
	"./be": 118,
	"./be.js": 118,
	"./bg": 119,
	"./bg.js": 119,
	"./bm": 120,
	"./bm.js": 120,
	"./bn": 121,
	"./bn.js": 121,
	"./bo": 122,
	"./bo.js": 122,
	"./br": 123,
	"./br.js": 123,
	"./bs": 124,
	"./bs.js": 124,
	"./ca": 125,
	"./ca.js": 125,
	"./cs": 126,
	"./cs.js": 126,
	"./cv": 127,
	"./cv.js": 127,
	"./cy": 128,
	"./cy.js": 128,
	"./da": 129,
	"./da.js": 129,
	"./de": 132,
	"./de-at": 130,
	"./de-at.js": 130,
	"./de-ch": 131,
	"./de-ch.js": 131,
	"./de.js": 132,
	"./dv": 133,
	"./dv.js": 133,
	"./el": 134,
	"./el.js": 134,
	"./en-au": 135,
	"./en-au.js": 135,
	"./en-ca": 136,
	"./en-ca.js": 136,
	"./en-gb": 137,
	"./en-gb.js": 137,
	"./en-ie": 138,
	"./en-ie.js": 138,
	"./en-il": 139,
	"./en-il.js": 139,
	"./en-nz": 140,
	"./en-nz.js": 140,
	"./eo": 141,
	"./eo.js": 141,
	"./es": 144,
	"./es-do": 142,
	"./es-do.js": 142,
	"./es-us": 143,
	"./es-us.js": 143,
	"./es.js": 144,
	"./et": 145,
	"./et.js": 145,
	"./eu": 146,
	"./eu.js": 146,
	"./fa": 147,
	"./fa.js": 147,
	"./fi": 148,
	"./fi.js": 148,
	"./fo": 149,
	"./fo.js": 149,
	"./fr": 152,
	"./fr-ca": 150,
	"./fr-ca.js": 150,
	"./fr-ch": 151,
	"./fr-ch.js": 151,
	"./fr.js": 152,
	"./fy": 153,
	"./fy.js": 153,
	"./gd": 154,
	"./gd.js": 154,
	"./gl": 155,
	"./gl.js": 155,
	"./gom-latn": 156,
	"./gom-latn.js": 156,
	"./gu": 157,
	"./gu.js": 157,
	"./he": 158,
	"./he.js": 158,
	"./hi": 159,
	"./hi.js": 159,
	"./hr": 160,
	"./hr.js": 160,
	"./hu": 161,
	"./hu.js": 161,
	"./hy-am": 162,
	"./hy-am.js": 162,
	"./id": 163,
	"./id.js": 163,
	"./is": 164,
	"./is.js": 164,
	"./it": 165,
	"./it.js": 165,
	"./ja": 166,
	"./ja.js": 166,
	"./jv": 167,
	"./jv.js": 167,
	"./ka": 168,
	"./ka.js": 168,
	"./kk": 169,
	"./kk.js": 169,
	"./km": 170,
	"./km.js": 170,
	"./kn": 171,
	"./kn.js": 171,
	"./ko": 172,
	"./ko.js": 172,
	"./ky": 173,
	"./ky.js": 173,
	"./lb": 174,
	"./lb.js": 174,
	"./lo": 175,
	"./lo.js": 175,
	"./lt": 176,
	"./lt.js": 176,
	"./lv": 177,
	"./lv.js": 177,
	"./me": 178,
	"./me.js": 178,
	"./mi": 179,
	"./mi.js": 179,
	"./mk": 180,
	"./mk.js": 180,
	"./ml": 181,
	"./ml.js": 181,
	"./mn": 182,
	"./mn.js": 182,
	"./mr": 183,
	"./mr.js": 183,
	"./ms": 185,
	"./ms-my": 184,
	"./ms-my.js": 184,
	"./ms.js": 185,
	"./mt": 186,
	"./mt.js": 186,
	"./my": 187,
	"./my.js": 187,
	"./nb": 188,
	"./nb.js": 188,
	"./ne": 189,
	"./ne.js": 189,
	"./nl": 191,
	"./nl-be": 190,
	"./nl-be.js": 190,
	"./nl.js": 191,
	"./nn": 192,
	"./nn.js": 192,
	"./pa-in": 193,
	"./pa-in.js": 193,
	"./pl": 194,
	"./pl.js": 194,
	"./pt": 196,
	"./pt-br": 195,
	"./pt-br.js": 195,
	"./pt.js": 196,
	"./ro": 197,
	"./ro.js": 197,
	"./ru": 198,
	"./ru.js": 198,
	"./sd": 199,
	"./sd.js": 199,
	"./se": 200,
	"./se.js": 200,
	"./si": 201,
	"./si.js": 201,
	"./sk": 202,
	"./sk.js": 202,
	"./sl": 203,
	"./sl.js": 203,
	"./sq": 204,
	"./sq.js": 204,
	"./sr": 206,
	"./sr-cyrl": 205,
	"./sr-cyrl.js": 205,
	"./sr.js": 206,
	"./ss": 207,
	"./ss.js": 207,
	"./sv": 208,
	"./sv.js": 208,
	"./sw": 209,
	"./sw.js": 209,
	"./ta": 210,
	"./ta.js": 210,
	"./te": 211,
	"./te.js": 211,
	"./tet": 212,
	"./tet.js": 212,
	"./tg": 213,
	"./tg.js": 213,
	"./th": 214,
	"./th.js": 214,
	"./tl-ph": 215,
	"./tl-ph.js": 215,
	"./tlh": 216,
	"./tlh.js": 216,
	"./tr": 217,
	"./tr.js": 217,
	"./tzl": 218,
	"./tzl.js": 218,
	"./tzm": 220,
	"./tzm-latn": 219,
	"./tzm-latn.js": 219,
	"./tzm.js": 220,
	"./ug-cn": 221,
	"./ug-cn.js": 221,
	"./uk": 222,
	"./uk.js": 222,
	"./ur": 223,
	"./ur.js": 223,
	"./uz": 225,
	"./uz-latn": 224,
	"./uz-latn.js": 224,
	"./uz.js": 225,
	"./vi": 226,
	"./vi.js": 226,
	"./x-pseudo": 227,
	"./x-pseudo.js": 227,
	"./yo": 228,
	"./yo.js": 228,
	"./zh-cn": 229,
	"./zh-cn.js": 229,
	"./zh-hk": 230,
	"./zh-hk.js": 230,
	"./zh-tw": 231,
	"./zh-tw.js": 231
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 459;

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = {"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(443)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(297),
  /* template */
  __webpack_require__(546),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cd45202e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(434)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(300),
  /* template */
  __webpack_require__(537),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2252ff39",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(440)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(301),
  /* template */
  __webpack_require__(543),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-868ce57c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(442)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(302),
  /* template */
  __webpack_require__(545),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-be12eeb2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(437)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(303),
  /* template */
  __webpack_require__(540),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7afd2787",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(438)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(306),
  /* template */
  __webpack_require__(541),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7cf978f4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(444)
}
var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(307),
  /* template */
  __webpack_require__(547),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e66bd85c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('header', [_c('router-link', {
    staticClass: "v-btn no-shadow header-btn logo",
    attrs: {
      "to": '/'
    }
  }, [_c('v-icon', [_vm._v("account_balance_wallet")]), _vm._v("\n                Wallet\n            ")], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1 0 auto"
    }
  }), _vm._v(" "), _c('div', [_c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "justify-content": "center"
    }
  }, [_c('v-icon', [_vm._v("brightness_5")]), _vm._v(" "), _c('v-switch', {
    staticStyle: {
      "justify-content": "center"
    },
    on: {
      "change": function($event) {
        _vm.theme()
      }
    },
    model: {
      value: (_vm.night),
      callback: function($$v) {
        _vm.night = $$v
      },
      expression: "night"
    }
  }), _vm._v(" "), _c('v-icon', [_vm._v("brightness_3")])], 1)]), _vm._v(" "), (_vm.isLogin) ? _c('div', [_c('button', {
    staticClass: "v-btn no-shadow header-btn",
    on: {
      "click": function($event) {
        _vm.popupShowAddress = !_vm.popupShowAddress
      }
    }
  }, [_c('v-icon', [_vm._v("assignment")]), _vm._v(" "), _c('div', {
    staticClass: "header-txt"
  }, [_vm._v("\n\n\n                        address\n                    ")])], 1), _vm._v(" "), _c('button', {
    staticClass: "v-btn no-shadow header-btn",
    on: {
      "click": function($event) {
        _vm.logout()
      }
    }
  }, [_c('v-icon', [_vm._v("exit_to_app")]), _vm._v(" "), _c('div', {
    staticClass: "header-txt"
  }, [_vm._v("\n                        log out\n                    ")])], 1)]) : _vm._e()], 1), _vm._v(" "), _vm._l((_vm.alerts), function(alert, index) {
    return _c('alert', {
      style: ('top:' + (((index + 1)) * 8 - 4) + '%'),
      attrs: {
        "type": alert.type,
        "withCloseBtn": true
      }
    }, [_c('span', [_vm._v(" " + _vm._s(alert.text) + " ")])])
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.isLogin) ? _c('popupAddress', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.popupShowAddress),
      expression: "popupShowAddress"
    }],
    on: {
      "modalAddress": _vm.modalCloseAddress
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', [(_vm.preloader) ? _c('div', {
    staticClass: "main-preloader"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1)]) : _c('div', [_c('router-view')], 1)]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.imgUrl
    }
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "footer"
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "center"
    }
  }, [_c('div', {
    staticClass: "circle"
  }, [_c('div', {
    staticClass: "circle1 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle2 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle3 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle4 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle5 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle6 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle7 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle8 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle9 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle10 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle11 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle12 child"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-preloader-text"
  }, [_vm._v("\n                    Synchronization"), _c('br'), _vm._v("\n                    with your wallet\n                ")])
}]}

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-dialog__content "
  }, [_c('div', {
    staticClass: "v-dialog v-dialog--active",
    staticStyle: {
      "width": "440px"
    }
  }, [_c('v-tabs', {
    attrs: {
      "color": "root-color",
      "centered": "",
      "slider-color": "white"
    },
    model: {
      value: (_vm.tab),
      callback: function($$v) {
        _vm.tab = $$v
      },
      expression: "tab"
    }
  }, [_c('v-tab', {
    key: 1,
    attrs: {
      "ripple": ""
    }
  }, [_vm._v("\n                Address\n            ")]), _vm._v(" "), _c('v-tab', {
    key: 2,
    attrs: {
      "ripple": ""
    }
  }, [_vm._v("\n                Private key\n            ")]), _vm._v(" "), _c('v-tab-item', {
    key: 1
  }, [_c('div', {
    staticClass: "v-card"
  }, [_c('div', {
    staticClass: "v-card__text"
  }, [_c('div', [_c('img', {
    staticClass: "qr-code",
    attrs: {
      "src": _vm.QRCodeImg
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_vm._v("\n                            " + _vm._s(_vm.address) + "\n                        ")])]), _vm._v(" "), _c('hr', {
    staticClass: "v-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-card__actions"
  }, [_c('div', {
    staticClass: "spacer"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "success",
    on: {
      "click": function($event) {
        _vm.copyText()
      }
    }
  }, [_vm._v("copy")]), _vm._v(" "), _c('v-btn', {
    staticClass: "back",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("cancel")])], 1)])]), _vm._v(" "), _c('v-tab-item', {
    key: 2
  }, [_c('div', {
    staticClass: "v-card"
  }, [_c('div', {
    staticClass: "v-card__text"
  }, [(!_vm.showPrivateKey) ? _c('div', [_c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "matirial-input",
    class: [_vm.password ? 'active' : '', _vm.isValidpassword ? '' : 'no-validate'],
    attrs: {
      "id": "passwordPrivate",
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.password ? 'active' : '',
    attrs: {
      "for": "passwordPrivate"
    }
  }, [_vm._v("password")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidpasswordMessage))])])]) : _vm._e(), _vm._v(" "), (_vm.showPrivateKey) ? _c('div', [_c('div', [_c('img', {
    staticClass: "qr-code",
    attrs: {
      "src": _vm.QRCodeImgPrivateKey
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "privateKey"
  }, [_vm._v("\n                                " + _vm._s(_vm.privateKey) + "\n                            ")])]) : _vm._e(), _vm._v(" "), _c('hr', {
    staticClass: "v-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-card__actions"
  }, [_c('div', {
    staticClass: "spacer"
  }), _vm._v(" "), (_vm.showPrivateKey) ? _c('v-btn', {
    staticClass: "success",
    on: {
      "click": function($event) {
        _vm.copyTextKey()
      }
    }
  }, [_vm._v("copy")]) : _c('v-btn', {
    staticClass: "success",
    on: {
      "click": function($event) {
        _vm.encriptKey()
      }
    }
  }, [_vm._v("encript")]), _vm._v(" "), _c('v-btn', {
    staticClass: "back",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("cancel")])], 1)])])])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.active && _vm.info) ? _c('div', {
    staticClass: "v-dialog__content "
  }, [_c('div', {
    staticClass: "v-dialog v-dialog--active",
    staticStyle: {
      "width": "500px"
    }
  }, [(_vm.info.hashInfo && _vm.info.blockInfo) ? _c('div', {
    staticClass: "v-card"
  }, [_c('div', {
    staticClass: "v-card__title headline grey lighten-2 v-card__title--primary"
  }, [_c('div', [_vm._v("Transaction Hash")]), _vm._v(" "), _c('div', {
    staticClass: "hash"
  }, [_vm._v("\n                        " + _vm._s(_vm.info.hashInfo.transactionHash) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "v-card__text"
  }, [_c('div', [_c('div', {
    staticClass: "flex-container "
  }, [_c('div', [_vm._v(" from:")]), _vm._v(" "), _c('div', {
    staticClass: "hash"
  }, [_vm._v(" " + _vm._s(_vm.info.hashInfo.from) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "flex-container "
  }, [_c('div', [_vm._v("to:")]), _vm._v(" "), _c('div', {
    staticClass: "hash"
  }, [_vm._v(" " + _vm._s(_vm.info.hashInfo.to) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "flex-container "
  }, [_c('div', [_vm._v("blockNumber:")]), _vm._v(" "), _c('div', [_vm._v(" " + _vm._s(_vm.info.hashInfo.blockNumber) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "flex-container "
  }, [_c('div', [_vm._v("gasUsed:")]), _vm._v(" "), _c('div', [_vm._v(" " + _vm._s(_vm.info.hashInfo.gasUsed) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "flex-container "
  }, [_c('div', [_vm._v("status:")]), _vm._v(" "), _c('div', {
    class: _vm.info.hashInfo.status ? 'statusTrue' : ''
  }, [_vm._v(" " + _vm._s(_vm.info.hashInfo.status))])]), _vm._v(" "), _c('div', {
    staticClass: "flex-container "
  }, [_c('div', [_vm._v("timestamp:")]), _vm._v(" "), _c('div', [_vm._v(" " + _vm._s(_vm.timestampToDate(_vm.info.blockInfo.timestamp)) + " ")])])])]), _vm._v(" "), _c('hr', {
    staticClass: "v-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-card__actions"
  }, [_c('div', {
    staticClass: "spacer"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "back",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("cancel")])], 1)]) : _c('div', {
    staticClass: "preloader"
  }, [_vm._m(0)])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "preloader-text"
  }, [_vm._v(" Loading info")]), _vm._v(" "), _c('div', {
    staticClass: "loading"
  }, [_c('div', {
    staticClass: "circle circle-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-4"
  })])])
}]}

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(!_vm.hidden) ? _c('div', {
    staticClass: "vuestic-alert alert",
    class: _vm.alertClass
  }, [_vm._t("default"), _vm._v(" "), (_vm.withCloseBtn) ? _c('i', {
    staticClass: "fa fa-close alert-close",
    on: {
      "click": function($event) {
        _vm.hide()
      }
    }
  }) : _vm._e()], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.preloader) ? _c('div', {
    staticClass: "main-preloader"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1)]) : _c('div', [_c('div', {
    staticClass: "info-token"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(251),
      "width": "30",
      "height": "30"
    }
  }), _vm._v("\n            Your balance:\n            " + _vm._s(_vm.balance) + "\n            " + _vm._s(_vm.symbol) + "\n        ")]), _vm._v(" "), (_vm.history.length) ? _c('div', _vm._l((_vm.history), function(item, index) {
    return _c('div', [_c('history-transactions', {
      attrs: {
        "from": item.returnValues[0],
        "to": item.returnValues[1],
        "amount": item.returnValues[2],
        "tx-hash": item.transactionHash,
        "decimal": _vm.decimal,
        "symbol": _vm.symbol
      }
    }, [_c('button', {
      staticClass: "v-btn back",
      on: {
        "click": function($event) {
          _vm.openDetail(item.transactionHash)
        }
      }
    }, [_c('v-icon', [_vm._v("visibility")]), _vm._v("\n                        Detail\n                    ")], 1)])], 1)
  })) : _c('div', [_c('v-layout', {
    attrs: {
      "align-center": "",
      "column": "",
      "justify-center": ""
    }
  }, [_c('h1', {
    staticClass: "display-2 font-weight-thin mb-3",
    staticStyle: {
      "margin-top": "35px",
      "text-align": "center"
    }
  }, [_vm._v("\n                    Your history empty")])])], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('tx-detail', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDetail),
      expression: "showDetail"
    }],
    attrs: {
      "active": _vm.showDetail,
      "hash": _vm.currencyHash
    },
    on: {
      "txDetail": _vm.modalClose
    }
  })], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "center"
    }
  }, [_c('div', {
    staticClass: "circle"
  }, [_c('div', {
    staticClass: "circle1 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle2 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle3 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle4 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle5 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle6 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle7 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle8 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle9 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle10 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle11 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle12 child"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-preloader-text"
  }, [_vm._v("\n            Loading"), _c('br'), _vm._v("\n            your history transactions\n        ")])
}]}

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin-top": "25px"
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('popup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.popupShow),
      expression: "popupShow"
    }],
    attrs: {
      "type": _vm.type,
      "active": _vm.popupShow,
      "token-address": _vm.tokenAddress,
      "symbol": _vm.symbol
    },
    on: {
      "modal": _vm.modalClose
    }
  })], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('add-token', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.popupShowAddToken),
      expression: "popupShowAddToken"
    }],
    on: {
      "addToken": _vm.modalAddTokenClose
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "flex-container-parent"
  }, [_c('div', {
    staticClass: "flex-container"
  }, [(_vm.balance !== false) ? _c('div', [_c('v-card', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "width": "200",
      "height": "150"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(252),
      "width": "60",
      "height": "60"
    }
  }), _vm._v(" "), _c('div', [_vm._v("ETH")]), _vm._v(" "), _c('div', [_vm._v("\n                        " + _vm._s((+_vm.balance).toFixed(4)) + "\n                    ")]), _vm._v(" "), _c('v-card-actions', [_c('router-link', {
    staticClass: "custom-link v-btn",
    attrs: {
      "to": 'history/ETH'
    }
  }, [_c('v-icon', [_vm._v("history")]), _vm._v("\n                            history\n                        ")], 1), _vm._v(" "), _c('button', {
    staticClass: " v-btn success",
    on: {
      "click": function($event) {
        _vm.openPopup('ETH')
      }
    }
  }, [_c('v-icon', [_vm._v("rotate_right")]), _vm._v("\n                            send\n                        ")], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.$parent.supportedTokens), function(item) {
    return _c('div', [_c('v-card', {
      staticStyle: {
        "text-align": "center"
      },
      attrs: {
        "width": "200",
        "height": "150"
      }
    }, [_c('img', {
      attrs: {
        "src": __webpack_require__(251),
        "width": "60",
        "height": "60"
      }
    }), _vm._v(" "), _c('div', [_vm._v(_vm._s(item.symbol))]), _vm._v(" "), _c('div', [_vm._v("\n                        " + _vm._s((+item.balance).toFixed(4)) + "\n                    ")]), _vm._v(" "), _c('v-card-actions', [_c('router-link', {
      staticClass: "custom-link v-btn",
      attrs: {
        "to": ("history/token/" + (item.address))
      }
    }, [_c('v-icon', [_vm._v("history")]), _vm._v("\n                            history\n                        ")], 1), _vm._v(" "), _c('button', {
      staticClass: " v-btn success",
      attrs: {
        "disabled": +item.balance == 0
      },
      on: {
        "click": function($event) {
          _vm.openPopup('token', item.address, item.symbol)
        }
      }
    }, [_c('v-icon', [_vm._v("rotate_right")]), _vm._v("\n                            send\n                        ")], 1)], 1)], 1)], 1)
  }), _vm._v(" "), _c('div', [_c('v-card', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "width": "200",
      "height": "150"
    }
  }, [_c('button', {
    staticClass: "btn-add ",
    on: {
      "click": function($event) {
        _vm.popupShowAddToken = !_vm.popupShowAddToken
      }
    }
  }, [_c('v-icon', {
    staticStyle: {
      "font-size": "90px",
      "color": "var(--main-bg-color-header)"
    }
  }, [_vm._v("add_circle_outline\n                        ")])], 1), _vm._v(" "), _c('v-card-actions', {
    staticStyle: {
      "justify-content": "center"
    }
  }, [_c('h2', [_vm._v("Add token")])])], 1)], 1)], 2)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tx-container"
  }, [_c('div', {
    staticClass: "v-card"
  }, [_c('div', {
    staticClass: "tx-content"
  }, [(_vm.toLower(_vm.from) == _vm.toLower(_vm.to)) ? _c('div', [_c('div', {
    staticClass: "tx-content"
  }, [_c('div', {
    staticClass: "tx-place self"
  }, [_vm._v("\n                        self\n                    ")]), _vm._v(" "), _c('div', [_vm._v("\n                        you send yourself," + _vm._s(_vm.calcAmount(_vm.amount)) + " " + _vm._s(_vm.symbol) + "\n                    ")])])]) : (_vm.toLower(_vm.from) == _vm.address) ? _c('div', [_c('div', {
    staticClass: "tx-content"
  }, [_c('div', {
    staticClass: "tx-place out"
  }, [_vm._v("\n                        out\n                    ")]), _vm._v(" "), _c('div', [_vm._v("\n                        you send  " + _vm._s(_vm.toLower(_vm.to)) + "," + _vm._s(_vm.calcAmount(_vm.amount)) + " " + _vm._s(_vm.symbol) + "\n                    ")])])]) : (_vm.toLower(_vm.to) == _vm.address) ? _c('div', [_c('div', {
    staticClass: "tx-content"
  }, [_c('div', {
    staticClass: "tx-place in"
  }, [_vm._v("\n                        in\n                    ")]), _vm._v(" "), _c('div', [_vm._v("\n                        " + _vm._s(_vm.toLower(_vm.to)) + " send you," + _vm._s(_vm.calcAmount(_vm.amount)) + " " + _vm._s(_vm.symbol) + "\n                    ")])])]) : _vm._e()]), _vm._v(" "), _c('div', [_c('v-card-actions', [_c('div', {
    staticStyle: {
      "flex": "1"
    }
  }), _vm._v(" "), _vm._t("default")], 2)], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view', {
    on: {
      "history": _vm.getData
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-dialog__content "
  }, [_c('div', {
    staticClass: "v-dialog v-dialog--active",
    staticStyle: {
      "width": "500px"
    }
  }, [_c('div', {
    staticClass: "v-card"
  }, [_c('div', {
    staticClass: "v-card__title headline grey lighten-2 v-card__title--primary"
  }, [_vm._v("\n                Your balance:\n                " + _vm._s(_vm.balance) + "\n                " + _vm._s(_vm.symbol) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "v-card__text"
  }, [_c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addressTo),
      expression: "addressTo"
    }],
    staticClass: "matirial-input",
    class: [_vm.addressTo ? 'active' : '', _vm.isValidAddressTo ? '' : 'no-validate'],
    attrs: {
      "id": "addressTo",
      "type": "text"
    },
    domProps: {
      "value": (_vm.addressTo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addressTo = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.addressTo ? 'active' : '',
    attrs: {
      "for": "addressTo"
    }
  }, [_vm._v("receiver")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidAddressToMessage))])]), _vm._v(" "), _c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "matirial-input",
    class: [_vm.value ? 'active' : '', _vm.isValidValue ? '' : 'no-validate'],
    attrs: {
      "id": "value",
      "type": "text"
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.value ? 'active' : '',
    attrs: {
      "for": "value"
    }
  }, [_vm._v("value")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidValueMessage))])]), _vm._v(" "), _c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.gasPrice),
      expression: "gasPrice"
    }],
    staticClass: "matirial-input",
    class: [_vm.gasPrice ? 'active' : '', _vm.isValidgasPrice ? '' : 'no-validate'],
    attrs: {
      "id": "gasPrice",
      "type": "text"
    },
    domProps: {
      "value": (_vm.gasPrice)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.gasPrice = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.gasPrice ? 'active' : '',
    attrs: {
      "for": "gasPrice"
    }
  }, [_vm._v("gasPrice")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidgasPriceMessage))])]), _vm._v(" "), _c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.gasLimit),
      expression: "gasLimit"
    }],
    staticClass: "matirial-input",
    class: [_vm.gasLimit ? 'active' : '', _vm.isValidgasLimit ? '' : 'no-validate'],
    attrs: {
      "id": "gasLimit",
      "type": "text"
    },
    domProps: {
      "value": (_vm.gasLimit)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.gasLimit = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.gasLimit ? 'active' : '',
    attrs: {
      "for": "gasLimit"
    }
  }, [_vm._v("gasLimit")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidgasLimitMessage))])]), _vm._v(" "), _c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "matirial-input",
    class: [_vm.password ? 'active' : '', _vm.isValidpassword ? '' : 'no-validate'],
    attrs: {
      "id": "passwordSend",
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.password ? 'active' : '',
    attrs: {
      "for": "passwordSend"
    }
  }, [_vm._v("password")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidpasswordMessage))])])]), _vm._v(" "), _c('hr', {
    staticClass: "v-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-card__actions"
  }, [_c('div', {
    staticClass: "spacer"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "back",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("cancel")]), _vm._v(" "), _c('v-btn', {
    staticClass: "success",
    on: {
      "click": function($event) {
        _vm.send()
      }
    }
  }, [_vm._v("send")])], 1)])])])
},staticRenderFns: []}

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.preloader) ? _c('div', {
    staticClass: "main-preloader"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1)]) : _c('div', [_c('div', {
    staticClass: "info-token"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(252),
      "width": "30",
      "height": "30"
    }
  }), _vm._v("\n\n            Your balance:\n            " + _vm._s(_vm.balance) + "\n            ETH\n        ")]), _vm._v(" "), (_vm.history.length) ? _c('div', _vm._l((_vm.history), function(item, index) {
    return _c('div', [(item.value > 0) ? _c('div', [_c('history-transactions', {
      attrs: {
        "from": item.from,
        "to": item.to,
        "amount": item.value,
        "tx-hash": item.hash,
        "decimal": _vm.decimal,
        "symbol": 'ETH'
      }
    }, [_c('button', {
      staticClass: "v-btn back",
      on: {
        "click": function($event) {
          _vm.openDetail(item.hash)
        }
      }
    }, [_c('v-icon', [_vm._v("visibility")]), _vm._v("\n                            Detail\n                        ")], 1)])], 1) : _vm._e()])
  })) : _c('div', [_c('v-layout', {
    attrs: {
      "align-center": "",
      "column": "",
      "justify-center": ""
    }
  }, [_c('h1', {
    staticClass: "display-2 font-weight-thin mb-3",
    staticStyle: {
      "margin-top": "35px",
      "text-align": "center"
    }
  }, [_vm._v("\n                    Your history empty")])])], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('tx-detail', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDetail),
      expression: "showDetail"
    }],
    attrs: {
      "active": _vm.showDetail,
      "hash": _vm.currencyHash
    },
    on: {
      "txDetail": _vm.modalClose
    }
  })], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "center"
    }
  }, [_c('div', {
    staticClass: "circle"
  }, [_c('div', {
    staticClass: "circle1 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle2 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle3 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle4 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle5 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle6 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle7 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle8 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle9 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle10 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle11 child"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle12 child"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-preloader-text"
  }, [_vm._v("\n            Loading"), _c('br'), _vm._v("\n             your history transactions\n        ")])
}]}

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-dialog__content "
  }, [_c('div', {
    staticClass: "v-dialog v-dialog--active",
    staticStyle: {
      "width": "500px"
    }
  }, [_c('div', {
    staticClass: "v-card"
  }, [_c('div', {
    staticClass: "v-card__title headline grey lighten-2 v-card__title--primary"
  }, [_vm._v("\n                add Token\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "v-card__text"
  }, [_c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addressToken),
      expression: "addressToken"
    }],
    ref: "inputAddress",
    staticClass: "matirial-input",
    class: [_vm.addressToken ? 'active' : '', _vm.isValidAddressToken ? '' : 'no-validate'],
    attrs: {
      "id": "addressToken",
      "type": "text"
    },
    domProps: {
      "value": (_vm.addressToken)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addressToken = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.addressToken ? 'active' : '',
    attrs: {
      "for": "addressToken"
    }
  }, [_vm._v("addressToken")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidAddressTokenMessage))]), _vm._v(" "), _c('div', {
    staticClass: "items",
    on: {
      "click": function($event) {
        _vm.onFocus()
      }
    }
  }, [(!!_vm.allTokensAutoComplite.length) ? _c('div', _vm._l((_vm.allTokensAutoComplite), function(item) {
    return _c('div', [_c('button', {
      on: {
        "click": function($event) {
          _vm.addressToken = item.address
        }
      }
    }, [_vm._v(" " + _vm._s(item.address))])])
  })) : _c('div', [_vm._v(" no found")])])])]), _vm._v(" "), _c('hr', {
    staticClass: "v-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-card__actions",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('div', {
    staticClass: "spacer"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "back",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("cancel")]), _vm._v(" "), _c('v-btn', {
    staticClass: "success",
    on: {
      "click": function($event) {
        _vm.addToken()
      }
    }
  }, [_vm._v("send")])], 1)])])])
},staticRenderFns: []}

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.alerts), function(alert, index) {
    return _c('alert', {
      style: ('top:' + ((index + 1) * 6 - 4) + '%'),
      attrs: {
        "type": alert.type,
        "withCloseBtn": true
      }
    }, [_c('span', [_vm._v(" " + _vm._s(alert.text) + " ")])])
  }), _vm._v(" "), (_vm.welcome) ? _c('div', [_c('div', {
    staticClass: "start"
  }, [_c('div', {
    staticClass: "parent-content"
  }, [_c('div', {
    staticClass: "start-content"
  }, [_c('v-icon', {
    staticClass: "icon-start"
  }, [_vm._v("account_balance_wallet")])], 1)])]), _vm._v(" "), _c('h1', {
    staticClass: "welcome ",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v(" Welcome in your wallet")])]) : _c('div', [_c('v-stepper', {
    attrs: {
      "vertical": ""
    },
    model: {
      value: (_vm.e1),
      callback: function($$v) {
        _vm.e1 = $$v
      },
      expression: "e1"
    }
  }, [_c('v-stepper-step', {
    attrs: {
      "complete": _vm.e1 > 1,
      "step": "1"
    }
  }, [_vm._v("Enter your private key")]), _vm._v(" "), _c('v-stepper-content', {
    attrs: {
      "step": "1"
    }
  }, [_c('v-card', {
    staticClass: "mb-5 card-login",
    attrs: {
      "height": "200px",
      "color": " lighten-1"
    }
  }, [_c('v-form', {
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.privateKey),
      expression: "privateKey"
    }],
    staticClass: "matirial-input",
    class: [_vm.privateKey ? 'active' : '', _vm.isValidPrivateKey ? '' : 'no-validate'],
    staticStyle: {
      "color": "var(--color-negative)"
    },
    attrs: {
      "id": "privateKey",
      "type": "text"
    },
    domProps: {
      "value": (_vm.privateKey)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.privateKey = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.privateKey ? 'active' : '',
    staticStyle: {
      "color": "var(--color-negative)"
    },
    attrs: {
      "for": "privateKey"
    }
  }, [_vm._v("privateKey")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidPrivateKeyMessage))])])]), _vm._v(" "), _c('v-btn', {
    on: {
      "click": function($event) {
        _vm.generatePrivateKey()
      }
    }
  }, [_vm._v("Generate Private Key")])], 1), _vm._v(" "), _c('button', {
    staticClass: " v-btn success",
    on: {
      "click": function($event) {
        _vm.createAccount()
      }
    }
  }, [_vm._v("\n                    Next\n                ")])], 1), _vm._v(" "), _c('v-stepper-step', {
    attrs: {
      "complete": _vm.e1 > 2,
      "step": "2"
    }
  }, [_vm._v("Enter password")]), _vm._v(" "), _c('v-stepper-content', {
    attrs: {
      "step": "2"
    }
  }, [_c('v-card', {
    staticClass: "mb-5 card-login",
    attrs: {
      "color": " lighten-1",
      "height": "200px"
    }
  }, [_c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "matirial-input",
    class: [_vm.password ? 'active' : '', _vm.isValidPassword ? '' : 'no-validate'],
    staticStyle: {
      "color": "var(--color-negative)"
    },
    attrs: {
      "id": "password",
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.password ? 'active' : '',
    staticStyle: {
      "color": "var(--color-negative)"
    },
    attrs: {
      "for": "password"
    }
  }, [_vm._v("password")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidPasswordMessage))])]), _vm._v(" "), _c('div', {
    staticClass: "input-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.passwordConfirm),
      expression: "passwordConfirm"
    }],
    staticClass: "matirial-input",
    class: [_vm.passwordConfirm ? 'active' : '', _vm.isValidPassword ? '' : 'no-validate'],
    staticStyle: {
      "color": "var(--color-negative)"
    },
    attrs: {
      "id": "passwordConfirm",
      "type": "passwordConfirm"
    },
    domProps: {
      "value": (_vm.passwordConfirm)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.passwordConfirm = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "matirial-label",
    class: _vm.passwordConfirm ? 'active' : '',
    staticStyle: {
      "color": "var(--color-negative)"
    },
    attrs: {
      "for": "passwordConfirm"
    }
  }, [_vm._v("passwordConfirm")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "input-error"
  }, [_vm._v(_vm._s(_vm.isValidPasswordMessage))])])]), _vm._v(" "), _c('button', {
    staticClass: " v-btn success",
    on: {
      "click": function($event) {
        _vm.confirmPassword();
      }
    }
  }, [_vm._v("\n                    Next\n                ")]), _vm._v(" "), _c('button', {
    staticClass: " v-btn back",
    on: {
      "click": function($event) {
        _vm.e1 = _vm.e1 - 1
      }
    }
  }, [_vm._v("Back")])], 1), _vm._v(" "), _c('v-stepper-step', {
    attrs: {
      "complete": _vm.e1 == 4,
      "step": "3"
    }
  }, [_vm._v("Complete")]), _vm._v(" "), _c('v-stepper-content', {
    attrs: {
      "step": "3"
    }
  }, [_c('v-card', {
    staticClass: "mb-5 card-login",
    attrs: {
      "color": " lighten-1",
      "height": "200px"
    }
  }, [_c('v-layout', {
    attrs: {
      "align-center": "",
      "column": "",
      "justify-center": ""
    }
  }, [_c('div', {
    staticClass: "wallet-ready"
  }, [_c('v-icon', {
    staticStyle: {
      "font-size": "3em"
    }
  }, [_vm._v("account_balance_wallet")])], 1), _vm._v(" "), _c('h4', {
    staticClass: "subheading"
  }, [_vm._v("Your wallet ready!")])])], 1), _vm._v(" "), _c('button', {
    staticClass: " v-btn success",
    on: {
      "click": function($event) {
        _vm.encrypt();
      }
    }
  }, [_vm._v("Finish")])], 1), _vm._v(" "), _c('v-stepper-content', {
    attrs: {
      "step": "4"
    }
  }, [_c('v-card', {
    staticClass: "mb-5 card-login",
    attrs: {
      "color": "lighten-1",
      "height": "200px"
    }
  }, [_c('svg', {
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 130.2 130.2"
    }
  }, [_c('circle', {
    staticClass: "path circle",
    attrs: {
      "fill": "none",
      "stroke": "#73AF55",
      "stroke-width": "6",
      "stroke-miterlimit": "10",
      "cx": "65.1",
      "cy": "65.1",
      "r": "62.1"
    }
  }), _vm._v(" "), _c('polyline', {
    staticClass: "path check",
    attrs: {
      "fill": "none",
      "stroke": "#73AF55",
      "stroke-width": "6",
      "stroke-linecap": "round",
      "stroke-miterlimit": "10",
      "points": "100.2,40.2 51.5,88.8 29.8,67.5 "
    }
  })])])], 1)], 1)], 1)], 2)
},staticRenderFns: []}

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = {"_from":"web3@^1.0.0-beta.34","_id":"web3@1.0.0-beta.34","_inBundle":false,"_integrity":"sha1-NH5WG3hAmMtVYzFfSQR5odkfKrE=","_location":"/web3","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"web3@^1.0.0-beta.34","name":"web3","escapedName":"web3","rawSpec":"^1.0.0-beta.34","saveSpec":null,"fetchSpec":"^1.0.0-beta.34"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/web3/-/web3-1.0.0-beta.34.tgz","_shasum":"347e561b784098cb5563315f490479a1d91f2ab1","_spec":"web3@^1.0.0-beta.34","_where":"/Users/vladvoloshchuk/Documents/web3-wallet-core/template","author":{"name":"ethereum.org"},"authors":[{"name":"Fabian Vogelsteller","email":"fabian@ethereum.org","homepage":"http://frozeman.de"},{"name":"Marek Kotewicz","email":"marek@parity.io","url":"https://github.com/debris"},{"name":"Marian Oancea","url":"https://github.com/cubedro"},{"name":"Gav Wood","email":"g@parity.io","homepage":"http://gavwood.com"},{"name":"Jeffery Wilcke","email":"jeffrey.wilcke@ethereum.org","url":"https://github.com/obscuren"}],"bugs":{"url":"https://github.com/ethereum/web3.js/issues"},"bundleDependencies":false,"dependencies":{"web3-bzz":"1.0.0-beta.34","web3-core":"1.0.0-beta.34","web3-eth":"1.0.0-beta.34","web3-eth-personal":"1.0.0-beta.34","web3-net":"1.0.0-beta.34","web3-shh":"1.0.0-beta.34","web3-utils":"1.0.0-beta.34"},"deprecated":false,"description":"Ethereum JavaScript API","keywords":["Ethereum","JavaScript","API"],"license":"LGPL-3.0","main":"src/index.js","name":"web3","namespace":"ethereum","repository":{"type":"git","url":"https://github.com/ethereum/web3.js/tree/master/packages/web3"},"types":"index.d.ts","version":"1.0.0-beta.34"}

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = {"_from":"git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible","_id":"websocket@1.0.26","_inBundle":false,"_integrity":"","_location":"/websocket","_phantomChildren":{},"_requested":{"type":"git","raw":"websocket@git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible","name":"websocket","escapedName":"websocket","rawSpec":"git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible","saveSpec":"git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible","fetchSpec":"git://github.com/frozeman/WebSocket-Node.git","gitCommittish":"browserifyCompatible"},"_requiredBy":["/web3-providers-ws"],"_resolved":"git://github.com/frozeman/WebSocket-Node.git#6c72925e3f8aaaea8dc8450f97627e85263999f2","_spec":"websocket@git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible","_where":"/Users/vladvoloshchuk/Documents/web3-wallet-core/template/node_modules/web3-providers-ws","author":{"name":"Brian McKelvey","email":"brian@worlize.com","url":"https://www.worlize.com/"},"browser":"lib/browser.js","bugs":{"url":"https://github.com/theturtle32/WebSocket-Node/issues"},"bundleDependencies":false,"config":{"verbose":false},"contributors":[{"name":"Iñaki Baz Castillo","email":"ibc@aliax.net","url":"http://dev.sipdoc.net"}],"dependencies":{"debug":"^2.2.0","nan":"^2.3.3","typedarray-to-buffer":"^3.1.2","yaeti":"^0.0.6"},"deprecated":false,"description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","devDependencies":{"buffer-equal":"^1.0.0","faucet":"^0.0.1","gulp":"git+https://github.com/gulpjs/gulp.git#4.0","gulp-jshint":"^2.0.4","jshint":"^2.0.0","jshint-stylish":"^2.2.1","tape":"^4.0.1"},"directories":{"lib":"./lib"},"engines":{"node":">=0.10.0"},"homepage":"https://github.com/theturtle32/WebSocket-Node","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"license":"Apache-2.0","main":"index","name":"websocket","repository":{"type":"git","url":"git+https://github.com/theturtle32/WebSocket-Node.git"},"scripts":{"gulp":"gulp","install":"(node-gyp rebuild 2> builderror.log) || (exit 0)","test":"faucet test/unit"},"version":"1.0.26"}

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * vue-local-storage v0.6.0
 * (c) 2017 Alexander Avakov
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueLocalStorage = factory());
}(this, (function () { 'use strict';

var VueLocalStorage = function VueLocalStorage () {
  this._properties = {};
  this._namespace = '';
  this._isSupported = true;
};

var prototypeAccessors = { namespace: {} };

/**
 * Namespace getter.
 *
 * @returns {string}
 */
prototypeAccessors.namespace.get = function () {
  return this._namespace
};

/**
 * Namespace setter.
 *
 * @param {string} value
 */
prototypeAccessors.namespace.set = function (value) {
  this._namespace = value ? (value + ".") : '';
};

/**
 * Concatenates localStorage key with namespace prefix.
 *
 * @param {string} lsKey
 * @returns {string}
 * @private
 */
VueLocalStorage.prototype._getLsKey = function _getLsKey (lsKey) {
  return ("" + (this._namespace) + lsKey)
};

/**
 * Set a value to localStorage giving respect to the namespace.
 *
 * @param {string} lsKey
 * @param {*} rawValue
 * @param {*} type
 * @private
 */
VueLocalStorage.prototype._lsSet = function _lsSet (lsKey, rawValue, type) {
  var key = this._getLsKey(lsKey);
  var value = type && [Array, Object].includes(type)
    ? JSON.stringify(rawValue)
    : rawValue;

  window.localStorage.setItem(key, value);
};

/**
 * Get value from localStorage giving respect to the namespace.
 *
 * @param {string} lsKey
 * @returns {any}
 * @private
 */
VueLocalStorage.prototype._lsGet = function _lsGet (lsKey) {
  var key = this._getLsKey(lsKey);

  return window.localStorage[key]
};

/**
 * Get value from localStorage
 *
 * @param {String} lsKey
 * @param {*} defaultValue
 * @param {*} defaultType
 * @returns {*}
 */
VueLocalStorage.prototype.get = function get (lsKey, defaultValue, defaultType) {
    var this$1 = this;
    if ( defaultValue === void 0 ) defaultValue = null;
    if ( defaultType === void 0 ) defaultType = String;

  if (!this._isSupported) {
    return null
  }

  if (this._lsGet(lsKey)) {
    var type = defaultType;

    for (var key in this$1._properties) {
      if (key === lsKey) {
        type = this$1._properties[key].type;
        break
      }
    }

    return this._process(type, this._lsGet(lsKey))
  }

  return defaultValue !== null ? defaultValue : null
};

/**
 * Set localStorage value
 *
 * @param {String} lsKey
 * @param {*} value
 * @returns {*}
 */
VueLocalStorage.prototype.set = function set (lsKey, value) {
    var this$1 = this;

  if (!this._isSupported) {
    return null
  }

  for (var key in this$1._properties) {
    var type = this$1._properties[key].type;

    if ((key === lsKey)) {
      this$1._lsSet(lsKey, value, type);

      return value
    }
  }

  this._lsSet(lsKey, value);

  return value
};

/**
 * Remove value from localStorage
 *
 * @param {String} lsKey
 */
VueLocalStorage.prototype.remove = function remove (lsKey) {
  if (!this._isSupported) {
    return null
  }

  return window.localStorage.removeItem(lsKey)
};

/**
 * Add new property to localStorage
 *
 * @param {String} key
 * @param {function} type
 * @param {*} defaultValue
 */
VueLocalStorage.prototype.addProperty = function addProperty (key, type, defaultValue) {
    if ( defaultValue === void 0 ) defaultValue = undefined;

  type = type || String;

  this._properties[key] = { type: type };

  if (!this._lsGet(key) && defaultValue !== null) {
    this._lsSet(key, defaultValue, type);
  }
};

/**
 * Process the value before return it from localStorage
 *
 * @param {String} type
 * @param {*} value
 * @returns {*}
 * @private
 */
VueLocalStorage.prototype._process = function _process (type, value) {
  switch (type) {
    case Boolean:
      return value === 'true'
    case Number:
      return parseFloat(value)
    case Array:
      try {
        var array = JSON.parse(value);

        return Array.isArray(array) ? array : []
      } catch (e) {
        return []
      }
    case Object:
      try {
        return JSON.parse(value)
      } catch (e) {
        return {}
      }
    default:
      return value
  }
};

Object.defineProperties( VueLocalStorage.prototype, prototypeAccessors );

var vueLocalStorage = new VueLocalStorage();

var index = {
  /**
   * Install vue-local-storage plugin
   *
   * @param {Vue} Vue
   * @param {Object} options
   */
  install: function (Vue, options) {
    if ( options === void 0 ) options = {};

    if (typeof process !== 'undefined' &&
      (
        process.server ||
        process.SERVER_BUILD ||
        (__webpack_require__.i({"NODE_ENV":"production"}) && __webpack_require__.i({"NODE_ENV":"production"}).VUE_ENV === 'server')
      )
    ) {
      return
    }

    var isSupported = true;

    try {
      var test = '__vue-localstorage-test__';

      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
    } catch (e) {
      isSupported = false;
      vueLocalStorage._isSupported = false;

      console.error('Local storage is not supported');
    }

    var name = options.name || 'localStorage';
    var bind = options.bind;

    if (options.namespace) {
      vueLocalStorage.namespace = options.namespace;
    }

    Vue.mixin({
      beforeCreate: function beforeCreate () {
        var this$1 = this;

        if (!isSupported) {
          return
        }

        if (this.$options[name]) {
          Object.keys(this.$options[name]).forEach(function (key) {
            var config = this$1.$options[name][key];
            var ref = [config.type, config.default];
            var type = ref[0];
            var defaultValue = ref[1];

            vueLocalStorage.addProperty(key, type, defaultValue);

            var existingProp = Object.getOwnPropertyDescriptor(vueLocalStorage, key);

            if (!existingProp) {
              var prop = {
                get: function () { return Vue.localStorage.get(key, defaultValue); },
                set: function (val) { return Vue.localStorage.set(key, val); },
                configurable: true
              };

              Object.defineProperty(vueLocalStorage, key, prop);
              Vue.util.defineReactive(vueLocalStorage, key, defaultValue);
            } else if (!Vue.config.silent) {
              console.log((key + ": is already defined and will be reused"));
            }

            if ((bind || config.bind) && config.bind !== false) {
              this$1.$options.computed = this$1.$options.computed || {};

              if (!this$1.$options.computed[key]) {
                this$1.$options.computed[key] = {
                  get: function () { return Vue.localStorage[key]; },
                  set: function (val) { Vue.localStorage[key] = val; }
                };
              }
            }
          });
        }
      }
    });

    Vue[name] = vueLocalStorage;
    Vue.prototype[("$" + name)] = vueLocalStorage;
  }
};

return index;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SocialMediaMarket__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SocialMediaToken__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__erc20StandardABI__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brdABI__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ripABI__ = __webpack_require__(315);
/* unused harmony reexport SMMContractABI */
/* unused harmony reexport SMMTokenABI */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__erc20StandardABI__["a"]; });
/* unused harmony reexport brdABI */
/* unused harmony reexport ripABI */








/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = {"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports = {"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = {"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}

/***/ })

},[316]);
//# sourceMappingURL=app.f6737b9e1fcf5dd63abe.js.map