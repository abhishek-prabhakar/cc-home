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
var root_default = "/build/_assets/root-SEUMX3F6.css";

// node_modules/react-photo-view/dist/react-photo-view.css
var react_photo_view_default = "/build/_assets/react-photo-view-7Z2GU4I5.css";

// app/components/Footer.tsx
var import_core2 = require("@mantine/core"), import_react2 = require("@remix-run/react"), import_react3 = require("react");

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
var import_icons_react = require("@tabler/icons-react"), import_icons_react2 = require("@tabler/icons-react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  let data = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { background: "#fbfbfb", marginTop: "100px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Container, { size: "lg", pt: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/assets/brand-logo-1.png", width: "124px" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 15,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "lg" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 17,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Await, { resolve: data.pages, children: (navList) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid, { gutter: "xl", children: navList.map((item) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { span: { base: 6, md: 2 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fw: 500, pb: "sm", children: item.name }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 22,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Stack, { children: (_a = item.children[0]) == null ? void 0 : _a.list.map((child, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: child.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { size: "sm", children: child.name }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 24,
          columnNumber: 101
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 24,
          columnNumber: 79
        }, this)) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 23,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 21,
        columnNumber: 50
      }, this);
    }) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 20,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Divider, {}, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "md" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", children: "Follow us on social media" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Group, { gap: "xl", pt: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.ThemeIcon, { variant: "light", radius: "xl", size: "lg", color: "gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react.IconBrandInstagram, {}, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.ThemeIcon, { variant: "light", radius: "xl", size: "lg", color: "gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react2.IconBrandYoutube, {}, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "md" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Divider, {}, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { ta: "center", children: "\xA9 Celebria Collective 2024. All Rights Reserved." }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "md" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Group, { justify: "center", gap: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", ta: "center", children: "Privacy Policy" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", ta: "center", children: "Terms And Conditions" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 12,
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
    key: "0",
    available: !0
  },
  {
    label: "Mumbai",
    key: "1",
    available: !1
  },
  {
    label: "Delhi",
    key: "2",
    available: !1
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
        alert("Something went wrong. Please try again."), setBusy(!1);
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      inlineMode && showVerifyUserDialog ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Form, { onSubmit: handleSubmit(startUserLogin), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Title, { order: 5, children: title }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_hook_form.Controller, { name: "phone", control, render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Input, { leftSection: "+91", placeholder: "Enter your phone number.", required: !0, ...field }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 39,
          columnNumber: 83
        }, this) }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Button, { variant: "filled", type: "submit", loading: isBusy, children: "Login" }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 36,
        columnNumber: 61
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(UserLogin.VerifyOtp, { redirectUrl, username: getUsername, modalOpen: showVerifyUserDialog, onClose: () => toggleVerifyUserDialog(!1), inlineMode: inlineMode || !1 }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 36,
      columnNumber: 16
    }, this);
  },
  VerifyOtp: ({ username, redirectUrl, modalOpen, onClose, inlineMode }) => {
    let [invalidInput, setInvalidInput] = (0, import_react5.useState)(!1), fetcher = (0, import_react4.useFetcher)();
    (0, import_react5.useEffect)(() => {
      var _a;
      ((_a = fetcher.data) == null ? void 0 : _a.success) === !1 && setInvalidInput(!0);
    }, [fetcher.data]);
    function FormBody() {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(fetcher.Form, { method: "post", action: "/verify-otp", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Stack, { gap: "md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Input.Wrapper, { label: "Enter OTP", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.PinInput, { name: "otp", error: invalidInput, onChange: () => setInvalidInput(!1) }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "phone", value: username || 0 }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 62,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "redirectUrl", value: redirectUrl || "" }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Button, { type: "submit", variant: "filled", loading: ["submitting", "loading"].includes(fetcher.state), children: "Continue" }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/UserLogin.tsx",
        lineNumber: 57,
        columnNumber: 20
      }, this);
    }
    return inlineMode && modalOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormBody, {}, void 0, !1, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 69,
      columnNumber: 42
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Modal, { title: "Verify OTP", opened: modalOpen, onClose: () => onClose(), centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormBody, {}, void 0, !1, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 69,
      columnNumber: 57
    }, this);
  }
}, UserLogin_default = UserLogin.Index;

// app/components/NavigationMenu.tsx
var import_react7 = require("@remix-run/react");

// app/routes.data.ts
var RoutesList = {
  VendorProfile: "/profile/:id",
  VendorProfileWithService: "/profile/:id?service=:sGrpId",
  Collections: "/collections/:id",
  CollectionsByVendor: "/collections/:id/:vendorType",
  Services: "/services/:id",
  ServiceGroup: "/services/:id/:subId",
  Cart: "/cart/checkout",
  CartItem: "/cart/add/:id",
  CartAddEdit: "/cart/add/:venderServiceGroupId",
  VendorSignupForm: "/partner/signup/onboard/:id",
  CheckoutPayment: "/cart/checkout/payment"
};
function getRoute(key, params = {}) {
  let path = RoutesList[key];
  return Object.keys(params).forEach((item) => {
    path = path.replace(":" + item, params[item].toString());
  }), path;
}
var Routes = {
  get: getRoute
}, routes_data_default = Routes;

// app/components/NavigationMenu.tsx
var import_core5 = require("@mantine/core"), import_icons_react3 = require("@tabler/icons-react");

// app/components/ComingSoonModal.tsx
var import_core4 = require("@mantine/core"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ComingSoonModal() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Grid, { align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Image, { src: "/assets/area-coming-soon.png" }, void 0, !1, {
      fileName: "app/components/ComingSoonModal.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ComingSoonModal.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Grid.Col, { span: { base: 12, md: 6 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Title, { order: 5, children: "Coming soon" }, void 0, !1, {
        fileName: "app/components/ComingSoonModal.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.Text, { children: "Sorry, we are currently not serviceable in this area" }, void 0, !1, {
        fileName: "app/components/ComingSoonModal.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ComingSoonModal.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ComingSoonModal.tsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}
var ComingSoonModal_default = ComingSoonModal;

// app/components/NavigationMenu.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), menuArtisantStyle = {
  borderRadius: "3px",
  padding: "20px 20px",
  background: "url(/assets/user-menu-bg.jpg) top",
  backgroundSize: "cover"
}, AppNavigation = {
  MainMenu: () => {
    let data = (0, import_react7.useLoaderData)();
    function dropdownContent(navitem) {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Stack, { p: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Text, { children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: routes_data_default.get("Services", { id: navitem.id }), children: [
            "Browse all ",
            navitem.name
          ] }, void 0, !0, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        (_a = navitem.children) == null ? void 0 : _a.map((menuItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Stack, { gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Text, { c: "dimmed", children: menuItem.name }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          menuItem.list.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Text, { size: "sm", c: "black", children: item.name }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, this) }, item.id, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this)),
          !menuItem.list.length && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Text, { c: "dimmed", children: "Sorry, no results found." }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 56,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this) }, menuItem.name, !1, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 38,
        columnNumber: 14
      }, this);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 64,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Await, { resolve: data.pages, children: (navList) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Flex, { justify: "center", gap: "sm", py: "md", children: navList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Box, { style: { cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Menu, { trigger: "click-hover", shadow: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core5.Flex,
        {
          align: "center",
          className: "header-nav-item-text",
          gap: "xs",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: item.name }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 77,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react3.IconChevronDown, { size: 12 }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 78,
              columnNumber: 25
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 72,
          columnNumber: 23
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Menu.Dropdown, { children: dropdownContent(item) }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 81,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 70,
      columnNumber: 19
    }, this) }, "menu-" + item.id, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this);
  },
  Drawer: ({ user }) => {
    let data = (0, import_react7.useLoaderData)(), location = (0, import_react7.useLocation)(), [openDrawer, setDrawerState] = (0, import_react6.useState)(!1), [currentLocation, setCurrentLocation] = (0, import_react6.useState)("Bangalore"), [showComingSoonDialog, setComingSoonDialog] = (0, import_react6.useState)(!1);
    (0, import_react6.useEffect)(() => {
      toggleDrawer(!1);
    }, [location.pathname]);
    function toggleDrawer(show = !openDrawer) {
      setDrawerState(show);
    }
    function handleLocationMenuClick(key) {
      let item = locationList.find((x) => x.key === key);
      item != null && item.available ? setCurrentLocation(item.label) : setComingSoonDialog(!0);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react3.IconMenu, { onClick: () => toggleDrawer() }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core5.Drawer,
        {
          position: "left",
          w: 300,
          title: "Browse",
          onClose: () => toggleDrawer(),
          opened: openDrawer,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 127,
              columnNumber: 31
            }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Await, { resolve: data.pages, children: (navList) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Accordion, { children: navList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Accordion.Item, { value: item.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Accordion.Control, { children: item.name }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 133,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Accordion.Panel, { children: item.children.map((child, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Stack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Title, { order: 5, children: child.name }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 136,
                  columnNumber: 25
                }, this),
                [{
                  id: item.id,
                  path: routes_data_default.get("Services", { id: item.id }),
                  name: "Browse all "
                }].concat(child.list).map((menuItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: menuItem.path, onClick: () => toggleDrawer(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Text, { children: menuItem.name }, menuItem.id, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 142,
                  columnNumber: 105
                }, this) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 142,
                  columnNumber: 44
                }, this))
              ] }, "child" + i, !0, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 135,
                columnNumber: 56
              }, this)) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 134,
                columnNumber: 21
              }, this)
            ] }, item.id, !0, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 132,
              columnNumber: 40
            }, this)) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 128,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 127,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Space, { h: "sm" }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 152,
              columnNumber: 11
            }, this),
            user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/user/home", onClick: () => toggleDrawer(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Button, { variant: "white", fullWidth: !0, children: "My Bookings" }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 155,
                columnNumber: 75
              }, this) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 155,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Button, { size: "sm", variant: "subtle", children: "Logout" }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 156,
                columnNumber: 34
              }, this) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 156,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 154,
              columnNumber: 13
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserLogin_default, { onSuccess: () => toggleDrawer(!1), inlineMode: !0 }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 158,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Stack, { gap: "lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: menuArtisantStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_core5.Stack,
                {
                  style: { padding: 8 },
                  gap: "md",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Title, { order: 3, children: "Artisan?" }, void 0, !1, {
                      fileName: "app/components/NavigationMenu.tsx",
                      lineNumber: 165,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/partner/signup", onClick: () => toggleDrawer(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Button, { children: "Signup" }, void 0, !1, {
                      fileName: "app/components/NavigationMenu.tsx",
                      lineNumber: 167,
                      columnNumber: 19
                    }, this) }, void 0, !1, {
                      fileName: "app/components/NavigationMenu.tsx",
                      lineNumber: 166,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 161,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 160,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Accordion, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Accordion.Item, { value: "location", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Accordion.Control, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react3.IconWorld, {}, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 173,
                  columnNumber: 42
                }, this), children: "Location" }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 173,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Stack, { children: locationList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Button, { ta: "left", onClick: () => handleLocationMenuClick(item.key), size: "sm", variant: "subtle", children: item.label }, item.key, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 176,
                  columnNumber: 47
                }, this)) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 175,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 174,
                  columnNumber: 17
                }, this)
              ] }, "location", !0, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 172,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 171,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 159,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 120,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Modal, { opened: showComingSoonDialog, onClose: () => setComingSoonDialog(!1), title: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ComingSoonModal_default, {}, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 118,
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
    setUser: (state, action16) => {
      state.id = action16.payload;
    },
    clearUser: (state) => {
      state.id = null;
    }
  }
}), { setUser, clearUser } = userStore.actions, getUser = (state) => state.user.id, user_store_default = userStore.reducer;

// app/components/Header.tsx
var import_core6 = require("@mantine/core"), import_icons_react4 = require("@tabler/icons-react"), import_hooks = require("@mantine/hooks");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), logoStyle = { fontSize: "18px", textTransform: "uppercase", color: "black" }, userMenuStyle = { width: "300px", background: "white", borderRadius: "10px", boxShadow: "0 0 5px #e1e1e1", overflow: "hidden" }, menuArtisantStyle2 = {
  padding: "20px 30px",
  background: "url(/assets/user-menu-bg.jpg) top",
  backgroundSize: "cover"
};
function Header({ user, cartCount }) {
  let location = (0, import_react8.useLocation)(), [currentLocation, setCurrentLocation] = (0, import_react9.useState)("Bangalore"), [showComingSoonDialog, setComingSoonDialog] = (0, import_react9.useState)(!1), dispatch = (0, import_react_redux.useDispatch)(), [opened, { close, open }] = (0, import_hooks.useDisclosure)(!1);
  (0, import_react9.useEffect)(() => {
    dispatch(setUser(user == null ? void 0 : user.id));
  }, [user]);
  function handleLocationMenuClick(key) {
    let item = locationList.find((x) => x.key === key);
    item != null && item.available ? setCurrentLocation(item.label) : setComingSoonDialog(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Grid, { justify: "space-between", align: "center", gutter: 0, py: 10, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Grid.Col, { span: { base: "content", md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Group, { gap: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Box, { hiddenFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NavigationMenu_default.Drawer, { user }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 48,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 47,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header-brand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/", style: logoStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "/assets/brand-logo-1.png", width: "124px" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 51,
          columnNumber: 64
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 51,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 50,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Box, { visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Flex, { className: "cursor-pointer", gap: "sm", align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_icons_react4.IconWorld, { size: 16 }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 57,
              columnNumber: 45
            }, this),
            currentLocation
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 56,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 55,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Menu.Dropdown, { children: locationList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Menu.Item, { onClick: () => handleLocationMenuClick(item.key), children: item.label }, item.key, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 62,
            columnNumber: 67
          }, this)) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 61,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 54,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 53,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 46,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Grid.Col, { span: "auto", visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NavigationMenu_default.MainMenu, {}, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Grid.Col, { span: { base: "content", md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Flex, { gap: 20, justify: "end", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/cart/checkout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Indicator, { disabled: !cartCount, inline: !0, processing: !0, color: "red", size: 12, label: cartCount, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.ActionIcon, { variant: "subtle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_icons_react4.IconShoppingCart, {}, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 76,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 75,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 74,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 73,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Box, { visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Popover, { shadow: "md", position: "bottom", trapFocus: !0, withArrow: !0, opened, onChange: (v) => v ? null : close(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Popover.Target, { children: user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/user/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Avatar, { onMouseEnter: open, radius: "xl" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 83,
            columnNumber: 77
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 83,
            columnNumber: 53
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Button, { onMouseEnter: open, radius: "xl", children: "Sign-in" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 83,
            columnNumber: 129
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 82,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Popover.Dropdown, { p: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: userMenuStyle, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { padding: "12px" }, children: user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Group, { align: "center", justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Box, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Title, { order: 5, children: "Hey!" }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 91,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/user/home", children: "My Bookings" }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 92,
                  columnNumber: 61
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Header.tsx",
                lineNumber: 90,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Button, { size: "sm", variant: "subtle", children: "Logout" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 95,
                columnNumber: 80
              }, this) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 95,
                columnNumber: 61
              }, this) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 94,
                columnNumber: 57
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 89,
              columnNumber: 53
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(UserLogin_default, { inlineMode: !0, redirectUrl: location.pathname }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 98,
              columnNumber: 55
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 87,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: menuArtisantStyle2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Stack, { style: { padding: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Title, { order: 3, children: "Artisan?" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 102,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/partner/signup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Button, { radius: "xl", variant: "outline", children: "Signup" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 103,
                columnNumber: 80
              }, this) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 103,
                columnNumber: 53
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 101,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 100,
              columnNumber: 45
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 86,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 85,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 81,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 80,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 72,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 44,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core6.Modal, { opened: showComingSoonDialog, onClose: () => setComingSoonDialog(!1), title: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ComingSoonModal_default, {}, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 41,
    columnNumber: 12
  }, this);
}

// app/session.server.ts
var import_node2 = require("@remix-run/node"), cookieAge = 60 * 60 * 24 * 7 * 364, userCartCookie = (0, import_node2.createCookie)("cart", {
  maxAge: cookieAge
}), cartCheckoutCookie = (0, import_node2.createCookie)("checkout", {
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
var import_core8 = require("@mantine/core");

// app/mantine.theme.ts
var import_core7 = require("@mantine/core"), CONTAINER_SIZES = {
  xxs: (0, import_core7.rem)(300),
  xs: (0, import_core7.rem)(400),
  sm: (0, import_core7.rem)(500),
  md: (0, import_core7.rem)(800),
  lg: (0, import_core7.rem)(700),
  xl: (0, import_core7.rem)(800),
  xxl: (0, import_core7.rem)(900)
}, primaryBlue = [
  "#a6baff",
  "#6d8eff",
  "#9cb1ff",
  "#7896ff",
  "#5c80ff",
  "#406aff",
  "#184bff",
  "#2353ff",
  "#0038ff",
  "#0028b5"
], theme = (0, import_core7.createTheme)({
  fontFamily: "Inter, sans-serif",
  colors: {
    blue: primaryBlue
  },
  fontSizes: {
    xs: (0, import_core7.rem)(10),
    sm: (0, import_core7.rem)(12),
    md: (0, import_core7.rem)(14),
    lg: (0, import_core7.rem)(16),
    xl: (0, import_core7.rem)(20)
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: (0, import_core7.rem)(400),
          sm: (0, import_core7.rem)(500),
          md: (0, import_core7.rem)(600),
          lg: (0, import_core7.rem)(700),
          xl: (0, import_core7.rem)(800),
          xxl: (0, import_core7.rem)(900)
        }
      }
    }
  }
}), mantine_theme_default = theme;

// app/tracker.ts
var import_uuid = require("uuid");
function defaultGetUserId() {
  return (0, import_uuid.v4)();
}
function startTracker(config) {
  let tracker = null, Tracker = null, userId = "";
  return (async () => {
    Tracker = (await import("@openreplay/tracker")).default;
    let getUserId = config != null && config.userIdEnabled && (config != null && config.getUserId) ? config.getUserId : defaultGetUserId, trackerConfig = {
      projectKey: config == null ? void 0 : config.projectKey
    };
    tracker = new Tracker(trackerConfig), config != null && config.userIdEnabled && (userId = getUserId(), tracker.setUserID(userId)), tracker.start();
  })(), {
    tracker,
    userId
  };
}

// app/root.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links = () => [
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
    let list2 = await db.vendorType.findMany({
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
    resolve(list2.map((x) => ({
      id: x.keyName,
      name: x.name,
      children: [{
        name: "Collections",
        list: x.serviceGroup.reduce((arr, item) => {
          var _a;
          return (_a = item.serviceGroupType) != null && _a.keyName && arr.push({
            path: routes_data_default.get("CollectionsByVendor", { vendorType: x.keyName, id: item.serviceGroupType.keyName }),
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.ColorSchemeScript, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("script", { type: "text/javascript", src: "http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AlcwgxRanFuM02eYSYz58UqTHHXqq6OzzfT8Wd8E9gSEN8nooeI9zpfJIOHYOY1k", async: !0, defer: !0 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.MantineProvider, { theme: mantine_theme_default, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_redux2.Provider, { store: store_default, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Ticker, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.Box, { style: headerStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 190,
          columnNumber: 35
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Await, { resolve: data.user, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header, { user: response, cartCount: data.cartCount }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 192,
          columnNumber: 34
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 191,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 189,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { paddingTop: "40px", position: "relative" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core8.LoadingOverlay, { visible: navigation.state === "loading", overlayProps: { radius: "sm", blur: 2 } }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 176,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "Oops, Something went wrong!" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 213,
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
var import_core9 = require("@mantine/core"), import_node4 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_icons_react5 = require("@tabler/icons-react");

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
function portfolioByUsername(username) {
  if (!username)
    throw new Error("invalid user");
  return db.vendorPortfolio.findMany({
    where: {
      vendor: {
        username
      }
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
  portfolioByUsername,
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
        bio: !0,
        vendorType: {
          select: {
            name: !0
          }
        },
        VendorServiceGroup: {
          take: 1,
          where: {
            isActive: !0
          },
          orderBy: {
            cost: "asc"
          },
          select: {
            cost: !0
          }
        }
      }
    }).then((r) => {
      var _a, _b;
      resolve(r ? {
        id: r.id,
        username: r.username,
        fullName: r.username,
        location: "",
        gender: "",
        type: ((_a = r.vendorType) == null ? void 0 : _a.name) || "",
        primaryColor: r.primaryColor,
        avatar: r.profileImageName ? PATH.RESOURCE_URL + r.profileImageName : PATH.AVATAR_PLACEHOLDER,
        coverImageName: r.coverImageName ? PATH.RESOURCE_URL + r.coverImageName : "",
        bio: r.bio,
        baseCharge: ((_b = r.VendorServiceGroup[0]) == null ? void 0 : _b.cost) || 0
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
        isActive: !0,
        vendor: {
          username
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
            isEstimated: !0,
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
          isEstimated: x.group.isEstimated,
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
        id,
        isActive: !0
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
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
    return (0, import_node4.redirect)(routes_data_default.get("VendorSignupForm", { id: data.id }), {
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Grid, { justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Grid.Col, { span: { base: 12, md: 4, lg: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Stack, { gap: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Title, { order: 5, children: "Do you want to signup for other services?" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 144,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Stack, { gap: "sm", children: data.categoryList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Group, { justify: "space-between", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Text, { td: data.categoryChecklist.includes(item.id) ? "line-through" : "", children: item.name }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 149,
          columnNumber: 41
        }, this),
        data.categoryChecklist.includes(item.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Checkbox, { color: "green", checked: data.categoryChecklist.includes(item.id), labelPosition: "left", label: "Completed" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 151,
          columnNumber: 85
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Button, { type: "submit", name: "create", value: item.id, variant: "outline", radius: "xl", size: "xs", children: "Signup" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Stack, { justify: "center", align: "center", p: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_icons_react5.IconCircleCheck, { style: { width: "50px", height: "50px" }, color: "var(--ui-color-success)" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 160,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Stack, { style: { textAlign: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Title, { order: 2, children: "Thank you for your interest!" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
            lineNumber: 162,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Text, { children: "You'll recieve a confirmation email in 2-3 business days." }, void 0, !1, {
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
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action2,
  default: () => partner_signup_onboard_id_index_default,
  loader: () => loader3
});
var import_core11 = require("@mantine/core"), import_client4 = require("@prisma/client"), import_react14 = require("@remix-run/react"), import_icons_react6 = require("@tabler/icons-react"), import_react15 = require("react");

// app/components/FileUploader.tsx
var import_core10 = require("@mantine/core"), import_uploady = __toESM(require("@rpldy/uploady")), import_react13 = require("react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Uploader = (props) => {
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
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { loading: isBusy, variant: props.buttonType === "primary" ? "filled" : "outline", disabled: !props.id, onClick, children: props.label || "Choose Image" }, void 0, !1, {
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
  }, []), pageReady ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Uploader, { id: props.id, buttonType: props.buttonType, label: props.label, onUpload: props.onUpload }, void 0, !1, {
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
      id: vendorServiceGroupId,
      vendor: {
        isActive: !0
      }
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
          imageName: !0,
          minHour: !0,
          isEstimated: !0
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
StatusMarker.set(import_client3.BookingStatus.PENDING, "gray");
StatusMarker.set(import_client3.BookingStatus.ACCEPTED, "#87d068");
StatusMarker.set(import_client3.BookingStatus.IN_PROGRESS, "yellow");
StatusMarker.set(import_client3.BookingStatus.COMPLETED, "#108ee9");
StatusMarker.set(import_client3.BookingStatus.CANCELLED, "#f50");
StatusMarker.set(import_client3.BookingStatus.REJECTED, "#f50");
var FareModeLabel = /* @__PURE__ */ new Map();
FareModeLabel.set(import_client3.FareMode.FLAT, "Flat Fee");
FareModeLabel.set(import_client3.FareMode.HOURLY, "Hourly");

// app/routes/partner.signup.onboard.$id._index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
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
  let applicationId = args.params.id, data = await db.vendor.findFirst({
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
    let selectedServiceGroups = data.VendorServiceGroup.map((x) => x.group.id), availableServiceGroups = vendorTypes.map((x) => ({ id: x.id, name: x.name, serviceGroups: x.serviceGroup.filter((y) => !selectedServiceGroups.includes(y.id)).map((y) => ({ id: y.id, name: y.name, minHour: y.minHour, serviceGroupItem: y.serviceGroupItem })) }));
    return { profile: data, categories: availableServiceGroups, files };
  } else
    throw new Response("Coudn't find any application with this profile ", {
      status: 500
    });
  return null;
}
var OnBoardPage = {
  Index: () => {
    var _a, _b, _c, _d, _e, _f;
    let data = (0, import_react14.useLoaderData)(), fetcher = (0, import_react14.useFetcher)(), [activeType, setJobType] = (0, import_react15.useState)(""), [showProfileDialog, setProfileDialog] = (0, import_react15.useState)(!1), [serviceList, setServiceList] = (0, import_react15.useState)([]);
    (0, import_react15.useEffect)(() => {
      fetcher.data && alert("Thank you for updating your profile");
    }, [fetcher.data]), (0, import_react15.useEffect)(() => {
      var _a2;
      setActiveGroup(((_a2 = data.profile.vendorType) == null ? void 0 : _a2.id) || ""), hideEditProfileDialog();
    }, [data.categories]), (0, import_react15.useEffect)(() => {
      var _a2;
      setActiveGroup(((_a2 = data.profile.vendorType) == null ? void 0 : _a2.id) || "");
    }, []);
    function setActiveGroup(id) {
      setJobType(id);
      let list2 = data.categories.find((x) => x.id === id);
      setServiceList((list2 == null ? void 0 : list2.serviceGroups) || []);
    }
    function showEditProfileDialog() {
      setProfileDialog(!0);
    }
    function hideEditProfileDialog() {
      setProfileDialog(!1);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid, { gutter: 40, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: 12, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Title, { children: "Welcome" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 446,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Title, { order: 5, children: [
            "Hello ",
            data == null ? void 0 : data.profile.name,
            ", Please fill up the following details."
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 447,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 445,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Divider, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 450,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 449,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Card, { withBorder: !0, shadow: "xs", title: "Update Profile", children: (_a = data == null ? void 0 : data.profile) != null && _a.vendorType && ((_b = data.profile) != null && _b.username) ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid, { gutter: 20, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: "Profile Type: " }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 457,
              columnNumber: 42
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 457,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Flex, { gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: (_d = (_c = data.profile) == null ? void 0 : _c.vendorType) == null ? void 0 : _d.name }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 459,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, onClick: showEditProfileDialog, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Button, { variant: "outline", size: "xs", radius: "xl", children: "Update" }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 460,
                columnNumber: 88
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 460,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 458,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 456,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: "Public name:" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 463,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { c: "dimmed", children: "User will see this instead of your real name" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 464,
              columnNumber: 42
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 464,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Flex, { gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: (_e = data.profile) == null ? void 0 : _e.username }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 465,
                columnNumber: 54
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, onClick: showEditProfileDialog, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Button, { variant: "outline", size: "xs", radius: "xl", children: "Update" }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 465,
                columnNumber: 147
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 465,
                columnNumber: 100
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 465,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 462,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 455,
          columnNumber: 29
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(OnBoardPage.EditProfileForm, { onSuccess: hideEditProfileDialog }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 467,
          columnNumber: 39
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 453,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 452,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: 12 }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 470,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: serviceList.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(OnBoardPage.SelectCategory, { serviceList, activeType }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 472,
          columnNumber: 43
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 471,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: (_f = data.profile.VendorServiceGroup) != null && _f.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(OnBoardPage.Documents, { data }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 475,
          columnNumber: 64
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 474,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 444,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Modal, { title: "Modify Profile", opened: showProfileDialog, onClose: () => hideEditProfileDialog(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(OnBoardPage.EditProfileForm, { onSuccess: hideEditProfileDialog }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 479,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 478,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 443,
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Card, { withBorder: !0, shadow: "xs", title: "Choose your services", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: "Add one or more services from below" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 504,
          columnNumber: 26
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 504,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Select, { value: (_a = getServiceDialogData == null ? void 0 : getServiceDialogData.group) == null ? void 0 : _a.id, style: { width: "100%" }, size: "large", placeholder: "Choose...", onChange: (v) => setService(v || ""), data: serviceList.map((service) => ({ value: service.id, label: service.name })), allowDeselect: !1 }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 505,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: "Selected Services" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 507,
          columnNumber: 26
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 507,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(OnBoardPage.CostSection, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 508,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 503,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 502,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Modal, { title: (getServiceDialogData == null ? void 0 : getServiceDialogData.group.name) + " - Services & Cost", opened: !!(getServiceDialogData != null && getServiceDialogData.id), onClose: () => setServiceDialogData(null), children: getServiceDialogData && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(OnBoardPage.UpdateGroupServiceCost, { activeType, addService: !0, item: getServiceDialogData, onClose: () => setServiceDialogData(null) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 512,
        columnNumber: 42
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 511,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 501,
      columnNumber: 16
    }, this);
  },
  CostSection: () => {
    var _a;
    let data = (0, import_react14.useLoaderData)();
    return (_a = data.profile.VendorServiceGroup) != null && _a.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Accordion, { children: data.profile.VendorServiceGroup.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Accordion.Item, { value: item.id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Accordion.Control, { children: item.group.name }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 521,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(OnBoardPage.UpdateGroupServiceCost, { item }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 523,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 522,
        columnNumber: 17
      }, this)
    ] }, item.id, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 520,
      columnNumber: 67
    }, this)) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 519,
      columnNumber: 58
    }, this) : "Please add services from above list to get started.";
  },
  Documents: ({ data }) => {
    let fetcher = (0, import_react14.useFetcher)(), [fileType, setFileType] = (0, import_react15.useState)();
    function uploadDocs(file) {
      let form = new FormData();
      form.set("action", "DOCUMENTS" /* DOCUMENTS */), form.set("fileType", fileType || ""), form.set("fileName", file), fetcher.submit(form, { method: "POST" }), setFileType(null);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Card, { withBorder: !0, shadow: "xs", title: "Confirm your identity", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(fetcher.Form, { method: "post", action: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid, { gutter: 40, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 5 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Select, { placeholder: "Select document type", style: { width: "100%" }, onChange: (v) => setFileType(v), data: fileTypes.map((x) => ({ label: x.name, value: x.name })) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 547,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { c: "dimmed", children: "Upload any valid document to prove your identity." }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 548,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 546,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 7 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FileUploader_default, { id: fileType || "", label: "Choose file", onUpload: (v) => uploadDocs(v) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 551,
            columnNumber: 25
          }, this),
          !fileType && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { c: "dimmed", children: "Please select a document type" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 552,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 550,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { children: fetcher.state === "submitting" && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Loader, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 555,
          columnNumber: 60
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 554,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 545,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 543,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Thead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Tr, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Th, { children: "Document Type" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 563,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Th, { children: "File Name" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 564,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Th, {}, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 565,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 562,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 561,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Tbody, { children: data.files.map((element) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Tr, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Td, { children: element.fileType }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 570,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Td, { children: element.fileName }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 571,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Table.Td, {}, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 572,
            columnNumber: 25
          }, this)
        ] }, element.id, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 569,
          columnNumber: 48
        }, this)) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 568,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 560,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Divider, {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 576,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Flex, { justify: "end", pt: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.Link, { to: "success", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Button, { variant: "filled", radius: "xl", disabled: !data.files.length, children: "Contiue" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 578,
        columnNumber: 36
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 578,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 577,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 542,
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(fetcher.Form, { method: "post", action: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Alert, { title: "Kindly read all the inclusive services and set your base charge accordingly.", variant: "light", color: "blue", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_icons_react6.IconInfoCircle, {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 610,
        columnNumber: 140
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 610,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 610,
        columnNumber: 162
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid, { gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Title, { order: 5, children: "Base Charge" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 613,
            columnNumber: 26
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 613,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Input, { width: "100%", leftSection: "\u20B9", required: !0, name: "groupCost", type: "number", min: "1", defaultValue: item.cost }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 614,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "categoryId", value: activeType }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 615,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "serviceGroupId", value: item.group.id }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 616,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 612,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Title, { order: 5, children: "Extra hour charges" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 619,
            columnNumber: 26
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 619,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Input, { width: "100%", leftSection: "\u20B9", name: "extraHourCost", type: "number", min: "0", defaultValue: item.costExtraHour }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 620,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 618,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 611,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { style: { padding: "10px 0 20px" }, children: [
        "Approximate hour required for this job is ",
        item.group.minHour,
        " hours."
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 623,
        columnNumber: 13
      }, this),
      item.group.serviceGroupItem.map((service, i) => {
        var _a, _b, _c, _d, _e;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid, { gutter: 20, children: [
          ((_a = item.group.serviceGroupItem[i - 1]) == null ? void 0 : _a.isOptional) !== service.isOptional && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: 12, children: service.isOptional ? [/* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Title, { style: { color: "#1890ff" }, order: 5, children: "Additional Services" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 627,
            columnNumber: 44
          }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { style: { paddingBottom: "10px" }, children: "(Choose only applicable services)" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 627,
            columnNumber: 119
          }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Alert, { variant: "light", color: "blue", title: "Do not add base charge to additional service.", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_icons_react6.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 627,
            columnNumber: 295
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 627,
            columnNumber: 199
          }, this)] : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Title, { style: { color: "#1890ff" }, order: 5, children: "Services included in this category" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 627,
            columnNumber: 321
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 626,
            columnNumber: 91
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: 2, children: service.isOptional ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_core11.Checkbox,
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
              lineNumber: 630,
              columnNumber: 43
            },
            this
          ) : [/* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              lineNumber: 634,
              columnNumber: 27
            },
            this
          ), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "cost", value: 0 }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 635,
            columnNumber: 56
          }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "duration", value: 1 }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 635,
            columnNumber: 103
          }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", value: service.service.fareMode, name: "fareMode" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 635,
            columnNumber: 154
          }, this)] }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 629,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: [
              service.service.name,
              " ",
              (_b = service.addonGroup) != null && _b.name ? "(" + ((_c = service.addonGroup) == null ? void 0 : _c.name) + ")" : ""
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 638,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { c: "dimmed", children: service.service.description }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 640,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 639,
              columnNumber: 21
            }, this),
            enabledIds.includes(service.service.id) && service.isOptional && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid, { gutter: 20, style: { paddingTop: "10px" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 5 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", value: service.service.fareMode, name: "fareMode" }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 644,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { children: "Charged by:" }, void 0, !1, {
                    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                    lineNumber: 645,
                    columnNumber: 34
                  }, this),
                  " ",
                  FareModeLabel.get(service.service.fareMode)
                ] }, void 0, !0, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 645,
                  columnNumber: 29
                }, this),
                service.service.fareMode === import_client4.FareMode.HOURLY ? [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { children: "Duration" }, void 0, !1, {
                    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                    lineNumber: 646,
                    columnNumber: 83
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                    lineNumber: 646,
                    columnNumber: 78
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Input, { rightSection: "hours", defaultValue: ((_d = item.vendorService.find((x) => x.serviceId === service.service.id)) == null ? void 0 : _d.duration) || item.group.minHour, name: "duration", type: "number", required: !0, min: item.group.minHour }, void 0, !1, {
                    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                    lineNumber: 647,
                    columnNumber: 29
                  }, this)
                ] : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "duration", value: 1 }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 647,
                  columnNumber: 239
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 643,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 7 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { children: "Cost" }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 650,
                  columnNumber: 34
                }, this) }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 650,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Input, { leftSection: "\u20B9", defaultValue: ((_e = item.vendorService.find((x) => x.serviceId === service.service.id)) == null ? void 0 : _e.cost) || 0, name: "cost", type: "number", required: !0, min: 0 }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 651,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { c: "dimmed", children: "Enter zero, if you don't charge additional for these services." }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 652,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 649,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 642,
              columnNumber: 87
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 637,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Divider, { style: { padding: 0, margin: "0 0 10px" } }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 656,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 656,
            columnNumber: 17
          }, this)
        ] }, service.service.id, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 625,
          columnNumber: 62
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Flex, { gap: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "vendorGroupId", value: item.id }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 660,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Button, { loading: fetcher.state === "submitting", variant: "filled", radius: "xl", type: "submit", name: "action", value: addService ? "SERVICE" /* SERVICE */ : "COST" /* COST */, children: "Save & Continue" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 661,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 659,
          columnNumber: 17
        }, this),
        !addService && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Button, { variant: "filled", color: "red", radius: "xl", type: "submit", name: "action", value: "REMOVE_SERVICE" /* REMOVE_SERVICE */, children: "Remove" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 664,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 663,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 658,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 609,
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Stack, { style: { width: "100%" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: "Profile Category:" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 705,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Select, { value: profileData.jobType, defaultValue: (_c = (_b = data == null ? void 0 : data.profile) == null ? void 0 : _b.vendorType) == null ? void 0 : _c.id, onChange: (value) => updateData({ jobType: value || "" }), placeholder: "Select a category", style: { width: "100%" }, data: data == null ? void 0 : data.categories.map((item) => ({ value: item.id, label: item.name })) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 706,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 704,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 703,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { fw: 500, children: "Public name:" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 711,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Select, { allowDeselect: !1, defaultValue: (_d = data == null ? void 0 : data.profile) == null ? void 0 : _d.username, onChange: (value) => updateData({ username: value || "" }), placeholder: "Select a username", data: ((_e = data == null ? void 0 : data.profile.usernameSuggestion) == null ? void 0 : _e.split(",").map((item) => ({ value: item, label: item }))) || [{ value: ((_f = data == null ? void 0 : data.profile) == null ? void 0 : _f.username) || "", label: ((_g = data == null ? void 0 : data.profile) == null ? void 0 : _g.username) || "" }] }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 712,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { size: "sm", c: "dimmed", children: "User will see this instead of your real name" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 713,
          columnNumber: 26
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 713,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 710,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 709,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Grid.Col, { span: 12, children: [
        showWarnMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Alert, { variant: "light", color: "red", mb: "md", title: "Are you sure?", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_icons_react6.IconInfoCircle, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 717,
          columnNumber: 106
        }, this), children: [
          "Updating your profile type will reset your saved changes. If you are trying to signup for multiple categories, kindly signup after successfully submitting this one.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Flex, { gap: "sm", pt: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Button, { color: "red", size: "xs", variant: "filled", radius: "xl", onClick: (v) => {
              var _a2, _b2;
              return updateData({ jobType: (_b2 = (_a2 = data == null ? void 0 : data.profile) == null ? void 0 : _a2.vendorType) == null ? void 0 : _b2.id });
            }, children: "Decline" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 720,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Button, { color: "red", size: "xs", variant: "outline", radius: "xl", onClick: () => setWarnMsg(!1), children: "Proceed" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 723,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 719,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 717,
          columnNumber: 33
        }, this),
        !showWarnMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Button, { variant: "filled", radius: "xl", onClick: saveForm, children: "Save and Continue" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 728,
          columnNumber: 34
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 716,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 702,
      columnNumber: 16
    }, this);
  }
};
function ErrorBoundary2() {
  let error = (0, import_react14.useRouteError)();
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Alert, { variant: "light", color: "red", title: "Could not load the page", children: (error == null ? void 0 : error.data) || "Oops, Something went wrong!" }, void 0, !1, {
    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
    lineNumber: 738,
    columnNumber: 12
  }, this);
}
var partner_signup_onboard_id_index_default = OnBoardPage.Index;

// app/routes/cart.add.$vendorServiceGroupId.tsx
var cart_add_vendorServiceGroupId_exports = {};
__export(cart_add_vendorServiceGroupId_exports, {
  action: () => action3,
  default: () => cart_add_vendorServiceGroupId_default,
  loader: () => loader4
});
var import_core13 = require("@mantine/core"), import_dates = require("@mantine/dates"), import_react16 = require("@remix-run/react"), import_icons_react7 = require("@tabler/icons-react"), import_icons_react8 = require("@tabler/icons-react"), import_icons_react9 = require("@tabler/icons-react"), import_icons_react10 = require("@tabler/icons-react"), import_dayjs = __toESM(require("dayjs")), import_pure_react_carousel = require("pure-react-carousel"), import_react17 = require("react"), import_react_redux3 = require("react-redux");

// app/data/time-slots.data.ts
var midnight = [{
  label: "12 AM",
  value: 0
}, {
  label: "1 AM",
  value: 1
}, {
  label: "2 AM",
  value: 2
}, {
  label: "3 AM",
  value: 3
}, {
  label: "4 AM",
  value: 4
}, {
  label: "5 AM",
  value: 5
}], morning = [{
  label: "6 AM",
  value: 6
}, {
  label: "7 AM",
  value: 7
}, {
  label: "8 AM",
  value: 8
}, {
  label: "9 AM",
  value: 9
}, {
  label: "10 AM",
  value: 10
}, {
  label: "11 AM",
  value: 11
}], noon = [
  {
    label: "12 PM",
    value: 12
  },
  {
    label: "1 PM",
    value: 13
  },
  {
    label: "2 PM",
    value: 14
  },
  {
    label: "3 PM",
    value: 15
  },
  {
    label: "4 PM",
    value: 16
  },
  {
    label: "5 PM",
    value: 17
  }
], evening = [
  {
    label: "6 PM",
    value: 18
  },
  {
    label: "7 PM",
    value: 19
  },
  {
    label: "8 PM",
    value: 20
  },
  {
    label: "9 PM",
    value: 21
  },
  {
    label: "10 PM",
    value: 22
  },
  {
    label: "11 PM",
    value: 23
  }
], TIME_SLOTS = [
  {
    name: "Night",
    slots: midnight
  },
  {
    name: "Morning",
    slots: morning
  },
  {
    name: "Afternoon",
    slots: noon
  },
  {
    name: "Evening",
    slots: evening
  }
], time_slots_data_default = TIME_SLOTS;

// app/service/cart.service.ts
var import_client5 = require("@prisma/client");
var GST_PERCENTAGE = 3;
async function getVendorServiceBookingsByDate(vendorServiceGrpId, date) {
  let vendor = await db.vendorServiceGroup.findFirst({
    where: {
      id: vendorServiceGrpId
    },
    select: {
      vendorId: !0
    }
  });
  return vendor ? db.bookingService.findMany({
    where: {
      date,
      vendorServiceGroup: {
        vendorId: vendor.vendorId
      },
      status: {
        notIn: [import_client5.BookingStatus.CANCELLED, import_client5.BookingStatus.REJECTED]
      }
    },
    select: {
      timeHour: !0,
      endTime: !0,
      duration: !0,
      vendorServiceGroup: {
        select: {
          group: {
            select: {
              commitFullDay: !0
            }
          }
        }
      }
    }
  }) : [];
}
var CartService = {
  getGst: GST_PERCENTAGE,
  calculate: function(cart, coupon) {
    let gst = GST_PERCENTAGE, total = cart.reduce((arr, x) => arr.concat(x.services), []).reduce((sum, item) => sum + item.cost, 0), tax = gst * total / 100;
    return {
      total,
      tax,
      gst,
      final: total + tax,
      discount: 0,
      coupon: null,
      invalidCoupon: !!coupon
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
          duration: res.group.minHour,
          cost: res.cost,
          isEstimated: res.group.isEstimated,
          location: item.location,
          locationLat: item.locationLat,
          locationLon: item.locationLon,
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
  },
  getVendorServiceBookingsByDate
};

// app/utils/currency.transformer.tsx
var import_core12 = require("@mantine/core");

// app/data/common.data.ts
var COMMON_DATA = {
  currency: "\u20B9"
}, common_data_default = COMMON_DATA;

// app/utils/currency.transformer.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Currency({ value }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.NumberFormatter, { prefix: common_data_default.currency, value: Math.ceil(value || 0), thousandSeparator: !0 }, void 0, !1, {
    fileName: "app/utils/currency.transformer.tsx",
    lineNumber: 5,
    columnNumber: 12
  }, this);
}
var currency_transformer_default = Currency;

// app/routes/cart.add.$vendorServiceGroupId.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function cartSummary(input) {
  let cartSummary3 = await CartService.summary(input), total = 0;
  return cartSummary3.forEach((x) => {
    total += x.services.reduce((sum, x2) => sum + x2.cost, 0);
  }), {
    cartSummary: cartSummary3,
    total
  };
}
function arrayRange(start, stop, step = 1) {
  return Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);
}
var BUFFER_TIME_IN_HRS = 2;
async function action3(args) {
  var _a, _b, _c, _d;
  let form = await args.request.formData(), actionType = (_a = form.get("action")) == null ? void 0 : _a.toString(), vendorServiceGrpId = args.params.vendorServiceGroupId;
  switch (actionType) {
    case "ESTIMATION" /* ESTIMATION */:
      let input = JSON.parse(((_b = form.get("input")) == null ? void 0 : _b.toString()) || "");
      return await cartSummary(input);
    case "TIME_SLOTS" /* TIME_SLOTS */:
      let date = (_c = form.get("date")) == null ? void 0 : _c.toString(), minHour = parseInt(((_d = form.get("minHour")) == null ? void 0 : _d.toString()) || "") + BUFFER_TIME_IN_HRS;
      if (!vendorServiceGrpId || !date)
        return null;
      let slots = time_slots_data_default, used = (await CartService.getVendorServiceBookingsByDate(vendorServiceGrpId, date)).reduce((acc, item) => {
        let startHr = item.vendorServiceGroup.group.commitFullDay ? 0 : item.timeHour - minHour, endHr = item.vendorServiceGroup.group.commitFullDay ? 24 : item.endTime + BUFFER_TIME_IN_HRS;
        return acc.concat(arrayRange(startHr, endHr));
      }, []);
      return slots = slots.map((x) => ({ name: x.name, slots: x.slots.filter((i) => !used.includes(i.value)) })).filter((x) => x.slots.length), {
        slots
      };
      break;
  }
  return null;
}
async function loader4(args) {
  let id = args.params.vendorServiceGroupId || "", cookieHeader = args.request.headers.get("Cookie"), source = new URL(args.request.url).searchParams.get("source"), savedData = (source === "cart" ? await userCartCookie.parse(cookieHeader) : await cartCheckoutCookie.parse(cookieHeader)).find((x) => x.vendorServiceGroupId === id);
  if (!id)
    throw new Error("Invalid service");
  let service = await VendorQuery.getVendorServiceGroup(id), vendor = await db.vendorServiceGroup.findFirstOrThrow({
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
    vendorServiceGroupId: id,
    savedData,
    source
  };
}
var Page = {
  Index: () => {
    var _a;
    let data = (0, import_react16.useLoaderData)(), [formData, setFormData] = (0, import_react17.useState)(), steps = [{
      title: "Select service",
      icon: import_icons_react7.IconNumber1,
      success: !!((_a = formData == null ? void 0 : formData.services) != null && _a.length),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Page.Addons, { onChange: updateFormData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 158,
        columnNumber: 20
      }, this)
    }, {
      title: "Select slot",
      icon: import_icons_react7.IconNumber2,
      success: !!(formData != null && formData.date && formData.timeHour),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Page.SelectDate, { onChange: updateFormData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 163,
        columnNumber: 20
      }, this)
    }, {
      title: "Choose venue",
      icon: import_icons_react9.IconNumber3,
      success: !!(formData != null && formData.venue),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Page.ChooseVenue, { onChange: updateFormData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 168,
        columnNumber: 20
      }, this)
    }, {
      title: "Confirm",
      icon: import_icons_react10.IconNumber4,
      success: !1,
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Page.Summary, { data: formData, source: data.source }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 173,
        columnNumber: 20
      }, this)
    }];
    function updateFormData(params) {
      setFormData((d) => ({ ...d, ...params }));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Container, { size: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid, { gutter: "md", justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: "auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Title, { order: 5, children: "Book you session" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 183,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { children: "Complete these steps to proceed" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 184,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 182,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { sm: 12, md: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Flex, { align: "center", gap: "md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Link, { to: routes_data_default.get("VendorProfile", { id: data.vendor.vendor.username }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Title, { order: 5, children: data.vendor.vendor.username }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 189,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 188,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Link, { to: routes_data_default.get("VendorProfile", { id: data.vendor.vendor.username }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Avatar, { size: "xl", src: data.vendor.vendor.profileImageName ? PATH.RESOURCE_URL + data.vendor.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 192,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 191,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 187,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 186,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 181,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 197,
        columnNumber: 13
      }, this),
      steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.ActionIcon, { variant: step.success ? "filled" : "light", color: step.success ? "green" : "blue", size: "xl", radius: "xl", "aria-label": "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(step.icon, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 203,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 202,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Title, { order: 5, children: step.title }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 205,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 201,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: "content", p: "0 30px 0 30px", children: i < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Divider, { orientation: "vertical", h: "100%" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 209,
            columnNumber: 53
          }, this) : "" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 208,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: "auto", pt: "sm", pb: "md", children: step.child }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 211,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 207,
          columnNumber: 21
        }, this)
      ] }, "step-" + i, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 200,
        columnNumber: 17
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Space, { h: "lg" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 180,
      columnNumber: 16
    }, this);
  },
  Addons: ({ onChange }) => {
    let data = (0, import_react16.useLoaderData)(), [selectedAddons, setAddons] = (0, import_react17.useState)([]);
    (0, import_react17.useEffect)(() => {
      var _a;
      let preselectId = ((_a = data.savedData) == null ? void 0 : _a.services.map((x) => x.id)) || [];
      setAddons(preselectId), onChange({
        services: [{
          vendorServiceGroupId: data.vendorServiceGroupId,
          addonsIds: preselectId
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { base: 12, md: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Stack, { align: "center", justify: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Card, { radius: "md", p: 2, pos: "relative", withBorder: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { style: { position: "absolute", right: "2px", top: "2px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.ThemeIcon, { color: "green", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_icons_react7.IconCheck, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 257,
            columnNumber: 68
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 257,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 256,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Image, { src: data.serviceGroup.image, h: 120, w: 120, fit: "cover", radius: "md" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 259,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 255,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { children: data.serviceGroup.title }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 261,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 254,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 253,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { base: 12, md: "auto" }, children: data.serviceGroup.addons.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Stack, { gap: "xs", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { fw: 500, children: "Recommended Addons" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 267,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_core13.SimpleGrid,
          {
            cols: { base: 2, md: 3, lg: 3, xl: 3 },
            spacing: { base: "sm", sm: "xl" },
            children: data.serviceGroup.addons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Card, { withBorder: !0, onClick: () => toggleAddon(item.id), style: { cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Stack, { gap: "xs", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                import_core13.Checkbox,
                {
                  checked: selectedAddons.includes(item.id),
                  color: "green",
                  style: { userSelect: "none" }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                  lineNumber: 272,
                  columnNumber: 37
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { children: item.title }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 277,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(currency_transformer_default, { value: item.cost }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 278,
                columnNumber: 52
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 278,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 271,
              columnNumber: 33
            }, this) }, item.id, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 270,
              columnNumber: 67
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 268,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 266,
        columnNumber: 56
      }, this) : "" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 264,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 252,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 251,
      columnNumber: 16
    }, this);
  },
  SelectDate: ({ onChange }) => {
    let [selectedDate, setSelectedDate] = (0, import_react17.useState)(), [selectedTime, setSelectedTime] = (0, import_react17.useState)(), data = (0, import_react16.useLoaderData)(), fetcher = (0, import_react16.useFetcher)();
    (0, import_react17.useEffect)(() => {
      var _a, _b, _c;
      let d = (_a = data.savedData) == null ? void 0 : _a.date, t = (_b = data.savedData) == null ? void 0 : _b.timeHour;
      d && new Date(d) >= /* @__PURE__ */ new Date() && (handleDaySelect(new Date(d)), setSelectedTime((_c = data.savedData) == null ? void 0 : _c.timeHour));
    }, []);
    let handleDaySelect = (date) => {
      setSelectedDate(date), onChange({
        date: void 0,
        timeHour: void 0
      }), fetcher.submit({
        date: date.toISOString(),
        action: "TIME_SLOTS" /* TIME_SLOTS */,
        minHour: data.serviceGroup.minHour
      }, {
        method: "post"
      });
    };
    function setTimeHour(time) {
      setSelectedTime(time), onChange({
        date: selectedDate == null ? void 0 : selectedDate.toISOString(),
        timeHour: time
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid, { gutter: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { base: 12, md: "content" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { fw: 500, children: "When you are looking for?" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 331,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 332,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
            lineNumber: 333,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 330,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { base: 12, md: "auto" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { fw: 500, children: "Select a preferred time" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 342,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 343,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Skeleton, {}, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 344,
          columnNumber: 37
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Await, { resolve: fetcher.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
          response && fetcher.state === "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Page.TimePicker, { slots: response.slots, selected: selectedTime, onChange: setTimeHour }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 347,
            columnNumber: 70
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 348,
            columnNumber: 29
          }, this),
          ["loading", "submitting"].includes(fetcher.state) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { c: "dimmed", children: "Please wait..." }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 349,
            columnNumber: 83
          }, this),
          response != null && response.slots.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Alert, { variant: "light", color: "green", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_icons_react8.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 350,
            columnNumber: 98
          }, this), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { children: [
              "The estimated duration of this job is ",
              data.serviceGroup.minHour,
              " hours."
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 351,
              columnNumber: 33
            }, this),
            data.serviceGroup.costExtraHour ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
              "An additional amount of ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(currency_transformer_default, { value: data.serviceGroup.costExtraHour }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 353,
                columnNumber: 61
              }, this),
              " per extra hour will be charged if applicable."
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 352,
              columnNumber: 68
            }, this) : ""
          ] }, void 0, !0, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 350,
            columnNumber: 55
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Alert, { variant: "light", color: "yellow", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_icons_react8.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 354,
            columnNumber: 84
          }, this), children: "Please select a date first." }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 354,
            columnNumber: 40
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 346,
          columnNumber: 38
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 345,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 344,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 341,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 329,
      columnNumber: 16
    }, this);
  },
  TimePicker: ({ slots, onChange, selected }) => {
    let [selectedTime, setTime] = (0, import_react17.useState)();
    (0, import_react17.useEffect)(() => {
      slots.find((x) => x.slots.find((y) => y.value === selected)) && setTimeHour(selected || 0);
    }, []);
    function setTimeHour(v) {
      setTime(v), onChange(v);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_pure_react_carousel.CarouselProvider,
      {
        naturalSlideWidth: 300,
        naturalSlideHeight: 400,
        totalSlides: slots.length || 0,
        visibleSlides: 1,
        isIntrinsicHeight: !0,
        step: 1,
        dragStep: 1,
        currentSlide: slots.length - 1 ? 1 : 0,
        className: "carousel-slider-wrapper",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_pure_react_carousel.Slider, { className: "carousel-slider", children: [
            slots.map((slot, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_pure_react_carousel.Slide, { className: "item-wrapper", index: i, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { ta: "center", children: slot == null ? void 0 : slot.name }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 388,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Space, { h: "sm" }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 389,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { style: { margin: "auto", maxWidth: "400px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid, { justify: "center", children: slot == null ? void 0 : slot.slots.map((time) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { base: 5, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Card, { withBorder: !0, p: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Checkbox, { checked: selectedTime === time.value, label: time.label, onChange: () => setTimeHour(time.value) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 394,
                columnNumber: 37
              }, this) }, "st" + time.value, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 393,
                columnNumber: 33
              }, this) }, "t-" + time, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 392,
                columnNumber: 54
              }, this)) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 391,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 390,
                columnNumber: 21
              }, this)
            ] }, "s" + i, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 387,
              columnNumber: 41
            }, this)),
            !slots.length && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { c: "dimmed", children: "Sorry, No free slots available on this day. Pls choose a different day." }, void 0, !1, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 401,
              columnNumber: 38
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 386,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_pure_react_carousel.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_icons_react7.IconArrowNarrowLeft, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 404,
            columnNumber: 47
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 404,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_pure_react_carousel.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_icons_react7.IconArrowNarrowRight, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 405,
            columnNumber: 47
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 405,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 377,
        columnNumber: 16
      },
      this
    );
  },
  ChooseVenue: ({ onChange }) => {
    let data = (0, import_react16.useLoaderData)(), [address, setAddress] = (0, import_react17.useState)({ address: "", pincode: "" });
    (0, import_react17.useEffect)(() => {
      var _a, _b;
      if ((_a = data.savedData) != null && _a.location) {
        let x = extractAddressAndZip((_b = data.savedData) == null ? void 0 : _b.location);
        updateForm({
          address: x.address,
          pincode: x.zip
        });
      }
    }, []);
    function updateForm(data2) {
      let d = { ...address, ...data2 };
      setAddress(d), d != null && d.address && (d != null && d.pincode) && onChange({
        venue: d.address + ", " + d.pincode
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Stack, { maw: "400px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_core13.Textarea,
        {
          label: "Address",
          placeholder: "Enter complete address",
          value: address.address,
          onChange: (e) => updateForm({ address: e.target.value })
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 434,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Input.Wrapper, { label: "Pincode", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_core13.Input,
        {
          minLength: 6,
          maxLength: 6,
          value: address.pincode,
          onChange: (e) => updateForm({ pincode: e.target.value })
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 441,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 440,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 433,
      columnNumber: 16
    }, this);
  },
  Summary: ({ data, source }) => {
    let submit = (0, import_react16.useSubmit)(), fetcher = (0, import_react16.useFetcher)(), [isStepsReady, setStepsReady] = (0, import_react17.useState)(!1), user = (0, import_react_redux3.useSelector)(getUser), location = (0, import_react16.useLocation)();
    (0, import_react17.useEffect)(() => {
      var _a;
      (_a = data == null ? void 0 : data.services) != null && _a.length && (data != null && data.date) && typeof data.timeHour == "number" && (data != null && data.venue) ? (setStepsReady(!0), getEstimation()) : setStepsReady(!1);
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
    function expresCheckout() {
      let input = getInputParams();
      submit({ cart: JSON.stringify(input) }, {
        action: "/order/checkout",
        method: "post"
      });
    }
    function getInputParams() {
      var _a;
      return ((_a = data == null ? void 0 : data.services) == null ? void 0 : _a.map((x) => ({
        vendorServiceGroupId: x.vendorServiceGroupId,
        date: x.date || data.date || "",
        timeHour: x.timeHour || data.timeHour || 0,
        duration: 1,
        services: x.addonsIds.map((i) => ({ id: i })),
        location: x.venue || data.venue || "",
        locationLat: 0,
        locationLon: 0
      }))) || [];
    }
    return isStepsReady ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Skeleton, {}, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 506,
      columnNumber: 51
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Await, { resolve: fetcher.data, children: (response) => ["loading", "submitting"].includes(fetcher.state) ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Loader, { color: "gray" }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 508,
      columnNumber: 82
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid, { gutter: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Card, { shadow: "sm", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Stack, { children: [
        response == null ? void 0 : response.cartSummary.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("b", { children: group.name }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 514,
            columnNumber: 41
          }, this),
          group.services.map(
            (service) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { size: "sm", fw: 500, children: service.name }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 516,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(currency_transformer_default, { value: service.cost }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 517,
                columnNumber: 61
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 517,
                columnNumber: 45
              }, this)
            ] }, service.id, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 515,
              columnNumber: 72
            }, this)
          )
        ] }, group.vendorServiceGroupId, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 513,
          columnNumber: 72
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Flex, { justify: "space-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { size: "sm", fw: 500, children: "Total: " }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 522,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.total }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 523,
            columnNumber: 62
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 523,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 521,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 511,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 510,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 509,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Grid.Col, { span: { base: 12, md: 4 }, children: source === "cart" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { fw: 500, children: "Proceed to checkout" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 530,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Button, { variant: "outline", onClick: addToCart, children: "Update & Continue" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 531,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 529,
        columnNumber: 46
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Card, { shadow: "sm", withBorder: !0, title: "Continue", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Button, { variant: "filled", onClick: expresCheckout, children: "Proceed to payment" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 534,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(UserLogin_default, { redirectUrl: location.pathname, title: "Login to continue" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 534,
          columnNumber: 121
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 533,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 536,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { children: "Forgot something?" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 538,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Button, { variant: "outline", onClick: addToCart, children: "Checkout Later" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 539,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 537,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 533,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 528,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 508,
      columnNumber: 108
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 507,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 506,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Group, { gap: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Loader, { color: "gray", type: "dots" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 546,
        columnNumber: 39
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Text, { children: "Complete the above steps to estimate the cost." }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 546,
        columnNumber: 74
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 546,
      columnNumber: 23
    }, this);
  }
};
function extractAddressAndZip(inputString) {
  let pieces = inputString.split(/[,\s]+/), lastPart = pieces[pieces.length - 1];
  return {
    address: pieces.slice(0, pieces.length - 1).join(", "),
    zip: lastPart
  };
}
var cart_add_vendorServiceGroupId_default = Page.Index;

// app/routes/partner.signup.onboard._index.tsx
var partner_signup_onboard_index_exports = {};
__export(partner_signup_onboard_index_exports, {
  action: () => action4,
  default: () => partner_signup_onboard_index_default,
  loader: () => loader5
});
var import_core14 = require("@mantine/core"), import_node5 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_react19 = require("react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react18.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid, { gutter: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 3, children: "Sign up as vendor" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 102,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Input.Wrapper, { label: "Full Name*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Input, { name: "fullName", placeholder: "Enter your full name.", required: !0 }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 104,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 103,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Input.Wrapper, { label: "Email*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Input, { name: "email", placeholder: "Enter your email for communication purpose.", required: !0, type: "email" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 107,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 106,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Input.Wrapper, { label: "Phone*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Input, { name: "phone", placeholder: "Enter your contact number for communication purpose.", required: !0 }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 110,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 109,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { fw: 500, children: "Portfolio (optional)" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 113,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { c: "dimmed", children: "Add few of your best works." }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 114,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(FileUploader_default, { buttonType: "default", id: "GUEST", label: "Choose file", path: PATH.GUEST_FILE_UPLOAD, onUpload: (v) => previewFile(v) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 115,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 116,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Flex, { style: { marginTop: "10px" }, children: files.map((img) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Image, { src: PATH.RESOURCE_URL + img, width: 100 }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard._index.tsx",
            lineNumber: 120,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "portfolio", value: img }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { fw: 500, children: "Social media url" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 127,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Input, { name: "socialUrl", type: "url", required: !0 }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 128,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 126,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Button, { variant: "filled", radius: "xl", loading: location.state === "submitting", type: "submit", name: "actionType", value: "signup", children: "Sign up as vendor" }, void 0, !1, {
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

// app/routes/cart.checkout.payment._index.tsx
var cart_checkout_payment_index_exports = {};
__export(cart_checkout_payment_index_exports, {
  action: () => action5,
  default: () => cart_checkout_payment_index_default,
  loader: () => loader6
});
var import_core15 = require("@mantine/core"), import_client6 = require("@prisma/client"), import_react20 = require("@remix-run/react"), import_react21 = require("react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), PaymentMethodList = [
  {
    id: import_client6.BookingPaymentMode.PAY_LATER,
    title: "Pay later",
    description: "Pay 50% within 3 days of booking, and the rest after the completion of service.",
    disabled: !1
  },
  {
    id: import_client6.BookingPaymentMode.FULL,
    title: "Pay in full",
    offer: "5% Off",
    description: "Pay upfront for a 5% discount",
    disabled: !1
  },
  {
    id: import_client6.BookingPaymentMode.EMI,
    title: "Pay in EMI",
    description: "Easy EMI option",
    disabled: !1
  }
], ACTIVE_PAYMENT_MODES = [import_client6.BookingPaymentMode.PAY_LATER], ESTIMATED_SERVICE_PAYMENT_MODES = [import_client6.BookingPaymentMode.PAY_LATER];
async function cartSummary2(input, coupon) {
  let cartSummary3 = await CartService.summary(input);
  return {
    estimation: await CartService.calculate(cartSummary3, coupon)
  };
}
async function action5({ request }) {
  var _a;
  let coupon = (_a = (await request.formData()).get("coupon")) == null ? void 0 : _a.toString(), cookieHeader = request.headers.get("Cookie"), currentCart = await cartCheckoutCookie.parse(cookieHeader);
  return cartSummary2(currentCart, coupon);
}
async function loader6({
  request
}) {
  let cookieHeader = request.headers.get("Cookie"), currentCart = await cartCheckoutCookie.parse(cookieHeader), paymentModes = [...PaymentMethodList], estimatedPaymentModes = ACTIVE_PAYMENT_MODES;
  return (await CartService.summary(currentCart)).filter((item) => item.isEstimated).length && (estimatedPaymentModes = ESTIMATED_SERVICE_PAYMENT_MODES), paymentModes.forEach((x) => {
    x.disabled = !ACTIVE_PAYMENT_MODES.includes(x.id) || !estimatedPaymentModes.includes(x.id);
  }), {
    paymentModes
  };
}
function CouponSection({ invalid, applyCoupon }) {
  let [getCoupon, setCoupon] = (0, import_react21.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Group, { gap: "md", align: "end", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Input.Wrapper, { flex: 1, label: "Coupon", error: invalid ? "Coupon expired" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Input, { error: invalid, onChange: (v) => setCoupon(v.target.value) }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Button, { variant: "outline", size: "xs", onClick: () => applyCoupon(getCoupon), children: "Apply" }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 92,
    columnNumber: 12
  }, this);
}
function cart_checkout_payment_index_default() {
  let [paymentMethod, setPayMethod] = (0, import_react21.useState)(), data = (0, import_react20.useLoaderData)(), navigation = (0, import_react20.useNavigation)(), location = (0, import_react20.useLocation)(), fetcher = (0, import_react20.useFetcher)();
  (0, import_react21.useEffect)(() => {
    fetchEstimation();
  }, []);
  function updatePayMethod(id) {
    let item = data.paymentModes.find((x) => x.id === id);
    item != null && item.disabled || (setPayMethod(id), fetchEstimation());
  }
  function fetchEstimation(coupon = "") {
    fetcher.submit({
      coupon
    }, {
      method: "POST"
    });
  }
  let Disablebadge = /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Badge, { variant: "outline", color: "gray", size: "xs", children: "DISABLED" }, void 0, !1, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 130,
    columnNumber: 26
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Title, { order: 4, children: "Choose payment method" }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid, { justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Stack, { children: data.paymentModes.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Alert, { variant: item.disabled || item.id === paymentMethod ? "light" : "outline", color: item.disabled ? "gray" : item.id === paymentMethod ? "green" : "gray", title: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Group, { children: [
        item.title,
        item.disabled ? Disablebadge : ""
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 138,
        columnNumber: 219
      }, this), icon: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Checkbox, { disabled: item.disabled, checked: item.id === paymentMethod, color: "green" }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 138,
        columnNumber: 289
      }, this), className: item.disabled ? "" : "cursor-pointer", onClick: () => updatePayMethod(item.id), children: item.description }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 138,
        columnNumber: 52
      }, this)) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Card, { shadow: "sm", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react21.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Skeleton, {}, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 145,
        columnNumber: 41
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react20.Await, { resolve: fetcher.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(CouponSection, { invalid: (response == null ? void 0 : response.estimation.invalidCoupon) || !1, applyCoupon: fetchEstimation }, void 0, !1, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 148,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 149,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Divider, {}, void 0, !1, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 150,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 151,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react20.Form, { method: "post", action: "/order/submit", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", name: "source", value: new URLSearchParams(location.search).get("source") || "" }, void 0, !1, {
            fileName: "app/routes/cart.checkout.payment._index.tsx",
            lineNumber: 153,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", name: "paymentMode", value: paymentMethod || "" }, void 0, !1, {
            fileName: "app/routes/cart.checkout.payment._index.tsx",
            lineNumber: 154,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { size: "sm", fw: 500, children: "Subtotal" }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 157,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.total }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 158,
                columnNumber: 70
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 158,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 156,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { c: "dimmed", children: [
                "GST (",
                response == null ? void 0 : response.estimation.gst,
                "%)"
              ] }, void 0, !0, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 161,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.tax }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 162,
                columnNumber: 51
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 162,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 160,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { size: "sm", fw: 500, children: "Discount" }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 165,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.discount }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 166,
                columnNumber: 70
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 166,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 164,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { size: "sm", fw: 500, children: "Total" }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 169,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.final }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 170,
                columnNumber: 70
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 170,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 168,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Divider, {}, void 0, !1, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 172,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Button, { type: "submit", variant: "filled", fullWidth: !0, disabled: !paymentMethod, loading: ["loading", "submitting"].includes(navigation.state), children: "Place Order" }, void 0, !1, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 173,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout.payment._index.tsx",
            lineNumber: 155,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 152,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 147,
        columnNumber: 42
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 146,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 145,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 144,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 132,
    columnNumber: 12
  }, this);
}

// app/routes/collections.$id.$highlight.tsx
var collections_id_highlight_exports = {};
__export(collections_id_highlight_exports, {
  default: () => collections_id_highlight_default,
  loader: () => loader7
});
var import_core16 = require("@mantine/core"), import_node6 = require("@remix-run/node"), import_react22 = require("@remix-run/react"), import_react23 = require("react");

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
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function loader7(args) {
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
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Container, { size: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CollectionsHighlightPage.Highlight, {}, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Divider, {}, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid, { gutter: "xl", justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: { base: 12, md: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CollectionsHighlightPage.RelatedServices, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CollectionsHighlightPage.TopVendors, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: { base: 12, md: 8 } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 33,
    columnNumber: 16
  }, this),
  Highlight: () => {
    let data = (0, import_react22.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react23.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 56,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Await, { resolve: data == null ? void 0 : data.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 3, children: [
        "Explore everything under ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "_color-primary", children: response == null ? void 0 : response.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 59,
          columnNumber: 67
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { paddingBottom: "10px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 5, children: [
        "Book ",
        response == null ? void 0 : response.vendorType
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 61,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { paddingBottom: "40px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid, { gutter: 40, children: response == null ? void 0 : response.services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: { base: 6, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Link, { to: routes_data_default.get("ServiceGroup", { id: data == null ? void 0 : data.highlightId, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Image, { src: service.imageName, style: { borderRadius: "12px", boxShadow: "0 20px 40px #d3d3d3" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 67,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 66,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Link, { to: routes_data_default.get("ServiceGroup", { id: data == null ? void 0 : data.highlightId, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 5, children: service.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 70,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 69,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Group, { gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { size: "sm", fw: "500", c: "dimmed", children: "Includes:" }, void 0, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 73,
            columnNumber: 41
          }, this),
          service.description.map((description, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Badge, { variant: "light", color: "gray", size: "xs", children: description }, "d-" + key, !1, {
            fileName: "app/routes/collections.$id.$highlight.tsx",
            lineNumber: 74,
            columnNumber: 88
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 72,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Link, { to: routes_data_default.get("ServiceGroup", { id: data == null ? void 0 : data.highlightId, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Button, { fullWidth: !0, variant: "outline", size: "xs", radius: "md", children: "Browse" }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 79,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 78,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 65,
        columnNumber: 33
      }, this) }, service.id, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 64,
        columnNumber: 64
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 58,
      columnNumber: 34
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 55,
      columnNumber: 16
    }, this);
  },
  RelatedServices: () => {
    let data = (0, import_react22.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 5, children: "Frequently bought together" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { paddingBottom: "30px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react23.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 95,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Await, { resolve: data == null ? void 0 : data.related, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid, { gutter: 40, justify: "start", children: response == null ? void 0 : response.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: { base: 6, md: 3 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Link, { to: routes_data_default.get("ServiceGroup", { id: service.vendorType.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Image, { src: service.imageName, style: { borderRadius: "5px" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 99,
          columnNumber: 122
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 99,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { paddingBottom: "14px" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 100,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { c: "dimmed", size: "sm", children: service.vendorType.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 101,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Link, { to: routes_data_default.get("ServiceGroup", { id: service.vendorType.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { fw: 500, children: service.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 103,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 102,
          columnNumber: 29
        }, this)
      ] }, service.id, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 98,
        columnNumber: 51
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 97,
        columnNumber: 34
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 92,
      columnNumber: 16
    }, this);
  },
  TopVendors: () => {
    let data = (0, import_react22.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 5, children: "Top Rated" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react23.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 118,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Await, { resolve: data == null ? void 0 : data.topRatedVendors, children: (response) => response != null && response.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid, { gutter: "md", children: response == null ? void 0 : response.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Stack, { justify: "center", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Link, { to: routes_data_default.get("VendorProfile", { id: item.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Avatar, { src: item.image, size: "lg" }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 124,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 123,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react22.Link, { to: routes_data_default.get("VendorProfile", { id: item.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { fw: 500, children: item.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 126,
          columnNumber: 89
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 126,
          columnNumber: 33
        }, this)
      ] }, item.id, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 122,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 121,
        columnNumber: 48
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 120,
        columnNumber: 53
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { c: "dimmed", children: "Sorry, we couldn't find any vendors under this category" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 128,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 119,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 115,
      columnNumber: 16
    }, this);
  },
  OtherServices: () => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 4, children: "Also try" }, void 0, !1, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 137,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 135,
    columnNumber: 16
  }, this)
}, collections_id_highlight_default = CollectionsHighlightPage.Index;

// app/routes/profile.$user.portfolio.tsx
var profile_user_portfolio_exports = {};
__export(profile_user_portfolio_exports, {
  default: () => Portfolio,
  loader: () => loader8
});
var import_core17 = require("@mantine/core"), import_react24 = require("@remix-run/react"), import_react_masonry_css = __toESM(require("react-masonry-css")), import_react_photo_view2 = require("react-photo-view");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
async function loader8({ params }) {
  let id = params.user;
  return await VendorQuery.portfolioByUsername(id);
}
function Portfolio() {
  let data = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Title, { order: 4, children: "Best works" }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_photo_view2.PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_masonry_css.default, { className: "masonry-grid", columnClassName: "masonry-grid_column", breakpointCols: 3, children: data == null ? void 0 : data.map((image, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_photo_view2.PhotoView, { src: PATH.RESOURCE_URL + image.fileName, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { className: "cursor-pointer", src: PATH.RESOURCE_URL + image.fileName }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 25,
      columnNumber: 21
    }, this) }, "thumb" + key, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 24,
      columnNumber: 44
    }, this)) }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.$user.portfolio.tsx",
    lineNumber: 19,
    columnNumber: 12
  }, this);
}

// app/routes/collections.$id._index.tsx
var collections_id_index_exports = {};
__export(collections_id_index_exports, {
  default: () => collections_id_index_default,
  loader: () => loader9
});
var import_core18 = require("@mantine/core"), import_node7 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_react26 = require("react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function loader9(args) {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(CollectionsPage.Header, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(CollectionsPage.Section, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ],
  Header: () => {
    let data = (0, import_react25.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Container, { size: "xl", style: { paddingBottom: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "section-bg-pattern _pattern-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 8, style: { padding: "20px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react26.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 43,
        columnNumber: 45
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react25.Await, { resolve: data.data, children: (result) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 5, children: "The easiest way to find" }, void 0, !1, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 46,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 3, children: [
          "Services in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "_color-primary", children: result.name }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 47,
            columnNumber: 66
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 47,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { size: "sm", children: "By bringing together ambitious and talented professionals with AI, we are making your work easier." }, void 0, !1, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 48,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { gap: "md", align: "center", style: { paddingTop: "30px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { c: "dimmed", children: "See how it works" }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 50,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { radius: "xl", variant: "outline", children: "Watch Video" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 3, style: { overflow: "hidden", marginBottom: "-40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", { src: "/assets/art-1.png" }, void 0, !1, {
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
    let data = (0, import_react25.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react26.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 68,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react25.Await, { resolve: data.results, children: (result) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Tabs, { defaultValue: "0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Tabs.List, { children: result.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Tabs.Tab, { value: "" + i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 5, children: item.name }, void 0, !1, {
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
        (item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Tabs.Panel, { value: "" + i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: 40, style: { padding: "40px 0" }, children: [
          item.serviceGroup.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react25.Link, { to: routes_data_default.get("ServiceGroup", { id: item.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: { borderRadius: "10px", background: "#F5F5F7", padding: "12px", boxShadow: "0 2px 4px #d3d3d3" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Image, { src: service.imageName ? PATH.RESOURCE_URL + service.imageName : "", style: { borderRadius: "6px", maxHeight: "140px", objectFit: "cover" }, width: "100%" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 79,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react25.Link, { to: routes_data_default.get("ServiceGroup", { id: item.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 5, children: service.name }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 81,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 80,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, c: "dimmed", children: "Includes" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 83,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: service.serviceGroupItem.map((description, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, c: "dimmed", children: [
              description.service.name,
              "."
            ] }, void 0, !0, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 86,
              columnNumber: 53
            }, this) }, "d-" + key, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 85,
              columnNumber: 101
            }, this)) }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 84,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react25.Link, { to: routes_data_default.get("ServiceGroup", { id: item.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { fullWidth: !0, variant: "outline", size: "xs", radius: "md", children: "Browse" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 90,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 89,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: { height: "26px" }, children: service.VendorServiceGroup.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { gap: "sm", align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { size: "sm", children: "Starts from" }, void 0, !1, {
                fileName: "app/routes/collections.$id._index.tsx",
                lineNumber: 93,
                columnNumber: 117
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Badge, { color: "yellow", children: [
                "\u20B9",
                service.VendorServiceGroup[0].cost
              ] }, void 0, !0, {
                fileName: "app/routes/collections.$id._index.tsx",
                lineNumber: 93,
                columnNumber: 151
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 93,
              columnNumber: 86
            }, this) : "" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 92,
              columnNumber: 45
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 78,
            columnNumber: 41
          }, this) }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Divider, {}, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 101,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 100,
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
  action: () => action6,
  default: () => partner_signup_index_default,
  loader: () => loader10,
  meta: () => meta
});
var import_core19 = require("@mantine/core"), import_react27 = require("@remix-run/react"), import_icons_react11 = require("@tabler/icons-react"), import_react28 = require("react");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
async function action6(args) {
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
async function loader10({ params }) {
  return null;
}
var meta = () => [
  { title: "Join as a service professional" },
  { name: "description", content: "Celebria Collective Partner" }
], jumbotronStyle = {
  background: "url(/assets/patner-signup-banner.webp) no-repeat center",
  minHeight: "500px",
  padding: "100px 20px",
  borderRadius: "20px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  position: "relative"
}, VendorList = [
  {
    background: "linear-gradient(180deg, #03DBCB, #047DA6)",
    id: "photographer",
    name: "Photographer",
    title: "Photographer",
    description: "Elevate your lens, amplify your earnings! Join Celebria Collective for exposure and lucrative opportunities",
    img: "/assets/vendor-card-1.svg"
  },
  {
    background: "linear-gradient(180deg, #681ACB, #4549E5)",
    id: "video",
    name: "Videographer",
    title: "Videographer",
    description: "Turn your lens into wealth! Join Celebria Collective for exposure and well-paid projects.",
    img: "/assets/vendor-card-2.svg"
  },
  {
    background: "linear-gradient(185deg, #AF6316,#C27B15)",
    id: "makep",
    name: "Makeup Artist",
    title: "Makeup Artist",
    description: "Stitch your success story! Join Celebria Collective for global exposure and lucrative collaborations.",
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
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { gap: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PartnerSignup.Jumbotron, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PartnerSignup.Counter, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PartnerSignup.Intro, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PartnerSignup.Features, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PartnerSignup.Form, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 108,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 107,
    columnNumber: 7
  }, this),
  Jumbotron: () => {
    function buttonClick(e) {
      scroll("signup-form");
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: jumbotronStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_core19.Overlay,
      {
        gradient: "linear-gradient(45deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",
        opacity: 0.85,
        p: "100px 20px",
        zIndex: "auto",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { align: "center", justify: "center", h: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 1, style: { color: "white" }, children: "Earn upto 3 times your current income and change your life." }, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 132,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 3, c: "white", children: "Become a part of a community with more than 100 service professionals" }, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core19.Button,
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
              lineNumber: 141,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 125,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this);
  },
  Counter: () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: { padding: "50px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { justify: "center", gutter: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 5, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { justify: "center", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { children: "100+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 161,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 4, children: "Members" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 162,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 160,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 159,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 5, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { justify: "center", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { children: "1000+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 167,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 4, children: "Customers" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 168,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 166,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 165,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 5, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { justify: "center", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { children: "20,000+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 173,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 4, children: "Services" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 174,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 172,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 171,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 158,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 157,
    columnNumber: 7
  }, this),
  Intro: () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { justify: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Divider, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 186,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: 12 }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { className: "_text-center", span: { base: 12, md: 10, lg: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: { padding: "40px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { c: "dimmed", children: "Celebria Collective is more than just a platform; it's a launchpad for photographers, makeup artists, videographers, and fashion designers looking to scale their business and amplify their artistic influence. Ready to elevate your craft and take your business to the next level?" }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 191,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 190,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 189,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 184,
    columnNumber: 7
  }, this),
  Features: () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { justify: "center", align: "center", gutter: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Blockquote, { color: "gray", cite: "\u2013 Rahul", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react11.IconQuote, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 204,
      columnNumber: 57
    }, this), children: "As a photographer with Celebria Collective, I've had the pleasure of working on several projects through their platform. Thanks to their professionalism and diverse range of brand collaborations, coupled with clear communication, a prompt billing process, and an unwavering focus on client satisfaction, Celebria Collective stands out as an exceptional platform for creative professionals seeking new opportunities. Highly recommended!" }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 204,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 203,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 5, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_core19.Image,
      {
        src: "/assets/partner-signup-profile.jpg",
        width: "100%",
        radius: "sm",
        mah: "220px"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 209,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.signup._index.tsx",
    lineNumber: 202,
    columnNumber: 7
  }, this),
  Form: () => {
    let [activeCard, setActiveCard] = (0, import_react28.useState)(null);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { id: "signup-form", gutter: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: { paddingTop: "50px", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 2, children: [
        "Join us at Celebria Collective and",
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 227,
          columnNumber: 49
        }, this),
        "transform artistry into opportunity!"
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 226,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      VendorList.map((vendor) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, lg: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core19.Card,
        {
          style: {
            background: vendor.background,
            color: "#fff",
            width: "100%",
            borderRadius: "8px"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_core19.Image,
              {
                src: vendor.img,
                style: { padding: "50px", height: "300px" }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 242,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 241,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: { marginTop: "-10px", color: "white" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { gap: "lg", align: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 4, children: vendor.title }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 249,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { ta: "center", fw: 500, children: vendor.description }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 252,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react27.Link, { to: "onboard", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                import_core19.Button,
                {
                  radius: "xl",
                  variant: "filled",
                  size: "large",
                  children: "Signup"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/partner.signup._index.tsx",
                  lineNumber: 256,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 255,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 248,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 247,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 233,
          columnNumber: 13
        },
        this
      ) }, vendor.id, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 232,
        columnNumber: 11
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core19.Modal,
        {
          opened: !!activeCard,
          onClose: () => setActiveCard(null),
          title: "Register as a professional",
          children: activeCard && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            PartnerSignup.SignupForm,
            {
              type: activeCard,
              onClose: () => setActiveCard(null)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/partner.signup._index.tsx",
              lineNumber: 274,
              columnNumber: 26
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 269,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this);
  },
  SignupForm: ({
    type,
    onClose
  }) => {
    let fetcher = (0, import_react27.useFetcher)(), [formSubmitted, setFormSubmitted] = (0, import_react28.useState)(!1);
    function customClose() {
      setFormSubmitted(!1), onClose();
    }
    function submitHandler(e) {
      e.preventDefault(), setFormSubmitted(!0);
    }
    return formSubmitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 3, children: "Thank you for your interest" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 313,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { size: "sm", children: "Our representative will contact you soon." }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 314,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Button, { onClick: customClose, children: "Close" }, "buy", !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 315,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 312,
      columnNumber: 28
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(fetcher.Form, { method: "post", onSubmit: submitHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { gutter: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 5, children: "I'm a" }, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 321,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Group, { defaultValue: type || "", children: VendorList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Radio, { value: item.id, name: "type", label: item.name }, item.id, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 324,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 322,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 320,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Input.Wrapper, { label: "Full Name", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core19.Input,
        {
          name: "fullName",
          placeholder: "Enter your full name",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 330,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 329,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 328,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Input.Wrapper, { label: "Contact Number", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Input, { name: "phone", leftSection: "+91", maxLength: 10, required: !0 }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 339,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 338,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 337,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Input.Wrapper, { label: "Email", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Input, { name: "email", type: "email", required: !0 }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 344,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 343,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 342,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Input.Wrapper, { label: "Social media url", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Input, { name: "socialUrl", type: "url", required: !0 }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 349,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 348,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 347,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "hidden", name: "category", value: type || "" }, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 353,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Button, { variant: "filled", radius: "xl", type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 354,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 352,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 319,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 318,
      columnNumber: 16
    }, this);
  }
}, partner_signup_index_default = PartnerSignup.Index;

// app/routes/cart.checkout._index.tsx
var cart_checkout_index_exports = {};
__export(cart_checkout_index_exports, {
  action: () => action7,
  default: () => cart_checkout_index_default,
  loader: () => loader11
});
var import_core21 = require("@mantine/core"), import_node8 = require("@remix-run/node"), import_react31 = require("@remix-run/react"), import_icons_react13 = require("@tabler/icons-react"), import_icons_react14 = require("@tabler/icons-react"), import_react32 = require("react"), import_react_redux4 = require("react-redux");

// app/components/ConfigureBooking.tsx
var import_core20 = require("@mantine/core"), import_react29 = require("@remix-run/react"), import_icons_react12 = require("@tabler/icons-react"), import_react30 = require("react"), import_react_hook_form2 = require("react-hook-form"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ConfigureBooking(service) {
  let { control, getValues, handleSubmit, setValue, register } = (0, import_react_hook_form2.useForm)(), [serviceChecklist, setServiceChecklist] = (0, import_react30.useState)([!1, !1, !1]), checkoutForm = (0, import_react30.useRef)(null), checkoutFormInput = (0, import_react30.useRef)(null), [minDuration, setMinDuration] = (0, import_react30.useState)(1);
  (0, import_react30.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Card, { withBorder: !0, title: "Configure Services", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react29.Form, { method: "post", onSubmit: handleSubmit(proceedToCheckout), action: "/cart/add", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", ...register("vendorServiceGroupId"), value: service.vendorServiceGroupId }, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid, { gutter: 30, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid.Col, { span: { base: 12, md: 6 }, children: [
          service.options.map((item, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", ...register(`services.${key}.id`), value: item.id }, item.id, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 69,
            columnNumber: 57
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", ...register("date") }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 70,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Title, { order: 5, children: "Select date" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 71,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Title, { order: 5, children: "Choose time slot" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 75,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", {}, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Title, { order: 5, children: "Duration of the service" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 80,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_core20.Select,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Divider, {}, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid, { justify: "end", align: "middle", gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid.Col, { children: serviceChecklist.includes(!1) ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Alert, { title: "Please complete the above step to proceed.", c: "yellow", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_icons_react12.IconInfoCircle, {}, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react29.Link, { to: "/cart/checkout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Button, { variant: "outline", children: "View Cart" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Button, { disabled: serviceChecklist.includes(!1), variant: "filled", type: "submit", children: "Add to Cart" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react29.Form, { ref: checkoutForm, method: "post", action: "/cart/add", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", name: "redirectUrl", value: window.location.href }, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { name: "cart", ref: checkoutFormInput }, void 0, !1, {
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

// app/utils/date.transform.ts
var import_dayjs2 = __toESM(require("dayjs")), DateFormatter = {
  short: (date) => (0, import_dayjs2.default)(date).format("MMM DD, YYYY"),
  time: (date) => (0, import_dayjs2.default)(date).format("hh:mm A")
};

// app/routes/cart.checkout._index.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
async function action7({ request }) {
  var _a;
  let cookieHeader = request.headers.get("Cookie"), data = await userCartCookie.parse(cookieHeader), deleteId = (_a = (await request.formData()).get("delete")) == null ? void 0 : _a.toString();
  return deleteId && (data = data.filter((x) => x.vendorServiceGroupId !== deleteId)), (0, import_node8.redirect)(routes_data_default.get("Cart"), {
    headers: {
      "Set-Cookie": await userCartCookie.serialize(data)
    }
  });
}
async function loader11({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userCartCookie.parse(cookieHeader);
  return (0, import_node8.defer)({
    cartInput: JSON.stringify(cookie),
    data: CartService.summary(cookie)
  });
}
var Cart = {
  Index: () => {
    let user = (0, import_react_redux4.useSelector)(getUser), data = (0, import_react31.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Title, { order: 3, children: "Checkout" }, void 0, !1, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid, { gutter: 30, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: { base: 12, md: 4, lg: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react32.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 57,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react31.Await, { resolve: data.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Cart.Preview, { cart: response }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 59,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: { base: 12, md: 3, lg: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react32.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 64,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react31.Await, { resolve: data.data, children: (response) => response != null && response.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Stack, { gap: "md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Cart.Summary, { data: response }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 68,
            columnNumber: 37
          }, this),
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react31.Form, { method: "post", action: "/order/checkout", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "source", value: "cart" }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 70,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "cart", value: data.cartInput }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 71,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Button, { variant: "filled", type: "submit", fullWidth: !0, children: "Place order" }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 72,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 69,
            columnNumber: 45
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(UserLogin_default, { title: "Login to continue", redirectUrl: "/cart/checkout" }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 72,
            columnNumber: 120
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 67,
          columnNumber: 33
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 65,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.checkout._index.tsx",
      lineNumber: 52,
      columnNumber: 16
    }, this);
  },
  Preview: ({ cart }) => {
    let [editService, setEditService] = (0, import_react32.useState)();
    function openEdtServiceDialog(id, services) {
      setEditService({ id, services });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Stack, { children: [
      cart.map((data, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid, { gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: { base: 12, md: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Card, { withBorder: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_core21.Image,
            {
              style: { width: "100%", height: "100px", objectFit: "cover" },
              src: data.coverImg || ""
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 93,
              columnNumber: 29
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 92,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "sm" }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 98,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Group, { justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Group, { gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Avatar, { src: data.vendorImg }, void 0, !1, {
                fileName: "app/routes/cart.checkout._index.tsx",
                lineNumber: 101,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react31.Link, { to: `/profile/${data.vendorId}`, children: data.vendorName }, void 0, !1, {
                fileName: "app/routes/cart.checkout._index.tsx",
                lineNumber: 102,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 100,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Badge, { size: "xs", children: data.vendorType }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 104,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 99,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 106,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: data.name }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 107,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "sm" }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 108,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Group, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: DateFormatter.short(data.date) }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 110,
              columnNumber: 29
            }, this),
            " -",
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: [
              "From ",
              data.timeHour,
              " to ",
              data.timeHour + data.duration,
              " (",
              data.duration,
              " hours)"
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 111,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 109,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 113,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Divider, {}, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 114,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "sm" }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 115,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Flex, { justify: "end", gap: "xs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react31.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.ActionIcon, { type: "submit", name: "delete", value: data.vendorServiceGroupId, variant: "subtle", color: "red", size: "lg", "aria-label": "remove", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_icons_react14.IconTrash, { style: { width: "70%", height: "70%" }, stroke: 1.5 }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 120,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 119,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 118,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react31.Link, { to: routes_data_default.get("CartAddEdit", { venderServiceGroupId: data.vendorServiceGroupId }) + "?source=cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Button, { leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_icons_react13.IconEdit, { style: { width: "70%", height: "70%" }, stroke: 1.5 }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 124,
              columnNumber: 54
            }, this), variant: "subtle", children: "Modify" }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 124,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 123,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 117,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: { base: 12, md: 7 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: "Personal Note:" }, void 0, !1, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 133,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_core21.Textarea,
            {
              placeholder: "Write down your requirements here...",
              autosize: !0,
              minRows: 4,
              maxRows: 6
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 134,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 132,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 131,
          columnNumber: 17
        }, this)
      ] }, data.vendorServiceGroupId + i, !0, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 89,
        columnNumber: 36
      }, this)),
      !(cart != null && cart.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "Sorry, Your cart is empty." }, void 0, !1, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 143,
        columnNumber: 31
      }, this),
      (editService == null ? void 0 : editService.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Cart.Edit, { serviceId: editService.id, services: editService.services, onClose: () => setEditService(void 0) }, void 0, !1, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 145,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.checkout._index.tsx",
      lineNumber: 88,
      columnNumber: 16
    }, this);
  },
  Edit: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Modal, { opened: !0, w: "1000px", onClose: () => params.onClose(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ConfigureBooking_default, { minHour: 1, vendorServiceGroupId: params.serviceId, options: params.services }, void 0, !1, {
    fileName: "app/routes/cart.checkout._index.tsx",
    lineNumber: 150,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart.checkout._index.tsx",
    lineNumber: 149,
    columnNumber: 16
  }, this),
  Summary: ({ data }) => {
    let [orderSummary, setOrderSummary] = (0, import_react32.useState)();
    return (0, import_react32.useEffect)(() => {
      let total = data.reduce((arr, i) => arr.concat(i.services), []).reduce((sum, item) => sum + item.cost, 0), tax = 3 * total / 100;
      setOrderSummary({
        total,
        tax,
        gst: 3,
        final: total + tax
      });
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: { border: "1px solid #e1e1e1", padding: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Title, { order: 4, children: "Order Summary" }, void 0, !1, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, this),
      data.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("b", { children: group.name }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 171,
          columnNumber: 17
        }, this),
        group.services.map(
          (service) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid, { gutter: 20, justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: service.name }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 173,
              columnNumber: 46
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 173,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", children: [
              service.cost,
              " INR"
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 174,
              columnNumber: 46
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.checkout._index.tsx",
              lineNumber: 174,
              columnNumber: 21
            }, this)
          ] }, service.id, !0, {
            fileName: "app/routes/cart.checkout._index.tsx",
            lineNumber: 172,
            columnNumber: 48
          }, this)
        )
      ] }, group.vendorServiceGroupId, !0, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 170,
        columnNumber: 32
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Divider, {}, void 0, !1, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid, { gutter: 20, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: "Subtotal" }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 180,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 180,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: [
          orderSummary == null ? void 0 : orderSummary.total,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 181,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 181,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid, { gutter: 20, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { c: "dimmed", children: [
          "GST(",
          orderSummary == null ? void 0 : orderSummary.gst,
          "%)"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 184,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 184,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { children: [
          orderSummary == null ? void 0 : orderSummary.tax,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 185,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 185,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Divider, {}, void 0, !1, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid, { gutter: 20, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: "Total" }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 189,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 189,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: [
          orderSummary == null ? void 0 : orderSummary.final,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 190,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.checkout._index.tsx",
          lineNumber: 190,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout._index.tsx",
        lineNumber: 188,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.checkout._index.tsx",
      lineNumber: 168,
      columnNumber: 16
    }, this);
  }
}, cart_checkout_index_default = Cart.Index;

// app/routes/profile.$user._index.tsx
var profile_user_index_exports = {};
__export(profile_user_index_exports, {
  action: () => action8,
  default: () => profile_user_index_default,
  loader: () => loader12
});
var import_core22 = require("@mantine/core"), import_node9 = require("@remix-run/node"), import_react33 = require("@remix-run/react"), import_react34 = require("react"), import_react_masonry_css2 = __toESM(require("react-masonry-css")), import_react_photo_view3 = require("react-photo-view");
var import_react_insta_stories = __toESM(require("react-insta-stories")), import_pure_react_carousel2 = require("pure-react-carousel");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
async function action8(args) {
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
async function loader12({ params }) {
  let username = params.user;
  username || new Error("404");
  let profile = await VendorQuery.getVendorByUsername(username || ""), portfolio = new Promise(function(resolve) {
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
      take: 9
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
  return (0, import_node9.defer)({
    profile,
    username,
    portfolio,
    services,
    stories
  });
}
var viewAllProjectsStyles = { display: "flex", justifyContent: "center", overflow: "hidden", height: "50px", position: "relative", boxShadow: "0px -40px 30px #fff" };
var ProfileHome = {
  Index: () => {
    var _a;
    let data = (0, import_react33.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { fw: 500, children: "Stories" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "sm" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ProfileHome.Stories, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Card, { shadow: "sm", padding: "lg", radius: "md", withBorder: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Stack, { gap: 0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { fw: 700, children: "50+" }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 136,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { c: "dimmed", children: "Happy clients" }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 137,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Divider, {}, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 140,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid, { gutter: "xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: { base: 12, md: 8 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 4, c: "var(--ui-color-primary)", children: "About me" }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 144,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "sm" }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 145,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Divider, { size: "lg", w: "50px", style: {
              borderColor: "#2a2a2a"
            } }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 146,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 149,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { children: (_a = data.profile) == null ? void 0 : _a.bio }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 150,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 143,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ProfileHome.Services, {}, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 153,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 152,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 157,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ProfileHome.Gallery, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 129,
      columnNumber: 16
    }, this);
  },
  Stories: () => {
    let data = (0, import_react33.useLoaderData)(), fetcher = (0, import_react33.useFetcher)(), [isMobile, setMobile] = (0, import_react34.useState)(!1), [stories, setStories] = (0, import_react34.useState)([]);
    (0, import_react34.useEffect)(() => {
      setMobile((window == null ? void 0 : window.innerWidth) < 600);
    }, []), (0, import_react34.useEffect)(() => {
      var _a;
      let list2 = ((_a = fetcher.data) == null ? void 0 : _a.map((x) => ({ url: PATH.RESOURCE_URL + x.fileName }))) || [];
      setStories(list2);
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
      return isMobile ? 3 : 6;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react34.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 191,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react33.Await, { resolve: data.stories, children: (album) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        import_pure_react_carousel2.CarouselProvider,
        {
          naturalSlideWidth: 300,
          naturalSlideHeight: 400,
          totalSlides: album.length,
          visibleSlides: sliderCount(),
          isIntrinsicHeight: !0,
          step: sliderCount(),
          dragStep: sliderCount(),
          className: "carousel-slider-wrapper",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_pure_react_carousel2.Slider, { children: album == null ? void 0 : album.map((item, i) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_pure_react_carousel2.Slide, { index: i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: { borderRadius: "3px", overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "story-block", onClick: () => loadStories(item.serviceGroupId), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: { position: "relative", cursor: "pointer" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Image, { visibleFrom: "md", w: "100%", h: (0, import_core22.px)("12rem"), radius: "xs", src: PATH.RESOURCE_URL + item.fileName, fit: "cover" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 209,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Image, { hiddenFrom: "md", w: "100%", h: (0, import_core22.px)("10rem"), radius: "xs", src: PATH.RESOURCE_URL + item.fileName, fit: "cover" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 210,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                import_core22.Overlay,
                {
                  gradient: "linear-gradient(45deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",
                  opacity: 0.85,
                  p: isMobile ? "xs" : "md",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Flex, { align: "end", h: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { fw: 500, c: "white", children: ((_a = item.serviceGroup) == null ? void 0 : _a.name) || "Highlights" }, void 0, !1, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 217,
                    columnNumber: 57
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 216,
                    columnNumber: 53
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/profile.$user._index.tsx",
                  lineNumber: 211,
                  columnNumber: 49
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 208,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 207,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 206,
              columnNumber: 37
            }, this) }, "s" + item.serviceGroupId, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 205,
              columnNumber: 58
            }, this);
          }) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 204,
            columnNumber: 29
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 194,
          columnNumber: 34
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 192,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Modal.Root, { opened: !!stories.length, onClose: () => setStories([]), p: 0, centered: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Modal.Overlay, {}, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 245,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Modal.Content, { p: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Modal.Body, { p: 0, children: stories.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
            lineNumber: 248,
            columnNumber: 43
          },
          this
        ) : "Nothing to display" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 247,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 246,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 244,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 190,
      columnNumber: 16
    }, this);
  },
  Services: () => {
    let data = (0, import_react33.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { fw: 700, children: "Popular Services" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 264,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react34.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 265,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react33.Await, { resolve: data.services, children: (services) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Stack, { children: services.map(
        (x, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Group, { gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { children: x.name }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 270,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { c: "dimmed", size: "sm", children: x.description }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 271,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 269,
          columnNumber: 53
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 268,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 266,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 265,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 262,
      columnNumber: 16
    }, this);
  },
  Gallery: () => {
    let data = (0, import_react33.useLoaderData)(), navigate = (0, import_react33.useNavigate)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid, { justify: "space-between", align: "middle", gutter: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 4, children: "Best works" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 286,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 286,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { variant: "subtle", radius: "xl", onClick: () => navigate("portfolio"), children: "See all" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 288,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 287,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 285,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react_photo_view3.PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react34.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 295,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react33.Await, { resolve: data.portfolio, children: (portfolio) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react_masonry_css2.default, { className: "masonry-grid", columnClassName: "masonry-grid_column", breakpointCols: 3, children: portfolio == null ? void 0 : portfolio.map((image, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react_photo_view3.PhotoView, { src: image, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Image, { radius: "md", src: image, className: "cursor-pointer" }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 299,
            columnNumber: 37
          }, this) }, "thumb" + key, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 298,
            columnNumber: 156
          }, this)) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 298,
            columnNumber: 33
          }, this),
          portfolio.length ? "" : "Sorry, This profile doesnt contains any works to display"
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 297,
          columnNumber: 43
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 296,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 295,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 294,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: viewAllProjectsStyles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { variant: "outline", size: "xs", radius: "xl", onClick: () => navigate("portfolio"), children: "See all works" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 309,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 308,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 293,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 284,
      columnNumber: 16
    }, this);
  },
  Testimonials: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 2, style: { textAlign: "center" }, children: "Testimonials" }, void 0, !1, {
    fileName: "app/routes/profile.$user._index.tsx",
    lineNumber: 318,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.$user._index.tsx",
    lineNumber: 317,
    columnNumber: 16
  }, this)
}, profile_user_index_default = ProfileHome.Index;

// app/routes/_auth.order.checkout.tsx
var auth_order_checkout_exports = {};
__export(auth_order_checkout_exports, {
  action: () => action9,
  default: () => auth_order_checkout_default
});
var import_node10 = require("@remix-run/node");
async function action9({
  request
}) {
  var _a, _b, _c;
  let cookieHeader = request.headers.get("Cookie");
  if (!(await getSession(cookieHeader)).get(USER_SESSION_KEY))
    return (0, import_node10.redirect)("/user/login");
  let currentCart = [], body = await request.formData(), source = (_a = body.get("source")) == null ? void 0 : _a.toString(), payment = routes_data_default.get("CheckoutPayment") + "?source=" + source, redirectUrl;
  try {
    let newItem = JSON.parse(((_b = body.get("cart")) == null ? void 0 : _b.toString()) || "");
    newItem && (currentCart = newItem), redirectUrl = new URL(((_c = body.get("redirectUrl")) == null ? void 0 : _c.toString()) || payment), redirectUrl.searchParams.set("cartStatus", "true");
  } catch {
    redirectUrl = null;
  }
  return (0, import_node10.redirect)(redirectUrl ? redirectUrl.href : payment, {
    headers: {
      "Set-Cookie": await cartCheckoutCookie.serialize(currentCart)
    }
  });
}
var auth_order_checkout_default = () => "please wait...";

// app/routes/_auth.user.order.$id.tsx
var auth_user_order_id_exports = {};
__export(auth_user_order_id_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action10,
  default: () => auth_user_order_id_default,
  loader: () => loader13
});
var import_icons = require("@ant-design/icons"), import_core23 = require("@mantine/core"), import_client7 = require("@prisma/client"), import_node11 = require("@remix-run/node"), import_react35 = require("@remix-run/react"), import_icons_react15 = require("@tabler/icons-react"), import_icons_react16 = require("@tabler/icons-react"), import_icons_react17 = require("@tabler/icons-react"), import_react36 = require("react");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
async function action10(args) {
  var _a, _b;
  let formData = args.request.formData(), _action = (_a = (await formData).get("action")) == null ? void 0 : _a.toString(), id = (_b = (await formData).get("id")) == null ? void 0 : _b.toString();
  if (!id)
    return !1;
  switch (_action) {
    case "cancel":
      await db.booking.update({
        where: {
          id
        },
        data: {
          status: import_client7.BookingStatus.CANCELLED
        }
      }), await db.bookingService.updateMany({
        where: {
          bookingId: id
        },
        data: {
          status: import_client7.BookingStatus.CANCELLED
        }
      });
      break;
  }
  return !0;
}
async function loader13({ request, params }) {
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
        bookingService: {
          select: {
            id: !0,
            cost: !0,
            duration: !0,
            date: !0,
            timeHour: !0,
            status: !0,
            location: !0,
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
            }
          }
        }
      }
    }).then((r) => {
      if (r)
        resolve({
          id: r == null ? void 0 : r.id,
          orderId: r.orderId,
          status: r.status,
          date: r.created_at,
          coupon: r.coupon,
          tax: r.tax,
          discount: r.discount,
          total: r.total,
          services: r.bookingService.map((x) => ({
            id: x.id,
            date: x.date,
            status: x.status,
            timeHour: x.timeHour,
            duration: x.duration,
            location: x.location,
            name: x.vendorServiceGroup.group.name,
            vendor: x.vendorServiceGroup.vendor
          }))
        });
      else
        throw new Error("invalid order");
    });
  });
  return (0, import_node11.defer)({
    data
  });
}
var orderStatusCheckList = [
  {
    color: "red",
    children: "Order Cancelled",
    dot: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons_react17.IconCircleX, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 175,
      columnNumber: 18
    }, this),
    filter: [import_client7.BookingStatus.CANCELLED]
  },
  {
    color: "red",
    dot: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons_react17.IconCircleX, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 180,
      columnNumber: 18
    }, this),
    children: "Sorry, Your order couldn't confirm due to unservicable.",
    filter: [import_client7.BookingStatus.REJECTED]
  },
  {
    color: "gold",
    dot: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons_react17.IconAlertCircleFilled, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 186,
      columnNumber: 18
    }, this),
    children: "Vendors has been notified.",
    filter: [import_client7.BookingStatus.PENDING]
  },
  {
    color: "green",
    dot: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons_react15.IconChecks, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 192,
      columnNumber: 18
    }, this),
    children: "Order Confirmed",
    filter: [import_client7.BookingStatus.ACCEPTED, import_client7.BookingStatus.IN_PROGRESS, import_client7.BookingStatus.COMPLETED]
  },
  {
    color: "yellow",
    dot: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons_react15.IconProgress, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 198,
      columnNumber: 18
    }, this),
    children: "Service is in progress",
    filter: [import_client7.BookingStatus.IN_PROGRESS]
  },
  {
    color: "#00CCFF",
    dot: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons.SmileOutlined, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 204,
      columnNumber: 18
    }, this),
    children: "Finished",
    filter: [import_client7.BookingStatus.COMPLETED]
  },
  {
    color: "green",
    dot: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons_react16.IconCreditCardRefund, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 210,
      columnNumber: 18
    }, this),
    children: "Refund processed",
    filter: [import_client7.BookingStatus.REJECTED, import_client7.BookingStatus.CANCELLED]
  }
], UserOrderHome = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid.Col, { span: { base: 12, md: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 3, children: "Manage Booking" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 220,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 221,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(UserOrderHome.Order, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 222,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.order.$id.tsx",
    lineNumber: 219,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.user.order.$id.tsx",
    lineNumber: 218,
    columnNumber: 16
  }, this),
  Order: () => {
    let data = (0, import_react35.useLoaderData)(), [showModal, setModal] = (0, import_react36.useState)(!1);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react36.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Skeleton, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 230,
      columnNumber: 36
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react35.Await, { resolve: data.data, children: (orderData) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Card, { withBorder: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid, { align: "middle", gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid.Col, { span: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: [
            "Order ID: ",
            orderData.orderId
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 237,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 236,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Badge, { color: StatusMarker.get(orderData.status), children: orderData.status }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 239,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 235,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 234,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid.Col, { span: "content", children: orderData.status !== import_client7.BookingStatus.CANCELLED && orderData.status !== import_client7.BookingStatus.REJECTED && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Menu, { trigger: "hover", position: "bottom-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Button, { variant: "outline", radius: "xl", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons.EditOutlined, {}, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 245,
            columnNumber: 90
          }, this), size: "middle", children: "Manage" }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 245,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 244,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Menu.Dropdown, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Menu.Item, { children: "Reschedule" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id.tsx",
              lineNumber: 250,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Menu.Item, { color: "red", onClick: () => setModal(!0), children: "Cancel" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id.tsx",
              lineNumber: 251,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 249,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 243,
          columnNumber: 125
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 242,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 233,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 257,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Divider, {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 258,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 259,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Timeline, { bulletSize: 24, lineWidth: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Timeline.Item, { bullet: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons_react17.IconCheck, { size: 12 }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 262,
          columnNumber: 52
        }, this), title: "Order Placed", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Text, { c: "dimmed", size: "sm", children: "Your order has been recieved." }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 263,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Text, { size: "xs", mt: 4, children: DateFormatter.short(orderData.date) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 264,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 262,
          columnNumber: 29
        }, this),
        orderStatusCheckList.filter((x) => {
          var _a;
          return (_a = x.filter) == null ? void 0 : _a.includes(orderData.status);
        }).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Timeline.Item, { title: item.children, bullet: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          import_core23.ThemeIcon,
          {
            c: item.color,
            radius: "xl",
            size: 24,
            children: item.dot
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 266,
            columnNumber: 158
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 266,
          columnNumber: 113
        }, this)),
        [import_client7.BookingStatus.CANCELLED, import_client7.BookingStatus.REJECTED, import_client7.BookingStatus.COMPLETED].some((x) => x === orderData.status) ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 273,
          columnNumber: 207
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Timeline.Item, { title: "Waiting for updates..." }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 273,
          columnNumber: 142
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 261,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 260,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 276,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Divider, {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 277,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 278,
        columnNumber: 21
      }, this),
      orderData.services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid, { align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react35.Link, { to: "/profile/" + service.vendor.username, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Avatar, { src: PATH.RESOURCE_URL + service.vendor.profileImageName }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 281,
          columnNumber: 78
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 281,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 280,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid.Col, { span: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react35.Link, { to: "/profile/" + service.vendor.username, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Text, { fw: 500, children: service.vendor.username }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 285,
            columnNumber: 82
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 285,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Badge, { size: "xs", children: service.name }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 286,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Text, { children: [
            "Date: ",
            service.date,
            ", at ",
            service.timeHour,
            " (",
            service.duration,
            " hours)"
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 287,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Text, { children: [
            "Venue: ",
            service.location
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id.tsx",
            lineNumber: 290,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 284,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 283,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Tooltip, { label: service.status === import_client7.BookingStatus.PENDING ? "Call button will enabled after the vendor confirmation" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Button, { radius: "xl", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_icons.PhoneOutlined, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 297,
          columnNumber: 68
        }, this), size: "middle", disabled: service.status !== import_client7.BookingStatus.ACCEPTED, children: "Call" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 297,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 296,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 295,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 279,
        columnNumber: 56
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 303,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Divider, {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 304,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 305,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Text, { fw: 500, td: "underline", children: "Addon Services" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 306,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.List, { children: orderData.services.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.List.Item, { c: StatusMarker.get(item.status), children: item.name }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 308,
        columnNumber: 57
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 307,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Modal, { opened: showModal, onClose: () => setModal(!1), title: "Confirm cancellation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react35.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Text, { children: "The amount deducted will be refunded to your original payment menthod in 3-10 days." }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 313,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "hidden", value: orderData.id, name: "id" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 314,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid, { justify: "end", style: { marginTop: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Button, { type: "submit", color: "red", name: "action", value: "cancel", onClick: () => setModal(!1), children: "Confirm" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 316,
          columnNumber: 43
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 316,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id.tsx",
          lineNumber: 315,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 312,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id.tsx",
        lineNumber: 311,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 232,
      columnNumber: 31
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 231,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id.tsx",
      lineNumber: 230,
      columnNumber: 16
    }, this);
  }
}, auth_user_order_id_default = UserOrderHome.Index;
function ErrorBoundary3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: "Invalid data" }, void 0, !1, {
    fileName: "app/routes/_auth.user.order.$id.tsx",
    lineNumber: 331,
    columnNumber: 12
  }, this);
}

// app/routes/services.$id.$subId.tsx
var services_id_subId_exports = {};
__export(services_id_subId_exports, {
  default: () => services_id_subId_default,
  loader: () => loader14,
  meta: () => meta2
});
var import_node12 = require("@remix-run/node"), import_react38 = require("@remix-run/react"), import_react39 = require("react");
var import_react_infinite_scroll_component = __toESM(require("react-infinite-scroll-component")), import_rxjs = require("rxjs");
var import_core25 = require("@mantine/core");

// app/components/ProfileQuickCard.tsx
var import_core24 = require("@mantine/core"), import_react37 = require("@remix-run/react"), import_react_photo_view4 = require("react-photo-view");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), itemDataThumbSetStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "4px",
  background: "#808080"
};
function ProfileQuickCard({ id, name, rating, services, tag, profileImg, portfolio, categoryId, startsFrom }) {
  function url() {
    return categoryId ? routes_data_default.get("VendorProfileWithService", { id, sGrpId: categoryId }) : routes_data_default.get("VendorProfile", { id });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Grid, { gutter: 0, align: "end", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Grid.Col, { span: { base: 12, md: 6 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Grid, { gutter: "md", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Grid.Col, { span: { base: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react37.Link, { to: url(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_core24.Avatar,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Grid.Col, { span: { base: "auto", md: 12 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Group, { gap: "sm", align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Title, { order: 4, children: name }, void 0, !1, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 34,
              columnNumber: 13
            }, this),
            tag && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Badge, { color: "green", size: "xs", children: tag }, void 0, !1, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 35,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Group, { gap: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Rating, { defaultValue: rating, fractions: 3, readOnly: !0, size: "sm" }, void 0, !1, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Text, { c: "dimmed", children: "(23 Reviews)" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Space, { h: "sm" }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      (services == null ? void 0 : services.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Flex, { gap: "xs", wrap: "wrap", align: "center", children: [
        services.map((x, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Badge, { variant: "light", color: "gray", size: "xs", children: x }, "tag" + index, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      "Starts from ",
      startsFrom,
      "."
    ] }, void 0, !0, {
      fileName: "app/components/ProfileQuickCard.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Grid.Col, { span: { base: 12, md: "auto" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Space, { h: "md" }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_photo_view4.PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Flex, { direction: "column", gap: "xs", wrap: "wrap", mah: "240px", justify: "end", align: "end", style: { alignContent: "end" }, children: [
        portfolio == null ? void 0 : portfolio.map((imageItem, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Box, { style: i === 0 || portfolio.length % 2 == 1 && i < 2 ? { width: "200px", height: "200px" } : { width: "95px", height: "95px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_photo_view4.PhotoView, { src: imageItem, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_core24.Image,
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
            lineNumber: 61,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 59,
          columnNumber: 45
        }, this)),
        portfolio != null && portfolio.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, {}, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 74,
          columnNumber: 124
        }, this) : [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Box, { w: "95px", h: "95px", opacity: 0.1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { style: itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 70,
            columnNumber: 72
          }, this) }, "empty-box-1", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Box, { w: "95px", h: "95px" }, "empty-box-2", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Box, { w: "95px", h: "95px" }, "empty-box-3", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Box, { w: "95px", h: "95px", opacity: 0.3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { style: itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 73,
            columnNumber: 72
          }, this) }, "empty-box-4", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Box, { w: "95px", h: "95px", opacity: 0.2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { style: itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 74,
            columnNumber: 72
          }, this) }, "empty-box-5", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ],
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react37.Link, { to: url(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Button, { w: "95px", h: "95px", variant: "outline", children: [
          "View",
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          "Profile"
        ] }, void 0, !0, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileQuickCard.tsx",
      lineNumber: 55,
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
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), sortPanelStyles = {
  background: "var(--ui-color-accent)",
  padding: "10px 20px",
  borderRadius: "4px"
}, meta2 = () => [
  { title: "Celebria Collective" },
  { name: "description", content: "Find your Pefect vendor" }
];
async function loader14({
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
  return (0, import_node12.defer)({
    data,
    result,
    page,
    meta: { ...metaInfo, categoryId }
  });
}
var SortResultsPanel = () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { style: sortPanelStyles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Group, { align: "center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Text, { children: "Sort By: " }, void 0, !1, {
    fileName: "app/routes/services.$id.$subId.tsx",
    lineNumber: 223,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_core25.Select,
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
    let data = (0, import_react38.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Stack, { gap: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Grid, { gutter: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Grid.Col, { span: { base: 12, md: 8, lg: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Stack, { gap: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Text, { c: "dimmed", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Badge, { color: "magenta", children: data.meta.name }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react39.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Await, { resolve: data.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Title, { order: 3, children: response == null ? void 0 : response.name }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { children: data.meta.description }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 252,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(SortResultsPanel, {}, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 254,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          import_react39.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/routes/services.$id.$subId.tsx",
              lineNumber: 256,
              columnNumber: 47
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Await, { resolve: data == null ? void 0 : data.result, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Grid.Col, { span: { base: 12, md: 4, lg: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Card, { style: { borderColor: "#c6c3c3", borderRadius: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Title, { order: 3, children: [
          "Hiring",
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 272,
            columnNumber: 56
          }, this),
          "Without the",
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("br", {}, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("img", { style: { maxWidth: "100%" }, src: "/assets/web-thumb1.jpg" }, void 0, !1, {
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
    let data = (0, import_react38.useLoaderData)(), navigate = (0, import_react38.useNavigate)(), location = (0, import_react38.useLocation)(), [result, setResult] = (0, import_react39.useState)([]);
    (0, import_react39.useEffect)(() => {
      vendors && setResult(data.page === 0 ? vendors : result.concat(vendors));
    }, [vendors]);
    function loadNextPage() {
      let searchParams = new URLSearchParams();
      searchParams.set("page", "" + (data.page + 1)), navigate(location.pathname + "?" + searchParams.toString(), {
        preventScrollReset: !0
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      import_react_infinite_scroll_component.default,
      {
        dataLength: result.length,
        next: loadNextPage,
        hasMore: loadMore,
        loader: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { style: { padding: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 318,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 317,
          columnNumber: 17
        }, this),
        endMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { style: { textAlign: "center", padding: "40px" }, children: "End of results." }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 322,
          columnNumber: 17
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Stack, { gap: "xl", children: result == null ? void 0 : result.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ProfileQuickCard_default, { id: item.id, name: item.name, portfolio: item.portfolio, profileImg: item.profileImg, services: item.services, tag: item.tag, rating: item.rating, categoryId }, item.id, !1, {
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
  loader: () => loader15,
  meta: () => meta3
});
var import_core27 = require("@mantine/core"), import_node13 = require("@remix-run/node"), import_react40 = require("@remix-run/react"), import_react41 = require("react"), import_react_infinite_scroll_component2 = __toESM(require("react-infinite-scroll-component")), import_rxjs2 = require("rxjs");

// app/components/ListSortBar.tsx
var import_core26 = require("@mantine/core"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), sortPanelStyles2 = {
  background: "var(--ui-color-accent)",
  padding: "10px 20px",
  borderRadius: "4px"
};
var list = [
  { value: "LOWEST_PRICE" /* LOWEST_PRICE */, label: "Lowest Price" },
  { value: "HIGHEST_PRICE" /* HIGHEST_PRICE */, label: "Highest Price" },
  { value: "RATING" /* RATING */, label: "Rating" }
];
function ListSortBar({ onSort }) {
  function setValue(v) {
    onSort(v);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { style: sortPanelStyles2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Group, { align: "center", gap: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Text, { c: "dimmed", size: "sm", children: "Sort By:" }, void 0, !1, {
      fileName: "app/components/ListSortBar.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      import_core26.Select,
      {
        defaultValue: "0",
        onChange: (x) => setValue(x),
        data: list,
        unselectable: "on"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ListSortBar.tsx",
        lineNumber: 32,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ListSortBar.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ListSortBar.tsx",
    lineNumber: 29,
    columnNumber: 12
  }, this);
}
var ListSortBar_default = ListSortBar;

// app/routes/services.$id._index.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "Celebria Collective" },
  { name: "description", content: "Find your Pefect vendor" }
];
async function loader15({
  request,
  params
}) {
  var _a, _b;
  let pageId = params.id, searchParams = new URL(request.url).searchParams, page = parseInt(searchParams.get("page") || "") || 0, sort = searchParams.get("sort"), categoryIds = (_b = (_a = searchParams.get("category")) == null ? void 0 : _a.toString()) == null ? void 0 : _b.split(",").filter((x) => x), limit = 20;
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
  });
  if (sort)
    switch (sort) {
      case "HIGHEST_PRICE" /* HIGHEST_PRICE */:
        break;
    }
  let result = new Promise(function(resolve) {
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
            VendorServiceGroup: {
              select: {
                cost: !0
              },
              take: 1,
              orderBy: {
                cost: "asc"
              }
            },
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
          // include:{
          //   VendorServiceGroup:{
          //     orderBy:{
          //       cost: 'asc'
          //     }
          //   }
          // },
          orderBy: {
            VendorServiceGroup: {
              _count: "desc"
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
          data: r.data.map((x) => {
            var _a2;
            return {
              id: x.username,
              name: x.username,
              portfolio: x.vendorPortfolio.map(
                (x2) => x2.fileName ? PATH.RESOURCE_URL + x2.fileName : ""
              ),
              rating: 4,
              tag,
              startsFrom: ((_a2 = x.VendorServiceGroup[0]) == null ? void 0 : _a2.cost) || 0,
              profileImg: x.profileImageName ? PATH.RESOURCE_URL + x.profileImageName : PATH.AVATAR_PLACEHOLDER,
              services: x.services.map((x2) => x2.service.name)
            };
          }),
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
  return (0, import_node13.defer)({
    result,
    filters,
    page,
    meta: metaInfo
  });
}
var Photography2 = {
  Index: () => {
    let data = (0, import_react40.useLoaderData)(), navigate = (0, import_react40.useNavigate)(), location = (0, import_react40.useLocation)();
    function sortItems(x) {
      let searchParams = new URLSearchParams(location.search);
      searchParams.set("sort", x || ""), navigate(`${location.pathname}?${searchParams.toString()}`);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Stack, { gap: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Grid, { gutter: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Photography2.Filters, {}, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 367,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Grid.Col, { span: { base: 12, md: 8, lg: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Stack, { gap: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Title, { order: 3, children: [
            data.meta.name,
            " in Banglore"
          ] }, void 0, !0, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 371,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Text, { size: "sm", children: data.meta.description }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 372,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 370,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ListSortBar_default, { onSort: sortItems }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 374,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          import_react41.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 376,
              columnNumber: 29
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react40.Await, { resolve: data == null ? void 0 : data.result, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              Photography2.Results,
              {
                vendors: response.data,
                loadMore: response.loadMore
              },
              void 0,
              !1,
              {
                fileName: "app/routes/services.$id._index.tsx",
                lineNumber: 380,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 378,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 375,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 369,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 368,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 366,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 364,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 363,
      columnNumber: 7
    }, this);
  },
  Filters: () => {
    let data = (0, import_react40.useLoaderData)(), navigate = (0, import_react40.useNavigate)(), location = (0, import_react40.useLocation)(), [getCategory, setCategory] = (0, import_react41.useState)([]);
    (0, import_react41.useEffect)(() => {
      var _a;
      let params = new URLSearchParams(location.search);
      setCategory(
        ((_a = params.get("category")) == null ? void 0 : _a.split(",").filter((x) => !!x)) || []
      );
    }, []);
    function toggleCategoryItem(checked, value) {
      let list2;
      checked ? list2 = [...getCategory, value] : list2 = [...getCategory.filter((x) => x !== value)], setCategory(list2);
      let params = new URLSearchParams(location.search);
      params.set("category", list2.join(",")), params.set("page", "0"), navigate(`${location.pathname}?${params.toString()}`);
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
          return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Accordion.Item, { value: filter.name, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Accordion.Control, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Group, { justify: "space-between", align: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Text, { fw: 500, children: filter.name }, void 0, !1, {
                fileName: "app/routes/services.$id._index.tsx",
                lineNumber: 448,
                columnNumber: 17
              }, this),
              " ",
              selectedCategoryCount !== 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
                import_core27.Badge,
                {
                  color: "#faad14",
                  children: selectedCategoryCount
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/services.$id._index.tsx",
                  lineNumber: 450,
                  columnNumber: 19
                },
                this
              ) : null
            ] }, void 0, !0, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 447,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 446,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Stack, { children: [
              filter.category.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
                import_core27.Checkbox,
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
                  lineNumber: 458,
                  columnNumber: 19
                },
                this
              )),
              !((_a = filter.category) != null && _a.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { children: "Unavailable right now." }, void 0, !1, {
                fileName: "app/routes/services.$id._index.tsx",
                lineNumber: 469,
                columnNumber: 46
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 456,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 455,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 445,
            columnNumber: 18
          }, this);
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Grid.Col, { span: { base: 12 }, hiddenFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "filters-section-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "section-title", children: "Filter:" }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 494,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 493,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 492,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Grid.Col, { span: { md: 4, lg: 3 }, visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "filters-section-wrapper _sticky-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "section-title", children: "Filter:" }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 499,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react41.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 500,
          columnNumber: 33
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react40.Await, { resolve: data.filters, children: (filters) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Accordion, { children: filterItems(filters) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 503,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 501,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 500,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 498,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 497,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 491,
      columnNumber: 7
    }, this);
  },
  Results: ({
    vendors,
    loadMore
  }) => {
    let data = (0, import_react40.useLoaderData)(), navigate = (0, import_react40.useNavigate)(), location = (0, import_react40.useLocation)(), [result, setResult] = (0, import_react41.useState)([]);
    (0, import_react41.useEffect)(() => {
      vendors && setResult(data.page === 0 ? vendors : result.concat(vendors));
    }, [vendors]);
    function loadNextPage() {
      let searchParams = new URLSearchParams();
      searchParams.set("page", "" + (data.page + 1)), navigate(location.pathname + "?" + searchParams.toString(), {
        preventScrollReset: !0
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      import_react_infinite_scroll_component2.default,
      {
        dataLength: result.length,
        next: loadNextPage,
        hasMore: loadMore,
        loader: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { style: { padding: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 549,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 548,
          columnNumber: 11
        }, this),
        endMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { style: { textAlign: "center", padding: "40px" }, children: "End of results." }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 553,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Stack, { gap: "xl", children: result == null ? void 0 : result.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ProfileQuickCard_default, { id: item.id, name: item.name, portfolio: item.portfolio, profileImg: item.profileImg, services: item.services, tag: item.tag, rating: item.rating, startsFrom: item.startsFrom }, item.id, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 559,
          columnNumber: 32
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 558,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 543,
        columnNumber: 7
      },
      this
    );
  }
}, services_id_index_default = Photography2.Index;

// app/routes/_auth.order.submit.tsx
var auth_order_submit_exports = {};
__export(auth_order_submit_exports, {
  action: () => action11,
  default: () => auth_order_submit_default
});
var import_client8 = require("@prisma/client"), import_node14 = require("@remix-run/node");

// app/service/email.service.ts
var nodemailer = require("nodemailer"), transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: !0,
  auth: {
    user: "team@celebriacollective.com",
    pass: "notyourdaddy69"
  }
});
async function getVendorEmailByUsername(username) {
  return await db.vendor.findFirst({
    where: {
      username
    },
    select: {
      email: !0
    }
  });
}
async function sendEmail(input) {
  await transporter.sendMail({
    from: '"Celebria Collective" <team@celebriacollective.com>',
    to: input.to,
    subject: input.subject,
    text: input.subject,
    html: input.html
  });
}
async function notifyVendorNewOrder(input) {
  let email = await getVendorEmailByUsername(input.username);
  if (!(email != null && email.email))
    return;
  let subject = "You have a new booking", html = `Hello, You have a new booking <br/><br/> Service:<b>${input.serviceName}</b>
    <br/>
    Date: <b>${input.date}</b>
    <br/><br/>
    Please login to your account for more information. 
    <a href="http://www.celebriacollective.com">celebriacollective.com</a>
    `, text = "Hello, You have a new booking on " + input.date;
  await sendEmail({
    to: email == null ? void 0 : email.email,
    subject,
    html,
    text
  });
}
var EmailService = {
  notifyVendorNewOrder
}, email_service_default = EmailService;

// app/routes/_auth.order.submit.tsx
async function action11({
  request
}) {
  var _a, _b;
  let cookieHeader = request.headers.get("Cookie"), userId = (await getSession(cookieHeader)).get(USER_SESSION_KEY), form = await request.formData(), paymentMode = (_a = form.get("paymentMode")) == null ? void 0 : _a.toString(), source = (_b = form.get("source")) == null ? void 0 : _b.toString();
  if (!userId)
    return (0, import_node14.redirect)("/user/login");
  let loggedInUser = await db.user.findFirst({
    where: {
      id: userId
    }
  });
  if (!loggedInUser || !paymentMode)
    return (0, import_node14.redirect)("/user/login");
  let cartData = await cartCheckoutCookie.parse(cookieHeader);
  if (!(cartData != null && cartData.length))
    return (0, import_node14.redirect)("/cart/checkout");
  let newOrder = await new Promise(function(resolve) {
    CartService.summary(cartData).then(async (res) => {
      if (!res)
        return;
      function extractTwoDigit(number) {
        return number % 100;
      }
      let summary = CartService.calculate(res), date = /* @__PURE__ */ new Date(), orderId = "CC" + extractTwoDigit(date.getFullYear()) + date.getMonth() + extractTwoDigit(+loggedInUser.username) + extractTwoDigit(Date.now()), data = await db.booking.create({
        data: {
          id: generateUuid(),
          userId: loggedInUser.id,
          orderId,
          status: import_client8.BookingStatus.PENDING,
          total: summary.total,
          tax: summary.tax,
          discount: 0,
          coupon: null,
          paymentMode
        }
      });
      for (let i = 0; i < res.length; i++) {
        let item = res[i], endDate = new Date(item.date);
        endDate.setHours(item.timeHour);
        let serviceData = await db.bookingService.create({
          data: {
            id: generateUuid(),
            bookingId: data.id,
            vendorServiceGroupId: item.vendorServiceGroupId,
            status: import_client8.BookingStatus.PENDING,
            cost: item.cost,
            date: item.date,
            timeHour: item.timeHour,
            duration: item.duration,
            endTime: item.timeHour + item.duration,
            endDate,
            location: item.location,
            locationLat: item.locationLat,
            locationLon: item.locationLon
          }
        });
        await db.bookingAddons.createMany({
          data: item.services.filter((x) => !!x.id).map((x) => ({
            id: generateUuid(),
            bookingServiceId: serviceData.id,
            serviceId: x.id,
            serviceName: x.name,
            fareMode: x.fareMode,
            status: import_client8.BookingStatus.PENDING,
            cost: x.cost
          }))
        }), await email_service_default.notifyVendorNewOrder({
          username: item.vendorId,
          date: item.date.toString(),
          serviceName: item.name
        });
      }
      resolve(orderId);
    });
  }), headers = [
    ["Set-Cookie", await cartCheckoutCookie.serialize(null)]
  ];
  return source === "cart" && headers.push(["Set-Cookie", await userCartCookie.serialize(null)]), (0, import_node14.redirect)("/order/success?id=" + newOrder, {
    headers
  });
}
var auth_order_submit_default = () => "Processing your order. Please wait...";

// app/routes/cart.add._index.tsx
var cart_add_index_exports = {};
__export(cart_add_index_exports, {
  action: () => action12,
  default: () => cart_add_index_default
});
var import_node15 = require("@remix-run/node");
async function action12({
  request
}) {
  var _a, _b;
  let cookieHeader = request.headers.get("Cookie"), currentCart = await userCartCookie.parse(cookieHeader) || [], body = await request.formData(), redirectUrl;
  try {
    let newItems = JSON.parse(((_a = body.get("cart")) == null ? void 0 : _a.toString()) || "");
    if (newItems != null && newItems.length) {
      let vendorIds = newItems.map((x) => x.vendorServiceGroupId);
      currentCart = currentCart.filter((x) => !vendorIds.includes(x.vendorServiceGroupId)), currentCart = currentCart.concat(newItems);
    }
    redirectUrl = new URL(((_b = body.get("redirectUrl")) == null ? void 0 : _b.toString()) || routes_data_default.get("Cart")), redirectUrl.searchParams.set("cartStatus", "true");
  } catch {
    redirectUrl = null;
  }
  return (0, import_node15.redirect)(redirectUrl ? redirectUrl.href : routes_data_default.get("Cart"), {
    headers: {
      "Set-Cookie": await userCartCookie.serialize(currentCart)
    }
  });
}
var cart_add_index_default = () => "please wait...";

// app/routes/_api.verify-otp.tsx
var api_verify_otp_exports = {};
__export(api_verify_otp_exports, {
  action: () => action13
});
var import_node16 = require("@remix-run/node"), import_client9 = require("@prisma/client");
var bcrypt = require("bcryptjs");
async function action13({
  request
}) {
  var _a;
  let body = await request.formData(), prisma = new import_client9.PrismaClient(), username = body.get("phone"), otp = body.get("otp"), redirectUrl = ((_a = body.get("redirectUrl")) == null ? void 0 : _a.toString()) || "/user/home", success = !1, resCode = 400;
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
        return session.set(USER_SESSION_KEY, token), (0, import_node16.redirect)(redirectUrl, {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
    }
  } catch {
  }
  return success && (resCode = 200), (0, import_node16.json)({ success }, resCode);
}

// app/routes/_auth.user.home.tsx
var auth_user_home_exports = {};
__export(auth_user_home_exports, {
  default: () => auth_user_home_default,
  loader: () => loader16
});
var import_core28 = require("@mantine/core"), import_node17 = require("@remix-run/node"), import_react42 = require("@remix-run/react"), import_react43 = require("react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
async function loader16({ params, request }) {
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
        bookingService: {
          select: {
            vendorServiceGroup: {
              select: {
                group: {
                  select: {
                    name: !0
                  }
                }
              }
            }
          }
        }
      }
    }).then((r) => {
      let p = r.map((x) => ({
        id: x.orderId,
        status: x.status,
        date: x.created_at,
        services: x.bookingService.map((i) => i.vendorServiceGroup.group.name || "Deleted service")
      }));
      resolve(p);
    });
  });
  return (0, import_node17.defer)({ orders });
}
var UserHome = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Grid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Grid.Col, { span: { base: 12, md: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Title, { order: 3, children: "Manage Bookings" }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 74,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(UserHome.AllBookings, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 75,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.home.tsx",
    lineNumber: 73,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.user.home.tsx",
    lineNumber: 72,
    columnNumber: 16
  }, this),
  AllBookings: () => {
    let data = (0, import_react42.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react43.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Skeleton, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 83,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react42.Await, { resolve: data.orders, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Grid, { children: [
      response.map(
        (booking) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Grid.Col, { span: 12, children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Grid, { justify: "space-between", align: "middle", gutter: 20, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Grid.Col, { span: "auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Group, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Text, { c: "dimmed", fw: 500, children: [
                  "Order ID: ",
                  booking.id
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.user.home.tsx",
                  lineNumber: 90,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Badge, { color: StatusMarker.get(booking.status) || "gray", children: booking.status }, void 0, !1, {
                  fileName: "app/routes/_auth.user.home.tsx",
                  lineNumber: 91,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 89,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Space, { h: "sm" }, void 0, !1, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 93,
                columnNumber: 37
              }, this),
              "Placed on: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("b", { children: DateFormatter.short(booking.date) }, void 0, !1, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 94,
                columnNumber: 48
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 88,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react42.Link, { to: "/user/order/" + booking.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Button, { radius: "xl", size: "middle", children: "View" }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 98,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 97,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 96,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.home.tsx",
            lineNumber: 87,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.home.tsx",
            lineNumber: 86,
            columnNumber: 88
          }, this)
        ] }, booking.id, !0, {
          fileName: "app/routes/_auth.user.home.tsx",
          lineNumber: 86,
          columnNumber: 50
        }, this)
      ),
      !response.length && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Grid.Col, { span: 12, children: "Sorry, You haven't scheduled any orders" }, void 0, !1, {
        fileName: "app/routes/_auth.user.home.tsx",
        lineNumber: 107,
        columnNumber: 46
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 85,
      columnNumber: 34
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 84,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 82,
      columnNumber: 16
    }, this);
  }
}, auth_user_home_default = UserHome.Index;

// app/routes/login.redirect.tsx
var login_redirect_exports = {};
__export(login_redirect_exports, {
  action: () => action14,
  loader: () => loader17
});
var import_node18 = require("@remix-run/node");
async function action14({
  request
}) {
  var _a, _b;
  let session = await getSession(
    request.headers.get("Cookie")
  ), body = await request.formData(), userToken = (_a = body.get("id")) == null ? void 0 : _a.toString(), redirectUrl = ((_b = body.get("redirect")) == null ? void 0 : _b.toString()) || "/user/home";
  return userToken ? (session.set(USER_SESSION_KEY, userToken), (0, import_node18.redirect)(redirectUrl, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : (0, import_node18.redirect)(redirectUrl || "/");
}
async function loader17({
  request
}) {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  if (session.has(USER_SESSION_KEY))
    return (0, import_node18.redirect)("/");
  let data = { error: session.get("error") };
  return (0, import_node18.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/routes/partner.signup.tsx
var partner_signup_exports = {};
__export(partner_signup_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => PartnerSignupParent,
  loader: () => loader18
});
var import_react44 = require("@remix-run/react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function loader18() {
  return null;
}
function PartnerSignupParent() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react44.Outlet, {}, void 0, !1, {
    fileName: "app/routes/partner.signup.tsx",
    lineNumber: 8,
    columnNumber: 12
  }, this);
}
function ErrorBoundary4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: "Oops, Something went wrong! Please reload the page." }, void 0, !1, {
    fileName: "app/routes/partner.signup.tsx",
    lineNumber: 13,
    columnNumber: 12
  }, this);
}

// app/routes/order.success.tsx
var order_success_exports = {};
__export(order_success_exports, {
  default: () => order_success_default,
  loader: () => loader19
});
var import_icons2 = require("@ant-design/icons"), import_core29 = require("@mantine/core"), import_node19 = require("@remix-run/node"), import_react45 = require("@remix-run/react"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
async function loader19({
  params,
  request
}) {
  let orderId = new URL(request.url).searchParams.get("id");
  return orderId ? { id: orderId } : ((0, import_node19.redirect)("/404"), null);
}
var getIconStyle = (color) => ({
  width: (0, import_core29.rem)(24),
  height: (0, import_core29.rem)(24),
  color: color ? `var(--mantine-color-${color}-7)` : void 0
}), iconStyle = getIconStyle(), customIcons = {
  1: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_icons2.FrownOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 32,
    columnNumber: 8
  }, this),
  2: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_icons2.FrownOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 33,
    columnNumber: 8
  }, this),
  3: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_icons2.MehOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 34,
    columnNumber: 8
  }, this),
  4: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_icons2.SmileOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 35,
    columnNumber: 8
  }, this),
  5: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_icons2.SmileOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 36,
    columnNumber: 8
  }, this)
};
var OrderSuccess = {
  Index: () => {
    let data = (0, import_react45.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Grid, { justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Grid.Col, { span: { base: 12, md: 4, lg: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Stack, { gap: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Stack, { justify: "center", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Text, { size: "sm", c: "dimmed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_icons2.CheckCircleOutlined, { style: { fontSize: "50px" } }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 55,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 54,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { style: { textAlign: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Title, { order: 2, children: "Your Order is Confirmed!" }, void 0, !1, {
            fileName: "app/routes/order.success.tsx",
            lineNumber: 58,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Text, { children: [
            "We'll send you a confirmation email",
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("br", {}, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 61,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react45.Link, { to: "/user/order/" + (data == null ? void 0 : data.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Button, { variant: "filled", radius: "xl", children: "Check Status" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Title, { order: 5, children: "How was your experience?" }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 68,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core29.Rating, { defaultValue: 3, emptySymbol: ({ index }) => customIcons[index + 1] }, void 0, !1, {
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
  ErrorBoundary: () => ErrorBoundary5,
  default: () => profile_user_default,
  loader: () => loader20
});
var import_core30 = require("@mantine/core"), import_node20 = require("@remix-run/node"), import_react46 = require("@remix-run/react"), import_icons_react18 = require("@tabler/icons-react"), import_icons_react19 = require("@tabler/icons-react"), import_react47 = require("react");

// app/styles/accordian.module.css
var accordian_module_default = { root: "accordian-module__root__AeZrj", item: "accordian-module__item__DPCxc", chevron: "accordian-module__chevron__TNzMJ" };

// app/routes/profile.$user.tsx
var import_icons_react20 = require("@tabler/icons-react"), import_icons_react21 = require("@tabler/icons-react"), import_icons_react22 = require("@tabler/icons-react");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
async function loader20({ params, request }) {
  let id = params.user || "", searchParams = new URL(request.url).searchParams, vendorDetails = VendorQuery.getVendorByUsername(id), serviceList = VendorQuery.getServices(id);
  return (0, import_node20.defer)({
    profile: vendorDetails,
    services: serviceList,
    serviceGroupId: searchParams.get("service")
  });
}
var ProfileLayout = {
  Index: () => {
    let data = (0, import_react46.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid, { gutter: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react47.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Skeleton, {}, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 50,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react46.Await, { resolve: data.profile, children: (profile) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ProfileLayout.Cover, { profile }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 52,
          columnNumber: 43
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { span: { base: 12, md: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react46.Outlet, {}, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Divider, { my: "xl" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react47.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Skeleton, {}, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 61,
        columnNumber: 60
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 61,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react46.Await, { resolve: data.services, children: (services) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ProfileLayout.Pricing, { services, preSelectedGroupId: data.serviceGroupId }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 63,
        columnNumber: 36
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ProfileLayout.CartSuggestion, {}, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 47,
      columnNumber: 12
    }, this);
  },
  Cover: ({ profile }) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Card, { shadow: "sm", padding: "lg", radius: "md", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid, { align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { span: { base: 4, md: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Image, { src: profile == null ? void 0 : profile.avatar, width: "100%", mah: "300px" }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 75,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 74,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { span: { base: 8, md: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Box, { p: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Stack, { gap: "xs", justify: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Flex, { gap: "sm", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Title, { order: 4, children: profile == null ? void 0 : profile.fullName }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 81,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_icons_react20.IconDiscountCheckFilled, { size: "20px", style: { color: "var(--ui-color-success)" } }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 82,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 80,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Flex, { align: "center", gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_icons_react21.IconMapPin, { style: { color: "gray" }, size: "18px" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 85,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { fw: 500, children: [
            profile == null ? void 0 : profile.location,
            " Bangalore"
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 86,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 84,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 79,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 89,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Flex, { justify: "center", gap: "xs", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Box, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("a", { href: "#book-now-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Button, { variant: "filled", radius: "sm", fullWidth: !0, children: "Book a service" }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 93,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 92,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 91,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.ActionIcon, { size: "lg", variant: "light", color: "pink", "aria-label": "Favourite", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_icons_react22.IconHeart, { style: { width: "70%", height: "70%" }, stroke: 1.5 }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 97,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 96,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 90,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 100,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Divider, {}, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 101,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 102,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { c: "dimmed", children: [
        "Starting from ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(currency_transformer_default, { value: profile == null ? void 0 : profile.baseCharge }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 103,
          columnNumber: 60
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 103,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 78,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 73,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 72,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 71,
    columnNumber: 12
  }, this),
  Pricing: ({ services, preSelectedGroupId }) => {
    let [activeService, setActive] = (0, import_react47.useState)(), [flatList, setFlatList] = (0, import_react47.useState)([]);
    (0, import_react47.useEffect)(() => {
      let list2 = services.reduce((acc, x) => acc.concat(x.services), []);
      setFlatList(list2), setActive(preSelectedGroupId ? list2.find((x) => x.groupId === preSelectedGroupId) : list2[0]);
    }, []);
    function setActiveService(id) {
      let item = flatList.find((x) => x.vendorServiceGroupId === id);
      item && setActive(item);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid, { gutter: "xl", id: "book-now-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Card, { withBorder: !0, style: { borderColor: "#1D4ED7" }, p: "10px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Title, { order: 3, mb: (0, import_core30.rem)(20), children: "Save your money now." }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 134,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { children: "Secure creative professionals instantly with our 'Book Now, Pay Later' option. Pay 50% within 3 days of booking, and the rest after the completion of service." }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 136,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { children: "Choose easy EMI" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 139,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { children: "Pay 100% upfront for a 5% discount. Flexible, hassle-free, and tailored to your financial preferences." }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 142,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Image, { src: "/assets/savings.png", width: "50%" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 145,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 135,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 133,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { span: { base: 12, md: 9 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Group, { align: "end", justify: "space-between", py: (0, import_core30.rem)(40), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Title, { order: 3, children: [
            "Book now",
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 151,
              columnNumber: 46
            }, this),
            "and ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Mark, { color: "lime", children: "Pay later" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 151,
              columnNumber: 56
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Box, { ta: "right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { fw: 500, children: "Having trouble?" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 153,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("a", { href: "mailto:support@celebriacollective.com", target: "_BLANK", children: "Contact us" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 154,
              columnNumber: 31
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 154,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 152,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid, { gutter: "xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { hiddenFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_core30.Select,
            {
              label: "Select a service",
              placeholder: "Select",
              clearable: !1,
              allowDeselect: !1,
              onChange: (x) => setActiveService(x),
              data: services.map((group) => ({ group: group.name, items: group.services.map((x) => ({ value: x.vendorServiceGroupId, label: x.title })) }))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 159,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 158,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Card, { bg: "#F2F5FB", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Group, { justify: "space-between", align: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Title, { order: 5, children: activeService == null ? void 0 : activeService.title }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 170,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Badge, { variant: "light", color: "teal", children: "Most Booked" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 171,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 169,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Divider, { size: "md", w: "10%" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 173,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Box, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { c: "dimmed", children: "Starts from:" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 175,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Title, { order: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.NumberFormatter, { prefix: common_data_default.currency, value: activeService == null ? void 0 : activeService.cost, thousandSeparator: !0 }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 176,
                columnNumber: 54
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 176,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 174,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { fw: 500, children: "Services Included:" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 178,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              import_core30.List,
              {
                spacing: "xs",
                size: "sm",
                center: !0,
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_icons_react19.IconCircleCheck, { size: 16 }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 185,
                  columnNumber: 19
                }, this),
                children: activeService == null ? void 0 : activeService.included.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.List.Item, { children: item.title }, item.id, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 188,
                  columnNumber: 76
                }, this))
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 180,
                columnNumber: 33
              },
              this
            ),
            activeService != null && activeService.addons.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Stack, { gap: "xs", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { fw: 500, children: "Additional" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 194,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.List, { children: activeService == null ? void 0 : activeService.addons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.List.Item, { children: item.title }, item.id, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 196,
                columnNumber: 78
              }, this)) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 195,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 193,
              columnNumber: 65
            }, this) : "",
            (activeService == null ? void 0 : activeService.vendorServiceGroupId) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react46.Link, { to: routes_data_default.get("CartItem", { id: activeService == null ? void 0 : activeService.vendorServiceGroupId }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Button, { variant: "filled", w: "100%", children: "Book Now" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 201,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 200,
              columnNumber: 73
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 168,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 167,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 166,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Grid.Col, { span: { base: 12, md: 6 }, visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Title, { order: 5, children: "Browse Services" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 210,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Divider, { size: "md", w: "10%" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 211,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Accordion, { unstyled: !0, defaultValue: "0", children: services.map((group, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Accordion.Item, { value: "" + index, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Accordion.Control, { style: {
                width: "100%",
                background: "none",
                border: "0",
                textAlign: "left",
                padding: "10px 20px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                direction: "rtl"
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Text, { c: "blue", children: group.name }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 224,
                columnNumber: 24
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 214,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Accordion, { classNames: accordian_module_default, value: activeService == null ? void 0 : activeService.vendorServiceGroupId, disableChevronRotation: !0, chevron: null, onChange: (x) => setActiveService(x), children: group.services.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Accordion.Item, { value: item.vendorServiceGroupId, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Accordion.Control, { icon: (activeService == null ? void 0 : activeService.vendorServiceGroupId) === item.vendorServiceGroupId ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_icons_react18.IconCheck, {}, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 228,
                columnNumber: 146
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_icons_react18.IconPlus, { size: 12 }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 228,
                columnNumber: 162
              }, this), color: "inherit", children: item.title }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 228,
                columnNumber: 53
              }, this) }, item.vendorServiceGroupId, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 227,
                columnNumber: 79
              }, this)) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 226,
                columnNumber: 45
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 225,
                columnNumber: 41
              }, this)
            ] }, "" + index, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 213,
              columnNumber: 69
            }, this)) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 212,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 209,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 208,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 207,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 157,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 131,
      columnNumber: 12
    }, this);
  },
  CartSuggestion: () => {
    let location = (0, import_react46.useLocation)(), navigate = (0, import_react46.useNavigate)(), [showModal, setModal] = (0, import_react47.useState)(!1);
    (0, import_react47.useEffect)(() => {
      new URLSearchParams(location.search).get("cartStatus") && setModal(!0);
    }, [location.pathname]);
    function gotoCart() {
      navigate(routes_data_default.get("Cart"));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Modal, { title: "Your cart has been updated.", opened: showModal, onClose: () => setModal(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core30.Title, { order: 5, children: "Forgot to add something?" }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 259,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 258,
      columnNumber: 12
    }, this);
  }
};
function ErrorBoundary5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "Oops, Something went wrong! Please reload the page." }, void 0, !1, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 265,
    columnNumber: 10
  }, this);
}
var profile_user_default = ProfileLayout.Index;

// app/routes/_api.search.tsx
var api_search_exports = {};
__export(api_search_exports, {
  loader: () => loader21
});
var import_node21 = require("@remix-run/node");
var import_fuse = __toESM(require("fuse.js")), fuseOptions = {
  keys: [
    "name",
    "vendorType.name",
    "serviceGroupType.name",
    "serviceGroupItem.service.name"
  ]
};
function loader21(args) {
  var _a, _b;
  let query = (_b = (_a = new URL(args.request.url).searchParams.get("q")) == null ? void 0 : _a.toLowerCase()) == null ? void 0 : _b.trim();
  if (!(query != null && query.length))
    return (0, import_node21.defer)({ results: [] });
  let groups = new Promise(function(resolve) {
    db.serviceGroup.findMany({
      take: 15,
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
          select: {
            service: {
              select: {
                name: !0
              }
            }
          }
        }
      }
    }).then((r) => {
      let fuse = new import_fuse.default(r, fuseOptions);
      resolve(fuse.search(query));
    });
  });
  return (0, import_node21.defer)({
    results: groups
  });
}

// app/routes/_api.login.tsx
var api_login_exports = {};
__export(api_login_exports, {
  action: () => action15
});
var import_node22 = require("@remix-run/node"), import_client10 = require("@prisma/client");

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
async function action15({
  request
}) {
  let body = await request.formData(), prisma = new import_client10.PrismaClient(), username = body.get("phone"), data, success = !1;
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
        source: import_client10.UserSource.ORGANIC
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
  return (0, import_node22.json)({ success, data }, 200);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader22
});
var loader22 = async ({ request }) => logout(request);

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  loader: () => loader23,
  meta: () => meta4
});
var import_node23 = require("@remix-run/node"), import_react48 = require("react"), import_react49 = require("@remix-run/react");
var import_client11 = require("@prisma/client");

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
            path: routes_data_default.get("CollectionsByVendor", { id: (_e = item.serviceGroupType) == null ? void 0 : _e.keyName, vendorType: category.keyName }),
            description: item.name
          }) : items[items.length - 1].description += ", " + item.name, items) : (items.push({
            id: item.id,
            isCollection: !1,
            name: item.name,
            imageName: item.imageName,
            path: routes_data_default.get("ServiceGroup", { id: category.keyName, subId: item.id })
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
        path: routes_data_default.get("ServiceGroup", { id: x.vendorType.keyName, subId: x.id }),
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
          path: routes_data_default.get("Collections", { id: x.keyName }),
          cost: 0
        };
      }));
    });
  });
}

// app/routes/_index.tsx
var import_pure_react_carousel3 = require("pure-react-carousel"), import_react_simple_typewriter = require("react-simple-typewriter"), import_core31 = require("@mantine/core"), import_icons_react23 = require("@tabler/icons-react");
var import_icons_react24 = require("@tabler/icons-react"), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
async function loader23({ params }) {
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
        path: routes_data_default.get("Services", { id: x.keyName }),
        title: x.name,
        id: x.id,
        serviceGroup: x.serviceGroup
      })));
    });
  }), bannerAds = new Promise(async function(resolve) {
    let finalList = (await db.websiteBanner.findMany({
      where: {
        targetPage: {
          in: [import_client11.BannerLocation.HOME_1, import_client11.BannerLocation.HOME_2, import_client11.BannerLocation.HOME_3]
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
  return (0, import_node23.defer)({ categories, quickLinks, popularServices, collections, topVendors });
}
var meta4 = () => [
  { title: "Celebria Collective" },
  { name: "description", content: "Book a service with us!" }
];
var FALLBACK_IMG = "https://static.miraheze.org/widdershinswiki/thumb/4/47/Placeholder.png/800px-Placeholder.png";
var Home = {
  Index: () => {
    let data = (0, import_react49.useLoaderData)();
    return [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Home.Jumbotron, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 215,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "container no-spacer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Home.Services, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 216,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Home.PopularServices, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 222,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 221,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Home.Collections, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "card-style-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { gutter: 40, align: "center", justify: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 7 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Stack, { align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { className: "_text-center", order: 3, children: [
              "We are here to help",
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 232,
                columnNumber: 82
              }, this),
              "you build your brand"
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 232,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Flex, { align: "center", gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { fw: 500, children: "Check out" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 234,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Link, { to: "/collections/commercial", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Button, { variant: "outline", radius: "xl", children: "Commercial Services" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 235,
                columnNumber: 58
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 235,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 233,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 231,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 230,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "card-style-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Stack, { gap: "md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Flex, { align: "center", gap: "sm", justify: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 5, children: "50+" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 243,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { c: "dimmed", children: "professionals" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 243,
                columnNumber: 53
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 242,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar.Group, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar, { src: "https://api.dicebear.com/7.x/miniavs/svg?seed=1" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 246,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar, { style: { backgroundColor: "#f56a00" }, children: "K" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 247,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar, { style: { backgroundColor: "#87d068" }, src: PATH.AVATAR_PLACEHOLDER }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 248,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar, { style: { backgroundColor: "#1677ff" }, children: "A" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 249,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar, { src: "https://api.dicebear.com/7.x/miniavs/svg?seed=1" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 250,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar, { style: { backgroundColor: "#f56a00" }, children: "K" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 251,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar, { style: { backgroundColor: "#87d068" }, src: PATH.AVATAR_PLACEHOLDER }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 252,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Avatar, { style: { backgroundColor: "#1677ff" }, children: "A" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 253,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 245,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 241,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 240,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 239,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 219,
        columnNumber: 7
      }, this)
    ];
  },
  Jumbotron: () => {
    let data = (0, import_react49.useLoaderData)(), fetcher = (0, import_react49.useFetcher)(), navigate = (0, import_react49.useNavigate)(), [searchBusy, setSearchBusy] = (0, import_react48.useState)(!1), typewriterWords = ["work done", "photographers", "videographer", "makeup artists", "stylist"];
    (0, import_react48.useEffect)(() => {
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
      navigate(routes_data_default.get("ServiceGroup", { id: type, subId: id }));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: " homepage-hero-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { align: "stretch", gutter: 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Box, { style: { display: "flex", justifyContent: "end", height: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "homepage-hero-search-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "homepage-hero-search-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { className: "title-wrapper", order: 1, children: [
          "Now it's easy",
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 301,
            columnNumber: 77
          }, this),
          "to get ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_simple_typewriter.Typewriter, { words: typewriterWords, loop: !0, cursor: !0, cursorColor: "red" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 301,
            columnNumber: 90
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 301,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 300,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 9 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Stack, { gap: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { fw: 500, c: "dimmed", children: "Get Started" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 305,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: { background: "white", padding: "6px 12px", borderRadius: "24px", boxShadow: "0 4px 4px #e1e1e1" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Input, { variant: "unstyled", placeholder: "Search", leftSection: searchBusy ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Loader, { size: "xs" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 307,
              columnNumber: 98
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconSearch, { size: 20 }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 307,
              columnNumber: 123
            }, this), onChange: search }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 307,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 306,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 304,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "hero-search-results-panel-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react48.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Skeleton_default, {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 311,
            columnNumber: 43
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Await, { resolve: fetcher.data, children: (response) => {
            var _a, _b;
            return (response == null ? void 0 : response.results) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "hero-search-results-panel", children: [
              (_a = response.results) == null ? void 0 : _a.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "result-row", onClick: (_) => gotoSearchItemPage(item.item.vendorType.keyName, item.item.id), children: [
                item.item.name,
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { c: "dimmed", fs: "italic", children: [
                  "in ",
                  item.item.vendorType.name
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 314,
                  columnNumber: 46
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 313,
                columnNumber: 137
              }, this)),
              !((_b = response.results) != null && _b.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "result-row", children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { c: "dimmed", fs: "italic", children: "Sorry, we couldn't find any results on that. Kindly narrow the search term." }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 315,
                  columnNumber: 95
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 315,
                columnNumber: 65
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 313,
              columnNumber: 61
            }, this);
          } }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 312,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 311,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 310,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 303,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 299,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 298,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 297,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 296,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 295,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("img", { className: "homepage-hero-img", src: "/assets/homepage-hero.jpg", width: "100%", style: { maxWidth: "665px" } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 327,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 325,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 294,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 293,
      columnNumber: 12
    }, this);
  },
  PopularServices: () => {
    let data = (0, import_react49.useLoaderData)(), [isMobile, setMobile] = (0, import_react48.useState)(!1), navigate = (0, import_react49.useNavigate)();
    (0, import_react48.useEffect)(() => {
      setMobile((window == null ? void 0 : window.innerWidth) < 600);
    }, []);
    function sliderCount() {
      return isMobile ? 2 : 4;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { justify: "space-between", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 2 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "home-section-card-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 4, children: "Popular Services" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 346,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { c: "dimmed", children: "Explore our in-demand services, loved by many." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 347,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 345,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 344,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react48.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 351,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Await, { resolve: data.popularServices, children: (resolve) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        import_pure_react_carousel3.CarouselProvider,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.Slider, { className: "slider-spacer", children: resolve.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.Slide, { className: "card-style-1", index: i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Link, { to: item.path, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Stack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Image, { className: "thumbnail", src: item.image || "" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 365,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "title-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { size: "sm", children: item.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 367,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 366,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 364,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconChevronRight, { className: "btn-wrapper" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 370,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 363,
              columnNumber: 17
            }, this) }, "s" + item.id, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 362,
              columnNumber: 75
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 362,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 373,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 373,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 374,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 374,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 353,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 352,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 351,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 350,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 343,
      columnNumber: 12
    }, this);
  },
  Collections: () => {
    let data = (0, import_react49.useLoaderData)(), [isMobile, setMobile] = (0, import_react48.useState)(!1);
    (0, import_react48.useEffect)(() => {
      setMobile((window == null ? void 0 : window.innerWidth) < 600);
    }, []);
    function sliderCount() {
      return isMobile ? 1 : 4;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: { paddingTop: "45px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "home-section-card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 3, className: "_text-center", children: "Hire the best professionals for any job" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 395,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 394,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 393,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 392,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react48.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 400,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Await, { resolve: data.collections, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        import_pure_react_carousel3.CarouselProvider,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.Slider, { className: "slider-spacer", children: response.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.Slide, { className: "card-style-2", index: i, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "title-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 5, children: item.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 415,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 414,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "label-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { size: "sm", children: item.label }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 418,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 417,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "btn-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Button, { radius: "xl", children: "Explore" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 422,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 421,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 420,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 413,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 412,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "card-thumb-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "card-thumb-cover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Image, { src: item.image || "", height: "100%", width: "100%", className: "thumb" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 431,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 430,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 429,
                columnNumber: 17
              }, this)
            ] }, item.id, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 411,
              columnNumber: 76
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 411,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 436,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 436,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 437,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 437,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 402,
          columnNumber: 26
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 401,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 400,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 399,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 391,
      columnNumber: 12
    }, this);
  },
  Services: () => {
    let loaderData = (0, import_react49.useLoaderData)(), [modalData, setIsModalOpen] = (0, import_react48.useState)(null), [isMobile, setMobile] = (0, import_react48.useState)(!1);
    (0, import_react48.useEffect)(() => {
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
    let CatIconList = [
      {
        name: "video",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconVideo, { size: 30 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 466,
          columnNumber: 13
        }, this)
      },
      {
        name: "photo",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconCamera, { size: 30 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 470,
          columnNumber: 13
        }, this)
      },
      {
        name: "makeup",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconBrush, { size: 30 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 474,
          columnNumber: 13
        }, this)
      },
      {
        name: "design",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react24.IconHanger, { size: 30 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 478,
          columnNumber: 13
        }, this)
      }
    ];
    return [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react48.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 482,
        columnNumber: 27
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Await, { resolve: loaderData.categories, children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        import_pure_react_carousel3.CarouselProvider,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.Slider, { className: "carousel-slider", children: data.map((item, i) => {
              var _a;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.Slide, { className: "item-wrapper", index: i, onClick: () => showModal(item), children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "item-spacer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Stack, { children: [
                (_a = CatIconList.find((x) => item.title.toLowerCase().includes(x.name))) == null ? void 0 : _a.icon,
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 5, style: { color: "white" }, children: item.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 498,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 496,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 495,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 494,
                columnNumber: 15
              }, this) }, "s" + item.id, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 493,
                columnNumber: 72
              }, this);
            }) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 493,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 504,
              columnNumber: 47
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 504,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_pure_react_carousel3.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react23.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 505,
              columnNumber: 47
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 505,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 484,
          columnNumber: 20
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 483,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 482,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Modal, { title: "Browse " + (modalData == null ? void 0 : modalData.title), opened: !!modalData, onClose: handleCancel, centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { gutter: 20, children: [
        modalData == null ? void 0 : modalData.serviceGroup.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
          !item.isCollection && (index - 1 < 0 || item.isCollection !== modalData.serviceGroup[index - 1].isCollection) ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 5, children: "Other services" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 513,
            columnNumber: 187
          }, this) }, item.id + "col-" + index, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 513,
            columnNumber: 126
          }, this) : "",
          (item.isCollection, /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 6, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: { position: "relative", borderRadius: "10px", overflow: "hidden" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Image, { src: item.imageName ? PATH.RESOURCE_URL + item.imageName : FALLBACK_IMG, style: { borderRadius: "10px" } }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 527,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: {
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
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 5, style: { color: "white", wordBreak: "normal" }, children: item.name }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 531,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 528,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 526,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 525,
            columnNumber: 15
          }, this) }, item.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 524,
            columnNumber: 27
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 511,
          columnNumber: 57
        }, this)),
        !(modalData != null && modalData.serviceGroup.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: 12, children: "Sorry, no services found under this category." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 536,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 510,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 509,
        columnNumber: 7
      }, this)
    ];
  },
  TopVendorsList: () => {
    let data = (0, import_react49.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react48.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 542,
      columnNumber: 32
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Await, { resolve: data.topVendors, children: (res) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 3, children: "Top service providers" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 546,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 545,
        columnNumber: 11
      }, this),
      res.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "home-section-card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Title, { order: 5, children: category.name }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 550,
          columnNumber: 17
        }, this),
        category.vendor.map((vendor, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid, { gutter: 20, align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { children: i + 1 }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 552,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_core31.Avatar,
            {
              src: vendor.profileImageName ? PATH.RESOURCE_URL + vendor.profileImageName : PATH.AVATAR_PLACEHOLDER
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 554,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 553,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Grid.Col, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "nowrap", style: { maxWidth: "80px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Link, { to: routes_data_default.get("VendorProfile", { id: vendor.username }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { fw: 500, children: vendor.username }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 559,
            columnNumber: 138
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 559,
            columnNumber: 74
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 559,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 558,
            columnNumber: 19
          }, this)
        ] }, vendor.username, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 551,
          columnNumber: 53
        }, this)),
        !category.vendor.length && "Sorry, no data found.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core31.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react49.Link, { to: routes_data_default.get("Services", { id: category.keyName }), children: "View all" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 562,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 562,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 549,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 548,
        columnNumber: 13
      }, this) }, "ce" + category.id, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 547,
        columnNumber: 34
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 544,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 543,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 542,
      columnNumber: 12
    }, this);
  }
}, index_default = Home.Index;

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => UserLayout,
  loader: () => loader24
});
var import_node24 = require("@remix-run/node"), import_react50 = require("@remix-run/react");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
async function loader24(args) {
  return (await getSession(
    args.request.headers.get("Cookie")
  )).get(USER_SESSION_KEY) ? !0 : (0, import_node24.redirect)("/");
}
function UserLayout() {
  let data = (0, import_react50.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react50.Outlet, {}, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-PZVIPVNM.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-X5ADFWA7.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-F3NDZE2Q.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DJWCARS7.js", imports: ["/build/_shared/chunk-GIJQAKHY.js", "/build/_shared/chunk-U3MUJB3C.js", "/build/_shared/chunk-NM3WSOOS.js", "/build/_shared/chunk-BJ3PDQNI.js", "/build/_shared/chunk-5HWTB4UN.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_api.login": { id: "routes/_api.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.login-EGZYGHF7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_api.search": { id: "routes/_api.search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.search-DIFQTRHV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_api.verify-otp": { id: "routes/_api.verify-otp", parentId: "root", path: "verify-otp", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.verify-otp-POBOCWQC.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-WMG5LUSL.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.order.checkout": { id: "routes/_auth.order.checkout", parentId: "routes/_auth", path: "order/checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.order.checkout-I2TT65D2.js", imports: ["/build/_shared/chunk-5HWTB4UN.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.order.submit": { id: "routes/_auth.order.submit", parentId: "routes/_auth", path: "order/submit", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.order.submit-WUSQO2HK.js", imports: ["/build/_shared/chunk-ADCLV4R5.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.home": { id: "routes/_auth.user.home", parentId: "routes/_auth", path: "user/home", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user.home-NETNVD23.js", imports: ["/build/_shared/chunk-V457K2MQ.js", "/build/_shared/chunk-PR6ITKBN.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-ADCLV4R5.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.order.$id": { id: "routes/_auth.user.order.$id", parentId: "routes/_auth", path: "user/order/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user.order.$id-QVBKZ2AO.js", imports: ["/build/_shared/chunk-DRZA6AH3.js", "/build/_shared/chunk-V457K2MQ.js", "/build/_shared/chunk-PR6ITKBN.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-U3MUJB3C.js", "/build/_shared/chunk-NM3WSOOS.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-ADCLV4R5.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-SK44NS3A.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-PX6IH325.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-ADCLV4R5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.add.$vendorServiceGroupId": { id: "routes/cart.add.$vendorServiceGroupId", parentId: "root", path: "cart/add/:vendorServiceGroupId", index: void 0, caseSensitive: void 0, module: "/build/routes/cart.add.$vendorServiceGroupId-ZI5UQZWF.js", imports: ["/build/_shared/chunk-PX6IH325.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-AQ7DUK66.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.add._index": { id: "routes/cart.add._index", parentId: "root", path: "cart/add", index: !0, caseSensitive: void 0, module: "/build/routes/cart.add._index-IBHGA5VQ.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.checkout._index": { id: "routes/cart.checkout._index", parentId: "root", path: "cart/checkout", index: !0, caseSensitive: void 0, module: "/build/routes/cart.checkout._index-GKC7ZKEZ.js", imports: ["/build/_shared/chunk-V457K2MQ.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.checkout.payment._index": { id: "routes/cart.checkout.payment._index", parentId: "root", path: "cart/checkout/payment", index: !0, caseSensitive: void 0, module: "/build/routes/cart.checkout.payment._index-WMUWI7BG.js", imports: ["/build/_shared/chunk-ADCLV4R5.js", "/build/_shared/chunk-AQ7DUK66.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/collections.$id.$highlight": { id: "routes/collections.$id.$highlight", parentId: "root", path: "collections/:id/:highlight", index: void 0, caseSensitive: void 0, module: "/build/routes/collections.$id.$highlight-ESLAJMVH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/collections.$id._index": { id: "routes/collections.$id._index", parentId: "root", path: "collections/:id", index: !0, caseSensitive: void 0, module: "/build/routes/collections.$id._index-XIX2XL5W.js", imports: ["/build/_shared/chunk-2Q7K6WD5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login.redirect": { id: "routes/login.redirect", parentId: "root", path: "login/redirect", index: void 0, caseSensitive: void 0, module: "/build/routes/login.redirect-RG3ROWFZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/order.success": { id: "routes/order.success", parentId: "root", path: "order/success", index: void 0, caseSensitive: void 0, module: "/build/routes/order.success-GH3EZPPI.js", imports: ["/build/_shared/chunk-DRZA6AH3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup": { id: "routes/partner.signup", parentId: "root", path: "partner/signup", index: void 0, caseSensitive: void 0, module: "/build/routes/partner.signup-USHIYGCD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/partner.signup._index": { id: "routes/partner.signup._index", parentId: "routes/partner.signup", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup._index-QHVUGFNY.js", imports: ["/build/_shared/chunk-NM3WSOOS.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup.onboard.$id._index": { id: "routes/partner.signup.onboard.$id._index", parentId: "routes/partner.signup", path: "onboard/:id", index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard.$id._index-6YU46RVG.js", imports: ["/build/_shared/chunk-PR6ITKBN.js", "/build/_shared/chunk-NM3WSOOS.js", "/build/_shared/chunk-ANHUXY72.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-ADCLV4R5.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/partner.signup.onboard.$id.success": { id: "routes/partner.signup.onboard.$id.success", parentId: "routes/partner.signup", path: "onboard/:id/success", index: void 0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard.$id.success-GGWSQXDL.js", imports: ["/build/_shared/chunk-NM3WSOOS.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-5HWTB4UN.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup.onboard._index": { id: "routes/partner.signup.onboard._index", parentId: "routes/partner.signup", path: "onboard", index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard._index-TKQ65AXJ.js", imports: ["/build/_shared/chunk-ANHUXY72.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user": { id: "routes/profile.$user", parentId: "root", path: "profile/:user", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user-ORVCA576.js", imports: ["/build/_shared/chunk-AQ7DUK66.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/profile.$user._index": { id: "routes/profile.$user._index", parentId: "routes/profile.$user", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/profile.$user._index-FRHC6GJG.js", imports: ["/build/_shared/chunk-55OPHICG.js", "/build/_shared/chunk-WIVSVGKO.js", "/build/_shared/chunk-PX6IH325.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-BJ3PDQNI.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user.portfolio": { id: "routes/profile.$user.portfolio", parentId: "routes/profile.$user", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user.portfolio-5CHFSGII.js", imports: ["/build/_shared/chunk-55OPHICG.js", "/build/_shared/chunk-WIVSVGKO.js", "/build/_shared/chunk-2Q7K6WD5.js", "/build/_shared/chunk-KHKSWZOL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services.$id.$subId": { id: "routes/services.$id.$subId", parentId: "root", path: "services/:id/:subId", index: void 0, caseSensitive: void 0, module: "/build/routes/services.$id.$subId-3SKYLG52.js", imports: ["/build/_shared/chunk-CMKM5MEL.js", "/build/_shared/chunk-WIVSVGKO.js", "/build/_shared/chunk-2Q7K6WD5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services.$id._index": { id: "routes/services.$id._index", parentId: "root", path: "services/:id", index: !0, caseSensitive: void 0, module: "/build/routes/services.$id._index-LRRVRW64.js", imports: ["/build/_shared/chunk-CMKM5MEL.js", "/build/_shared/chunk-WIVSVGKO.js", "/build/_shared/chunk-2Q7K6WD5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "96f0d2af", hmr: { runtime: "/build/_shared\\chunk-F3NDZE2Q.js", timestamp: 1712239712979 }, url: "/build/manifest-96F0D2AF.js" };

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
    parentId: "routes/partner.signup",
    path: "onboard/:id/success",
    index: void 0,
    caseSensitive: void 0,
    module: partner_signup_onboard_id_success_exports
  },
  "routes/partner.signup.onboard.$id._index": {
    id: "routes/partner.signup.onboard.$id._index",
    parentId: "routes/partner.signup",
    path: "onboard/:id",
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
    parentId: "routes/partner.signup",
    path: "onboard",
    index: !0,
    caseSensitive: void 0,
    module: partner_signup_onboard_index_exports
  },
  "routes/cart.checkout.payment._index": {
    id: "routes/cart.checkout.payment._index",
    parentId: "root",
    path: "cart/checkout/payment",
    index: !0,
    caseSensitive: void 0,
    module: cart_checkout_payment_index_exports
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
    parentId: "routes/partner.signup",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: partner_signup_index_exports
  },
  "routes/cart.checkout._index": {
    id: "routes/cart.checkout._index",
    parentId: "root",
    path: "cart/checkout",
    index: !0,
    caseSensitive: void 0,
    module: cart_checkout_index_exports
  },
  "routes/profile.$user._index": {
    id: "routes/profile.$user._index",
    parentId: "routes/profile.$user",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: profile_user_index_exports
  },
  "routes/_auth.order.checkout": {
    id: "routes/_auth.order.checkout",
    parentId: "routes/_auth",
    path: "order/checkout",
    index: void 0,
    caseSensitive: void 0,
    module: auth_order_checkout_exports
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
  "routes/partner.signup": {
    id: "routes/partner.signup",
    parentId: "root",
    path: "partner/signup",
    index: void 0,
    caseSensitive: void 0,
    module: partner_signup_exports
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
