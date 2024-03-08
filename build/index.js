var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:C:\Users\abhiu\Documents\Web_Projects\celebria-collection\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:C:\\Users\\abhiu\\Documents\\Web_Projects\\celebria-collection\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2 = "/build/css-bundle-HGZRY5U4.css";
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_dist()), import_node3 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/transitions.css
var transitions_default = "/build/_assets/transitions-CDJ6IGIM.css";

// app/root.css
var root_default = "/build/_assets/root-ZAK74LCR.css";

// node_modules/react-photo-view/dist/react-photo-view.css
var react_photo_view_default = "/build/_assets/react-photo-view-7Z2GU4I5.css";

// app/components/Footer.tsx
var import_core2 = require("@mantine/core"), import_react2 = require("@remix-run/react"), import_react3 = require("react");

// app/routes.data.ts
var Routes = {
  VendorProfile: "/profile/:id",
  VendorProfileWithService: "/profile/:id?service=:sGrpId",
  Collections: "/collections/:id",
  CollectionsByVendor: "/collections/:id/:vendorType",
  Services: "/services/:id",
  ServiceGroup: "/services/:id/:subId",
  Cart: "/cart/checkout",
  CartItem: "/cart/add/:id",
  VendorSignupForm: "/partner/signup/onboard/:id"
}, routes_data_default = Routes;

// app/components/Skeleton.tsx
var import_core = require("@mantine/core"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Skeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Skeleton, { height: 8 }, void 0, !1, {
      fileName: "app/components/Skeleton.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Skeleton, { height: 8, mt: 6 }, void 0, !1, {
      fileName: "app/components/Skeleton.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Skeleton, { height: 8, mt: 6, width: "70%" }, void 0, !1, {
      fileName: "app/components/Skeleton.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Skeleton.tsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}
var Skeleton_default = Skeleton;

// app/components/Footer.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  let data = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Container, { size: "xl", pt: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Stack, { gap: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid, { gutter: 40, style: { background: "#EEF5FE", borderRadius: "10px", padding: "40px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { span: { base: 12, md: 4 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Title, { order: 5, children: "About" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "#3d5b7d", children: "Our commitment to excellence is the cornerstone of our vision, empowering both clients and artisans to revel in an unparalleded creative odyssey." }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 16,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { span: { base: 12, md: 4 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Title, { order: 5, children: "Categories" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 19,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 20,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Await, { resolve: data.pages, children: (navList) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Flex, { wrap: "wrap", gap: "sm", children: navList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: routes_data_default.Services.replace(":id", item.id), children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Badge, { variant: "outline", color: "gray", children: item.name }, item.id, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 22,
            columnNumber: 141
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 22,
          columnNumber: 89
        }, this)) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 22,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 21,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { span: { base: 12, md: 4 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Title, { order: 5, children: "Support" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 27,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { children: "support@celebriacollective.com" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 28,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid, { justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", children: [
        "\xA9 Celebria Collective ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        ". All Rights Reserved."
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", children: "Privacy Policy | Terms And Conditions" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 11,
    columnNumber: 12
  }, this);
}

// app/components/Ticker.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Ticker() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { background: "black", color: "#d8d8d8", fontSize: "10px", padding: "5px 10px", textAlign: "center" }, children: "USE CODE NEW30 for 30%" }, void 0, !1, {
    fileName: "app/components/Ticker.tsx",
    lineNumber: 3,
    columnNumber: 12
  }, this);
}

// app/components/Header.tsx
var import_react8 = require("@remix-run/react"), import_react9 = require("react");

// app/components/NavigationMenu.tsx
var import_react6 = require("react");

// app/data/locations.data.ts
var locationList = [
  {
    label: "Bangalore",
    key: "0"
  },
  {
    label: "Mumbai",
    key: "1"
  },
  {
    label: "Delhi",
    key: "2"
  }
];

// app/components/UserLogin.tsx
var import_core3 = require("@mantine/core"), import_react4 = require("@remix-run/react"), import_react5 = require("react"), import_react_hook_form = require("react-hook-form");

// app/service/user.service.ts
var import_axios = __toESM(require("axios")), UserService = {
  Login: (data) => Request.post("/login", { phone: data.phone }),
  VerifyOtp: (data) => Request.post("/verify-otp", { phone: data.phone, otp: data.otp })
}, Request = {
  post: (url, params) => (0, import_axios.default)({
    method: "post",
    url,
    data: params,
    headers: { "Content-Type": "multipart/form-data" }
  })
}, user_service_default = UserService;

// app/components/UserLogin.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), UserLogin = {
  Index: ({ title = "Manage your booking", redirectUrl = "", onSuccess, inlineMode }) => {
    let { control, handleSubmit } = (0, import_react_hook_form.useForm)(), [showVerifyUserDialog, setVerifyUserDialogState] = (0, import_react5.useState)(!1), [isBusy, setBusy] = (0, import_react5.useState)(!1), [getUsername, setUsername] = (0, import_react5.useState)();
    function toggleVerifyUserDialog(show = !1) {
      setVerifyUserDialogState(show), !show && onSuccess && onSuccess();
    }
    function startUserLogin(params) {
      setBusy(!0), user_service_default.Login({ phone: params.phone }).then((r) => {
        r.data.success && (toggleVerifyUserDialog(!0), setUsername(params.phone)), setBusy(!1);
      }).catch((e) => {
        setBusy(!1);
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      inlineMode && showVerifyUserDialog ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Form, { onSubmit: handleSubmit(startUserLogin), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Title, { order: 5, children: title }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_hook_form.Controller, { name: "phone", control, render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Input, { leftSection: "+91", placeholder: "Enter your phone number.", required: !0, ...field }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 38,
          columnNumber: 83
        }, this) }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Button, { variant: "filled", type: "submit", loading: isBusy, children: "Login" }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 35,
        columnNumber: 61
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(UserLogin.VerifyOtp, { redirectUrl, username: getUsername, modalOpen: showVerifyUserDialog, onClose: () => toggleVerifyUserDialog(!1), inlineMode: inlineMode || !1 }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 35,
      columnNumber: 16
    }, this);
  },
  VerifyOtp: ({ username, redirectUrl, modalOpen, onClose, inlineMode }) => {
    let { control, getValues, handleSubmit } = (0, import_react_hook_form.useForm)(), [isBusy, setBusy] = (0, import_react5.useState)(!1), formRef = (0, import_react5.useRef)(null), formInputIdRef = (0, import_react5.useRef)(null), formInputUrlRef = (0, import_react5.useRef)(null), fetcher = (0, import_react4.useFetcher)(), verifyOtp = () => {
      fetcher.submit({
        phone: username || 0,
        otp: getValues().otp,
        redirectUrl: redirectUrl || ""
      }, {
        method: "post",
        action: "verify-otp"
      });
    };
    function closeModal() {
      onClose();
    }
    let formBody = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { onSubmit: (e) => e.preventDefault(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Stack, { gap: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Input.Wrapper, { label: "Enter OTP", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_hook_form.Controller, { name: "otp", control, render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Input, { placeholder: "- - - -", max: 4, ...field }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 70,
        columnNumber: 81
      }, this) }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Button, { type: "submit", variant: "filled", loading: ["submitting", "loading"].includes(fetcher.state), onClick: verifyOtp, children: "Continue" }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 68,
      columnNumber: 67
    }, this) }, void 0, !1, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 68,
      columnNumber: 26
    }, this);
    return inlineMode && modalOpen ? formBody : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Modal, { title: "Verify OTP", opened: modalOpen, onClose: () => onClose(), children: formBody }, void 0, !1, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 76,
      columnNumber: 53
    }, this);
  }
}, UserLogin_default = UserLogin.Index;

// app/components/NavigationMenu.tsx
var import_react7 = require("@remix-run/react");
var import_core4 = require("@mantine/core"), import_icons_react = require("@tabler/icons-react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), menuArtisantStyle = {
  borderRadius: "3px",
  padding: "20px 20px",
  background: "url(/assets/user-menu-bg.jpg) top",
  backgroundSize: "cover"
}, AppNavigation = {
  MainMenu: () => {
    let data = (0, import_react7.useLoaderData)();
    function dropdownContent(navitem) {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Stack, { p: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Text, { children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: routes_data_default.Services.replace(":id", navitem.id), children: [
            "Browse all ",
            navitem.name
          ] }, void 0, !0, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        (_a = navitem.children) == null ? void 0 : _a.map((menuItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Stack, { gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Text, { c: "dimmed", children: menuItem.name }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          menuItem.list.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Text, { size: "sm", c: "black", children: item.name }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this) }, item.id, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)),
          !menuItem.list.length && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Text, { c: "dimmed", children: "Sorry, no results found." }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 54,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) }, menuItem.name, !1, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 36,
        columnNumber: 14
      }, this);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 62,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Await, { resolve: data.pages, children: (navList) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Flex, { justify: "center", gap: "sm", py: "md", children: navList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Box, { style: { cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Menu, { trigger: "click-hover", shadow: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_core4.Flex,
        {
          align: "center",
          className: "header-nav-item-text",
          gap: "xs",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: item.name }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 75,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons_react.IconChevronDown, { size: 12 }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 76,
              columnNumber: 25
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 70,
          columnNumber: 23
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Menu.Dropdown, { children: dropdownContent(item) }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 79,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 68,
      columnNumber: 19
    }, this) }, "menu-" + item.id, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this);
  },
  Drawer: () => {
    let data = (0, import_react7.useLoaderData)(), navigate = (0, import_react7.useNavigate)(), [openDrawer, setDrawerState] = (0, import_react6.useState)(!1);
    function navigateToPage() {
      toggleDrawer();
    }
    function toggleDrawer() {
      setDrawerState(!openDrawer);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons_react.IconMenu, { onClick: () => toggleDrawer() }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_core4.Drawer,
        {
          position: "left",
          w: 300,
          title: "Browse",
          onClose: () => toggleDrawer(),
          opened: openDrawer,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 115,
              columnNumber: 31
            }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Await, { resolve: data.pages, children: (navList) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Accordion, { children: navList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Accordion.Item, { value: item.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Accordion.Control, { children: item.name }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Accordion.Panel, { children: item.children.map((child, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Stack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Title, { order: 5, children: child.name }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 124,
                  columnNumber: 25
                }, this),
                [{
                  id: item.id,
                  path: routes_data_default.Services.replace(":id", item.id),
                  name: "Browse all "
                }].concat(child.list).map((menuItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: menuItem.path, onClick: () => navigateToPage(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Text, { children: menuItem.name }, menuItem.id, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 130,
                  columnNumber: 102
                }, this) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 130,
                  columnNumber: 44
                }, this))
              ] }, "child" + i, !0, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 123,
                columnNumber: 56
              }, this)) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 122,
                columnNumber: 21
              }, this)
            ] }, item.id, !0, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 120,
              columnNumber: 40
            }, this)) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 118,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 116,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 115,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Stack, { gap: "lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(UserLogin_default, { onSuccess: () => toggleDrawer(), inlineMode: !0 }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 141,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: menuArtisantStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_core4.Stack,
                {
                  style: { padding: 8 },
                  gap: "md",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Title, { order: 3, children: "Artisan?" }, void 0, !1, {
                      fileName: "app/components/NavigationMenu.tsx",
                      lineNumber: 147,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "/partner/signup", onClick: () => toggleDrawer(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Button, { children: "Signup" }, void 0, !1, {
                      fileName: "app/components/NavigationMenu.tsx",
                      lineNumber: 149,
                      columnNumber: 19
                    }, this) }, void 0, !1, {
                      fileName: "app/components/NavigationMenu.tsx",
                      lineNumber: 148,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 143,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 142,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Accordion, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Accordion.Item, { value: "location", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Accordion.Control, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons_react.IconWorld, {}, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 155,
                  columnNumber: 42
                }, this), children: "Location" }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 155,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Stack, { children: locationList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Text, { children: item.label }, item.key, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 158,
                  columnNumber: 47
                }, this)) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 157,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 156,
                  columnNumber: 17
                }, this)
              ] }, "location", !0, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 154,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 153,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 140,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this);
  }
}, NavigationMenu_default = AppNavigation;

// app/components/Header.tsx
var import_react_redux = require("react-redux");

// app/store/user.store.ts
var import_toolkit = require("@reduxjs/toolkit"), userStore = (0, import_toolkit.createSlice)({
  name: "user",
  initialState: {
    id: null
  },
  reducers: {
    setUser: (state, action13) => {
      state.id = action13.payload;
    },
    clearUser: (state) => {
      state.id = null;
    }
  }
}), { setUser, clearUser } = userStore.actions, getUser = (state) => state.user.id, user_store_default = userStore.reducer;

// app/components/Header.tsx
var import_core5 = require("@mantine/core"), import_icons_react2 = require("@tabler/icons-react"), import_hooks = require("@mantine/hooks"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), logoStyle = { fontSize: "18px", textTransform: "uppercase", color: "black" }, userMenuStyle = { width: "300px", background: "white", borderRadius: "10px", boxShadow: "0 0 5px #e1e1e1", overflow: "hidden" }, menuArtisantStyle2 = {
  padding: "20px 30px",
  background: "url(/assets/user-menu-bg.jpg) top",
  backgroundSize: "cover"
};
function Header({ user, cartCount }) {
  let navigation = (0, import_react8.useNavigation)(), [currentLocation, setCurrentLocation] = (0, import_react9.useState)("Bangalore"), dispatch = (0, import_react_redux.useDispatch)(), [opened, { close, open }] = (0, import_hooks.useDisclosure)(!1);
  (0, import_react9.useEffect)(() => {
    dispatch(setUser(user == null ? void 0 : user.id));
  }, [user]);
  function handleLocationMenuClick(data) {
    setCurrentLocation(locationList[data.key].label);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Grid, { justify: "space-between", align: "center", gutter: 0, py: 10, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Grid.Col, { span: { base: "content", md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Group, { gap: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Box, { hiddenFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NavigationMenu_default.Drawer, {}, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 41,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 40,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "header-brand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/", style: logoStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/assets/brand-logo-1.png", width: "124px" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 44,
        columnNumber: 64
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 44,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 43,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Box, { visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Flex, { className: "cursor-pointer", gap: "sm", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react2.IconWorld, { size: 16 }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 50,
            columnNumber: 45
          }, this),
          currentLocation
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 49,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 48,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Menu.Dropdown, { children: locationList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Menu.Item, { onClick: handleLocationMenuClick, children: item.label }, item.key, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 55,
          columnNumber: 67
        }, this)) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 54,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 47,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 46,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 39,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Grid.Col, { span: "auto", visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NavigationMenu_default.MainMenu, {}, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 62,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 61,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Grid.Col, { span: { base: "content", md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Flex, { gap: 20, justify: "end", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/cart/checkout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Indicator, { disabled: !cartCount, inline: !0, processing: !0, color: "red", size: 12, label: cartCount, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.ActionIcon, { variant: "subtle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react2.IconShoppingCart, {}, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 69,
        columnNumber: 41
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 68,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 67,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 66,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Box, { visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Popover, { shadow: "md", position: "bottom", trapFocus: !0, withArrow: !0, opened, onChange: (v) => v ? null : close(), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Popover.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Button, { onMouseEnter: open, radius: "xl", children: "Sign-in" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 76,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 75,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Popover.Dropdown, { p: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: userMenuStyle, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { padding: "12px" }, children: user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Group, { align: "center", justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Box, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Title, { order: 5, children: "Hej!" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 84,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/user/home", children: "My Bookings" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 85,
                columnNumber: 61
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 83,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Button, { size: "sm", variant: "subtle", children: "Logout" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 88,
              columnNumber: 80
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 88,
              columnNumber: 61
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 87,
              columnNumber: 57
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 82,
            columnNumber: 53
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserLogin_default, { inlineMode: !0 }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 91,
            columnNumber: 55
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 80,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: menuArtisantStyle2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Stack, { style: { padding: 8 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Title, { order: 3, children: "Artisan?" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 95,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/partner/signup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Button, { radius: "xl", variant: "outline", children: "Signup" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 96,
              columnNumber: 80
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 96,
              columnNumber: 53
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 94,
            columnNumber: 49
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 93,
            columnNumber: 45
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 79,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 78,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 74,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 73,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 65,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 64,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 37,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 36,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 34,
    columnNumber: 12
  }, this);
}

// app/session.server.ts
var import_node2 = require("@remix-run/node"), cookieAge = 60 * 60 * 24 * 7 * 364, userCartCookie = (0, import_node2.createCookie)("cart", {
  maxAge: cookieAge
}), vendorSignupCookie = (0, import_node2.createCookie)("vendor-signup", {
  maxAge: cookieAge
}), SessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: !1
  }
}), USER_SESSION_KEY = "userId", { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)(
  {
    cookie: {
      name: "__session",
      // expires: new Date(Date.now() + 60_000),
      httpOnly: !0,
      maxAge: cookieAge,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: !1
    }
  }
), logout = async (request) => {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await SessionStorage.destroySession(session)
    }
  });
};

// app/utils/database.ts
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/root.tsx
var import_react_redux2 = require("react-redux");

// app/store/store.ts
var import_toolkit2 = require("@reduxjs/toolkit");
var store_default = (0, import_toolkit2.configureStore)({
  reducer: {
    user: user_store_default
  }
});

// app/root.tsx
var import_react11 = require("react");

// node_modules/pure-react-carousel/dist/react-carousel.cjs.css
var react_carousel_cjs_default = "/build/_assets/react-carousel.cjs-BRUR3YZV.css";

// app/root.tsx
var import_core7 = require("@mantine/core");

// app/mantine.theme.ts
var import_core6 = require("@mantine/core"), CONTAINER_SIZES = {
  xxs: (0, import_core6.rem)(300),
  xs: (0, import_core6.rem)(400),
  sm: (0, import_core6.rem)(500),
  md: (0, import_core6.rem)(800),
  lg: (0, import_core6.rem)(700),
  xl: (0, import_core6.rem)(800),
  xxl: (0, import_core6.rem)(900)
}, theme = {
  fontFamily: "Inter, sans-serif",
  fontSizes: {
    xs: (0, import_core6.rem)(10),
    sm: (0, import_core6.rem)(12),
    md: (0, import_core6.rem)(14),
    lg: (0, import_core6.rem)(16),
    xl: (0, import_core6.rem)(20)
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: (0, import_core6.rem)(400),
          sm: (0, import_core6.rem)(500),
          md: (0, import_core6.rem)(600),
          lg: (0, import_core6.rem)(700),
          xl: (0, import_core6.rem)(800),
          xxl: (0, import_core6.rem)(900)
        }
      }
    }
  }
}, mantine_theme_default = theme;

// app/tracker.ts
var import_uuid = require("uuid");
function defaultGetUserId() {
  return (0, import_uuid.v4)();
}
function startTracker(config) {
  let tracker = null, Tracker = null, userId = "";
  return (async () => {
    Tracker = (await import("@openreplay/tracker")).default, console.log("Starting tracker..."), console.log("Custom configuration received: ", config);
    let getUserId = config != null && config.userIdEnabled && (config != null && config.getUserId) ? config.getUserId : defaultGetUserId, trackerConfig = {
      projectKey: config == null ? void 0 : config.projectKey
    };
    console.log("Tracker configuration"), console.log(trackerConfig), tracker = new Tracker(trackerConfig), config != null && config.userIdEnabled && (userId = getUserId(), tracker.setUserID(userId)), tracker.start();
  })(), {
    tracker,
    userId
  };
}

// app/root.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: root_default },
  { rel: "stylesheet", href: transitions_default },
  { rel: "stylesheet", href: react_photo_view_default },
  { rel: "stylesheet", href: react_carousel_cjs_default },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
  }
], headerStyle = {
  padding: "0",
  backgroundColor: "#fff",
  position: "sticky",
  top: 0,
  boxShadow: "0 0 5px #c0c0c0",
  zIndex: 1
};
async function loader({ request }) {
  let cookie = request.headers.get("Cookie"), userId = (await getSession(cookie)).get(USER_SESSION_KEY), userCart = await userCartCookie.parse(cookie), user = new Promise(async function(resolve) {
    if (!userId) {
      resolve(null);
      return;
    }
    try {
      let loggedInUser = await db.user.findFirst({
        where: {
          id: userId
        }
      });
      loggedInUser && resolve({
        id: loggedInUser.id,
        phone: +loggedInUser.username,
        name: ""
      });
    } catch {
      resolve(null);
    }
  }), pages = new Promise(async function(resolve) {
    let list = await db.vendorType.findMany({
      orderBy: {
        name: "asc"
      },
      select: {
        keyName: !0,
        name: !0,
        serviceGroup: {
          select: {
            serviceGroupType: {
              select: {
                keyName: !0,
                name: !0
              }
            }
          },
          where: {
            groupTypeId: {
              not: null
            }
          },
          distinct: ["groupTypeId"],
          orderBy: {
            serviceGroupType: {
              name: "asc"
            }
          }
        }
      }
    });
    resolve(list.map((x) => ({
      id: x.keyName,
      name: x.name,
      children: [{
        name: "Collections",
        list: x.serviceGroup.reduce((arr, item) => {
          var _a;
          return (_a = item.serviceGroupType) != null && _a.keyName && arr.push({
            path: routes_data_default.CollectionsByVendor.replace(":vendorType", x.keyName).replace(":id", item.serviceGroupType.keyName),
            id: item.serviceGroupType.keyName,
            name: item.serviceGroupType.name
          }), arr;
        }, [])
      }]
    })));
  });
  return (0, import_node3.defer)({
    user,
    pages,
    cartCount: (userCart == null ? void 0 : userCart.length) || 0,
    ENV: {
      openReplyprojectKey: null
    }
  });
}
function App() {
  let data = (0, import_react10.useLoaderData)(), navigation = (0, import_react10.useNavigation)();
  return (0, import_react11.useEffect)(() => {
    data.ENV.openReplyprojectKey && startTracker({
      projectKey: data.ENV.openReplyprojectKey
    });
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.ColorSchemeScript, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.MantineProvider, { theme: mantine_theme_default, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_redux2.Provider, { store: store_default, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Ticker, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Box, { style: headerStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 189,
          columnNumber: 35
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Await, { resolve: data.user, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Header, { user: response, cartCount: data.cartCount }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 191,
          columnNumber: 34
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 190,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 189,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Box, { style: { paddingTop: "40px" }, children: navigation.state === "idle" || navigation.state === "submitting" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 196,
          columnNumber: 83
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Container, { mih: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Grid, { gutter: 80, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Grid.Col, { span: { base: 12, md: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Skeleton_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 199,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 198,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Skeleton_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 202,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 201,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 197,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 196,
          columnNumber: 96
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 195,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 208,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 176,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "Oops, Something went wrong!" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 219,
    columnNumber: 10
  }, this);
}

// app/routes/partner.signup.onboard.$id.success.tsx
var partner_signup_onboard_id_success_exports = {};
__export(partner_signup_onboard_id_success_exports, {
  action: () => action,
  default: () => partner_signup_onboard_id_success_default,
  loader: () => loader2
});
var import_core8 = require("@mantine/core"), import_node4 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_icons_react3 = require("@tabler/icons-react");

// app/service/vendor.service.ts
var import_client2 = require("@prisma/client");

// app/path.data.ts
var PATH = {
  RESOURCE_URL: "http://celebria.makewithabhishek.com",
  FALLBACK_IMG: "https://static.miraheze.org/widdershinswiki/thumb/4/47/Placeholder.png/800px-Placeholder.png",
  AVATAR_PLACEHOLDER: "https://xsgames.co/randomusers/avatar.php?g=pixel",
  FILE_UPLOAD: "https://celebria.makewithabhishek.com/upload/",
  GUEST_FILE_UPLOAD: "https://celebria.makewithabhishek.com/guest/upload/"
  // FILE_UPLOAD: "http://localhost:3003/upload/",
  // GUEST_FILE_UPLOAD: "http://localhost:3003/guest/upload/",
};

// app/utils/uuid.generator.ts
var import_uuid2 = require("uuid");
function generateUuid() {
  return (0, import_uuid2.v4)();
}

// app/service/vendor.service.ts
function Stories(username) {
  if (!username)
    throw new Error("invalid user");
  return db.vendorPortfolio.findMany({
    select: {
      serviceGroupId: !0,
      serviceGroup: {
        select: {
          name: !0,
          vendorType: {
            select: {
              name: !0
            }
          }
        }
      },
      fileName: !0
    },
    where: {
      vendor: {
        username
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    distinct: ["serviceGroupId"]
  });
}
function portfolioByAlbumId(input) {
  return db.vendorPortfolio.findMany({
    where: {
      vendor: {
        username: input.username
      },
      serviceGroupId: input.albumId
    },
    select: {
      fileName: !0
    },
    orderBy: {
      createdAt: "desc"
    }
  });
}
var VendorQuery = {
  Stories,
  portfolioByAlbumId,
  Signup: (props) => db.vendor.create({
    data: {
      id: generateUuid(),
      name: props.fullName,
      mobileNumber: props.mobileNumber,
      email: props.email,
      username: props.username,
      source: import_client2.UserSource.MANUAL,
      isActive: !1,
      socialUrl: props.socialUrl,
      categoryId: props.categoryId
    }
  }),
  getVendorByUsername: (username) => new Promise(function(resolve, reject) {
    db.vendor.findFirstOrThrow({
      where: {
        username,
        isActive: !0
      },
      select: {
        id: !0,
        username: !0,
        name: !0,
        primaryColor: !0,
        coverImageName: !0,
        profileImageName: !0,
        vendorType: {
          select: {
            name: !0
          }
        }
      }
    }).then((r) => {
      var _a;
      resolve(r ? {
        id: r.id,
        username: r.username,
        fullName: r.username,
        location: "",
        gender: "",
        type: ((_a = r.vendorType) == null ? void 0 : _a.name) || "",
        primaryColor: r.primaryColor,
        avatar: r.profileImageName ? PATH.RESOURCE_URL + r.profileImageName : PATH.AVATAR_PLACEHOLDER,
        coverImageName: r.coverImageName ? PATH.RESOURCE_URL + r.coverImageName : ""
      } : null);
    }).catch((e) => reject(!1));
  }),
  getServices: (username) => new Promise(function(resolve) {
    db.vendorServiceGroup.findMany({
      orderBy: [{
        group: {
          name: "asc"
        }
      }, {
        group: {
          serviceGroupType: {
            name: "asc"
          }
        }
      }],
      where: {
        vendorService: {
          some: {
            vendor: {
              username
            }
          }
        }
      },
      select: {
        id: !0,
        cost: !0,
        group: {
          select: {
            serviceGroupType: {
              select: {
                name: !0
              }
            },
            id: !0,
            name: !0,
            minHour: !0,
            serviceGroupItem: {
              orderBy: {
                position: "asc"
              },
              where: {
                service: {
                  vendorService: {
                    some: {
                      vendor: {
                        username
                      }
                    }
                  }
                }
              },
              select: {
                serviceId: !0,
                isOptional: !0,
                addonGroup: {
                  select: {
                    name: !0,
                    id: !0
                  }
                },
                service: {
                  select: {
                    id: !0,
                    name: !0
                  }
                }
              }
            }
          }
        },
        vendorService: {
          select: {
            service: {
              select: {
                id: !0,
                name: !0,
                fareMode: !0
              }
            },
            cost: !0,
            duration: !0
          }
        }
      }
    }).then((r) => {
      let groupedItems = {};
      r.forEach((x) => {
        var _a;
        let grouptype = ((_a = x.group.serviceGroupType) == null ? void 0 : _a.name) || "Others";
        groupedItems[grouptype] || (groupedItems[grouptype] = { name: grouptype, services: [] });
        let includedIds = x.group.serviceGroupItem.filter((i) => !i.isOptional).map((i) => i.serviceId), included = x.vendorService.filter((i) => includedIds.includes(i.service.id)), optional = x.vendorService.filter((i) => !includedIds.includes(i.service.id)), selectableList = x.group.serviceGroupItem.reduce((acc, item) => {
          var _a2, _b;
          if (!item.addonGroup)
            return acc;
          let addongGrp = acc.find((i) => {
            var _a3;
            return i.id === ((_a3 = item.addonGroup) == null ? void 0 : _a3.id);
          });
          if (!addongGrp)
            acc.push({
              id: (_a2 = item.addonGroup) == null ? void 0 : _a2.id,
              title: (_b = item.addonGroup) == null ? void 0 : _b.name,
              services: [{
                id: item.service.id,
                title: item.service.name,
                duration: 0
              }]
            });
          else {
            let addonItem = optional.find((x2) => x2.service.id === item.serviceId);
            addongGrp.services.push({
              id: item.service.id,
              title: item.service.name,
              duration: 0,
              cost: addonItem == null ? void 0 : addonItem.cost,
              fareMode: addonItem == null ? void 0 : addonItem.service.fareMode
            });
          }
          return optional = optional.filter((x2) => x2.service.id !== item.serviceId), acc;
        }, []);
        groupedItems[grouptype].services.push({
          vendorServiceGroupId: x.id,
          groupId: x.group.id,
          title: x.group.name,
          minHour: x.group.minHour,
          cost: x.cost,
          included: included.map((i) => ({
            id: i.service.id,
            title: i.service.name,
            duration: i.duration
          })),
          addons: optional.map((i) => ({
            id: i.service.id,
            title: i.service.name,
            duration: i.duration,
            cost: i.cost,
            fareMode: i.service.fareMode
          })),
          selectableList
        });
      }), resolve(Object.values(groupedItems));
    });
  }),
  getVendorServiceGroup: (id) => new Promise(function(resolve) {
    db.vendorServiceGroup.findFirstOrThrow({
      orderBy: [{
        group: {
          name: "asc"
        }
      }, {
        group: {
          serviceGroupType: {
            name: "asc"
          }
        }
      }],
      where: {
        id
      },
      select: {
        id: !0,
        cost: !0,
        costExtraHour: !0,
        group: {
          select: {
            serviceGroupType: {
              select: {
                name: !0
              }
            },
            id: !0,
            name: !0,
            minHour: !0,
            imageName: !0,
            serviceGroupItem: {
              orderBy: {
                position: "asc"
              },
              select: {
                serviceId: !0,
                isOptional: !0,
                addonGroup: {
                  select: {
                    name: !0,
                    id: !0
                  }
                },
                service: {
                  select: {
                    id: !0,
                    name: !0
                  }
                }
              }
            }
          }
        },
        vendorService: {
          select: {
            service: {
              select: {
                id: !0,
                name: !0
              }
            },
            cost: !0,
            duration: !0
          }
        }
      }
    }).then((r) => {
      let includedIds = r.group.serviceGroupItem.filter((i) => !i.isOptional).map((i) => i.serviceId), included = r.vendorService.filter((i) => includedIds.includes(i.service.id)), optional = r.vendorService.filter((i) => !includedIds.includes(i.service.id)), selectableList = r.group.serviceGroupItem.reduce((acc, item) => {
        var _a, _b;
        if (!item.addonGroup)
          return acc;
        let addongGrp = acc.find((i) => {
          var _a2;
          return i.id === ((_a2 = item.addonGroup) == null ? void 0 : _a2.id);
        });
        return addongGrp ? addongGrp.services.push({
          id: item.service.id,
          title: item.service.name,
          duration: 0
        }) : acc.push({
          id: (_a = item.addonGroup) == null ? void 0 : _a.id,
          title: (_b = item.addonGroup) == null ? void 0 : _b.name,
          services: [{
            id: item.service.id,
            title: item.service.name,
            duration: 0
          }]
        }), optional = optional.filter((x) => x.service.id !== item.serviceId), acc;
      }, []), groupData = {
        vendorServiceGroupId: r.id,
        groupId: r.group.id,
        title: r.group.name,
        image: r.group.imageName ? PATH.RESOURCE_URL + r.group.imageName : PATH.FALLBACK_IMG,
        minHour: r.group.minHour,
        cost: r.cost,
        costExtraHour: r.costExtraHour,
        included: included.map((i) => ({
          id: i.service.id,
          title: i.service.name,
          duration: i.duration
        })),
        addons: optional.map((i) => ({
          id: i.service.id,
          title: i.service.name,
          duration: i.duration,
          cost: i.cost
        })),
        selectableList
      };
      resolve(groupData);
    });
  }),
  topRatedVendorsByType: (vendorType) => new Promise(function(resolve) {
    db.vendor.findMany({
      take: 6,
      where: {
        isActive: !0,
        vendorType: {
          keyName: vendorType
        }
      },
      select: {
        username: !0,
        profileImageName: !0
      }
    }).then((r) => {
      resolve(r.map((x) => ({
        id: x.username,
        name: x.username,
        image: x.profileImageName ? PATH.RESOURCE_URL + x.profileImageName : PATH.AVATAR_PLACEHOLDER
      })));
    });
  })
};

// app/utils/username.transformer.ts
function usernameTransformer(str) {
  let d = /* @__PURE__ */ new Date();
  return str.substring(0, 3).replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  ).replace(/[&\/\s]/g, "-").trim() + d.getFullYear();
}
var username_transformer_default = usernameTransformer;

// app/routes/partner.signup.onboard.$id.success.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function action(args) {
  var _a;
  let id = args.params.id, catId = (_a = (await args.request.formData()).get("create")) == null ? void 0 : _a.toString();
  if (!catId)
    return !1;
  let vendor = await db.vendor.findFirst({
    where: {
      id
    },
    select: {
      name: !0,
      email: !0,
      mobileNumber: !0,
      socialUrl: !0
    }
  });
  if (vendor) {
    let usernameAccepted = !0, username = username_transformer_default(vendor.name), newUsername = username, usernameSeq = 0;
    do
      await db.vendor.count({
        where: {
          username: newUsername
        }
      }) > 0 ? (usernameAccepted = !1, usernameSeq++, newUsername = username + usernameSeq) : usernameAccepted = !0;
    while (!usernameAccepted);
    let data = await VendorQuery.Signup({
      fullName: vendor == null ? void 0 : vendor.name,
      mobileNumber: vendor == null ? void 0 : vendor.mobileNumber,
      email: vendor == null ? void 0 : vendor.email,
      username: newUsername,
      socialUrl: vendor.socialUrl,
      categoryId: catId
    });
    return (0, import_node4.redirect)(routes_data_default.VendorSignupForm.replace(":id", data.id), {
      headers: {
        "Set-Cookie": await vendorSignupCookie.serialize(data.id)
      }
    });
  }
  return !1;
}
async function loader2(args) {
  let cookieHeader = args.request.headers.get("Cookie"), currentVendor = await vendorSignupCookie.parse(cookieHeader), vendorId = args.params.id;
  if (currentVendor)
    return (0, import_node4.redirect)("/partner/signup/onboard/" + currentVendor + "/success", {
      headers: {
        "Set-Cookie": await vendorSignupCookie.serialize(null)
      }
    });
  let vendorEmail = await db.vendor.findFirst({
    where: {
      id: vendorId
    },
    select: {
      email: !0
    }
  }), categoryChecklist = [];
  vendorEmail && (categoryChecklist = (await db.vendor.findMany({
    where: {
      email: vendorEmail.email
    },
    select: {
      categoryId: !0
    }
  })).map((x) => x.categoryId));
  let categoryList = await db.vendorType.findMany({
    orderBy: {
      name: "asc"
    },
    select: {
      name: !0,
      id: !0
    }
  });
  return categoryList.sort((x, y) => {
    let ix = categoryChecklist.indexOf(x.id), iy = categoryChecklist.indexOf(y.id);
    return ix === -1 ? 1 : iy === -1 ? -1 : ix - iy;
  }), { categoryChecklist, categoryList };
}
var SignupSuccess = {
  Index: () => {
    let data = (0, import_react12.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Grid, { justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Grid.Col, { span: { base: 12, md: 4, lg: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Stack, { gap: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Title, { order: 5, children: "Do you want to signup for other services?" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 144,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Stack, { gap: "sm", children: data.categoryList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Group, { justify: "space-between", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Text, { td: data.categoryChecklist.includes(item.id) ? "line-through" : "", children: item.name }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 149,
          columnNumber: 41
        }, this),
        data.categoryChecklist.includes(item.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Checkbox, { color: "green", checked: data.categoryChecklist.includes(item.id), labelPosition: "left", label: "Completed" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 151,
          columnNumber: 85
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Button, { type: "submit", name: "create", value: item.id, variant: "outline", radius: "xl", size: "xs", children: "Signup" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 151,
          columnNumber: 204
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 148,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 147,
        columnNumber: 64
      }, this)) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 146,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 145,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Stack, { justify: "center", align: "center", p: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_icons_react3.IconCircleCheck, { style: { width: "50px", height: "50px" }, color: "var(--ui-color-success)" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 160,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Stack, { style: { textAlign: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Title, { order: 2, children: "Thank you for your interest!" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
            lineNumber: 162,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Text, { children: "You'll recieve a confirmation email in 2-3 business days." }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
            lineNumber: 163,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 161,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 159,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 157,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
      lineNumber: 143,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
      lineNumber: 142,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
      lineNumber: 141,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
      lineNumber: 140,
      columnNumber: 16
    }, this);
  }
}, partner_signup_onboard_id_success_default = SignupSuccess.Index;

// app/routes/partner.signup.onboard.$id._index.tsx
var partner_signup_onboard_id_index_exports = {};
__export(partner_signup_onboard_id_index_exports, {
  action: () => action2,
  default: () => partner_signup_onboard_id_index_default,
  loader: () => loader3
});
var import_core10 = require("@mantine/core"), import_client4 = require("@prisma/client"), import_react14 = require("@remix-run/react"), import_icons_react4 = require("@tabler/icons-react"), import_react15 = require("react");

// app/components/FileUploader.tsx
var import_core9 = require("@mantine/core"), import_uploady = __toESM(require("@rpldy/uploady")), import_react13 = require("react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Uploader = (props) => {
  let { showFileUpload } = (0, import_uploady.useUploady)(), [isBusy, setBusy] = (0, import_react13.useState)(!1), onClick = (0, import_react13.useCallback)(() => {
    showFileUpload();
  }, []);
  return (0, import_uploady.useItemFinishListener)((item, options) => {
    let data = item.uploadResponse.data;
    data && props != null && props.onUpload && props.onUpload(data.fileName), setBusy(!1);
  }), (0, import_uploady.useItemProgressListener)((item) => {
    setBusy(item.state === import_uploady.FILE_STATES.UPLOADING);
  }), (0, import_uploady.useItemErrorListener)((item) => {
    setBusy(!1);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Button, { loading: isBusy, variant: props.buttonType === "primary" ? "filled" : "outline", disabled: !props.id, onClick, children: props.label || "Choose Image" }, void 0, !1, {
    fileName: "app/components/FileUploader.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/FileUploader.tsx",
    lineNumber: 35,
    columnNumber: 12
  }, this);
}, FileUploader_default = (props) => {
  let [pageReady, setReady] = (0, import_react13.useState)(!1);
  return (0, import_react13.useEffect)(() => {
    setReady(!0);
  }, []), pageReady ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_uploady.default,
    {
      inputFieldName: "image",
      destination: {
        url: props.path || PATH.FILE_UPLOAD,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      },
      accept: "image/*",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Uploader, { id: props.id, buttonType: props.buttonType, label: props.label, onUpload: props.onUpload }, void 0, !1, {
        fileName: "app/components/FileUploader.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/FileUploader.tsx",
      lineNumber: 46,
      columnNumber: 24
    },
    this
  ) : "...";
};

// app/service/services.service.ts
var ServiceQuery = {
  getVendorServices: (vendorServiceGroupId, serviceIds) => db.vendorServiceGroup.findFirst({
    where: {
      id: vendorServiceGroupId
    },
    select: {
      id: !0,
      cost: !0,
      vendor: {
        select: {
          username: !0,
          profileImageName: !0,
          vendorType: {
            select: {
              name: !0
            }
          }
        }
      },
      group: {
        select: {
          id: !0,
          name: !0,
          imageName: !0
        }
      },
      vendorService: {
        where: {
          serviceId: {
            in: serviceIds
          }
        },
        select: {
          fareMode: !0,
          cost: !0,
          service: {
            select: {
              fareMode: !0,
              id: !0,
              name: !0
            }
          }
        }
      }
    }
  }),
  getServicesByJob: () => db.vendorType.findMany({
    orderBy: {
      name: "asc"
    },
    select: {
      id: !0,
      name: !0,
      serviceGroup: {
        orderBy: {
          name: "asc"
        },
        select: {
          id: !0,
          name: !0,
          minHour: !0,
          serviceGroupItem: {
            orderBy: [
              {
                isOptional: "asc"
              },
              {
                service: {
                  name: "asc"
                }
              },
              {
                addonGroup: { name: "asc" }
              }
            ],
            select: {
              addonGroup: {
                select: {
                  name: !0
                }
              },
              isOptional: !0,
              service: {
                select: {
                  id: !0,
                  name: !0,
                  fareMode: !0,
                  minHour: !0,
                  description: !0
                }
              }
            }
          }
        }
      }
    }
  }),
  getServiceByGroup: () => db.serviceGroup.findMany({
    orderBy: {
      name: "asc"
    },
    select: {
      name: !0,
      id: !0,
      serviceGroupItem: {
        select: {
          service: {
            select: {
              id: !0,
              name: !0
            }
          }
        }
      }
    }
  })
};

// app/utils/statusMarker.map.ts
var import_client3 = require("@prisma/client"), StatusMarker = /* @__PURE__ */ new Map();
StatusMarker.set(import_client3.BookingStatus.PENDING, "warning");
StatusMarker.set(import_client3.BookingStatus.ACCEPTED, "#87d068");
StatusMarker.set(import_client3.BookingStatus.IN_PROGRESS, "cyan");
StatusMarker.set(import_client3.BookingStatus.COMPLETED, "#108ee9");
StatusMarker.set(import_client3.BookingStatus.CANCELLED, "#f50");
StatusMarker.set(import_client3.BookingStatus.REJECTED, "#f50");
var FareModeLabel = /* @__PURE__ */ new Map();
FareModeLabel.set(import_client3.FareMode.FLAT, "Flat Fee");
FareModeLabel.set(import_client3.FareMode.HOURLY, "Hourly");

// app/routes/partner.signup.onboard.$id._index.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
var fileTypes = [
  {
    name: "Aadhar"
  },
  {
    name: "PAN"
  },
  {
    name: "Passport"
  },
  {
    name: "Voters ID"
  },
  {
    name: "Driving Licence"
  }
];
async function action2(args) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let vendorId = args.params.id, formData = await args.request.formData(), type = (_a = formData.get("action")) == null ? void 0 : _a.toString();
  if (!type || !vendorId)
    return !1;
  switch (type) {
    case "PROFILE" /* PROFILE */:
      {
        let categoryId2 = (_b = formData.get("categoryId")) == null ? void 0 : _b.toString(), username = (_c = formData.get("username")) == null ? void 0 : _c.toString();
        try {
          await db.vendorService.deleteMany({
            where: {
              vendorId,
              vendor: {
                categoryId: {
                  not: categoryId2
                }
              }
            }
          }), await db.vendorServiceGroup.deleteMany({
            where: {
              vendorId,
              vendor: {
                categoryId: {
                  not: categoryId2
                }
              }
            }
          }), await db.vendor.update({
            where: {
              id: vendorId
            },
            data: {
              username,
              categoryId: categoryId2
            }
          });
        } catch {
        }
      }
      return !0;
    case "SERVICE" /* SERVICE */:
      let groupId = formData.get("serviceGroupId"), groupCost = formData.get("groupCost"), grpExtraHourCost = (_d = formData.get("extraHourCost")) == null ? void 0 : _d.toString(), categoryId = (_e = formData.get("categoryId")) == null ? void 0 : _e.toString();
      if (!categoryId)
        return !1;
      if (await db.vendorService.deleteMany({
        where: {
          vendorId,
          vendor: {
            categoryId: {
              not: categoryId
            }
          }
        }
      }), await db.vendorServiceGroup.deleteMany({
        where: {
          vendorId,
          vendor: {
            categoryId: {
              not: categoryId
            }
          }
        }
      }), groupId && groupCost) {
        let serviceIds = formData.getAll("serviceId"), durations = formData.getAll("duration"), costs = formData.getAll("cost"), fareModes = formData.getAll("fareMode"), vendorGroupId = generateUuid();
        return await db.vendorServiceGroup.create({
          data: {
            id: vendorGroupId,
            groupId: groupId == null ? void 0 : groupId.toString(),
            vendorId,
            cost: parseInt((groupCost == null ? void 0 : groupCost.toString()) || "0"),
            costExtraHour: parseInt(grpExtraHourCost || "0")
          }
        }), serviceIds.forEach(async (data, index) => {
          var _a2, _b2, _c2;
          await db.vendorService.create({
            data: {
              id: generateUuid(),
              vendorId,
              vendorServiceGroupId: vendorGroupId,
              serviceId: data.toString(),
              cost: parseInt((_a2 = costs[index]) == null ? void 0 : _a2.toString()),
              duration: parseInt((_b2 = durations[index]) == null ? void 0 : _b2.toString()),
              fareMode: (_c2 = fareModes[index]) == null ? void 0 : _c2.toString()
            }
          });
        }), !0;
      }
      break;
    case "COST" /* COST */:
      {
        let vendorGroupId = (_f = formData.get("vendorGroupId")) == null ? void 0 : _f.toString(), serviceIds = formData.getAll("serviceId"), durations = formData.getAll("duration"), costs = formData.getAll("cost"), groupCost2 = (_g = formData.get("groupCost")) == null ? void 0 : _g.toString(), grpExtraHourCost2 = (_h = formData.get("extraHourCost")) == null ? void 0 : _h.toString(), fareModes = formData.getAll("fareMode");
        if (!vendorGroupId)
          return;
        await db.vendorServiceGroup.update({
          data: {
            cost: parseInt(groupCost2 || "0"),
            costExtraHour: parseInt(grpExtraHourCost2 || "0")
          },
          where: {
            id: vendorGroupId
          }
        }), await db.vendorService.deleteMany({
          where: {
            vendorId,
            vendorServiceGroupId: vendorGroupId
          }
        }), serviceIds.forEach(async (data, index) => {
          var _a2, _b2, _c2;
          await db.vendorService.create({
            data: {
              id: generateUuid(),
              vendorId,
              vendorServiceGroupId: vendorGroupId,
              serviceId: data.toString(),
              cost: parseInt((_a2 = costs[index]) == null ? void 0 : _a2.toString()),
              duration: parseInt((_b2 = durations[index]) == null ? void 0 : _b2.toString()),
              fareMode: (_c2 = fareModes[index]) == null ? void 0 : _c2.toString()
            }
          });
        });
      }
      return !0;
    case "DOCUMENTS" /* DOCUMENTS */:
      let fileName = (_i = formData.get("fileName")) == null ? void 0 : _i.toString(), fileType = (_j = formData.get("fileType")) == null ? void 0 : _j.toString();
      fileName && fileType && await db.vendorFiles.create({
        data: {
          id: generateUuid(),
          vendorId,
          fileName,
          fileType
        }
      });
      break;
    case "REMOVE_SERVICE" /* REMOVE_SERVICE */:
      let remDelId = (_k = formData.get("vendorGroupId")) == null ? void 0 : _k.toString();
      if (!remDelId)
        return;
      await db.vendorServiceGroup.delete({
        where: {
          id: remDelId
        }
      });
      break;
  }
  return !1;
}
async function loader3(args) {
  let applicationId = args.params.id, data = await db.vendor.findFirstOrThrow({
    where: {
      isActive: !1,
      id: applicationId
    },
    select: {
      id: !0,
      name: !0,
      email: !0,
      mobileNumber: !0,
      usernameSuggestion: !0,
      username: !0,
      vendorType: {
        select: {
          name: !0,
          id: !0
        }
      },
      VendorServiceGroup: {
        orderBy: {
          group: {
            name: "asc"
          }
        },
        select: {
          id: !0,
          cost: !0,
          costExtraHour: !0,
          vendorService: {
            select: {
              serviceId: !0,
              duration: !0,
              cost: !0
            }
          },
          group: {
            select: {
              id: !0,
              name: !0,
              minHour: !0,
              serviceGroupItem: {
                orderBy: [{
                  isOptional: "asc"
                }, {
                  position: "asc"
                }, {
                  addonGroup: { name: "asc" }
                }],
                select: {
                  addonGroup: {
                    select: {
                      name: !0
                    }
                  },
                  isOptional: !0,
                  service: {
                    select: {
                      id: !0,
                      name: !0,
                      fareMode: !0,
                      minHour: !0,
                      description: !0
                    }
                  }
                }
              }
            }
          }
        }
      },
      services: {
        select: {
          id: !0,
          duration: !0,
          cost: !0,
          serviceId: !0,
          fareMode: !0,
          service: {
            select: {
              name: !0,
              minHour: !0
            }
          }
        }
      }
    }
  }), vendorTypes = await ServiceQuery.getServicesByJob(), files = await db.vendorFiles.findMany({
    where: {
      vendorId: applicationId
    },
    select: {
      id: !0,
      fileName: !0,
      fileType: !0
    }
  });
  if (data) {
    let selectedServiceGroups = data.VendorServiceGroup.map((x) => x.group.id), categories = vendorTypes.map((x) => ({ id: x.id, name: x.name, serviceGroups: x.serviceGroup.filter((y) => !selectedServiceGroups.includes(y.id)).map((y) => ({ id: y.id, name: y.name, minHour: y.minHour, serviceGroupItem: y.serviceGroupItem })) }));
    return { profile: data, categories, files };
  }
  return null;
}
var OnBoardPage = {
  Index: () => {
    var _a, _b, _c, _d, _e, _f;
    let data = (0, import_react14.useLoaderData)(), fetcher = (0, import_react14.useFetcher)(), [activeType, setJobType] = (0, import_react15.useState)(""), [showProfileDialog, setProfileDialog] = (0, import_react15.useState)(!1), [serviceList, setServiceList] = (0, import_react15.useState)([]);
    (0, import_react15.useEffect)(() => {
      fetcher.data && alert("Thank you for updating your profile");
    }, [fetcher.data]), (0, import_react15.useEffect)(() => {
      let list = data.categories.find((x) => x.id === activeType);
      setServiceList((list == null ? void 0 : list.serviceGroups) || []);
    }, [data.categories]), (0, import_react15.useEffect)(() => {
      var _a2;
      setActiveGroup(((_a2 = data.profile.vendorType) == null ? void 0 : _a2.id) || "");
    }, []);
    function setActiveGroup(id) {
      setJobType(id);
      let list = data.categories.find((x) => x.id === id);
      setServiceList((list == null ? void 0 : list.serviceGroups) || []);
    }
    function showEditProfileDialog() {
      setProfileDialog(!0);
    }
    function hideEditProfileDialog() {
      setProfileDialog(!1);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid, { gutter: 40, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: 12, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Title, { children: "Welcome" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 444,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Title, { order: 5, children: [
            "Hello ",
            data == null ? void 0 : data.profile.name,
            ", Please fill up the following details."
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 445,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 443,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Divider, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 448,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 447,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Card, { withBorder: !0, shadow: "xs", title: "Update Profile", children: (_a = data == null ? void 0 : data.profile) != null && _a.vendorType && ((_b = data.profile) != null && _b.username) ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid, { gutter: 20, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: "Profile Type: " }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 455,
              columnNumber: 42
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 455,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Flex, { gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: (_d = (_c = data.profile) == null ? void 0 : _c.vendorType) == null ? void 0 : _d.name }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 457,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, onClick: showEditProfileDialog, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { variant: "outline", size: "xs", radius: "xl", children: "Update" }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 458,
                columnNumber: 88
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 458,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 456,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 454,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: "Public name:" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 461,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { c: "dimmed", children: "User will see this instead of your real name" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 462,
              columnNumber: 42
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 462,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Flex, { gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: (_e = data.profile) == null ? void 0 : _e.username }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 463,
                columnNumber: 54
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, onClick: showEditProfileDialog, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { variant: "outline", size: "xs", radius: "xl", children: "Update" }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 463,
                columnNumber: 147
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 463,
                columnNumber: 100
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 463,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 460,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 453,
          columnNumber: 29
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OnBoardPage.EditProfileForm, { onSuccess: hideEditProfileDialog }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 465,
          columnNumber: 39
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 451,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 450,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: 12 }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 468,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: serviceList.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OnBoardPage.SelectCategory, { serviceList, activeType }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 470,
          columnNumber: 43
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 469,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: (_f = data.profile.VendorServiceGroup) != null && _f.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OnBoardPage.Documents, { data }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 473,
          columnNumber: 64
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 472,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 442,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Modal, { title: "Modify Profile", opened: showProfileDialog, onClose: () => setProfileDialog(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OnBoardPage.EditProfileForm, { onSuccess: hideEditProfileDialog }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 477,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 476,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 441,
      columnNumber: 16
    }, this);
  },
  SelectCategory: ({ serviceList, activeType }) => {
    var _a;
    let [getServiceDialogData, setServiceDialogData] = (0, import_react15.useState)(null);
    function setService(data) {
      let group = serviceList.find((x) => x.id === data);
      setServiceDialogData(group ? {
        id: "NEW",
        vendorService: [],
        group,
        cost: 0,
        costExtraHour: 0
      } : null);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Card, { withBorder: !0, shadow: "xs", title: "Choose your services", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: "Add one or more services from below" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 502,
          columnNumber: 26
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 502,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Select, { value: (_a = getServiceDialogData == null ? void 0 : getServiceDialogData.group) == null ? void 0 : _a.id, style: { width: "100%" }, size: "large", placeholder: "Choose...", onChange: (v) => setService(v || ""), data: serviceList.map((service) => ({ value: service.id, label: service.name })) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 503,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: "Selected Services" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 505,
          columnNumber: 26
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 505,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OnBoardPage.CostSection, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 506,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 501,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 500,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Modal, { title: (getServiceDialogData == null ? void 0 : getServiceDialogData.group.name) + " - Services & Cost", opened: !!(getServiceDialogData != null && getServiceDialogData.id), onClose: () => setServiceDialogData(null), children: getServiceDialogData && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OnBoardPage.UpdateGroupServiceCost, { activeType, addService: !0, item: getServiceDialogData, onClose: () => setServiceDialogData(null) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 510,
        columnNumber: 42
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 509,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 499,
      columnNumber: 16
    }, this);
  },
  CostSection: () => {
    var _a;
    let data = (0, import_react14.useLoaderData)();
    return (_a = data.profile.VendorServiceGroup) != null && _a.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Accordion, { children: data.profile.VendorServiceGroup.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Accordion.Item, { value: item.id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Accordion.Control, { children: item.group.name }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 519,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OnBoardPage.UpdateGroupServiceCost, { item }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 521,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 520,
        columnNumber: 17
      }, this)
    ] }, item.id, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 518,
      columnNumber: 67
    }, this)) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 517,
      columnNumber: 58
    }, this) : "Please add services from above list to get started.";
  },
  Documents: ({ data }) => {
    let fetcher = (0, import_react14.useFetcher)(), [fileType, setFileType] = (0, import_react15.useState)();
    function uploadDocs(file) {
      let form = new FormData();
      form.set("action", "DOCUMENTS" /* DOCUMENTS */), form.set("fileType", fileType || ""), form.set("fileName", file), fetcher.submit(form, { method: "POST" }), setFileType(null);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Card, { withBorder: !0, shadow: "xs", title: "Confirm your identity", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { method: "post", action: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid, { gutter: 40, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 5 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Select, { placeholder: "Select document type", style: { width: "100%" }, onChange: (v) => setFileType(v), data: fileTypes.map((x) => ({ label: x.name, value: x.name })) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 545,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { c: "dimmed", children: "Upload any valid document to prove your identity." }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 546,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 544,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 7 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FileUploader_default, { id: fileType || "", label: "Choose file", onUpload: (v) => uploadDocs(v) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 549,
            columnNumber: 25
          }, this),
          !fileType && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { c: "dimmed", children: "Please select a document type" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 550,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 548,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { children: fetcher.state === "submitting" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Loader, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 553,
          columnNumber: 60
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 552,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 543,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 541,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Thead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Tr, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Th, { children: "Document Type" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 561,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Th, { children: "File Name" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 562,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Th, {}, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 563,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 560,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 559,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Tbody, { children: data.files.map((element) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Tr, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Td, { children: element.fileType }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 568,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Td, { children: element.fileName }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 569,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Table.Td, {}, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 570,
            columnNumber: 25
          }, this)
        ] }, element.id, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 567,
          columnNumber: 48
        }, this)) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 566,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 558,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Divider, {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 574,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Flex, { justify: "end", pt: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react14.Link, { to: "success", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { variant: "filled", radius: "xl", disabled: !data.files.length, children: "Contiue" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 576,
        columnNumber: 36
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 576,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 575,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 540,
      columnNumber: 16
    }, this);
  },
  UpdateGroupServiceCost: ({ item, addService, activeType, onClose }) => {
    let fetcher = (0, import_react14.useFetcher)(), [enabledIds, setIds] = (0, import_react15.useState)([]);
    (0, import_react15.useEffect)(() => {
      let includedIds = item.group.serviceGroupItem.filter((x) => !x.isOptional).map((x) => x.service.id), addonIds = item.group.serviceGroupItem.filter((x) => x.isOptional).map((x) => x.service.id);
      setIds(item.vendorService.filter((x) => addonIds.includes(x.serviceId)).map((x) => x.serviceId).concat(includedIds));
    }, []), (0, import_react15.useEffect)(() => {
      fetcher.data && (alert("Thank you for updating your profile"), onClose && onClose());
    }, [fetcher.data]);
    function setEnabledList(id, enabled) {
      let ids = enabledIds.filter((x) => x != id);
      enabled && ids.push(id), setIds(ids);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { method: "post", action: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Alert, { title: "Kindly read all the inclusive services and set your base charge accordingly.", variant: "light", color: "blue", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react4.IconInfoCircle, {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 608,
        columnNumber: 140
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 608,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 608,
        columnNumber: 162
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid, { gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Title, { order: 5, children: "Base Charge" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 611,
            columnNumber: 26
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 611,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Input, { width: "100%", leftSection: "\u20B9", required: !0, name: "groupCost", type: "number", min: "1", defaultValue: item.cost }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 612,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "categoryId", value: activeType }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 613,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "serviceGroupId", value: item.group.id }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 614,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 610,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Title, { order: 5, children: "Extra hour charges" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 617,
            columnNumber: 26
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 617,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Input, { width: "100%", leftSection: "\u20B9", name: "extraHourCost", type: "number", min: "0", defaultValue: item.costExtraHour }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 618,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 616,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 609,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { padding: "10px 0 20px" }, children: [
        "Approximate hour required for this job is ",
        item.group.minHour,
        " hours."
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 621,
        columnNumber: 13
      }, this),
      item.group.serviceGroupItem.map((service, i) => {
        var _a, _b, _c, _d, _e;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid, { gutter: 20, children: [
          ((_a = item.group.serviceGroupItem[i - 1]) == null ? void 0 : _a.isOptional) !== service.isOptional && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: 12, children: service.isOptional ? [/* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Title, { style: { color: "#1890ff" }, order: 5, children: "Additional Services" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 625,
            columnNumber: 44
          }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { paddingBottom: "10px" }, children: "(Choose only applicable services)" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 625,
            columnNumber: 119
          }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Alert, { variant: "light", color: "blue", title: "Do not add base charge to additional service.", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react4.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 625,
            columnNumber: 295
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 625,
            columnNumber: 199
          }, this)] : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Title, { style: { color: "#1890ff" }, order: 5, children: "Services included in this category" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 625,
            columnNumber: 321
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 624,
            columnNumber: 91
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: 2, children: service.isOptional ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_core10.Checkbox,
            {
              defaultChecked: !!item.vendorService.find((x) => x.serviceId === service.service.id),
              name: "serviceId",
              value: service.service.id,
              onChange: (v) => setEnabledList(service.service.id, v.target.checked)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 628,
              columnNumber: 43
            },
            this
          ) : [/* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "input",
            {
              type: "hidden",
              name: "serviceId",
              value: service.service.id
            },
            void 0,
            !1,
            {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 632,
              columnNumber: 27
            },
            this
          ), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "cost", value: 0 }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 633,
            columnNumber: 56
          }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "duration", value: 1 }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 633,
            columnNumber: 103
          }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", value: service.service.fareMode, name: "fareMode" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 633,
            columnNumber: 154
          }, this)] }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 627,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: [
              service.service.name,
              " ",
              (_b = service.addonGroup) != null && _b.name ? "(" + ((_c = service.addonGroup) == null ? void 0 : _c.name) + ")" : ""
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 636,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { c: "dimmed", children: service.service.description }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 638,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 637,
              columnNumber: 21
            }, this),
            enabledIds.includes(service.service.id) && service.isOptional && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid, { gutter: 20, style: { paddingTop: "10px" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 5 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", value: service.service.fareMode, name: "fareMode" }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 642,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { children: "Charged by:" }, void 0, !1, {
                    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                    lineNumber: 643,
                    columnNumber: 34
                  }, this),
                  " ",
                  FareModeLabel.get(service.service.fareMode)
                ] }, void 0, !0, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 643,
                  columnNumber: 29
                }, this),
                service.service.fareMode === import_client4.FareMode.HOURLY ? [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { children: "Duration" }, void 0, !1, {
                    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                    lineNumber: 644,
                    columnNumber: 83
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                    lineNumber: 644,
                    columnNumber: 78
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Input, { rightSection: "hours", defaultValue: ((_d = item.vendorService.find((x) => x.serviceId === service.service.id)) == null ? void 0 : _d.duration) || item.group.minHour, name: "duration", type: "number", required: !0, min: item.group.minHour }, void 0, !1, {
                    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                    lineNumber: 645,
                    columnNumber: 29
                  }, this)
                ] : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "duration", value: 1 }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 645,
                  columnNumber: 239
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 641,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 7 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { children: "Cost" }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 648,
                  columnNumber: 34
                }, this) }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 648,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Input, { leftSection: "\u20B9", defaultValue: ((_e = item.vendorService.find((x) => x.serviceId === service.service.id)) == null ? void 0 : _e.cost) || 0, name: "cost", type: "number", required: !0, min: 0 }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 649,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { c: "dimmed", children: "Enter zero, if you don't charge additional for these services." }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 650,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 647,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 640,
              columnNumber: 87
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 635,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Divider, { style: { padding: 0, margin: "0 0 10px" } }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 654,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 654,
            columnNumber: 17
          }, this)
        ] }, service.service.id, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 623,
          columnNumber: 62
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Flex, { gap: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "vendorGroupId", value: item.id }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 658,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { loading: fetcher.state === "submitting", variant: "filled", radius: "xl", type: "submit", name: "action", value: addService ? "SERVICE" /* SERVICE */ : "COST" /* COST */, children: "Save & Continue" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 659,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 657,
          columnNumber: 17
        }, this),
        !addService && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { variant: "filled", color: "red", radius: "xl", type: "submit", name: "action", value: "REMOVE_SERVICE" /* REMOVE_SERVICE */, children: "Remove" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 662,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 661,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 656,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 607,
      columnNumber: 16
    }, this);
  },
  EditProfileForm: ({ onSuccess }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    let data = (0, import_react14.useLoaderData)(), submit = (0, import_react14.useSubmit)(), [profileData, setData] = (0, import_react15.useState)({ jobType: (_a = data == null ? void 0 : data.profile.vendorType) == null ? void 0 : _a.id, username: data == null ? void 0 : data.profile.username }), [showWarnMsg, setWarnMsg] = (0, import_react15.useState)(!1);
    function updateData(newData) {
      var _a2, _b2;
      let currentType = (_b2 = (_a2 = data == null ? void 0 : data.profile) == null ? void 0 : _a2.vendorType) == null ? void 0 : _b2.id;
      newData && setData({ ...profileData, ...newData }), currentType && newData.jobType && currentType !== newData.jobType ? setWarnMsg(!0) : setWarnMsg(!1);
    }
    function saveForm() {
      !(profileData != null && profileData.jobType) || !profileData.username || submit(
        {
          action: "PROFILE" /* PROFILE */,
          username: (profileData == null ? void 0 : profileData.username) || "",
          categoryId: (profileData == null ? void 0 : profileData.jobType) || ""
        },
        {
          method: "post"
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Stack, { style: { width: "100%" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: "Profile Category:" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 704,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Select, { value: profileData.jobType, defaultValue: (_c = (_b = data == null ? void 0 : data.profile) == null ? void 0 : _b.vendorType) == null ? void 0 : _c.id, onChange: (value) => updateData({ jobType: value || "" }), placeholder: "Select a category", style: { width: "100%" }, data: data == null ? void 0 : data.categories.map((item) => ({ value: item.id, label: item.name })) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 705,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 703,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 702,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: 500, children: "Public name:" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 710,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Select, { allowDeselect: !1, defaultValue: (_d = data == null ? void 0 : data.profile) == null ? void 0 : _d.username, onChange: (value) => updateData({ username: value || "" }), placeholder: "Select a username", data: ((_e = data == null ? void 0 : data.profile.usernameSuggestion) == null ? void 0 : _e.split(",").map((item) => ({ value: item, label: item }))) || [{ value: ((_f = data == null ? void 0 : data.profile) == null ? void 0 : _f.username) || "", label: ((_g = data == null ? void 0 : data.profile) == null ? void 0 : _g.username) || "" }] }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 711,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { size: "sm", c: "dimmed", children: "User will see this instead of your real name" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 712,
          columnNumber: 26
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 712,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 709,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 708,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Grid.Col, { span: 12, children: [
        showWarnMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Alert, { variant: "light", color: "red", mb: "md", title: "Are you sure?", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react4.IconInfoCircle, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 716,
          columnNumber: 106
        }, this), children: [
          "Updating your profile type will reset your saved changes. If you are trying to signup for multiple categories, kindly signup after successfully submitting this one.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Flex, { gap: "sm", pt: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { color: "red", size: "xs", variant: "filled", radius: "xl", onClick: (v) => {
              var _a2, _b2;
              return updateData({ jobType: (_b2 = (_a2 = data == null ? void 0 : data.profile) == null ? void 0 : _a2.vendorType) == null ? void 0 : _b2.id });
            }, children: "Decline" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 719,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { color: "red", size: "xs", variant: "outline", radius: "xl", onClick: () => setWarnMsg(!1), children: "Proceed" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 722,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 718,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 716,
          columnNumber: 33
        }, this),
        !showWarnMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { variant: "filled", radius: "xl", onClick: saveForm, children: "Save and Continue" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 727,
          columnNumber: 34
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 715,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 701,
      columnNumber: 16
    }, this);
  }
}, partner_signup_onboard_id_index_default = OnBoardPage.Index;

// app/routes/cart.add.$vendorServiceGroupId.tsx
var cart_add_vendorServiceGroupId_exports = {};
__export(cart_add_vendorServiceGroupId_exports, {
  action: () => action3,
  default: () => cart_add_vendorServiceGroupId_default,
  loader: () => loader4
});
var import_core12 = require("@mantine/core"), import_dates = require("@mantine/dates"), import_react16 = require("@remix-run/react"), import_icons_react5 = require("@tabler/icons-react"), import_icons_react6 = require("@tabler/icons-react"), import_icons_react7 = require("@tabler/icons-react"), import_icons_react8 = require("@tabler/icons-react"), import_dayjs = __toESM(require("dayjs")), import_react17 = require("react");

// app/service/cart.service.ts
var GST_PERCENTAGE = 3, CartService = {
  getGst: GST_PERCENTAGE,
  calculate: function(cart) {
    let gst = GST_PERCENTAGE, total = cart.reduce((arr, x) => arr.concat(x.services), []).reduce((sum, item) => sum + item.cost, 0), tax = gst * total / 100;
    return {
      total,
      tax,
      gst,
      final: total + tax,
      discount: 0
    };
  },
  summary: function(cart) {
    return new Promise(async function(resolve) {
      var _a;
      if (!(cart != null && cart.length)) {
        resolve([]);
        return;
      }
      let results = [];
      for (let i = 0; i < cart.length; i++) {
        let item = cart[i], res = await ServiceQuery.getVendorServices(item.vendorServiceGroupId, item.services.map((x) => x.id).filter((x) => !!x));
        res && results.push({
          name: res.group.name,
          coverImg: res.group.imageName ? PATH.RESOURCE_URL + res.group.imageName : "",
          vendorServiceGroupId: res.id,
          vendorType: ((_a = res.vendor.vendorType) == null ? void 0 : _a.name) || "",
          vendorName: res.vendor.username,
          vendorImg: res.vendor.profileImageName ? PATH.RESOURCE_URL + res.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER,
          vendorId: res.vendor.username,
          date: item.date,
          timeHour: item.timeHour,
          duration: item.duration,
          services: [{ name: "Base charge", cost: res.cost, id: "", fareMode: "FLAT" }, ...res.vendorService.map((x) => ({
            name: x.service.name,
            cost: x.cost,
            id: x.service.id,
            fareMode: x.fareMode
          }))]
        });
      }
      resolve(results);
    });
  }
};

// app/utils/currency.transformer.tsx
var import_core11 = require("@mantine/core");

// app/data/common.data.ts
var COMMON_DATA = {
  currency: "\u20B9"
}, common_data_default = COMMON_DATA;

// app/utils/currency.transformer.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Currency({ value }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.NumberFormatter, { prefix: common_data_default.currency, value: Math.ceil(value || 0), thousandSeparator: !0 }, void 0, !1, {
    fileName: "app/utils/currency.transformer.tsx",
    lineNumber: 5,
    columnNumber: 12
  }, this);
}
var currency_transformer_default = Currency;

// app/routes/cart.add.$vendorServiceGroupId.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function cartSummary(input) {
  let cartSummary2 = await CartService.summary(input), estimation = await CartService.calculate(cartSummary2);
  return {
    cartSummary: cartSummary2,
    estimation
  };
}
async function getTimeSlots() {
  return [
    {
      label: "9 AM",
      value: 9,
      available: !0
    },
    {
      label: "10 AM",
      value: 10,
      available: !0
    },
    {
      label: "11 AM",
      value: 11,
      available: !0
    },
    {
      label: "12 PM",
      value: 12,
      available: !1
    }
  ];
}
async function action3(args) {
  var _a, _b;
  let form = await args.request.formData();
  switch ((_a = form.get("action")) == null ? void 0 : _a.toString()) {
    case "ESTIMATION" /* ESTIMATION */:
      let input = JSON.parse(((_b = form.get("input")) == null ? void 0 : _b.toString()) || "");
      return await cartSummary(input);
    case "TIME_SLOTS" /* TIME_SLOTS */:
      return await getTimeSlots();
  }
  return null;
}
async function loader4(args) {
  let id = args.params.vendorServiceGroupId || "", service = await VendorQuery.getVendorServiceGroup(id), vendor = await db.vendorServiceGroup.findFirstOrThrow({
    where: {
      id
    },
    select: {
      vendor: {
        select: {
          username: !0,
          profileImageName: !0,
          vendorType: {
            select: {
              name: !0
            }
          }
        }
      }
    }
  });
  return {
    serviceGroup: service,
    vendor,
    vendorServiceGroupId: id
  };
}
var Page = {
  Index: () => {
    var _a;
    let [activeStep, setActiveStep] = (0, import_react17.useState)(1), data = (0, import_react16.useLoaderData)(), [formData, setFormData] = (0, import_react17.useState)(), steps = [{
      title: "Select service",
      icon: import_icons_react5.IconNumber1,
      success: !!((_a = formData == null ? void 0 : formData.services) != null && _a.length),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Page.Addons, { onChange: updateFormData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 130,
        columnNumber: 20
      }, this)
    }, {
      title: "Select slot",
      icon: import_icons_react5.IconNumber2,
      success: !!(formData != null && formData.date && formData.timeHour),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Page.SelectDate, { onChange: updateFormData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 135,
        columnNumber: 20
      }, this)
    }, {
      title: "Choose venue",
      icon: import_icons_react7.IconNumber3,
      success: !!(formData != null && formData.venue),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Page.ChooseVenue, {}, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 140,
        columnNumber: 20
      }, this)
    }, {
      title: "Confirm",
      icon: import_icons_react8.IconNumber4,
      success: !1,
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Page.Summary, { data: formData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 145,
        columnNumber: 20
      }, this)
    }];
    function updateFormData(params) {
      setFormData({ ...formData, ...params });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Container, { size: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid, { gutter: "md", justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: "auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 5, children: "Book you session" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 155,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { children: "Complete these steps to proceed" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 156,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 154,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { sm: 12, md: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Flex, { align: "center", gap: "md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 5, children: data.vendor.vendor.username }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 160,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Avatar, { size: "xl", src: data.vendor.vendor.profileImageName ? PATH.RESOURCE_URL + data.vendor.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 161,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 159,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 158,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this),
      steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.ActionIcon, { variant: step.success ? "filled" : "light", color: step.success ? "green" : "blue", size: "xl", radius: "xl", "aria-label": "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(step.icon, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 171,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 170,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 5, children: step.title }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 173,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 169,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: "content", p: "0 30px 0 30px", children: i < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Divider, { orientation: "vertical", h: "100%" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 177,
            columnNumber: 53
          }, this) : "" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 176,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: "auto", pt: "sm", pb: "md", children: step.child }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 179,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 175,
          columnNumber: 21
        }, this)
      ] }, "step-" + i, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 168,
        columnNumber: 17
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "lg" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 152,
      columnNumber: 16
    }, this);
  },
  Addons: ({ onChange }) => {
    let data = (0, import_react16.useLoaderData)(), [selectedAddons, setAddons] = (0, import_react17.useState)([]);
    (0, import_react17.useEffect)(() => {
      onChange({
        services: [{
          vendorServiceGroupId: data.vendorServiceGroupId,
          addonsIds: []
        }]
      });
    }, []);
    function toggleAddon(id) {
      let newIds;
      selectedAddons.includes(id) ? newIds = selectedAddons.filter((x) => x !== id) : newIds = [...selectedAddons, id], setAddons(newIds), onChange({
        services: [{
          vendorServiceGroupId: data.vendorServiceGroupId,
          addonsIds: newIds
        }]
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Stack, { align: "center", justify: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Image, { src: data.serviceGroup.image, h: 120, w: 120, fit: "cover", radius: "md" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 221,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { children: data.serviceGroup.title }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 222,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 220,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 219,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: "auto" }, children: data.serviceGroup.addons.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Stack, { gap: "xs", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { fw: 500, children: "Recommended Addons" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 228,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_core12.SimpleGrid,
          {
            cols: { base: 2, md: 3, lg: 3, xl: 4 },
            spacing: { base: "sm", sm: "xl" },
            children: data.serviceGroup.addons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Card, { withBorder: !0, onClick: () => toggleAddon(item.id), style: { cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Stack, { gap: "xs", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                import_core12.Checkbox,
                {
                  checked: selectedAddons.includes(item.id),
                  color: "green",
                  style: { userSelect: "none" }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                  lineNumber: 233,
                  columnNumber: 37
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { children: item.title }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 238,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { value: item.cost }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 239,
                columnNumber: 52
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 239,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 232,
              columnNumber: 33
            }, this) }, item.id, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 231,
              columnNumber: 67
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 229,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 227,
        columnNumber: 56
      }, this) : "" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 225,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 218,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 217,
      columnNumber: 16
    }, this);
  },
  SelectDate: ({ onChange }) => {
    let [selectedDate, setSelectedDate] = (0, import_react17.useState)(), [selectedTime, setTime] = (0, import_react17.useState)(), data = (0, import_react16.useLoaderData)(), fetcher = (0, import_react16.useFetcher)(), handleDaySelect = (date) => {
      setSelectedDate(date), setTime(null), onChange({
        date: void 0,
        timeHour: void 0
      }), fetcher.submit({
        date: date.toISOString(),
        action: "TIME_SLOTS" /* TIME_SLOTS */
      }, {
        method: "post"
      });
    };
    function setTimeHour(time) {
      setTime(time), onChange({
        date: selectedDate == null ? void 0 : selectedDate.toISOString(),
        timeHour: time
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid, { gutter: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: "content" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { fw: 500, children: "When you are looking for?" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 280,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 281,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_dates.Calendar,
          {
            getDayProps: (date) => ({
              selected: (0, import_dayjs.default)(date).isSame(selectedDate, "date"),
              onClick: () => handleDaySelect(date),
              disabled: (0, import_dayjs.default)(date).isBefore(/* @__PURE__ */ new Date())
            })
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 282,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 279,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: "auto" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { fw: 500, children: "Select a preferred time" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 291,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 292,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react17.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Skeleton, {}, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 293,
          columnNumber: 37
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react16.Await, { resolve: fetcher.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Group, { gap: "sm", children: [
          response == null ? void 0 : response.map((time) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Checkbox, { checked: selectedTime === time.value, label: time.label, onChange: () => setTimeHour(time.value), disabled: !time.available }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 298,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 297,
            columnNumber: 61
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 297,
            columnNumber: 56
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 300,
            columnNumber: 33
          }, this),
          response != null && response.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Alert, { variant: "light", color: "green", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react6.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 301,
            columnNumber: 96
          }, this), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { children: [
              "The estimated duration of this job is ",
              data.serviceGroup.minHour,
              " hours."
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 302,
              columnNumber: 37
            }, this),
            data.serviceGroup.costExtraHour ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
              "An additional amount of ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { value: data.serviceGroup.costExtraHour }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 304,
                columnNumber: 65
              }, this),
              " per extra hour will be charged if applicable."
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 303,
              columnNumber: 72
            }, this) : ""
          ] }, void 0, !0, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 301,
            columnNumber: 53
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Alert, { variant: "light", color: "yellow", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react6.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 305,
            columnNumber: 88
          }, this), children: "Please select a date first." }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 305,
            columnNumber: 44
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 296,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 295,
          columnNumber: 38
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 294,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 293,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 290,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 278,
      columnNumber: 16
    }, this);
  },
  ChooseVenue: () => {
    let mapRef = (0, import_react17.useRef)(null), [mapReady, setMapReady] = (0, import_react17.useState)(!1);
    return "...";
  },
  Summary: ({ data }) => {
    let submit = (0, import_react16.useSubmit)(), fetcher = (0, import_react16.useFetcher)(), [getCoupon, setCoupon] = (0, import_react17.useState)(""), [isStepsReady, setStepsReady] = (0, import_react17.useState)(!1);
    (0, import_react17.useEffect)(() => {
      var _a;
      (_a = data == null ? void 0 : data.services) != null && _a.length && (data != null && data.date) && data.timeHour ? (setStepsReady(!0), getEstimation()) : setStepsReady(!1);
    }, [data]);
    function getEstimation(coupon) {
      let params = getInputParams();
      fetcher.submit({
        action: "ESTIMATION" /* ESTIMATION */,
        input: JSON.stringify(params),
        coupon: coupon || ""
      }, {
        method: "post"
      });
    }
    function addToCart() {
      let input = getInputParams();
      submit({ cart: JSON.stringify(input) }, {
        action: "/cart/add",
        method: "post"
      });
    }
    function applyCoupon() {
      getEstimation(getCoupon);
    }
    function getInputParams() {
      var _a;
      return ((_a = data == null ? void 0 : data.services) == null ? void 0 : _a.map((x) => ({
        vendorServiceGroupId: x.vendorServiceGroupId,
        date: x.date || data.date || "",
        timeHour: x.timeHour || data.timeHour || 0,
        duration: 1,
        services: x.addonsIds.map((i) => ({ id: i }))
      }))) || [];
    }
    let CouponSection = /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Group, { gap: "md", align: "end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Input.Wrapper, { flex: 1, label: "Coupon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Input, { value: getCoupon, onChange: (v) => setCoupon(v.target.value) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 376,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 375,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Button, { variant: "outline", size: "xs", onClick: applyCoupon, children: "Apply" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 378,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 374,
      columnNumber: 31
    }, this);
    return isStepsReady ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react17.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Skeleton, {}, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 381,
      columnNumber: 51
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react16.Await, { resolve: fetcher.data, children: (response) => {
      var _a, _b, _c, _d, _e;
      return ["loading", "submitting"].includes(fetcher.state) ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Loader, { color: "gray" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 383,
        columnNumber: 82
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid, { gutter: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: 4 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { fw: 700, children: "Order" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 385,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "sm" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 386,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Card, { shadow: "sm", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Stack, { children: response == null ? void 0 : response.cartSummary.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("b", { children: group.name }, void 0, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 391,
              columnNumber: 41
            }, this),
            group.services.map(
              (service) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Flex, { justify: "space-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", fw: 500, children: service.name }, void 0, !1, {
                  fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                  lineNumber: 393,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { value: service.cost }, void 0, !1, {
                  fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                  lineNumber: 394,
                  columnNumber: 61
                }, this) }, void 0, !1, {
                  fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                  lineNumber: 394,
                  columnNumber: 45
                }, this)
              ] }, service.id, !0, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 392,
                columnNumber: 72
              }, this)
            )
          ] }, group.vendorServiceGroupId, !0, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 390,
            columnNumber: 72
          }, this)) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 388,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 387,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 384,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: 4 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { fw: 700, children: "Payment Summary" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 402,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "sm" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 403,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Card, { shadow: "sm", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Stack, { children: [
            CouponSection,
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Divider, {}, void 0, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 407,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", fw: 500, children: "Subtotal" }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 409,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { value: (_a = response == null ? void 0 : response.estimation) == null ? void 0 : _a.total }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 410,
                columnNumber: 62
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 410,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 408,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { c: "dimmed", children: [
                "GST (",
                (_b = response == null ? void 0 : response.estimation) == null ? void 0 : _b.gst,
                "%)"
              ] }, void 0, !0, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 413,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { value: (_c = response == null ? void 0 : response.estimation) == null ? void 0 : _c.tax }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 414,
                columnNumber: 43
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 414,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 412,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", fw: 500, children: "Discount" }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 417,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { value: (_d = response == null ? void 0 : response.estimation) == null ? void 0 : _d.discount }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 418,
                columnNumber: 62
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 418,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 416,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", fw: 500, children: "Total" }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 421,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { value: (_e = response == null ? void 0 : response.estimation) == null ? void 0 : _e.final }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 422,
                columnNumber: 62
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 422,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 420,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Divider, {}, void 0, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 424,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Button, { variant: "filled", onClick: addToCart, children: "Proceed to payment" }, void 0, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 425,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 405,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 404,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 428,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { children: "Forgot something?" }, void 0, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 430,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Button, { variant: "outline", onClick: addToCart, children: "Checkout Later" }, void 0, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 431,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 429,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 401,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 383,
        columnNumber: 108
      }, this);
    } }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 382,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 381,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Group, { gap: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Loader, { color: "gray", type: "dots" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 437,
        columnNumber: 39
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { children: "Complete the above steps to estimate the cost." }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 437,
        columnNumber: 74
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 437,
      columnNumber: 23
    }, this);
  }
}, cart_add_vendorServiceGroupId_default = Page.Index;

// app/routes/partner.signup.onboard._index.tsx
var partner_signup_onboard_index_exports = {};
__export(partner_signup_onboard_index_exports, {
  action: () => action4,
  default: () => partner_signup_onboard_index_default,
  loader: () => loader5
});
var import_core13 = require("@mantine/core"), import_node5 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_react19 = require("react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function action4(args) {
  var _a, _b, _c, _d, _e;
  let form = await args.request.formData(), fullName = (_a = form.get("fullName")) == null ? void 0 : _a.toString(), email = (_b = form.get("email")) == null ? void 0 : _b.toString(), mobileNumber = (_c = form.get("phone")) == null ? void 0 : _c.toString(), actionType = (_d = form.get("actionType")) == null ? void 0 : _d.toString(), portfolio = form.getAll("portfolio"), socialUrl = (_e = form.get("socialUrl")) == null ? void 0 : _e.toString();
  try {
    switch (actionType) {
      case "signup":
        if (fullName && email && mobileNumber) {
          let usernameAccepted = !0, username = username_transformer_default(fullName), newUsername = username, usernameSeq = 0;
          do
            await db.vendor.count({
              where: {
                username: newUsername
              }
            }) > 0 ? (usernameAccepted = !1, usernameSeq++, newUsername = username + usernameSeq) : usernameAccepted = !0;
          while (!usernameAccepted);
          let data = await VendorQuery.Signup({
            fullName,
            mobileNumber,
            email,
            username: newUsername,
            socialUrl
          });
          await db.vendorPortfolio.createMany({
            data: portfolio == null ? void 0 : portfolio.map((x) => ({
              id: generateUuid(),
              vendorId: data.id,
              fileName: x.toString(),
              fileType: "img"
            }))
          });
          let currentVendor = data.id;
          return (0, import_node5.redirect)("/partner/signup/onboard/" + data.id, {
            headers: {
              "Set-Cookie": await vendorSignupCookie.serialize(currentVendor)
            }
          });
        }
        break;
    }
  } catch {
  }
  return !1;
}
async function loader5(args) {
  let cookieHeader = args.request.headers.get("Cookie"), currentVendor = await vendorSignupCookie.parse(cookieHeader);
  return currentVendor ? (0, import_node5.redirect)("/partner/signup/onboard/" + currentVendor) : null;
}
var Onboard = {
  Index: () => {
    let location = (0, import_react18.useLocation)(), [files, setFiles] = (0, import_react19.useState)([]);
    function previewFile(file) {
      setFiles(files.concat(file));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react18.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid, { gutter: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Title, { order: 3, children: "Sign up as vendor" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 102,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Input.Wrapper, { label: "Full Name*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Input, { name: "fullName", placeholder: "Enter your full name.", required: !0 }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 104,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 103,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Input.Wrapper, { label: "Email*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Input, { name: "email", placeholder: "Enter your email for communication purpose.", required: !0, type: "email" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 107,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 106,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Input.Wrapper, { label: "Phone*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Input, { name: "phone", placeholder: "Enter your contact number for communication purpose.", required: !0 }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 110,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 109,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { fw: 500, children: "Portfolio*" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 113,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { c: "dimmed", children: "Add atleast ten of your best works." }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 114,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FileUploader_default, { buttonType: "default", id: "GUEST", label: "Choose file", path: PATH.GUEST_FILE_UPLOAD, onUpload: (v) => previewFile(v) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 115,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 116,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Flex, { style: { marginTop: "10px" }, children: files.map((img) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Image, { src: PATH.RESOURCE_URL + img, width: 100 }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard._index.tsx",
            lineNumber: 120,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "portfolio", value: img }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard._index.tsx",
            lineNumber: 121,
            columnNumber: 45
          }, this)
        ] }, img, !0, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 119,
          columnNumber: 58
        }, this)) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 117,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 112,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { fw: 500, children: "Social media url" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 127,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Input, { name: "socialUrl", type: "url", required: !0 }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 128,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 126,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Button, { variant: "filled", radius: "xl", loading: location.state === "submitting", type: "submit", name: "actionType", value: "signup", children: "Sign up as vendor" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 131,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 130,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 101,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 100,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 99,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 97,
      columnNumber: 16
    }, this);
  }
}, partner_signup_onboard_index_default = Onboard.Index;

// app/routes/collections.$id.$highlight.tsx
var collections_id_highlight_exports = {};
__export(collections_id_highlight_exports, {
  default: () => collections_id_highlight_default,
  loader: () => loader6
});
var import_core14 = require("@mantine/core"), import_node6 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_react21 = require("react");

// app/service/collections.service.ts
function getCollectionByType(type, vendorTypeKey) {
  return new Promise(function(resovle) {
    db.serviceGroupType.findFirst({
      where: {
        keyName: type
      },
      select: {
        name: !0,
        ServiceGroup: {
          where: {
            vendorType: {
              keyName: vendorTypeKey
            }
          },
          select: {
            id: !0,
            name: !0,
            imageName: !0,
            vendorType: {
              select: {
                name: !0
              }
            },
            serviceGroupItem: {
              select: {
                service: {
                  select: {
                    name: !0
                  }
                }
              },
              where: {
                isOptional: !1
              },
              orderBy: {
                position: "asc"
              },
              take: 5
            }
          }
        }
      }
    }).then((r) => {
      if (!r) {
        resovle(null);
        return;
      }
      resovle({
        name: r == null ? void 0 : r.name,
        services: r == null ? void 0 : r.ServiceGroup.map((service) => ({
          name: service.name,
          id: service.id,
          imageName: service.imageName ? PATH.RESOURCE_URL + service.imageName : PATH.FALLBACK_IMG,
          description: service.serviceGroupItem.map((x) => {
            var _a;
            return (_a = x.service.name) == null ? void 0 : _a.toLocaleLowerCase();
          })
        })),
        vendorType: r == null ? void 0 : r.ServiceGroup[0].vendorType.name
      });
    });
  });
}
function getRelatedCollectionByType(type, vendorTypeKey) {
  return new Promise(function(resovle) {
    db.serviceGroupType.findFirst({
      where: {
        keyName: type
      },
      select: {
        name: !0,
        ServiceGroup: {
          where: {
            vendorType: {
              NOT: {
                keyName: vendorTypeKey
              }
            }
          },
          select: {
            id: !0,
            name: !0,
            imageName: !0,
            vendorType: {
              select: {
                keyName: !0,
                name: !0
              }
            }
          }
        }
      }
    }).then((r) => {
      if (!r) {
        resovle([]);
        return;
      }
      resovle(r == null ? void 0 : r.ServiceGroup.map((service) => ({
        name: service.name,
        id: service.id,
        imageName: service.imageName ? PATH.RESOURCE_URL + service.imageName : PATH.FALLBACK_IMG,
        vendorType: service.vendorType
      })));
    });
  });
}
function getServicesGroupsByCollection(keyName) {
  return new Promise(function(resolve) {
    if (!keyName) {
      resolve([]);
      return;
    }
    db.vendorType.findMany({
      select: {
        name: !0,
        keyName: !0,
        serviceGroup: {
          orderBy: {
            name: "asc"
          },
          where: {
            serviceGroupType: {
              keyName
            }
          },
          select: {
            name: !0,
            id: !0,
            imageName: !0,
            serviceGroupItem: {
              take: 4,
              select: {
                service: {
                  select: {
                    name: !0
                  }
                }
              }
            },
            VendorServiceGroup: {
              take: 1,
              orderBy: {
                cost: "asc"
              },
              select: {
                cost: !0
              }
            }
          }
        }
      },
      where: {
        serviceGroup: {
          some: {
            serviceGroupType: {
              keyName
            }
          }
        }
      }
    }).then((r) => {
      resolve(r);
    });
  });
}
function getCollectionInfo(keyName) {
  return new Promise(function(resolve) {
    db.serviceGroupType.findFirstOrThrow({
      where: {
        keyName
      },
      select: {
        name: !0,
        description: !0
      }
    }).then((r) => {
      resolve(r);
    });
  });
}
var CollectionService = {
  getCollectionByType,
  getRelatedCollectionByType,
  getServicesGroupsByCollection,
  getCollectionInfo
}, collections_service_default = CollectionService;

// app/routes/collections.$id.$highlight.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function loader6(args) {
  let collectionKey = args.params.id, highlightId = args.params.highlight;
  if (!collectionKey || !highlightId)
    return null;
  let data = collections_service_default.getCollectionByType(collectionKey, highlightId), related = collections_service_default.getRelatedCollectionByType(collectionKey, highlightId), topRatedVendors = VendorQuery.topRatedVendorsByType(highlightId);
  return (0, import_node6.defer)({
    data,
    related,
    topRatedVendors,
    highlightId,
    collectionKey
  });
}
var CollectionsHighlightPage = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Container, { size: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CollectionsHighlightPage.Highlight, {}, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { paddingBottom: "50px" } }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid, { gutter: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: { base: 12, md: 8 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CollectionsHighlightPage.RelatedServices, {}, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { paddingBottom: "60px" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CollectionsHighlightPage.TopVendors, {}, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: { base: 12, md: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CollectionsHighlightPage.OtherServices, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 33,
    columnNumber: 16
  }, this),
  Highlight: () => {
    let data = (0, import_react20.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react21.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 52,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Await, { resolve: data == null ? void 0 : data.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 2, children: [
        "Explore everything under ",
        response == null ? void 0 : response.name,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 55,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { paddingBottom: "20px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 3, children: [
        "Book ",
        response == null ? void 0 : response.vendorType
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { paddingBottom: "20px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 58,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid, { gutter: 40, children: response == null ? void 0 : response.services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: { base: 6, md: 3 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Link, { to: routes_data_default.ServiceGroup.replace(":id", (data == null ? void 0 : data.highlightId) || "").replace(":subId", service.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Image, { src: service.imageName, style: { borderRadius: "12px", boxShadow: "0 20px 40px #d3d3d3" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 61,
          columnNumber: 134
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 61,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { paddingBottom: "20px" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 62,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Link, { to: routes_data_default.ServiceGroup.replace(":id", (data == null ? void 0 : data.highlightId) || "").replace(":subId", service.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 5, children: service.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 64,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 63,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { style: { paddingLeft: "14px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { children: "Includes:" }, void 0, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 67,
            columnNumber: 37
          }, this),
          service.description.map((description, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { children: [
            description,
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 69,
            columnNumber: 41
          }, this) }, "d-" + key, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 68,
            columnNumber: 84
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 66,
          columnNumber: 33
        }, this)
      ] }, service.id, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 60,
        columnNumber: 64
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 54,
      columnNumber: 34
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 51,
      columnNumber: 16
    }, this);
  },
  RelatedServices: () => {
    let data = (0, import_react20.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 3, children: "Frequently bought together" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { paddingBottom: "30px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react21.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 85,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Await, { resolve: data == null ? void 0 : data.related, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid, { gutter: 40, children: response == null ? void 0 : response.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: { base: 6, md: 3 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Link, { to: routes_data_default.ServiceGroup.replace(":id", service.vendorType.keyName || "").replace(":subId", service.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Image, { src: service.imageName, style: { borderRadius: "5px" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 89,
          columnNumber: 139
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { paddingBottom: "14px" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { c: "dimmed", children: service.vendorType.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 91,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Link, { to: routes_data_default.ServiceGroup.replace(":id", service.vendorType.keyName || "").replace(":subId", service.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 5, children: service.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 93,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 92,
          columnNumber: 29
        }, this)
      ] }, service.id, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 88,
        columnNumber: 51
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 87,
        columnNumber: 34
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 86,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 82,
      columnNumber: 16
    }, this);
  },
  TopVendors: () => {
    let data = (0, import_react20.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 4, children: "Top Rated" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { paddingBottom: "20px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react21.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 108,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Await, { resolve: data == null ? void 0 : data.topRatedVendors, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Stack, { gap: "lg", children: [
        response == null ? void 0 : response.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid, { gutter: 20, align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: { md: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Link, { to: routes_data_default.VendorProfile.replace(":id", item.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Avatar, { src: item.image, size: "lg" }, void 0, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 114,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 113,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 112,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react20.Link, { to: routes_data_default.VendorProfile.replace(":id", item.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 5, children: item.name }, void 0, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 118,
            columnNumber: 89
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 118,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 117,
            columnNumber: 29
          }, this)
        ] }, item.id, !0, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 111,
          columnNumber: 48
        }, this)),
        !(response != null && response.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { children: "Sorry, we couldn't find any vendors under this category." }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 121,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 110,
        columnNumber: 34
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 105,
      columnNumber: 16
    }, this);
  },
  OtherServices: () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 4, children: "Also try" }, void 0, !1, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 130,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 128,
    columnNumber: 16
  }, this)
}, collections_id_highlight_default = CollectionsHighlightPage.Index;

// app/routes/profile.$user.portfolio.tsx
var profile_user_portfolio_exports = {};
__export(profile_user_portfolio_exports, {
  default: () => Portfolio,
  loader: () => loader7
});
var import_core15 = require("@mantine/core"), import_react22 = require("@remix-run/react"), import_react_masonry_css = __toESM(require("react-masonry-css")), import_react_photo_view2 = require("react-photo-view"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function loader7({ params }) {
  let id = params.user;
  return {
    portfolio: [
      "https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio1-min.png",
      "https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio2-min.png",
      "https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio3-min.png",
      "https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio4-min.png",
      "https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio5-min.png",
      "https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio6-min.png",
      "https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio7-min.png"
    ]
  };
}
function Portfolio() {
  var _a;
  let data = (0, import_react22.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Stack, { gap: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid, { justify: "space-between", align: "middle", gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Title, { order: 2, children: "Our amazing work" }, void 0, !1, {
        fileName: "app/routes/profile.$user.portfolio.tsx",
        lineNumber: 30,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.portfolio.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { children: "We offer versatile templates that can be used by individuals and companies looking for a simple one page template." }, void 0, !1, {
        fileName: "app/routes/profile.$user.portfolio.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_photo_view2.PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_masonry_css.default, { className: "masonry-grid", columnClassName: "masonry-grid_column", breakpointCols: { 350: 2, 750: 3, 900: 3 }, children: (_a = data.portfolio) == null ? void 0 : _a.map((image, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_photo_view2.PhotoView, { src: image, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "cursor-pointer", src: image }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 37,
      columnNumber: 29
    }, this) }, "thumb" + key, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 36,
      columnNumber: 62
    }, this)) }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.$user.portfolio.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.$user.portfolio.tsx",
    lineNumber: 27,
    columnNumber: 12
  }, this);
}

// app/routes/collections.$id._index.tsx
var collections_id_index_exports = {};
__export(collections_id_index_exports, {
  default: () => collections_id_index_default,
  loader: () => loader8
});
var import_core16 = require("@mantine/core"), import_node7 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_react24 = require("react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function loader8(args) {
  let id = args.params.id;
  if (!id)
    throw "error";
  let results = collections_service_default.getServicesGroupsByCollection(id);
  return (0, import_node7.defer)({
    data: collections_service_default.getCollectionInfo(id),
    results
  });
}
var CollectionsPage = {
  Index: () => [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CollectionsPage.Header, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CollectionsPage.Section, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ],
  Header: () => {
    let data = (0, import_react23.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Container, { size: "xl", style: { paddingBottom: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "section-bg-pattern _pattern-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: 8, style: { padding: "20px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react24.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 43,
        columnNumber: 45
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react23.Await, { resolve: data.data, children: (result) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 5, children: "The easiest way to find" }, void 0, !1, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 46,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 3, children: [
          "Services in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "_color-primary", children: result.name }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 47,
            columnNumber: 66
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 47,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { size: "sm", children: "By bringing together ambitious and talented professionals with AI, we are making your work easier." }, void 0, !1, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 48,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Flex, { gap: "md", align: "center", style: { paddingTop: "30px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { c: "dimmed", children: "See how it works" }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 50,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Button, { radius: "xl", variant: "outline", children: "Watch Video" }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 51,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 49,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 45,
        columnNumber: 44
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 44,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: 3, style: { overflow: "hidden", marginBottom: "-40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { src: "/assets/art-1.png" }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 58,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 39,
      columnNumber: 16
    }, this);
  },
  Section: () => {
    let data = (0, import_react23.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react24.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 68,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react23.Await, { resolve: data.results, children: (result) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Tabs, { defaultValue: "0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Tabs.List, { children: result.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Tabs.Tab, { value: "" + i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 5, children: item.name }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 72,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 72,
        columnNumber: 54
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 71,
        columnNumber: 25
      }, this),
      result.map(
        (item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Tabs.Panel, { value: "" + i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid, { gutter: 40, style: { padding: "40px 0" }, children: [
          item.serviceGroup.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react23.Link, { to: routes_data_default.ServiceGroup.replace(":id", item.keyName || "").replace(":subId", service.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { borderRadius: "10px", background: "#F5F5F7", padding: "12px", boxShadow: "0 2px 4px #d3d3d3" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Image, { src: service.imageName ? PATH.RESOURCE_URL + service.imageName : "", style: { borderRadius: "6px", maxHeight: "140px", objectFit: "cover" }, width: "100%" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 78,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { paddingBottom: "20px" } }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 79,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react23.Link, { to: routes_data_default.ServiceGroup.replace(":id", item.keyName || "").replace(":subId", service.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 5, children: service.name }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 81,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 80,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { fw: 500, c: "dimmed", children: "Includes" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 83,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: service.serviceGroupItem.map((description, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { fw: 500, c: "dimmed", children: [
              description.service.name,
              "."
            ] }, void 0, !0, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 86,
              columnNumber: 49
            }, this) }, "d-" + key, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 85,
              columnNumber: 97
            }, this)) }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 84,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { marginTop: "10px", height: "26px" }, children: service.VendorServiceGroup.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { borderTop: "1px solid #ddd", paddingTop: "4px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Flex, { gap: "sm", align: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { size: "sm", children: "Starts from" }, void 0, !1, {
                fileName: "app/routes/collections.$id._index.tsx",
                lineNumber: 90,
                columnNumber: 180
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Badge, { color: "yellow", children: [
                "\u20B9",
                service.VendorServiceGroup[0].cost
              ] }, void 0, !0, {
                fileName: "app/routes/collections.$id._index.tsx",
                lineNumber: 90,
                columnNumber: 214
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 90,
              columnNumber: 146
            }, this) }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 90,
              columnNumber: 82
            }, this) : "" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 89,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 77,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 76,
            columnNumber: 121
          }, this) }, service.id, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 76,
            columnNumber: 67
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Divider, {}, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 97,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 96,
            columnNumber: 33
          }, this)
        ] }, item.keyName, !0, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 75,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 74,
          columnNumber: 50
        }, this)
      )
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 70,
      columnNumber: 32
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 67,
      columnNumber: 16
    }, this);
  }
}, collections_id_index_default = CollectionsPage.Index;

// app/routes/partner.signup._index.tsx
var partner_signup_index_exports = {};
__export(partner_signup_index_exports, {
  action: () => action5,
  default: () => partner_signup_index_default,
  loader: () => loader9,
  meta: () => meta
});
var import_icons = require("@ant-design/icons"), import_core17 = require("@mantine/core"), import_react25 = require("@remix-run/react"), import_react26 = require("react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
async function action5(args) {
  var _a, _b, _c, _d, _e;
  let formData = await args.request.formData(), fullName = (_a = formData.get("fullName")) == null ? void 0 : _a.toString(), socialUrl = (_b = formData.get("socialUrl")) == null ? void 0 : _b.toString(), mobileNumber = (_c = formData.get("phone")) == null ? void 0 : _c.toString(), email = (_d = formData.get("email")) == null ? void 0 : _d.toString(), category = (_e = formData.get("category")) == null ? void 0 : _e.toString();
  if (!fullName || !mobileNumber || !email || !socialUrl || !category)
    return !1;
  try {
    await db.memberRequest.create({
      data: {
        id: generateUuid(),
        fullName,
        email,
        mobileNumber,
        socialUrl,
        category
      }
    });
  } catch {
    return !1;
  }
  return !0;
}
async function loader9({ params }) {
  return null;
}
var meta = () => [
  { title: "Join as a service professional" },
  { name: "description", content: "Celebria Collective Partner" }
], jumbotronStyle = {
  background: "url(https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/slider-slide-2-1920x980.jpg) no-repeat center",
  minHeight: "500px",
  padding: "100px 20px",
  borderRadius: "20px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}, VendorList = [
  {
    background: "linear-gradient(180deg, #03DBCB, #047DA6)",
    id: "photographer",
    name: "Photographer",
    title: "Photographer?",
    description: "Counting objects: 5, done. Delta compression using up to 4 threads.",
    img: "/assets/vendor-card-1.svg"
  },
  {
    background: "linear-gradient(180deg, #681ACB, #4549E5)",
    id: "video",
    name: "Videographer",
    title: "Videographer?",
    description: "Counting objects: 5, done. Delta compression using up to 4 threads.",
    img: "/assets/vendor-card-2.svg"
  },
  {
    background: "linear-gradient(185deg, #AF6316,#C27B15)",
    id: "makep",
    name: "Makeup Artist",
    title: "Makeup?",
    description: "Counting objects: 5, done. Delta compression using up to 4 threads.",
    img: "/assets/vendor-card-3.svg"
  }
];
function scroll(elmId) {
  setTimeout(function() {
    let element = document.getElementById(elmId);
    element && element.scrollIntoView({ behavior: "smooth" });
  }, 1e3);
}
var PartnerSignup = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Stack, { gap: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PartnerSignup.Jumbotron, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PartnerSignup.Counter, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PartnerSignup.Intro, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PartnerSignup.Features, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PartnerSignup.Form, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 105,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 104,
    columnNumber: 7
  }, this),
  Jumbotron: () => {
    function buttonClick(e) {
      scroll("signup-form");
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: jumbotronStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Stack, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 1, style: { color: "white" }, children: "Earn upto 3 times your current income and change your life." }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 3, children: "Become a part of a community with more than 50,000 service professionals" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 127,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 131,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_core17.Button,
        {
          variant: "filled",
          size: "lg",
          radius: "xl",
          onClick: buttonClick,
          children: "Join Us"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 133,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 123,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this);
  },
  Counter: () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { padding: "50px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid, { justify: "center", gutter: 40, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: { base: 4, md: 3 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { children: "50+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 4, children: "Members" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 152,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: { base: 4, md: 3 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { children: "500+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 157,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 4, children: "Customers" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 156,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: { base: 4, md: 3 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { children: "500+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 161,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 4, children: "Services" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 162,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 160,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 151,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 150,
    columnNumber: 7
  }, this),
  Intro: () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid, { justify: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "line" }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 173,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: 12 }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 175,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { className: "_text-center", span: { base: 12, md: 10, lg: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { padding: "50px 0" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 2, children: [
        " ",
        "Lorem ipsum dolor sit amet"
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Text, { c: "dimmed", children: "Celebria Collective is more than just a platform; it's a launchpad for photographers, makeup artists, videographers, and fashion designers looking to scale their business and amplify their artistic influence. Ready to elevate your craft and take your business to\xA0the\xA0next\xA0level?" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 177,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 171,
    columnNumber: 7
  }, this),
  Features: () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    "div",
    {
      className: "_rounded",
      style: { background: "#f8f8f8", padding: "20px" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid, { justify: "center", align: "center", gutter: 40, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_core17.Image,
          {
            src: "https://www.christianfarmers.org/media/nwmnklrp/farmers-market.jpg",
            className: "_rounded",
            width: "100%"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 203,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 2, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 210,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { style: { color: "var( --ui-color-primary)" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_icons.FundOutlined, {}, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 215,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 214,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { flex: "auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 4, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 220,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Text, { c: "dimmed", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 223,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 219,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 213,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 197,
      columnNumber: 7
    },
    this
  ),
  Form: () => {
    let [activeCard, setActiveCard] = (0, import_react26.useState)(null);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid, { id: "signup-form", gutter: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { paddingTop: "50px", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 1, children: "Join us in the following categories" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 244,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 243,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, this),
      VendorList.map((vendor) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: { base: 12, lg: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_core17.Card,
        {
          style: {
            background: vendor.background,
            color: "#fff",
            width: "100%",
            borderRadius: "8px"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              import_core17.Image,
              {
                src: vendor.img,
                style: { padding: "50px", height: "300px" }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 260,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 259,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { marginTop: "-10px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Stack, { gap: "lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { style: { color: "white" }, order: 2, children: vendor.title }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 267,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { style: { color: "white" }, order: 4, children: vendor.description }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 270,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                import_core17.Button,
                {
                  radius: "xl",
                  variant: "filled",
                  size: "large",
                  onClick: () => setActiveCard(vendor.id),
                  children: "Signup"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/partner.signup._index.tsx",
                  lineNumber: 273,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 266,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 265,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 251,
          columnNumber: 13
        },
        this
      ) }, vendor.id, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        PartnerSignup.SignupForm,
        {
          type: activeCard,
          onClose: () => setActiveCard(null)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 286,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 241,
      columnNumber: 7
    }, this);
  },
  SignupForm: ({
    type,
    onClose
  }) => {
    let fetcher = (0, import_react25.useFetcher)(), [formSubmitted, setFormSubmitted] = (0, import_react26.useState)(!1);
    function customClose() {
      setFormSubmitted(!1), onClose();
    }
    function submitHandler(e) {
      e.preventDefault();
      let formData = new FormData(e.currentTarget);
      fetcher.submit(formData, { method: "POST" }), setFormSubmitted(!0);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_core17.Modal,
      {
        opened: !!type,
        onClose,
        title: "Register as a professional",
        children: formSubmitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(() => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Stack, { align: "center", justify: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 3, children: "Thank you for your interest" }, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 326,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Text, { size: "sm", children: "Our representative will contact you soon." }, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 327,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Button, { onClick: customClose, children: "Close" }, "buy", !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 328,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 325,
          columnNumber: 9
        }, this), {}, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 388,
          columnNumber: 26
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(() => type ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(fetcher.Form, { onSubmit: submitHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid, { gutter: 10, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 5, children: "I'm a" }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 340,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Group, { defaultValue: type, children: VendorList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Radio, { value: item.id, name: "type", children: item.name }, item.id, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 343,
              columnNumber: 19
            }, this)) }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 341,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: 12, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 5, children: "Full Name" }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 350,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              import_core17.Input,
              {
                name: "fullName",
                placeholder: "Enter your full name",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 351,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 349,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: 12, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 5, children: "Contact Number" }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 358,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Input, { name: "phone", leftSection: "+91", maxLength: 10, required: !0 }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 359,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 357,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: 12, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 5, children: "Email" }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 362,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Input, { name: "email", type: "email", required: !0 }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 363,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 361,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: 12, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 5, children: "Social media url" }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 366,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Input, { name: "socialUrl", type: "url", required: !0 }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 367,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 365,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Grid.Col, { span: 12, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { type: "hidden", name: "category", value: type }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 370,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Button, { variant: "filled", radius: "xl", type: "submit", children: "Submit" }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 371,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 369,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 338,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 337,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, {}, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 378,
          columnNumber: 9
        }, this), {}, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 388,
          columnNumber: 47
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 383,
        columnNumber: 7
      },
      this
    );
  }
}, partner_signup_index_default = PartnerSignup.Index;

// app/routes/profile.$user._index.tsx
var profile_user_index_exports = {};
__export(profile_user_index_exports, {
  action: () => action6,
  default: () => profile_user_index_default,
  loader: () => loader10
});
var import_core18 = require("@mantine/core"), import_node8 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_react28 = require("react"), import_react_masonry_css2 = __toESM(require("react-masonry-css")), import_react_photo_view3 = require("react-photo-view");
var import_react_insta_stories = __toESM(require("react-insta-stories")), import_pure_react_carousel = require("pure-react-carousel");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
async function action6(args) {
  var _a, _b;
  let username = args.params.user;
  if (!username)
    return;
  let form = await args.request.formData();
  switch ((_a = form.get("actionType")) == null ? void 0 : _a.valueOf()) {
    case "STORIES" /* STORIES */:
      let albumId = ((_b = form.get("albumId")) == null ? void 0 : _b.toString()) || null;
      return await VendorQuery.portfolioByAlbumId({
        username,
        albumId
      });
  }
}
async function loader10({ params }) {
  let username = params.user;
  username || new Error("404");
  let portfolio = new Promise(function(resolve) {
    db.vendorPortfolio.findMany({
      select: {
        fileName: !0,
        fileType: !0
      },
      where: {
        vendor: {
          username
        }
      },
      take: 8
    }).then((r) => {
      resolve(r.map((x) => x.fileName ? PATH.RESOURCE_URL + x.fileName : ""));
    });
  }), services = new Promise(function(resolve) {
    db.vendorServiceGroup.findMany({
      take: 3,
      select: {
        group: {
          select: {
            name: !0,
            description: !0
          }
        },
        cost: !0
      },
      where: {
        vendor: {
          username
        }
      }
    }).then((r) => {
      resolve(r.map((x) => ({ name: x.group.name, description: "Starts from: \u20B9" + x.cost })));
    });
  }), stories = new Promise(function(resolve) {
    VendorQuery.Stories(username).then((r) => resolve(r));
  });
  return (0, import_node8.defer)({
    username,
    portfolio,
    services,
    stories
  });
}
var viewAllProjectsStyles = { display: "flex", justifyContent: "center", overflow: "hidden", height: "50px", position: "relative", boxShadow: "0px -40px 30px #fff" };
var ProfileHome = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: "Stories" }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 127,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Space, { h: "sm" }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 128,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ProfileHome.Stories, {}, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 130,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Card, { shadow: "sm", padding: "lg", radius: "md", withBorder: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { gap: 0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 700, children: "50+" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 133,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { c: "dimmed", children: "Happy clients" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 134,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 132,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 136,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Divider, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { children: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 141,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 140,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ProfileHome.Services, {}, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 144,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 143,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 139,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 148,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 150,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ProfileHome.Gallery, {}, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 151,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.$user._index.tsx",
    lineNumber: 126,
    columnNumber: 16
  }, this),
  Stories: () => {
    let data = (0, import_react27.useLoaderData)(), fetcher = (0, import_react27.useFetcher)(), [isMobile, setMobile] = (0, import_react28.useState)(!1), [stories, setStories] = (0, import_react28.useState)([]);
    (0, import_react28.useEffect)(() => {
      setMobile((window == null ? void 0 : window.innerWidth) < 600);
    }, []), (0, import_react28.useEffect)(() => {
      var _a;
      let list = ((_a = fetcher.data) == null ? void 0 : _a.map((x) => ({ url: PATH.RESOURCE_URL + x.fileName }))) || [];
      setStories(list);
    }, [fetcher == null ? void 0 : fetcher.data]);
    function loadStories(id) {
      fetcher.submit({
        actionType: "STORIES" /* STORIES */,
        albumId: id || ""
      }, {
        method: "post"
      });
    }
    function sliderCount() {
      return isMobile ? 3 : 5;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react28.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 182,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react27.Await, { resolve: data.stories, children: (album) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        import_pure_react_carousel.CarouselProvider,
        {
          naturalSlideWidth: 300,
          naturalSlideHeight: 400,
          totalSlides: album.length,
          visibleSlides: sliderCount(),
          isIntrinsicHeight: !0,
          step: sliderCount(),
          dragStep: sliderCount(),
          className: "carousel-slider-wrapper",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_pure_react_carousel.Slider, { children: album == null ? void 0 : album.map((item, i) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_pure_react_carousel.Slide, { index: i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: { borderRadius: "3px", overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "story-block", onClick: () => loadStories(item.serviceGroupId), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: { position: "relative", cursor: "pointer" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Image, { visibleFrom: "md", w: "100%", h: (0, import_core18.px)("15rem"), radius: "xs", src: PATH.RESOURCE_URL + item.fileName, fit: "cover" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 200,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Image, { hiddenFrom: "md", w: "100%", h: (0, import_core18.px)("10rem"), radius: "xs", src: PATH.RESOURCE_URL + item.fileName, fit: "cover" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 201,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                import_core18.Overlay,
                {
                  gradient: "linear-gradient(45deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",
                  opacity: 0.85,
                  p: isMobile ? "xs" : "md",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { align: "end", h: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, c: "white", children: ((_a = item.serviceGroup) == null ? void 0 : _a.name) || "Highlights" }, void 0, !1, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 208,
                    columnNumber: 57
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 207,
                    columnNumber: 53
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/profile.$user._index.tsx",
                  lineNumber: 202,
                  columnNumber: 49
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 199,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 198,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 197,
              columnNumber: 37
            }, this) }, "s" + item.serviceGroupId, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 196,
              columnNumber: 58
            }, this);
          }) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 195,
            columnNumber: 29
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 185,
          columnNumber: 34
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 183,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Modal.Root, { opened: !!stories.length, onClose: () => setStories([]), p: 0, centered: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Modal.Overlay, {}, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 236,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Modal.Content, { p: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Modal.Body, { p: 0, children: stories.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          import_react_insta_stories.default,
          {
            stories,
            defaultInterval: 1500,
            width: "inherit",
            height: "80vh"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 239,
            columnNumber: 43
          },
          this
        ) : "Nothing to display" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 238,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 237,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 235,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 181,
      columnNumber: 16
    }, this);
  },
  Services: () => {
    let data = (0, import_react27.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 700, children: "Popular Services" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 255,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react28.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 256,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react27.Await, { resolve: data.services, children: (services) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { children: services.map(
        (x, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Group, { gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { children: x.name }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 261,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { c: "dimmed", size: "sm", children: x.description }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 262,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 260,
          columnNumber: 53
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 259,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 257,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 256,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 253,
      columnNumber: 16
    }, this);
  },
  Gallery: () => {
    let data = (0, import_react27.useLoaderData)(), navigate = (0, import_react27.useNavigate)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { justify: "space-between", align: "middle", gutter: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 5, children: "Best works" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 277,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 277,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { variant: "subtle", radius: "xl", onClick: () => navigate("portfolio"), children: "See all" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 279,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 278,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 276,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react_photo_view3.PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react28.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 286,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react27.Await, { resolve: data.portfolio, children: (portfolio) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react_masonry_css2.default, { className: "masonry-grid", columnClassName: "masonry-grid_column", breakpointCols: 3, children: portfolio == null ? void 0 : portfolio.map((image, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react_photo_view3.PhotoView, { src: image, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", { src: image, className: "cursor-pointer" }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 290,
            columnNumber: 37
          }, this) }, "thumb" + key, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 289,
            columnNumber: 156
          }, this)) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 289,
            columnNumber: 33
          }, this),
          portfolio.length ? "" : "Sorry, This profile doesnt contains any works to display"
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 288,
          columnNumber: 43
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 287,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 286,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 285,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: viewAllProjectsStyles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { variant: "outline", size: "xs", radius: "xl", onClick: () => navigate("portfolio"), children: "See all" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 300,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 299,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 284,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 275,
      columnNumber: 16
    }, this);
  },
  Testimonials: () => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 2, style: { textAlign: "center" }, children: "Testimonials" }, void 0, !1, {
    fileName: "app/routes/profile.$user._index.tsx",
    lineNumber: 309,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.$user._index.tsx",
    lineNumber: 308,
    columnNumber: 16
  }, this)
}, profile_user_index_default = ProfileHome.Index;

// app/routes/_auth.user.order.$id.tsx
var auth_user_order_id_exports = {};
__export(auth_user_order_id_exports, {
  action: () => action7,
  default: () => auth_user_order_id_default,
  loader: () => loader11
});
var import_icons2 = require("@ant-design/icons"), import_client5 = require("@prisma/client"), import_node9 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), import_antd = require("antd"), import_react30 = require("react");

// app/utils/date.transform.ts
var import_dayjs2 = __toESM(require("dayjs")), DateFormatter = {
  short: (date) => (0, import_dayjs2.default)(date).format("MMM DD, YYYY"),
  time: (date) => (0, import_dayjs2.default)(date).format("hh:mm A")
};

// app/routes/_auth.user.order.$id.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), { Title: Title14, Text: Text11 } = import_antd.Typography;
async function action7(args) {
  var _a, _b;
  let formData = args.request.formData(), _action = (_a = (await formData).get("action")) == null ? void 0 : _a.toString(), id = (_b = (await formData).get("id")) == null ? void 0 : _b.toString();
  if (!id)
    return !1;
  switch (console.log(_action, id), _action) {
    case "cancel":
      await db.booking.update({
        where: {
          id
        },
        data: {
          status: import_client5.BookingStatus.CANCELLED
        }
      }), await db.bookingService.updateMany({
        where: {
          bookingId: id
        },
        data: {
          status: import_client5.BookingStatus.CANCELLED
        }
      });
      break;
  }
  return !0;
}
async function loader11({ request, params }) {
  let orderId = params.id, userId = (await getSession(request.headers.get("Cookie"))).get(USER_SESSION_KEY), data = new Promise(function(resolve) {
    db.booking.findFirst({
      where: {
        userId,
        orderId
      },
      select: {
        id: !0,
        orderId: !0,
        created_at: !0,
        discount: !0,
        coupon: !0,
        total: !0,
        tax: !0,
        status: !0,
        vendorServiceGroup: {
          select: {
            group: {
              select: {
                name: !0
              }
            },
            vendor: {
              select: {
                username: !0,
                profileImageName: !0,
                vendorType: {
                  select: {
                    name: !0
                  }
                }
              }
            }
          }
        },
        bookingService: {
          select: {
            id: !0,
            cost: !0,
            duration: !0,
            date: !0,
            timeHour: !0,
            status: !0,
            serviceName: !0
          }
        }
      }
    }).then((r) => {
      var _a;
      if (!r)
        resolve(null);
      else {
        let vendor = r.vendorServiceGroup.vendor;
        resolve({
          id: r == null ? void 0 : r.id,
          orderId: r.orderId,
          status: r.status,
          date: r.created_at,
          coupon: r.coupon,
          tax: r.tax,
          discount: r.discount,
          total: r.total,
          vendor: {
            username: vendor.username,
            name: vendor.username,
            jobType: ((_a = vendor.vendorType) == null ? void 0 : _a.name) || "",
            profileImg: vendor.profileImageName ? PATH.RESOURCE_URL + vendor.profileImageName : PATH.AVATAR_PLACEHOLDER
          },
          serviceGroup: {
            name: r.vendorServiceGroup.group.name
          },
          services: r.bookingService.map((x) => ({
            id: x.id,
            date: x.date,
            status: x.status,
            timeHour: x.timeHour,
            duration: x.duration,
            name: x.serviceName
          }))
        });
      }
    });
  });
  return (0, import_node9.defer)({
    data
  });
}
var bookingOptionsList = [
  {
    key: "1",
    label: "Reschedule"
  },
  {
    key: "cancel",
    label: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text11, { type: "danger", children: "Cancel" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 186,
      columnNumber: 16
    }, this)
  }
], orderStatusCheckList = [
  {
    color: "red",
    children: "Order Cancelled",
    filter: [import_client5.BookingStatus.CANCELLED]
  },
  {
    color: "red",
    children: "Sorry, Your order couldn't confirm due to unservicable.",
    filter: [import_client5.BookingStatus.REJECTED]
  },
  {
    color: "gold",
    children: "Vendors has been notified.",
    filter: [import_client5.BookingStatus.PENDING]
  },
  {
    color: "green",
    children: "Order Confirmed",
    filter: [import_client5.BookingStatus.ACCEPTED, import_client5.BookingStatus.IN_PROGRESS, import_client5.BookingStatus.COMPLETED]
  },
  {
    color: "yellow",
    children: "Service is in progress",
    filter: [import_client5.BookingStatus.IN_PROGRESS]
  },
  {
    color: "#00CCFF",
    dot: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons2.SmileOutlined, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 223,
      columnNumber: 18
    }, this),
    children: "Finished",
    filter: [import_client5.BookingStatus.COMPLETED]
  },
  {
    color: "gray",
    children: "Refund processed",
    filter: [import_client5.BookingStatus.REJECTED, import_client5.BookingStatus.CANCELLED]
  }
], UserOrderHome = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Row, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Col, { sm: 24, xs: 24, md: 16, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Title14, { level: 3, children: "Manage Booking" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 238,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(UserOrderHome.Order, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 239,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.order.$id.tsx",
    lineNumber: 237,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.user.order.$id.tsx",
    lineNumber: 236,
    columnNumber: 16
  }, this),
  Order: () => {
    let data = (0, import_react29.useLoaderData)(), [showModal, setModal] = (0, import_react30.useState)(!1), onOptionMenuClick = async ({ key }) => {
      switch (key) {
        case "cancel":
          setModal(!0);
          break;
      }
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Row, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Col, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react30.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Skeleton, { active: !0 }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 258,
      columnNumber: 37
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Await, { resolve: data.data, children: (orderData) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Row, { justify: "space-between", align: "middle", gutter: [20, 20], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Space, { size: "middle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Title14, { level: 5, children: [
              "Order ID: ",
              orderData.orderId
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.order.$id.tsx",
              lineNumber: 265,
              columnNumber: 45
            }, this),
            orderData.serviceGroup.name
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 264,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Tag, { color: StatusMarker.get(orderData.status), children: orderData.status }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 268,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 263,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 262,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Col, { children: orderData.status !== import_client5.BookingStatus.CANCELLED && orderData.status !== import_client5.BookingStatus.REJECTED && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Dropdown, { menu: { items: bookingOptionsList, onClick: onOptionMenuClick }, placement: "bottomRight", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Button, { type: "default", shape: "round", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons2.EditOutlined, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 273,
          columnNumber: 84
        }, this), size: "middle", children: "Manage" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 273,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 272,
          columnNumber: 133
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 271,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 261,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Divider, {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 280,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_antd.Timeline,
        {
          pending: orderData.status !== import_client5.BookingStatus.CANCELLED && orderData.status !== import_client5.BookingStatus.REJECTED ? "Waiting for updates..." : null,
          items: [
            {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
                "Order Placed",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/_auth.user.order.$id.tsx",
                  lineNumber: 288,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text11, { type: "secondary", children: DateFormatter.short(orderData.date) }, void 0, !1, {
                  fileName: "app/routes/_auth.user.order.$id.tsx",
                  lineNumber: 289,
                  columnNumber: 49
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.user.order.$id.tsx",
                lineNumber: 286,
                columnNumber: 55
              }, this)
            },
            ...orderStatusCheckList.filter((x) => {
              var _a;
              return (_a = x.filter) == null ? void 0 : _a.includes(orderData.status);
            })
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 282,
          columnNumber: 33
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 281,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Divider, {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 296,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.List.Item, { actions: [/* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Tooltip, { title: orderData.status === import_client5.BookingStatus.PENDING ? "Call button will enabled after the vendor confirmation" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Button, { type: "primary", shape: "round", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons2.PhoneOutlined, {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 299,
        columnNumber: 80
      }, this), size: "middle", disabled: orderData.status !== import_client5.BookingStatus.ACCEPTED, children: "Call" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 299,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 298,
        columnNumber: 54
      }, this)], children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_antd.List.Item.Meta,
        {
          avatar: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/profile/" + orderData.vendor.username, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Avatar, { src: orderData.vendor.profileImg }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 304,
            columnNumber: 100
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 304,
            columnNumber: 49
          }, this),
          title: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/profile/" + orderData.vendor.username, children: orderData.vendor.name }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 305,
            columnNumber: 48
          }, this),
          description: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Space, { direction: "vertical", size: "small", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: orderData.vendor.jobType }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 308,
            columnNumber: 49
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 307,
            columnNumber: 45
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 303,
          columnNumber: 37
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 298,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 297,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Divider, {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 314,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Typography.Text, { strong: !0, underline: !0, children: "Services" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 315,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_antd.List,
        {
          dataSource: orderData.services,
          renderItem: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Typography.Title, { level: 5, children: item.name }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id.tsx",
              lineNumber: 321,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
              "Scheduled on ",
              DateFormatter.short(item.date),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id.tsx",
                lineNumber: 324,
                columnNumber: 49
              }, this),
              " Time: ",
              item.timeHour,
              " (",
              item.duration,
              " hours)"
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.order.$id.tsx",
              lineNumber: 322,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Tag, { color: StatusMarker.get(item.status), children: item.status }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id.tsx",
              lineNumber: 326,
              columnNumber: 45
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 320,
            columnNumber: 41
          }, this) }, item.id, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 319,
            columnNumber: 37
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 316,
          columnNumber: 29
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Modal, { open: showModal, onCancel: () => setModal(!1), title: "Confirm cancellation", footer: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Form, { method: "post", action: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Typography.Text, { children: "The amount deducted will be refunded to your original payment menthod in 3-10 days." }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 333,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "hidden", value: orderData.id, name: "id" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 334,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Row, { justify: "end", style: { marginTop: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd.Button, { htmlType: "submit", danger: !0, name: "action", value: "cancel", onClick: () => setModal(!1), children: "Confirm" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 336,
          columnNumber: 46
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 336,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 335,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 332,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 331,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 260,
      columnNumber: 39
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 259,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 258,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 257,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 256,
      columnNumber: 16
    }, this);
  }
}, auth_user_order_id_default = UserOrderHome.Index;

// app/routes/services.$id.$subId.tsx
var services_id_subId_exports = {};
__export(services_id_subId_exports, {
  default: () => services_id_subId_default,
  loader: () => loader12,
  meta: () => meta2
});
var import_node10 = require("@remix-run/node"), import_react32 = require("@remix-run/react"), import_react33 = require("react");
var import_react_infinite_scroll_component = __toESM(require("react-infinite-scroll-component")), import_rxjs = require("rxjs");
var import_core20 = require("@mantine/core");

// app/components/ProfileQuickCard.tsx
var import_core19 = require("@mantine/core"), import_react31 = require("@remix-run/react"), import_react_photo_view4 = require("react-photo-view");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), itemDataThumbSetStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "4px",
  background: "#808080"
};
function ProfileQuickCard({ id, name, rating, services, tag, profileImg, portfolio, categoryId }) {
  function url() {
    return categoryId ? routes_data_default.VendorProfileWithService.replace(":id", id).replace(":sGrpId", categoryId) : routes_data_default.VendorProfile.replace(":id", id);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Grid, { gutter: 0, align: "end", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: 6 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Grid, { gutter: "md", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Grid.Col, { span: { base: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react31.Link, { to: url(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_core19.Avatar,
          {
            size: "xl",
            src: profileImg,
            style: { cursor: "pointer" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 25,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Grid.Col, { span: { base: "auto", md: 12 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Group, { gap: "sm", align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Title, { order: 4, children: name }, void 0, !1, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 34,
              columnNumber: 13
            }, this),
            tag && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Badge, { color: "green", size: "xs", children: tag }, void 0, !1, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 35,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Group, { gap: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Rating, { defaultValue: rating, fractions: 3, readOnly: !0, size: "sm" }, void 0, !1, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Text, { c: "dimmed", children: "(23 Reviews)" }, void 0, !1, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 39,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 37,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Space, { h: "sm" }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      (services == null ? void 0 : services.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Flex, { gap: "xs", wrap: "wrap", align: "center", children: [
        services.map((x, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Badge, { variant: "light", color: "gray", size: "xs", children: x }, "tag" + index, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileQuickCard.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: "auto" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Space, { h: "md" }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react_photo_view4.PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Flex, { direction: "column", gap: "xs", wrap: "wrap", mah: "240px", justify: "end", align: "end", style: { alignContent: "end" }, children: [
        portfolio == null ? void 0 : portfolio.map((imageItem, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Box, { style: i === 0 || portfolio.length % 2 == 1 && i < 2 ? { width: "200px", height: "200px" } : { width: "95px", height: "95px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react_photo_view4.PhotoView, { src: imageItem, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_core19.Image,
          {
            className: "cursor-pointer",
            style: itemDataThumbSetStyles,
            src: imageItem,
            alt: "reload to display image"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 60,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 58,
          columnNumber: 45
        }, this)),
        portfolio != null && portfolio.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, {}, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 73,
          columnNumber: 124
        }, this) : [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Box, { w: "95px", h: "95px", opacity: 0.1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { style: itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 69,
            columnNumber: 72
          }, this) }, "empty-box-1", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Box, { w: "95px", h: "95px" }, "empty-box-2", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Box, { w: "95px", h: "95px" }, "empty-box-3", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Box, { w: "95px", h: "95px", opacity: 0.3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { style: itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 72,
            columnNumber: 72
          }, this) }, "empty-box-4", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Box, { w: "95px", h: "95px", opacity: 0.2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { style: itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 73,
            columnNumber: 72
          }, this) }, "empty-box-5", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        ],
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react31.Link, { to: url(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core19.Button, { w: "95px", h: "95px", variant: "outline", children: [
          "View",
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this),
          "Profile"
        ] }, void 0, !0, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileQuickCard.tsx",
      lineNumber: 54,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProfileQuickCard.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}
var ProfileQuickCard_default = ProfileQuickCard;

// app/routes/services.$id.$subId.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), sortPanelStyles = {
  background: "var(--ui-color-accent)",
  padding: "10px 20px",
  borderRadius: "4px"
}, meta2 = () => [
  { title: "Celebria Collective" },
  { name: "description", content: "Find your Pefect vendor" }
];
async function loader12({
  request,
  params
}) {
  let pageId = params.id, categoryId = params.subId, searchParams = new URL(request.url).searchParams, page = parseInt(searchParams.get("page") || "") || 0, limit = 20, metaInfo = await db.vendorType.findFirstOrThrow({
    where: {
      keyName: pageId
    },
    select: {
      id: !0,
      name: !0,
      description: !0
    }
  }), result = new Promise(function(resolve) {
    db.vendorType.findFirstOrThrow({
      where: {
        keyName: pageId
      },
      select: {
        id: !0,
        serviceGroup: {
          where: {
            id: categoryId
          },
          select: {
            id: !0
          }
        }
      }
    }).then((res) => {
      let serviceGrpIds = res.serviceGroup.map((x) => x.id);
      (0, import_rxjs.forkJoin)({
        count: db.vendor.count({
          where: {
            isActive: !0,
            categoryId: res.id,
            VendorServiceGroup: {
              some: {
                groupId: {
                  in: serviceGrpIds
                }
              }
            }
          }
        }),
        data: db.vendor.findMany({
          skip: page * limit,
          take: limit,
          select: {
            id: !0,
            username: !0,
            profileImageName: !0,
            services: {
              select: {
                service: {
                  select: {
                    name: !0
                  }
                }
              },
              where: {
                serviceGroup: {
                  groupId: {
                    in: serviceGrpIds
                  }
                }
              },
              take: 5
            },
            vendorPortfolio: {
              select: {
                fileName: !0,
                fileType: !0
              },
              where: {
                serviceGroupId: categoryId
              },
              take: 4
            }
          },
          where: {
            categoryId: res.id,
            isActive: !0,
            VendorServiceGroup: {
              some: {
                groupId: {
                  in: serviceGrpIds
                }
              }
            }
          }
        })
      }).subscribe((r) => {
        let tag = "Popular", loadMore = page * limit + limit <= r.count;
        resolve({
          data: r.data.map((x) => ({
            id: x.username,
            name: x.username,
            portfolio: x.vendorPortfolio.map(
              (x2) => x2.fileName ? PATH.RESOURCE_URL + x2.fileName : ""
            ),
            rating: 4,
            tag,
            profileImg: x.profileImageName ? PATH.RESOURCE_URL + x.profileImageName : PATH.AVATAR_PLACEHOLDER,
            services: x.services.map((x2) => x2.service.name)
          })),
          loadMore
        });
      });
    });
  }), data = new Promise(function(resolve) {
    db.serviceGroup.findFirst({
      where: {
        id: categoryId
      },
      select: {
        name: !0
      }
    }).then((r) => resolve(r));
  });
  return (0, import_node10.defer)({
    data,
    result,
    page,
    meta: { ...metaInfo, categoryId }
  });
}
var SortResultsPanel = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: sortPanelStyles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Group, { align: "center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Text, { children: "Sort By: " }, void 0, !1, {
    fileName: "app/routes/services.$id.$subId.tsx",
    lineNumber: 223,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    import_core20.Select,
    {
      defaultValue: "0",
      data: [
        { value: "0", label: "Price" },
        { value: "1", label: "Rating" }
      ]
    },
    void 0,
    !1,
    {
      fileName: "app/routes/services.$id.$subId.tsx",
      lineNumber: 224,
      columnNumber: 17
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/services.$id.$subId.tsx",
  lineNumber: 222,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/services.$id.$subId.tsx",
  lineNumber: 221,
  columnNumber: 9
}, this), Photography = {
  Index: () => {
    let data = (0, import_react32.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Stack, { gap: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Grid, { gutter: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Grid.Col, { span: { base: 12, md: 8, lg: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Stack, { gap: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Text, { c: "dimmed", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Badge, { color: "magenta", children: data.meta.name }, void 0, !1, {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 246,
            columnNumber: 50
          }, this),
          " in Banglore"
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 246,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react33.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react32.Await, { resolve: data.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Title, { order: 3, children: response == null ? void 0 : response.name }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 249,
          columnNumber: 54
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 248,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 247,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: data.meta.description }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 252,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(SortResultsPanel, {}, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 254,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          import_react33.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/routes/services.$id.$subId.tsx",
              lineNumber: 256,
              columnNumber: 47
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react32.Await, { resolve: data == null ? void 0 : data.result, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              Photography.Results,
              {
                categoryId: data.meta.categoryId,
                vendors: response.data,
                loadMore: response.loadMore
              },
              void 0,
              !1,
              {
                fileName: "app/routes/services.$id.$subId.tsx",
                lineNumber: 260,
                columnNumber: 45
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/services.$id.$subId.tsx",
              lineNumber: 258,
              columnNumber: 37
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 255,
            columnNumber: 33
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 245,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 244,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Grid.Col, { span: { base: 12, md: 4, lg: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Card, { style: { borderColor: "#c6c3c3", borderRadius: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Title, { order: 3, children: [
          "Hiring",
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 272,
            columnNumber: 56
          }, this),
          "Without the",
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 272,
            columnNumber: 73
          }, this),
          "Headache"
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 272,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { style: { maxWidth: "100%" }, src: "/assets/web-thumb1.jpg" }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 274,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 271,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 270,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id.$subId.tsx",
      lineNumber: 243,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id.$subId.tsx",
      lineNumber: 242,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id.$subId.tsx",
      lineNumber: 241,
      columnNumber: 13
    }, this);
  },
  Results: ({
    vendors,
    loadMore,
    categoryId
  }) => {
    let data = (0, import_react32.useLoaderData)(), navigate = (0, import_react32.useNavigate)(), location = (0, import_react32.useLocation)(), [result, setResult] = (0, import_react33.useState)([]);
    (0, import_react33.useEffect)(() => {
      vendors && setResult(data.page === 0 ? vendors : result.concat(vendors));
    }, [vendors]);
    function loadNextPage() {
      let searchParams = new URLSearchParams();
      searchParams.set("page", "" + (data.page + 1)), navigate(location.pathname + "?" + searchParams.toString(), {
        preventScrollReset: !0
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      import_react_infinite_scroll_component.default,
      {
        dataLength: result.length,
        next: loadNextPage,
        hasMore: loadMore,
        loader: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: { padding: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 318,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 317,
          columnNumber: 17
        }, this),
        endMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: { textAlign: "center", padding: "40px" }, children: "End of results." }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 322,
          columnNumber: 17
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core20.Stack, { gap: "xl", children: result == null ? void 0 : result.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ProfileQuickCard_default, { id: item.id, name: item.name, portfolio: item.portfolio, profileImg: item.profileImg, services: item.services, tag: item.tag, rating: item.rating, categoryId }, item.id, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 328,
          columnNumber: 38
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 327,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 312,
        columnNumber: 16
      },
      this
    );
  }
}, services_id_subId_default = Photography.Index;

// app/routes/services.$id._index.tsx
var services_id_index_exports = {};
__export(services_id_index_exports, {
  default: () => services_id_index_default,
  loader: () => loader13,
  meta: () => meta3
});
var import_core21 = require("@mantine/core"), import_node11 = require("@remix-run/node"), import_react34 = require("@remix-run/react"), import_react35 = require("react"), import_react_infinite_scroll_component2 = __toESM(require("react-infinite-scroll-component")), import_rxjs2 = require("rxjs");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), sortPanelStyles2 = {
  background: "var(--ui-color-accent)",
  padding: "10px 20px",
  borderRadius: "4px"
}, meta3 = () => [
  { title: "Celebria Collective" },
  { name: "description", content: "Find your Pefect vendor" }
];
async function loader13({
  request,
  params
}) {
  var _a, _b;
  let pageId = params.id, searchParams = new URL(request.url).searchParams, page = parseInt(searchParams.get("page") || "") || 0, categoryIds = (_b = (_a = searchParams.get("category")) == null ? void 0 : _a.toString()) == null ? void 0 : _b.split(",").filter((x) => x), limit = 20;
  categoryIds != null && categoryIds.length || (categoryIds = void 0);
  let metaInfo = await db.vendorType.findFirstOrThrow({
    where: {
      keyName: pageId
    },
    select: {
      id: !0,
      name: !0,
      description: !0
    }
  }), result = new Promise(function(resolve) {
    db.vendorType.findFirstOrThrow({
      where: {
        keyName: pageId
      },
      select: {
        id: !0,
        serviceGroup: {
          where: {
            id: {
              in: categoryIds
            }
          },
          select: {
            id: !0
          }
        }
      }
    }).then((res) => {
      let serviceGrpIds = res.serviceGroup.map((x) => x.id);
      (0, import_rxjs2.forkJoin)({
        count: db.vendor.count({
          where: {
            isActive: !0,
            categoryId: res.id,
            VendorServiceGroup: {
              some: {
                groupId: {
                  in: serviceGrpIds
                }
              }
            }
          }
        }),
        data: db.vendor.findMany({
          skip: page * limit,
          take: limit,
          select: {
            id: !0,
            username: !0,
            profileImageName: !0,
            services: {
              select: {
                service: {
                  select: {
                    name: !0
                  }
                }
              },
              where: {
                serviceGroup: {
                  groupId: {
                    in: serviceGrpIds
                  }
                }
              },
              take: 5
            },
            vendorPortfolio: {
              select: {
                fileName: !0,
                fileType: !0
              },
              where: {
                serviceGroupId: {
                  in: categoryIds ? serviceGrpIds : void 0
                }
              },
              take: 4
            }
          },
          where: {
            categoryId: res.id,
            isActive: !0,
            VendorServiceGroup: {
              some: {
                groupId: {
                  in: serviceGrpIds
                }
              }
            }
          }
        })
      }).subscribe((r) => {
        let tag = "Popular", loadMore = page * limit + limit <= r.count;
        resolve({
          data: r.data.map((x) => ({
            id: x.username,
            name: x.username,
            portfolio: x.vendorPortfolio.map(
              (x2) => x2.fileName ? PATH.RESOURCE_URL + x2.fileName : ""
            ),
            rating: 4,
            tag,
            profileImg: x.profileImageName ? PATH.RESOURCE_URL + x.profileImageName : PATH.AVATAR_PLACEHOLDER,
            services: x.services.map((x2) => x2.service.name)
          })),
          loadMore
        });
      });
    });
  }), filters = new Promise(function(resolve) {
    (0, import_rxjs2.of)(!0).pipe(
      (0, import_rxjs2.switchMap)(
        (_) => db.vendorType.findFirstOrThrow({
          where: {
            keyName: pageId
          }
        })
      ),
      (0, import_rxjs2.switchMap)((res) => (0, import_rxjs2.forkJoin)({
        sorted: db.serviceGroupType.findMany({
          select: {
            name: !0,
            ServiceGroup: {
              orderBy: {
                name: "asc"
              },
              select: {
                id: !0,
                name: !0
              },
              where: {
                vendorTypeId: res.id
              }
            }
          },
          where: {
            ServiceGroup: {
              some: {
                vendorTypeId: res.id
              }
            }
          }
        }),
        unsorted: db.serviceGroup.findMany({
          orderBy: {
            name: "asc"
          },
          select: {
            id: !0,
            name: !0
          },
          where: {
            vendorTypeId: res.id,
            groupTypeId: {
              in: null
            }
          }
        })
      }))
    ).subscribe((res) => {
      resolve(
        res.sorted.map((r) => ({
          name: r.name,
          category: r.ServiceGroup
        })).concat([{ name: "Other services", category: res.unsorted }])
      );
    });
  });
  return (0, import_node11.defer)({
    result,
    filters,
    page,
    meta: metaInfo
  });
}
var SortResultsPanel2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: sortPanelStyles2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Flex, { align: "center", gap: "sm", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Text, { c: "dimmed", size: "sm", children: "Sort By:" }, void 0, !1, {
    fileName: "app/routes/services.$id._index.tsx",
    lineNumber: 323,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    import_core21.Select,
    {
      defaultValue: "0",
      data: [
        { value: "0", label: "Price" },
        { value: "1", label: "Rating" }
      ]
    },
    void 0,
    !1,
    {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 324,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/services.$id._index.tsx",
  lineNumber: 322,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/services.$id._index.tsx",
  lineNumber: 321,
  columnNumber: 5
}, this), Photography2 = {
  Index: () => {
    let data = (0, import_react34.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Stack, { gap: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Grid, { gutter: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Photography2.Filters, {}, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 345,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Grid.Col, { span: { base: 12, md: 8, lg: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Stack, { gap: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Title, { order: 3, children: [
            data.meta.name,
            " in Banglore"
          ] }, void 0, !0, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 349,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Text, { size: "sm", children: data.meta.description }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 350,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 348,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(SortResultsPanel2, {}, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 352,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          import_react35.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 354,
              columnNumber: 29
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react34.Await, { resolve: data == null ? void 0 : data.result, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              Photography2.Results,
              {
                vendors: response.data,
                loadMore: response.loadMore
              },
              void 0,
              !1,
              {
                fileName: "app/routes/services.$id._index.tsx",
                lineNumber: 358,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 356,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 353,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 347,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 346,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 344,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 342,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 341,
      columnNumber: 7
    }, this);
  },
  Filters: () => {
    let data = (0, import_react34.useLoaderData)(), navigate = (0, import_react34.useNavigate)(), location = (0, import_react34.useLocation)(), [getCategory, setCategory] = (0, import_react35.useState)([]);
    (0, import_react35.useEffect)(() => {
      var _a;
      let params = new URLSearchParams(location.search);
      setCategory(
        ((_a = params.get("category")) == null ? void 0 : _a.split(",").filter((x) => !!x)) || []
      );
    }, []);
    function toggleCategoryItem(checked, value) {
      let list;
      checked ? list = [...getCategory, value] : list = [...getCategory.filter((x) => x !== value)], setCategory(list);
      let params = new URLSearchParams(location.search);
      params.set("category", list.join(",")), params.set("page", "0"), navigate(`${location.pathname}?${params.toString()}`, {
        preventScrollReset: !0
      });
    }
    function getSelectedCatgoryCount(categoryList) {
      let categoryIdList = categoryList.map((value) => value.id);
      return getCategory.filter(
        (value) => categoryIdList.includes(value)
      ).length;
    }
    function filterItems(filters) {
      return filters.map(
        (filter, index) => {
          var _a;
          let selectedCategoryCount = getSelectedCatgoryCount(
            filter.category
          );
          return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Accordion.Item, { value: filter.name, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Accordion.Control, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Group, { justify: "space-between", align: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Text, { fw: 500, children: filter.name }, void 0, !1, {
                fileName: "app/routes/services.$id._index.tsx",
                lineNumber: 428,
                columnNumber: 17
              }, this),
              " ",
              selectedCategoryCount !== 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                import_core21.Badge,
                {
                  color: "#faad14",
                  children: selectedCategoryCount
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/services.$id._index.tsx",
                  lineNumber: 430,
                  columnNumber: 19
                },
                this
              ) : null
            ] }, void 0, !0, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 427,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 426,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Stack, { children: [
              filter.category.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                import_core21.Checkbox,
                {
                  label: item.name,
                  value: item.id,
                  checked: getCategory.includes(item.id),
                  className: "",
                  onChange: (e) => {
                    var _a2, _b;
                    return toggleCategoryItem((_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.checked, (_b = e == null ? void 0 : e.target) == null ? void 0 : _b.value);
                  }
                },
                item.id,
                !1,
                {
                  fileName: "app/routes/services.$id._index.tsx",
                  lineNumber: 438,
                  columnNumber: 19
                },
                this
              )),
              !((_a = filter.category) != null && _a.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: "Unavailable right now." }, void 0, !1, {
                fileName: "app/routes/services.$id._index.tsx",
                lineNumber: 449,
                columnNumber: 46
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 436,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 435,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 425,
            columnNumber: 18
          }, this);
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Grid.Col, { span: { base: 12 }, hiddenFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "filters-section-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "section-title", children: "Filter:" }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 474,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 473,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 472,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Grid.Col, { span: { md: 4, lg: 3 }, visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "filters-section-wrapper _sticky-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "section-title", children: "Filter:" }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 479,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react35.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 480,
          columnNumber: 33
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react34.Await, { resolve: data.filters, children: (filters) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Accordion, { children: filterItems(filters) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 483,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 481,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 480,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 478,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 477,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 471,
      columnNumber: 7
    }, this);
  },
  Results: ({
    vendors,
    loadMore
  }) => {
    let data = (0, import_react34.useLoaderData)(), navigate = (0, import_react34.useNavigate)(), location = (0, import_react34.useLocation)(), [result, setResult] = (0, import_react35.useState)([]);
    (0, import_react35.useEffect)(() => {
      vendors && setResult(data.page === 0 ? vendors : result.concat(vendors));
    }, [vendors]);
    function loadNextPage() {
      let searchParams = new URLSearchParams();
      searchParams.set("page", "" + (data.page + 1)), navigate(location.pathname + "?" + searchParams.toString(), {
        preventScrollReset: !0
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      import_react_infinite_scroll_component2.default,
      {
        dataLength: result.length,
        next: loadNextPage,
        hasMore: loadMore,
        loader: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: { padding: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 529,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 528,
          columnNumber: 11
        }, this),
        endMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: { textAlign: "center", padding: "40px" }, children: "End of results." }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 533,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core21.Stack, { gap: "xl", children: result == null ? void 0 : result.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ProfileQuickCard_default, { id: item.id, name: item.name, portfolio: item.portfolio, profileImg: item.profileImg, services: item.services, tag: item.tag, rating: item.rating }, item.id, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 539,
          columnNumber: 32
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 538,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 523,
        columnNumber: 7
      },
      this
    );
  }
}, services_id_index_default = Photography2.Index;

// app/routes/_auth.order.submit.tsx
var auth_order_submit_exports = {};
__export(auth_order_submit_exports, {
  action: () => action8,
  default: () => auth_order_submit_default
});
var import_client6 = require("@prisma/client"), import_node12 = require("@remix-run/node");
async function action8({
  request
}) {
  let cookieHeader = request.headers.get("Cookie"), userId = (await getSession(cookieHeader)).get(USER_SESSION_KEY);
  if (!userId)
    return (0, import_node12.redirect)("/user/login");
  let loggedInUser = await db.user.findFirst({
    where: {
      id: userId
    }
  });
  if (!loggedInUser)
    return (0, import_node12.redirect)("/user/login");
  let cartData = await userCartCookie.parse(cookieHeader);
  if (!(cartData != null && cartData.length))
    return (0, import_node12.redirect)("/cart/checkout");
  let orderId = await new Promise(function(resolve) {
    CartService.summary(cartData).then(async (res) => {
      if (!res)
        return;
      function extractTwoDigit(number) {
        return number % 100;
      }
      let summary = CartService.calculate(res), date = /* @__PURE__ */ new Date(), orderId2 = "CC" + extractTwoDigit(date.getFullYear()) + date.getMonth() + extractTwoDigit(+loggedInUser.username) + extractTwoDigit(Date.now());
      for (let i = 0; i < res.length; i++) {
        let item = res[i], data = await db.booking.create({
          data: {
            id: generateUuid(),
            userId: loggedInUser.id,
            orderId: orderId2,
            vendorServiceGroupId: item.vendorServiceGroupId,
            status: import_client6.BookingStatus.PENDING,
            total: summary.total,
            tax: summary.tax,
            discount: 0,
            coupon: null
          }
        });
        await db.bookingService.createMany({
          data: item.services.filter((x) => !!x.id).map((x) => ({
            id: generateUuid(),
            bookingId: data.id,
            serviceId: x.id,
            serviceName: x.name,
            fareMode: x.fareMode,
            status: import_client6.BookingStatus.PENDING,
            date: item.date,
            timeHour: item.timeHour,
            duration: item.duration,
            location: "",
            cost: x.cost
          }))
        });
      }
      resolve("");
    });
  });
  return (0, import_node12.redirect)("/order/success?id=" + orderId, {
    headers: {
      "Set-Cookie": await userCartCookie.serialize(null)
    }
  });
}
var auth_order_submit_default = () => "Processing your order. Please wait...";

// app/routes/cart.add._index.tsx
var cart_add_index_exports = {};
__export(cart_add_index_exports, {
  action: () => action9,
  default: () => cart_add_index_default
});
var import_node13 = require("@remix-run/node");
async function action9({
  request
}) {
  var _a, _b;
  let cookieHeader = request.headers.get("Cookie"), currentCart = await userCartCookie.parse(cookieHeader) || [], body = await request.formData(), redirectUrl;
  try {
    let newItem = JSON.parse(((_a = body.get("cart")) == null ? void 0 : _a.toString()) || "");
    newItem && (currentCart = currentCart.concat(newItem)), redirectUrl = new URL(((_b = body.get("redirectUrl")) == null ? void 0 : _b.toString()) || "/cart/checkout"), redirectUrl.searchParams.set("cartStatus", "true");
  } catch {
    redirectUrl = null;
  }
  return (0, import_node13.redirect)(redirectUrl ? redirectUrl.href : "/cart/checkout", {
    headers: {
      "Set-Cookie": await userCartCookie.serialize(currentCart)
    }
  });
}
var cart_add_index_default = () => "please wait...";

// app/routes/_api.verify-otp.tsx
var api_verify_otp_exports = {};
__export(api_verify_otp_exports, {
  action: () => action10
});
var import_node14 = require("@remix-run/node"), import_client7 = require("@prisma/client");
var bcrypt = require("bcryptjs");
async function action10({
  request
}) {
  var _a;
  let body = await request.formData(), prisma = new import_client7.PrismaClient(), username = body.get("phone"), otp = body.get("otp"), redirectUrl = ((_a = body.get("redirectUrl")) == null ? void 0 : _a.toString()) || "/user/home", success = !1, resCode = 400;
  try {
    let existingUser = await prisma.userOtp.findFirstOrThrow({
      where: {
        username
      }
    });
    if (await bcrypt.compare(otp, existingUser.otpHash)) {
      await prisma.userOtp.deleteMany({
        where: {
          username
        }
      });
      let user = await db.user.findFirst({
        where: {
          username
        }
      });
      if (success = !0, user) {
        let token = user == null ? void 0 : user.id, session = await getSession(
          request.headers.get("Cookie")
        );
        return session.set(USER_SESSION_KEY, token), (0, import_node14.redirect)(redirectUrl, {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
    }
  } catch {
  }
  return success && (resCode = 200), (0, import_node14.json)({ success }, resCode);
}

// app/routes/_auth.user.home.tsx
var auth_user_home_exports = {};
__export(auth_user_home_exports, {
  default: () => auth_user_home_default,
  loader: () => loader14
});
var import_node15 = require("@remix-run/node"), import_react36 = require("@remix-run/react"), import_antd2 = require("antd"), import_react37 = require("react");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), { Title: Title18, Text: Text15 } = import_antd2.Typography;
async function loader14({ params, request }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get(USER_SESSION_KEY), orders = new Promise(function(resolve, reject) {
    if (!userId) {
      reject();
      return;
    }
    db.booking.findMany({
      orderBy: {
        created_at: "desc"
      },
      where: {
        userId
      },
      select: {
        id: !0,
        orderId: !0,
        status: !0,
        created_at: !0,
        vendorServiceGroup: {
          select: {
            group: {
              select: {
                name: !0
              }
            }
          }
        },
        bookingService: {
          select: {
            serviceName: !0
          }
        }
      }
    }).then((r) => {
      let p = r.map((x) => ({
        id: x.orderId,
        name: x.vendorServiceGroup.group.name,
        status: x.status,
        date: x.created_at,
        services: x.bookingService.map((i) => i.serviceName || "Deleted service")
      }));
      resolve(p);
    });
  });
  return (0, import_node15.defer)({ orders });
}
var UserHome = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Row, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Col, { sm: 24, xs: 24, md: 16, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Title18, { level: 3, children: "Manage Bookings" }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(UserHome.AllBookings, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 81,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.home.tsx",
    lineNumber: 79,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.user.home.tsx",
    lineNumber: 78,
    columnNumber: 16
  }, this),
  AllBookings: () => {
    let data = (0, import_react36.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react37.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Skeleton, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 89,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react36.Await, { resolve: data.orders, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Row, { children: [
      response.map(
        (booking) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Col, { span: 24, children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Row, { justify: "space-between", align: "middle", gutter: [20, 20], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Col, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Space, { size: "middle", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Text15, { type: "secondary", strong: !0, children: [
                  "Order ID: ",
                  booking.id
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.user.home.tsx",
                  lineNumber: 96,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Tag, { color: StatusMarker.get(booking.status), children: booking.status }, void 0, !1, {
                  fileName: "app/routes/_auth.user.home.tsx",
                  lineNumber: 97,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 95,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Title18, { level: 5, children: booking.name }, void 0, !1, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 99,
                columnNumber: 37
              }, this),
              "Placed on: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("b", { children: DateFormatter.short(booking.date) }, void 0, !1, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 100,
                columnNumber: 48
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Text15, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("strong", { children: "Services:" }, void 0, !1, {
                  fileName: "app/routes/_auth.user.home.tsx",
                  lineNumber: 101,
                  columnNumber: 46
                }, this),
                " ",
                booking.services.join(", ")
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 101,
                columnNumber: 40
              }, this) }, void 0, !1, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 101,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 94,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react36.Link, { to: "/user/order/" + booking.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Button, { type: "default", shape: "round", size: "middle", children: "View" }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 105,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 104,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 103,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.home.tsx",
            lineNumber: 93,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.home.tsx",
            lineNumber: 92,
            columnNumber: 83
          }, this)
        ] }, booking.id, !0, {
          fileName: "app/routes/_auth.user.home.tsx",
          lineNumber: 92,
          columnNumber: 50
        }, this)
      ),
      !response.length && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd2.Col, { span: 12, children: "Sorry, You haven't scheduled any orders" }, void 0, !1, {
        fileName: "app/routes/_auth.user.home.tsx",
        lineNumber: 114,
        columnNumber: 46
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 91,
      columnNumber: 34
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 90,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 88,
      columnNumber: 16
    }, this);
  }
}, auth_user_home_default = UserHome.Index;

// app/routes/login.redirect.tsx
var login_redirect_exports = {};
__export(login_redirect_exports, {
  action: () => action11,
  loader: () => loader15
});
var import_node16 = require("@remix-run/node");
async function action11({
  request
}) {
  var _a, _b;
  let session = await getSession(
    request.headers.get("Cookie")
  ), body = await request.formData(), userToken = (_a = body.get("id")) == null ? void 0 : _a.toString(), redirectUrl = ((_b = body.get("redirect")) == null ? void 0 : _b.toString()) || "/user/home";
  return userToken ? (session.set(USER_SESSION_KEY, userToken), console.log(userToken), (0, import_node16.redirect)(redirectUrl, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : (0, import_node16.redirect)(redirectUrl || "/");
}
async function loader15({
  request
}) {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  if (session.has(USER_SESSION_KEY))
    return console.log("/--->"), (0, import_node16.redirect)("/");
  let data = { error: session.get("error") };
  return (0, import_node16.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/routes/cart.checkout.tsx
var cart_checkout_exports = {};
__export(cart_checkout_exports, {
  default: () => cart_checkout_default,
  loader: () => loader16
});
var import_icons3 = require("@ant-design/icons"), import_core23 = require("@mantine/core"), import_node17 = require("@remix-run/node"), import_react40 = require("@remix-run/react"), import_react41 = require("react"), import_react_redux3 = require("react-redux");

// app/components/ConfigureBooking.tsx
var import_core22 = require("@mantine/core"), import_react38 = require("@remix-run/react"), import_icons_react9 = require("@tabler/icons-react"), import_react39 = require("react"), import_react_hook_form2 = require("react-hook-form"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function ConfigureBooking(service) {
  let { control, getValues, handleSubmit, setValue, register } = (0, import_react_hook_form2.useForm)(), [serviceChecklist, setServiceChecklist] = (0, import_react39.useState)([!1, !1, !1]), checkoutForm = (0, import_react39.useRef)(null), checkoutFormInput = (0, import_react39.useRef)(null), [minDuration, setMinDuration] = (0, import_react39.useState)(1);
  (0, import_react39.useEffect)(() => {
    setMinDuration(service.minHour), setServiceOptionDuration(0), setServiceChecklist([!1, !1, !1]);
  }, [service]);
  function setServiceOptionDate(date) {
    setValue("date", date), setValue("timeHour", null), serviceChecklist[0] = !0, setServiceChecklist([...serviceChecklist]);
  }
  function setServiceOptionTime(index, hour) {
    setValue("timeHour", hour), serviceChecklist[index] = !!hour, setServiceChecklist([...serviceChecklist]);
  }
  function setServiceOptionDuration(index, duration) {
    setValue("duration", duration), serviceChecklist[index] = !!duration, setServiceChecklist([...serviceChecklist]);
  }
  function proceedToCheckout(params) {
    if (checkoutForm.current) {
      let validParams = params == null ? void 0 : params.services.filter((x) => service.options.find((i) => i.id === x.id));
      validParams.length ? (checkoutFormInput.current.value = JSON.stringify(
        {
          ...params,
          services: validParams
        }
      ), checkoutForm.current.submit()) : alert("Nothing to add");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Card, { withBorder: !0, title: "Configure Services", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react38.Form, { method: "post", onSubmit: handleSubmit(proceedToCheckout), action: "/cart/add", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "hidden", ...register("vendorServiceGroupId"), value: service.vendorServiceGroupId }, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Grid, { gutter: 30, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Grid.Col, { span: { base: 12, md: 6 }, children: [
          service.options.map((item, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "hidden", ...register(`services.${key}.id`), value: item.id }, item.id, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 69,
            columnNumber: 57
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "hidden", ...register("date") }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 70,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Title, { order: 5, children: "Select date" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 71,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Title, { order: 5, children: "Choose time slot" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 75,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", {}, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Title, { order: 5, children: "Duration of the service" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 80,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_core22.Select,
            {
              onChange: (value) => setServiceOptionDuration(2, parseInt(value || "")),
              placeholder: "Choose",
              data: [
                {
                  label: minDuration + " hours",
                  value: "" + minDuration
                }
              ].concat(
                new Array(24).fill(minDuration + 1).map((x, i) => ({
                  label: x + i + " hours",
                  value: "" + x + i
                }))
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/ConfigureBooking.tsx",
              lineNumber: 81,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Divider, {}, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Grid, { justify: "end", align: "middle", gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Grid.Col, { children: serviceChecklist.includes(!1) ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Alert, { title: "Please complete the above step to proceed.", c: "yellow", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_icons_react9.IconInfoCircle, {}, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 100,
          columnNumber: 132
        }, this) }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 100,
          columnNumber: 57
        }, this) : "" }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react38.Link, { to: "/cart/checkout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Button, { variant: "outline", children: "View Cart" }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 103,
          columnNumber: 47
        }, this) }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 102,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core22.Button, { disabled: serviceChecklist.includes(!1), variant: "filled", type: "submit", children: "Add to Cart" }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 106,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ConfigureBooking.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react38.Form, { ref: checkoutForm, method: "post", action: "/cart/add", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "hidden", name: "redirectUrl", value: window.location.href }, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { name: "cart", ref: checkoutFormInput }, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ConfigureBooking.tsx",
      lineNumber: 111,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ConfigureBooking.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ConfigureBooking.tsx",
    lineNumber: 64,
    columnNumber: 12
  }, this);
}
var ConfigureBooking_default = ConfigureBooking;

// app/routes/cart.checkout.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
async function loader16({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userCartCookie.parse(cookieHeader);
  return (0, import_node17.defer)({
    data: CartService.summary(cookie)
  });
}
var Cart = {
  Index: () => {
    let user = (0, import_react_redux3.useSelector)(getUser), data = (0, import_react40.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Title, { order: 3, children: "Checkout" }, void 0, !1, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid, { gutter: 30, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { span: { base: 12, md: 4, lg: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react41.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 40,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react40.Await, { resolve: data.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Cart.Preview, { cart: response }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 42,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 41,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { span: { base: 12, md: 4, lg: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react41.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 47,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react40.Await, { resolve: data.data, children: (response) => (response == null ? void 0 : response.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Stack, { gap: "md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Cart.Summary, { data: response }, void 0, !1, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 51,
            columnNumber: 37
          }, this),
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react40.Form, { method: "post", action: "/order/submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Button, { variant: "filled", type: "submit", radius: "xl", children: "Place order" }, void 0, !1, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 52,
            columnNumber: 88
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 52,
            columnNumber: 45
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(UserLogin_default, { title: "Login to continue", redirectUrl: "/cart/checkout" }, void 0, !1, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 52,
            columnNumber: 171
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 50,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.checkout.tsx",
      lineNumber: 35,
      columnNumber: 16
    }, this);
  },
  Preview: ({ cart }) => {
    let [editService, setEditService] = (0, import_react41.useState)();
    function openEdtServiceDialog(id, services) {
      setEditService({ id, services });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Stack, { children: [
      cart.map((data, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid, { gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { span: { base: 12, md: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Card, { withBorder: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            import_core23.Image,
            {
              style: { width: "100%", height: "100px", objectFit: "cover" },
              src: data.coverImg || ""
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 73,
              columnNumber: 29
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 72,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Flex, { justify: "center", gap: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_icons3.DeleteOutlined, {}, "remove", !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 79,
              columnNumber: 29
            }, this),
            ",",
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_icons3.EditOutlined, { onClick: () => openEdtServiceDialog("", []) }, "edit", !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 80,
              columnNumber: 29
            }, this),
            ","
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 78,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Group, { justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Flex, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Avatar, { src: data.vendorImg }, void 0, !1, {
                fileName: "app/routes/cart.checkout.tsx",
                lineNumber: 84,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", children: data.name }, void 0, !1, {
                fileName: "app/routes/cart.checkout.tsx",
                lineNumber: 85,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 83,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Badge, { children: data.vendorType }, void 0, !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 87,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 82,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react40.Link, { to: `/profile/${data.vendorId}`, children: data.vendorName }, void 0, !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 90,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 91,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", fw: 500, children: DateFormatter.short(data.date) }, void 0, !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 92,
              columnNumber: 29
            }, this),
            " -",
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", fw: 500, children: [
              "From ",
              data.timeHour,
              " to ",
              data.timeHour + data.duration,
              " (",
              data.duration,
              " hours)"
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 93,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 89,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { span: { base: 12, md: 7 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", fw: 500, children: "Personal Note:" }, void 0, !1, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 99,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            import_core23.Textarea,
            {
              placeholder: "Write down your requirements here...",
              autosize: !0,
              minRows: 4,
              maxRows: 6
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 100,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 98,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this)
      ] }, data.vendorServiceGroupId + i, !0, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 69,
        columnNumber: 36
      }, this)),
      !(cart != null && cart.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: "Sorry, Your cart is empty." }, void 0, !1, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 109,
        columnNumber: 31
      }, this),
      (editService == null ? void 0 : editService.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Cart.Edit, { serviceId: editService.id, services: editService.services, onClose: () => setEditService(void 0) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 111,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.checkout.tsx",
      lineNumber: 68,
      columnNumber: 16
    }, this);
  },
  Edit: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Modal, { opened: !0, w: "1000px", onClose: () => params.onClose(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ConfigureBooking_default, { minHour: 1, vendorServiceGroupId: params.serviceId, options: params.services }, void 0, !1, {
    fileName: "app/routes/cart.checkout.tsx",
    lineNumber: 116,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart.checkout.tsx",
    lineNumber: 115,
    columnNumber: 16
  }, this),
  Summary: ({ data }) => {
    let [orderSummary, setOrderSummary] = (0, import_react41.useState)();
    return (0, import_react41.useEffect)(() => {
      let total = data.reduce((arr, i) => arr.concat(i.services), []).reduce((sum, item) => sum + item.cost, 0), tax = 3 * total / 100;
      setOrderSummary({
        total,
        tax,
        gst: 3,
        final: total + tax
      });
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { style: { border: "1px solid #e1e1e1", padding: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Title, { order: 4, children: "Order Summary" }, void 0, !1, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this),
      data.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("b", { children: group.name }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this),
        group.services.map(
          (service) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid, { gutter: 20, justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", fw: 500, children: service.name }, void 0, !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 139,
              columnNumber: 31
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 139,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", children: [
              service.cost,
              " INR"
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 140,
              columnNumber: 31
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.checkout.tsx",
              lineNumber: 140,
              columnNumber: 21
            }, this)
          ] }, service.id, !0, {
            fileName: "app/routes/cart.checkout.tsx",
            lineNumber: 138,
            columnNumber: 48
          }, this)
        )
      ] }, group.vendorServiceGroupId, !0, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 136,
        columnNumber: 32
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Divider, {}, void 0, !1, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid, { gutter: 20, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", fw: 500, children: "Subtotal" }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 146,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", fw: 500, children: [
          orderSummary == null ? void 0 : orderSummary.total,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 147,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid, { gutter: 20, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { c: "dimmed", children: [
          "GST(",
          orderSummary == null ? void 0 : orderSummary.gst,
          "%)"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 150,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { children: [
          orderSummary == null ? void 0 : orderSummary.tax,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 151,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 151,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Divider, {}, void 0, !1, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid, { gutter: 20, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", fw: 500, children: "Total" }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 155,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 155,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core23.Text, { size: "sm", fw: 500, children: [
          orderSummary == null ? void 0 : orderSummary.final,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 156,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.checkout.tsx",
      lineNumber: 134,
      columnNumber: 16
    }, this);
  }
}, cart_checkout_default = Cart.Index;

// app/routes/order.success.tsx
var order_success_exports = {};
__export(order_success_exports, {
  default: () => order_success_default,
  loader: () => loader17
});
var import_icons4 = require("@ant-design/icons"), import_core24 = require("@mantine/core"), import_node18 = require("@remix-run/node"), import_react42 = require("@remix-run/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
async function loader17({
  params,
  request
}) {
  let orderId = new URL(request.url).searchParams.get("id");
  return orderId ? { id: orderId } : ((0, import_node18.redirect)("/404"), null);
}
var getIconStyle = (color) => ({
  width: (0, import_core24.rem)(24),
  height: (0, import_core24.rem)(24),
  color: color ? `var(--mantine-color-${color}-7)` : void 0
}), iconStyle = getIconStyle(), customIcons = {
  1: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_icons4.FrownOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 32,
    columnNumber: 8
  }, this),
  2: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_icons4.FrownOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 33,
    columnNumber: 8
  }, this),
  3: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_icons4.MehOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 34,
    columnNumber: 8
  }, this),
  4: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_icons4.SmileOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 35,
    columnNumber: 8
  }, this),
  5: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_icons4.SmileOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 36,
    columnNumber: 8
  }, this)
};
var OrderSuccess = {
  Index: () => {
    let data = (0, import_react42.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Grid, { justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Grid.Col, { span: { base: 12, md: 4, lg: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Stack, { gap: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Text, { size: "sm", c: "dimmed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_icons4.CheckCircleOutlined, { style: { fontSize: "50px" } }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 55,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 54,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { style: { textAlign: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Title, { order: 2, children: "Your Order is Confirmed!" }, void 0, !1, {
            fileName: "app/routes/order.success.tsx",
            lineNumber: 58,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Text, { children: [
            "We'll send you a confirmation email",
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/order.success.tsx",
              lineNumber: 59,
              columnNumber: 78
            }, this),
            " as soon as the vendor confirms the availability."
          ] }, void 0, !0, {
            fileName: "app/routes/order.success.tsx",
            lineNumber: 59,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 57,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 61,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/user/order/" + (data == null ? void 0 : data.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Button, { variant: "filled", radius: "xl", children: "CHECK STATUS" }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 63,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 62,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order.success.tsx",
        lineNumber: 53,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/order.success.tsx",
        lineNumber: 52,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Title, { order: 5, children: "How was your experience?" }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 68,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core24.Rating, { defaultValue: 3, emptySymbol: ({ index }) => customIcons[index + 1] }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 69,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order.success.tsx",
        lineNumber: 67,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/order.success.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/order.success.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/order.success.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/order.success.tsx",
      lineNumber: 48,
      columnNumber: 16
    }, this);
  }
}, order_success_default = OrderSuccess.Index;

// app/routes/profile.$user.tsx
var profile_user_exports = {};
__export(profile_user_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => profile_user_default,
  loader: () => loader18
});
var import_core25 = require("@mantine/core"), import_node19 = require("@remix-run/node"), import_react43 = require("@remix-run/react"), import_icons_react10 = require("@tabler/icons-react"), import_icons_react11 = require("@tabler/icons-react"), import_react44 = require("react");

// app/styles/accordian.module.css
var accordian_module_default = { root: "accordian-module__root__AeZrj", item: "accordian-module__item__DPCxc", chevron: "accordian-module__chevron__TNzMJ" };

// app/routes/profile.$user.tsx
var import_icons_react12 = require("@tabler/icons-react"), import_icons_react13 = require("@tabler/icons-react"), import_icons_react14 = require("@tabler/icons-react");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
async function loader18({ params, request }) {
  let id = params.user || "", searchParams = new URL(request.url).searchParams, vendorDetails = VendorQuery.getVendorByUsername(id), serviceList = VendorQuery.getServices(id);
  return (0, import_node19.defer)({
    profile: vendorDetails,
    services: serviceList,
    serviceGroupId: searchParams.get("service")
  });
}
function ErrorBoundary2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { children: "404!" }, void 0, !1, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
var ProfileLayout = {
  Index: () => {
    let data = (0, import_react43.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid, { gutter: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react44.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Skeleton, {}, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 56,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react43.Await, { resolve: data.profile, children: (profile) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ProfileLayout.Cover, { profile }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 58,
          columnNumber: 43
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid.Col, { span: { base: 12, md: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react43.Outlet, {}, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Divider, { my: "xl" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react44.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Skeleton, {}, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 67,
        columnNumber: 60
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 67,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react43.Await, { resolve: data.services, children: (services) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ProfileLayout.Pricing, { services, preSelectedGroupId: data.serviceGroupId }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 69,
        columnNumber: 36
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ProfileLayout.CartSuggestion, {}, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 53,
      columnNumber: 12
    }, this);
  },
  Cover: ({ profile }) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Card, { shadow: "sm", padding: "lg", radius: "md", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid, { align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid.Col, { span: { base: 4, md: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Image, { src: profile == null ? void 0 : profile.avatar, width: "100%", mah: "300px" }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 81,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 80,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid.Col, { span: { base: 8, md: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Box, { p: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Stack, { gap: "xs", justify: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Flex, { gap: "sm", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Title, { order: 4, children: profile == null ? void 0 : profile.fullName }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 87,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react12.IconDiscountCheckFilled, { size: "20px", style: { color: "var(--ui-color-success)" } }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 88,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 86,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Flex, { align: "center", gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react13.IconMapPin, { style: { color: "gray" }, size: "18px" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 91,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { fw: 500, children: [
            profile == null ? void 0 : profile.location,
            " Bangalore"
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 92,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 90,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 85,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 95,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Flex, { justify: "center", gap: "xs", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Box, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("a", { href: "#book-now-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Button, { variant: "filled", radius: "sm", fullWidth: !0, children: "Book a service" }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 99,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 98,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 97,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.ActionIcon, { size: "lg", variant: "light", color: "pink", "aria-label": "Favourite", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react14.IconHeart, { style: { width: "70%", height: "70%" }, stroke: 1.5 }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 103,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 102,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 96,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 106,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Divider, {}, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 107,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 108,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { c: "dimmed", children: [
        "Starting from ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(currency_transformer_default, {}, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 109,
          columnNumber: 60
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 109,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 84,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 83,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 79,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 78,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 77,
    columnNumber: 12
  }, this),
  Pricing: ({ services, preSelectedGroupId }) => {
    let [activeService, setActive] = (0, import_react44.useState)(), [flatList, setFlatList] = (0, import_react44.useState)([]);
    (0, import_react44.useEffect)(() => {
      let list = services.reduce((acc, x) => acc.concat(x.services), []);
      setFlatList(list), setActive(preSelectedGroupId ? list.find((x) => x.groupId === preSelectedGroupId) : list[0]);
    }, []);
    function setActiveService(id) {
      let item = flatList.find((x) => x.vendorServiceGroupId === id);
      item && setActive(item);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid, { gutter: "xl", id: "book-now-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Card, { withBorder: !0, style: { borderColor: "#1D4ED7" }, p: "10px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Title, { order: 3, mb: (0, import_core25.rem)(20), children: "Save your money now." }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 140,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 142,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 145,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Image, { src: "/assets/savings.png", width: "70%" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 148,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 141,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 139,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid.Col, { span: { base: 12, md: 9 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Group, { align: "end", justify: "space-between", py: (0, import_core25.rem)(40), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Title, { order: 3, children: [
            "Book now",
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 154,
              columnNumber: 46
            }, this),
            "and ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Mark, { color: "lime", children: "Pay later" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 154,
              columnNumber: 56
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 154,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Box, { ta: "right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { fw: 500, children: "Having trouble?" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 156,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("a", { href: "mailto:support@celebriacollective.com", target: "_BLANK", children: "Contact us" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 157,
              columnNumber: 31
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 157,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 155,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 153,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid, { gutter: "xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Card, { bg: "#F2F5FB", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Group, { justify: "space-between", align: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Title, { order: 5, children: activeService == null ? void 0 : activeService.title }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 165,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Badge, { variant: "light", color: "teal", children: "Most Booked" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 166,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 164,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Divider, { size: "md", w: "10%" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 168,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Box, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { c: "dimmed", children: "Starts from:" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 170,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Title, { order: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.NumberFormatter, { prefix: common_data_default.currency, value: activeService == null ? void 0 : activeService.cost, thousandSeparator: !0 }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 171,
                columnNumber: 54
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 171,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 169,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { fw: 500, children: "Services Included:" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 173,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core25.List,
              {
                spacing: "xs",
                size: "sm",
                center: !0,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react11.IconCircleCheck, { size: 16 }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 180,
                  columnNumber: 19
                }, this),
                children: activeService == null ? void 0 : activeService.included.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.List.Item, { children: item.title }, item.id, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 183,
                  columnNumber: 76
                }, this))
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 175,
                columnNumber: 33
              },
              this
            ),
            activeService != null && activeService.addons.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Stack, { gap: "xs", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { fw: 500, children: "Additional" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 189,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.List, { children: activeService == null ? void 0 : activeService.addons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.List.Item, { children: item.title }, item.id, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 191,
                columnNumber: 78
              }, this)) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 190,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 188,
              columnNumber: 65
            }, this) : "",
            (activeService == null ? void 0 : activeService.vendorServiceGroupId) && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react43.Link, { to: routes_data_default.CartItem.replace(":id", activeService == null ? void 0 : activeService.vendorServiceGroupId), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Button, { variant: "filled", w: "100%", children: "Book Now" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 196,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 195,
              columnNumber: 73
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 163,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 162,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 161,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Card, { bg: "linear-gradient(#358BD6, #0F73C9)", c: "white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Title, { order: 5, children: "Browse Services" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 205,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Divider, { size: "md", w: "10%" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 206,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Accordion, { unstyled: !0, defaultValue: "0", children: services.map((group, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Accordion.Item, { value: "" + index, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Accordion.Control, { style: {
                width: "100%",
                background: "none",
                border: "0",
                textAlign: "left",
                padding: "10px 20px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                direction: "rtl",
                color: "white"
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Text, { c: "white", children: group.name }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 220,
                columnNumber: 24
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 209,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Accordion, { classNames: accordian_module_default, value: activeService == null ? void 0 : activeService.vendorServiceGroupId, disableChevronRotation: !0, chevron: null, onChange: (x) => setActiveService(x), children: group.services.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Accordion.Item, { value: item.vendorServiceGroupId, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Accordion.Control, { icon: (activeService == null ? void 0 : activeService.vendorServiceGroupId) === item.vendorServiceGroupId ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react10.IconCheck, {}, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 224,
                columnNumber: 146
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react10.IconPlus, { size: 12 }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 224,
                columnNumber: 162
              }, this), color: "inherit", children: item.title }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 224,
                columnNumber: 53
              }, this) }, item.vendorServiceGroupId, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 223,
                columnNumber: 79
              }, this)) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 222,
                columnNumber: 45
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 221,
                columnNumber: 41
              }, this)
            ] }, "" + index, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 208,
              columnNumber: 69
            }, this)) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 207,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 204,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 203,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 202,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 160,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 137,
      columnNumber: 12
    }, this);
  },
  CartSuggestion: () => {
    let location = (0, import_react43.useLocation)(), navigate = (0, import_react43.useNavigate)(), [showModal, setModal] = (0, import_react44.useState)(!1);
    (0, import_react44.useEffect)(() => {
      new URLSearchParams(location.search).get("cartStatus") && setModal(!0);
    }, [location.pathname]);
    function gotoCart() {
      navigate(routes_data_default.Cart);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Modal, { title: "Your cart has been updated.", opened: showModal, onClose: () => setModal(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core25.Title, { order: 5, children: "Forgot to add something?" }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 255,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 254,
      columnNumber: 12
    }, this);
  }
}, profile_user_default = ProfileLayout.Index;

// app/routes/_api.search.tsx
var api_search_exports = {};
__export(api_search_exports, {
  loader: () => loader19
});
var import_node20 = require("@remix-run/node");
function loader19(args) {
  var _a, _b;
  let query = (_b = (_a = new URL(args.request.url).searchParams.get("q")) == null ? void 0 : _a.toLowerCase()) == null ? void 0 : _b.trim();
  if (!(query != null && query.length))
    return (0, import_node20.defer)({ results: [] });
  let groups = new Promise(function(resolve) {
    db.serviceGroup.findMany({
      take: 15,
      where: {
        OR: [
          {
            name: {
              contains: query
            }
          },
          {
            serviceGroupItem: {
              some: {
                service: {
                  name: {
                    contains: query
                  }
                }
              }
            }
          },
          {
            serviceGroupType: {
              name: {
                contains: query
              }
            }
          }
        ]
      },
      select: {
        id: !0,
        name: !0,
        vendorType: {
          select: {
            name: !0,
            keyName: !0
          }
        },
        serviceGroupType: {
          select: {
            name: !0
          }
        },
        serviceGroupItem: {
          where: {
            service: {
              name: {
                contains: query
              }
            }
          },
          select: {
            service: {
              select: {
                name: !0
              }
            }
          }
        }
      }
    }).then((r) => resolve(r));
  });
  return (0, import_node20.defer)({
    results: groups
  });
}

// app/routes/_api.login.tsx
var api_login_exports = {};
__export(api_login_exports, {
  action: () => action12
});
var import_node21 = require("@remix-run/node"), import_client8 = require("@prisma/client");

// app/service/sms.service.ts
async function sendSMS(input) {
  let urlencoded = new URLSearchParams();
  urlencoded.append("module", "TRANS_SMS"), urlencoded.append("apikey", "0472a73f-da12-11ee-8cbb-0200cd936042"), urlencoded.append("to", "" + input.to), urlencoded.append("from", "CELEBR"), urlencoded.append("msg", input.message), await fetch("https://2factor.in/API/R1/", {
    method: "POST",
    body: urlencoded
    // redirect: 'follow'
  });
}
var SmsService = {
  sendSMS
}, sms_service_default = SmsService;

// app/routes/_api.login.tsx
var bcrypt2 = require("bcryptjs");
async function action12({
  request
}) {
  let body = await request.formData(), prisma = new import_client8.PrismaClient(), username = body.get("phone"), data, success = !1;
  try {
    let existingUser = await prisma.user.findFirst({
      where: {
        username
      }
    });
    existingUser != null && existingUser.id || (data = await prisma.user.create({
      data: {
        id: generateUuid(),
        username,
        source: import_client8.UserSource.ORGANIC
      }
    }));
    let otp = Math.floor(1e3 + Math.random() * 9e3), otpHash = await bcrypt2.hash("" + otp, 10);
    await prisma.userOtp.deleteMany({
      where: {
        username
      }
    }), await prisma.userOtp.create({
      data: {
        id: generateUuid(),
        username,
        otpHash
      }
    }), await sms_service_default.sendSMS({
      to: username,
      message: otp + " is your OTP to login to Celebria Collective - celebriacollective.com"
    }), success = !0;
  } catch (r) {
    data = r;
  }
  return (0, import_node21.json)({ success, data }, 200);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader20
});
var loader20 = async ({ request }) => logout(request);

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  loader: () => loader21,
  meta: () => meta4
});
var import_node22 = require("@remix-run/node"), import_react45 = require("react"), import_react46 = require("@remix-run/react");
var import_client9 = require("@prisma/client");

// app/utils/generateJumbotronUrl.ts
function generateJumbotronUrl(data) {
  let url = "";
  return data.vendorTypeId ? url = "/services/:vendorType" : data.serviceGroupId ? url = "/services/:vendorType?category=:serviceGroupId" : data.serviceId && (url = "/services/:serviceGroupId?category=:serviceId"), url;
}

// app/service/homepage.service.ts
function getJumbotronList() {
  return new Promise(function(resolve) {
    db.websiteSlider.findMany({
      orderBy: {
        createdAt: "desc"
      },
      select: {
        jumbotron: {
          select: {
            title: !0,
            description: !0,
            imageName: !0,
            vendorId: !0,
            vendorTypeId: !0,
            serviceGroupId: !0,
            serviceId: !0,
            vendorType: {
              select: {
                keyName: !0
              }
            },
            group: {
              select: {
                vendorType: {
                  select: {
                    keyName: !0
                  }
                }
              }
            }
          }
        }
      }
    }).then((r) => {
      resolve(
        r.map((x) => x.jumbotron).map((x) => {
          var _a, _b;
          let url = generateJumbotronUrl({
            vendorTypeId: x.vendorTypeId,
            serviceGroupId: x.serviceGroupId,
            serviceId: x.serviceId
          });
          return {
            title: x.title,
            description: x.description,
            img: x.imageName ? PATH.RESOURCE_URL + x.imageName : "",
            url: url.replace(":vendorType", ((_a = x.vendorType) == null ? void 0 : _a.keyName) || ((_b = x.group) == null ? void 0 : _b.vendorType.keyName) || "").replace(":serviceGroupId", x.serviceGroupId || "").replace(":serviceId", x.serviceId || "")
          };
        })
      );
    });
  });
}
function getCategoryCollection() {
  return new Promise(function(resolve) {
    db.vendorType.findMany({
      orderBy: {
        name: "asc"
      },
      select: {
        id: !0,
        name: !0,
        description: !0,
        keyName: !0,
        serviceGroup: {
          select: {
            id: !0,
            name: !0,
            imageName: !0,
            serviceGroupType: {
              select: {
                keyName: !0,
                name: !0
              }
            }
          },
          orderBy: {
            serviceGroupType: {
              name: "desc"
            }
          }
        }
      }
    }).then((r) => {
      let response = r.map((category) => {
        let serviceGroup = category.serviceGroup.reduce((items, item) => {
          var _a, _b, _c, _d, _e;
          let collection = (_a = item.serviceGroupType) == null ? void 0 : _a.keyName;
          return collection ? (((_b = items[items.length - 1]) == null ? void 0 : _b.collection) !== collection ? items.push({
            id: item.id,
            name: ((_c = item.serviceGroupType) == null ? void 0 : _c.name) || "Services",
            imageName: item.imageName,
            isCollection: !0,
            collection: (_d = item.serviceGroupType) == null ? void 0 : _d.keyName,
            path: routes_data_default.CollectionsByVendor.replace(":id", ((_e = item.serviceGroupType) == null ? void 0 : _e.keyName) || "unknown").replace(":vendorType", category.keyName),
            description: item.name
          }) : items[items.length - 1].description += ", " + item.name, items) : (items.push({
            id: item.id,
            isCollection: !1,
            name: item.name,
            imageName: item.imageName,
            path: routes_data_default.ServiceGroup.replace(":id", category.keyName).replace(":subId", item.id)
          }), items);
        }, []);
        return {
          title: category.name,
          id: category.id,
          description: category.description,
          serviceGroup
        };
      });
      resolve(response);
    });
  });
}
function topVendorsByCategory() {
  return new Promise(async function(resolve) {
    let r = await db.vendorType.findMany({
      take: 4,
      select: {
        id: !0,
        name: !0,
        keyName: !0,
        vendor: {
          where: {
            isActive: !0
          },
          select: {
            id: !0,
            name: !0,
            profileImageName: !0,
            primaryColor: !0,
            username: !0
          },
          take: 4
        }
      }
    });
    resolve(r);
  });
}
function getPopularServices() {
  return new Promise(function(resolve) {
    db.serviceGroup.findMany({
      take: 8,
      select: {
        id: !0,
        name: !0,
        imageName: !0,
        description: !0,
        vendorType: {
          select: {
            keyName: !0
          }
        }
      },
      where: {
        groupTypeId: {
          not: void 0
        }
      }
    }).then((r) => {
      resolve(r.map((x) => ({
        id: x.id,
        title: x.name,
        path: routes_data_default.ServiceGroup.replace(":id", x.vendorType.keyName).replace(":subId", x.id),
        label: "",
        image: x.imageName ? PATH.RESOURCE_URL + x.imageName : "",
        cost: 0
      })));
    });
  });
}
function getCollections() {
  return new Promise(function(resolve) {
    db.serviceGroupType.findMany({
      take: 4,
      select: {
        keyName: !0,
        name: !0,
        ServiceGroup: {
          take: 10,
          select: {
            name: !0,
            imageName: !0
          }
        }
      }
    }).then((r) => {
      resolve(r.map((x) => {
        var _a;
        return {
          id: x.keyName,
          image: PATH.RESOURCE_URL + ((_a = x.ServiceGroup.find((i) => i.imageName)) == null ? void 0 : _a.imageName),
          title: x.name,
          label: x.ServiceGroup.map((g) => g.name).join(", "),
          path: routes_data_default.Collections.replace(":id", x.keyName),
          cost: 0
        };
      }));
    });
  });
}

// app/routes/_index.tsx
var import_pure_react_carousel2 = require("pure-react-carousel"), import_react_simple_typewriter = require("react-simple-typewriter"), import_core26 = require("@mantine/core"), import_icons_react15 = require("@tabler/icons-react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), collectionBg = [
  "linear-gradient(0deg, rgba(34,193,195,0.4) 0%, rgba(253,187,45,0.4) 100%)",
  "linear-gradient(90deg, rgba(238,174,202,0.4) 0%, rgba(148,187,233,0.4) 100%)"
];
async function loader21({ params }) {
  let id = params.user, jumbotronList = getJumbotronList(), quickLinks = new Promise(function(resolve) {
    db.serviceGroup.findMany({
      take: 4,
      select: {
        id: !0,
        name: !0,
        imageName: !0,
        vendorType: {
          select: {
            name: !0,
            keyName: !0
          }
        },
        serviceGroupItem: {
          take: 1,
          select: {
            service: {
              select: {
                vendorService: {
                  take: 1,
                  select: {
                    cost: !0
                  },
                  orderBy: {
                    cost: "asc"
                  }
                }
              }
            }
          }
        }
      }
    }).then((r) => {
      resolve(r.map((x) => {
        var _a, _b, _c;
        return { id: x.id, title: x.name, image: x.imageName ? PATH.RESOURCE_URL + x.imageName : "", label: x.vendorType.name, path: `/services/${x.vendorType.keyName}?category=${x.id}`, cost: (_c = (_b = (_a = x.serviceGroupItem[0]) == null ? void 0 : _a.service) == null ? void 0 : _b.vendorService[0]) == null ? void 0 : _c.cost };
      }));
    });
  }), morePages = new Promise(function(resolve) {
    db.vendorType.findMany({
      take: 3,
      orderBy: {
        name: "asc"
      },
      select: {
        id: !0,
        name: !0,
        keyName: !0,
        serviceGroup: {
          select: {
            id: !0,
            name: !0,
            imageName: !0
          }
        }
      }
    }).then((r) => {
      resolve(r.map((x) => ({
        path: routes_data_default.Services.replace(":id", x.keyName),
        title: x.name,
        id: x.id,
        serviceGroup: x.serviceGroup
      })));
    });
  }), bannerAds = new Promise(async function(resolve) {
    let finalList = (await db.websiteBanner.findMany({
      where: {
        targetPage: {
          in: [import_client9.BannerLocation.HOME_1, import_client9.BannerLocation.HOME_2, import_client9.BannerLocation.HOME_3]
        }
      },
      select: {
        targetPage: !0,
        jumbotron: {
          select: {
            title: !0,
            description: !0,
            imageName: !0,
            vendorId: !0,
            vendorTypeId: !0,
            serviceGroupId: !0,
            serviceId: !0,
            vendorType: {
              select: {
                keyName: !0
              }
            },
            group: {
              select: {
                vendorType: {
                  select: {
                    keyName: !0
                  }
                }
              }
            }
          }
        }
      }
    })).map((item) => {
      var _a;
      let x = item.jumbotron, url = generateJumbotronUrl({
        vendorTypeId: x.vendorTypeId,
        serviceGroupId: x.serviceGroupId,
        serviceId: x.serviceId
      });
      return {
        title: x.title,
        description: x.description,
        img: x.imageName ? PATH.RESOURCE_URL + x.imageName : "",
        url: url.replace(":vendorType", ((_a = x.vendorType) == null ? void 0 : _a.keyName) || "").replace(":serviceGroupId", x.serviceGroupId || "").replace(":serviceId", x.serviceId || ""),
        bannerLocation: item.targetPage
      };
    });
    resolve(finalList);
  }), categories = getCategoryCollection(), popularServices = getPopularServices(), topVendors = topVendorsByCategory(), collections = getCollections();
  return (0, import_node22.defer)({ categories, quickLinks, popularServices, collections, topVendors });
}
var meta4 = () => [
  { title: "Celebria Collective" },
  { name: "description", content: "Book a service with us!" }
];
var FALLBACK_IMG = "https://static.miraheze.org/widdershinswiki/thumb/4/47/Placeholder.png/800px-Placeholder.png";
var Home = {
  Index: () => {
    let data = (0, import_react46.useLoaderData)();
    return [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Home.Jumbotron, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 227,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "container no-spacer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Home.Services, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 229,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 228,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Home.PopularServices, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 234,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 233,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Home.Collections, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card-style-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { gutter: 40, align: "center", justify: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 7 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Stack, { align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { className: "_text-center", order: 3, children: [
              "We are here to help",
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 244,
                columnNumber: 82
              }, this),
              "you build your brand"
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 244,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Flex, { align: "center", gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { fw: 500, children: "Check out" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 246,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Link, { to: "/collections/commercial", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Button, { variant: "outline", radius: "xl", children: "Commercial Services" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 247,
                columnNumber: 58
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 247,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 245,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 243,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 242,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card-style-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Stack, { gap: "md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Flex, { align: "center", gap: "sm", justify: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 5, children: "50+" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 255,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { c: "dimmed", children: "professionals" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 255,
                columnNumber: 53
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 254,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar.Group, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar, { src: "https://api.dicebear.com/7.x/miniavs/svg?seed=1" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 258,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar, { style: { backgroundColor: "#f56a00" }, children: "K" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 259,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar, { style: { backgroundColor: "#87d068" }, src: PATH.AVATAR_PLACEHOLDER }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 260,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar, { style: { backgroundColor: "#1677ff" }, children: "A" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 261,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar, { src: "https://api.dicebear.com/7.x/miniavs/svg?seed=1" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 262,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar, { style: { backgroundColor: "#f56a00" }, children: "K" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 263,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar, { style: { backgroundColor: "#87d068" }, src: PATH.AVATAR_PLACEHOLDER }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 264,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Avatar, { style: { backgroundColor: "#1677ff" }, children: "A" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 265,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 257,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 253,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 252,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 251,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 241,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 240,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 239,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 231,
        columnNumber: 7
      }, this)
    ];
  },
  Jumbotron: () => {
    let data = (0, import_react46.useLoaderData)(), fetcher = (0, import_react46.useFetcher)(), navigate = (0, import_react46.useNavigate)(), [searchBusy, setSearchBusy] = (0, import_react45.useState)(!1), typewriterWords = ["work done", "photographers", "videographer", "makeup artists", "stylist"];
    (0, import_react45.useEffect)(() => {
      setSearchBusy(fetcher.state === "loading");
    }, [fetcher.state]);
    function search(event) {
      let q = event.target.value || "";
      setSearchBusy(!0), fetcher.submit({
        q
      }, {
        method: "get",
        action: "/search"
      });
    }
    function gotoSearchItemPage(type, id) {
      navigate(routes_data_default.ServiceGroup.replace(":id", type).replace(":subId", id));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: " homepage-hero-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { align: "stretch", gutter: 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Box, { style: { display: "flex", justifyContent: "end", height: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "homepage-hero-search-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "homepage-hero-search-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { className: "title-wrapper", order: 1, children: [
          "Now it's easy",
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 313,
            columnNumber: 77
          }, this),
          "to get ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react_simple_typewriter.Typewriter, { words: typewriterWords, loop: !0, cursor: !0, cursorColor: "red" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 313,
            columnNumber: 90
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 313,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 312,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 9 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Stack, { gap: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { fw: 500, c: "dimmed", children: "Get Started" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 317,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { background: "white", padding: "6px 12px", borderRadius: "24px", boxShadow: "0 4px 4px #e1e1e1" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Input, { variant: "unstyled", placeholder: "Search", leftSection: searchBusy ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Loader, { size: "xs" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 319,
              columnNumber: 98
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconSearch, { size: 20 }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 319,
              columnNumber: 123
            }, this), onChange: search }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 319,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 318,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 316,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "hero-search-results-panel-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react45.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Skeleton_default, {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 323,
            columnNumber: 43
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Await, { resolve: fetcher.data, children: (response) => {
            var _a, _b;
            return (response == null ? void 0 : response.results) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "hero-search-results-panel", children: [
              (_a = response == null ? void 0 : response.results) == null ? void 0 : _a.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "result-row", onClick: (_) => gotoSearchItemPage(item.vendorType.keyName, item.id), children: [
                item.name,
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { c: "dimmed", fs: "italic", children: [
                  "in ",
                  item.vendorType.name
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 326,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 325,
                columnNumber: 152
              }, this)),
              !((_b = response == null ? void 0 : response.results) != null && _b.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "result-row", children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { c: "dimmed", fs: "italic", children: "Sorry, we couldn't find any results on that. Kindly narrow the search term." }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 327,
                  columnNumber: 96
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 327,
                columnNumber: 66
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 325,
              columnNumber: 61
            }, this);
          } }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 324,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 323,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 322,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 315,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 311,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 310,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 309,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 308,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 307,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("img", { className: "homepage-hero-img", src: "/assets/homepage-hero.jpg", width: "100%", style: { maxWidth: "665px" } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 339,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 337,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 306,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 305,
      columnNumber: 12
    }, this);
  },
  QuickPick: () => {
    let data = (0, import_react46.useLoaderData)();
  },
  PopularServices: () => {
    let data = (0, import_react46.useLoaderData)(), [isMobile, setMobile] = (0, import_react45.useState)(!1), navigate = (0, import_react46.useNavigate)();
    (0, import_react45.useEffect)(() => {
      setMobile((window == null ? void 0 : window.innerWidth) < 600);
    }, []);
    function sliderCount() {
      return isMobile ? 2 : 4;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { justify: "space-between", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 2 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "home-section-card-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 4, children: "Popular Services" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 397,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { c: "dimmed", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 398,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 396,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 395,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react45.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 402,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Await, { resolve: data.popularServices, children: (resolve) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        import_pure_react_carousel2.CarouselProvider,
        {
          naturalSlideWidth: 300,
          naturalSlideHeight: 400,
          totalSlides: resolve.length,
          visibleSlides: sliderCount(),
          isIntrinsicHeight: !0,
          step: sliderCount(),
          dragStep: sliderCount(),
          className: "carousel-slider-wrapper",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.Slider, { className: "slider-spacer", children: resolve.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.Slide, { className: "card-style-1", index: i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Link, { to: item.path, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Stack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Image, { className: "thumbnail", src: item.image || "" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 416,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "title-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { size: "sm", children: item.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 418,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 417,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 415,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconChevronRight, { className: "btn-wrapper" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 421,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 414,
              columnNumber: 17
            }, this) }, "s" + item.id, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 413,
              columnNumber: 75
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 413,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 424,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 424,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 425,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 425,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 404,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 403,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 402,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 401,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 394,
      columnNumber: 12
    }, this);
  },
  Collections: () => {
    let data = (0, import_react46.useLoaderData)(), [isMobile, setMobile] = (0, import_react45.useState)(!1);
    (0, import_react45.useEffect)(() => {
      setMobile((window == null ? void 0 : window.innerWidth) < 600);
    }, []);
    function sliderCount() {
      return isMobile ? 1 : 4;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { paddingTop: "45px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "home-section-card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 3, className: "_text-center", children: "Hire the best professionals for any job" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 446,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 445,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 444,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 443,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react45.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 451,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Await, { resolve: data.collections, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        import_pure_react_carousel2.CarouselProvider,
        {
          naturalSlideWidth: 300,
          naturalSlideHeight: 400,
          totalSlides: response.length,
          visibleSlides: sliderCount(),
          isIntrinsicHeight: !0,
          step: sliderCount(),
          dragStep: sliderCount(),
          className: "carousel-slider-wrapper",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.Slider, { className: "slider-spacer", children: response.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.Slide, { className: "card-style-2", index: i, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "title-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 5, children: item.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 466,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 465,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "label-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { size: "sm", children: item.label }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 469,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 468,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "btn-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Button, { radius: "xl", children: "Explore" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 473,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 472,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 471,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 464,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 463,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card-thumb-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card-thumb-cover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Image, { src: item.image || "", height: "100%", width: "100%", className: "thumb" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 482,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 481,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 480,
                columnNumber: 17
              }, this)
            ] }, item.id, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 462,
              columnNumber: 76
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 462,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 487,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 487,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 488,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 488,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 453,
          columnNumber: 26
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 452,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 451,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 450,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 442,
      columnNumber: 12
    }, this);
  },
  Services: () => {
    let loaderData = (0, import_react46.useLoaderData)(), [modalData, setIsModalOpen] = (0, import_react45.useState)(null), [isMobile, setMobile] = (0, import_react45.useState)(!1);
    (0, import_react45.useEffect)(() => {
      setMobile((window == null ? void 0 : window.innerWidth) < 600);
    }, []);
    let showModal = (data) => {
      setIsModalOpen(data);
    }, handleCancel = () => {
      setIsModalOpen(null);
    };
    function sliderCount() {
      return isMobile ? 2 : 5;
    }
    return [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react45.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 516,
        columnNumber: 27
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Await, { resolve: loaderData.categories, children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        import_pure_react_carousel2.CarouselProvider,
        {
          naturalSlideWidth: 300,
          naturalSlideHeight: 400,
          totalSlides: data.length,
          visibleSlides: sliderCount(),
          isIntrinsicHeight: !0,
          step: sliderCount(),
          dragStep: sliderCount(),
          className: "carousel-slider-wrapper slider-homepage-focused slider-uplift",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.Slider, { className: "carousel-slider", children: data.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.Slide, { className: "item-wrapper", index: i, onClick: () => showModal(item), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "item-spacer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Stack, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconFlame, { style: { fontSize: "2em" } }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 531,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 5, style: { color: "white" }, children: item.title }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 532,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { className: "item-description", c: "dimmed", style: { fontSize: "0.8em", color: "whitesmoke" }, children: item.description }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 533,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 530,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 529,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 528,
              columnNumber: 15
            }, this) }, "s" + item.id, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 527,
              columnNumber: 72
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 527,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 539,
              columnNumber: 47
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 539,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_pure_react_carousel2.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react15.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 540,
              columnNumber: 47
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 540,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 518,
          columnNumber: 20
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 517,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 516,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Modal, { title: modalData == null ? void 0 : modalData.title, opened: !!modalData, onClose: handleCancel, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { gutter: 20, children: [
        modalData == null ? void 0 : modalData.serviceGroup.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
          !item.isCollection && (index - 1 < 0 || item.isCollection !== modalData.serviceGroup[index - 1].isCollection) ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 5, children: "Other services" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 548,
            columnNumber: 187
          }, this) }, item.id + "col-" + index, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 548,
            columnNumber: 126
          }, this) : "",
          item.isCollection ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { position: "relative", borderRadius: "10px", boxShadow: "0 20px 40px #d3d3d3", overflow: "hidden" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Image, { src: item.imageName ? PATH.RESOURCE_URL + item.imageName : FALLBACK_IMG, width: "100%", height: 150, style: { borderRadius: "10px", objectFit: "cover" } }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 552,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: collectionBg[index % 2], display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white", flexDirection: "column" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 4, style: { wordBreak: "normal", color: "white" }, children: item.name }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 554,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { padding: "0 15%", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }, children: item.description }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 555,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 553,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 551,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 550,
            columnNumber: 15
          }, this) }, item.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 549,
            columnNumber: 34
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 6, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { position: "relative", borderRadius: "10px", overflow: "hidden" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Image, { src: item.imageName ? PATH.RESOURCE_URL + item.imageName : FALLBACK_IMG, style: { borderRadius: "10px" } }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 562,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: {
              background: "linear-gradient(0deg, rgb(2, 0, 36, 0.3) 0%, rgb(9, 9, 121, 0.3) 35%, rgb(0, 212, 255, 0.3) 100%)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "12px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 5, style: { color: "white", wordBreak: "normal" }, children: item.name }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 566,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 563,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 561,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 560,
            columnNumber: 15
          }, this) }, item.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 559,
            columnNumber: 27
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 546,
          columnNumber: 57
        }, this)),
        !(modalData != null && modalData.serviceGroup.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: 12, children: "Sorry, no services found under this category." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 571,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 545,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 544,
        columnNumber: 7
      }, this)
    ];
  },
  TopVendorsList: () => {
    let data = (0, import_react46.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react45.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 577,
      columnNumber: 32
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Await, { resolve: data.topVendors, children: (res) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 3, children: "Top service providers" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 581,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 580,
        columnNumber: 11
      }, this),
      res.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "home-section-card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Title, { order: 5, children: category.name }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 585,
          columnNumber: 17
        }, this),
        category.vendor.map((vendor, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid, { gutter: 20, align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { children: i + 1 }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 587,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            import_core26.Avatar,
            {
              src: vendor.profileImageName ? PATH.RESOURCE_URL + vendor.profileImageName : PATH.AVATAR_PLACEHOLDER
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 589,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 588,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Grid.Col, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "nowrap", style: { maxWidth: "80px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Link, { to: routes_data_default.VendorProfile.replace(":id", vendor.username), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { fw: 500, children: vendor.username }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 594,
            columnNumber: 138
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 594,
            columnNumber: 74
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 594,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 593,
            columnNumber: 19
          }, this)
        ] }, vendor.username, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 586,
          columnNumber: 53
        }, this)),
        !category.vendor.length && "Sorry, no data found.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core26.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react46.Link, { to: routes_data_default.Services.replace(":id", category.keyName), children: "View all" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 597,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 597,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 584,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 583,
        columnNumber: 13
      }, this) }, "ce" + category.id, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 582,
        columnNumber: 34
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 579,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 578,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 577,
      columnNumber: 12
    }, this);
  }
}, index_default = Home.Index;

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => UserLayout,
  loader: () => loader22
});
var import_node23 = require("@remix-run/node"), import_react47 = require("@remix-run/react");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
async function loader22(args) {
  return (await getSession(
    args.request.headers.get("Cookie")
  )).get(USER_SESSION_KEY) ? !0 : (0, import_node23.redirect)("/");
}
function UserLayout() {
  let data = (0, import_react47.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react47.Outlet, {}, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 21,
    columnNumber: 12
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7N3MQQOM.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-X5ADFWA7.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-F3NDZE2Q.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LCB33LTR.js", imports: ["/build/_shared/chunk-YXU7GG5D.js", "/build/_shared/chunk-S5ZRTWHC.js", "/build/_shared/chunk-IL6MPO7K.js", "/build/_shared/chunk-OVLDEC3B.js", "/build/_shared/chunk-YPPC4632.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-YUN5LVTZ.js", "/build/_shared/chunk-S5U6Z5DG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_api.login": { id: "routes/_api.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.login-EGZYGHF7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_api.search": { id: "routes/_api.search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.search-DIFQTRHV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_api.verify-otp": { id: "routes/_api.verify-otp", parentId: "root", path: "verify-otp", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.verify-otp-POBOCWQC.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-YC6VSMS6.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.order.submit": { id: "routes/_auth.order.submit", parentId: "routes/_auth", path: "order/submit", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.order.submit-AQP3BU3O.js", imports: ["/build/_shared/chunk-ZFB5SYWB.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.home": { id: "routes/_auth.user.home", parentId: "routes/_auth", path: "user/home", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user.home-NLV5UEVN.js", imports: ["/build/_shared/chunk-5UZB3SLW.js", "/build/_shared/chunk-V457K2MQ.js", "/build/_shared/chunk-D7D3MAI5.js", "/build/_shared/chunk-S5ZRTWHC.js", "/build/_shared/chunk-NFLAYZ4G.js", "/build/_shared/chunk-ZFB5SYWB.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-S5U6Z5DG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.order.$id": { id: "routes/_auth.user.order.$id", parentId: "routes/_auth", path: "user/order/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user.order.$id-HMDIUKHL.js", imports: ["/build/_shared/chunk-5UZB3SLW.js", "/build/_shared/chunk-V457K2MQ.js", "/build/_shared/chunk-FWMSOPMH.js", "/build/_shared/chunk-D7D3MAI5.js", "/build/_shared/chunk-S5ZRTWHC.js", "/build/_shared/chunk-NFLAYZ4G.js", "/build/_shared/chunk-ZFB5SYWB.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-S5U6Z5DG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-2MWBVIAP.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-PX6IH325.js", "/build/_shared/chunk-ZFB5SYWB.js", "/build/_shared/chunk-2Q7K6WD5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.add.$vendorServiceGroupId": { id: "routes/cart.add.$vendorServiceGroupId", parentId: "root", path: "cart/add/:vendorServiceGroupId", index: void 0, caseSensitive: void 0, module: "/build/routes/cart.add.$vendorServiceGroupId-W62X2GZN.js", imports: ["/build/_shared/chunk-L2BJTNOV.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-2Q7K6WD5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.add._index": { id: "routes/cart.add._index", parentId: "root", path: "cart/add", index: !0, caseSensitive: void 0, module: "/build/routes/cart.add._index-2YRUXJOV.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.checkout": { id: "routes/cart.checkout", parentId: "root", path: "cart/checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/cart.checkout-GLHRFHXN.js", imports: ["/build/_shared/chunk-V457K2MQ.js", "/build/_shared/chunk-FWMSOPMH.js", "/build/_shared/chunk-D7D3MAI5.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/collections.$id.$highlight": { id: "routes/collections.$id.$highlight", parentId: "root", path: "collections/:id/:highlight", index: void 0, caseSensitive: void 0, module: "/build/routes/collections.$id.$highlight-PL7E52RZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/collections.$id._index": { id: "routes/collections.$id._index", parentId: "root", path: "collections/:id", index: !0, caseSensitive: void 0, module: "/build/routes/collections.$id._index-IB4UKOPH.js", imports: ["/build/_shared/chunk-2Q7K6WD5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login.redirect": { id: "routes/login.redirect", parentId: "root", path: "login/redirect", index: void 0, caseSensitive: void 0, module: "/build/routes/login.redirect-RG3ROWFZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/order.success": { id: "routes/order.success", parentId: "root", path: "order/success", index: void 0, caseSensitive: void 0, module: "/build/routes/order.success-56V4FJY4.js", imports: ["/build/_shared/chunk-FWMSOPMH.js", "/build/_shared/chunk-D7D3MAI5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup._index": { id: "routes/partner.signup._index", parentId: "root", path: "partner/signup", index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup._index-DHGFLQJL.js", imports: ["/build/_shared/chunk-FWMSOPMH.js", "/build/_shared/chunk-D7D3MAI5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup.onboard.$id._index": { id: "routes/partner.signup.onboard.$id._index", parentId: "root", path: "partner/signup/onboard/:id", index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard.$id._index-PWTAFKDT.js", imports: ["/build/_shared/chunk-NFLAYZ4G.js", "/build/_shared/chunk-ZFB5SYWB.js", "/build/_shared/chunk-FCFOHXM5.js", "/build/_shared/chunk-2Q7K6WD5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup.onboard.$id.success": { id: "routes/partner.signup.onboard.$id.success", parentId: "root", path: "partner/signup/onboard/:id/success", index: void 0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard.$id.success-JSRFVDTR.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup.onboard._index": { id: "routes/partner.signup.onboard._index", parentId: "root", path: "partner/signup/onboard", index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard._index-L6YCFFJK.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-FCFOHXM5.js", "/build/_shared/chunk-2Q7K6WD5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user": { id: "routes/profile.$user", parentId: "root", path: "profile/:user", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user-SDN32JVN.js", imports: ["/build/_shared/chunk-L2BJTNOV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/profile.$user._index": { id: "routes/profile.$user._index", parentId: "routes/profile.$user", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/profile.$user._index-ZDVRLJ5G.js", imports: ["/build/_shared/chunk-PX6IH325.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-OVLDEC3B.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-55OPHICG.js", "/build/_shared/chunk-WIVSVGKO.js", "/build/_shared/chunk-YUN5LVTZ.js", "/build/_shared/chunk-S5U6Z5DG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user.portfolio": { id: "routes/profile.$user.portfolio", parentId: "routes/profile.$user", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user.portfolio-I4ZGRVGZ.js", imports: ["/build/_shared/chunk-55OPHICG.js", "/build/_shared/chunk-WIVSVGKO.js", "/build/_shared/chunk-YUN5LVTZ.js", "/build/_shared/chunk-S5U6Z5DG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services.$id.$subId": { id: "routes/services.$id.$subId", parentId: "root", path: "services/:id/:subId", index: void 0, caseSensitive: void 0, module: "/build/routes/services.$id.$subId-E2EFD5KG.js", imports: ["/build/_shared/chunk-MFCTH5FY.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-WIVSVGKO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services.$id._index": { id: "routes/services.$id._index", parentId: "root", path: "services/:id", index: !0, caseSensitive: void 0, module: "/build/routes/services.$id._index-XXLCXAEJ.js", imports: ["/build/_shared/chunk-MFCTH5FY.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-WIVSVGKO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "769d3915", hmr: { runtime: "/build/_shared\\chunk-F3NDZE2Q.js", timestamp: 1709897502059 }, url: "/build/manifest-769D3915.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/partner.signup.onboard.$id.success": {
    id: "routes/partner.signup.onboard.$id.success",
    parentId: "root",
    path: "partner/signup/onboard/:id/success",
    index: void 0,
    caseSensitive: void 0,
    module: partner_signup_onboard_id_success_exports
  },
  "routes/partner.signup.onboard.$id._index": {
    id: "routes/partner.signup.onboard.$id._index",
    parentId: "root",
    path: "partner/signup/onboard/:id",
    index: !0,
    caseSensitive: void 0,
    module: partner_signup_onboard_id_index_exports
  },
  "routes/cart.add.$vendorServiceGroupId": {
    id: "routes/cart.add.$vendorServiceGroupId",
    parentId: "root",
    path: "cart/add/:vendorServiceGroupId",
    index: void 0,
    caseSensitive: void 0,
    module: cart_add_vendorServiceGroupId_exports
  },
  "routes/partner.signup.onboard._index": {
    id: "routes/partner.signup.onboard._index",
    parentId: "root",
    path: "partner/signup/onboard",
    index: !0,
    caseSensitive: void 0,
    module: partner_signup_onboard_index_exports
  },
  "routes/collections.$id.$highlight": {
    id: "routes/collections.$id.$highlight",
    parentId: "root",
    path: "collections/:id/:highlight",
    index: void 0,
    caseSensitive: void 0,
    module: collections_id_highlight_exports
  },
  "routes/profile.$user.portfolio": {
    id: "routes/profile.$user.portfolio",
    parentId: "routes/profile.$user",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: profile_user_portfolio_exports
  },
  "routes/collections.$id._index": {
    id: "routes/collections.$id._index",
    parentId: "root",
    path: "collections/:id",
    index: !0,
    caseSensitive: void 0,
    module: collections_id_index_exports
  },
  "routes/partner.signup._index": {
    id: "routes/partner.signup._index",
    parentId: "root",
    path: "partner/signup",
    index: !0,
    caseSensitive: void 0,
    module: partner_signup_index_exports
  },
  "routes/profile.$user._index": {
    id: "routes/profile.$user._index",
    parentId: "routes/profile.$user",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: profile_user_index_exports
  },
  "routes/_auth.user.order.$id": {
    id: "routes/_auth.user.order.$id",
    parentId: "routes/_auth",
    path: "user/order/:id",
    index: void 0,
    caseSensitive: void 0,
    module: auth_user_order_id_exports
  },
  "routes/services.$id.$subId": {
    id: "routes/services.$id.$subId",
    parentId: "root",
    path: "services/:id/:subId",
    index: void 0,
    caseSensitive: void 0,
    module: services_id_subId_exports
  },
  "routes/services.$id._index": {
    id: "routes/services.$id._index",
    parentId: "root",
    path: "services/:id",
    index: !0,
    caseSensitive: void 0,
    module: services_id_index_exports
  },
  "routes/_auth.order.submit": {
    id: "routes/_auth.order.submit",
    parentId: "routes/_auth",
    path: "order/submit",
    index: void 0,
    caseSensitive: void 0,
    module: auth_order_submit_exports
  },
  "routes/cart.add._index": {
    id: "routes/cart.add._index",
    parentId: "root",
    path: "cart/add",
    index: !0,
    caseSensitive: void 0,
    module: cart_add_index_exports
  },
  "routes/_api.verify-otp": {
    id: "routes/_api.verify-otp",
    parentId: "root",
    path: "verify-otp",
    index: void 0,
    caseSensitive: void 0,
    module: api_verify_otp_exports
  },
  "routes/_auth.user.home": {
    id: "routes/_auth.user.home",
    parentId: "routes/_auth",
    path: "user/home",
    index: void 0,
    caseSensitive: void 0,
    module: auth_user_home_exports
  },
  "routes/login.redirect": {
    id: "routes/login.redirect",
    parentId: "root",
    path: "login/redirect",
    index: void 0,
    caseSensitive: void 0,
    module: login_redirect_exports
  },
  "routes/cart.checkout": {
    id: "routes/cart.checkout",
    parentId: "root",
    path: "cart/checkout",
    index: void 0,
    caseSensitive: void 0,
    module: cart_checkout_exports
  },
  "routes/order.success": {
    id: "routes/order.success",
    parentId: "root",
    path: "order/success",
    index: void 0,
    caseSensitive: void 0,
    module: order_success_exports
  },
  "routes/profile.$user": {
    id: "routes/profile.$user",
    parentId: "root",
    path: "profile/:user",
    index: void 0,
    caseSensitive: void 0,
    module: profile_user_exports
  },
  "routes/_api.search": {
    id: "routes/_api.search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: api_search_exports
  },
  "routes/_api.login": {
    id: "routes/_api.login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: api_login_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
