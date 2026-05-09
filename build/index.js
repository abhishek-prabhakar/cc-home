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

// css-bundle-update-plugin-ns:/Users/abhishekprabhakar/Documents/celebria-collection2/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/abhishekprabhakar/Documents/celebria-collection2/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2 = "/build/css-bundle-ZH3TOQVX.css";
    exports.cssBundleHref = cssBundleHref2;
  }
});

// empty-module:~/components/ChatBox.client
var require_ChatBox = __commonJS({
  "empty-module:~/components/ChatBox.client"(exports, module2) {
    module2.exports = {};
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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 2e4;
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
  HydrateFallback: () => HydrateFallback,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_dist()), import_node3 = require("@remix-run/node"), import_react14 = require("@remix-run/react");

// app/transitions.css
var transitions_default = "/build/_assets/transitions-CZGJOAVG.css";

// app/root.css
var root_default = "/build/_assets/root-FUSVLK5X.css";

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
  var _a;
  let data = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { background: "#fbfbfb", marginTop: "100px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Container, { size: "lg", pt: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/assets/brand-logo.png", width: "124px" }, void 0, !1, {
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
      var _a2;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { span: { base: 6, md: 2 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fw: 500, pb: "sm", children: item.name }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 22,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Stack, { children: (_a2 = item.children[0]) == null ? void 0 : _a2.list.map((child, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: child.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { size: "sm", children: child.name }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 24,
          columnNumber: 116
        }, this) }, child.id, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 24,
          columnNumber: 79
        }, this)) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 23,
          columnNumber: 33
        }, this)
      ] }, item.id, !0, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "https://www.instagram.com/celebriacollective/", target: "_BLANK", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.ThemeIcon, { variant: "light", radius: "xl", size: "lg", color: "gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react.IconBrandInstagram, {}, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "https://www.youtube.com/@CelebriaCollective-cc/videos", target: "_BLANK", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.ThemeIcon, { variant: "light", radius: "xl", size: "lg", color: "gray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react2.IconBrandYoutube, {}, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "md" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Divider, {}, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { ta: "center", children: [
      "\xA9 Celebria Collective ",
      (_a = /* @__PURE__ */ new Date()) == null ? void 0 : _a.getFullYear(),
      ". All Rights Reserved."
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "md" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Group, { justify: "center", gap: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "about/company", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", ta: "center", children: "About Us" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 53,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "about/contact-us", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", ta: "center", children: "Contact Us" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 54,
        columnNumber: 45
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "about/privacy-policy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", ta: "center", children: "Privacy Policy" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 55,
        columnNumber: 49
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "about/terms", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", ta: "center", children: "Terms And Conditions" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 56,
        columnNumber: 40
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "about/refund-policy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", ta: "center", children: "Cancellation & Refund Policy" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 57,
        columnNumber: 48
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "md" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { c: "dimmed", ta: "center", children: [
      "Celebria Collective Private Limited,",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 60,
        columnNumber: 78
      }, this),
      "02 - VASANTHA TOWERS, COCONUT garden layout,",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 61,
        columnNumber: 56
      }, this),
      "Krishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036"
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 62,
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

// app/components/Header.tsx
var import_react10 = require("@remix-run/react"), import_react11 = require("react");

// app/components/NavigationMenu.tsx
var import_react8 = require("react");

// app/data/locations.data.ts
var locationMap = {
  ["BLR" /* BLR */]: "Bangalore",
  ["BOM" /* BOM */]: "Mumbai",
  ["DEL" /* DEL */]: "Delhi"
}, locationList = [
  {
    label: "Bangalore",
    key: "BLR" /* BLR */,
    available: !0
  },
  {
    label: "Mumbai",
    key: "BOM" /* BOM */,
    available: !1
  },
  {
    label: "Delhi",
    key: "DEL" /* DEL */,
    available: !1
  }
];

// app/components/UserLogin.tsx
var import_core3 = require("@mantine/core"), import_react4 = require("@remix-run/react"), import_react5 = require("react"), import_react_hook_form = require("react-hook-form");

// app/service/user.service.ts
var import_client2 = require("@prisma/client"), import_axios = __toESM(require("axios"));

// app/utils/database.ts
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/utils/uuid.generator.ts
var import_uuid = require("uuid");
function generateUuid() {
  return (0, import_uuid.v4)();
}

// app/service/user.service.ts
var UserService = {
  Login: (data) => Request.post("/login", { phone: data.phone }),
  VerifyOtp: (data) => Request.post("/verify-otp", { phone: data.phone, otp: data.otp }),
  Create: async (username, source = import_client2.UserSource.ORGANIC) => await db.user.create({
    data: {
      id: generateUuid(),
      username,
      source
    }
  })
}, Request = {
  post: (url, params) => (0, import_axios.default)({
    method: "post",
    url,
    data: params,
    headers: { "Content-Type": "multipart/form-data" }
  })
}, user_service_default = UserService;

// app/components/UserLogin.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), UserLogin = {
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      inlineMode && showVerifyUserDialog ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { onSubmit: handleSubmit(startUserLogin), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Title, { order: 5, children: title }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_hook_form.Controller, { name: "phone", control, render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Input, { leftSection: "+91", placeholder: "Enter your phone number.", minLength: 10, maxLength: 10, required: !0, ...field }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 39,
          columnNumber: 83
        }, this) }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Button, { variant: "filled", type: "submit", loading: isBusy, children: "Login" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserLogin.VerifyOtp, { redirectUrl, username: getUsername, modalOpen: showVerifyUserDialog, onClose: () => toggleVerifyUserDialog(!1), inlineMode: inlineMode || !1 }, void 0, !1, {
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
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { method: "post", action: "/verify-otp", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Stack, { gap: "md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Input.Wrapper, { label: "Enter OTP", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.PinInput, { name: "otp", error: invalidInput, onChange: () => setInvalidInput(!1) }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "phone", value: username || 0 }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 62,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "redirectUrl", value: redirectUrl || "" }, void 0, !1, {
          fileName: "app/components/UserLogin.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Button, { type: "submit", variant: "filled", loading: ["submitting", "loading"].includes(fetcher.state), children: "Continue" }, void 0, !1, {
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
    return inlineMode && modalOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FormBody, {}, void 0, !1, {
      fileName: "app/components/UserLogin.tsx",
      lineNumber: 69,
      columnNumber: 42
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Modal, { closeOnClickOutside: !1, title: "Verify OTP", opened: modalOpen, onClose: () => onClose(), centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FormBody, {}, void 0, !1, {
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
var import_react9 = require("@remix-run/react");

// app/routes.data.ts
var RoutesList = {
  UserLogin: "/user/login?redirectUrl=:redirectUrl",
  UserFavorites: "/user/wishlist",
  UserInbox: "/user/inbox",
  UserInboxGroup: "/user/inbox/:id",
  VendorProfile: "/profile/:id",
  VendorProfileWithService: "/profile/:id?service=:sGrpId",
  Collections: "/collections/:id",
  CollectionsByVendor: "/collections/:id/:vendorType",
  Services: "/services/:id",
  ServiceGroup: "/services/:id/:subId",
  Cart: "/cart",
  CartItem: "/cart/add/:id",
  CartAddEdit: "/cart/add/:venderServiceGroupId",
  VendorSignupForm: "/partner/signup/onboard/:id",
  CheckoutPayment: "/cart/checkout/payment",
  PaymentGateway: "/order/payment?id=:id",
  UserManageOrder: "/user/order/:id",
  OrderInvoice: "/user/order/:id/invoice",
  VendorManageOrder: "/vendor/manage/:id",
  VendorPackage: "/cart/package/:username/:id",
  MakeYourPackage: "/cart/package/:vendorGroupId",
  Blog: "/blog"
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
var import_core6 = require("@mantine/core"), import_icons_react4 = require("@tabler/icons-react");

// app/components/ComingSoonModal.tsx
var import_core4 = require("@mantine/core"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ComingSoonModal() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core4.Grid, { align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core4.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core4.Image, { src: "/assets/area-coming-soon.png" }, void 0, !1, {
      fileName: "app/components/ComingSoonModal.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ComingSoonModal.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core4.Grid.Col, { span: { base: 12, md: 6 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core4.Title, { order: 5, children: "Coming soon" }, void 0, !1, {
        fileName: "app/components/ComingSoonModal.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core4.Text, { children: "Sorry, we are currently not serviceable in this area" }, void 0, !1, {
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

// app/components/SearchInput.tsx
var import_core5 = require("@mantine/core"), import_react6 = require("react");
var import_react7 = require("@remix-run/react"), import_hooks = require("@mantine/hooks");
var import_icons_react3 = require("@tabler/icons-react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function SearchInput() {
  let fetcher = (0, import_react7.useFetcher)(), [searchBusy, setSearchBusy] = (0, import_react6.useState)(!1), [searchValue, setSearchValue] = (0, import_react6.useState)(""), [debounced] = (0, import_hooks.useDebouncedValue)(searchValue, 200);
  (0, import_react6.useEffect)(() => {
    setSearchBusy(fetcher.state === "loading");
  }, [fetcher.state]), (0, import_react6.useEffect)(() => {
    debounced && search(debounced);
  }, [debounced]);
  function search(q) {
    q && (setSearchBusy(!0), fetcher.submit({
      q
    }, {
      method: "get",
      action: "/search"
    }));
  }
  function clearSearch() {
    setSearchValue("");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core5.Stack, { gap: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core5.Text, { fw: 500, c: "dimmed", children: "Get Started" }, void 0, !1, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 47,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { background: "white", padding: "6px 12px", borderRadius: "24px", boxShadow: "0 4px 4px #e1e1e1" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core5.Input, { value: searchValue, variant: "unstyled", placeholder: "Search", leftSection: searchBusy ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core5.Loader, { size: "xs" }, void 0, !1, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 49,
        columnNumber: 118
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons_react3.IconSearch, { size: 20 }, void 0, !1, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 49,
        columnNumber: 143
      }, this), rightSection: searchValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core5.CloseButton, { onClick: clearSearch }, void 0, !1, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 49,
        columnNumber: 196
      }, this) : "", rightSectionPointerEvents: "all", onChange: (v) => setSearchValue(v.target.value) }, void 0, !1, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 49,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 48,
        columnNumber: 23
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "hero-search-results-panel-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 53,
      columnNumber: 43
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Await, { resolve: fetcher.data, children: (response) => searchValue && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SearchResultList, { services: response == null ? void 0 : response.results, vendors: response == null ? void 0 : response.vendors }, void 0, !1, {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 55,
      columnNumber: 54
    }, this) }, void 0, !1, {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 54,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 53,
      columnNumber: 23
    }, this) }, void 0, !1, {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 52,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SearchInput.tsx",
    lineNumber: 45,
    columnNumber: 12
  }, this);
}
function SearchResultList({ services, vendors }) {
  let navigate = (0, import_react7.useNavigate)();
  function gotoSearchItemPage(type, id) {
    navigate(routes_data_default.get("ServiceGroup", { id: type, subId: id }));
  }
  function gotoVendorProfile(id) {
    navigate(routes_data_default.get("VendorProfile", { id }));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "hero-search-results-panel", children: [
    vendors == null ? void 0 : vendors.map((item) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "result-row", onClick: (_) => gotoVendorProfile(item.item.id), children: [
        item.item.name,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core5.Text, { c: "dimmed", fs: "italic", children: [
          "in ",
          (_a = item.item.vendorType) == null ? void 0 : _a.name
        ] }, void 0, !0, {
          fileName: "app/components/SearchInput.tsx",
          lineNumber: 80,
          columnNumber: 28
        }, this)
      ] }, item.item.id, !0, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 79,
        columnNumber: 31
      }, this);
    }),
    services == null ? void 0 : services.map((item) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "result-row", onClick: (_) => {
        var _a2;
        return gotoSearchItemPage(((_a2 = item.item.vendorType) == null ? void 0 : _a2.keyName) || "", item.item.id);
      }, children: [
        item.item.name,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core5.Text, { c: "dimmed", fs: "italic", children: [
          "in ",
          (_a = item.item.vendorType) == null ? void 0 : _a.name
        ] }, void 0, !0, {
          fileName: "app/components/SearchInput.tsx",
          lineNumber: 83,
          columnNumber: 28
        }, this)
      ] }, item.item.id, !0, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 82,
        columnNumber: 32
      }, this);
    }),
    !(services != null && services.length) && !(vendors != null && vendors.length) ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "result-row", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core5.Text, { c: "dimmed", fs: "italic", children: "Sorry, we couldn't find any results on that. Kindly narrow the search term." }, void 0, !1, {
        fileName: "app/components/SearchInput.tsx",
        lineNumber: 85,
        columnNumber: 77
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SearchInput.tsx",
      lineNumber: 85,
      columnNumber: 47
    }, this) : ""
  ] }, void 0, !0, {
    fileName: "app/components/SearchInput.tsx",
    lineNumber: 78,
    columnNumber: 12
  }, this);
}
var SearchInput_default = SearchInput;

// app/components/NavigationMenu.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), menuArtisantStyle = {
  borderRadius: "3px",
  padding: "20px 20px",
  background: "url(/assets/user-menu-bg.jpg) top",
  backgroundSize: "cover"
};
function DropdownContent({ navitem }) {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Stack, { p: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Text, { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: routes_data_default.get("Services", { id: navitem.id }), children: [
        "Browse all ",
        navitem.name
      ] }, void 0, !0, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    (_a = navitem.children) == null ? void 0 : _a.map((menuItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Stack, { gap: "xs", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Text, { c: "dimmed", children: menuItem.name }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      menuItem.list.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Text, { size: "sm", c: "black", children: item.name }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this) }, item.id, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this)),
      !menuItem.list.length && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Text, { c: "dimmed", children: "Sorry, no results found." }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, menuItem.name, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/NavigationMenu.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var AppNavigation = {
  MainMenu: () => {
    let data = (0, import_react9.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 84,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Await, { resolve: data.pages, children: (navList) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Flex, { justify: "center", gap: 0, py: "md", children: [
      navList == null ? void 0 : navList.map((item) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Box, { style: { cursor: "pointer" }, children: (_a = item.children) != null && _a.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Menu, { trigger: "click-hover", shadow: "md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_core6.NavLink,
            {
              fw: "bold",
              c: "dark",
              label: item.children[0].name,
              rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react4.IconChevronDown, { size: 12 }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 97,
                columnNumber: 41
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 93,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 92,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Menu.Dropdown, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownContent, { navitem: item }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 101,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 100,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: routes_data_default.get("Services", { id: item.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.NavLink, { fw: "bold", c: "dark", label: "Blog" }, void 0, !1, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 106,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 105,
          columnNumber: 21
        }, this) }, "menu-" + item.id, !1, {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: routes_data_default.get("Blog"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.NavLink, { fw: "bold", c: "dark", label: "Blog" }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 111,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this);
  },
  Drawer: ({ user }) => {
    let data = (0, import_react9.useLoaderData)(), location2 = (0, import_react9.useLocation)(), [openDrawer, setDrawerState] = (0, import_react8.useState)(!1), [currentLocation, setCurrentLocation] = (0, import_react8.useState)("Bangalore"), [showComingSoonDialog, setComingSoonDialog] = (0, import_react8.useState)(!1);
    (0, import_react8.useEffect)(() => {
      toggleDrawer(!1);
    }, [location2.pathname]);
    function toggleDrawer(show = !openDrawer) {
      setDrawerState(show);
    }
    function handleLocationMenuClick(key) {
      let item = locationList.find((x) => x.key === key);
      item != null && item.available ? setCurrentLocation(item.label) : setComingSoonDialog(!0);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react4.IconMenu, { onClick: () => toggleDrawer() }, void 0, !1, {
        fileName: "app/components/NavigationMenu.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core6.Drawer,
        {
          position: "left",
          w: 300,
          title: "",
          onClose: () => toggleDrawer(),
          opened: openDrawer,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SearchInput_default, {}, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 154,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Space, { h: "xl" }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 155,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Title, { order: 5, children: "Browse" }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 156,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 157,
              columnNumber: 31
            }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Await, { resolve: data.pages, children: (navList) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Accordion, { children: navList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Accordion.Item, { value: item.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Accordion.Control, { children: item.name }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 163,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Accordion.Panel, { children: item.children.map((child, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Stack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Title, { order: 5, children: child.name }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 167,
                  columnNumber: 29
                }, this),
                [
                  {
                    id: item.id,
                    path: routes_data_default.get("Services", { id: item.id }),
                    name: "Browse all "
                  }
                ].concat(child.list).map((menuItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  import_react9.Link,
                  {
                    to: menuItem.path,
                    onClick: () => toggleDrawer(!1),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Text, { children: menuItem.name }, void 0, !1, {
                      fileName: "app/components/NavigationMenu.tsx",
                      lineNumber: 182,
                      columnNumber: 35
                    }, this)
                  },
                  menuItem.id,
                  !1,
                  {
                    fileName: "app/components/NavigationMenu.tsx",
                    lineNumber: 177,
                    columnNumber: 33
                  },
                  this
                ))
              ] }, "child" + i, !0, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 166,
                columnNumber: 27
              }, this)) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 164,
                columnNumber: 23
              }, this)
            ] }, item.id, !0, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 162,
              columnNumber: 21
            }, this)) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 160,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 158,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 157,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: routes_data_default.get("Blog"), onClick: () => toggleDrawer(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.NavLink, { c: "dark", label: "Blog", pl: "md" }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 195,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 194,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Space, { h: "xl" }, void 0, !1, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 197,
              columnNumber: 11
            }, this),
            user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: "/user/home", onClick: () => toggleDrawer(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Button, { variant: "white", fullWidth: !0, children: "My Bookings" }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 201,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 200,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_react9.Link,
                {
                  to: routes_data_default.get("UserInbox"),
                  onClick: () => toggleDrawer(!1),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Button, { variant: "white", fullWidth: !0, children: "Messages" }, void 0, !1, {
                    fileName: "app/components/NavigationMenu.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 205,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_react9.Link,
                {
                  to: routes_data_default.get("UserFavorites"),
                  onClick: () => toggleDrawer(!1),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Button, { variant: "white", fullWidth: !0, children: "Favorites" }, void 0, !1, {
                    fileName: "app/components/NavigationMenu.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 213,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: "/logout", onClick: () => toggleDrawer(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Button, { size: "sm", variant: "subtle", children: "Logout" }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 222,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 221,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 199,
              columnNumber: 13
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              UserLogin_default,
              {
                onSuccess: () => toggleDrawer(!1),
                inlineMode: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 228,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Stack, { gap: "lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: menuArtisantStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Stack, { style: { padding: 8 }, gap: "md", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Title, { order: 3, children: "Artisan?" }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 236,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: "/partner/signup", onClick: () => toggleDrawer(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Button, { children: "Signup" }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 238,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 237,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 235,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 234,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Accordion, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Accordion.Item, { value: "location", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Accordion.Control, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react4.IconWorld, {}, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 244,
                  columnNumber: 42
                }, this), children: "Location" }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 244,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core6.Stack, { children: locationList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  import_core6.Button,
                  {
                    ta: "left",
                    onClick: () => handleLocationMenuClick(item.key),
                    size: "sm",
                    variant: "subtle",
                    children: item.label
                  },
                  item.key,
                  !1,
                  {
                    fileName: "app/components/NavigationMenu.tsx",
                    lineNumber: 250,
                    columnNumber: 23
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 248,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/components/NavigationMenu.tsx",
                  lineNumber: 247,
                  columnNumber: 17
                }, this)
              ] }, "location", !0, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 243,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/NavigationMenu.tsx",
                lineNumber: 242,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/NavigationMenu.tsx",
              lineNumber: 233,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 147,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core6.Modal,
        {
          opened: showComingSoonDialog,
          onClose: () => setComingSoonDialog(!1),
          title: "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ComingSoonModal_default, {}, void 0, !1, {
            fileName: "app/components/NavigationMenu.tsx",
            lineNumber: 271,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/NavigationMenu.tsx",
          lineNumber: 266,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NavigationMenu.tsx",
      lineNumber: 145,
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
    id: null,
    name: null
  },
  reducers: {
    setUser: (state, action22) => {
      var _a, _b;
      state.id = (_a = action22.payload) == null ? void 0 : _a.id, state.name = (_b = action22.payload) == null ? void 0 : _b.name;
    },
    clearUser: (state) => {
      state.id = null;
    }
  }
}), { setUser, clearUser } = userStore.actions, getUser = (state) => state.user, user_store_default = userStore.reducer;

// app/components/Header.tsx
var import_core7 = require("@mantine/core"), import_icons_react5 = require("@tabler/icons-react"), import_hooks2 = require("@mantine/hooks");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), logoStyle = { fontSize: "18px", textTransform: "uppercase", color: "black" }, userMenuStyle = { width: "300px", background: "white", borderRadius: "10px", boxShadow: "0 0 5px #e1e1e1", overflow: "hidden" }, menuArtisantStyle2 = {
  padding: "20px 30px",
  background: "url(/assets/user-menu-bg.jpg) top",
  backgroundSize: "cover"
};
function Header({ user, cartCount }) {
  let location2 = (0, import_react10.useLocation)(), [currentLocation, setCurrentLocation] = (0, import_react11.useState)("Bangalore"), [showComingSoonDialog, setComingSoonDialog] = (0, import_react11.useState)(!1), dispatch = (0, import_react_redux.useDispatch)(), [opened, { close, open }] = (0, import_hooks2.useDisclosure)(!1);
  (0, import_react11.useEffect)(() => {
    dispatch(setUser(user));
  }, [user]);
  function handleLocationMenuClick(key) {
    let item = locationList.find((x) => x.key === key);
    item != null && item.available ? setCurrentLocation(item.label) : setComingSoonDialog(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Grid, { justify: "space-between", align: "center", gutter: 0, py: 5, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Grid.Col, { span: { base: "content", md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Group, { gap: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Box, { hiddenFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NavigationMenu_default.Drawer, { user }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 49,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 48,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header-brand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: "/", style: logoStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "/assets/brand-logo.png", width: "124px" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 52,
          columnNumber: 64
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 52,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Box, { visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Flex, { className: "cursor-pointer", gap: "sm", align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_icons_react5.IconWorld, { size: 16 }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 58,
              columnNumber: 45
            }, this),
            currentLocation
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 57,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 56,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Menu.Dropdown, { children: locationList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Menu.Item, { onClick: () => handleLocationMenuClick(item.key), children: item.label }, item.key, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 63,
            columnNumber: 67
          }, this)) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 62,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 55,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 54,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 47,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Grid.Col, { span: "auto", visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NavigationMenu_default.MainMenu, {}, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 70,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Grid.Col, { span: { base: "content", md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Flex, { gap: 20, justify: "end", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: routes_data_default.get("Cart"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Indicator, { disabled: !cartCount, inline: !0, processing: !0, color: "red", size: 12, label: cartCount, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.ActionIcon, { variant: "subtle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_icons_react5.IconShoppingCart, {}, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 77,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 76,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 75,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 74,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Box, { visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Popover, { shadow: "md", position: "bottom", trapFocus: !0, withArrow: !0, opened, onChange: (v) => v ? null : close(), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Popover.Target, { children: user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: "/user/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Avatar, { onMouseEnter: open, radius: "xl" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 85,
              columnNumber: 81
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 85,
              columnNumber: 57
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Button, { onMouseEnter: open, radius: "xl", children: "My Account" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 85,
              columnNumber: 133
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 84,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Popover.Dropdown, { p: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: userMenuStyle, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { padding: "12px" }, children: user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Group, { align: "start", justify: "space-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Stack, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Title, { order: 5, children: "Hey!" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 94,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: "/user/home", children: "My Bookings" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 95,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: routes_data_default.get("UserInbox"), children: "Messages" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 96,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: routes_data_default.get("UserFavorites"), children: "Favorites" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 97,
                    columnNumber: 69
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 93,
                  columnNumber: 65
                }, this) }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 92,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Button, { size: "sm", variant: "subtle", children: "Logout" }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 101,
                  columnNumber: 84
                }, this) }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 101,
                  columnNumber: 65
                }, this) }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 100,
                  columnNumber: 61
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Header.tsx",
                lineNumber: 91,
                columnNumber: 57
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(UserLogin_default, { inlineMode: !0, redirectUrl: location2.pathname }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 104,
                columnNumber: 59
              }, this) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 89,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: menuArtisantStyle2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Stack, { style: { padding: 8 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Title, { order: 3, children: "Artisan?" }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 108,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: "/partner/signup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Button, { radius: "xl", variant: "outline", children: "Signup" }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 109,
                  columnNumber: 84
                }, this) }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 109,
                  columnNumber: 57
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Header.tsx",
                lineNumber: 107,
                columnNumber: 53
              }, this) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 106,
                columnNumber: 49
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 88,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 87,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 83,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Divider, { orientation: "vertical" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 115,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: "/partner/signup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_core7.Button,
            {
              radius: "xl",
              variant: "gradient",
              gradient: { from: "red", to: "violet", deg: 90 },
              children: "Join Now"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 117,
              columnNumber: 37
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 116,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 82,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 81,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 73,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 72,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core7.Modal, { opened: showComingSoonDialog, onClose: () => setComingSoonDialog(!1), title: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ComingSoonModal_default, {}, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 133,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 42,
    columnNumber: 12
  }, this);
}

// app/session.server.ts
var import_node2 = require("@remix-run/node"), cookieAge = 60 * 60 * 24 * 7 * 364, userCartCookie = (0, import_node2.createCookie)("cart", {
  maxAge: cookieAge
}), cartCheckoutCookieData = (0, import_node2.createCookie)("checkout", {
  maxAge: cookieAge
});
function parseCartCheckoutCookie(cookieHeader) {
  return cartCheckoutCookieData.parse(cookieHeader);
}
function serializeCartCheckoutCookie(data) {
  return cartCheckoutCookieData.serialize(data);
}
var cartCheckoutCookie = {
  parse: parseCartCheckoutCookie,
  serialize: serializeCartCheckoutCookie
}, vendorSignupCookie = (0, import_node2.createCookie)("vendor-signup", {
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
var import_react15 = require("react");

// node_modules/pure-react-carousel/dist/react-carousel.cjs.css
var react_carousel_cjs_default = "/build/_assets/react-carousel.cjs-BRUR3YZV.css";

// app/root.tsx
var import_core9 = require("@mantine/core");

// app/mantine.theme.ts
var import_core8 = require("@mantine/core");

// app/mantine.module.css
var mantine_module_default = { cardRoot: "mantine-module__cardRoot__mVGlH" };

// app/mantine.theme.ts
var CONTAINER_SIZES = {
  xxs: (0, import_core8.rem)(300),
  xs: (0, import_core8.rem)(400),
  sm: (0, import_core8.rem)(500),
  md: (0, import_core8.rem)(800),
  lg: (0, import_core8.rem)(700),
  xl: (0, import_core8.rem)(800),
  xxl: (0, import_core8.rem)(900)
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
], theme = (0, import_core8.createTheme)({
  fontFamily: "Inter, sans-serif",
  colors: {
    blue: primaryBlue
  },
  fontSizes: {
    xs: (0, import_core8.rem)(10),
    sm: (0, import_core8.rem)(12),
    md: (0, import_core8.rem)(14),
    lg: (0, import_core8.rem)(16),
    xl: (0, import_core8.rem)(20)
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: (0, import_core8.rem)(400),
          sm: (0, import_core8.rem)(500),
          md: (0, import_core8.rem)(600),
          lg: (0, import_core8.rem)(700),
          xl: (0, import_core8.rem)(800),
          xxl: (0, import_core8.rem)(900)
        }
      }
    },
    Card: import_core8.Card.extend({
      classNames: {
        root: mantine_module_default.cardRoot
      }
    }),
    NavLink: import_core8.NavLink.extend({
      styles: {
        label: {
          fontSize: "var(--mantine-font-size-md)"
        }
      }
    })
  }
}), mantine_theme_default = theme;

// app/components/Analytics.tsx
var import_react12 = require("@remix-run/react"), import_react13 = require("react");

// app/service/analytics.service.ts
var options = {
  autoConfig: !0,
  // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: !1
  // enable logs
}, ReactPixel;
function initFBPixel(PIXEL_ID) {
  PIXEL_ID && (ReactPixel = require("react-facebook-pixel").default, ReactPixel.init(PIXEL_ID, void 0, options));
}
async function setPageAnalytics() {
  ReactPixel == null || ReactPixel.pageView();
}

// app/tracker.ts
var import_uuid3 = require("uuid");
function defaultGetUserId() {
  return (0, import_uuid3.v4)();
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

// app/components/Analytics.tsx
var import_react_gtm_module = __toESM(require("react-gtm-module")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Analytics = {
  Pixel: (input) => {
    let location2 = (0, import_react12.useLocation)();
    return (0, import_react13.useEffect)(() => {
      input.pixelId && (initFBPixel(input.pixelId), setPageAnalytics());
    }, []), (0, import_react13.useEffect)(() => {
      setPageAnalytics();
    }, [location2.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {}, void 0, !1, {
      fileName: "app/components/Analytics.tsx",
      lineNumber: 22,
      columnNumber: 16
    }, this);
  },
  OpenReply: (input) => ((0, import_react13.useEffect)(() => {
    input.projectkey && startTracker({
      projectKey: input.projectkey
    });
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {}, void 0, !1, {
    fileName: "app/components/Analytics.tsx",
    lineNumber: 33,
    columnNumber: 16
  }, this)),
  GoogleTag: (input) => ((0, import_react13.useEffect)(() => {
    if (input.gtmId) {
      let tagManagerArgs = {
        gtmId: input.gtmId,
        dataLayer: {
          userId: input.userId,
          userProject: "project"
        }
      };
      import_react_gtm_module.default.initialize(tagManagerArgs);
    }
  }, [input.userId]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {}, void 0, !1, {
    fileName: "app/components/Analytics.tsx",
    lineNumber: 49,
    columnNumber: 16
  }, this))
}, Analytics_default = Analytics;

// app/root.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links = () => [
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
  let cookie = request.headers.get("Cookie"), userId = (await getSession(cookie)).get(USER_SESSION_KEY), userCart = await userCartCookie.parse(cookie), user = new Promise(async function(resolve, reject) {
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
      resolve(loggedInUser ? {
        id: loggedInUser.id,
        phone: loggedInUser.username,
        name: loggedInUser.name
      } : null);
    } catch {
      resolve(null);
    }
  }), pages = new Promise(async function(resolve, reject) {
    let list2 = await db.vendorType.findMany({
      orderBy: {
        name: "asc"
      },
      where: {
        isActive: !0
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
            isActive: !0,
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
    userId,
    user,
    pages,
    cartCount: (userCart == null ? void 0 : userCart.length) || 0,
    ENV: {
      openReplyprojectKey: process.env.OPENREPLY_KEY || "",
      FB_PIXEL_ID: process.env.FB_PIXEL_ID || "",
      GOOGLE_TAG_ID: process.env.GOOGLE_TAG_ID || ""
    }
  });
}
function App() {
  let data = (0, import_react14.useLoaderData)(), navigation = (0, import_react14.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { name: "msapplication-TileImage", content: "https://celebriacollective.com/assets/og-img.jpg" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "og:type", content: "website" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "og:url", content: "https://www.celebriacollective.com/" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "og:title", content: "Celebria Collective" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "og:description", content: "Book a service with us! Find photographers, videographers and makeup artists" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "og:image", content: "https://celebriacollective.com/assets/og-img.jpg" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "twitter:card", content: "summary_large_image" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "twitter:url", content: "https://www.celebriacollective.com/" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "twitter:title", content: "Celebria Collective" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "twitter:description", content: "Book a service with us! Find photographers, videographers and makeup artists" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { property: "twitter:image", content: "https://celebriacollective.com/assets/og-img.jpg" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { name: "facebook-domain-verification", content: "8ozo7sh586esta23ov0bh2slajstw4" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.ColorSchemeScript, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("script", { src: "//in.fw-cdn.com/32099065/1119582.js", chat: "true" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.MantineProvider, { theme: mantine_theme_default, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_redux2.Provider, { store: store_default, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Box, { style: headerStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 202,
          columnNumber: 35
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Await, { resolve: data.user, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Header, { user: response, cartCount: data.cartCount }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 204,
          columnNumber: 34
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 203,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 202,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { paddingTop: "40px", position: "relative" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 209,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Box, { hidden: navigation.state !== "loading", pos: "fixed", bottom: 0, left: 0, w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core9.Progress, { color: "gray", size: "md", value: 100, animated: !0 }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 210,
            columnNumber: 103
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 199,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Analytics_default.Pixel, { pixelId: data.ENV.FB_PIXEL_ID }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Analytics_default.OpenReply, { projectkey: data.ENV.openReplyprojectKey }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Analytics_default.GoogleTag, { gtmId: data.ENV.GOOGLE_TAG_ID, userId: data.userId }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 198,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 172,
    columnNumber: 5
  }, this);
}
function HydrateFallback() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "Loading..." }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 228,
    columnNumber: 10
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react14.useRouteError)();
  return (0, import_react14.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { textAlign: "center" }, children: [
    error == null ? void 0 : error.status,
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 236,
      columnNumber: 22
    }, this),
    error == null ? void 0 : error.data,
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 237,
      columnNumber: 20
    }, this),
    error == null ? void 0 : error.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 235,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { textAlign: "center" }, children: (error == null ? void 0 : error.data) || "Oops, Something went wrong!" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 242,
    columnNumber: 10
  }, this);
}

// app/routes/cart.package.$username.$packageKey._index.tsx
var cart_package_username_packageKey_index_exports = {};
__export(cart_package_username_packageKey_index_exports, {
  default: () => cart_package_username_packageKey_index_default,
  loader: () => loader2,
  meta: () => meta
});
var import_core12 = require("@mantine/core"), import_node4 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_react19 = require("react");

// app/components/ShareOptions.tsx
var import_core10 = require("@mantine/core"), import_react16 = require("@remix-run/react"), import_icons_react6 = require("@tabler/icons-react"), import_react17 = require("react"), import_react_share = require("react-share"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function ShareOptions({ fullWidth = !0 }) {
  let [url, setUrl] = (0, import_react17.useState)(""), location2 = (0, import_react16.useLocation)();
  (0, import_react17.useEffect)(() => {
    var _a;
    window && setUrl((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.href);
  }, [location2.pathname]);
  let size = "24px";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Popover, { width: 204, position: "bottom", withArrow: !0, shadow: "md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Popover.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { fullWidth, variant: "light", color: "violet", rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react6.IconShare3, { style: { width: (0, import_core10.rem)(20), height: (0, import_core10.rem)(20) } }, void 0, !1, {
      fileName: "app/components/ShareOptions.tsx",
      lineNumber: 32,
      columnNumber: 85
    }, this), children: "Share" }, void 0, !1, {
      fileName: "app/components/ShareOptions.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ShareOptions.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Popover.Dropdown, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Text, { fw: "bold", children: "Share on:" }, void 0, !1, {
        fileName: "app/components/ShareOptions.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Space, { h: "sm" }, void 0, !1, {
        fileName: "app/components/ShareOptions.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Group, { gap: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.WhatsappShareButton, { style: { height: size }, url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.WhatsappIcon, { size }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.FacebookShareButton, { style: { height: size }, url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.FacebookIcon, { size }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 46,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.EmailShareButton, { style: { height: size }, url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.EmailIcon, { size }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.TelegramShareButton, { style: { height: size }, url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.TelegramIcon, { size }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.TwitterShareButton, { style: { height: size }, url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_share.TwitterIcon, { size }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ShareOptions.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ShareOptions.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Space, { h: "md" }, void 0, !1, {
        fileName: "app/components/ShareOptions.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.CopyButton, { value: url, children: ({ copied, copy }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core10.Button, { size: "sm", fullWidth: !0, variant: "light", color: copied ? "teal" : "indigo", onClick: copy, children: copied ? "Copied url" : "Copy url" }, void 0, !1, {
        fileName: "app/components/ShareOptions.tsx",
        lineNumber: 61,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/ShareOptions.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ShareOptions.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ShareOptions.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ShareOptions.tsx",
    lineNumber: 30,
    columnNumber: 13
  }, this);
}
var ShareOptions_default = ShareOptions;

// app/path.data.ts
var PATH = {
  RESOURCE_URL: "https://hotmommy.in/upload/",
  RESOURCE_URL_VOICE: "https://hotmommy.in/voice_notes/",
  FALLBACK_IMG: "https://static.miraheze.org/widdershinswiki/thumb/4/47/Placeholder.png/800px-Placeholder.png",
  AVATAR_PLACEHOLDER: "https://xsgames.co/randomusers/avatar.php?g=pixel",
  YOUTUBE_THUMBNAIL: "https://img.youtube.com/vi/:id/maxresdefault.jpg",
  FILE_UPLOAD: "https://hotmommy.in/asset/upload",
  VOICE_FILE_UPLOAD: "https://hotmommy.in/asset/voice",
  GUEST_FILE_UPLOAD: "https://hotmommy.in/guest/upload",
  THUMB_URL: "https://hotmommy.in/thumbs/",
  GENERAL_ASSETS: "https://hotmommy.in/website_assets"
};

// app/service/vendor.service.ts
var import_client3 = require("@prisma/client");
function Stories(username) {
  if (!username)
    throw new Response("vendor not found", {
      status: 500
    });
  return db.vendorPortfolio.findMany({
    select: {
      serviceGroupId: !0,
      serviceGroup: {
        where: {
          isActive: !0
        },
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
      },
      fileType: "img"
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
    throw new Response("User not found", {
      status: 500
    });
  return db.vendorPortfolio.findMany({
    where: {
      vendor: {
        username
      }
    },
    select: {
      fileType: !0,
      fileName: !0
    },
    orderBy: [{
      position: "desc"
    }, {
      createdAt: "desc"
    }]
  });
}
function getFilteredVendors(params) {
  return new Promise(function(resolve, reject) {
    db.vendorType.findFirstOrThrow({
      where: {
        isActive: !0,
        keyName: params.vendorType
      },
      select: {
        id: !0,
        serviceGroup: {
          where: {
            isActive: !0,
            id: {
              in: params.serviceGroupIds
            }
          },
          select: {
            id: !0
          }
        }
      }
    }).then(async (res) => {
      let serviceGrpIds = res.serviceGroup.map((x) => x.id), query = db.vendorServiceGroup.findMany({
        skip: params.page * params.limit,
        take: params.limit,
        distinct: ["vendorId"],
        orderBy: params.sortBy,
        select: {
          cost: !0,
          vendor: {
            select: {
              id: !0,
              username: !0,
              profileImageName: !0,
              ratingScore: !0,
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
                    isActive: !0,
                    groupId: {
                      in: serviceGrpIds.length ? serviceGrpIds : void 0
                    }
                  }
                },
                take: 5
              },
              vendorPortfolio: {
                orderBy: [{
                  position: "desc"
                }, {
                  createdAt: "desc"
                }],
                select: {
                  fileName: !0,
                  fileType: !0
                },
                where: {
                  serviceGroupId: {
                    in: serviceGrpIds.length ? serviceGrpIds : void 0
                  }
                },
                take: 4
              }
            }
          }
        },
        where: {
          isActive: !0,
          vendor: {
            isActive: !0,
            categoryId: res.id
          },
          groupId: {
            in: serviceGrpIds.length ? serviceGrpIds : void 0
          }
        }
      }), totalCount = db.vendorServiceGroup.findMany({
        distinct: ["vendorId"],
        select: {
          id: !0
        },
        where: {
          vendor: {
            isActive: !0,
            categoryId: res.id
          },
          groupId: {
            in: serviceGrpIds.length ? serviceGrpIds : void 0
          }
        }
      }), [resultData, countData] = await db.$transaction([
        query,
        totalCount
      ]), loadMore = params.page * params.limit + params.limit <= countData.length;
      resolve({
        data: resultData.map((x) => ({
          id: x.vendor.username,
          name: x.vendor.username,
          portfolio: x.vendor.vendorPortfolio.map(
            (x2) => ({ type: x2.fileType, value: x2.fileName })
          ),
          rating: x.vendor.ratingScore,
          tag: x.vendor.vendorPortfolio.length ? "Popular" : void 0,
          startsFrom: x.cost || 0,
          profileImg: x.vendor.profileImageName ? PATH.THUMB_URL + x.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER,
          services: x.vendor.services.map((x2) => x2.service.name)
        })),
        loadMore,
        total: Math.ceil(countData.length / params.limit)
      });
    }, (e) => {
      reject("Connection failed");
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
async function signup(props) {
  var _a;
  let replaced = (_a = props.mobileNumber) == null ? void 0 : _a.replace(/ /g, ""), formattedNumber = replaced == null ? void 0 : replaced.substr(replaced.length - 10);
  if (!formattedNumber)
    throw new Response("Not found", {
      status: 500
    });
  let existingUser = await db.user.findFirst({
    where: {
      username: formattedNumber
    },
    select: {
      id: !0
    }
  });
  return existingUser != null && existingUser.id || await user_service_default.Create(formattedNumber), db.vendor.create({
    data: {
      id: generateUuid(),
      name: props.fullName,
      mobileNumber: formattedNumber,
      email: props.email,
      username: props.username,
      usernameSuggestion: props.username,
      source: import_client3.UserSource.MANUAL,
      isActive: !1,
      socialUrl: props.socialUrl,
      categoryId: props.categoryId
    }
  });
}
function getVendorByUsername(username) {
  return new Promise(function(resolve, reject) {
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
        location: !0,
        bio: !0,
        ratingScore: !0,
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
        location: r.location,
        gender: "",
        type: ((_a = r.vendorType) == null ? void 0 : _a.name) || "",
        primaryColor: r.primaryColor,
        avatar: r.profileImageName ? PATH.RESOURCE_URL + r.profileImageName : PATH.AVATAR_PLACEHOLDER,
        coverImageName: r.coverImageName ? PATH.RESOURCE_URL + r.coverImageName : "",
        bio: r.bio,
        baseCharge: ((_b = r.VendorServiceGroup[0]) == null ? void 0 : _b.cost) || 0,
        rating: r.ratingScore
      } : null);
    }).catch((e) => reject(!1));
  });
}
async function getServicesByGroupType(vendorGroupId) {
  let group = await db.vendorServiceGroup.findFirstOrThrow({
    where: {
      id: vendorGroupId
    },
    select: {
      vendor: {
        select: {
          username: !0
        }
      },
      group: {
        select: {
          groupTypeId: !0
        }
      }
    }
  }), usernames = (await getLinkedProfiles(group.vendor.username)).map((x) => x.username);
  return new Promise(function(resolve, reject) {
    db.vendorServiceGroup.findMany({
      orderBy: [{
        group: {
          name: "asc"
        }
      }],
      where: {
        isActive: !0,
        vendor: {
          username: {
            in: usernames
          }
        },
        group: {
          groupTypeId: group.group.groupTypeId
        }
      },
      select: {
        id: !0,
        cost: !0,
        group: {
          select: {
            id: !0,
            name: !0,
            imageName: !0
          }
        },
        vendorService: {
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
      let services = [];
      r.forEach((x) => {
        services.push({
          id: x.id,
          groupId: x.group.id,
          cost: x.cost,
          group: {
            name: x.group.name,
            imageName: x.group.imageName ? PATH.THUMB_URL + x.group.imageName : PATH.FALLBACK_IMG
          },
          vendorService: x.vendorService
        });
      }), resolve(services);
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function getServices(username) {
  return new Promise(function(resolve, reject) {
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
                name: !0
              }
            }
          }
        }
      }
    }).then((r) => {
      let groupedItems = {};
      r.forEach((x) => {
        var _a;
        let grouptype = ((_a = x.group.serviceGroupType) == null ? void 0 : _a.name) || "Others";
        groupedItems[grouptype] || (groupedItems[grouptype] = { name: grouptype, services: [] });
        let includedIds = x.group.serviceGroupItem.filter((i) => !i.isOptional).map((i) => i.serviceId), included = x.vendorService.filter((i) => includedIds.includes(i.service.id)), optional = x.vendorService.filter((i) => !includedIds.includes(i.service.id));
        groupedItems[grouptype].services.push({
          vendorServiceGroupId: x.id,
          groupId: x.group.id,
          title: x.group.name,
          cost: x.cost,
          isEstimated: x.group.isEstimated,
          included: included.map((i) => ({
            id: i.service.id,
            title: i.service.name
          })),
          addons: optional.map((i) => ({
            id: i.service.id,
            title: i.service.name
          }))
        });
      }), resolve(Object.values(groupedItems));
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function getVendorServiceGroupBasicInfo(id) {
  return new Promise(function(resolve, reject) {
    db.vendorServiceGroup.findFirstOrThrow({
      where: {
        id,
        isActive: !0
      },
      select: {
        id: !0,
        costExtraHour: !0,
        group: {
          select: {
            id: !0,
            name: !0,
            imageName: !0,
            minHour: !0,
            serviceGroupItem: {
              orderBy: {
                position: "asc"
              },
              where: {
                isOptional: !0
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
      let optionalIds = r.group.serviceGroupItem.filter((i) => i.isOptional).map((i) => i.serviceId), optional = r.vendorService.filter((i) => optionalIds.includes(i.service.id)), selectableList = r.group.serviceGroupItem.reduce((acc, item) => {
        var _a, _b;
        if (!item.addonGroup || !r.vendorService.map((x) => x.service.id).includes(item.service.id))
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
        minHour: r.group.minHour,
        costExtraHour: r.costExtraHour,
        image: r.group.imageName ? PATH.THUMB_URL + r.group.imageName : PATH.FALLBACK_IMG,
        addons: optional.map((i) => ({
          id: i.service.id,
          title: i.service.name,
          duration: i.duration,
          cost: i.cost
        })),
        selectableList
      };
      resolve(groupData);
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function getVendorServiceGroup(id) {
  return new Promise(function(resolve, reject) {
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
                name: !0,
                serviceGroupItem: {
                  select: {
                    isOptional: !0
                  }
                }
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
        if (!item.addonGroup || !r.vendorService.map((x) => x.service.id).includes(item.service.id))
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
        image: r.group.imageName ? PATH.THUMB_URL + r.group.imageName : PATH.FALLBACK_IMG,
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
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function topRatedVendorsByType(vendorType) {
  return new Promise(function(resolve, reject) {
    db.vendor.findMany({
      take: 8,
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
        image: x.profileImageName ? PATH.THUMB_URL + x.profileImageName : PATH.AVATAR_PLACEHOLDER
      })));
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
async function getLinkedProfiles(username) {
  let currentVendor = await db.vendor.findFirstOrThrow({
    where: {
      username
    },
    select: {
      email: !0,
      mobileNumber: !0
    }
  });
  return db.vendor.findMany({
    where: {
      isActive: !0,
      vendorType: {
        isActive: !0
      },
      OR: [{
        email: currentVendor.email
      }, {
        mobileNumber: currentVendor.mobileNumber
      }]
    },
    select: {
      username: !0,
      vendorType: {
        select: {
          vendorIdentifier: !0
        }
      }
    }
  });
}
function getVendorBasicInfo(username) {
  return db.vendor.findFirstOrThrow({
    where: {
      username
    },
    select: {
      profileImageName: !0,
      username: !0,
      location: !0,
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
  });
}
async function getVendorContactsByUsername(username) {
  return await db.vendor.findFirst({
    where: {
      username
    },
    select: {
      email: !0,
      mobileNumber: !0
    }
  });
}
async function packageDeals(username) {
  let usernames = (await getLinkedProfiles(username)).map((x) => x.username), groupIds = (await db.vendorServiceGroup.findMany({
    select: {
      groupId: !0
    },
    where: {
      group: {
        isActive: !0
      },
      vendor: {
        username: {
          in: usernames
        }
      }
    }
  })).map((x) => x.groupId);
  return (await db.package.findMany({
    select: {
      id: !0,
      name: !0,
      keyName: !0,
      discountType: !0,
      discountValue: !0,
      PackageItem: {
        select: {
          ServiceGroup: {
            select: {
              name: !0
            }
          }
        },
        where: {
          serviceGroupId: {
            in: groupIds
          }
        }
      }
    }
  })).filter((x) => x.PackageItem.length > 2);
}
async function packageById(username, keyName) {
  let usernames = (await getLinkedProfiles(username)).map((x) => x.username), packageData = await db.package.findFirstOrThrow({
    select: {
      id: !0,
      name: !0,
      discountType: !0,
      discountValue: !0,
      PackageItem: {
        select: {
          serviceGroupId: !0
        }
      }
    },
    where: {
      keyName
    }
  }), groupIds = packageData.PackageItem.map((x) => x.serviceGroupId), services = await db.vendorServiceGroup.findMany({
    select: {
      id: !0,
      groupId: !0,
      cost: !0,
      group: {
        select: {
          name: !0,
          imageName: !0
        }
      },
      vendorService: {
        select: {
          service: {
            select: {
              name: !0
            }
          }
        }
      }
    },
    orderBy: {
      vendor: {
        vendorType: {
          name: "asc"
        }
      }
    },
    where: {
      vendor: {
        username: {
          in: usernames
        },
        isActive: !0
      },
      group: {
        isActive: !0
      },
      groupId: {
        in: groupIds
      }
    }
  });
  return { packageData, services };
}
var VendorQuery = {
  Stories,
  portfolioByAlbumId,
  portfolioByUsername,
  getFilteredVendors,
  Signup: signup,
  getVendorByUsername,
  getVendorBasicInfo,
  getServices,
  getVendorServiceGroup,
  getVendorServiceGroupBasicInfo,
  getLinkedProfiles,
  topRatedVendorsByType,
  getVendorContactsByUsername,
  packageDeals,
  packageById,
  getServicesByGroupType
};

// app/utils/currency.transformer.tsx
var import_core11 = require("@mantine/core"), import_client4 = require("@prisma/client");

// app/data/common.data.ts
var COMMON_DATA = {
  currency: "\u20B9",
  PAY_LATER_SLAB_PERCENTAGE: 50,
  GST_PERCENTAGE: 0,
  FULL_PAYMENT_DISCOUNT: 5,
  //in percentage
  FULL_PAYMENT_DISCOUNT_MAX_VALUE: null,
  MAKE_YOUR_PACKAGE_MAX_DISCOUNT_VALUE: 15,
  // in percentage
  MAKE_YOUR_PACKAGE_MIN_SERVICE_COUNT: 3
}, SUPPORT_CENTER = {
  EMAIL: "info@celebriacollective.com",
  PHONE: "+91 8123575169",
  WHATSAPP_CHAT: "https://wa.me/8123575169",
  ENQUIRY_FORM: "https://forms.gle/eNxF2hSXYba9wdTx5"
};
var common_data_default = COMMON_DATA;

// app/utils/currency.transformer.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function FormattedValue({ value }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.NumberFormatter, { prefix: common_data_default.currency, value: Math.ceil(value || 0), thousandSeparator: !0 }, void 0, !1, {
    fileName: "app/utils/currency.transformer.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this);
}
function discountedValue(value, discount, type) {
  switch (type) {
    case import_client4.DiscountType.FLAT:
      return value - discount;
    case import_client4.DiscountType.PERCENTAGE:
      return value - value * discount / 100;
    default:
      return value;
  }
}
function Currency({ value, discountType, discountValue }) {
  return discountType && value && discountValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Stack, { gap: 0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Text, { size: "sm", td: "line-through", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FormattedValue, { value: Math.ceil(value || 0) }, void 0, !1, {
        fileName: "app/utils/currency.transformer.tsx",
        lineNumber: 21,
        columnNumber: 51
      }, this) }, void 0, !1, {
        fileName: "app/utils/currency.transformer.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core11.Badge, { color: "red", size: "xs", children: [
        discountValue,
        discountType === import_client4.DiscountType.PERCENTAGE ? "%" : "",
        " OFF"
      ] }, void 0, !0, {
        fileName: "app/utils/currency.transformer.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/utils/currency.transformer.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FormattedValue, { value: discountedValue(value, discountValue, discountType) }, void 0, !1, {
      fileName: "app/utils/currency.transformer.tsx",
      lineNumber: 24,
      columnNumber: 14
    }, this)
  ] }, void 0, !0, {
    fileName: "app/utils/currency.transformer.tsx",
    lineNumber: 19,
    columnNumber: 16
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FormattedValue, { value: Math.ceil(value || 0) }, void 0, !1, {
    fileName: "app/utils/currency.transformer.tsx",
    lineNumber: 28,
    columnNumber: 12
  }, this);
}
var currency_transformer_default = Currency;

// app/utils/page.meta.ts
var PageMetaFunction = (props) => {
  let prefix = "Celebria Collective", combinedTitle = props != null && props.title ? `${props.title} | ${prefix}` : prefix, defaultDescription = (props == null ? void 0 : props.description) || "";
  return () => [
    { title: combinedTitle },
    { name: "description", content: defaultDescription }
  ];
}, page_meta_default = PageMetaFunction;

// app/routes/cart.package.$username.$packageKey._index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta = page_meta_default({
  title: "Package"
});
function loader2(args) {
  let vendorUsername = args.params.username, packageKey = args.params.packageKey;
  if (!packageKey || !vendorUsername)
    throw new Response("Page not found", {
      status: 404
    });
  let data = VendorQuery.packageById(vendorUsername, packageKey), vendorDetails = VendorQuery.getVendorBasicInfo(vendorUsername);
  return (0, import_node4.defer)({ vendorDetails, package: data });
}
var Page = {
  Index: function() {
    let data = (0, import_react18.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
      lineNumber: 37,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react18.Await, { resolve: data.package, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 3, children: response.packageData.name }, void 0, !1, {
          fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
          lineNumber: 42,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
          lineNumber: 41,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ShareOptions_default, {}, void 0, !1, {
          fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
          lineNumber: 45,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
          lineNumber: 44,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 48,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 5, children: "Services included in this package" }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 49,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 50,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid, { gutter: { base: "md", md: "xl" }, children: response == null ? void 0 : response.services.map(
        (item) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Card, { radius: "md", withBorder: !0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Card.Section, { pos: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Image, { height: 100, src: PATH.RESOURCE_URL + item.group.imageName }, void 0, !1, {
                fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                lineNumber: 55,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                import_core12.Overlay,
                {
                  gradient: "linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",
                  opacity: 0.85,
                  zIndex: 0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                  lineNumber: 56,
                  columnNumber: 33
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 54,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 62,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 5, children: item.group.name }, void 0, !1, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 63,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 64,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { discountType: response.packageData.discountType, discountValue: response.packageData.discountValue, value: item.cost }, void 0, !1, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 65,
              columnNumber: 46
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 65,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 66,
              columnNumber: 29
            }, this),
            item.vendorService.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Popover, { width: 200, position: "bottom", withArrow: !0, shadow: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Popover.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Pill, { styles: { label: { margin: "auto" } }, ta: "center", style: { cursor: "pointer" }, children: [
                (_a = item.vendorService[0]) == null ? void 0 : _a.service.name,
                " & ",
                item.vendorService.length - 1,
                " features"
              ] }, void 0, !0, {
                fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                lineNumber: 69,
                columnNumber: 37
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                lineNumber: 68,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Popover.Dropdown, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { fw: "bold", children: "Available Services:" }, void 0, !1, {
                  fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                  lineNumber: 72,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.List, { children: item.vendorService.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.ListItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { size: "sm", children: s.service.name }, void 0, !1, {
                  fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                  lineNumber: 74,
                  columnNumber: 101
                }, this) }, s.service.name, !1, {
                  fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                  lineNumber: 74,
                  columnNumber: 70
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                  lineNumber: 73,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
                lineNumber: 71,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 67,
              columnNumber: 57
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: 22 }, void 0, !1, {
              fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
              lineNumber: 77,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
            lineNumber: 53,
            columnNumber: 29
          }, this) }, item.groupId, !1, {
            fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
            lineNumber: 52,
            columnNumber: 57
          }, this);
        }
      ) }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 51,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 81,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Page.SummaryBar, { packageId: response.packageData.id, name: response.packageData.name, discountType: response.packageData.discountType, discountValue: response.packageData.discountValue, services: response.services }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 82,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
      lineNumber: 39,
      columnNumber: 34
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
      lineNumber: 36,
      columnNumber: 16
    }, this);
  },
  SummaryBar: function({ packageId, name, services, discountType, discountValue }) {
    let [totalCost, setCost] = (0, import_react19.useState)(0), submit = (0, import_react18.useSubmit)(), navigation = (0, import_react18.useNavigation)(), location2 = (0, import_react18.useLocation)();
    (0, import_react19.useEffect)(() => {
      let sum = services.reduce((s, x) => s + x.cost, 0);
      setCost(sum);
    }, []);
    function getInputParams() {
      return (services == null ? void 0 : services.map((x) => ({
        vendorServiceGroupId: x.id,
        date: "",
        timeHour: 0,
        duration: 1,
        services: [],
        location: "",
        locationLat: 0,
        locationLon: 0
      }))) || [];
    }
    function expresCheckout() {
      let input = getInputParams();
      submit({ cart: JSON.stringify(input), packageId, redirectUrl: location2.pathname }, {
        action: "/order/checkout",
        method: "post"
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Box, { pos: "sticky", bottom: 20, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Card, { withBorder: !0, shadow: "md", bg: "yellow.0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid, { align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: "content", visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Avatar.Group, { children: services.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Avatar, { src: PATH.RESOURCE_URL + item.group.imageName }, item.groupId, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 127,
        columnNumber: 46
      }, this)) }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 126,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 125,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: "auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 4, children: name }, void 0, !1, {
          fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
          lineNumber: 131,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Text, { children: [
          services[0].group.name,
          " + ",
          services.length - 1,
          " services"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
          lineNumber: 132,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 130,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: 12, hiddenFrom: "md" }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 134,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: { base: "auto", md: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Title, { order: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(currency_transformer_default, { value: totalCost, discountType, discountValue }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 137,
        columnNumber: 43
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 137,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 136,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Divider, { orientation: "vertical", h: 40 }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 140,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 139,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core12.Button, { loading: ["loading", "submitting"].includes(navigation.state), type: "submit", onClick: expresCheckout, children: "Proceed to payment" }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 143,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
        lineNumber: 142,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
      lineNumber: 124,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
      lineNumber: 123,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$username.$packageKey._index.tsx",
      lineNumber: 122,
      columnNumber: 16
    }, this);
  }
}, cart_package_username_packageKey_index_default = Page.Index;

// app/routes/_auth.user.inbox.$chatGroupId._index.tsx
var auth_user_inbox_chatGroupId_index_exports = {};
__export(auth_user_inbox_chatGroupId_index_exports, {
  default: () => auth_user_inbox_chatGroupId_index_default,
  loader: () => loader3
});
var import_core13 = require("@mantine/core"), import_react20 = require("@remix-run/react"), import_react21 = require("react"), import_ChatBox = __toESM(require_ChatBox());

// app/service/chat.service.ts
async function createChatGroup(name, orderId) {
  return await db.chatGroup.create({
    data: {
      id: generateUuid(),
      name,
      bookingId: orderId
    }
  });
}
async function addUserAsChatGroupMember(input) {
  return await db.chatGroupMember.create({
    data: {
      id: generateUuid(),
      chatGroupId: input.chatGroupId,
      userId: input.userId
    }
  });
}
async function addVendorAsChatGroupMember(input) {
  let exists = await db.chatGroupMember.findFirst({
    where: {
      chatGroupId: input.chatGroupId,
      vendorId: input.vendorId
    }
  });
  if (exists != null && exists.id)
    return null;
  let vendorPhone = await db.vendor.findFirstOrThrow({
    where: {
      id: input.vendorId
    },
    select: {
      mobileNumber: !0
    }
  }), user = await db.user.findFirstOrThrow({
    where: {
      username: vendorPhone.mobileNumber
    },
    select: {
      id: !0
    }
  });
  return await db.chatGroupMember.create({
    data: {
      id: generateUuid(),
      chatGroupId: input.chatGroupId,
      vendorId: input.vendorId,
      userId: user.id
    }
  });
}
async function getChatgroupByOrderId(orderId, userId) {
  return await db.chatGroup.findFirst({
    where: {
      booking: {
        orderId
      }
    },
    select: {
      id: !0,
      isDisabled: !0,
      ChatGroupMember: {
        select: {
          id: !0
        },
        take: 1,
        where: {
          OR: [
            {
              userId
            }
          ]
        }
      }
    }
  });
}
async function getChatgroupByBookingId(bookingId, userId) {
  return await db.chatGroup.findFirst({
    where: {
      bookingId
    },
    select: {
      id: !0,
      isDisabled: !0,
      ChatGroupMember: {
        select: {
          id: !0
        },
        take: 1,
        where: {
          userId
        }
      }
    }
  });
}
async function disableChatGroup(bookingId) {
  await db.chatGroupMember.updateMany({
    where: {
      chatGroup: {
        bookingId
      }
    },
    data: {
      isDisabled: !0
    }
  }), await await db.chatGroup.updateMany({
    where: {
      bookingId
    },
    data: {
      isDisabled: !0
    }
  });
}
async function disableChatForVendor(bookingId, vendorId) {
  await db.chatGroupMember.updateMany({
    where: {
      vendorId,
      chatGroup: {
        bookingId
      }
    },
    data: {
      isDisabled: !0
    }
  });
}
function getAllChatGroupsByUser(userId) {
  return db.chatGroup.findMany({
    orderBy: {
      created_at: "desc"
    },
    select: {
      id: !0,
      name: !0,
      created_at: !0,
      ChatGroupMember: {
        select: {
          lastSeen: !0
        },
        take: 1,
        where: {
          userId
        }
      },
      ChatThread: {
        take: 1,
        orderBy: {
          created_at: "desc"
        }
      }
    },
    where: {
      ChatGroupMember: {
        some: {
          userId
        }
      }
    }
  });
}
function getChatGroupByUserId(userId, chatGroupId) {
  return db.chatGroup.findFirst({
    where: {
      id: chatGroupId
    },
    orderBy: {
      created_at: "desc"
    },
    select: {
      id: !0,
      isDisabled: !0,
      name: !0,
      ChatGroupMember: {
        select: {
          id: !0
        },
        take: 1,
        where: {
          userId
        }
      }
    }
  });
}
var ChatService = {
  getChatgroupByBookingId,
  getChatgroupByOrderId,
  createChatGroup,
  addUserAsChatGroupMember,
  addVendorAsChatGroupMember,
  disableChatGroup,
  disableChatForVendor,
  getAllChatGroupsByUser,
  getChatGroupByUserId
}, chat_service_default = ChatService;

// app/routes/_auth.user.inbox.$chatGroupId._index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get(USER_SESSION_KEY), chatGroupId = params.chatGroupId;
  if (!chatGroupId || !userId)
    return null;
  let group = await chat_service_default.getChatGroupByUserId(userId, chatGroupId);
  return {
    chatGroupId,
    group
  };
}
function auth_user_inbox_chatGroupId_index_default() {
  var _a, _b, _c, _d, _e;
  let [pageReady, setPageReady] = (0, import_react21.useState)(!1), data = (0, import_react20.useLoaderData)();
  return (0, import_react21.useEffect)(() => {
    setPageReady(!1), setTimeout(() => setPageReady(!0), 500);
  }, [(_a = data == null ? void 0 : data.group) == null ? void 0 : _a.id]), pageReady && ((_b = data == null ? void 0 : data.group) != null && _b.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_ChatBox.ChatBox, { title: data == null ? void 0 : data.group.name, chatGroupId: (_c = data == null ? void 0 : data.group) == null ? void 0 : _c.id, memberId: ((_e = (_d = data.group) == null ? void 0 : _d.ChatGroupMember[0]) == null ? void 0 : _e.id) || "", disabled: data.group.isDisabled || !1 }, void 0, !1, {
    fileName: "app/routes/_auth.user.inbox.$chatGroupId._index.tsx",
    lineNumber: 34,
    columnNumber: 42
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core13.Card, { withBorder: !0, title: "Chat is disabled", children: "Contact support to enable chat for this order." }, void 0, !1, {
    fileName: "app/routes/_auth.user.inbox.$chatGroupId._index.tsx",
    lineNumber: 34,
    columnNumber: 203
  }, this);
}

// app/routes/_auth.user.order.$id.invoice._index.tsx
var auth_user_order_id_invoice_index_exports = {};
__export(auth_user_order_id_invoice_index_exports, {
  loader: () => loader4
});
var import_common2 = require("@pdfme/common"), import_generator = require("@pdfme/generator");

// app/service/order.service.ts
var import_client5 = require("@prisma/client");

// app/data/admin.data.ts
var EMAIL_DATA = {
  ADMIN_EMAIL: "rakshitharavi@celebriacollective.com"
}, PHONE_DATA = {
  ADMIN_PHONE: "9148908849"
}, admin_data_default = { EMAIL_DATA, PHONE_DATA };

// app/service/whatsapp.service.ts
var API_KEY = process.env.WHATSAPP_KEY, END_POINT = "https://graph.facebook.com/v19.0/335976452932928/messages";
var Request2 = {
  post: ({ template, to, params, lang = "en_US", interaction = [] }) => {
    let MESSAGE_BODY = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "+91" + to,
      type: "template",
      template: {
        name: template,
        language: { code: lang },
        components: [
          {
            type: "body",
            parameters: params
          },
          ...interaction
        ]
      }
    };
    return {
      method: "post",
      url: END_POINT,
      data: JSON.stringify(MESSAGE_BODY),
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json"
      }
    };
  }
};
async function orderConfirmationUser(input) {
  let params = [
    {
      type: "text",
      text: "Customer"
    },
    {
      type: "text",
      text: input.serviceName
    },
    {
      type: "text",
      text: input.orderId
    },
    {
      type: "text",
      text: input.date
    },
    {
      type: "text",
      text: input.time
    },
    {
      type: "text",
      text: "" + input.cost
    }
  ], interaction = [{
    type: "button",
    sub_type: "url",
    index: "0",
    parameters: [
      {
        type: "payload",
        payload: routes_data_default.get("UserManageOrder", { id: input.orderId })
      }
    ]
  }];
  return Request2.post({ template: "booking_confirmation_user" /* booking_confirmation_user */, to: input.to, params, interaction, lang: "en" });
}
async function notifyVendorNewOrder(input) {
  let params = [
    {
      type: "text",
      text: input.orderId
    },
    {
      type: "text",
      text: input.service
    },
    {
      type: "text",
      text: input.date + " at " + input.time
    },
    {
      type: "text",
      text: "\u20B9" + input.cost
    }
  ], interaction = [{
    type: "button",
    sub_type: "url",
    index: "0",
    parameters: [
      {
        type: "payload",
        payload: routes_data_default.get("VendorManageOrder", { id: input.orderId })
      }
    ]
  }];
  return Request2.post({ template: "vendor_order_confirmation_regular " /* vendor_order_confirmation_regular */, to: input.to, params, interaction, lang: "en_US" });
}
async function notifyVendorOrderCancel(input) {
  let params = [
    {
      type: "text",
      text: input.orderId
    },
    {
      type: "text",
      text: input.service
    },
    {
      type: "text",
      text: input.date
    },
    {
      type: "text",
      text: input.time
    }
  ];
  return Request2.post({ template: "user_cancellation_vendor" /* user_cancellation_vendor */, to: input.to, params, lang: "en_US" });
}
async function notifyUserOnOrderReject(input) {
  let params = [
    {
      type: "text",
      text: " "
    },
    {
      type: "text",
      text: input.vendorName
    },
    {
      type: "text",
      text: input.service
    },
    {
      type: "text",
      text: input.date
    },
    {
      type: "text",
      text: input.time
    }
  ], interaction = [{
    type: "button",
    sub_type: "url",
    index: "0",
    parameters: [
      {
        type: "payload",
        payload: routes_data_default.get("UserManageOrder", { id: input.orderId })
      }
    ]
  }];
  return Request2.post({ template: "booking_rejection_user" /* booking_rejection_user */, to: input.to, params, interaction, lang: "en" });
}
async function remindUserOrderPayment(input) {
  let params = [
    {
      type: "text",
      text: input.orderId
    },
    {
      type: "text",
      text: input.service
    }
  ], interaction = [{
    type: "button",
    sub_type: "url",
    index: "0",
    parameters: [
      {
        type: "payload",
        payload: routes_data_default.get("PaymentGateway", { id: input.orderId })
      }
    ]
  }];
  return Request2.post({ template: "payment_reminder_user" /* payment_reminder_user */, to: input.to, params, interaction, lang: "en" });
}
async function notifyOnNewChat(to, fromName, message, url) {
  let params = [
    {
      type: "text",
      text: fromName
    },
    {
      type: "text",
      text: message
    }
  ], interaction = [{
    type: "button",
    sub_type: "url",
    index: "0",
    parameters: [
      {
        type: "payload",
        payload: url
      }
    ]
  }];
  return Request2.post({ template: "new_chat_msg" /* new_chat_msg */, to, params, interaction, lang: "en_US" });
}
async function notifyAdmin(message) {
  let to = admin_data_default.PHONE_DATA.ADMIN_PHONE, params = [
    {
      type: "text",
      text: message
    }
  ];
  return Request2.post({ template: "admin_notify" /* admin_notify */, to, params, lang: "en_US" });
}
var WhatsappService = {
  orderConfirmationUser,
  notifyVendorNewOrder,
  notifyVendorOrderCancel,
  notifyUserOnOrderReject,
  notifyAdmin,
  notifyOnNewChat,
  remindUserOrderPayment
}, whatsapp_service_default = WhatsappService;

// app/utils/date.transform.ts
var import_dayjs = __toESM(require("dayjs")), DateFormatter = {
  short: (date) => (0, import_dayjs.default)(date).format("MMM DD, YYYY"),
  time: (date) => (0, import_dayjs.default)(date).format("hh:mm A"),
  timeHourTo12Hrs: (hour) => {
    let d = /* @__PURE__ */ new Date();
    return d.setHours(hour), d.setMinutes(0), (0, import_dayjs.default)(d).format("hh:mm A");
  }
};

// app/service/notification.service.ts
var import_axios2 = __toESM(require("axios"));
var Notification = class {
  constructor() {
    this.emailQueue = [];
    this.whatsappQueue = [];
    this.emailQueue = [], this.whatsappQueue = [];
  }
  email(type) {
    this.emailQueue.push(type);
  }
  whatsapp(type) {
    this.whatsappQueue.push(type);
  }
  admin(message) {
    this.whatsappQueue.push(whatsapp_service_default.notifyAdmin(message));
  }
  async publish() {
    try {
      await Promise.allSettled(this.emailQueue);
      for (let i = 0; i < this.whatsappQueue.length; i++) {
        let params = await this.whatsappQueue[i];
        await (0, import_axios2.default)(params);
      }
    } catch {
      console.log("Notification failed");
    }
  }
}, notification_service_default = Notification;

// app/service/order.service.ts
async function cancelOrder(bookingId) {
  let orderInfo = await db.booking.update({
    where: {
      id: bookingId
    },
    data: {
      status: import_client5.BookingStatus.CANCELLED
    },
    select: {
      orderId: !0,
      bookingService: {
        select: {
          date: !0,
          timeHour: !0,
          vendorServiceGroup: {
            select: {
              vendor: {
                select: {
                  mobileNumber: !0
                }
              },
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
  });
  await db.bookingService.updateMany({
    where: {
      bookingId
    },
    data: {
      status: import_client5.BookingStatus.CANCELLED
    }
  }), await chat_service_default.disableChatGroup(bookingId);
  let notification = new notification_service_default();
  orderInfo.bookingService.forEach(async (service) => {
    notification.whatsapp(
      whatsapp_service_default.notifyVendorOrderCancel({
        to: service.vendorServiceGroup.vendor.mobileNumber,
        orderId: orderInfo.orderId,
        service: service.vendorServiceGroup.group.name,
        date: service.date ? DateFormatter.short(service.date) : "-",
        time: DateFormatter.timeHourTo12Hrs(service.timeHour)
      })
    );
  }), await notification.publish();
}
async function vendorAcceptOrder(params) {
  let data = await db.bookingService.update({
    data: {
      status: import_client5.BookingStatus.ACCEPTED
    },
    where: {
      id: params.id
    }
  });
  await autoUpdateBookingStatus(data.bookingId);
}
async function vendorRejectOrder(params) {
  let data = await db.bookingService.update({
    data: {
      status: import_client5.BookingStatus.REJECTED
    },
    where: {
      id: params.id
    },
    select: {
      bookingId: !0,
      date: !0,
      timeHour: !0,
      vendorServiceGroup: {
        select: {
          vendorId: !0,
          vendor: {
            select: {
              username: !0
            }
          },
          group: {
            select: {
              name: !0
            }
          }
        }
      },
      Booking: {
        select: {
          orderId: !0,
          user: {
            select: {
              username: !0
            }
          }
        }
      }
    }
  });
  await chat_service_default.disableChatForVendor(data.bookingId, data.vendorServiceGroup.vendorId), await autoUpdateBookingStatus(data.bookingId);
  let notification = new notification_service_default();
  notification.whatsapp(whatsapp_service_default.notifyUserOnOrderReject({
    to: data.Booking.user.username,
    orderId: data.Booking.orderId,
    vendorName: data.vendorServiceGroup.vendor.username,
    service: data.vendorServiceGroup.group.name,
    date: data.date ? DateFormatter.short(data.date) : "-",
    time: DateFormatter.timeHourTo12Hrs(data.timeHour)
  })), await notification.publish();
}
async function autoUpdateBookingStatus(bookingId) {
  let statusList = (await db.bookingService.findMany({
    where: {
      bookingId
    },
    select: {
      status: !0
    }
  })).map((x) => x.status), isOrderCancelled = statusList.filter((x) => [import_client5.BookingStatus.CANCELLED, import_client5.BookingStatus.REJECTED].includes(x)).length === statusList.length, isOrderAccepted = statusList.filter((x) => [import_client5.BookingStatus.ACCEPTED, import_client5.BookingStatus.CANCELLED, import_client5.BookingStatus.REJECTED].includes(x)).length === statusList.length;
  switch (!0) {
    case isOrderCancelled:
      await updateBookingStatue(bookingId, import_client5.BookingStatus.REJECTED), await chat_service_default.disableChatGroup(bookingId);
      break;
    case isOrderAccepted:
      await updateBookingStatue(bookingId, import_client5.BookingStatus.ACCEPTED);
      break;
  }
}
async function updateBookingStatue(bookingId, status) {
  await db.booking.update({
    data: {
      status
    },
    where: {
      id: bookingId
    }
  });
}
async function orderSummary(orderId) {
  return db.booking.findFirstOrThrow({
    where: {
      orderId
    },
    select: {
      coupon: !0,
      discount: !0,
      tax: !0,
      subTotal: !0,
      total: !0,
      paymentMode: !0,
      BookingPayments: {
        select: {
          updated_at: !0,
          amount: !0,
          paymentDone: !0
        }
      },
      Package: {
        select: {
          name: !0
        }
      },
      bookingService: {
        select: {
          cost: !0,
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
  });
}
var OrderService = {
  cancelOrder,
  vendorAcceptOrder,
  vendorRejectOrder,
  orderSummary
}, order_service_default = OrderService;

// app/routes/_auth.user.order.$id.invoice._index.tsx
var import_schemas = require("@pdfme/schemas"), import_client6 = require("@prisma/client");

// app/data/brand-logo.invoice.ts
var brandLogoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABNCAYAAAAcolk+AAAACXBIWXMAAC4jAAAuIwF4pT92AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAANflJREFUeNrsnXl8VNX5/9/nzpKVLCQkAWQNIgqC4IZsslhrq1aLFS1al35tXbrYqtVaW/yqta51b+v+VbFarVpq/Sm1tq6AVNkUF/awBAIhhCyTZDIz9/z+eM6QIcy9M5lMwiLP6zWvLHOXc88953Oe5/MsR4VHj8ZBhgAnAccDI4DegBfQHJT2ooFtwGfAh8C/gc87c0EFWJbF1JUrebuh4UDpp7FmPIWAiPmfBfiARcC8bmzLt4ABQBiwzf+8gAeYC6zcx/ruNGCg6TfLDJF8oCewAHjpqzDRVBzAOhSYBZwJ5B7EopQkCPwDuAX45CBg7ZJ3gUkO370KnNFN7bCAL4ChDt//HrhmH+u7pcAoh+9soByoONAnltXu77PMKnf+QbDqlGQA3wE+AC482B27aaJOEurmtrS4fBfZB/sukKBfs78KA8gb8/t3gBfigNhBSV16AE8BmcAjqWpaB5BEUgSz7gbPfRGw3NrbCOz4KkyoKDgdDjx+EKy6TB4Ajk3lxJA+oChDfbCdXaYtNn+VAOsOhMA7KF0jfuC+dhqt+4tRivpwmHXB4FdFw9qXxN4H2+RL8N1XwhlmASOBbx7ElC6XccDk5G1BxdLmZipDoYM9d1AAaoEmhMsKmN+bgAbgHdw5rgNGvIhnxnNwPHSLnA28lSxg/aOu7mAMyUGJykwgL0b7i4Y2tAJV+5H22mnAmnhwLHSbHGMGmp3IHAyEw7xUW3uwx/aO7Iu+jh18RYj1RIBVfnB8dpsMAAoSDTxlWbxcU0NFa2tHr1+IxBYdChyCeCkVUAN8CXwKbEih3YWI0+B4JKA4DyF5K4D/IsGyVd3Uh5nAGCQI9QigCAmJ2AQsRoIo1yS4hp1g0YjnfBpm7jsAyDIm2HokWPgLJADVTXKRIM8wbXyTMtZNLeLpi5WBwAlI0PZ24DHzHmLbHj2/DqhPcP8yoA9QYvrMb7Sz7UjQc6X5uc8D1kGyHUBrsO3dfyolH8uSj1LpmGw5boBlKUUoEuG+bUmPHQvhIM9DgjL7uBxbb/iOR4H/l8S1hwGXI/F5fV2O2w78HXEsLO+iN1QC/MA85+EuxzUZs/sBJOOgs3Ic8GvgZCS+rr1EDGg9j3jatztc517guwZsYgFLmXN/aP7XE7gZ+J5ZGDALzghghjm3/fn/Aqa3u18BMB74unmGoQbwnKTGPMcbwHMpLmzdAljdo/5GQSCGo9n12VsAFQ5Da6v8npEBOTnyyc0Fn0++DwTk09gILS3SXr8fvN5U264SaVf/2LGDJc1JeamnINH045O8dx6SkvItJBL/Z8DaOMf5zST9mdHSEkkx8D9mQt5u2pRO+T7wv0C/JI7NjnnG/wN+bjSQDo1W8/MnwJ1moXESD+K4GmlA5+cGvNtLH7NYOfVf9JjX2TOivc585xTM3afdongrwpf268AzF5kFbxJwNXAbcM++CFhdAwahkHy0lsmdmSkT3eNpA4uWFgEM25ZjfD75vislEpH7+nzQrx9q1Cg48kg47DBUaSnk5Ql4eTzSrtZWaGhAb90KK1bAkiXopUth40b5PjNTtK80iAWEbZs7t25N5vBZwG868Q5PNybOhe00kT7AbGBqCtfMNtrBMANgLWnQSB8ELknx/IuB4UZD3NSB81qAHxktrSMyCHjFAP2D7b4LJtAKLeBZ4qffRMwxThJsN4y+B/TqRL8XI+lJQ4ArDkzA0lomdygE2dkweDDqsMNg+HAoL4eiIlROjgCF1hAMouvrobISPvsM/emnsHo11NQIWGRmplf7CoehuRlKSlCnngqnn44aOVI0KjfJyIAePVB9+sDo0XDuuaiGBvTHH8Mrr6DnzRPtKzu708ClLIu5O3eyMJDQQ/2HNA2kvsCbhp9ajCS4zwWO7OR1Z5qJM5PU44N8xlQ6Mw0m3T8MACfrxbiA1LldywDdVuDFJM9pAC41GnNKs68d+L0A/DgN4+NyYEsXaMx7EbC0Fo0FYNgw1EknoSZOhKFDBXQS2UZHHQWnniq/b9iAnj8fPXcuLF4MwaAAQWeAS2sx6Xr3Rl1yCeqss6Bv392/76j06IGaMgWmTEF99hn62WfRr78OTU3S3k7Yifcn5q5uTPOqtwwhzP2GuzgyTdc914DgXSmef1cawCoqRwF/Mm1KRg5Nwz3/BHwErEvi2GMTPKvVQepmTpoAC+AG4GU6WX0kXaLCo0fXGKKv4xIMill07LGo886TSez3pwYG7UFp4UL07Nnod94RMy4rK7X2WRbqjDNQV1wBffp0Dqjc2vzxx9j33QcLFwpoxTdtA4hnaw9C06MUK1taGPnFFwSd23YiQponfHJjAjUh5KsTl/EpQiZXGd7ibudHVZGBAwf+v+Li4vn9+/ev/fzzz/vW1NRM3bZt24QEps4YYIX5+5/mfvHkrwipDFLW6F9uD9i7d+8PSktL/zNo0KDNlZWVhVu3bh2/fv36b+KeXnZmDL+0GBidzGv2eDzNRUVFS4AqpVROIBAY3tjYeEgSpz5DW/L7K8C3Uxxp65FqDU7VLN5l96DkHKQ8Tp84468e8apmG07Tn8T9/2hM5P1Uw7Jt0VqGDUNdfjnqG99om7ypAkF7Qv7441HHHw8ffID+wx9g0SIBrWQ5rkAABg1CXX896sQT0wdS8dqsFBxzDNZTT6GffBL9yCNifibQMHdfQy3eaWx0AytvEtrKVsM9zAE2xgzMYYiH7ZKYlXotQkxXGVPwBmeFssfqSZMmfX/w4MHvBwIBhg0bBkBWVtaNGzZsOH/BggUPh0KhHAdO65eGS0o4qmKe81ZHUiszs378+PGX9+nT5zm/38+QIUNYv349kUiENWvWTP7www//r6mpaaDD6Tch3tFwsq9l4MCBjwwePPjesrKyFVu2bKGoqAi/31+wdu3aM5YtW3ZLc3OzG7E9w5hTqzs50gIdabM5/k1z//cNR7nALJQ7DSeWgXhejzEa+wku1zsVuJZ9IJq+46RLKAStragLL8R67jnUN78pE1br9AFCzLXUhAlYzzyDuvpq4YhaWhKf29CAmjoVa/bsjoFVrOey/SeZ9nq9qB/+EPXYYzBggGh4HZD57tzVqbgnUK9EPDx3AasQ4jhi+JGPEA/WDCT2ZqfRNirMud/FweWdl5dXe8cdd5x+zDHHvN/c3Ew4HKa1tZVQKEQoFOLss89+9vLLL3dbfacbQExWTjC8Uzwtz/7xj3984bRp054LBoOEw+Fd7WhubmbChAnv3HXXXdOzsrKcOnIUHQiUvvjii38+adKky7KyslZEIhGiH5/Pt3PIkCFPX3DBBVPKysrWulwiEzgnhRnQAPwZIc/HmnffUU/nz4x5f4oZEx8YwKo3wLMDic171mhnL7tcq3+azORuBCylBCxyc1G//z3q17+GHj2SB6qOgkAsEPh8qEsvRT3xhBD4ThPb8FXqvPNQDzwAvXolbl9se0IhqK6G9eth3TpxCNTX73lcgvaqMWMEZMvLxRGRxEuwbZvP3EMZLkwwwL9D4iqZLxli92vGHIyKY+G8iRMn3t2jR48vc3NzKS0t5bTTTmPkyJEMHz6cfv36oZTiqKOOevqwww571+ESecC0DoxJR7PpuOOO+9v48ePnlJaWcsghh3DUUUcxduxYhg0bRllZGbm5ufj9/iXHHHPMYwnMwoQyYcKEZy6++OL7Bg4cSGtrKzpmDIVCITweD5MmTVpzySWXXODxeNwSPr/VToNMJK+ahel8AyYLzcLSUSK3jvghK/Gk1XBetS4U68D9xyRUSgjlPn1Q99wjoQCJtJZ4EzsSEW9dNJap/TFO14tqW2PGoJ56Cv2rX4l3rj1f1tiIuugi1A03JN++6mr0/Pnw4YfoL7+E7dvbYrO8XsjOFg/hyJEwdizq2GPFc5jo+r16iQfStpPoXkV9JEKVc6JzIe6xVk+0AyBXRa7d36U4VLLMyMhoOO644x4PBoMEAgHy8vLo3VuUpYKCAlpbW6mrq0MpxfDhwx9dsWLFiU7z30y+ZEzCsU7LwZQpUx5obW1l8+bN5OXlUVhYSHFxMXl5eTQ1NdHc3Exubi7HHHPMI/PmzfuRbds+Bw3ONT3K7/c3T5w48ZZFixZRWFjIEUccwZYtW9BaE4lEyMjIoLS0lJUrV5KVlTVvxIgRzy9btuwCh8sNN+8vmSz2OUgIRldVi8iM4axa2T3spMqA4ykO55bsH4AVBat+/bAefhgGD04eqDZuRC9eDJ99BuvWoevqBAyUagOCESNQxxwj4Q+JeDCtoagIpkyBd97ZHbAaG1Fnn4361a/crxG9x8aN6GeeQf/zn1BVJf+PjQNTSky6xkb05s2wYAE8+SR66FDUWWehzj67jaOKcy99zz3oJUuS9hrWRSLsjDjmr5a7DJiIMR9SlQE4ZDt4vd5ar9fbt7m5uWTLli2ejIwM/eWXX9pKKSorK61QKKT8fj8bNmwIrVq1yi3AdGS0W9z0acOrDIlP8VmRVatW9SgsLBxRWVnpMRqP7fP57A0bNnhqamqUUopIJBL5/PPPe3q93mBra2s8wOpnntexs/v37z+/V69eq1tbW1FK0bdvX2zbZv369WRmZjJixAj8fv8u8Jo4ceIzLoCVY54/EWBtMjxjOsGqyGi3J5pFqYS24NUmJLp9haEM5iXgqPz7B2C1tEBJCdaDDyYNVnrePPjrX9Effgg7TBaKx7N7eottSyzTnDnonBzUmDEwYwbq5JPluHj3UQqWL0ffd18bWCglcVDjxqFmzWrj05zapzX6uefQf/qTAFV2tkS2u/aSCXzVGlatQt98M/rvf0dddRVq3Ljd76kUeu5c9OOPJ0+6K0VDJOJGuPd3OXszksuWqpQ5+y0C/WfNmvUxoLXWymiDWjB619/Ytm1rrd3GUqkxK+wEGlYp4tXc80vb9r788suvzpkzZ7e2KKW01tqKMdm0bdvKhe7IRwIjHQErLy9v6aZNmwgaDlIphVKKXr16UVhYSENDA+FwOAqk+Hy+TzIzM3e2tLQUOFxyiNFo3ORhnNN6OioFiNf3IiSnFJd2HY/EnekEbfTu+4AViYDfj3XXXXDYYYm1lhUr0Pfdh373XTk3MzMxGETBa/58mDcPPXYs1s9+JkGasdqLUlBTg33ttVBX1xbmEAxCaSnWrbe2gYpTG3fuRM+ahX7jDTk2L69jvaWUmIMZGRLseumlcNllqMsvbwsa/ewz9I03tgF0ktJk24SdAcstankbnfPeFLoPgUgyD5HomDyjPSUCrB64F6qzIpFOV1HJNBPasS05OTnVHo8HT4xHWilFeXk5gUCADRs2xGp+hMPhhoyMjFoXwCpK8OxhYw6mQ4YhgaMjO3ieIn6u5H4EWM3Nwgcdd1xCsNKvvIK+/XbYuVO4m44Ee1pWm+m0cCH2xRejfvQj1A9+0HadSAT7xhslGj4KglpDJIL65S/hkEPc27hlC/ZPfwpLlnQcqOJJVpYA7b33QkUF6rbbpI2//rUAak5Oh7ymEXd7qStLV3dHWWy/AYpEJmF3tEUh1RYcAaS4uDhcXl5Oi/FIa63xer3U19dTWVmJihnbSilCoZDHtm1vgnu6PftGEleYSHbxmQMc1gX95tm3ASsQQH3ta6gLLkhsAt5/v5hYPl9yGpWbZGdDJIK+805YsQJ1882QnS3Xnzt3d7BpakKdcoqEVri1sboa+4orhEtLB1jFAm1eHvrvfxez1O+HL7+UZ+hgiEeOZeFVyknLqklgbuV0Qstq7IZxlpMkcDYbILG6AbQcpbKysldFRcUuk9CyLEKhEJ9++imjRo1iwIABtBrvr9frpbq6uqSlpaXY5ZK1CZ5pA53PuwS4zg2svF5vc58+ff6dk5OzfPTo0durq6t9mzZt6t3Q0HBYdXX1ccFgsDDVPtu7gBUOQ2Eh6tpr3TkhQD/4IPqhh0SjSFMSMB4P5Oai58wRwn/8ePQTT+wOhrYtIRZXXLG76dgerJqbsa+7DpYvF7Dqik0dcnPFDNY6tYh8relhWWQ4A5ZbqY8+SLzNhym2fovLd61IyZhUNka0aEspWY+42X0JVvAqJE7IybR63Fwr1bZgnmWJ0bLio0tt7bFlZWW0trZimTG9YsUKmpqaWLduHZmZmRQVFRGJRPB6vVRUVBwfCoXcXvxq3L28dZ0cgWGzKDiGvvTu3fvDyZMnX5aRkbGspaWFM888k1WrVrFy5Ur8fj9VVVV9Fy5c+Idt27adwT4sXkdT8NJLJfjRxczSzz+ffrCKBZu8PAGC//xnz6oITU2oGTPcuTVA//738O67kJ/fNWC1ixnJ7NTpBV4v+R4PgfhhEKuMllXkMBkv6QRgrTVaVq7D+HgR2ZW5qzUbr2nHaiT6Op4sNKDVpdbFunXrxre2th4xbNiwz2tra1m+fDnNzc14PB6UUmzcuJGcnByys7PRWrNkyRK3ahJNSL6mPwHgdEZakBSoMgdObud11103IxgMbly6dCmhUIhgMEgwGNz1u8fjqczLy1uyrwPWnigTCsHAgaiZM93BZOlSMdsyMtIPVrGSkbFnJYSodnX++e5t/OAD9PPPS4DrPixaa3p4PJT5HBWQGty3cf8eyQdn9mb3Ym9bjMbhND6u6eax+IHLMT9PoKV15F6O4BkOhzNeeeWV23Nycli+fDnV1dV4vd5YzopVq1ZRVFTE8uXLz12xYoVb339i3p8vAYXZGbFx8SSXlpYuamho2BgIBCgpKUFrzY4dO2hpaaFXr14MHTqUo48+mry8vL7s47In0rS0SIxRYaGzmdXYiH3TTRLy4N0LzoOWFtTYsWBy2uK2sakJ++675RmsfXu7RRtJfj7S3Zx80uU7P1KKJVF5kvHA20gaxs1RvAT+4nLOOQYQk5HzkZy1b3WiO9zacgSyJV0yMtaA/HWpNOLDDz88fdasWX+sqqry5+TkYFnWrvAGr9eLz+fjzTffPOn5559/OMGlXnCca7sPgU6teW4anNY6HAgEqK+v3wW48+fPZ+vWrTQ1NUWdCJkVFRUn7V+AFYlAcTHqtNPce+eZZ+CTT1Lja9KjksAppzhzV4B+7TUh2TtpqnWbKMV499pcryH1052kF1Le9j4kF68QcVMXItHdf0CSYKOk7G+QhFYM2G12MeOeQJKYncppH4Zk9M82QPECUgsrFfkv7qWNf47ELPV30SB/hVR7GIdUQL0plYbMmzfv8rlz5769Zs2aswOBQF/btrPC4XBeXV3dyIULF97xwgsvvBYIBNxKjO8wfdvlo8eNB9u+ffvogoKCUtu2aWpq2pVm5PF4CAQCNDU1sXjx4lt27NgxaF+fJt49NJdp06QMi5N2VVWF/vOfExe+6yqJRKBXL9GwnLSr1lb0Cy/sHgm/r4ttM6VHDzIti5b4PFbEmGfvupgzGcCV5rMVIbDzEE9iPLkDIbtvM4D0jMNxPnPMZcZkW49EbhciqScnIJUZdjF6SPT9IUj1iI6YPNoA6QIXreFSpATwu4bfazIc3FADUu09drOQCPef0kGvaHV19bi5c+eO8/v99R6PpwbIaGlpKdVaJ+Pmf8i8h64WH1KPPa6HtaGhoeShhx7628iRI38yaNCgxR6PR3s8HrTW3sbGxhEvvvjiL9avXz9zf5gme9pz09ypEP3KK7Bt297jhVpbUcOGQYlzapNevBi++KIt529/wCutGZKZyYScHN5qcHTKvW8mXzIVIEtdgCpWfmcm/WzgG0jlBicZYD7Jyh1IZYhHkzCLYmUxUu7GrZxOTzpWX+piA4b/QwpVUFtbW/No2xQiGfnCgHV3SAaS+L4YB4fFpk2bTti8efOC4uLi5bZt11qW5QmFQr3q6uqGJogh20cBKxKRMsZjxjhrLi0tUllzbwJBOAzRNjp5/ebOleP2F3MwZgZdXVLiBlgAv0W8QekqqPapGegguWw9kZ1W0iFfGs6MJACrvdZ4tzH7fpKmttQjFVUhcUxRLQkyABJIAEmLqe+m4WOZIXS3Gwdo27Zv27Zto9mPpW0AhUKoIUOgrMx5Un38MaxdKwGie0t8Pqmc4GYOLl68f5mD0f61bU7Oz2di4uDbHyO7yHTWu/Q6UmpmbcxEO8vFNOyIvItUF13V4bHYJj81XFtnn3M1shVastt+PWZ4sFSkymh+/01pHjqLJ4nzXwCeSrHd7+Puod3HACscFiBwCxR9/30Je9hbW3PZNuTkoPq6eF83boTNm/eO9zKxuCXlCgGhFL8sTcaS4yYDNgtTaMcWpMDb6XE4lgASgHg+qVXK3AFcb8BqY7vvMhOYNU4a5UnsWRYnKUsOIejHs2dYiFtbihHO7lKS37gCpJrpJOKXd3bzUCVT0sOtvbHXvsSYoh3xPD5htGq3xcW3L0wg727aSXm5s+Zi2+J125valYm/oqDAWUupqJACf3vLg5kGLevr+fmMy8lJVIEUY25NNCv6eWZiFjkc24zUBX8ZIcQT7dT8Z8QzeTZSqfRYnCPQm41pOcec5xSZP5+23Y/DtO1c7AE+dmnLOwYITke8jxNxrjIRNhNvLvA0ErQZzwL/iLZdlKO5fnkGGKLa0aPAf5DdY84EBse51jbgPWQPxNddnmERwv9FYjRGj5mDS5IYGouRjIbo+dqc70McFLvIHcQ58wqyn+NUc9/2C+VO069/QDaexSwwX7B7amt0kV25L8yPtk0ogkHUE0+I9629hhWtlDB9OtTW7j3tpbUVysuxXnxReLQ47dTPPy/VEjqb09g10oR41SpcdX+Ph9dqazl9TYfzYcto26q+hLZt0NeaAdeZBNs+5rqDzbUtc+0Ko4klq4352H279lQX2kPNBO5ntLNGA5SrzbO2JtkWHQNYmeZ/8bSqHCR8o78B7kakhtVqki8L42P3reajKUOhDp4f3f3ZMu840bMOR2qqFZt7bTJ9VOlyj/aWWGhfmEDeXZpLZiaq0IVnrKmRBN+9GYRp27K3oRs/VVfXtSk43aFlRSKcaris9xs75IWvMp/3uqBZm83n3U5eJ2QA5pcIsd0aM/mik+Vuc68sJMShZxyQCxrTZ0cn2xIrbp0dMFrO4jTeL9JBfs7p/AlGE7ZjtCIdc87tSNhDKvcgDRximgErdqt2p0nU0CC1p3x72ZRNtEV8Bzd+2BfFBjyWxXWlpR0FrP1FDkOcBk7ylgGskgTHrSA9DoL9Xb6BOCic5M0Ys2+/FivGDnHXXFpaRBNTe7nKRCLtyeM5IEagHYlwSn4+4/ZN0zYdEkmA2dFj3GI8wgdgv3hoC7tQMWYfCbQ/VzLlQOkcK2kg2BdEKXQwKDFjTpKbu/dBNR24jOQX3lhWhu8AeB4HQHJ7fEjMc+kDqE8ykU1elyIk/GKEqF9iPl/vRD8cMP20e+ComzkV3cRU670HCJYFDQ2i7TmZr8XF+3yyc0e0yQk5OfTyetkcCh1Ac3MXcZwqoB2IkonsD+gUTT8M2Tn7Ky1WVHOhpUVIdSflpkeP+J657gas+noBLad2HnKImLb6AFhULIuXdu5ky4EFVt1lVu6Pz+Jm/jYnADs38R8oneTdBQQtLeiaGuecheJiMbd27Nh7GoxlCahWVztH5A8aJHsCVlfvi8GjOlntwVKKpnCY31VVHVB2Txf054EkbqaLG49ViTgp7Hbjy2OAcMeB0kFtMzochi0u1XILClADBqC3bdt7QBDNZ1y1CnXkkfGPyc9HDR2KrqzcV6Pdk3tUy+Iv27ez4gDweh6UpK2dVDWBx5EcwvamdnTD2MCB1EltsmqVI5eCUrLZ6b5gnnz0kXM7QSpO2PsvDWIpRUskwu+3bTs4jb860oi71zPgvI4rWylVr5RqVEoFYj4NSqnAgdRJbSqIzydF+SKRNnK9vUyaBE8/vXeJd58P/emnqGDQkVNTkyejS0sliHQ/1LKUZfHnbdv4vKVDG6lkIaVFjkZSMXoiNaKCSO5gdIffpSmYUh5kn7vRtEW6Z5oJth2Jdl+OeLMa9rHu9CG7Ho9BsgD6IIGrdcA60x/zcd+ZKNn7HIWkMI1AIuJzkHrrG5FSyQvYsz5+kTm2D+7la8YBn5s5G410V0gqTRg4PEYJ8ZqfYfM+Ws1YyIoxE8NG+woiQaXJjokCJI5OOyhAnyAZHXEJG9M/R9C243jQmLRfmP75PGnA0mvWoDZtks0n4k2kMWPQhx4qmtjeKjHj88H69QKuxx4bX8sqLkZ9/evop5/e5+u5x9OumsJh7tqadN23Q5DCejOQdBU3sZGcvceRPLtE8Tn5SJmUC82kT2SyVCD5hw+TfGR1V0kB8EOkvPOIBMduAV4C7jUg1hEZgNTa+g6SAuMmGslTfBypqhBGAjpHkbjkzaXm014uR1Ku3nQ4b7N5505lq0Nmofskyef9A87VZNcj6VLt5QwzRicQf7OTqLQiFSMeQEI8XExCy4K6OvTChc7mlt+POvXUvRtNrhQEg+h//cv9sPPOkyTpyP7lSFKWxQu1tclyV5ebwXhDEmAVfd/HIUm97yHblDvJGchOPPcZzSoZfmUgUvrmQ6Rm/N4qnPZNs1rfkQRYgZRV/glS+eKiDmid15j+vzEJsMKA0vFI+Zp3gHOR7eI7Y654cSfkM5VSL+Hs7PGZ/kpGSpEEdCd5sZ2GfQjwVyQp/pQEYAXizZxKWxJ9kTuH5fHAm2+2AUO8Hv/2t2WX5b3JZWVmot96S3aZjtdOrWHQINSFF0rlhu6UToRTWErRnJx2lYuQrH8kuaqi8eR4pD5UvJ1ybzODZliK185F6li9YUyd7pQrjZaXStt7IVUXfpvguCLgH0hF1OIU2zkeqfee3cnnTaQlZyK1rty2gft2kgvS14AeLpra7Ji/jzKg/J0Un2smUqanvzNgZWaiFy2CFSucJ2NxMeqii6C5eS8yb17YuBH9t7+5L2ff/z6MGiWbsXaH5hcOS0WJFDVQZVn8tbaWL9y5qyxjvpyThlbnGNMwVtN6AElMTodMMeBR1E0j4wdGI+wswXoDUi/MyUx+FcnfSwsL0A39Uof7rktjSG57++ku3y1ASgxhtMbXkAoRnZHRZuHMi99ZSkEggH7xRfeJNXMmnHBC92ovTU27g2RGhuw5WF/vrGVlZ2PddJPs+NzVGmFzM5SWoh56SMzmhoYOj9qwbfNAdXWiQx8hfSWMMVpQ1D38K9JXkjh20D2Ly8alaZKxyKYP6ZI7EII4Xv+P24dYhAwSE+bZSH2snS5m5fQE1yjBfRu5x2La8yzQN43j587YhrZbv7PQr72G+t73YODAPU0cw2VZs2Zhf+97EsjZleWItZbdfGbOhJoa9BtvSACr3w/r1qGfew512WXO544YgXXzzdjXXCMaUFd4DYNB6NED6/bb4eijYdw4aG6WtuYlt2+BsiyWBQIscdcGzye5PQI3IgR4M0I+DyV+8b23kLIkAaNlJdwOKzs7e0NhYeHqpqam2uzs7IK6urpDGxsb+yc47RRke667umiU+IAHcYnozs/PX9qnT5/nhg4d+rlSSldVVQ1dvXr1Odu3bx/rwqfcA5wYw/+ck6RmuwEh75uREjrDiL9F2mqjfUbrcCUanE1xOLHGJDTKaI2v18wYctKebnPhuk7GuYDjNnPtqEl+vDObk7mjvLz82T59+nxQUFBQv3bt2pLt27d/fcOGDWdrrZ3e3w+NuTlvzw7yeKC2Fv3YY6hbb41fMllrOPRQ1G23oa+8UrSXrig7ozU0NKAuvhh1ww1CoGdloV96SYAgOxv91FOob3xDPJvx+COzh6EKBKSwX2tregG2uVmCau+/X8DKlOpRd98NXi/6H/8QT2WiMBCleLuhwS0MPg/Z4cZNvkB21XmT3TdA6Id4+n5FWzndj2PAyot4yBwnTI8ePVaNGjXqN717934jPz+/ftmyZYwePZqmpqa8ioqKby5fvvx/d+7c6WZW/AYhZdd3AWCdh/P29owdO/bOsrKyWcFgMDhw4ECUUpSUlLw+YMCABzZs2HDDggULbnY4dQJSnvlNo6Uk4rZWAL9Gcv5iVez+SPXPa2P6fzFwaszffZESy3kuGt/D7cBJKaU2IdVQEwwvhdb6KRfAGoV4+Ja5cEpOEtXeytzohJKSkoVTp079Xl5e3iqAgoICQqEQgwYNmj1mzJhH33nnnRdra2vjcbIK+AUwz3JYRmWiffyxK5ioKVPaQK01zRUsbFvA6rzzUNdfvwtM1W9/izrnHDEFPR7YuRP71lvdS99ojTrrLNS99wrQpaPGlG1LG4YMwXr0UdRxx7UBZhS07rgD9Z3vJGc6a52oJPKFBnjcOIQTDb9VH0fj+q0xJbeZ1X96jIlwCrK3YFwpLy//YObMmRMHDBjwgs/nqw+Hw9i2TTgcxuPx1A8aNOgv559//sThw4e/7dK+Hmb1TesoMT8ddxCaOnXq7Kuuuuq67OzsoNYaj8eza/fjzMxM+5prrrnl5JNPfszlHt83P0833Ewy/d8QR+P6X4S03mr+PhMptrjOfBbgnkLzhdGa18V81iKke7Kc3QfITkbxxAM47aDcx4C3kzwTYwHErQJaVFRUeffdd08fPXr0qmAwiGVZWCbFLxKJMG3atPcuvfTSiyzLclqzvwYMjA9YlgXhMPbvfieTzQ0ITj9dtIuCgvQAQdTEam1F/eQnqJtukvZoLR+vV0DrwguFJ8rKgrffRj/2WGKz62tfw5o9GzV5srS1Y4GZbWDU1CS7DM2ciTV7Nhx5pKPprG67DXXxxa73spSi1bZZ4XyMZbQIXFTyGUAiAux9o66fyO4bRHzf6YSCgoJts2bN+u7EiRO3aq0Jh8PtcNumubmZUaNGVd9yyy0zysrK1iQwaXNJX7ndIBKMeLSD+VF37LHHXl9ZWcmgQYOYMWMGp512GlOnTqVfv36Ul5dTVVXF+PHjb8zKynLidyYbLchtv8YdRgNJ5N6dZ/ivyey5QUc27hs9ZMbTmlLorz+7fP9tB/D7Bs7ewUVIOIjCxSN40kkn3Q5s1lozePBgzjjjDKZNm8axxx7L4Ycfjt/vZ9SoUXPHjBnzqgsPN83ZQ5GZCZ9+ir7vvoQTWE2ZgvX006hx4wQIUtW2IhEBod69Uffcg7ryyrbJHwsESqF+8xvUj34k52Rnox96CP3vf7uCK1pDeTnqkUdQt98Ow4aJSdfYKGZtvHQereX/waC0zbZREyagHn8cdfPNAtROoQzRjIDevV1ThRRQH4mwzdkx0M+o7E7yMFKnOxmpaDdZipANHuLKtGnT/tizZ89NGRkZHGsCdaNbnUd/DhgwgObmZmpqarZPnTrVjQfrZe6VLhdzqyGClYNm+Obw4cMrc3Jy8Hq9lJWVUVhYSH5+PjmmPFEwGCQ/P39LeXm5U0XOUmO6jUlAOFck2ea1xA9OTVSoz+okWEXlWZzTfEYSP57srATXs43ZO8qB96wdP3787MzMTILBIHl5efTs2ZP8/Hzy8/PJzMxk+/bt7Ny5k4EDB7p5M8e7k3y5uejZs+Hww1HTp7tPzPJy1JNPwssvo598EtasEc0oI0N+OnWwbQvAhUKyket550k4QnHxnmDVHrROPVWi2c119PXXox5+WDZaTQAiavp01GmnoefPh7fekj0Xq6sFwGy7DWy8XsjOlucbNw510kkSKhF7PQdOCkD//e/oe+5x39RVKXaEwzQ6g9oQnEuIhI0ZkqoMxSHswOPxhIcMGfLyunXrCIVC+P1+ysvLqa6uRmuNbdv07NmTgoICampqsCyLAQMGvJqTk7M1EAg4xYcd78KTdFQsxIsUV+rq6nzLly+f6vF4vBUVFRYQ6dmzp25ububLL7/0hMNhVVhYqFetWhVqampyS4m4DOd4t5CZtJ0V1y3g0igVSHzTmQ7k/GlImhUx3JqTObiTts1phzqNUZ/PF3zrrbfGHXnkkaGKigpvdna2tm07opRi5cqVnsbGRpWRkUFDQ0No0aJFwwzfFu9Sw72JiGD8fvRvfyvxV5MmuQOBZaHOPht1yikSif7Pf6KXL5cAz1Bo9xxErYWDys2Fww5DTZ6MOu006NfPHQii7dq8Gfvaa+W6fr+Q/oEA9pVXou6/v20HayfAAzHZJk+GyZNRgQBUVko1ih075LqZmdCrF6q0FPr23d3DmKh9UbD6zW/azGwXadHazU5yC77cRPKblcaTwc7rVe7GUCi0etOmTbsGkMfjISMjg0gksktjsW0bjylNnZ2dXXfIIYcsW7FixckuABnNh+useHFxn2/atOnMO++888w03Geyi/azgfRtgeWmNnW6v2KA4GkXov4sxJsbTRH5uos5+JqhI0CyHJwWjrJXX3319VdffbWzj1Cc2Mfv9UIohL7mGrj/ftQJJyQGgh49RCObPh1VVYVes0Z2jN66VTQYnw+KimDgQFR5uYRPRCd0okhxpaCyEvvHP4bPPxfAi56TmQk7dqAvuwxuuw01bZr7xrCx/8/JgaFDUUOHuvNXiUeFHPrEE+h775XnSiKUosm2iThf322TxRokwTblQeDCX9UMGDCgRWu924oXNQEXLFhA++88Hg87d+50KzNRSOIa5cmKj8TpHukQt/ZuJz010xOVl0k1xyxeDbY3DdDGC0cZY8zCaG7hDJdrPx07XLrhPeQkF5Tk80FTE/qnP4Wbb5YwgmSAQCkoK0OVlcH48YnJ7GSA4JNP0NdeCxUVu4NV9BoZGdLWq66Cyy5D/fCHztUnOgpGSbSP2lr0XXehX35ZADTJTTEylNpVvMjB7EiK20iFOXRkaIPBjJqaGqWU0lFQUkph2zYZGRkUFxdjWRZ2jCnr9XpZu3atlYD4TVftH5u9X3U0nbuedFcJlCZjyv3SYTx9ywDWQBd+80t2306uO96DP/koSr9fiuf94hdQUSHBmm6glQ4QaA9Wc+agb7tNyO+cHOfr+/0QiQh39NFHqF/8Ag4/PL1tag9UgH77bfRdd0k1iw5uhpFpWXiVojV++9y8T72R2J36FJ9gi4sq36+pqalXbm7uNtu2sSwLpRSVlbL/ZklJCWVlZXg8HrTWKKXweDx89NFHh7jcbz3p2+0mTMe2ku8K6WO0vM66yBOBb7q3g3oauJr4nskzkDCYb7ho90+10yy3dkNfdzDs2+cTcvvee2HZMgGC6Pb2XVFDPTrhq6rQDzwguYNer2guyWz31aMHev589AUXoM49V6Lle/dOD6DGgtFnn4kJ+Oabcs2OlrTRmnyPhyxnwNpoBnQ8zaUUCZr8T4pPspq22kq7SXNzc8GOHTsmDB069JUWE3KxZs0atm/fTklJCXV1dQSDQYYMGbIr3KGurq50y5Ytbh7NZU73SxGw1ia4111x+k3FAYD25YU1bVu2jwSud1kwxtL1+/6pTpxnuWhI0+J8d5ThNp2qOASQxO1YcQtnaUWCZrfTVqur/Xt0MmU9MeZ/ZcfzVCxLvIdvv41euhR14YVSyiU2BSVd5lVzM/qVVyTGavNm0ao66s7NzobWVvQjj6DnzEGdeirqzDMlpKH9tZIg0tteQaskir/4IvrddyVeLTs75cKGeR4PBV4vdfFDQtYiRc76OQzIKzoBWKuM1hOXNP3vf//74+nTp78SiUT49NNP2bx5M15vdCsAi0AgwLp16zjiiCPo1asXL7744syWlpZ8F/PzXZLfFMFKYqK6VSHIxT3uKFn5CxIH19+h/3+aBsBKut6/DFXdmdCGWC0rHmB5jYbllGIT5cBiZaUBpGIH7XA+UkCy00RfivRXjnBF996Lfc456EcfBWMqoFTbJ1mAiv1s3YqePRv73HPRN98MNTWd228w6o2sq0M/+ST2zJnoiy4SEFu8WK4frx2xn3AYNm9Gv/ce+s475Zl/8AP0669LGEQqYBpd2rUmx7Lo7ZzeFMB9i/jpuAeWxspIYwp4YvgMx+2jli9fPmXu3Lk/ra6uZu3atfjatdGyLOrq6mSZDIeHzZs373qXe79vNLrMJNuqEgBWJhK97ZSAWY5UcOjQEufwf7cCbKeTXI5ntP+viaPh6QQmYUY80Oq4LrBbd8Z6+drLd5G4OSdzsL3sQAJjnczZmzvY1LihNp3LBPZ6BQg2bkTffbfk9U2YACeeiDrqKDG/ktlhR2sx+z75BN57D/3ee+JR9Pmc9x/sTHttWwoVzp8vJXV69pTtwfr2hZISOcZE+1NXJ23btEm0vLq6ttxJvz8teYnaTPwjs7L40Dk95ymc88AUUsVS0xYX4wRsj5hV8DAkqRTgCfN7XHD405/+dO/EiROtww8//L5IJEIoFNqVWqGUIiMjg4ULF4554403nq+vr+/lcv8/dNK82YOtRGKB3sK5oubvkLzJJQmuVYIEgB6KuPa/iKON/I/L+Y+a53rG5ZgzzHEl5j6XttM+3bi9eEnaXq11hlIqVZOmFinf8sMOnFPhok0+Z54xnpyC5LL+Lol7/Ay4DsmL3S2FRYVHj95OuuoVRSKSgqIU9OwJ/fujBg2SsIWiIgEfr1eAoKlJNJv169Fr18LGjbB9e5unr7tqsWst7Q6H5Wc0Ij5W+7Ms0dK8Xvcg2MQSQOpZb9hTCfTwVHU1F69f76Zt/Bv3Eh8gtZqeQ2qV70SqBIwxGlj7XLEHjTmDMZ1murLLffq8O2jQoKdzcnL+W1ZWVtPY2Ji5c+fOoZs3bz5z1apVF0YiEbdidPORlKCw6YNlLgvmybQVb/scqdsVT2YgFS0nGA3UaXXcjiQl/wWpDdUeqM40EyQak1Zprj2/Xf//y8GEcur/WsTdP9osNu37/4+05UFmIPWknCrH2gY0PzAay1Akv+42pVQDkjgdT5qQMIUKB83sOCSPMVlr6w6cE5yzjNnnVn31KXONL+NokBMNWJ0a8/9fA7fGAlYFUpc6vRIFgXBYTKboRI96FqMpL1Ew8PmSDgHYj2Wn0Wz2UMM9SrGipYVRX3xB0FnVP9oMrmRKY7QiKTCZuJcq/iNwlVm0FpNEBVPLssJ+vz8QiUR8oVAomYqZIaTCZpTDSARYpxgzNVnAimpAFyRox0ZzvS1m0g9ANm+IpxU2GHPyRdqCNo9C8ub8SfZ/k5nEifr/aiSWboGDJuUm3zWA9VqKgIV5puOSfKaj4mifsfJNF/CMbdMi8y5akFLKI3AuIvhHA5INFl1T7kPAJyNDtKoePeRndrYkK2dn7/7/DsQr7edShYMbXmvNoZmZjMp2nf+LzOBO1lzKJ3Fd9SuMCbTZTPiEQai2bXtbWlrykwQrkFpYHSFcVQzH6qbOxgLe1ThXIohKPyRy+yLDOU1y4Wl6GI0s1tGxlOSrsfqNdpVM/0eDM79IhQJNg4n9TJLHvZdEG19HqtYm4gknGpP4SjP+DkvQR9+PDogFHJTukqU4BIHahsc6p7Aw0TUeTIHAdJN/0UYov4lsjJDOrbpujeGu6CCH1ZGJuB2pNpDOBfgGYx7Gyr3EVMBMg8w1kxzgb10w5vYIa4jjXXyF5OL4nk7ynlcbzTRd8pZZPLBcVMmDkn75WyI+7fS8PDISc2Q3Igm5dZ1sz+MISRpblubvhqf5byev3YKUW/51PKuS9BDv7a/xpWn7B528biOyddfviO+5u86Y0c1p6P9vG7AFKVf9Tgev4U+hn9rLliTMuG0dwIowwofenYZ3/KQZo1tjNawPD2JJl8vKRINC2zaDMzIYkZWVzPUeQcjml+h45PgKYxL9wGHSfYQQ5FeTWmL1W4hzwKnGeqJSKt6YieZmdsYzt9YgVUJ/hUsUfwKTZhLxXfftNa1J5p121Eu3Oqb/W9pN9PPZnexPxCltTmB2ZiW5ODye4Ps5ONeEjycRpEroqQhHlsp8uQDxzO4KW1Hh0aMxg/M/dE95i6+qnJ7MCuXxePifdet4sqZDGxEfbXiQryOlaHIcVshFwAvAyySfSpJjrvtNJJCwH3vWJ29FPJ/vGdX9XwmuWYy4q/ONiRwxAOY1k/YnZsBmIYTrQDOxQ2aMRuO4rsJ9A9ASJJTj20j8U1mcY5oQQvptY8a8l8K7Pd7wMNNM/8crc7zDUAJ/Me/AzQTLNBreDKRscVE77W+NMSX/opRaat7/Heb7EG0R4hkG0C5t/77jEO8+YwEcad5HlBvzI7zrd0i9KoXHjKEZSAHDAXE0Q23ausgswnPiURNRwIqqubcfxJUuETdX8B6A9ZtNm/htVVUq97HMYBiMpIz4zUvfaDSlzm7H7kG8iH3NJMqKuf56Olc1oqulEKlO2gch1CPGFF5vwDZd+Y2HmP7vY7TDZsODrUScLh2VErNI9DD9uxkpKWQ78FFJiUPQaVSj1TGA5UES1tNVJTbTjNH+ZuGyjOZWiWR0uHJp3naTygPcclDTSqvcggTAJY8Kqcd52bTV++4KiZgJs3k/fA+15rO4i++zieSrvyYj23CORk+3aJyrkaZLWgwlsSLVFTlWfodkaC/koHRWliABibNSGTUH5aAcFHcNKypvIqTpNIQwO97Y/rkHNS9XjGlGPBmLECL2jTSq0QfloBwU4P8PAK1mnXdTkJyCAAAAAElFTkSuQmCC";

// app/routes/_auth.user.order.$id.invoice._index.tsx
async function loader4({ request, params }) {
  var _a;
  let orderId = params.id;
  if (!orderId)
    return new Error();
  let orderSummary2 = await order_service_default.orderSummary(orderId), template = {
    basePdf: import_common2.BLANK_PDF,
    schemas: [
      {
        brandname: {
          type: "text",
          position: {
            x: 25,
            y: 26
          },
          width: 108.2,
          height: 9.38,
          fontSize: 12,
          fontColor: "#000000"
        },
        brandlogo: {
          type: "image",
          content: brandLogoBase64,
          position: {
            x: 149.22,
            y: 14.28
          },
          width: 40,
          height: 40
        },
        address: {
          type: "text",
          content: `02 - VASANTHA TOWERS, COCONUT garden layout,
Krishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036`,
          position: {
            x: 25,
            y: 35
          },
          width: 107.71,
          height: 13.71,
          fontSize: 10,
          fontColor: "#999999"
        },
        gstNo: {
          type: "text",
          content: "GST: ",
          position: {
            x: 25,
            y: 45
          },
          width: 107.71,
          height: 13.71,
          fontSize: 10,
          fontColor: "#000000"
        },
        invoice: {
          type: "text",
          content: "Invoice",
          position: {
            x: 25,
            y: 70
          },
          width: 85,
          height: 10,
          fontSize: 14,
          fontColor: "#000000"
        },
        date: {
          type: "text",
          content: "-",
          position: {
            x: 25,
            y: 80
          },
          width: 45,
          height: 10,
          fontSize: 10,
          fontColor: "#000000"
        },
        field4: {
          type: "text",
          content: "Description",
          position: {
            x: 25,
            y: 104
          },
          width: 45,
          height: 10,
          fontSize: 11,
          fontColor: "#000000"
        },
        field5: {
          type: "text",
          content: "Amount (INR)",
          position: {
            x: 135,
            y: 104
          },
          width: 50,
          height: 10,
          alignment: "right",
          fontSize: 11,
          fontColor: "#000000"
        }
      }
    ]
  }, inputs = [{
    brandname: "Celebria Collective Private Limited",
    brandlogo: brandLogoBase64,
    address: `02 - VASANTHA TOWERS, COCONUT garden layout,
Krishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036`,
    field4: "Description",
    field5: "Amount (INR)",
    gstNo: "GST: ",
    date: "Date: " + ((_a = orderSummary2.BookingPayments[0]) != null && _a.updated_at ? DateFormatter.short(orderSummary2.BookingPayments[0].updated_at || "") : "-"),
    invoice: "Invoice #" + orderId,
    subTotalLabel: "Sub Total",
    totalLabel: "Total",
    discountLabel: "Discount",
    additionalDiscountLabel: "Additional Promo",
    taxLabel: "Tax",
    subTotal: "0",
    total: "0",
    discount: "0",
    additionalDiscount: "0",
    tax: "0"
  }], lastRowPos = 110, NEXT_ROW_GAP = 6;
  orderSummary2.bookingService.forEach((item, i) => {
    lastRowPos += NEXT_ROW_GAP;
    let newField = {
      ["item" + i]: {
        type: "text",
        position: {
          x: 25,
          y: lastRowPos
        },
        width: 50,
        height: 10,
        fontSize: 10,
        fontColor: "#000000"
      },
      ["value" + i]: {
        type: "text",
        position: {
          x: 135,
          y: lastRowPos
        },
        width: 50,
        height: 10,
        alignment: "right",
        fontSize: 10,
        fontColor: "#000000"
      }
    };
    template.schemas[0] = { ...template.schemas[0], ...newField }, inputs[0] = {
      ...inputs[0],
      ["item" + i]: item.vendorServiceGroup.group.name,
      ["value" + i]: item.cost.toLocaleString()
    };
  }), lastRowPos += NEXT_ROW_GAP;
  let items = [
    { key: "subTotalLabel", value: "subTotal" },
    { key: "discountLabel", value: "discount" },
    { key: "additionalDiscountLabel", value: "additionalDiscount" },
    { key: "taxLabel", value: "tax" },
    { key: "totalLabel", value: "total" }
  ];
  orderSummary2.paymentMode, import_client6.BookingPaymentMode.FULL, items.forEach((item, index) => {
    lastRowPos += NEXT_ROW_GAP, template.schemas[0][item.key] = {
      type: "text",
      position: {
        x: 25,
        y: lastRowPos
      },
      width: 50,
      height: 10,
      fontSize: index === items.length - 1 ? 12 : 10,
      fontColor: "#000000"
    }, template.schemas[0][item.value] = {
      type: "text",
      position: {
        x: 135,
        y: lastRowPos
      },
      width: 50,
      height: 10,
      alignment: "right",
      fontSize: index === items.length - 1 ? 12 : 10,
      fontColor: "#000000"
    };
  }), inputs[0].subTotal = orderSummary2.subTotal.toLocaleString(), inputs[0].total = orderSummary2.total.toLocaleString(), inputs[0].discount = "-" + orderSummary2.discount.toLocaleString(), inputs[0].additionalDiscount = "-" + Math.round(orderSummary2.subTotal * common_data_default.FULL_PAYMENT_DISCOUNT / 100).toLocaleString(), inputs[0].tax = orderSummary2.tax.toLocaleString();
  let pdf = await (0, import_generator.generate)({ template, plugins: { text: import_schemas.text, image: import_schemas.image }, inputs }), blob = new Blob([pdf.buffer], { type: "application/pdf" }), headers = new Headers({ "Content-Type": "application/pdf" });
  return new Response(blob, { status: 200, headers });
}

// app/routes/_auth.vendor.manage.$orderId._index.tsx
var auth_vendor_manage_orderId_index_exports = {};
__export(auth_vendor_manage_orderId_index_exports, {
  action: () => action,
  default: () => auth_vendor_manage_orderId_index_default,
  loader: () => loader5
});
var import_core14 = require("@mantine/core"), import_client7 = require("@prisma/client"), import_react22 = require("@remix-run/react"), import_icons_react7 = require("@tabler/icons-react"), import_react23 = require("react"), import_ChatBox2 = __toESM(require_ChatBox());
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function getAssociatedVendorIdByUser(userId) {
  let user = await db.user.findFirstOrThrow({
    select: {
      username: !0
    },
    where: {
      id: userId
    }
  });
  return (await db.vendor.findMany({
    where: {
      mobileNumber: user.username
    },
    select: {
      id: !0
    }
  })).map((x) => x.id);
}
async function action(args) {
  var _a;
  let userId = (await getSession(
    args.request.headers.get("Cookie")
  )).get(USER_SESSION_KEY), orderId = args.params.orderId;
  if (!userId || !orderId)
    throw new Response("Page not found", {
      status: 404
    });
  let formData = await args.request.formData(), orderStatus = formData.get("orderStatus"), bookingServiceId = (_a = formData.get("bookingServiceId")) == null ? void 0 : _a.toString();
  if (!bookingServiceId)
    return !1;
  switch (orderStatus) {
    case import_client7.BookingStatus.ACCEPTED:
      await order_service_default.vendorAcceptOrder({
        id: bookingServiceId
      });
      break;
    case import_client7.BookingStatus.REJECTED:
      await order_service_default.vendorRejectOrder({
        id: bookingServiceId
      });
      break;
  }
  return !0;
}
async function loaderResponse(userId, orderId) {
  let vendorIds = await getAssociatedVendorIdByUser(userId), orderData = await db.bookingService.findMany({
    where: {
      Booking: {
        orderId
      },
      vendorServiceGroup: {
        vendorId: {
          in: vendorIds
        }
      }
    },
    select: {
      id: !0,
      date: !0,
      timeHour: !0,
      status: !0,
      originalCost: !0,
      cost: !0,
      vendorServiceGroup: {
        select: {
          vendorId: !0,
          group: {
            select: {
              name: !0,
              imageName: !0
            }
          }
        }
      },
      Booking: {
        select: {
          orderId: !0
        }
      }
    }
  }), chatGroup = await chat_service_default.getChatgroupByOrderId(orderId, userId);
  return { orderData, chatGroup };
}
async function loader5(args) {
  let userId = (await getSession(
    args.request.headers.get("Cookie")
  )).get(USER_SESSION_KEY), orderId = args.params.orderId;
  if (!userId)
    return null;
  if (!orderId)
    throw new Response("Page not found", {
      status: 404
    });
  return await loaderResponse(userId, orderId);
}
var Page2 = {
  Index: () => {
    var _a;
    let { orderData, chatGroup } = (0, import_react22.useLoaderData)(), navigation = (0, import_react22.useNavigation)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 5, c: "gray", children: "Manage Booking" }, void 0, !1, {
        fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: { base: 12, md: 8 }, children: orderData.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid, { align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Avatar, { variant: "filled", radius: "md", size: "lg", src: PATH.THUMB_URL + service.vendorServiceGroup.group.imageName }, void 0, !1, {
              fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
              lineNumber: 152,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
              lineNumber: 151,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: "auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Group, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 5, children: service.vendorServiceGroup.group.name }, void 0, !1, {
                  fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                  lineNumber: 156,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Badge, { children: service.status }, void 0, !1, {
                  fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                  lineNumber: 157,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                lineNumber: 155,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { children: [
                "Date: ",
                service.date ? DateFormatter.short(service.date) : "To be notified"
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                lineNumber: 159,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { children: [
                "Time: ",
                service.date ? DateFormatter.timeHourTo12Hrs(service.timeHour) : "-"
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                lineNumber: 160,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { children: [
                "Cost: ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(currency_transformer_default, { value: service.cost }, void 0, !1, {
                  fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                  lineNumber: 161,
                  columnNumber: 45
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                lineNumber: 161,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
              lineNumber: 154,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
            lineNumber: 150,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
            lineNumber: 149,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Alert, { variant: "outline", color: "yellow", title: "RSVP your availability", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_icons_react7.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
            lineNumber: 165,
            columnNumber: 98
          }, this), children: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
              lineNumber: 167,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Box, { pos: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.LoadingOverlay, { visible: navigation.state !== "idle", zIndex: 1e3, overlayProps: { radius: "sm", blur: 2 } }, void 0, !1, {
                fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, this),
              service.status === import_client7.BookingStatus.PENDING ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Form, { action: "", method: "post", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "bookingServiceId", value: service.id }, void 0, !1, {
                  fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                  lineNumber: 171,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Group, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Button, { type: "submit", name: "orderStatus", value: import_client7.BookingStatus.ACCEPTED, variant: "filled", color: "green", children: "Accept" }, void 0, !1, {
                    fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                    lineNumber: 173,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Button, { type: "submit", name: "orderStatus", value: import_client7.BookingStatus.REJECTED, variant: "outline", color: "red", children: "Decline" }, void 0, !1, {
                    fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                    lineNumber: 174,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                  lineNumber: 172,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
                lineNumber: 170,
                columnNumber: 67
              }, this) : "Thank you for your update."
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
              lineNumber: 168,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
            lineNumber: 165,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Space, { h: "lg" }, void 0, !1, {
            fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
            lineNumber: 179,
            columnNumber: 21
          }, this),
          service.status === import_client7.BookingStatus.ACCEPTED ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Page2.StartService, {}, void 0, !1, {
            fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
            lineNumber: 180,
            columnNumber: 65
          }, this) : ""
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
          lineNumber: 148,
          columnNumber: 47
        }, this)) }, void 0, !1, {
          fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Page2.ChatSection, { chatGroupId: (chatGroup == null ? void 0 : chatGroup.id) || "", memberId: ((_a = chatGroup == null ? void 0 : chatGroup.ChatGroupMember[0]) == null ? void 0 : _a.id) || "", isDisabled: (chatGroup == null ? void 0 : chatGroup.isDisabled) || !1 }, void 0, !1, {
          fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
          lineNumber: 184,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
          lineNumber: 183,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 142,
      columnNumber: 16
    }, this);
  },
  ChatSection: (props) => {
    let [pageReady, setPageReady] = (0, import_react23.useState)(!1);
    return (0, import_react23.useEffect)(() => {
      setPageReady(!0);
    }, []), pageReady ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_ChatBox2.ChatBox, { title: "Chat with customer", chatGroupId: props.chatGroupId, memberId: props.memberId, disabled: props.isDisabled }, void 0, !1, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 194,
      columnNumber: 27
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, {}, void 0, !1, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 194,
      columnNumber: 152
    }, this);
  },
  StartService: () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Card, { withBorder: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Title, { order: 5, children: "Start Service" }, void 0, !1, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 198,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Space, { h: "sm" }, void 0, !1, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 199,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Text, { children: "Enter customer OTP to begin service." }, void 0, !1, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 200,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Space, { h: "sm" }, void 0, !1, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 201,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.PinInput, {}, void 0, !1, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 202,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Space, { h: "lg" }, void 0, !1, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 203,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Button, { variant: "outline", size: "xs", children: "Resend OTP" }, void 0, !1, {
        fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
        lineNumber: 205,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core14.Button, { size: "xs", children: "Verify & Start Service" }, void 0, !1, {
        fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
        lineNumber: 206,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
      lineNumber: 204,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.vendor.manage.$orderId._index.tsx",
    lineNumber: 197,
    columnNumber: 16
  }, this)
}, auth_vendor_manage_orderId_index_default = Page2.Index;

// app/routes/cart.package.$vendorGroupId._index.tsx
var cart_package_vendorGroupId_index_exports = {};
__export(cart_package_vendorGroupId_index_exports, {
  default: () => cart_package_vendorGroupId_index_default,
  loader: () => loader6,
  meta: () => meta2
});
var import_core15 = require("@mantine/core"), import_client8 = require("@prisma/client"), import_node5 = require("@remix-run/node"), import_react24 = require("@remix-run/react"), import_react25 = require("react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), PACKAGE_MIN_SERVICE_COUNT = common_data_default.MAKE_YOUR_PACKAGE_MIN_SERVICE_COUNT, meta2 = page_meta_default({
  title: "Make Your Own Package"
});
function loader6(args) {
  let vendorGroupId = args.params.vendorGroupId;
  if (!vendorGroupId)
    throw new Response("Page not found", {
      status: 404
    });
  let data = VendorQuery.getServicesByGroupType(vendorGroupId);
  return (0, import_node5.defer)({ services: data, preSelectedServices: [vendorGroupId] });
}
var Page3 = {
  Index: function() {
    let data = (0, import_react24.useLoaderData)(), [selectedServices, setSelectedService] = (0, import_react25.useState)([]);
    function updateSelection(service) {
      let filtered = [...selectedServices], foundIndex = filtered.findIndex((x) => x.id === service.id);
      foundIndex > -1 ? filtered.splice(foundIndex, 1) : filtered.push(service), setSelectedService(filtered);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react25.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
      lineNumber: 52,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Await, { resolve: data.services, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Title, { order: 3, children: "Make your own package" }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 55,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Title, { order: 5, children: [
        "Choose atleast ",
        common_data_default.MAKE_YOUR_PACKAGE_MIN_SERVICE_COUNT,
        " services to continue."
      ] }, void 0, !0, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 58,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid, { gutter: { base: "md", md: "xl" }, children: response == null ? void 0 : response.map(
        (item) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Card, { style: { cursor: "pointer" }, onClick: () => updateSelection(item), radius: "md", withBorder: !0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Card.Section, { pos: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Box, { pos: "absolute", right: 20, top: 20, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Checkbox, { color: "green", size: "lg", checked: !!selectedServices.find((x) => x.id === item.id) }, void 0, !1, {
                fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                lineNumber: 64,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                lineNumber: 63,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Image, { height: 100, src: item.group.imageName }, void 0, !1, {
                fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                lineNumber: 66,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                import_core15.Overlay,
                {
                  gradient: "linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",
                  opacity: 0.85,
                  zIndex: 0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                  lineNumber: 67,
                  columnNumber: 37
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 62,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 73,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Title, { order: 5, children: item.group.name }, void 0, !1, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 74,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 75,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Title, { order: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(currency_transformer_default, { discountType: import_client8.DiscountType.PERCENTAGE, discountValue: 15, value: item.cost }, void 0, !1, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 76,
              columnNumber: 50
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 76,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 77,
              columnNumber: 33
            }, this),
            item.vendorService.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Popover, { disabled: !0, width: 200, position: "bottom", withArrow: !0, shadow: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Popover.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Pill, { styles: { label: { margin: "auto" } }, ta: "center", style: { cursor: "pointer" }, children: [
                (_a = item.vendorService[0]) == null ? void 0 : _a.service.name,
                " & ",
                item.vendorService.length - 1,
                " features"
              ] }, void 0, !0, {
                fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                lineNumber: 80,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                lineNumber: 79,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Popover.Dropdown, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { fw: "bold", children: "Available Services:" }, void 0, !1, {
                  fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                  lineNumber: 83,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.List, { children: item.vendorService.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.ListItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { size: "sm", children: s.service.name }, void 0, !1, {
                  fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                  lineNumber: 85,
                  columnNumber: 105
                }, this) }, s.service.name, !1, {
                  fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                  lineNumber: 85,
                  columnNumber: 74
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                  lineNumber: 84,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
                lineNumber: 82,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 78,
              columnNumber: 61
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: 22 }, void 0, !1, {
              fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
              lineNumber: 88,
              columnNumber: 45
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
            lineNumber: 61,
            columnNumber: 29
          }, this) }, item.groupId, !1, {
            fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
            lineNumber: 60,
            columnNumber: 48
          }, this);
        }
      ) }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 93,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Page3.SummaryBar, { packageId: "CUSTOM", discountType: import_client8.DiscountType.PERCENTAGE, discountValue: common_data_default.MAKE_YOUR_PACKAGE_MAX_DISCOUNT_VALUE, services: selectedServices }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 94,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
      lineNumber: 54,
      columnNumber: 34
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
      lineNumber: 51,
      columnNumber: 16
    }, this);
  },
  SummaryBar: function({ packageId, services, discountType, discountValue }) {
    var _a;
    let [totalCost, setCost] = (0, import_react25.useState)(0), submit = (0, import_react24.useSubmit)(), navigation = (0, import_react24.useNavigation)(), location2 = (0, import_react24.useLocation)();
    (0, import_react25.useEffect)(() => {
      let sum = services.reduce((s, x) => s + x.cost, 0);
      setCost(sum);
    }, [services]);
    function getInputParams() {
      return (services == null ? void 0 : services.map((x) => ({
        vendorServiceGroupId: x.id,
        date: "",
        timeHour: 0,
        duration: 1,
        services: [],
        location: "",
        locationLat: 0,
        locationLon: 0
      }))) || [];
    }
    function expresCheckout() {
      let input = getInputParams();
      submit({ cart: JSON.stringify(input), packageId, redirectUrl: location2.pathname }, {
        action: "/order/checkout",
        method: "post"
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Box, { pos: "sticky", bottom: 20, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Card, { withBorder: !0, shadow: "md", bg: "yellow.0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid, { align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: "content", visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Avatar.Group, { children: services.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Avatar, { src: item.group.imageName }, item.groupId, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 139,
        columnNumber: 46
      }, this)) }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 138,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 137,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: "auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Title, { order: 4, children: services.length < 3 ? "Choose atleast " + PACKAGE_MIN_SERVICE_COUNT + " service" : "You have selected:" }, void 0, !1, {
          fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
          lineNumber: 143,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Text, { children: [
          (_a = services[0]) == null ? void 0 : _a.group.name,
          " ",
          services.length > 1 ? "+ " + (services.length - 1) + " services" : ""
        ] }, void 0, !0, {
          fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
          lineNumber: 144,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 142,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: 12, hiddenFrom: "md" }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 146,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: { base: "auto", md: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Title, { order: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(currency_transformer_default, { value: totalCost, discountType, discountValue }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 149,
        columnNumber: 43
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 149,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 148,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Divider, { orientation: "vertical", h: 40 }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 152,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 151,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core15.Button, { disabled: services.length < PACKAGE_MIN_SERVICE_COUNT, loading: ["loading", "submitting"].includes(navigation.state), type: "submit", onClick: expresCheckout, children: "Proceed to payment" }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 155,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
        lineNumber: 154,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
      lineNumber: 136,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
      lineNumber: 135,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.package.$vendorGroupId._index.tsx",
      lineNumber: 134,
      columnNumber: 16
    }, this);
  }
}, cart_package_vendorGroupId_index_default = Page3.Index;

// app/routes/partner.signup.onboard.$id.success.tsx
var partner_signup_onboard_id_success_exports = {};
__export(partner_signup_onboard_id_success_exports, {
  action: () => action2,
  default: () => partner_signup_onboard_id_success_default,
  loader: () => loader7
});
var import_core16 = require("@mantine/core"), import_node6 = require("@remix-run/node"), import_react26 = require("@remix-run/react"), import_icons_react8 = require("@tabler/icons-react");

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
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function action2(args) {
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
    return (0, import_node6.redirect)(routes_data_default.get("VendorSignupForm", { id: data.id }), {
      headers: {
        "Set-Cookie": await vendorSignupCookie.serialize(data.id)
      }
    });
  }
  return !1;
}
async function loader7(args) {
  let cookieHeader = args.request.headers.get("Cookie"), currentVendor = await vendorSignupCookie.parse(cookieHeader), vendorId = args.params.id;
  if (currentVendor)
    return (0, import_node6.redirect)("/partner/signup/onboard/" + currentVendor + "/success", {
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
    where: {
      isActive: !0
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
    let data = (0, import_react26.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid, { justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Grid.Col, { span: { base: 12, md: 4, lg: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Stack, { gap: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 5, children: "Do you want to signup for other services?" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 147,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react26.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Stack, { gap: "sm", children: data.categoryList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Group, { justify: "space-between", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { td: data.categoryChecklist.includes(item.id) ? "line-through" : "", children: item.name }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 152,
          columnNumber: 41
        }, this),
        data.categoryChecklist.includes(item.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Checkbox, { color: "green", checked: data.categoryChecklist.includes(item.id), labelPosition: "left", label: "Completed" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 154,
          columnNumber: 85
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Button, { type: "submit", name: "create", value: item.id, variant: "outline", radius: "xl", size: "xs", children: "Signup" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 154,
          columnNumber: 204
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 151,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 150,
        columnNumber: 64
      }, this)) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 149,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 148,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Stack, { justify: "center", align: "center", p: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_icons_react8.IconCircleCheck, { style: { width: "50px", height: "50px" }, color: "var(--ui-color-success)" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 163,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Stack, { style: { textAlign: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Title, { order: 2, children: "Thank you for your interest!" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
            lineNumber: 165,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core16.Text, { children: "You'll recieve a confirmation email in 2-3 business days." }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
            lineNumber: 166,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
          lineNumber: 164,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 162,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
        lineNumber: 160,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
      lineNumber: 146,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
      lineNumber: 145,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
      lineNumber: 144,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id.success.tsx",
      lineNumber: 143,
      columnNumber: 16
    }, this);
  }
}, partner_signup_onboard_id_success_default = SignupSuccess.Index;

// app/routes/partner.signup.onboard.$id._index.tsx
var partner_signup_onboard_id_index_exports = {};
__export(partner_signup_onboard_id_index_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action3,
  default: () => partner_signup_onboard_id_index_default,
  loader: () => loader8
});
var import_icons = require("@ant-design/icons"), import_core18 = require("@mantine/core"), import_client10 = require("@prisma/client"), import_node7 = require("@remix-run/node"), import_react28 = require("@remix-run/react"), import_icons_react9 = require("@tabler/icons-react"), import_react29 = require("react");

// app/components/FileUploader.tsx
var import_core17 = require("@mantine/core"), import_uploady = __toESM(require("@rpldy/uploady")), import_react27 = require("react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), Uploader = (props) => {
  let { showFileUpload } = (0, import_uploady.useUploady)(), [isBusy, setBusy] = (0, import_react27.useState)(!1), onClick = (0, import_react27.useCallback)(() => {
    showFileUpload();
  }, []);
  return (0, import_uploady.useItemFinishListener)((item, options2) => {
    var _a;
    let data = JSON.parse(item.uploadResponse.data);
    data && ((_a = data.names) == null || _a.forEach((fid) => {
      props != null && props.onUpload && props.onUpload(fid);
    })), setBusy(!1);
  }), (0, import_uploady.useItemProgressListener)((item) => {
    setBusy(item.state === import_uploady.FILE_STATES.UPLOADING);
  }), (0, import_uploady.useItemErrorListener)((item) => {
    setBusy(!1);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core17.Button, { loading: isBusy, variant: props.buttonType === "primary" ? "filled" : "outline", disabled: !props.id, onClick, children: props.label || "Choose Image" }, void 0, !1, {
    fileName: "app/components/FileUploader.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/FileUploader.tsx",
    lineNumber: 35,
    columnNumber: 12
  }, this);
}, FileUploader_default = (props) => {
  let [pageReady, setReady] = (0, import_react27.useState)(!1);
  return (0, import_react27.useEffect)(() => {
    setReady(!0);
  }, []), pageReady ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_uploady.default,
    {
      inputFieldName: "image",
      destination: {
        url: props.path || PATH.FILE_UPLOAD
      },
      accept: "image/*",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Uploader, { id: props.id, buttonType: props.buttonType, label: props.label, onUpload: props.onUpload }, void 0, !1, {
        fileName: "app/components/FileUploader.tsx",
        lineNumber: 55,
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
function getVendorServices(vendorServiceGroupId, serviceIds) {
  return db.vendorServiceGroup.findFirst({
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
  });
}
function getServicesByJob() {
  return db.vendorType.findMany({
    orderBy: {
      name: "asc"
    },
    where: {
      isActive: !0
    },
    select: {
      id: !0,
      name: !0,
      serviceGroup: {
        orderBy: {
          name: "asc"
        },
        where: {
          isActive: !0
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
  });
}
function getServiceByGroup() {
  return db.serviceGroup.findMany({
    orderBy: {
      name: "asc"
    },
    where: {
      isActive: !0
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
  });
}
var ServiceQuery = {
  getVendorServices,
  getServicesByJob,
  getServiceByGroup
};

// app/utils/statusMarker.map.ts
var import_client9 = require("@prisma/client"), StatusMarker = /* @__PURE__ */ new Map();
StatusMarker.set(import_client9.BookingStatus.PENDING, "gray");
StatusMarker.set(import_client9.BookingStatus.ACCEPTED, "#87d068");
StatusMarker.set(import_client9.BookingStatus.IN_PROGRESS, "yellow");
StatusMarker.set(import_client9.BookingStatus.COMPLETED, "#108ee9");
StatusMarker.set(import_client9.BookingStatus.CANCELLED, "#f50");
StatusMarker.set(import_client9.BookingStatus.REJECTED, "#f50");
var FareModeLabel = /* @__PURE__ */ new Map();
FareModeLabel.set(import_client9.FareMode.FLAT, "Flat Fee");
FareModeLabel.set(import_client9.FareMode.HOURLY, "Hourly");

// app/routes/partner.signup.onboard.$id._index.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
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
async function action3(args) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  let vendorId = args.params.id, formData = await args.request.formData(), type = (_a = formData.get("action")) == null ? void 0 : _a.toString();
  if (!type || !vendorId)
    return !1;
  switch (type) {
    case "PROFILE" /* PROFILE */:
      {
        let categoryId2 = (_b = formData.get("categoryId")) == null ? void 0 : _b.toString(), username = (_c = formData.get("username")) == null ? void 0 : _c.toString(), locationCode = (_d = formData.get("location")) == null ? void 0 : _d.toString();
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
              categoryId: categoryId2,
              location: locationCode
            }
          });
        } catch {
        }
      }
      return !0;
    case "SERVICE" /* SERVICE */:
      let groupId = formData.get("serviceGroupId"), groupCost = formData.get("groupCost"), grpExtraHourCost = (_e = formData.get("extraHourCost")) == null ? void 0 : _e.toString(), categoryId = (_f = formData.get("categoryId")) == null ? void 0 : _f.toString();
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
            costByVendor: parseInt((groupCost == null ? void 0 : groupCost.toString()) || "0"),
            costExtraHour: parseInt(grpExtraHourCost || "0")
          }
        }), serviceIds.forEach(async (data, index) => {
          var _a2, _b2, _c2, _d2;
          await db.vendorService.create({
            data: {
              id: generateUuid(),
              vendorId,
              vendorServiceGroupId: vendorGroupId,
              serviceId: data.toString(),
              cost: parseInt((_a2 = costs[index]) == null ? void 0 : _a2.toString()),
              costByVendor: parseInt((_b2 = costs[index]) == null ? void 0 : _b2.toString()),
              duration: parseInt((_c2 = durations[index]) == null ? void 0 : _c2.toString()),
              fareMode: (_d2 = fareModes[index]) == null ? void 0 : _d2.toString()
            }
          });
        }), !0;
      }
      break;
    case "COST" /* COST */:
      {
        let vendorGroupId = (_g = formData.get("vendorGroupId")) == null ? void 0 : _g.toString(), serviceIds = formData.getAll("serviceId"), durations = formData.getAll("duration"), costs = formData.getAll("cost"), groupCost2 = (_h = formData.get("groupCost")) == null ? void 0 : _h.toString(), grpExtraHourCost2 = (_i = formData.get("extraHourCost")) == null ? void 0 : _i.toString(), fareModes = formData.getAll("fareMode");
        if (!vendorGroupId)
          return;
        await db.vendorServiceGroup.update({
          data: {
            cost: 0,
            costByVendor: parseInt(groupCost2 || "0"),
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
          var _a2, _b2, _c2, _d2;
          await db.vendorService.create({
            data: {
              id: generateUuid(),
              vendorId,
              vendorServiceGroupId: vendorGroupId,
              serviceId: data.toString(),
              cost: parseInt((_a2 = costs[index]) == null ? void 0 : _a2.toString()),
              costByVendor: parseInt((_b2 = costs[index]) == null ? void 0 : _b2.toString()),
              duration: parseInt((_c2 = durations[index]) == null ? void 0 : _c2.toString()),
              fareMode: (_d2 = fareModes[index]) == null ? void 0 : _d2.toString()
            }
          });
        });
      }
      return !0;
    case "DOCUMENTS" /* DOCUMENTS */:
      let fileName = (_j = formData.get("fileName")) == null ? void 0 : _j.toString(), fileType = (_k = formData.get("fileType")) == null ? void 0 : _k.toString();
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
      let remDelId = (_l = formData.get("vendorGroupId")) == null ? void 0 : _l.toString();
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
async function loadApplicationForm(applicationId) {
  if (!applicationId)
    return null;
  let data = await db.vendor.findFirst({
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
      location: !0,
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
  }
  return null;
}
async function loader8(args) {
  let applicationId = args.params.id, data = await loadApplicationForm(applicationId);
  if (data)
    return data;
  {
    let cookieHeader = args.request.headers.get("Cookie");
    return (0, import_node7.redirect)("/partner/signup/onboard", {
      headers: {
        "Set-Cookie": await vendorSignupCookie.serialize(null)
      }
    });
  }
  return null;
}
var OnBoardPage = {
  Index: () => {
    var _a, _b, _c, _d, _e, _f;
    let data = (0, import_react28.useLoaderData)(), fetcher = (0, import_react28.useFetcher)(), [activeProfileType, setJobType] = (0, import_react29.useState)(""), [showProfileDialog, setProfileDialog] = (0, import_react29.useState)(!1), [serviceList, setServiceList] = (0, import_react29.useState)([]);
    (0, import_react29.useEffect)(() => {
      fetcher.data && alert("Thank you for updating your profile");
    }, [fetcher.data]), (0, import_react29.useEffect)(() => {
      var _a2;
      setActiveGroup(((_a2 = data == null ? void 0 : data.profile.vendorType) == null ? void 0 : _a2.id) || ""), hideEditProfileDialog();
    }, [data == null ? void 0 : data.categories]), (0, import_react29.useEffect)(() => {
      var _a2;
      setActiveGroup(((_a2 = data == null ? void 0 : data.profile.vendorType) == null ? void 0 : _a2.id) || "");
    }, []);
    function setActiveGroup(id) {
      setJobType(id);
      let list2 = data == null ? void 0 : data.categories.find((x) => x.id === id);
      setServiceList((list2 == null ? void 0 : list2.serviceGroups) || []);
    }
    function showEditProfileDialog() {
      setProfileDialog(!0);
    }
    function hideEditProfileDialog() {
      setProfileDialog(!1);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: { base: 20, md: 40 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 12, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { children: "Welcome" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 432,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 5, children: [
            "Hello ",
            data == null ? void 0 : data.profile.name,
            ", Please fill up the following details."
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 433,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 431,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Divider, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 436,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 435,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Card, { withBorder: !0, shadow: "xs", title: "Update Profile", children: (_a = data == null ? void 0 : data.profile) != null && _a.vendorType && ((_b = data.profile) != null && _b.username) ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: 20, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: "Profile Type: " }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 443,
              columnNumber: 42
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 443,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: (_d = (_c = data.profile) == null ? void 0 : _c.vendorType) == null ? void 0 : _d.name }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 445,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, onClick: showEditProfileDialog, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { variant: "outline", size: "xs", radius: "xl", children: "Update" }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 446,
                columnNumber: 88
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 446,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 444,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 448,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: [
                "Location: ",
                data.profile.location ? locationMap[data.profile.location] : ""
              ] }, void 0, !0, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 450,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, onClick: showEditProfileDialog, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { variant: "outline", size: "xs", radius: "xl", children: "Update" }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 451,
                columnNumber: 88
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 451,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 449,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 442,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: "Public name:" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 455,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { c: "dimmed", children: "User will see this instead of your real name" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 456,
              columnNumber: 42
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 456,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { gap: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: (_e = data.profile) == null ? void 0 : _e.username }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 458,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 457,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 454,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 441,
          columnNumber: 29
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OnBoardPage.EditProfileForm, { onSuccess: hideEditProfileDialog }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 462,
          columnNumber: 39
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 439,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 438,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 12 }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 465,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: serviceList.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OnBoardPage.SelectCategory, { serviceList, activeProfileType }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 467,
          columnNumber: 43
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 466,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: (_f = data == null ? void 0 : data.profile.VendorServiceGroup) != null && _f.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OnBoardPage.Documents, { files: data.files }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 470,
          columnNumber: 65
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 469,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 430,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Modal, { title: "Modify Profile", opened: showProfileDialog, onClose: () => hideEditProfileDialog(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OnBoardPage.EditProfileForm, { onSuccess: hideEditProfileDialog }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 474,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 473,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 429,
      columnNumber: 16
    }, this);
  },
  SelectCategory: ({ serviceList, activeProfileType }) => {
    let [activePanel, setActivePanelValue] = (0, import_react29.useState)(null);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Card, { id: "section-services", withBorder: !0, shadow: "xs", title: "Choose your services", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: "Add one or more services from below" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 484,
        columnNumber: 26
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 484,
        columnNumber: 21
      }, this),
      !serviceList.length && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { children: "Sorry, no services found under this category" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 485,
        columnNumber: 45
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Accordion, { value: activePanel, onChange: setActivePanelValue, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OnBoardPage.SelectedServices, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 488,
          columnNumber: 21
        }, this),
        serviceList.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Accordion.Item, { value: item.id, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Accordion.Control, { children: item.name }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 490,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            OnBoardPage.UpdateGroupServiceCost,
            {
              activeProfileType,
              addService: !0,
              item: {
                id: "NEW",
                vendorService: [],
                cost: 0,
                costExtraHour: 0,
                group: item
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 492,
              columnNumber: 29
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 491,
            columnNumber: 25
          }, this)
        ] }, item.id, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 489,
          columnNumber: 55
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 487,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 483,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 482,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 481,
      columnNumber: 16
    }, this);
  },
  AddNewServiceDialog: ({ serviceList, activeProfileType }) => {
    var _a;
    let [getServiceDialogData, setServiceDialogData] = (0, import_react29.useState)(null);
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Select, { value: (_a = getServiceDialogData == null ? void 0 : getServiceDialogData.group) == null ? void 0 : _a.id, style: { width: "100%" }, size: "large", placeholder: "Choose...", onChange: (v) => setService(v || ""), data: serviceList.map((service) => ({ value: service.id, label: service.name })), allowDeselect: !1 }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 527,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Modal, { title: (getServiceDialogData == null ? void 0 : getServiceDialogData.group.name) + " - Services & Cost", opened: !!(getServiceDialogData != null && getServiceDialogData.id), onClose: () => setServiceDialogData(null), children: getServiceDialogData && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OnBoardPage.UpdateGroupServiceCost, { activeProfileType, addService: !0, item: getServiceDialogData, onClose: () => setServiceDialogData(null) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 529,
        columnNumber: 42
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 528,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 526,
      columnNumber: 20
    }, this);
  },
  SelectedServices: () => {
    let data = (0, import_react28.useLoaderData)();
    return data == null ? void 0 : data.profile.VendorServiceGroup.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Accordion.Item, { value: item.id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Accordion.Control, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.ThemeIcon, { size: "xs", radius: "xl", color: "green", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_icons.CheckOutlined, {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 537,
        columnNumber: 89
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 537,
        columnNumber: 42
      }, this), children: item.group.name }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 537,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OnBoardPage.UpdateGroupServiceCost, { item }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 539,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 538,
        columnNumber: 17
      }, this)
    ] }, item.id, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 536,
      columnNumber: 71
    }, this));
  },
  Documents: ({ files }) => {
    let fetcher = (0, import_react28.useFetcher)(), [fileType, setFileType] = (0, import_react29.useState)();
    function uploadDocs(file) {
      let form = new FormData();
      form.set("action", "DOCUMENTS" /* DOCUMENTS */), form.set("fileType", fileType || ""), form.set("fileName", file), fetcher.submit(form, { method: "POST" }), setFileType(null);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Card, { withBorder: !0, shadow: "xs", title: "Confirm your identity", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(fetcher.Form, { method: "post", action: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: { base: 20, md: 40 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 5 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Select, { placeholder: "Select document type", style: { width: "100%" }, onChange: (v) => setFileType(v), data: fileTypes.map((x) => ({ label: x.name, value: x.name })) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 562,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { c: "dimmed", children: "Upload any valid document to prove your identity." }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 563,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 561,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 7 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FileUploader_default, { id: fileType || "", label: "Choose file", onUpload: (v) => uploadDocs(v) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 566,
            columnNumber: 25
          }, this),
          !fileType && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { c: "dimmed", children: "Please select a document type" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 567,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 565,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { children: fetcher.state === "submitting" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Loader, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 570,
          columnNumber: 60
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 569,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 560,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 558,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Thead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Tr, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Th, { children: "Document Type" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 578,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Th, { children: "File" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 579,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Th, {}, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 580,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 577,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 576,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Tbody, { children: files == null ? void 0 : files.map((element) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Tr, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Td, { children: element.fileType }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 585,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Td, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { href: PATH.RESOURCE_URL + element.fileName, target: "_BLANK", children: "View file" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 586,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 586,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Table.Td, {}, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 587,
            columnNumber: 25
          }, this)
        ] }, element.id, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 584,
          columnNumber: 44
        }, this)) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 583,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 575,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Divider, {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 591,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { justify: "end", pt: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react28.Link, { to: "success", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { variant: "filled", radius: "xl", disabled: !files.length, children: "Submit Application" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 593,
        columnNumber: 36
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 593,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 592,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 557,
      columnNumber: 16
    }, this);
  },
  UpdateGroupServiceCost: ({ item, addService, activeProfileType, onClose }) => {
    let fetcher = (0, import_react28.useFetcher)(), [enabledIds, setIds] = (0, import_react29.useState)([]);
    (0, import_react29.useEffect)(() => {
      let includedIds = item.group.serviceGroupItem.filter((x) => !x.isOptional).map((x) => x.service.id), addonIds = item.group.serviceGroupItem.filter((x) => x.isOptional).map((x) => x.service.id);
      setIds(item.vendorService.filter((x) => addonIds.includes(x.serviceId)).map((x) => x.serviceId).concat(includedIds));
    }, []), (0, import_react29.useEffect)(() => {
      fetcher.data && onClose && onClose(), fetcher.data && addService && scrollIntoSectionTop();
    }, [fetcher.data]);
    function setEnabledList(id, enabled) {
      let ids = enabledIds.filter((x) => x != id);
      enabled && ids.push(id), setIds(ids);
    }
    function scrollIntoSectionTop() {
      if (addService) {
        let el = document.getElementById("section-services");
        el == null || el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(fetcher.Form, { method: "post", action: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Alert, { title: "Kindly read all the inclusive services and set your base charge accordingly.", variant: "light", color: "blue", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_icons_react9.IconInfoCircle, {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 630,
        columnNumber: 140
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 630,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 630,
        columnNumber: 162
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 5, children: "Base Charge" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 633,
            columnNumber: 26
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 633,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Input, { width: "100%", leftSection: "\u20B9", required: !0, name: "groupCost", type: "number", min: "1", defaultValue: item.cost }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 634,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: "categoryId", value: activeProfileType }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 635,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: "serviceGroupId", value: item.group.id }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 636,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 632,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { order: 5, children: "Extra hour charges" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 639,
            columnNumber: 26
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 639,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Input, { width: "100%", leftSection: "\u20B9", name: "extraHourCost", type: "number", min: "0", defaultValue: item.costExtraHour }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 640,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 638,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 631,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: { padding: "10px 0 20px" }, children: [
        "Approximate hour required for this job is ",
        item.group.minHour,
        " hours."
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 643,
        columnNumber: 13
      }, this),
      item.group.serviceGroupItem.map((service, i) => {
        var _a, _b, _c, _d, _e;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: 20, children: [
          ((_a = item.group.serviceGroupItem[i - 1]) == null ? void 0 : _a.isOptional) !== service.isOptional && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 12, children: service.isOptional ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { style: { color: "#1890ff" }, order: 5, children: "Additional Services" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 647,
              columnNumber: 45
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: { paddingBottom: "10px" }, children: "(Choose only applicable services)" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 647,
              columnNumber: 119
            }, this),
            ", ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Alert, { variant: "light", color: "blue", title: "Do not add base charge to additional service.", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_icons_react9.IconInfoCircle, {}, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 647,
              columnNumber: 295
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 647,
              columnNumber: 199
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 647,
            columnNumber: 43
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Title, { style: { color: "#1890ff" }, order: 5, children: "Services included in this category" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 647,
            columnNumber: 323
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 646,
            columnNumber: 91
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: "content", children: service.isOptional ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_core18.Checkbox,
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
              lineNumber: 650,
              columnNumber: 43
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: "serviceId", value: service.service.id }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 655,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: "cost", value: 0 }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 656,
              columnNumber: 26
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: "duration", value: 1 }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 657,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", value: service.service.fareMode, name: "fareMode" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 658,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 654,
            columnNumber: 26
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 649,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: [
              service.service.name,
              " ",
              (_b = service.addonGroup) != null && _b.name ? "(" + ((_c = service.addonGroup) == null ? void 0 : _c.name) + ")" : ""
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 662,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { c: "dimmed", children: service.service.description }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 664,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 663,
              columnNumber: 21
            }, this),
            enabledIds.includes(service.service.id) && service.isOptional && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: 20, style: { paddingTop: "10px" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 12, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", value: service.service.fareMode, name: "fareMode" }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 668,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { children: [
                  "Charged by: ",
                  FareModeLabel.get(service.service.fareMode)
                ] }, void 0, !0, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 669,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 667,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 5 }, children: service.service.fareMode === import_client10.FareMode.HOURLY ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { children: "Duration (in hours)" }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 672,
                  columnNumber: 84
                }, this) }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 672,
                  columnNumber: 79
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Input, { rightSection: "hrs", defaultValue: ((_d = item.vendorService.find((x) => x.serviceId === service.service.id)) == null ? void 0 : _d.duration) || item.group.minHour, name: "duration", type: "number", required: !0, min: item.group.minHour }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 673,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 672,
                columnNumber: 77
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: "duration", value: 1 }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 673,
                columnNumber: 239
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 671,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 7 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { children: "Cost" }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 676,
                  columnNumber: 34
                }, this) }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 676,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Input, { leftSection: "\u20B9", defaultValue: ((_e = item.vendorService.find((x) => x.serviceId === service.service.id)) == null ? void 0 : _e.cost) || 0, name: "cost", type: "number", required: !0, min: 0 }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 677,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { c: "dimmed", children: "Enter zero, if you don't charge additional for these services." }, void 0, !1, {
                  fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                  lineNumber: 678,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
                lineNumber: 675,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 666,
              columnNumber: 87
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 661,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Divider, { style: { padding: 0, margin: "0 0 10px" } }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 682,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 682,
            columnNumber: 17
          }, this)
        ] }, service.service.id, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 645,
          columnNumber: 62
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { gap: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: "vendorGroupId", value: item.id }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 686,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { loading: ["submitting", "loading"].includes(fetcher.state), variant: "filled", radius: "xl", type: "submit", name: "action", value: addService ? "SERVICE" /* SERVICE */ : "COST" /* COST */, children: "Save & Continue" }, void 0, !1, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 687,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 685,
          columnNumber: 17
        }, this),
        !addService && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { variant: "filled", color: "red", radius: "xl", type: "submit", name: "action", value: "REMOVE_SERVICE" /* REMOVE_SERVICE */, children: "Remove" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 690,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 689,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 684,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 629,
      columnNumber: 16
    }, this);
  },
  EditProfileForm: ({ onSuccess }) => {
    var _a, _b, _c, _d;
    let data = (0, import_react28.useLoaderData)(), submit = (0, import_react28.useSubmit)(), [profileData, setData] = (0, import_react29.useState)({ jobType: (_a = data == null ? void 0 : data.profile.vendorType) == null ? void 0 : _a.id, username: data == null ? void 0 : data.profile.username, location: (data == null ? void 0 : data.profile.location) || "BLR" /* BLR */ }), [showWarnMsg, setWarnMsg] = (0, import_react29.useState)(!1);
    function updateData(newData) {
      var _a2, _b2;
      let currentType = (_b2 = (_a2 = data == null ? void 0 : data.profile) == null ? void 0 : _a2.vendorType) == null ? void 0 : _b2.id;
      newData && setData({ ...profileData, ...newData }), currentType && newData.jobType && currentType !== newData.jobType ? setWarnMsg(!0) : setWarnMsg(!1);
    }
    function saveForm() {
      !(profileData != null && profileData.jobType) || !profileData.username || !profileData.location || submit(
        {
          action: "PROFILE" /* PROFILE */,
          username: (profileData == null ? void 0 : profileData.username) || "",
          categoryId: (profileData == null ? void 0 : profileData.jobType) || "",
          location: profileData.location
        },
        {
          method: "post"
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { style: { width: "100%" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Select, { allowDeselect: !1, label: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: "Profile Category:" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 732,
          columnNumber: 58
        }, this), value: profileData.jobType, defaultValue: (_c = (_b = data == null ? void 0 : data.profile) == null ? void 0 : _b.vendorType) == null ? void 0 : _c.id, onChange: (value) => updateData({ jobType: value || "" }), placeholder: "Select a category", style: { width: "100%" }, data: data == null ? void 0 : data.categories.map((item) => ({ value: item.id, label: item.name })) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 732,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Select, { allowDeselect: !1, label: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: "Location:" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 733,
          columnNumber: 58
        }, this), value: profileData.location, defaultValue: (_d = data == null ? void 0 : data.profile) == null ? void 0 : _d.location, placeholder: "Select your location", style: { width: "100%" }, onChange: (value) => updateData({ location: value || "" }), data: locationList.map((item) => ({ value: item.key, label: item.label })) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 733,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 731,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 730,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { fw: 500, children: "Public name:" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 738,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { size: "md", fw: 500, children: profileData.username }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 739,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Text, { size: "sm", c: "dimmed", children: "User will see this instead of your real name. Contact support centre to update this." }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 741,
          columnNumber: 26
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 741,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 737,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 736,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Grid.Col, { span: 12, children: [
        showWarnMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Alert, { variant: "light", color: "red", mb: "md", title: "Are you sure?", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_icons_react9.IconInfoCircle, {}, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 745,
          columnNumber: 106
        }, this), children: [
          "Updating your profile type will reset your saved changes. If you are trying to signup for multiple categories, kindly signup after successfully submitting this one.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Flex, { gap: "sm", pt: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { color: "red", size: "xs", variant: "filled", radius: "xl", onClick: (v) => {
              var _a2, _b2;
              return updateData({ jobType: (_b2 = (_a2 = data == null ? void 0 : data.profile) == null ? void 0 : _a2.vendorType) == null ? void 0 : _b2.id });
            }, children: "Decline" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 748,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { color: "red", size: "xs", variant: "outline", radius: "xl", onClick: () => setWarnMsg(!1), children: "Proceed" }, void 0, !1, {
              fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
              lineNumber: 751,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
            lineNumber: 747,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 745,
          columnNumber: 33
        }, this),
        !showWarnMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Button, { variant: "filled", radius: "xl", onClick: saveForm, children: "Save and Continue" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
          lineNumber: 756,
          columnNumber: 34
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
        lineNumber: 744,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
      lineNumber: 729,
      columnNumber: 16
    }, this);
  }
};
function ErrorBoundary2() {
  let error = (0, import_react28.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core18.Alert, { variant: "light", color: "red", title: "Could not load the page", children: (error == null ? void 0 : error.data) || "Oops, Something went wrong!" }, void 0, !1, {
    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
    lineNumber: 767,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/partner.signup.onboard.$id._index.tsx",
    lineNumber: 766,
    columnNumber: 12
  }, this);
}
var partner_signup_onboard_id_index_default = OnBoardPage.Index;

// app/routes/cart.add.$vendorServiceGroupId.tsx
var cart_add_vendorServiceGroupId_exports = {};
__export(cart_add_vendorServiceGroupId_exports, {
  action: () => action4,
  default: () => cart_add_vendorServiceGroupId_default,
  loader: () => loader9,
  meta: () => meta3
});
var import_core19 = require("@mantine/core"), import_dates = require("@mantine/dates"), import_react30 = require("@remix-run/react"), import_icons_react10 = require("@tabler/icons-react"), import_icons_react11 = require("@tabler/icons-react"), import_icons_react12 = require("@tabler/icons-react"), import_icons_react13 = require("@tabler/icons-react"), import_dayjs2 = __toESM(require("dayjs")), import_react31 = require("react"), import_react_redux3 = require("react-redux");

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
var import_client11 = require("@prisma/client");
var GST_PERCENTAGE = common_data_default.GST_PERCENTAGE, FULL_PAYMENT_DISCOUNT = common_data_default.FULL_PAYMENT_DISCOUNT, FULL_PAYMENT_DISCOUNT_MAX_VALUE = common_data_default.FULL_PAYMENT_DISCOUNT_MAX_VALUE;
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
        notIn: [import_client11.BookingStatus.CANCELLED, import_client11.BookingStatus.REJECTED]
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
async function cartEstimationForCheckout(cart, coupon, paymentMode, packageId) {
  let vendorGrpIds = [], addonsIds = [];
  cart.forEach((x) => {
    vendorGrpIds.push(x.vendorServiceGroupId), addonsIds = addonsIds.concat(x.services.map((y) => y.id));
  });
  let groupData = await db.vendorServiceGroup.findMany({
    where: {
      id: {
        in: vendorGrpIds
      }
    },
    select: {
      id: !0,
      cost: !0,
      costByVendor: !0,
      vendorId: !0,
      group: {
        select: {
          name: !0
        }
      }
    }
  }), addonData = await db.vendorService.findMany({
    where: {
      id: {
        in: addonsIds
      }
    },
    select: {
      vendorServiceGroupId: !0,
      cost: !0,
      serviceId: !0,
      fareMode: !0,
      service: {
        select: {
          name: !0
        }
      }
    }
  }), estimation = await cartCalculateCost(
    groupData.map((x) => x.cost),
    addonData.map((x) => x.cost),
    coupon,
    paymentMode,
    packageId
  );
  return {
    groupData,
    addonData,
    estimation
  };
}
function cartSummary(cart) {
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
        coverImg: res.group.imageName ? PATH.THUMB_URL + res.group.imageName : "",
        vendorServiceGroupId: res.id,
        vendorType: ((_a = res.vendor.vendorType) == null ? void 0 : _a.name) || "",
        vendorName: res.vendor.username,
        vendorImg: res.vendor.profileImageName ? PATH.THUMB_URL + res.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER,
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
}
async function calculateCouponDiscount(coupon, total) {
  let couponData = await db.coupons.findFirst({
    where: {
      code: coupon
    }
  }), discount = 0, value = total;
  switch (couponData == null ? void 0 : couponData.chargeType) {
    case import_client11.Coupons_chargeType.FLAT:
      discount = couponData.chargeValue;
      break;
    case import_client11.Coupons_chargeType.PERCENTAGE:
      discount = couponData.chargeValue * value / 100, couponData.maxDiscountValue && discount > couponData.maxDiscountValue && (discount = couponData.maxDiscountValue);
      break;
  }
  return discount = Math.round(discount), {
    code: couponData == null ? void 0 : couponData.code,
    value: value - discount,
    discount
  };
}
function calculateFullPaymentPromo(value) {
  let discount = Math.round(FULL_PAYMENT_DISCOUNT * value / 100);
  return FULL_PAYMENT_DISCOUNT_MAX_VALUE && discount > FULL_PAYMENT_DISCOUNT_MAX_VALUE ? FULL_PAYMENT_DISCOUNT_MAX_VALUE : discount;
}
async function calculatePackageDiscount(packageId, total) {
  let packageData;
  packageId === "CUSTOM" ? packageData = {
    discountType: import_client11.DiscountType.PERCENTAGE,
    discountValue: common_data_default.MAKE_YOUR_PACKAGE_MAX_DISCOUNT_VALUE
  } : packageData = await db.package.findFirst({
    where: {
      id: packageId
    },
    select: {
      discountType: !0,
      discountValue: !0
    }
  });
  let discount = 0, value = total, promo = null;
  switch (packageData == null ? void 0 : packageData.discountType) {
    case import_client11.DiscountType.FLAT:
      discount = packageData.discountValue, promo = "FLAT " + discount;
      break;
    case import_client11.DiscountType.PERCENTAGE:
      discount = packageData.discountValue * value / 100, promo = packageData.discountValue + "%";
      break;
  }
  return discount = Math.round(discount), {
    value: value - discount,
    discount,
    promo
  };
}
async function cartCalculateCost(groupCosts, addonsCost, coupon, paymentMode, packageId) {
  let gst = GST_PERCENTAGE, total = groupCosts.concat(addonsCost).reduce((sum, item) => sum + item, 0), discount = 0, additionalPromo = 0, appliedPromo = null, appliedCoupon = null;
  if (packageId) {
    let packageData = await calculatePackageDiscount(packageId, total);
    discount = packageData.discount, appliedPromo = packageData.promo;
  } else if (coupon) {
    let couponData = await calculateCouponDiscount(coupon, total);
    discount = couponData.discount, appliedPromo = couponData.code, appliedCoupon = couponData.code;
  }
  paymentMode === import_client11.BookingPaymentMode.FULL && (additionalPromo = calculateFullPaymentPromo(total));
  let finalTotal = total - discount - additionalPromo, tax = Math.round(gst * finalTotal / 100);
  return {
    total,
    tax,
    gst,
    additionalPromo,
    final: finalTotal + tax,
    discount,
    coupon: appliedPromo,
    invalidCoupon: !!(coupon && !appliedCoupon)
  };
}
var CartService = {
  getGst: GST_PERCENTAGE,
  calculate: cartCalculateCost,
  summary: cartSummary,
  getVendorServiceBookingsByDate,
  cartEstimationForCheckout,
  calculateCouponDiscount
};

// app/routes/cart.add.$vendorServiceGroupId.tsx
var import_carousel = require("@mantine/carousel");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
async function cartSummary2(input) {
  let cartSummary4 = await CartService.summary(input), total = 0;
  return cartSummary4.forEach((x) => {
    total += x.services.reduce((sum, x2) => sum + x2.cost, 0);
  }), {
    cartSummary: cartSummary4,
    total
  };
}
function arrayRange(start, stop, step = 1) {
  return Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);
}
var BUFFER_TIME_IN_HRS = 2, meta3 = page_meta_default({
  title: "Modify Booking"
});
async function action4(args) {
  var _a, _b, _c, _d;
  let form = await args.request.formData(), actionType = (_a = form.get("action")) == null ? void 0 : _a.toString(), vendorServiceGrpId = args.params.vendorServiceGroupId;
  switch (actionType) {
    case "ESTIMATION" /* ESTIMATION */:
      let input = JSON.parse(((_b = form.get("input")) == null ? void 0 : _b.toString()) || "");
      return await cartSummary2(input);
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
async function loader9(args) {
  let id = args.params.vendorServiceGroupId || "", cookieHeader = args.request.headers.get("Cookie"), source = new URL(args.request.url).searchParams.get("source"), currentCart;
  if (source === "cart")
    currentCart = await userCartCookie.parse(cookieHeader);
  else {
    let r = await cartCheckoutCookie.parse(cookieHeader);
    currentCart = (r == null ? void 0 : r.cart) || null;
  }
  let savedData = currentCart == null ? void 0 : currentCart.find((x) => x.vendorServiceGroupId === id);
  if (!id)
    throw new Response("Invalid service", {
      status: 500
    });
  let service = await VendorQuery.getVendorServiceGroupBasicInfo(id), vendor = await db.vendorServiceGroup.findFirstOrThrow({
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
function SelectableList({ data, onChange }) {
  let [selectedIds, setSelectedIds] = (0, import_react31.useState)([]);
  function toggleId(parentId, id) {
    let filtered = selectedIds.filter((x) => x.parentId !== parentId);
    id && filtered.push({ parentId, id }), setSelectedIds(filtered), onChange(filtered.map((x) => x.id));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { children: data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Select, { placeholder: "Select...", label: "Select " + item.title, required: !0, data: item.services.map((x) => ({ value: x.id, label: x.title })), allowDeselect: !1, onChange: (v) => toggleId(item.id, v) }, item.id, !1, {
    fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
    lineNumber: 175,
    columnNumber: 27
  }, this)) }, void 0, !1, {
    fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
    lineNumber: 174,
    columnNumber: 12
  }, this);
}
var Page4 = {
  Index: () => {
    var _a;
    let data = (0, import_react30.useLoaderData)(), [formData, setFormData] = (0, import_react31.useState)(), steps = [{
      title: "Select service",
      icon: import_icons_react10.IconNumber1,
      success: !!((_a = formData == null ? void 0 : formData.services) != null && _a.length),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Page4.Addons, { onChange: updateFormData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 188,
        columnNumber: 20
      }, this)
    }, {
      title: "Select slot",
      icon: import_icons_react10.IconNumber2,
      success: !!(formData != null && formData.date && formData.timeHour),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Page4.SelectDate, { onChange: updateFormData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 193,
        columnNumber: 20
      }, this)
    }, {
      title: "Choose venue",
      icon: import_icons_react12.IconNumber3,
      success: !!(formData != null && formData.venue),
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Page4.ChooseVenue, { onChange: updateFormData }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 198,
        columnNumber: 20
      }, this)
    }, {
      title: "Confirm",
      icon: import_icons_react13.IconNumber4,
      success: !1,
      child: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Page4.Summary, { data: formData, source: data.source }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 203,
        columnNumber: 20
      }, this)
    }];
    function updateFormData(params) {
      setFormData((d) => ({ ...d, ...params }));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Container, { size: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { gutter: "md", justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: "auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 5, children: "Book you session" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 213,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { children: "Complete these steps to proceed" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 214,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 212,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { sm: 12, md: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Flex, { align: "center", gap: "md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react30.Link, { to: routes_data_default.get("VendorProfile", { id: data.vendor.vendor.username }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { order: 5, children: data.vendor.vendor.username }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 219,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 218,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react30.Link, { to: routes_data_default.get("VendorProfile", { id: data.vendor.vendor.username }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Avatar, { size: "xl", src: data.vendor.vendor.profileImageName ? PATH.THUMB_URL + data.vendor.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 222,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 221,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 217,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 216,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 211,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, this),
      steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.ActionIcon, { variant: step.success ? "filled" : "light", color: step.success ? "green" : "blue", size: "xl", radius: "xl", "aria-label": "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(step.icon, {}, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 234,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 233,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 232,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 231,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 8, md: 11 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Title, { mt: "10px", order: 5, children: step.title }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 239,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 238,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { visibleFrom: "md", span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Box, { h: "100%", w: "40px", children: i < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Divider, { orientation: "vertical", h: "100%", ml: "22px" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 243,
          columnNumber: 53
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 242,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 241,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: "auto" }, children: [
          i === 0 || steps[i - 1].success ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Box, { flex: 1, children: step.child }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 248,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 247,
            columnNumber: 55
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { c: "gray", children: "Previous step is incomplete" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 251,
            columnNumber: 34
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "xl" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 252,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 246,
          columnNumber: 21
        }, this)
      ] }, "step-" + i, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 230,
        columnNumber: 17
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "lg" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 255,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 210,
      columnNumber: 16
    }, this);
  },
  Addons: ({ onChange }) => {
    let data = (0, import_react30.useLoaderData)(), [selectedAddons, setAddons] = (0, import_react31.useState)([]), [mandatoryAddons, setMandatoryAddons] = (0, import_react31.useState)([]);
    (0, import_react31.useEffect)(() => {
      var _a;
      let preselectedAddons = ((_a = data.savedData) == null ? void 0 : _a.services.map((x) => x.id)) || [];
      setAddons(preselectedAddons), propogateData(preselectedAddons);
    }, []);
    function toggleAddon(id) {
      let newIds;
      selectedAddons.includes(id) ? newIds = selectedAddons.filter((x) => x !== id) : newIds = [...selectedAddons, id], setAddons((x) => newIds), propogateData(mandatoryAddons.concat(newIds));
    }
    function updateMandatoryAddons(ids) {
      setMandatoryAddons((x) => ids), propogateData(selectedAddons.concat(ids));
    }
    function propogateData(addonsIds) {
      if (addonsIds.length < data.serviceGroup.selectableList.length) {
        onChange({ services: [] });
        return;
      }
      onChange({
        services: [{
          vendorServiceGroupId: data.vendorServiceGroupId,
          addonsIds
        }]
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { align: "center", justify: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Card, { radius: "md", p: 2, pos: "relative", withBorder: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: { position: "absolute", right: "2px", top: "2px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.ThemeIcon, { color: "green", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react10.IconCheck, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 307,
            columnNumber: 68
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 307,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 306,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Image, { src: data.serviceGroup.image, h: 120, w: 120, fit: "cover", radius: "md" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 309,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 305,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { children: data.serviceGroup.title }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 311,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 304,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 303,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: "auto" }, children: [
        data.serviceGroup.selectableList.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SelectableList, { onChange: (v) => updateMandatoryAddons(v), data: data.serviceGroup.selectableList }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 316,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 317,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 315,
          columnNumber: 63
        }, this) : "",
        data.serviceGroup.addons.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { fw: 500, children: "Recommended Addons" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 321,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core19.SimpleGrid,
            {
              cols: { base: 2, md: 3, lg: 3, xl: 3 },
              spacing: { base: "sm", sm: "xl" },
              children: data.serviceGroup.addons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Card, { withBorder: !0, onClick: () => toggleAddon(item.id), style: { cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { gap: "xs", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  import_core19.Checkbox,
                  {
                    checked: selectedAddons.includes(item.id),
                    color: "green",
                    style: { userSelect: "none" }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                    lineNumber: 326,
                    columnNumber: 37
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { children: item.title }, void 0, !1, {
                  fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                  lineNumber: 331,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(currency_transformer_default, { value: item.cost }, void 0, !1, {
                  fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                  lineNumber: 332,
                  columnNumber: 52
                }, this) }, void 0, !1, {
                  fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                  lineNumber: 332,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 325,
                columnNumber: 33
              }, this) }, item.id, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 324,
                columnNumber: 67
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 322,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 320,
          columnNumber: 56
        }, this) : ""
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 314,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 302,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 301,
      columnNumber: 16
    }, this);
  },
  SelectDate: ({ onChange }) => {
    let [selectedDate, setSelectedDate] = (0, import_react31.useState)(), [selectedTime, setSelectedTime] = (0, import_react31.useState)(), data = (0, import_react30.useLoaderData)(), fetcher = (0, import_react30.useFetcher)();
    (0, import_react31.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { gutter: "md", justify: "center", pt: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: "content" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { fw: 500, children: "When you are looking for?" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 385,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 386,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_dates.Calendar,
          {
            getDayProps: (date) => ({
              selected: (0, import_dayjs2.default)(date).isSame(selectedDate, "date"),
              onClick: () => handleDaySelect(date),
              disabled: (0, import_dayjs2.default)(date).isBefore(/* @__PURE__ */ new Date())
            })
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 387,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 384,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: "auto" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { fw: 500, children: "Select a preferred time" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 396,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 397,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react31.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Skeleton, {}, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 398,
          columnNumber: 37
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react30.Await, { resolve: fetcher.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
          response && fetcher.state === "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Page4.TimePicker, { slots: response.slots, selected: selectedTime, onChange: setTimeHour }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 401,
            columnNumber: 70
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 402,
            columnNumber: 29
          }, this),
          ["loading", "submitting"].includes(fetcher.state) && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { c: "dimmed", children: "Please wait..." }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 403,
            columnNumber: 83
          }, this),
          response != null && response.slots.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Alert, { variant: "light", color: "green", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react11.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 404,
            columnNumber: 98
          }, this), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { children: [
              "The estimated duration of this service is ",
              data.serviceGroup.minHour,
              " hours."
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 405,
              columnNumber: 33
            }, this),
            data.serviceGroup.costExtraHour ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
              "An additional amount of ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(currency_transformer_default, { value: data.serviceGroup.costExtraHour }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 407,
                columnNumber: 61
              }, this),
              " per extra hour will be charged if applicable."
            ] }, void 0, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 406,
              columnNumber: 68
            }, this) : ""
          ] }, void 0, !0, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 404,
            columnNumber: 55
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Alert, { variant: "light", color: "yellow", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react11.IconInfoCircle, {}, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 408,
            columnNumber: 84
          }, this), children: "Please select a date first." }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 408,
            columnNumber: 40
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 400,
          columnNumber: 38
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 399,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 398,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 395,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 383,
      columnNumber: 16
    }, this);
  },
  TimePicker: ({ slots, onChange, selected }) => {
    let [selectedTime, setTime] = (0, import_react31.useState)();
    (0, import_react31.useEffect)(() => {
      slots.find((x) => x.slots.find((y) => y.value === selected)) && setTimeHour(selected || 0);
    }, []);
    function setTimeHour(v) {
      setTime(v), onChange(v);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_carousel.Carousel, { slideGap: "md", initialSlide: 1, p: 0, children: [
      slots.map((slot, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_carousel.Carousel.Slide, { p: 0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { ta: "center", children: slot == null ? void 0 : slot.name }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 433,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 434,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { justify: "center", children: slot == null ? void 0 : slot.slots.map((time) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 5, md: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Card, { withBorder: !0, p: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Checkbox, { checked: selectedTime === time.value, label: time.label, onChange: () => setTimeHour(time.value) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 438,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 437,
          columnNumber: 29
        }, this) }, "t-" + time.value, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 436,
          columnNumber: 50
        }, this)) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 435,
          columnNumber: 21
        }, this)
      ] }, "s" + i, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 432,
        columnNumber: 41
      }, this)),
      !slots.length && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { c: "dimmed", children: "Sorry, No free slots available on this day. Pls choose a different day." }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 444,
        columnNumber: 38
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 431,
      columnNumber: 16
    }, this);
  },
  ChooseVenue: ({ onChange }) => {
    let data = (0, import_react30.useLoaderData)(), [address, setAddress] = (0, import_react31.useState)({ address: "", pincode: "" });
    (0, import_react31.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { maw: "400px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core19.Textarea,
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
          lineNumber: 474,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Input.Wrapper, { label: "Pincode", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core19.Input,
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
          lineNumber: 481,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 480,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 473,
      columnNumber: 16
    }, this);
  },
  Summary: ({ data, source }) => {
    let submit = (0, import_react30.useSubmit)(), fetcher = (0, import_react30.useFetcher)(), [isStepsReady, setStepsReady] = (0, import_react31.useState)(!1), user = (0, import_react_redux3.useSelector)(getUser), location2 = (0, import_react30.useLocation)();
    (0, import_react31.useEffect)(() => {
      var _a;
      (_a = data == null ? void 0 : data.services) != null && _a.length && (data != null && data.date) && typeof data.timeHour == "number" && (data != null && data.venue) ? (setStepsReady(!0), getEstimation()) : setStepsReady(!1);
    }, [data]);
    function getEstimation() {
      let params = getInputParams();
      fetcher.submit({
        action: "ESTIMATION" /* ESTIMATION */,
        input: JSON.stringify(params)
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
    return isStepsReady ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react31.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Skeleton, {}, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 545,
      columnNumber: 51
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react30.Await, { resolve: fetcher.data, children: (response) => ["loading", "submitting"].includes(fetcher.state) ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Loader, { color: "gray" }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 547,
      columnNumber: 82
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid, { gutter: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Card, { shadow: "sm", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { children: [
        response == null ? void 0 : response.cartSummary.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("b", { children: group.name }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 553,
            columnNumber: 41
          }, this),
          group.services.map(
            (service) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { size: "sm", fw: 500, children: service.name }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 555,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(currency_transformer_default, { value: service.cost }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 556,
                columnNumber: 61
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
                lineNumber: 556,
                columnNumber: 45
              }, this)
            ] }, service.id, !0, {
              fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
              lineNumber: 554,
              columnNumber: 72
            }, this)
          )
        ] }, group.vendorServiceGroupId, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 552,
          columnNumber: 72
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Flex, { justify: "space-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { size: "sm", fw: 500, children: "Total: " }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 561,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.total }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 562,
            columnNumber: 62
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 562,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 560,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 550,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 549,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 548,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Grid.Col, { span: { base: 12, md: 4 }, children: source === "cart" ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { fw: 500, children: "Proceed to checkout" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 569,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Button, { variant: "outline", onClick: addToCart, children: "Update & Continue" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 570,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 568,
        columnNumber: 46
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Card, { shadow: "sm", withBorder: !0, title: "Continue", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Button, { variant: "filled", onClick: expresCheckout, children: "Proceed to payment" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 573,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(UserLogin_default, { redirectUrl: location2.pathname, title: "Login to continue" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 573,
          columnNumber: 121
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 572,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 575,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { children: "Forgot something?" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 577,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Button, { variant: "outline", onClick: addToCart, children: "Add to cart" }, void 0, !1, {
            fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
            lineNumber: 578,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
          lineNumber: 576,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 572,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 567,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 547,
      columnNumber: 108
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 546,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 545,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Group, { gap: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Loader, { color: "gray", type: "dots" }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 585,
        columnNumber: 39
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core19.Text, { children: "Complete the above steps to estimate the cost." }, void 0, !1, {
        fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
        lineNumber: 585,
        columnNumber: 74
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.add.$vendorServiceGroupId.tsx",
      lineNumber: 585,
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
var cart_add_vendorServiceGroupId_default = Page4.Index;

// app/routes/partner.signup.onboard._index.tsx
var partner_signup_onboard_index_exports = {};
__export(partner_signup_onboard_index_exports, {
  action: () => action5,
  default: () => partner_signup_onboard_index_default,
  loader: () => loader10
});
var import_core20 = require("@mantine/core"), import_node8 = require("@remix-run/node"), import_react32 = require("@remix-run/react"), import_react33 = require("react");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function action5(args) {
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
          let currentVendor = data.id, notification = new notification_service_default();
          return notification.admin("New vendor signup: " + fullName), notification.publish(), (0, import_node8.redirect)("/partner/signup/onboard/" + data.id, {
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
async function loader10(args) {
  let cookieHeader = args.request.headers.get("Cookie"), currentVendor = await vendorSignupCookie.parse(cookieHeader);
  return currentVendor ? (0, import_node8.redirect)("/partner/signup/onboard/" + currentVendor) : null;
}
var Onboard = {
  Index: () => {
    let location2 = (0, import_react32.useLocation)(), [files, setFiles] = (0, import_react33.useState)([]);
    function previewFile(file) {
      setFiles(files.concat(file));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react32.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid, { gutter: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Title, { order: 3, children: "Sign up as vendor" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 108,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Input.Wrapper, { label: "Full Name*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Input, { name: "fullName", placeholder: "Enter your full name.", required: !0 }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 110,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 109,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Input.Wrapper, { label: "Email*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Input, { name: "email", placeholder: "Enter your email for communication purpose.", required: !0, type: "email" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 113,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 112,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Input.Wrapper, { label: "Phone*", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Input, { name: "phone", leftSection: "+91", placeholder: "Enter your contact number for communication purpose.", required: !0, maxLength: 10, minLength: 10 }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 116,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 115,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Text, { fw: 500, children: "Social media url" }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 133,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Input, { name: "socialUrl", type: "url", required: !0 }, void 0, !1, {
          fileName: "app/routes/partner.signup.onboard._index.tsx",
          lineNumber: 134,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 132,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core20.Button, { variant: "filled", radius: "xl", loading: location2.state === "submitting", type: "submit", name: "actionType", value: "signup", children: "Sign up as vendor" }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 137,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.signup.onboard._index.tsx",
        lineNumber: 136,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 107,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 106,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 105,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup.onboard._index.tsx",
      lineNumber: 103,
      columnNumber: 16
    }, this);
  }
}, partner_signup_onboard_index_default = Onboard.Index;

// app/routes/cart.checkout.payment._index.tsx
var cart_checkout_payment_index_exports = {};
__export(cart_checkout_payment_index_exports, {
  action: () => action6,
  default: () => cart_checkout_payment_index_default,
  loader: () => loader11,
  meta: () => meta4
});
var import_core21 = require("@mantine/core"), import_client12 = require("@prisma/client"), import_node9 = require("@remix-run/node"), import_react34 = require("@remix-run/react"), import_react35 = require("react"), import_react_redux4 = require("react-redux");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), PAYMENTGATEWAY_LIMIT = 39e4, PaymentMethodList = [
  {
    id: import_client12.BookingPaymentMode.PAY_LATER,
    title: "Pay later",
    description: "Pay " + common_data_default.PAY_LATER_SLAB_PERCENTAGE + "% within 3 days of booking, and the rest after the completion of service.",
    disabled: !1
  },
  {
    id: import_client12.BookingPaymentMode.FULL,
    title: "Pay in full",
    offer: common_data_default.FULL_PAYMENT_DISCOUNT + "% Off",
    description: "Pay upfront for a " + common_data_default.FULL_PAYMENT_DISCOUNT + "% discount.",
    subtext: common_data_default.FULL_PAYMENT_DISCOUNT_MAX_VALUE ? "(maximum discount " + common_data_default.currency + common_data_default.FULL_PAYMENT_DISCOUNT_MAX_VALUE + ")" : "",
    disabled: !1
  },
  {
    id: import_client12.BookingPaymentMode.EMI,
    title: "Pay in EMI",
    description: "Easy EMI option",
    disabled: !1
  }
], ACTIVE_PAYMENT_MODES = [import_client12.BookingPaymentMode.PAY_LATER, import_client12.BookingPaymentMode.FULL], ESTIMATED_SERVICE_PAYMENT_MODES = [import_client12.BookingPaymentMode.PAY_LATER, import_client12.BookingPaymentMode.FULL];
async function cartSummary3(input, coupon, paymentMode, packageId) {
  let cartSummary4 = await CartService.summary(input), groupCost = cartSummary4.map((x) => x.cost), addonCost = cartSummary4.reduce((acc, i) => acc.concat(i.services.filter((x) => !!x.id).map((x) => x.cost)), []);
  return {
    estimation: await CartService.calculate(groupCost, addonCost, coupon, paymentMode, packageId)
  };
}
async function action6({ request }) {
  var _a, _b, _c;
  let form = await request.formData(), coupon = (_a = form.get("coupon")) == null ? void 0 : _a.toString(), paymentMode = (_b = form.get("paymentMode")) == null ? void 0 : _b.toString(), cookieHeader = request.headers.get("Cookie"), currentCart = await cartCheckoutCookie.parse(cookieHeader);
  if (!((_c = currentCart == null ? void 0 : currentCart.cart) != null && _c.length))
    return (0, import_node9.redirect)("/");
  let packageId = currentCart.packageId;
  return cartSummary3(currentCart.cart, coupon, paymentMode, packageId);
}
async function loader11({
  request
}) {
  let cookieHeader = request.headers.get("Cookie"), currentCart = await cartCheckoutCookie.parse(cookieHeader), paymentModes = [...PaymentMethodList], estimatedPaymentModes = ACTIVE_PAYMENT_MODES, cartSummaryInfo = await CartService.summary(currentCart == null ? void 0 : currentCart.cart), packageId = currentCart == null ? void 0 : currentCart.packageId;
  return cartSummaryInfo.filter((item) => item.isEstimated).length && (estimatedPaymentModes = ESTIMATED_SERVICE_PAYMENT_MODES), (await cartSummary3((currentCart == null ? void 0 : currentCart.cart) || [], "", void 0, packageId)).estimation.total > PAYMENTGATEWAY_LIMIT && (estimatedPaymentModes = estimatedPaymentModes.filter((x) => x !== import_client12.BookingPaymentMode.FULL)), paymentModes.forEach((x) => {
    x.disabled = !ACTIVE_PAYMENT_MODES.includes(x.id) || !estimatedPaymentModes.includes(x.id);
  }), {
    paymentModes
  };
}
function CouponSection({ invalid, applyCoupon }) {
  let [getCoupon, setCoupon] = (0, import_react35.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Input.Wrapper, { label: "Coupon", error: invalid ? "Coupon expired or not eligible" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Group, { gap: "md", align: "start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Input, { size: "xs", flex: 1, error: invalid, onChange: (v) => setCoupon(v.target.value) }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 119,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Button, { variant: "outline", size: "xs", onClick: () => applyCoupon(getCoupon), children: "Apply" }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 118,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 117,
    columnNumber: 13
  }, this);
}
var meta4 = page_meta_default({
  title: "Checkout"
});
function cart_checkout_payment_index_default() {
  let [paymentMethod, setPayMethod] = (0, import_react35.useState)(), data = (0, import_react34.useLoaderData)(), navigation = (0, import_react34.useNavigation)(), location2 = (0, import_react34.useLocation)(), fetcher = (0, import_react34.useFetcher)(), [isLoading, setLoading] = (0, import_react35.useState)(!1);
  (0, import_react35.useEffect)(() => {
    fetchEstimation();
  }, []);
  function updatePayMethod(id) {
    let item = data.paymentModes.find((x) => x.id === id);
    item != null && item.disabled || (setPayMethod(id), fetchEstimation("", id));
  }
  function fetchEstimation(coupon = "", paymentMode = paymentMethod || "") {
    fetcher.submit({
      coupon,
      paymentMode
    }, {
      method: "POST"
    });
  }
  let Disablebadge = /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Badge, { variant: "outline", color: "gray", size: "xs", children: "NOT AVAILABLE" }, void 0, !1, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 162,
    columnNumber: 26
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Title, { order: 4, children: "Choose payment method" }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 165,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid, { justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Stack, { children: data.paymentModes.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Alert, { variant: item.disabled || item.id === paymentMethod ? "light" : "outline", color: item.disabled ? "gray" : item.id === paymentMethod ? "green" : "gray", title: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Group, { children: [
        item.title,
        item.disabled ? Disablebadge : ""
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 170,
        columnNumber: 219
      }, this), icon: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Checkbox, { disabled: item.disabled, checked: item.id === paymentMethod, color: "green" }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 170,
        columnNumber: 289
      }, this), className: item.disabled ? "" : "cursor-pointer", onClick: () => updatePayMethod(item.id), children: item.description }, item.id, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 170,
        columnNumber: 52
      }, this)) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 169,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Card, { shadow: "sm", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react35.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Skeleton, {}, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 177,
        columnNumber: 41
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react34.Await, { resolve: fetcher.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CouponSection, { invalid: (response == null ? void 0 : response.estimation.invalidCoupon) || !1, applyCoupon: fetchEstimation }, void 0, !1, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 180,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 181,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Divider, {}, void 0, !1, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 182,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 183,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react34.Form, { method: "post", action: "/order/submit", onSubmit: () => setLoading(!0), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "source", value: new URLSearchParams(location2.search).get("source") || "" }, void 0, !1, {
            fileName: "app/routes/cart.checkout.payment._index.tsx",
            lineNumber: 185,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "paymentMode", value: paymentMethod || "" }, void 0, !1, {
            fileName: "app/routes/cart.checkout.payment._index.tsx",
            lineNumber: 186,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "coupon", value: (response == null ? void 0 : response.estimation.coupon) || "" }, void 0, !1, {
            fileName: "app/routes/cart.checkout.payment._index.tsx",
            lineNumber: 187,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: "Subtotal" }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 190,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.total }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 191,
                columnNumber: 70
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 191,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 189,
              columnNumber: 41
            }, this),
            response != null && response.estimation.discount ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: [
                "Discount (",
                response.estimation.coupon,
                ")"
              ] }, void 0, !0, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 194,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: [
                "-",
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.discount }, void 0, !1, {
                  fileName: "app/routes/cart.checkout.payment._index.tsx",
                  lineNumber: 195,
                  columnNumber: 71
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 195,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 193,
              columnNumber: 74
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: "Discount" }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 197,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(currency_transformer_default, { value: 0 }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 198,
                columnNumber: 70
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 198,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 196,
              columnNumber: 51
            }, this),
            response != null && response.estimation.additionalPromo ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: "Additional Promo" }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 201,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: [
                "-",
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.additionalPromo }, void 0, !1, {
                  fileName: "app/routes/cart.checkout.payment._index.tsx",
                  lineNumber: 202,
                  columnNumber: 71
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 202,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 200,
              columnNumber: 81
            }, this) : "",
            response != null && response.estimation.gst ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", c: "dimmed", children: [
                "GST (",
                response == null ? void 0 : response.estimation.gst,
                "%)"
              ] }, void 0, !0, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 205,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.tax }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 206,
                columnNumber: 62
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 206,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 204,
              columnNumber: 68
            }, this) : "",
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Flex, { justify: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: "Total" }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 209,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Text, { size: "sm", fw: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.estimation.final }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 210,
                columnNumber: 70
              }, this) }, void 0, !1, {
                fileName: "app/routes/cart.checkout.payment._index.tsx",
                lineNumber: 210,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 208,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Divider, {}, void 0, !1, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 212,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Button, { type: "submit", variant: "filled", fullWidth: !0, disabled: !paymentMethod, loading: isLoading || ["loading", "submitting"].includes(fetcher.state || navigation.state), children: "Place Order" }, void 0, !1, {
              fileName: "app/routes/cart.checkout.payment._index.tsx",
              lineNumber: 213,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.checkout.payment._index.tsx",
            lineNumber: 188,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.checkout.payment._index.tsx",
          lineNumber: 184,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 179,
        columnNumber: 42
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 178,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 177,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 176,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.checkout.payment._index.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 167,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(UserNameDialog, {}, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 223,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 164,
    columnNumber: 12
  }, this);
}
function UserNameDialog() {
  var _a;
  let user = (0, import_react_redux4.useSelector)(getUser), fetcher = (0, import_react34.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Modal, { centered: !0, opened: !user.name && !((_a = fetcher.data) != null && _a.name), closeOnClickOutside: !1, withCloseButton: !1, onClose: () => null, title: "Complete your profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(fetcher.Form, { action: "/profile/update", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.TextInput, { label: "Your name", name: "fullName", placeholder: "Enter you full name" }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 233,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Group, { justify: "end", mt: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core21.Button, { type: "submit", name: "action", value: "update-profile", variant: "primary", children: "Save" }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 235,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/cart.checkout.payment._index.tsx",
      lineNumber: 234,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 232,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart.checkout.payment._index.tsx",
    lineNumber: 231,
    columnNumber: 12
  }, this);
}

// app/routes/_auth.user.order.$id._index.tsx
var auth_user_order_id_index_exports = {};
__export(auth_user_order_id_index_exports, {
  action: () => action7,
  default: () => auth_user_order_id_index_default,
  loader: () => loader12,
  meta: () => meta5
});
var import_icons2 = require("@ant-design/icons"), import_core22 = require("@mantine/core"), import_client14 = require("@prisma/client"), import_node10 = require("@remix-run/node"), import_react36 = require("@remix-run/react"), import_icons_react14 = require("@tabler/icons-react"), import_icons_react15 = require("@tabler/icons-react"), import_icons_react16 = require("@tabler/icons-react"), import_react37 = require("react"), import_ChatBox3 = __toESM(require_ChatBox());

// app/service/payment.service.ts
var import_client13 = require("@prisma/client"), import_razorpay = __toESM(require("razorpay")), import_razorpay_utils = require("razorpay/dist/utils/razorpay-utils");
var KEY_ID = process.env.RPAY_KEY || "", KEY_SECRET = process.env.RPAY_SECRET || "", rpInstance = new import_razorpay.default({ key_id: KEY_ID, key_secret: KEY_SECRET });
async function createOrder(props) {
  let entryId = generateUuid(), data = await rpInstance.orders.create({
    amount: props.amount * 100,
    currency: "INR",
    receipt: props.orderId,
    notes: {
      bookingId: props.bookingId,
      bookingPaymentId: entryId
    },
    partial_payment: props.partialPay
  });
  return await db.bookingPayments.create({
    data: {
      id: entryId,
      paymentRef: data.id,
      bookingId: props.bookingId,
      amount: props.amount
    }
  }), data;
}
async function getOrder(paymentRef) {
  return await rpInstance.orders.fetch(paymentRef);
}
async function validatePayment(orderId, paymentId, signature) {
  return (0, import_razorpay_utils.validatePaymentVerification)({
    order_id: orderId,
    payment_id: paymentId
  }, signature, process.env.RPAY_SECRET || "");
}
async function getPaymentByBookingPaymentId(bookingPaymentId) {
  let paymentRef = await db.bookingPayments.findFirstOrThrow({
    where: {
      id: bookingPaymentId
    },
    orderBy: {
      created_at: "asc"
    }
  });
  return await getOrder(paymentRef.paymentRef);
}
async function checkFirstPaymentDone(orderId) {
  return (await db.bookingPayments.findFirstOrThrow({
    where: {
      Booking: {
        orderId
      }
    },
    select: {
      paymentDone: !0
    },
    orderBy: {
      created_at: "asc"
    }
  })).paymentDone;
}
async function getPendingPayment(orderId) {
  let paymentRefList = await db.bookingPayments.findMany({
    where: {
      Booking: {
        orderId,
        status: {
          notIn: [import_client13.BookingStatus.REJECTED, import_client13.BookingStatus.CANCELLED]
        }
      }
    },
    orderBy: {
      created_at: "asc"
    }
  }), rpData = [];
  for (let i = 0; i < paymentRefList.length; i++) {
    let item = paymentRefList[i], d = await getOrder(item.paymentRef);
    d.amount_paid || rpData.push({ data: d, bookingPaymentId: item.id });
  }
  return rpData.length ? rpData[0] : null;
}
async function markPaymentDone(params) {
  return await db.bookingPayments.update({
    where: {
      id: params.bookingPaymentId
    },
    data: {
      paymentDone: !0
    }
  }), !0;
}
var PaymentService = {
  createOrder,
  getOrder,
  validatePayment,
  getPendingPayment,
  getPaymentByBookingPaymentId,
  checkFirstPaymentDone,
  markPaymentDone
}, payment_service_default = PaymentService;

// app/routes/_auth.user.order.$id._index.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
async function razerPayPaymentStatus(userId, orderId) {
  let pendingPayment = await payment_service_default.getPendingPayment(orderId);
  return (pendingPayment == null ? void 0 : pendingPayment.data) || null;
}
async function action7(args) {
  var _a, _b;
  let formData = args.request.formData(), _action = (_a = (await formData).get("action")) == null ? void 0 : _a.toString(), id = (_b = (await formData).get("id")) == null ? void 0 : _b.toString();
  if (!id)
    return !1;
  switch (_action) {
    case "cancel":
      await order_service_default.cancelOrder(id);
      break;
  }
  return !0;
}
async function loader12({ request, params }) {
  let orderId = params.id, userId = await (await getSession(request.headers.get("Cookie"))).get(USER_SESSION_KEY);
  if (!orderId || !userId)
    return null;
  let data = new Promise(function(resolve, reject) {
    db.booking.findFirstOrThrow({
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
        subTotal: !0,
        paymentMode: !0,
        Package: {
          select: {
            name: !0
          }
        },
        bookingService: {
          select: {
            id: !0,
            cost: !0,
            discount: !0,
            duration: !0,
            date: !0,
            timeHour: !0,
            status: !0,
            location: !0,
            vendorServiceGroup: {
              select: {
                group: {
                  select: {
                    name: !0,
                    imageName: !0
                  }
                },
                vendor: {
                  select: {
                    username: !0,
                    profileImageName: !0,
                    vendorType: {
                      select: {
                        vendorIdentifier: !0
                      }
                    }
                  }
                }
              }
            },
            BookingAddons: {
              select: {
                serviceName: !0,
                cost: !0
              }
            }
          }
        }
      }
    }).then((r) => {
      r ? resolve({
        id: r == null ? void 0 : r.id,
        orderId: r.orderId,
        status: r.status,
        paymentMode: r.paymentMode,
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
          vendor: x.vendorServiceGroup.vendor,
          addons: x.BookingAddons
        }))
      }) : reject("invalid order");
    }, (e) => {
      reject("Connection failed");
    });
  }), chatGroup = await chat_service_default.getChatgroupByOrderId(orderId, userId), paymentStatus = null;
  try {
    paymentStatus = await razerPayPaymentStatus(userId, orderId);
  } catch {
    paymentStatus = null;
  }
  let orderSummary2 = order_service_default.orderSummary(orderId);
  return (0, import_node10.defer)({
    orderId,
    data,
    orderSummary: orderSummary2,
    chatGroup,
    paymentStatus
  });
}
var orderStatusCheckList = [
  {
    color: "red",
    children: "Order Cancelled",
    dot: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react16.IconCircleX, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 215,
      columnNumber: 25
    }, this),
    filter: [import_client14.BookingStatus.CANCELLED]
  },
  {
    color: "red",
    dot: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react16.IconCircleX, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 220,
      columnNumber: 24
    }, this),
    children: "Sorry, Your order couldn't confirm due to unservicable.",
    filter: [import_client14.BookingStatus.REJECTED]
  },
  {
    color: "gold",
    dot: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react16.IconAlertCircleFilled, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 226,
      columnNumber: 24
    }, this),
    children: "Vendors has been notified.",
    filter: [import_client14.BookingStatus.PENDING]
  },
  {
    color: "green",
    dot: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react14.IconChecks, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 232,
      columnNumber: 24
    }, this),
    children: "Order Confirmed",
    filter: [import_client14.BookingStatus.ACCEPTED, import_client14.BookingStatus.IN_PROGRESS, import_client14.BookingStatus.COMPLETED]
  },
  {
    color: "yellow",
    dot: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react14.IconProgress, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 238,
      columnNumber: 24
    }, this),
    children: "Service is in progress",
    filter: [import_client14.BookingStatus.IN_PROGRESS]
  },
  {
    color: "#00CCFF",
    dot: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons2.SmileOutlined, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 244,
      columnNumber: 24
    }, this),
    children: "Finished",
    filter: [import_client14.BookingStatus.COMPLETED]
  },
  {
    color: "green",
    dot: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react15.IconCreditCardRefund, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 250,
      columnNumber: 24
    }, this),
    children: "Refund processed",
    filter: [import_client14.BookingStatus.REJECTED, import_client14.BookingStatus.CANCELLED]
  }
], meta5 = () => [
  { title: "My Account | Order Status" },
  { name: "description", content: "Celebria Collective, Find your Pefect vendor" }
], UserOrderHome = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 3, children: "Manage Booking" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 267,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 268,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: { base: 12, md: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(UserOrderHome.Order, {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 271,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 270,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: { base: 12, md: 4 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(UserOrderHome.ChatBox, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 274,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 275,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(UserOrderHome.OrderSummary, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 276,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 273,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 269,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.order.$id._index.tsx",
    lineNumber: 266,
    columnNumber: 16
  }, this),
  Order: () => {
    let data = (0, import_react36.useLoaderData)(), [showModal, setModal] = (0, import_react37.useState)(!1);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react37.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 285,
      columnNumber: 36
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Await, { resolve: data == null ? void 0 : data.data, children: (orderData) => orderData ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(UserOrderHome.PaymentAlert, { mode: orderData.paymentMode }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 288,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Card, { withBorder: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid, { align: "center", gutter: 20, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Group, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 5, children: [
              "Order ID: ",
              orderData.orderId
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 294,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 293,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Badge, { color: StatusMarker.get(orderData.status), children: orderData.status }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 296,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 292,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 291,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "content", children: orderData.status !== import_client14.BookingStatus.CANCELLED && orderData.status !== import_client14.BookingStatus.REJECTED && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Menu, { trigger: "hover", position: "bottom-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { variant: "outline", radius: "xl", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons2.EditOutlined, {}, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 302,
              columnNumber: 90
            }, this), size: "middle", children: "Manage" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 302,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 301,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Menu.Dropdown, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Menu.Item, { children: "Reschedule" }, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 307,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Menu.Item, { color: "red", onClick: () => setModal(!0), children: "Cancel" }, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 308,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 306,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 300,
            columnNumber: 125
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 299,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 290,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 314,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Divider, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 315,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 316,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Timeline, { bulletSize: 24, lineWidth: 2, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Timeline.Item, { bullet: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react16.IconCheck, { size: 12 }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 319,
            columnNumber: 52
          }, this), title: "Order Placed", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { c: "dimmed", size: "sm", children: "Your order has been recieved." }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 320,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { size: "xs", mt: 4, children: DateFormatter.short(orderData.date) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 321,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 319,
            columnNumber: 29
          }, this),
          orderStatusCheckList.filter((x) => {
            var _a;
            return (_a = x.filter) == null ? void 0 : _a.includes(orderData.status);
          }).map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Timeline.Item, { title: item.children, bullet: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            import_core22.ThemeIcon,
            {
              c: item.color,
              radius: "xl",
              size: 24,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(item.dot, {}, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 328,
                columnNumber: 33
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 323,
              columnNumber: 170
            },
            this
          ) }, i, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 323,
            columnNumber: 117
          }, this)),
          [import_client14.BookingStatus.CANCELLED, import_client14.BookingStatus.REJECTED, import_client14.BookingStatus.COMPLETED].some((x) => x === orderData.status) ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, {}, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 330,
            columnNumber: 207
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Timeline.Item, { title: "Waiting for updates..." }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 330,
            columnNumber: 142
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 318,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 317,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 289,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 334,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Card, { withBorder: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 5, children: "Services" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 336,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 337,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Divider, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 338,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 339,
          columnNumber: 21
        }, this),
        orderData.services.map((service) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Link, { to: "/profile/" + service.vendor.username, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Avatar, { src: PATH.THUMB_URL + service.vendor.profileImageName }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 342,
              columnNumber: 78
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 342,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 341,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Stack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Group, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Link, { to: "/profile/" + service.vendor.username, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { fw: 500, children: service.vendor.username }, void 0, !1, {
                    fileName: "app/routes/_auth.user.order.$id._index.tsx",
                    lineNumber: 347,
                    columnNumber: 82
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_auth.user.order.$id._index.tsx",
                    lineNumber: 347,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Badge, { size: "xs", children: (_a = service.vendor.vendorType) == null ? void 0 : _a.vendorIdentifier }, void 0, !1, {
                    fileName: "app/routes/_auth.user.order.$id._index.tsx",
                    lineNumber: 348,
                    columnNumber: 33
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.user.order.$id._index.tsx",
                  lineNumber: 346,
                  columnNumber: 32
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 5, children: service.name }, void 0, !1, {
                  fileName: "app/routes/_auth.user.order.$id._index.tsx",
                  lineNumber: 350,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { children: [
                  "Date: ",
                  service.date ? `${DateFormatter.short(service.date)}, at ${DateFormatter.timeHourTo12Hrs(service.timeHour)} (${service.duration} hours)` : "Our support agent will contact you shortly."
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.user.order.$id._index.tsx",
                  lineNumber: 351,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { children: [
                  "Venue: ",
                  service.location || "Our support agent will contact you shortly."
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.user.order.$id._index.tsx",
                  lineNumber: 354,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 345,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 358,
                columnNumber: 29
              }, this),
              service.addons.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Stack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { fw: 500, td: "underline", children: "Addon Services" }, void 0, !1, {
                  fileName: "app/routes/_auth.user.order.$id._index.tsx",
                  lineNumber: 361,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.List, { children: service.addons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.List.Item, { children: item.serviceName }, item.serviceName, !1, {
                  fileName: "app/routes/_auth.user.order.$id._index.tsx",
                  lineNumber: 363,
                  columnNumber: 61
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/_auth.user.order.$id._index.tsx",
                  lineNumber: 362,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 360,
                columnNumber: 51
              }, this) : ""
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 344,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Tooltip, { hidden: service.status !== import_client14.BookingStatus.PENDING, label: service.status === import_client14.BookingStatus.PENDING ? "Call button will enabled after the vendor confirmation" : "", children: service.status !== import_client14.BookingStatus.ACCEPTED ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { radius: "xl", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons2.PhoneOutlined, {}, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 370,
              columnNumber: 113
            }, this), size: "middle", disabled: !0, children: "Call" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 370,
              columnNumber: 78
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("a", { href: "tel:" + SUPPORT_CENTER.PHONE, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { radius: "xl", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons2.PhoneOutlined, {}, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 372,
              columnNumber: 118
            }, this), size: "middle", children: "Call" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 372,
              columnNumber: 83
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 372,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 369,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 368,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: 12, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Divider, {}, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 378,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 379,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 377,
              columnNumber: 25
            }, this)
          ] }, service.id, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 340,
            columnNumber: 56
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Modal, { opened: showModal, onClose: () => setModal(!1), title: "Confirm cancellation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { children: "The amount deducted will be refunded to your original payment menthod in 3-10 days." }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 385,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", value: orderData.id, name: "id" }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 386,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid, { justify: "end", style: { marginTop: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { type: "submit", color: "red", name: "action", value: "cancel", onClick: () => setModal(!1), children: "Confirm" }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 388,
            columnNumber: 43
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 388,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 387,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 384,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 383,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 335,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 287,
      columnNumber: 50
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 287,
      columnNumber: 43
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 286,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 285,
      columnNumber: 16
    }, this);
  },
  ChatBox: () => {
    let data = (0, import_react36.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react37.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 400,
      columnNumber: 37
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Await, { resolve: data == null ? void 0 : data.chatGroup, children: (response) => {
      var _a, _b;
      return response != null && response.id && ((_a = response == null ? void 0 : response.ChatGroupMember) != null && _a.length) ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_ChatBox3.ChatBox, { chatGroupId: response == null ? void 0 : response.id, memberId: (_b = response == null ? void 0 : response.ChatGroupMember[0]) == null ? void 0 : _b.id, disabled: response.isDisabled }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 403,
        columnNumber: 82
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Card, { withBorder: !0, title: "Chat is disabled", children: "Contact support to enable chat for this order." }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 403,
        columnNumber: 197
      }, this);
    } }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 401,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 400,
      columnNumber: 17
    }, this);
  },
  PaymentAlert: (input) => {
    var _a, _b, _c;
    let data = (0, import_react36.useLoaderData)();
    return ((_a = data == null ? void 0 : data.paymentStatus) == null ? void 0 : _a.amount_paid) === ((_b = data == null ? void 0 : data.paymentStatus) == null ? void 0 : _b.amount) ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 414,
      columnNumber: 20
    }, this) : input.mode === import_client14.BookingPaymentMode.PAY_LATER && ((_c = data == null ? void 0 : data.paymentStatus) == null ? void 0 : _c.status) === "created" ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(PaymentPendingCard, { orderId: data.orderId }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 418,
      columnNumber: 20
    }, this) : input.mode === import_client14.BookingPaymentMode.PAY_LATER && (data != null && data.paymentStatus) && (data == null ? void 0 : data.paymentStatus.amount_paid) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(PayOnFieldCard, { amount: data == null ? void 0 : data.paymentStatus.amount_due }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 422,
      columnNumber: 20
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(PaymentFailedCard, { orderId: (data == null ? void 0 : data.orderId) || "" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 425,
      columnNumber: 17
    }, this);
  },
  OrderSummary: () => {
    let data = (0, import_react36.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react37.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 430,
      columnNumber: 37
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Await, { resolve: data == null ? void 0 : data.orderSummary, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Card, { withBorder: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 4, children: "Order Summary" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 435,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 434,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Link, { to: "invoice", target: "_BLANK", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { variant: "subtle", size: "xs", children: "View Invoice" }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 439,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 438,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 437,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 433,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 443,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tbody, { children: response == null ? void 0 : response.bookingService.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tr, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { children: item.vendorServiceGroup.group.name }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 447,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { ta: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(currency_transformer_default, { value: item.cost }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 448,
            columnNumber: 52
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 448,
            columnNumber: 29
          }, this)
        ] }, item.vendorServiceGroup.group.name, !0, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 446,
          columnNumber: 63
        }, this)) }, void 0, !1, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 445,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tfoot, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tr, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { pt: "xl", children: "Sub Total" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 453,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { pt: "xl", ta: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.subTotal }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 454,
              columnNumber: 62
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 454,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 452,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tr, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { children: "Discount" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 457,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { ta: "right", children: [
              "-",
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.discount }, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 458,
                columnNumber: 53
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 458,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 456,
            columnNumber: 25
          }, this),
          (response == null ? void 0 : response.paymentMode) === import_client14.BookingPaymentMode.FULL ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tr, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { children: "Additional Promo" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 461,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { ta: "right", children: [
              "-",
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(currency_transformer_default, { value: (response == null ? void 0 : response.subTotal) * (common_data_default.FULL_PAYMENT_DISCOUNT / 100) }, void 0, !1, {
                fileName: "app/routes/_auth.user.order.$id._index.tsx",
                lineNumber: 462,
                columnNumber: 53
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 462,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 460,
            columnNumber: 77
          }, this) : "",
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tr, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: "Total" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 466,
              columnNumber: 39
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 466,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { ta: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.total }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 467,
              columnNumber: 55
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 467,
              columnNumber: 52
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 467,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 465,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tr, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: "Total Payable" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 470,
              columnNumber: 39
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 470,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { ta: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.total }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 471,
              columnNumber: 55
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 471,
              columnNumber: 52
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 471,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 469,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Tr, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: "Total Due" }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 474,
              columnNumber: 39
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 474,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Table.Td, { ta: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(currency_transformer_default, { value: response == null ? void 0 : response.BookingPayments.filter((x) => !x.paymentDone).reduce((sum, i) => sum + i.amount, 0) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 475,
              columnNumber: 55
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 475,
              columnNumber: 52
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.order.$id._index.tsx",
              lineNumber: 475,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.order.$id._index.tsx",
            lineNumber: 473,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.user.order.$id._index.tsx",
          lineNumber: 451,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 444,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 432,
      columnNumber: 30
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 431,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 430,
      columnNumber: 17
    }, this);
  }
}, auth_user_order_id_index_default = UserOrderHome.Index;
function PaymentFailedCard(data) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Alert, { variant: "light", color: "red", title: "Payment was unsuccessful", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react14.IconInfoCircle, {}, void 0, !1, {
    fileName: "app/routes/_auth.user.order.$id._index.tsx",
    lineNumber: 490,
    columnNumber: 18
  }, this), mb: "md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { children: "We couldn't confirm the payment for this order. Kindly complete the payment immediately to avoid cancellation." }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 493,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 494,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Link, { to: routes_data_default.get("PaymentGateway", {
      id: data.orderId
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { children: "Pay Now" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 498,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 495,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.order.$id._index.tsx",
    lineNumber: 492,
    columnNumber: 12
  }, this);
}
function PaymentPendingCard(data) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Alert, { variant: "light", color: "green", title: "Complete your payment", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react14.IconInfoCircle, {}, void 0, !1, {
    fileName: "app/routes/_auth.user.order.$id._index.tsx",
    lineNumber: 504,
    columnNumber: 18
  }, this), mb: "md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { children: [
      "Since you chose pay later, You have 3 days to pay 50% of the total amount.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 507,
        columnNumber: 85
      }, this),
      "Kindly chat with your vendor about your requirement and proceed with payment once you are ready."
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 507,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 508,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Link, { to: routes_data_default.get("PaymentGateway", {
      id: data.orderId
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Button, { color: "green", children: "Pay Now" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 512,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 509,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 514,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { c: "dimmed", size: "sm", children: [
      "Kindly read our ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Link, { to: "/about/refund-policy", children: "Cancellation & Refund Policy" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 515,
        columnNumber: 49
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 515,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.order.$id._index.tsx",
    lineNumber: 506,
    columnNumber: 13
  }, this);
}
function PayOnFieldCard(input) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Alert, { variant: "light", color: "green", title: "We recieved the partial payment", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_icons_react14.IconCircleCheck, {}, void 0, !1, {
    fileName: "app/routes/_auth.user.order.$id._index.tsx",
    lineNumber: 521,
    columnNumber: 18
  }, this), mb: "md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { children: "Pay rest of the amount after the service is done. " }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 524,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "xs" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 525,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Title, { order: 5, children: [
      "Balance: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(currency_transformer_default, { value: input.amount / 100 }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 526,
        columnNumber: 31
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 526,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 527,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_core22.Text, { c: "dimmed", size: "sm", children: [
      "Kindly read our ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react36.Link, { to: "/about/refund-policy", children: "Cancellation & Refund Policy" }, void 0, !1, {
        fileName: "app/routes/_auth.user.order.$id._index.tsx",
        lineNumber: 528,
        columnNumber: 49
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.order.$id._index.tsx",
      lineNumber: 528,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.order.$id._index.tsx",
    lineNumber: 523,
    columnNumber: 13
  }, this);
}

// app/routes/about.privacy-policy._index.tsx
var about_privacy_policy_index_exports = {};
__export(about_privacy_policy_index_exports, {
  default: () => about_privacy_policy_index_default,
  meta: () => meta6
});
var import_core23 = require("@mantine/core");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), meta6 = page_meta_default({
  title: "Privacy Policy"
});
function about_privacy_policy_index_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 3, children: "Privacy Policy" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: "Last updated on Aug 10th 2024" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: 'This Privacy Policy describes how Celebria Collective ("we", "our", or "us") collects, uses, and protects the personal information you provide when using our website and services.' }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: "Ownership of Photos/Videos" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: "At Celebria Collective, we respect the intellectual property rights of our vendors. We do not claim ownership of any photos, videos, or other creative content uploaded by our vendors on the platform. All such content remains the exclusive property of the vendor who created it. If you are a vendor or user who believes that your work has been uploaded on our platform without your permission, or if you would like any content to be removed for any reason, please contact us at info@celebriacollective.com. We will promptly review your request and take appropriate action, including the removal of the content if necessary." }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: "Information We Collect" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 20,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Personal Information: When you register on our platform, we may collect personal information such as your name, email address, phone number, and location." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Booking Information: We collect details about your bookings, including date, time, location, and specific service requests." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Payment Information: If you make payments through our platform, we collect payment details such as credit card information." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: " Communication Data: We may collect communication data, including messages exchanged between users and artists on our platform." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Usage Data: We gather information about how you use our website and services, including browsing history, IP address, and device information." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: "How We Use Your Information" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Service Provision: We use your personal information to provide our services, including facilitating bookings, managing accounts, and processing payments." }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Communication: We may use your contact information to communicate with you about bookings, promotions, and updates related to Celebria Collective." }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Improvement of Services: Your feedback and usage data help us improve our platform, services, and user experience." }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Marketing: With your consent, we may send promotional emails or messages about new features, offers, or events." }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 37,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: "Data Security" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: "We are committed to ensuring the security of your personal information and have implemented appropriate measures to protect it from unauthorized access, misuse, or alteration." }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: "Sharing of Information" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: "We do not sell, trade, or rent your personal information to third parties.However, we may share your information with:" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Artists: To facilitate bookings and provide services, we share relevant information with artists involved in your bookings." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Service Providers: We may share data with trusted third-party service providers who assist us in operating our platform and providing services." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: "Your Choices" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Opt - Out: You may opt out of receiving promotional communications from us by following the unsubscribe instructions included in our emails or contacting us directly." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Access and Update: You have the right to access and update your personal information stored on our platform.You can edit your profile information and booking details through your account settings." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Delete Account: If you wish to delete your Celebria Collective account, please contact us, and we will assist you in the process." }, void 0, !1, {
        fileName: "app/routes/about.privacy-policy._index.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: "Changes to This Policy" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.We encourage you to review this page periodically for any updates." }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core23.Title, { order: 5, children: "Contact Us" }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: "If you have any questions or concerns about our Privacy Policy, please contact us at info@celebriacollective.com." }, void 0, !1, {
      fileName: "app/routes/about.privacy-policy._index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.privacy-policy._index.tsx",
    lineNumber: 10,
    columnNumber: 12
  }, this);
}

// app/routes/about.refund-policy._index.tsx
var about_refund_policy_index_exports = {};
__export(about_refund_policy_index_exports, {
  default: () => about_refund_policy_index_default,
  meta: () => meta7
});
var import_core24 = require("@mantine/core");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), meta7 = page_meta_default({
  title: "Refund Policy"
});
function about_refund_policy_index_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Title, { order: 3, children: "Cancellation and Refund Policy" }, void 0, !1, {
      fileName: "app/routes/about.refund-policy._index.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/about.refund-policy._index.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Last updated on Aug 9th 2024" }, void 0, !1, {
      fileName: "app/routes/about.refund-policy._index.tsx",
      lineNumber: 77,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "At Celebria Collective, we strive to provide exceptional services and experiences. We understand that plans can change, and therefore, we have established a comprehensive cancellation and refund policy to ensure fairness and transparency for both our users and vendors." }, void 0, !1, {
      fileName: "app/routes/about.refund-policy._index.tsx",
      lineNumber: 78,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Title, { order: 5, children: "Cancellation by Users:" }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Full Refund: If a booking is cancelled more than 14 days before the scheduled service date, a full refund will be issued." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Partial Refund: If a booking is cancelled between 7 to 14 days before the scheduled service date, 50% of the total booking amount will be refunded." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Short Notice Cancellation: If a booking is made within 7 days of the scheduled service date:" }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "More than 48 hours before the service date: 50% refund will be issued." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Less than 48 hours before the service date: No refund will be issued." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.refund-policy._index.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Title, { order: 5, children: "Automatic Full Refund:" }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "If a vendor cancels the booking at any time, a full refund will be issued to the user." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Rescheduling Option: Users will be given the option to reschedule with the same vendor or choose a different vendor from our platform without any additional cost." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 93,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.refund-policy._index.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Title, { order: 5, children: "Force Majeure:" }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "In the event of circumstances beyond our control (e.g., natural disasters, pandemics, government restrictions), Celebria Collective reserves the right to cancel bookings. In such cases, users will be offered a full refund or the option to reschedule the service at no additional cost." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        "Refund Process",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Refund Request: Users can initiate a refund request through their account on the Celebria Collective platform. The refund request must be submitted within 14 days of the cancellation date. " }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Processing Time: Refunds will be processed within 7-10 business days from the date of approval. Users will be notified via email once the refund has been processed." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Payment Method: Refunds will be credited back to the original payment method used at the time of booking. In case of any discrepancies, users are advised to contact their bank or payment provider. Other Considerations" }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Non-Refundable Items: Any additional services or products purchased through Celebria Collective (e.g., digital assets, special equipment) are non-refundable once delivered." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Late or Missing Refunds:  If users have not received a refund within the specified timeframe, they should first check their bank account or contact their credit card company. If the issue persists, users are advised to contact Celebria Collective's customer support for further assistance." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Exceptional Circumstances: Celebria Collective reserves the right to assess refunds on a case-by-case basis for exceptional circumstances not covered by the standard policy." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.refund-policy._index.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core24.Title, { order: 5, children: " Policy Changes:" }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Celebria Collective reserves the right to update this policy periodically. Vendors will be notified of any significant changes through the platform or email. By joining Celebria Collective, vendors agree to adhere to this cancellation policy and strive to provide exceptional service to our users." }, void 0, !1, {
          fileName: "app/routes/about.refund-policy._index.tsx",
          lineNumber: 118,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.refund-policy._index.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.refund-policy._index.tsx",
      lineNumber: 81,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.refund-policy._index.tsx",
    lineNumber: 74,
    columnNumber: 12
  }, this);
}

// app/routes/collections.$id.$highlight.tsx
var collections_id_highlight_exports = {};
__export(collections_id_highlight_exports, {
  default: () => collections_id_highlight_default,
  loader: () => loader13,
  meta: () => meta8
});
var import_core26 = require("@mantine/core"), import_node11 = require("@remix-run/node"), import_react39 = require("@remix-run/react"), import_react40 = require("react");

// app/components/ServiceQuickCard.tsx
var import_core25 = require("@mantine/core"), import_react38 = require("@remix-run/react"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function ServiceQuickCard({ url, title, img, services }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Stack, { justify: "space-between", h: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Link, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Image, { src: img, style: { borderRadius: "12px", boxShadow: "0 20px 40px #d3d3d3" } }, void 0, !1, {
        fileName: "app/components/ServiceQuickCard.tsx",
        lineNumber: 9,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/ServiceQuickCard.tsx",
        lineNumber: 8,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Link, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Title, { order: 5, children: title }, void 0, !1, {
        fileName: "app/components/ServiceQuickCard.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/ServiceQuickCard.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      services != null && services.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Group, { gap: "xs", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Text, { size: "sm", fw: "500", c: "dimmed", children: "Includes:" }, void 0, !1, {
          fileName: "app/components/ServiceQuickCard.tsx",
          lineNumber: 16,
          columnNumber: 17
        }, this),
        services.map((description, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Badge, { variant: "light", color: "gray", size: "xs", children: description }, "d-" + key, !1, {
          fileName: "app/components/ServiceQuickCard.tsx",
          lineNumber: 17,
          columnNumber: 53
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/ServiceQuickCard.tsx",
        lineNumber: 15,
        columnNumber: 32
      }, this) : ""
    ] }, void 0, !0, {
      fileName: "app/components/ServiceQuickCard.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react38.Link, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core25.Button, { fullWidth: !0, variant: "outline", size: "xs", radius: "md", children: "Browse" }, void 0, !1, {
      fileName: "app/components/ServiceQuickCard.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ServiceQuickCard.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ServiceQuickCard.tsx",
    lineNumber: 6,
    columnNumber: 12
  }, this);
}
var ServiceQuickCard_default = ServiceQuickCard;

// app/service/collections.service.ts
function getCollectionByType(type, vendorTypeKey) {
  return new Promise(function(resovle, reject) {
    db.serviceGroupType.findFirst({
      where: {
        keyName: type
      },
      select: {
        name: !0,
        ServiceGroup: {
          where: {
            isActive: !0,
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
          imageName: service.imageName ? PATH.THUMB_URL + service.imageName : PATH.FALLBACK_IMG
        })),
        vendorType: r == null ? void 0 : r.ServiceGroup[0].vendorType.name
      });
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function getRelatedCollectionByType(type, vendorTypeKey) {
  return new Promise(function(resovle, reject) {
    db.serviceGroupType.findFirst({
      where: {
        keyName: type
      },
      select: {
        name: !0,
        ServiceGroup: {
          where: {
            isActive: !0,
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
        imageName: service.imageName ? PATH.THUMB_URL + service.imageName : PATH.FALLBACK_IMG,
        vendorType: service.vendorType
      })));
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function getServicesGroupsByCollection(keyName) {
  return new Promise(function(resolve, reject) {
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
            isActive: !0,
            serviceGroupType: {
              keyName
            }
          },
          select: {
            name: !0,
            id: !0,
            imageName: !0,
            VendorServiceGroup: {
              take: 1,
              orderBy: {
                cost: "asc"
              },
              select: {
                cost: !0
              },
              where: {
                vendor: {
                  isActive: !0
                }
              }
            }
          }
        }
      },
      where: {
        isActive: !0,
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
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function getCollectionInfo(keyName) {
  return new Promise(function(resolve, reject) {
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
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
var CollectionService = {
  getCollectionByType,
  getRelatedCollectionByType,
  getServicesGroupsByCollection,
  getCollectionInfo
}, collections_service_default = CollectionService;

// app/utils/capitalize.trasformer.ts
function capitalize(val = "") {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
var capitalize_trasformer_default = capitalize;

// app/routes/collections.$id.$highlight.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), meta8 = ({ params }) => {
  var _a, _b;
  return [
    { title: capitalize_trasformer_default((_a = params.id) == null ? void 0 : _a.replace(/-/g, " ")) + " in " + capitalize_trasformer_default((_b = params.highlight) == null ? void 0 : _b.replace(/-/g, " ")) + " | Celebria Collective" },
    { name: "description", content: "Find your Pefect vendor" }
  ];
};
function loader13(args) {
  let collectionKey = args.params.id, highlightId = args.params.highlight;
  if (!collectionKey || !highlightId)
    return null;
  let data = collections_service_default.getCollectionByType(collectionKey, highlightId), related = collections_service_default.getRelatedCollectionByType(collectionKey, highlightId), topRatedVendors = VendorQuery.topRatedVendorsByType(highlightId);
  return (0, import_node11.defer)({
    data,
    related,
    topRatedVendors,
    highlightId,
    collectionKey
  });
}
var CollectionsHighlightPage = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Container, { size: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(CollectionsHighlightPage.Highlight, {}, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Divider, {}, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid, { gutter: "xl", justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(CollectionsHighlightPage.RelatedServices, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(CollectionsHighlightPage.TopVendors, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 54,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid.Col, { span: { base: 12, md: 8 } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 43,
    columnNumber: 16
  }, this),
  Highlight: () => {
    let data = (0, import_react39.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react40.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 66,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Await, { resolve: data == null ? void 0 : data.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Title, { order: 3, children: [
        "Explore everything under ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { className: "_color-primary", children: response == null ? void 0 : response.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 69,
          columnNumber: 67
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { style: { paddingBottom: "10px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 70,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Title, { order: 5, children: [
        "Book ",
        response == null ? void 0 : response.vendorType
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 71,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { style: { paddingBottom: "40px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 72,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid, { gutter: { base: 20, md: 40 }, children: response == null ? void 0 : response.services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid.Col, { span: { base: 6, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(ServiceQuickCard_default, { url: routes_data_default.get("ServiceGroup", { id: (data == null ? void 0 : data.highlightId) || "", subId: service.id }), title: service.name, img: service.imageName }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 75,
        columnNumber: 33
      }, this) }, service.id, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 74,
        columnNumber: 64
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 73,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 68,
      columnNumber: 34
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 65,
      columnNumber: 16
    }, this);
  },
  RelatedServices: () => {
    let data = (0, import_react39.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Title, { order: 5, children: "Frequently bought together" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { style: { paddingBottom: "30px" } }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react40.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 89,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Await, { resolve: data == null ? void 0 : data.related, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid, { gutter: { base: 20, md: 40 }, justify: "start", children: response == null ? void 0 : response.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid.Col, { span: { base: 6, md: 3 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Link, { to: routes_data_default.get("ServiceGroup", { id: service.vendorType.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Image, { src: service.imageName, style: { borderRadius: "5px" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 93,
          columnNumber: 122
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 93,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { style: { paddingBottom: "14px" } }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 94,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Text, { c: "dimmed", size: "sm", children: service.vendorType.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 95,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Link, { to: routes_data_default.get("ServiceGroup", { id: service.vendorType.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Text, { fw: 500, children: service.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 97,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 96,
          columnNumber: 29
        }, this)
      ] }, service.id, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 92,
        columnNumber: 51
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 91,
        columnNumber: 34
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 86,
      columnNumber: 16
    }, this);
  },
  TopVendors: () => {
    let data = (0, import_react39.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Title, { order: 5, children: "Top Rated" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 110,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react40.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 112,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Await, { resolve: data == null ? void 0 : data.topRatedVendors, children: (response) => response != null && response.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid, { gutter: "md", children: response == null ? void 0 : response.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Grid.Col, { span: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Stack, { justify: "center", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Link, { to: routes_data_default.get("VendorProfile", { id: item.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Avatar, { src: item.image, size: "lg" }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 118,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 117,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react39.Link, { to: routes_data_default.get("VendorProfile", { id: item.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Text, { fw: 500, children: item.name }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 120,
          columnNumber: 89
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id.$highlight.tsx",
          lineNumber: 120,
          columnNumber: 33
        }, this)
      ] }, item.id, !0, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 116,
        columnNumber: 29
      }, this) }, item.id, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 115,
        columnNumber: 48
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 114,
        columnNumber: 53
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Text, { c: "dimmed", children: "Sorry, we couldn't find any vendors under this category" }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 122,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id.$highlight.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id.$highlight.tsx",
      lineNumber: 109,
      columnNumber: 16
    }, this);
  },
  OtherServices: () => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core26.Title, { order: 4, children: "Also try" }, void 0, !1, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 131,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/collections.$id.$highlight.tsx",
    lineNumber: 129,
    columnNumber: 16
  }, this)
}, collections_id_highlight_default = CollectionsHighlightPage.Index;

// app/routes/about.contact-us._index.tsx
var about_contact_us_index_exports = {};
__export(about_contact_us_index_exports, {
  default: () => about_contact_us_index_default,
  meta: () => meta9
});
var import_core27 = require("@mantine/core"), import_icons_react17 = require("@tabler/icons-react");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), meta9 = page_meta_default({
  title: "Contact Us"
});
function about_contact_us_index_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Title, { order: 3, children: "Get in touch" }, void 0, !1, {
      fileName: "app/routes/about.contact-us._index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Text, { children: "Call or email us with your questions." }, void 0, !1, {
      fileName: "app/routes/about.contact-us._index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/about.contact-us._index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Grid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.List, { spacing: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.List.Item, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.ThemeIcon, { color: "gray", size: 24, variant: "white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react17.IconPhone, { style: { width: (0, import_core27.rem)(16), height: (0, import_core27.rem)(16) } }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 21,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 20,
        columnNumber: 25
      }, this), children: [
        SUPPORT_CENTER.PHONE,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/about.contact-us._index.tsx",
          lineNumber: 24,
          columnNumber: 48
        }, this),
        "MON-SUN: 10AM to 6PM"
      ] }, void 0, !0, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.List.Item, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.ThemeIcon, { color: "gray", size: 24, variant: "white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react17.IconMail, { style: { width: (0, import_core27.rem)(16), height: (0, import_core27.rem)(16) } }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 28,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 27,
        columnNumber: 25
      }, this), children: "info@celebriacollective.com" }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.List.Item, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.ThemeIcon, { color: "gray", size: 24, variant: "white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react17.IconMapPin, { style: { width: (0, import_core27.rem)(16), height: (0, import_core27.rem)(16) } }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 33,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this), children: "Celebria Collective Private Limited: 02, VASANTHA TOWERS, COCONUT garden layout, Krishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036" }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.List.Item, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.ThemeIcon, { color: "gray", size: 24, variant: "white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react17.IconBrandWhatsapp, { style: { width: (0, import_core27.rem)(16), height: (0, import_core27.rem)(16) } }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 39,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("a", { href: SUPPORT_CENTER.WHATSAPP_CHAT, target: "_BLANK", children: "chat on whatsapp" }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 41,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.List.Item, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core27.ThemeIcon, { color: "gray", size: 24, variant: "white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_icons_react17.IconMessage, { style: { width: (0, import_core27.rem)(16), height: (0, import_core27.rem)(16) } }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 44,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("a", { href: SUPPORT_CENTER.ENQUIRY_FORM, target: "_BLANK", children: "Contact Us" }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 46,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.contact-us._index.tsx",
        lineNumber: 42,
        columnNumber: 22
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.contact-us._index.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.contact-us._index.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.contact-us._index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.contact-us._index.tsx",
    lineNumber: 12,
    columnNumber: 12
  }, this);
}

// app/routes/profile.$user.portfolio.tsx
var profile_user_portfolio_exports = {};
__export(profile_user_portfolio_exports, {
  default: () => Portfolio,
  loader: () => loader14
});
var import_core29 = require("@mantine/core"), import_react41 = require("@remix-run/react"), import_react_masonry_css = __toESM(require("react-masonry-css")), import_react_photo_view3 = require("react-photo-view");

// app/components/VideoPreviewItem.tsx
var import_core28 = require("@mantine/core"), import_icons_react18 = require("@tabler/icons-react"), import_react_photo_view2 = require("react-photo-view"), import_react_youtube = __toESM(require("react-youtube"));
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), elementSize = 640;
function VideoPreviewItem({ ytId }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    import_react_photo_view2.PhotoView,
    {
      width: elementSize,
      height: elementSize,
      render: ({ scale, attrs }) => {
        var _a;
        let offset = ((((_a = attrs.style) == null ? void 0 : _a.width) || 0) - elementSize) / elementSize, childScale = scale === 1 ? scale + offset : 1 + offset;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { ...attrs, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { transform: `scale(${childScale})`, width: elementSize, transformOrigin: "0 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          import_react_youtube.default,
          {
            videoId: ytId
          },
          void 0,
          !1,
          {
            fileName: "app/components/VideoPreviewItem.tsx",
            lineNumber: 24,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/VideoPreviewItem.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/VideoPreviewItem.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this);
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "cursor-pointer", style: { zIndex: 0, position: "relative", height: "100%" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          import_core28.LoadingOverlay,
          {
            visible: !0,
            overlayProps: {
              backgroundOpacity: 0
            },
            loaderProps: {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.ActionIcon, { variant: "filled", color: "pink", size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_icons_react18.IconPlayerPlay, {}, void 0, !1, {
                fileName: "app/components/VideoPreviewItem.tsx",
                lineNumber: 38,
                columnNumber: 84
              }, this) }, void 0, !1, {
                fileName: "app/components/VideoPreviewItem.tsx",
                lineNumber: 38,
                columnNumber: 31
              }, this)
            },
            bg: "none"
          },
          void 0,
          !1,
          {
            fileName: "app/components/VideoPreviewItem.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core28.Image, { radius: "md", src: PATH.YOUTUBE_THUMBNAIL.replace(":id", ytId), h: "100%", w: "100%", fit: "cover" }, void 0, !1, {
          fileName: "app/components/VideoPreviewItem.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/VideoPreviewItem.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/VideoPreviewItem.tsx",
      lineNumber: 13,
      columnNumber: 12
    },
    this
  );
}
var VideoPreviewItem_default = VideoPreviewItem;

// app/routes/profile.$user.portfolio.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
async function loader14({ params }) {
  let id = params.user;
  return await VendorQuery.portfolioByUsername(id);
}
function Portfolio() {
  let data = (0, import_react41.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_core29.Title, { order: 4, children: "Best works" }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_core29.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react_photo_view3.PhotoProvider, { loop: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react_masonry_css.default, { className: "masonry-grid", columnClassName: "masonry-grid_column", breakpointCols: 3, children: data == null ? void 0 : data.map((image2, key) => image2.fileType === "youtube" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { style: { height: "240px", marginBottom: "30px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(VideoPreviewItem_default, { ytId: image2.fileName }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 27,
      columnNumber: 100
    }, this) }, "thumb" + key, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 27,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react_photo_view3.PhotoView, { src: PATH.RESOURCE_URL + image2.fileName, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_core29.Image, { radius: "md", className: "cursor-pointer", src: PATH.THUMB_URL + image2.fileName }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 28,
      columnNumber: 29
    }, this) }, "thumb" + key, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 27,
      columnNumber: 151
    }, this)) }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.portfolio.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.$user.portfolio.tsx",
    lineNumber: 20,
    columnNumber: 12
  }, this);
}

// app/routes/collections.$id._index.tsx
var collections_id_index_exports = {};
__export(collections_id_index_exports, {
  default: () => collections_id_index_default,
  loader: () => loader15,
  meta: () => meta10
});
var import_core30 = require("@mantine/core"), import_node12 = require("@remix-run/node"), import_react42 = require("@remix-run/react"), import_react43 = require("react");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), meta10 = ({ params }) => {
  var _a;
  return [
    { title: "Collection - " + capitalize_trasformer_default((_a = params.id) == null ? void 0 : _a.replace(/-/g, " ")) + " | Celebria Collective" },
    { name: "description", content: "Find your Pefect vendor" }
  ];
};
function loader15(args) {
  let id = args.params.id;
  if (!id)
    throw "error";
  let results = collections_service_default.getServicesGroupsByCollection(id);
  return (0, import_node12.defer)({
    data: collections_service_default.getCollectionInfo(id),
    results
  });
}
var CollectionsPage = {
  Index: () => [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(CollectionsPage.Header, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(CollectionsPage.Section, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ],
  Header: () => {
    let data = (0, import_react42.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Container, { size: "xl", style: { paddingBottom: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "section-bg-pattern _pattern-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Grid, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Grid.Col, { span: 8, style: { padding: "20px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react43.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 52,
        columnNumber: 45
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react42.Await, { resolve: data.data, children: (result) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Title, { order: 5, children: "The easiest way to find" }, void 0, !1, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 55,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Title, { order: 3, children: [
          "Services in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "_color-primary", children: result.name }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 56,
            columnNumber: 66
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 56,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Text, { size: "sm", children: "By bringing together ambitious and talented professionals with AI, we are making your work easier." }, void 0, !1, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 57,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Flex, { gap: "md", align: "center", style: { paddingTop: "30px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Text, { c: "dimmed", children: "See how it works" }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 59,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Button, { radius: "xl", variant: "outline", children: "Watch Video" }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 60,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 58,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 54,
        columnNumber: 44
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 53,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 52,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Grid.Col, { span: 3, style: { overflow: "hidden", marginBottom: "-40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("img", { src: "/assets/art-1.png" }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 67,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 48,
      columnNumber: 16
    }, this);
  },
  Section: () => {
    let data = (0, import_react42.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react43.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 77,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react42.Await, { resolve: data.results, children: (result) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Tabs, { defaultValue: "0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Tabs.List, { children: result.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Tabs.Tab, { value: "" + i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Title, { order: 5, children: item.name }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 81,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 81,
        columnNumber: 54
      }, this)) }, void 0, !1, {
        fileName: "app/routes/collections.$id._index.tsx",
        lineNumber: 80,
        columnNumber: 25
      }, this),
      result.map(
        (item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Tabs.Panel, { value: "" + i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Grid, { gutter: { base: 20, md: 40 }, style: { padding: "40px 0" }, children: [
          item.serviceGroup.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react42.Link, { to: routes_data_default.get("ServiceGroup", { id: item.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { style: { borderRadius: "10px", background: "#F5F5F7", padding: "12px", boxShadow: "0 2px 4px #d3d3d3" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Image, { src: service.imageName ? PATH.THUMB_URL + service.imageName : "", style: { borderRadius: "6px", maxHeight: "140px", objectFit: "cover" }, width: "100%" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 88,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react42.Link, { to: routes_data_default.get("ServiceGroup", { id: item.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Title, { order: 5, children: service.name }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 90,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 89,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react42.Link, { to: routes_data_default.get("ServiceGroup", { id: item.keyName, subId: service.id }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Button, { fullWidth: !0, variant: "outline", size: "xs", radius: "md", children: "Browse" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 93,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 92,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { style: { height: "26px" }, children: service.VendorServiceGroup.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Group, { justify: "center", gap: "sm", align: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Text, { size: "sm", children: "Starts from" }, void 0, !1, {
                fileName: "app/routes/collections.$id._index.tsx",
                lineNumber: 96,
                columnNumber: 138
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Badge, { color: "yellow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(currency_transformer_default, { value: service.VendorServiceGroup[0].cost }, void 0, !1, {
                fileName: "app/routes/collections.$id._index.tsx",
                lineNumber: 96,
                columnNumber: 194
              }, this) }, void 0, !1, {
                fileName: "app/routes/collections.$id._index.tsx",
                lineNumber: 96,
                columnNumber: 172
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 96,
              columnNumber: 86
            }, this) : "" }, void 0, !1, {
              fileName: "app/routes/collections.$id._index.tsx",
              lineNumber: 95,
              columnNumber: 45
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 87,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 86,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 85,
            columnNumber: 121
          }, this) }, service.id, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 85,
            columnNumber: 67
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core30.Divider, {}, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 104,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/collections.$id._index.tsx",
            lineNumber: 103,
            columnNumber: 33
          }, this)
        ] }, item.keyName, !0, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 84,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/collections.$id._index.tsx",
          lineNumber: 83,
          columnNumber: 50
        }, this)
      )
    ] }, void 0, !0, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 79,
      columnNumber: 32
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 78,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/collections.$id._index.tsx",
      lineNumber: 76,
      columnNumber: 16
    }, this);
  }
}, collections_id_index_default = CollectionsPage.Index;

// app/routes/blog.$post.$id._index.tsx
var blog_post_id_index_exports = {};
__export(blog_post_id_index_exports, {
  default: () => blog_post_id_index_default,
  loader: () => loader16,
  meta: () => meta11
});
var import_core31 = require("@mantine/core"), import_react44 = require("@remix-run/react");

// app/service/blog.service.ts
var wordpress = require("wordpress"), POST_LIMIT = 1e3, wpClient = wordpress.createClient({
  url: "https://cc.eddeclothing.com",
  username: "cc_app_user",
  password: "G2eC8%s5vA&SKn8BtAJFPx^a"
});
function getLatestPosts() {
  return new Promise((resolve, reject) => {
    wpClient.getPosts({
      status: "publish",
      number: POST_LIMIT
    }, ["id", "name", "title", "thumbnail", "date"], function(error, posts) {
      resolve(posts);
    });
  });
}
function getPost(id) {
  return new Promise((resolve, reject) => {
    wpClient.getPost(id, ["id", "title", "content", "type", "date"], function(error, post) {
      resolve(post);
    });
  });
}
var BlogService = {
  getLatestPosts,
  getPost
}, blog_service_default = BlogService;

// app/styles/blog.module.css
var blog_module_default = { blogContainer: "blog-module__blogContainer__RUG44" };

// app/routes/blog.$post.$id._index.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), meta11 = page_meta_default({
  title: "Blog"
});
async function loader16({ params }) {
  let postId = params.id;
  if (!postId)
    throw new Response("Page not found", {
      status: 404
    });
  return await blog_service_default.getPost(postId);
}
function blog_post_id_index_default() {
  let data = (0, import_react44.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Container, { size: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Stack, { justify: "center", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react44.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Text, { children: "Home" }, void 0, !1, {
          fileName: "app/routes/blog.$post.$id._index.tsx",
          lineNumber: 30,
          columnNumber: 32
        }, this) }, void 0, !1, {
          fileName: "app/routes/blog.$post.$id._index.tsx",
          lineNumber: 30,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Text, { children: "/" }, void 0, !1, {
          fileName: "app/routes/blog.$post.$id._index.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react44.Link, { to: "/blog", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Text, { children: "Blog" }, void 0, !1, {
          fileName: "app/routes/blog.$post.$id._index.tsx",
          lineNumber: 32,
          columnNumber: 36
        }, this) }, void 0, !1, {
          fileName: "app/routes/blog.$post.$id._index.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog.$post.$id._index.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Title, { maw: { sm: "100%", md: "60%" }, order: 1, ta: "center", children: data.title }, void 0, !1, {
        fileName: "app/routes/blog.$post.$id._index.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Space, { h: "xs" }, void 0, !1, {
        fileName: "app/routes/blog.$post.$id._index.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ShareOptions_default, { fullWidth: !1 }, void 0, !1, {
        fileName: "app/routes/blog.$post.$id._index.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog.$post.$id._index.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/blog.$post.$id._index.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/blog.$post.$id._index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Grid, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Grid.Col, { span: { base: 12, md: 7 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core31.Box, { className: blog_module_default.blogContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: data.content } }, void 0, !1, {
      fileName: "app/routes/blog.$post.$id._index.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog.$post.$id._index.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog.$post.$id._index.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog.$post.$id._index.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.$post.$id._index.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

// app/routes/partner.signup._index.tsx
var partner_signup_index_exports = {};
__export(partner_signup_index_exports, {
  action: () => action8,
  default: () => partner_signup_index_default,
  loader: () => loader17,
  meta: () => meta12
});
var import_core32 = require("@mantine/core"), import_react45 = require("@remix-run/react"), import_icons_react19 = require("@tabler/icons-react"), import_react46 = require("react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
async function action8(args) {
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
async function loader17({ params }) {
  return null;
}
var meta12 = () => [
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
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Stack, { gap: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(PartnerSignup.Jumbotron, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(PartnerSignup.Counter, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(PartnerSignup.Intro, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(PartnerSignup.Features, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(PartnerSignup.Form, {}, void 0, !1, {
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: jumbotronStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      import_core32.Overlay,
      {
        gradient: "linear-gradient(45deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",
        opacity: 0.85,
        p: "100px 20px",
        zIndex: "auto",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Stack, { align: "center", justify: "center", h: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 1, style: { color: "white" }, children: "Earn upto 3 times your current income and change your life." }, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 132,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 3, c: "white", children: "Become a part of a community with more than 100 service professionals" }, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/partner.signup._index.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_core32.Button,
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
  Counter: () => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: { padding: "50px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid, { justify: "center", gutter: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: { base: 5, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Stack, { justify: "center", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { children: "100+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 161,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 4, children: "Members" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: { base: 5, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Stack, { justify: "center", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { children: "1000+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 167,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 4, children: "Customers" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: { base: 5, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Stack, { justify: "center", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { children: "20,000+" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 173,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 4, children: "Services" }, void 0, !1, {
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
  Intro: () => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid, { justify: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Divider, {}, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 186,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: 12 }, void 0, !1, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { className: "_text-center", span: { base: 12, md: 10, lg: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: { padding: "40px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Text, { c: "dimmed", children: "Celebria Collective is more than just a platform; it's a launchpad for photographers, makeup artists, videographers, and fashion designers looking to scale their business and amplify their artistic influence. Ready to elevate your craft and take your business to the next level?" }, void 0, !1, {
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
  Features: () => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid, { justify: "center", align: "center", gutter: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Blockquote, { color: "gray", cite: "\u2013 Rahul", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_icons_react19.IconQuote, {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: { base: 5, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      import_core32.Image,
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
    let [activeCard, setActiveCard] = (0, import_react46.useState)(null);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid, { id: "signup-form", gutter: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: { paddingTop: "50px", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 2, children: [
        "Join us at Celebria Collective and",
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("br", {}, void 0, !1, {
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
      VendorList.map((vendor) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: { base: 12, lg: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        import_core32.Card,
        {
          style: {
            background: vendor.background,
            color: "#fff",
            width: "100%",
            borderRadius: "8px"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_core32.Image,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: { marginTop: "-10px", color: "white" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Stack, { gap: "lg", align: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 4, children: vendor.title }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 249,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Text, { ta: "center", fw: 500, children: vendor.description }, void 0, !1, {
                fileName: "app/routes/partner.signup._index.tsx",
                lineNumber: 252,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react45.Link, { to: "onboard", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
                import_core32.Button,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        import_core32.Modal,
        {
          opened: !!activeCard,
          onClose: () => setActiveCard(null),
          title: "Register as a professional",
          children: activeCard && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
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
    let fetcher = (0, import_react45.useFetcher)(), [formSubmitted, setFormSubmitted] = (0, import_react46.useState)(!1);
    function customClose() {
      setFormSubmitted(!1), onClose();
    }
    function submitHandler(e) {
      e.preventDefault(), setFormSubmitted(!0);
    }
    return formSubmitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Stack, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 3, children: "Thank you for your interest" }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 313,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Text, { size: "sm", children: "Our representative will contact you soon." }, void 0, !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 314,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Button, { onClick: customClose, children: "Close" }, "buy", !1, {
        fileName: "app/routes/partner.signup._index.tsx",
        lineNumber: 315,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.signup._index.tsx",
      lineNumber: 312,
      columnNumber: 28
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(fetcher.Form, { method: "post", onSubmit: submitHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid, { gutter: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Title, { order: 5, children: "I'm a" }, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 321,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Group, { defaultValue: type || "", children: VendorList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Radio, { value: item.id, name: "type", label: item.name }, item.id, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Input.Wrapper, { label: "Full Name", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        import_core32.Input,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Input.Wrapper, { label: "Contact Number", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Input, { name: "phone", leftSection: "+91", maxLength: 10, minLength: 10, required: !0 }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Input.Wrapper, { label: "Email", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Input, { name: "email", type: "email", required: !0 }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Input.Wrapper, { label: "Social media url", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Input, { name: "socialUrl", type: "url", required: !0 }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Grid.Col, { span: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "hidden", name: "category", value: type || "" }, void 0, !1, {
          fileName: "app/routes/partner.signup._index.tsx",
          lineNumber: 353,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core32.Button, { variant: "filled", radius: "xl", type: "submit", children: "Submit" }, void 0, !1, {
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

// app/routes/_auth.order.checkout.tsx
var auth_order_checkout_exports = {};
__export(auth_order_checkout_exports, {
  action: () => action9,
  default: () => auth_order_checkout_default
});
var import_node13 = require("@remix-run/node");
async function action9({
  request
}) {
  var _a, _b, _c, _d;
  let cookieHeader = request.headers.get("Cookie"), userId = (await getSession(cookieHeader)).get(USER_SESSION_KEY), body = await request.formData(), currentCart = [], source = (_a = body.get("source")) == null ? void 0 : _a.toString(), paymentUrl = routes_data_default.get("CheckoutPayment") + "?source=" + source, redirectUrlInstance, packageId;
  try {
    let newItem = JSON.parse(((_b = body.get("cart")) == null ? void 0 : _b.toString()) || "");
    packageId = (_c = body.get("packageId")) == null ? void 0 : _c.toString(), newItem && (currentCart = newItem), redirectUrlInstance = new URL(((_d = body.get("redirectUrl")) == null ? void 0 : _d.toString()) || paymentUrl), redirectUrlInstance.searchParams.set("cartStatus", "true");
  } catch {
    redirectUrlInstance = null;
  }
  let redirectUrl = redirectUrlInstance ? redirectUrlInstance.href : paymentUrl;
  return userId || (redirectUrl = "/user/login?redirectUrl=" + redirectUrl), (0, import_node13.redirect)(redirectUrl, {
    headers: {
      "Set-Cookie": await cartCheckoutCookie.serialize({ cart: currentCart, packageId })
    }
  });
}
var auth_order_checkout_default = () => "please wait...";

// app/routes/_auth.profile.update.tsx
var auth_profile_update_exports = {};
__export(auth_profile_update_exports, {
  action: () => action10
});
async function action10({
  request
}) {
  var _a;
  let cookieHeader = request.headers.get("Cookie"), userId = (await getSession(cookieHeader)).get(USER_SESSION_KEY), fullName = (_a = (await request.formData()).get("fullName")) == null ? void 0 : _a.toString(), data = await db.user.update({
    where: {
      id: userId
    },
    data: {
      name: fullName
    },
    select: {
      id: !0,
      name: !0,
      username: !0,
      email: !0
    }
  });
  return {
    id: data.id,
    name: data.name,
    phone: data.username,
    email: data.email
  };
}

// app/routes/about.company._index.tsx
var about_company_index_exports = {};
__export(about_company_index_exports, {
  default: () => about_company_index_default,
  meta: () => meta13
});
var import_core33 = require("@mantine/core");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), meta13 = page_meta_default({
  title: "About Us"
});
function about_company_index_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_core33.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_core33.Title, { order: 3, children: "About Us" }, void 0, !1, {
      fileName: "app/routes/about.company._index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_core33.Text, { children: "Celebria Collective is a technology platform offering a variety of creative photography, videography and makeup services. Customers use our platform to book services such as wedding photography, corporate shoots, bridal makeup, product shoots, and event coverage. These services are delivered at the location of their choice, tailored to their preferences, and with an unmatched level of professionalism." }, void 0, !1, {
      fileName: "app/routes/about.company._index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_core33.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/about.company._index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_core33.Text, { children: "We promise our customers a premium, joyful, and seamless creative experience. To fulfill this promise, we work closely with our carefully curated network of talented photographers, videographers, and artists, empowering them with technology, training, high-quality tools, resources, financial support, and branding, enabling them to succeed and consistently deliver outstanding results." }, void 0, !1, {
      fileName: "app/routes/about.company._index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_core33.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/about.company._index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_core33.Title, { order: 3, children: "Our Vision" }, void 0, !1, {
      fileName: "app/routes/about.company._index.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_core33.Text, { children: "To deliver photography, videography, and makeup solutions like never experienced before." }, void 0, !1, {
      fileName: "app/routes/about.company._index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.company._index.tsx",
    lineNumber: 12,
    columnNumber: 12
  }, this);
}

// app/routes/profile.$user._index.tsx
var profile_user_index_exports = {};
__export(profile_user_index_exports, {
  action: () => action11,
  default: () => profile_user_index_default,
  loader: () => loader18
});
var import_core35 = require("@mantine/core"), import_node14 = require("@remix-run/node"), import_react48 = require("@remix-run/react"), import_react49 = require("react"), import_react_masonry_css2 = __toESM(require("react-masonry-css")), import_react_photo_view4 = require("react-photo-view");

// app/components/StoriesStrip.tsx
var import_core34 = require("@mantine/core"), import_hooks3 = require("@mantine/hooks"), import_pure_react_carousel = require("pure-react-carousel"), import_react47 = require("react"), import_react_insta_stories = __toESM(require("react-insta-stories")), import_icons_react20 = require("@tabler/icons-react"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function StoriesStrip({ album, stories, radius = 10, center = !1, onLoadStories, onClose }) {
  let isWideScreen = (0, import_hooks3.useMediaQuery)("(min-width: 56.25em)"), [storiesList, setStories] = (0, import_react47.useState)([]);
  (0, import_react47.useEffect)(() => {
    stories && setStories(stories);
  }, [stories]);
  function sliderCount() {
    return isWideScreen ? 6 : 3;
  }
  function loadStories(id) {
    id && onLoadStories(id);
  }
  function closeStory() {
    setStories([]), onClose == null || onClose();
  }
  let WIDTH = 400;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      import_pure_react_carousel.CarouselProvider,
      {
        naturalSlideWidth: 300,
        naturalSlideHeight: 400,
        totalSlides: album.length,
        visibleSlides: sliderCount(),
        isIntrinsicHeight: !0,
        step: sliderCount(),
        dragStep: sliderCount(),
        className: "carousel-slider-wrapper " + (center ? "_center" : ""),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_pure_react_carousel.Slider, { children: album == null ? void 0 : album.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_pure_react_carousel.Slide, { index: i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "story-block-wrapper", style: { borderRadius: radius + "px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "story-block", style: { borderRadius: radius + "px" }, onClick: () => loadStories(item.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { style: { position: "relative", cursor: "pointer" }, children: [
            item.type === "video" ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(VideoPreview, { file: item.filePath }, void 0, !1, {
              fileName: "app/components/StoriesStrip.tsx",
              lineNumber: 84,
              columnNumber: 53
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_core34.Image, { visibleFrom: "md", w: "100%", h: (0, import_core34.px)("12rem"), radius: "xs", src: item.filePath, fit: "cover" }, void 0, !1, {
                fileName: "app/components/StoriesStrip.tsx",
                lineNumber: 85,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_core34.Image, { hiddenFrom: "md", w: "100%", h: (0, import_core34.px)("10rem"), radius: "xs", src: item.filePath, fit: "cover" }, void 0, !1, {
                fileName: "app/components/StoriesStrip.tsx",
                lineNumber: 86,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/StoriesStrip.tsx",
              lineNumber: 85,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
              import_core34.Overlay,
              {
                gradient: "linear-gradient(45deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",
                opacity: 0.85,
                p: { base: "xs", md: "md" },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_core34.Flex, { align: "end", justify: "center", h: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_core34.Text, { ta: "center", fw: 500, c: "white", children: (item == null ? void 0 : item.name) || "Highlights" }, void 0, !1, {
                  fileName: "app/components/StoriesStrip.tsx",
                  lineNumber: 94,
                  columnNumber: 37
                }, this) }, void 0, !1, {
                  fileName: "app/components/StoriesStrip.tsx",
                  lineNumber: 93,
                  columnNumber: 33
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/StoriesStrip.tsx",
                lineNumber: 88,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 83,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 82,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 81,
            columnNumber: 13
          }, this) }, "s" + item.id, !1, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 80,
            columnNumber: 38
          }, this)) }, void 0, !1, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_pure_react_carousel.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_icons_react20.IconArrowNarrowLeft, {}, void 0, !1, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 102,
            columnNumber: 43
          }, this) }, void 0, !1, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_pure_react_carousel.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_icons_react20.IconArrowNarrowRight, {}, void 0, !1, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 103,
            columnNumber: 43
          }, this) }, void 0, !1, {
            fileName: "app/components/StoriesStrip.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/StoriesStrip.tsx",
        lineNumber: 69,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_core34.Modal.Root, { opened: !!storiesList.length, onClose: closeStory, p: 0, centered: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_core34.Modal.Overlay, {}, void 0, !1, {
        fileName: "app/components/StoriesStrip.tsx",
        lineNumber: 160,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_core34.Modal.Content, { w: 472, p: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_core34.Modal.Body, { p: 0, children: storiesList.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_react_insta_stories.default,
        {
          stories,
          defaultInterval: 1500,
          keyboardNavigation: !0,
          width: "100%",
          height: "80vh",
          onAllStoriesEnd: closeStory,
          storyStyles: { width: (0, import_core34.rem)(472) }
        },
        void 0,
        !1,
        {
          fileName: "app/components/StoriesStrip.tsx",
          lineNumber: 163,
          columnNumber: 47
        },
        this
      ) : "Nothing to display" }, void 0, !1, {
        fileName: "app/components/StoriesStrip.tsx",
        lineNumber: 162,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/StoriesStrip.tsx",
        lineNumber: 161,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/StoriesStrip.tsx",
      lineNumber: 159,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/StoriesStrip.tsx",
    lineNumber: 68,
    columnNumber: 12
  }, this);
}
function VideoPreview({ file }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("video", { width: "100%", height: "auto", autoPlay: !0, controls: !1, muted: !0, loop: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("source", { src: file, type: "video/mp4" }, void 0, !1, {
    fileName: "app/components/StoriesStrip.tsx",
    lineNumber: 180,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/StoriesStrip.tsx",
    lineNumber: 179,
    columnNumber: 12
  }, this);
}
var StoriesStrip_default = StoriesStrip;

// app/routes/profile.$user._index.tsx
var import_client15 = require("@prisma/client");
var import_icons_react21 = require("@tabler/icons-react"), import_pure_react_carousel2 = require("pure-react-carousel"), import_hooks4 = require("@mantine/hooks"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
async function action11(args) {
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
async function loader18({ params, request }) {
  var _a;
  let username = params.user;
  if (!username)
    throw new Response("Page not found", {
      status: 404
    });
  let preselectedServiceGrpId = (_a = new URL(request.url).searchParams.get("service")) == null ? void 0 : _a.toString(), portfolio = new Promise(function(resolve, reject) {
    db.vendorPortfolio.findMany({
      orderBy: {
        createdAt: "desc"
      },
      select: {
        fileName: !0,
        fileType: !0
      },
      where: {
        vendor: {
          username
        },
        serviceGroupId: {
          in: preselectedServiceGrpId ? [preselectedServiceGrpId] : void 0
        }
      },
      take: 9
    }).then((r) => {
      resolve(r.map((x) => ({ type: x.fileType, value: x.fileName })));
    }).catch((e) => {
      reject("Connection failed");
    });
  }), featuredPortfolio = new Promise(function(resolve, reject) {
    db.vendorPortfolio.findMany({
      orderBy: {
        createdAt: "desc"
      },
      select: {
        fileName: !0,
        fileType: !0
      },
      where: {
        vendor: {
          username
        },
        serviceGroupId: {
          notIn: preselectedServiceGrpId ? [preselectedServiceGrpId] : []
        }
      },
      take: 10
    }).then((r) => {
      resolve(r.map((x) => ({ type: x.fileType, value: x.fileName })));
    }).catch((e) => {
      reject("Connection failed");
    });
  }), services = new Promise(function(resolve, reject) {
    db.vendorServiceGroup.findMany({
      take: 3,
      select: {
        group: {
          select: {
            id: !0,
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
      resolve(r.map((x) => ({ id: x.group.id, name: x.group.name, description: "Starts from: \u20B9" + x.cost })));
    }).catch((e) => {
      reject("Connection failed");
    });
  }), stories = new Promise(function(resolve) {
    VendorQuery.Stories(username).then((r) => resolve(r.map((x) => {
      var _a2;
      return {
        id: x.serviceGroupId || "",
        name: ((_a2 = x.serviceGroup) == null ? void 0 : _a2.name) || "",
        filePath: PATH.THUMB_URL + x.fileName || ""
      };
    })));
  }), reviews = await db.bookingService.count({
    where: {
      vendorServiceGroup: {
        vendor: {
          username
        }
      },
      rating: {
        gt: 0
      }
    }
  }), packageDeals2 = VendorQuery.packageDeals(username);
  return (0, import_node14.defer)({
    preselectedServiceGrpId,
    username,
    portfolio,
    featuredPortfolio,
    services,
    stories,
    reviews,
    packageDeals: packageDeals2
  });
}
var viewAllProjectsStyles = { display: "flex", justifyContent: "center", overflow: "hidden", height: "50px", position: "relative", boxShadow: "0px -40px 30px #fff" }, ProfileHome = {
  Index: () => {
    let outletContext = (0, import_react48.useOutletContext)(), data = (0, import_react48.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ProfileHome.Stories, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 186,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react49.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 187,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Await, { resolve: data.reviews, children: (reviews) => {
        var _a, _b, _c;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Card, { shadow: "sm", padding: "lg", radius: "md", withBorder: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid, { align: "center", gutter: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Stack, { gap: 0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { fw: 700, children: "50+" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 194,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { c: "dimmed", children: "Happy clients" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 195,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 193,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 192,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Divider, { h: 50, orientation: "vertical" }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 199,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 198,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid.Col, { span: "auto", children: (_a = outletContext == null ? void 0 : outletContext.profileData) != null && _a.rating ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Box, { pos: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Rating, { value: (_b = outletContext == null ? void 0 : outletContext.profileData) == null ? void 0 : _b.rating, fractions: 3, readOnly: !0, size: "sm" }, void 0, !1, {
                  fileName: "app/routes/profile.$user._index.tsx",
                  lineNumber: 203,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Overlay, { color: "#fff", backgroundOpacity: 0 }, void 0, !1, {
                  fileName: "app/routes/profile.$user._index.tsx",
                  lineNumber: 204,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 202,
                columnNumber: 72
              }, this),
              reviews ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { c: "dimmed", children: [
                reviews,
                " reviews"
              ] }, void 0, !0, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 206,
                columnNumber: 43
              }, this) : ""
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 202,
              columnNumber: 70
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { c: "dimmed", children: "Not rated yet." }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 207,
              columnNumber: 38
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 201,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 191,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 210,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Divider, {}, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 211,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 212,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid, { gutter: "xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid.Col, { span: { base: 12, md: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Title, { order: 4, c: "var(--ui-color-primary)", children: "About me" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 215,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "sm" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 216,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Divider, { size: "lg", w: "50px", style: {
                borderColor: "#2a2a2a"
              } }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 217,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "md" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 220,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { children: (_c = outletContext == null ? void 0 : outletContext.profileData) == null ? void 0 : _c.bio }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 221,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 214,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ProfileHome.Services, {}, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 224,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 223,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 213,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 190,
          columnNumber: 34
        }, this);
      } }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 188,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 231,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ProfileHome.Packages, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 232,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 233,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ProfileHome.Gallery, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 234,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 184,
      columnNumber: 16
    }, this);
  },
  Stories: () => {
    let data = (0, import_react48.useLoaderData)(), fetcher = (0, import_react48.useFetcher)(), [stories, setStories] = (0, import_react49.useState)([]);
    (0, import_react49.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react49.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 258,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Await, { resolve: data.stories, children: (album) => album != null && album.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { fw: "bold", children: "Stories" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 262,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "sm" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 263,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(StoriesStrip_default, { album, stories, onLoadStories: loadStories }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 264,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 261,
      columnNumber: 50
    }, this) : "" }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 259,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 258,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 257,
      columnNumber: 16
    }, this);
  },
  Services: () => {
    let data = (0, import_react48.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { fw: 700, children: "Popular Services" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 274,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react49.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 275,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Await, { resolve: data.services, children: (services) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Stack, { children: services.map(
        (x, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Group, { gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Link, { to: routes_data_default.get("VendorProfileWithService", { id: data.username, sGrpId: x.id }) + "#book-now-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { children: x.name }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 280,
            columnNumber: 138
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 280,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { c: "dimmed", size: "sm", children: x.description }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 281,
            columnNumber: 33
          }, this)
        ] }, x.id, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 279,
          columnNumber: 53
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 278,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 276,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 275,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 273,
      columnNumber: 16
    }, this);
  },
  Gallery: () => {
    var _a;
    let data = (0, import_react48.useLoaderData)(), navigate = (0, import_react48.useNavigate)(), outletContext = (0, import_react48.useOutletContext)(), sectionTitle = data != null && data.preselectedServiceGrpId ? "in " + ((_a = outletContext == null ? void 0 : outletContext.activeGroupData) == null ? void 0 : _a.title) : "";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid, { justify: "space-between", align: "middle", gutter: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Title, { order: 4, children: [
          "Best works ",
          sectionTitle
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 299,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 299,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Button, { variant: "subtle", radius: "xl", onClick: () => navigate("portfolio"), children: "See all" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 301,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 300,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 298,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react_photo_view4.PhotoProvider, { loop: !1, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react49.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Skeleton_default, {}, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 308,
            columnNumber: 41
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Await, { resolve: data.portfolio, children: (portfolio) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react_masonry_css2.default, { className: "masonry-grid", columnClassName: "masonry-grid_column", breakpointCols: 3, children: portfolio == null ? void 0 : portfolio.map((image2, key) => image2.type === "youtube" ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { style: { height: "240px", marginBottom: "30px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(VideoPreviewItem_default, { ytId: image2.value }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 314,
              columnNumber: 45
            }, this) }, "thumb" + key, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 313,
              columnNumber: 41
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react_photo_view4.PhotoView, { src: PATH.RESOURCE_URL + image2.value, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Image, { radius: "md", src: PATH.THUMB_URL + image2.value, className: "cursor-pointer" }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 317,
              columnNumber: 45
            }, this) }, "thumb" + key, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 316,
              columnNumber: 41
            }, this)) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 311,
              columnNumber: 33
            }, this),
            portfolio.length ? "" : "Sorry, This profile doesnt contains any works to display"
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 310,
            columnNumber: 43
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 309,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 308,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "xl" }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 325,
            columnNumber: 17
          }, this),
          data.preselectedServiceGrpId ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react49.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Skeleton_default, {}, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 326,
            columnNumber: 68
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Await, { resolve: data.featuredPortfolio, children: (portfolio) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Title, { order: 5, children: "Other works" }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 329,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "sm" }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 330,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react_masonry_css2.default, { className: "masonry-grid", columnClassName: "masonry-grid_column", breakpointCols: { default: 5, 800: 3 }, children: portfolio == null ? void 0 : portfolio.map((image2, key) => image2.type === "youtube" ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { style: { height: "240px", marginBottom: "30px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(VideoPreviewItem_default, { ytId: image2.value }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 334,
              columnNumber: 49
            }, this) }, "thumb" + key, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 333,
              columnNumber: 45
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react_photo_view4.PhotoView, { src: PATH.RESOURCE_URL + image2.value, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Image, { radius: "md", src: PATH.THUMB_URL + image2.value, className: "cursor-pointer" }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 337,
              columnNumber: 49
            }, this) }, "thumb" + key, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 336,
              columnNumber: 45
            }, this)) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 331,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 328,
            columnNumber: 47
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 327,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 326,
            columnNumber: 48
          }, this) : ""
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 307,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { style: viewAllProjectsStyles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Button, { variant: "outline", size: "xs", radius: "xl", onClick: () => navigate("portfolio"), children: "See all works" }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 346,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 345,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 306,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 297,
      columnNumber: 16
    }, this);
  },
  Packages: () => {
    let data = (0, import_react48.useLoaderData)(), isWideScreen = (0, import_hooks4.useMediaQuery)("(min-width: 56.25em)");
    function sliderCount() {
      return isWideScreen ? 4 : 2;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react49.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 359,
      columnNumber: 36
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Await, { resolve: data.packageDeals, children: (response) => response.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Group, { align: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_icons_react21.IconDiscount2, {}, void 0, !1, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 363,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Title, { order: 4, children: "Deals & Offers" }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 365,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { children: "Save big with combo packs." }, void 0, !1, {
            fileName: "app/routes/profile.$user._index.tsx",
            lineNumber: 366,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 364,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 362,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/profile.$user._index.tsx",
        lineNumber: 369,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_pure_react_carousel2.Slider, { children: response.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_pure_react_carousel2.Slide, { index: i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Card, { variant: "coupon", radius: "lg", h: "100%", color: i % 2 ? "green" : "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Card.Section, { p: "lg", style: { flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Stack, { align: "center", justify: "center", gap: 0, h: "100%", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Title, { order: 5, ta: "center", tt: "capitalize", children: item.name }, void 0, !1, {
                  fileName: "app/routes/profile.$user._index.tsx",
                  lineNumber: 385,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Popover, { width: 200, position: "bottom", withArrow: !0, shadow: "md", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Popover.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { style: { cursor: "pointer" }, ta: "center", size: "md", children: [
                    "View ",
                    item.PackageItem.length,
                    " services"
                  ] }, void 0, !0, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 388,
                    columnNumber: 45
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 387,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Popover.Dropdown, { style: { pointerEvents: "none" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Text, { fw: "bold", ta: "center", children: "Services Included" }, void 0, !1, {
                      fileName: "app/routes/profile.$user._index.tsx",
                      lineNumber: 391,
                      columnNumber: 45
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.List, { mt: "xs", children: item.PackageItem.map((x, i2) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.List.Item, { children: x.ServiceGroup.name }, i2, !1, {
                      fileName: "app/routes/profile.$user._index.tsx",
                      lineNumber: 393,
                      columnNumber: 76
                    }, this)) }, void 0, !1, {
                      fileName: "app/routes/profile.$user._index.tsx",
                      lineNumber: 392,
                      columnNumber: 45
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 390,
                    columnNumber: 41
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/profile.$user._index.tsx",
                  lineNumber: 386,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Space, { h: "md" }, void 0, !1, {
                  fileName: "app/routes/profile.$user._index.tsx",
                  lineNumber: 397,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Group, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Title, { order: 3, children: item.discountType === import_client15.DiscountType.FLAT ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(currency_transformer_default, { value: item.discountValue }, void 0, !1, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 399,
                    columnNumber: 100
                  }, this) : item.discountValue + "%" }, void 0, !1, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 399,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Title, { order: 5, children: "OFF" }, void 0, !1, {
                    fileName: "app/routes/profile.$user._index.tsx",
                    lineNumber: 400,
                    columnNumber: 41
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/profile.$user._index.tsx",
                  lineNumber: 398,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 384,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 383,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Center, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Link, { to: routes_data_default.get("VendorPackage", { username: data.username, id: item.keyName }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Button, { size: "sm", color: "black", radius: "xl", children: "Book Now" }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 405,
                columnNumber: 117
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 405,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user._index.tsx",
                lineNumber: 404,
                columnNumber: 29
              }, this)
            ] }, item.id, !0, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 382,
              columnNumber: 29
            }, this) }, "s" + item.id, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 381,
              columnNumber: 51
            }, this)) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 380,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_pure_react_carousel2.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_icons_react21.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 410,
              columnNumber: 55
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 410,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_pure_react_carousel2.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_icons_react21.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 411,
              columnNumber: 55
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user._index.tsx",
              lineNumber: 411,
              columnNumber: 21
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/profile.$user._index.tsx",
          lineNumber: 370,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 361,
      columnNumber: 47
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, {}, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 413,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 360,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user._index.tsx",
      lineNumber: 359,
      columnNumber: 16
    }, this);
  },
  Testimonials: () => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_core35.Title, { order: 2, style: { textAlign: "center" }, children: "Testimonials" }, void 0, !1, {
    fileName: "app/routes/profile.$user._index.tsx",
    lineNumber: 419,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.$user._index.tsx",
    lineNumber: 418,
    columnNumber: 16
  }, this)
}, profile_user_index_default = ProfileHome.Index;

// app/routes/_auth.order.payment.tsx
var auth_order_payment_exports = {};
__export(auth_order_payment_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => auth_order_payment_default,
  loader: () => loader19
});
var import_core36 = require("@mantine/core"), import_client16 = require("@prisma/client"), import_react50 = require("@remix-run/react"), import_react51 = require("react"), import_react_razorpay = __toESM(require("react-razorpay"));
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
async function loader19({ request }) {
  let cookieHeader = request.headers.get("Cookie"), session = await getSession(cookieHeader), orderId = new URL(request.url).searchParams.get("id") || void 0, userId = session.get(USER_SESSION_KEY), orderData = await db.booking.findFirstOrThrow({
    where: {
      orderId,
      userId
    },
    select: {
      status: !0,
      orderId: !0,
      total: !0,
      user: {
        select: {
          username: !0,
          email: !0
        }
      }
    }
  });
  if (!orderId || orderData.status !== import_client16.BookingStatus.PENDING)
    throw new Response("Invalid data", {
      status: 500
    });
  let pendingPayment = await payment_service_default.getPendingPayment(orderId);
  if (!pendingPayment)
    throw new Response("No pending order found", {
      status: 500
    });
  return { orderData, rpData: pendingPayment.data, bookingPaymentId: pendingPayment.bookingPaymentId, key: process.env.RPAY_KEY || "" };
}
var auth_order_payment_default = () => {
  let loaderData = (0, import_react50.useLoaderData)(), [Razorpay2, isLoaded] = (0, import_react_razorpay.default)(), submit = (0, import_react50.useSubmit)(), navigation = (0, import_react50.useNavigation)(), navigate = (0, import_react50.useNavigate)();
  (0, import_react51.useEffect)(() => {
    if (!isLoaded || !loaderData)
      return;
    let options2 = {
      key: loaderData.key,
      amount: "" + (loaderData == null ? void 0 : loaderData.rpData.amount),
      currency: "INR",
      name: "Celebria Collective",
      description: loaderData.orderData.orderId,
      image: "https://example.com/your_logo",
      order_id: loaderData == null ? void 0 : loaderData.rpData.id,
      handler: (res) => {
        submitPaymentResponse(res);
      },
      modal: {
        ondismiss: redirectToOrderInfo
      },
      prefill: {
        email: loaderData.orderData.user.email || "",
        contact: loaderData.orderData.user.username
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#15bf39"
      }
    };
    new Razorpay2(options2).open();
  }, [isLoaded]);
  function redirectToOrderInfo() {
    navigate(routes_data_default.get("UserManageOrder", { id: loaderData.orderData.orderId }));
  }
  function submitPaymentResponse(data) {
    loaderData != null && loaderData.orderData.orderId && submit({
      orderId: loaderData == null ? void 0 : loaderData.orderData.orderId,
      razorpayPaymentId: data.razorpay_payment_id,
      razorpaySignature: data.razorpay_signature,
      bookingPaymentId: loaderData.bookingPaymentId
    }, {
      method: "post",
      action: "/order/verify"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_core36.Center, { h: 200, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_core36.Stack, { justify: "center", align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_core36.Loader, { size: "lg" }, void 0, !1, {
      fileName: "app/routes/_auth.order.payment.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_core36.Text, { children: navigation.state === "idle" ? "Kindly reload this page if you are not redirected." : "Processing your order. Please wait..." }, void 0, !1, {
      fileName: "app/routes/_auth.order.payment.tsx",
      lineNumber: 122,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.order.payment.tsx",
    lineNumber: 120,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.order.payment.tsx",
    lineNumber: 119,
    columnNumber: 12
  }, this);
};
function ErrorBoundary3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: "No pending payment found against this order" }, void 0, !1, {
    fileName: "app/routes/_auth.order.payment.tsx",
    lineNumber: 129,
    columnNumber: 12
  }, this);
}

// app/routes/_auth.user.wishlist.tsx
var auth_user_wishlist_exports = {};
__export(auth_user_wishlist_exports, {
  default: () => auth_user_wishlist_default,
  loader: () => loader20,
  meta: () => meta14
});
var import_core37 = require("@mantine/core"), import_node15 = require("@remix-run/node"), import_react52 = require("@remix-run/react"), import_react53 = require("react");

// app/service/wishlist.service.ts
async function addToWishlist(data) {
  let vendor = await db.vendor.findFirstOrThrow({
    where: {
      username: data.vendorUsername
    }
  });
  await db.wishlist.create({
    data: {
      id: generateUuid(),
      vendorId: vendor.id,
      userId: data.userId
    }
  });
}
async function removeFromWishlist(data) {
  let vendor = await db.vendor.findFirstOrThrow({
    where: {
      username: data.vendorUsername
    }
  });
  await db.wishlist.deleteMany({
    where: {
      vendorId: vendor.id,
      userId: data.userId
    }
  });
}
async function getAllItems(data) {
  return await db.wishlist.findMany({
    select: {
      id: !0,
      vendorId: !0,
      Vendor: {
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
    },
    where: {
      userId: data.userId
    },
    orderBy: {
      created_at: "desc"
    }
  });
}
async function checkItemExists(data) {
  return data.userId ? await db.wishlist.count({
    where: {
      userId: data.userId,
      Vendor: {
        username: data.vendorUsername
      }
    }
  }) : -1;
}
var WishlistService = {
  add: addToWishlist,
  remove: removeFromWishlist,
  getAllItems,
  checkItemExists
}, wishlist_service_default = WishlistService;

// app/routes/_auth.user.wishlist.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), meta14 = () => [
  { title: "My Account | Wishlist" },
  { name: "description", content: "Celebria Collective, Find your Pefect vendor" }
];
async function loader20({ request }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get(USER_SESSION_KEY);
  if (!userId)
    throw new Response("Page not found", {
      status: 404
    });
  let items = wishlist_service_default.getAllItems({
    userId
  });
  return (0, import_node15.defer)({ items });
}
var WishlistHome = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Grid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Grid.Col, { span: 12, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Title, { order: 3, children: "My Favorites" }, void 0, !1, {
      fileName: "app/routes/_auth.user.wishlist.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Space, { h: "lg" }, void 0, !1, {
      fileName: "app/routes/_auth.user.wishlist.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(WishlistHome.AllItems, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.wishlist.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.wishlist.tsx",
    lineNumber: 47,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.user.wishlist.tsx",
    lineNumber: 46,
    columnNumber: 16
  }, this),
  AllItems: () => {
    let data = (0, import_react52.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react53.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Skeleton, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.wishlist.tsx",
      lineNumber: 58,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react52.Await, { resolve: data.items, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      import_core37.SimpleGrid,
      {
        cols: { base: 1, lg: 3 },
        spacing: { base: 10, sm: "xl" },
        verticalSpacing: { base: "md", sm: "xl" },
        children: [
          response.map(
            (item) => {
              var _a;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Card, { radius: "md", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Group, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react52.Link, { to: routes_data_default.get("VendorProfile", { id: item.Vendor.username }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Avatar, { size: "xl", src: PATH.RESOURCE_URL + item.Vendor.profileImageName, alt: "vendor" }, void 0, !1, {
                  fileName: "app/routes/_auth.user.wishlist.tsx",
                  lineNumber: 69,
                  columnNumber: 37
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_auth.user.wishlist.tsx",
                  lineNumber: 68,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Stack, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Title, { order: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react52.Link, { to: routes_data_default.get("VendorProfile", { id: item.Vendor.username }), children: item.Vendor.username }, void 0, !1, {
                    fileName: "app/routes/_auth.user.wishlist.tsx",
                    lineNumber: 72,
                    columnNumber: 54
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_auth.user.wishlist.tsx",
                    lineNumber: 72,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Badge, { variant: "outline", color: "gray", children: (_a = item.Vendor.vendorType) == null ? void 0 : _a.name }, void 0, !1, {
                    fileName: "app/routes/_auth.user.wishlist.tsx",
                    lineNumber: 73,
                    columnNumber: 37
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.user.wishlist.tsx",
                  lineNumber: 71,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.user.wishlist.tsx",
                lineNumber: 67,
                columnNumber: 29
              }, this) }, item.id, !1, {
                fileName: "app/routes/_auth.user.wishlist.tsx",
                lineNumber: 66,
                columnNumber: 46
              }, this);
            }
          ),
          !response.length && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_core37.Grid.Col, { span: 12, children: "Sorry, You haven't wishlisted anything." }, void 0, !1, {
            fileName: "app/routes/_auth.user.wishlist.tsx",
            lineNumber: 78,
            columnNumber: 46
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_auth.user.wishlist.tsx",
        lineNumber: 60,
        columnNumber: 35
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_auth.user.wishlist.tsx",
      lineNumber: 59,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.wishlist.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.wishlist.tsx",
      lineNumber: 57,
      columnNumber: 16
    }, this);
  }
}, auth_user_wishlist_default = WishlistHome.Index;

// app/routes/services.$id.$subId.tsx
var services_id_subId_exports = {};
__export(services_id_subId_exports, {
  default: () => services_id_subId_default,
  loader: () => loader21,
  meta: () => meta15
});
var import_node16 = require("@remix-run/node"), import_react55 = require("@remix-run/react"), import_react56 = require("react");
var import_react_infinite_scroll_component = __toESM(require("react-infinite-scroll-component")), import_core40 = require("@mantine/core");

// app/components/ProfileQuickCard.tsx
var import_core38 = require("@mantine/core"), import_react54 = require("@remix-run/react"), import_react_photo_view5 = require("react-photo-view");

// app/components/ProfileQuickCard.module.css
var ProfileQuickCard_module_default = { itemDataThumbSetStyles: "ProfileQuickCard-module__itemDataThumbSetStyles__Z2nLk", profileCardStyle: "ProfileQuickCard-module__profileCardStyle__ZUMKH" };

// app/components/ProfileQuickCard.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function ProfileQuickCard({ id, name, rating, services, tag, profileImg, portfolio, categoryId, startsFrom }) {
  let profileUrl = categoryId ? routes_data_default.get("VendorProfileWithService", { id, sGrpId: categoryId }) : routes_data_default.get("VendorProfile", { id });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Grid, { pt: "lg", gutter: 0, align: "end", className: ProfileQuickCard_module_default.profileCardStyle, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Grid.Col, { span: { base: 12, md: 5 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Grid, { gutter: "md", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Grid.Col, { span: { base: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react54.Link, { to: profileUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          import_core38.Avatar,
          {
            size: "xl",
            src: profileImg,
            style: { cursor: "pointer" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 20,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Grid.Col, { span: { base: "auto", md: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Group, { gap: "sm", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react54.Link, { to: profileUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Title, { order: 4, children: name }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 29,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this),
          tag && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Badge, { color: "green", size: "xs", children: tag }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, this),
          rating ? [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Box, { pos: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Rating, { defaultValue: rating, fractions: 3, readOnly: !0, size: "sm" }, void 0, !1, {
                fileName: "app/components/ProfileQuickCard.tsx",
                lineNumber: 32,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Overlay, { color: "#fff", backgroundOpacity: 0 }, void 0, !1, {
                fileName: "app/components/ProfileQuickCard.tsx",
                lineNumber: 33,
                columnNumber: 15
              }, this)
            ] }, 0, !0, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 31,
              columnNumber: 24
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Text, { c: "dimmed", children: [
              "(",
              rating,
              ")"
            ] }, 1, !0, {
              fileName: "app/components/ProfileQuickCard.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this)
          ] : ""
        ] }, void 0, !0, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Space, { h: "sm" }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      (services == null ? void 0 : services.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Flex, { gap: "xs", wrap: "wrap", align: "center", children: [
        services.map(
          (x, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Badge, { variant: "light", color: "gray", size: "xs", children: x }, "tag" + index, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this)
        ),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Space, { h: "sm" }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this),
      "Starts from ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(currency_transformer_default, { value: startsFrom }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 50,
        columnNumber: 19
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/components/ProfileQuickCard.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Grid.Col, { span: { base: 12, md: "auto" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Space, { h: "md" }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react_photo_view5.PhotoProvider, { loop: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Flex, { direction: "column", gap: "xs", wrap: "wrap", mah: "240px", justify: "end", align: "end", style: { alignContent: "end" }, children: [
        portfolio == null ? void 0 : portfolio.map((imageItem, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Box, { style: i === 0 || portfolio.length % 2 == 1 && i < 2 ? { width: "200px", height: "200px" } : { width: "95px", height: "95px" }, children: imageItem.type === "youtube" ? /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(VideoPreviewItem_default, { ytId: imageItem.value }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 57,
          columnNumber: 45
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react_photo_view5.PhotoView, { src: PATH.RESOURCE_URL + imageItem.value, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          import_core38.Image,
          {
            className: ProfileQuickCard_module_default.itemDataThumbSetStyles + " cursor-pointer",
            src: PATH.THUMB_URL + imageItem.value,
            alt: "reload to display image"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 59,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this) }, i, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 56,
          columnNumber: 45
        }, this)),
        portfolio != null && portfolio.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, {}, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 71,
          columnNumber: 134
        }, this) : [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Box, { w: "95px", h: "95px", opacity: 0.1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: ProfileQuickCard_module_default.itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 67,
            columnNumber: 70
          }, this) }, "empty-box-1", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Box, { w: "95px", h: "95px" }, "empty-box-2", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Box, { w: "95px", h: "95px" }, "empty-box-3", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 69,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Box, { w: "95px", h: "95px", opacity: 0.3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: ProfileQuickCard_module_default.itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 70,
            columnNumber: 70
          }, this) }, "empty-box-4", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 70,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Box, { w: "95px", h: "95px", opacity: 0.2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: ProfileQuickCard_module_default.itemDataThumbSetStyles }, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 71,
            columnNumber: 70
          }, this) }, "empty-box-5", !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this)
        ],
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react54.Link, { to: profileUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Button, { className: "viewProfileButton", w: "95px", h: "95px", variant: "outline", children: [
          "View",
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/components/ProfileQuickCard.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this),
          "Profile"
        ] }, void 0, !0, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/ProfileQuickCard.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileQuickCard.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Grid.Col, { span: 12, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_core38.Divider, { h: 1 }, void 0, !1, {
        fileName: "app/components/ProfileQuickCard.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileQuickCard.tsx",
      lineNumber: 80,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProfileQuickCard.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}
var ProfileQuickCard_default = ProfileQuickCard;

// app/components/ListSortBar.tsx
var import_core39 = require("@mantine/core"), import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), sortPanelStyles = {
  background: "var(--ui-color-accent)",
  padding: "10px 20px",
  borderRadius: "4px"
};
var list = [
  { value: "LOWEST_PRICE" /* LOWEST_PRICE */, label: "Lowest Price" },
  { value: "HIGHEST_PRICE" /* HIGHEST_PRICE */, label: "Highest Price" },
  { value: "RATING" /* RATING */, label: "Rating" }
], DEFAULT_VALUE = "RATING" /* RATING */;
function ListSortBar({ onSort }) {
  function setValue(v) {
    onSort(v);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { style: sortPanelStyles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_core39.Group, { align: "center", gap: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_core39.Text, { c: "dimmed", size: "sm", children: "Sort By:" }, void 0, !1, {
      fileName: "app/components/ListSortBar.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      import_core39.Select,
      {
        placeholder: "Default",
        defaultValue: DEFAULT_VALUE,
        onChange: (x) => setValue(x),
        data: list,
        allowDeselect: !1,
        w: 150
      },
      void 0,
      !1,
      {
        fileName: "app/components/ListSortBar.tsx",
        lineNumber: 33,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ListSortBar.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ListSortBar.tsx",
    lineNumber: 30,
    columnNumber: 12
  }, this);
}
var ListSortBar_default = ListSortBar;

// app/utils/sortField.map.ts
function sortFieldMapper(field) {
  let sortBy = {};
  switch (field) {
    case "HIGHEST_PRICE" /* HIGHEST_PRICE */:
      sortBy.cost = "desc";
      break;
    case "LOWEST_PRICE" /* LOWEST_PRICE */:
      sortBy.cost = "asc";
      break;
    default:
      sortBy.cost = void 0, sortBy.vendor = {
        ratingScore: "desc"
      };
      break;
  }
  return sortBy;
}
var sortField_map_default = sortFieldMapper;

// app/routes/services.$id.$subId.tsx
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), meta15 = ({ params, data }) => {
  var _a, _b, _c;
  return [
    { title: ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.name) + " in " + capitalize_trasformer_default((_b = params.id) == null ? void 0 : _b.replace(/-/g, " ")) + " | Celebria Collective" },
    { name: "description", content: (_c = data == null ? void 0 : data.meta) == null ? void 0 : _c.description }
  ];
};
async function loader21({
  request,
  params
}) {
  var _a;
  let pageId = params.id, categoryId = params.subId, searchParams = new URL(request.url).searchParams, page = parseInt(searchParams.get("page") || "") || 0, sortField = (_a = searchParams.get("sort")) == null ? void 0 : _a.toString(), limit = 20, metaInfo = await db.vendorType.findFirstOrThrow({
    where: {
      keyName: pageId,
      isActive: !0
    },
    select: {
      id: !0,
      name: !0,
      description: !0
    }
  }), sortBy = sortField_map_default(sortField), result = VendorQuery.getFilteredVendors({
    page,
    limit,
    serviceGroupIds: categoryId ? [categoryId] : [],
    vendorType: pageId || "",
    sortBy
  }), data = await db.serviceGroup.findFirstOrThrow({
    where: {
      id: categoryId,
      isActive: !0
    },
    select: {
      name: !0
    }
  });
  return (0, import_node16.defer)({
    data,
    result,
    page,
    meta: { ...metaInfo, categoryId }
  });
}
var Photography = {
  Index: () => {
    var _a;
    let data = (0, import_react55.useLoaderData)(), navigate = (0, import_react55.useNavigate)();
    function sortItems(x) {
      let searchParams = new URLSearchParams(location.search);
      searchParams.set("sort", x || ""), searchParams.set("page", "0"), navigate(`${location.pathname}?${searchParams.toString()}`);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Stack, { gap: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Grid, { gutter: { base: 20, md: 40 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Grid.Col, { span: { base: 12, md: 8, lg: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Stack, { gap: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Badge, { color: "magenta", children: data.meta.name }, void 0, !1, {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 110,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Text, { c: "dimmed", children: "in Bangalore" }, void 0, !1, {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 110,
            columnNumber: 84
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 109,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Title, { order: 3, children: (_a = data.data) == null ? void 0 : _a.name }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 112,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { children: data.meta.description }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 113,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(ListSortBar_default, { onSort: sortItems }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 115,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          import_react56.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/routes/services.$id.$subId.tsx",
              lineNumber: 117,
              columnNumber: 47
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react55.Await, { resolve: data == null ? void 0 : data.result, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              Photography.Results,
              {
                categoryId: data.meta.categoryId,
                vendors: response.data,
                loadMore: response.loadMore,
                total: response.total
              },
              void 0,
              !1,
              {
                fileName: "app/routes/services.$id.$subId.tsx",
                lineNumber: 121,
                columnNumber: 45
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/services.$id.$subId.tsx",
              lineNumber: 119,
              columnNumber: 37
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 116,
            columnNumber: 33
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 108,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 107,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Grid.Col, { span: { base: 12, md: 4, lg: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Card, { style: { borderColor: "#c6c3c3", borderRadius: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Title, { order: 3, children: [
          "Hiring",
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 134,
            columnNumber: 56
          }, this),
          "Without the",
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/services.$id.$subId.tsx",
            lineNumber: 134,
            columnNumber: 73
          }, this),
          "Headache"
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 134,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { style: { maxWidth: "100%" }, src: "/assets/web-thumb1.jpg" }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 136,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 133,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 132,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id.$subId.tsx",
      lineNumber: 106,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id.$subId.tsx",
      lineNumber: 105,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id.$subId.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this);
  },
  Results: ({
    vendors,
    loadMore,
    categoryId,
    total
  }) => {
    let data = (0, import_react55.useLoaderData)(), navigate = (0, import_react55.useNavigate)(), location2 = (0, import_react55.useLocation)(), [result, setResult] = (0, import_react56.useState)([]);
    (0, import_react56.useEffect)(() => {
      vendors && setResult(vendors);
    }, [vendors]);
    function loadNextPage() {
      let searchParams = new URLSearchParams();
      searchParams.set("page", "" + (data.page + 1)), navigate(location2.pathname + "?" + searchParams.toString(), {
        preventScrollReset: !0
      });
    }
    function loadByPage(page) {
      let searchParams = new URLSearchParams(location2.search);
      searchParams.set("page", (page - 1).toString()), navigate(location2.pathname + "?" + searchParams.toString());
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      import_react_infinite_scroll_component.default,
      {
        dataLength: result.length,
        next: loadNextPage,
        hasMore: !1,
        loader: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { style: { padding: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 189,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 188,
          columnNumber: 17
        }, this),
        endMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Center, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Pagination, { value: data.page + 1, pt: "xl", total, onChange: loadByPage }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 192,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 192,
          columnNumber: 25
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_core40.Box, { children: result == null ? void 0 : result.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(ProfileQuickCard_default, { id: item.id, name: item.name, portfolio: item.portfolio, profileImg: item.profileImg, services: item.services, tag: item.tag, rating: item.rating, categoryId, startsFrom: item.startsFrom }, item.id, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 195,
          columnNumber: 38
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.$id.$subId.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.$id.$subId.tsx",
        lineNumber: 183,
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
  loader: () => loader22,
  meta: () => meta16
});
var import_core41 = require("@mantine/core"), import_node17 = require("@remix-run/node"), import_react57 = require("@remix-run/react"), import_react58 = require("react"), import_react_infinite_scroll_component2 = __toESM(require("react-infinite-scroll-component")), import_rxjs = require("rxjs");
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), meta16 = ({ params }) => {
  var _a;
  return [
    { title: capitalize_trasformer_default((_a = params.id) == null ? void 0 : _a.replace(/-/g, " ")) + " | Celebria Collective" },
    { name: "description", content: "Find your Pefect vendor" }
  ];
};
async function loader22({
  request,
  params
}) {
  var _a, _b;
  let pageId = params.id, searchParams = new URL(request.url).searchParams, page = parseInt(searchParams.get("page") || "") || 0, sortField = searchParams.get("sort"), categoryIds = (_b = (_a = searchParams.get("category")) == null ? void 0 : _a.toString()) == null ? void 0 : _b.split(",").filter((x) => x), limit = 20;
  categoryIds != null && categoryIds.length || (categoryIds = void 0);
  let metaInfo = await db.vendorType.findFirstOrThrow({
    where: {
      keyName: pageId,
      isActive: !0
    },
    select: {
      id: !0,
      name: !0,
      description: !0
    }
  }), sortBy = sortField_map_default(sortField), result = VendorQuery.getFilteredVendors({
    page,
    limit,
    serviceGroupIds: categoryIds || [],
    vendorType: pageId || "",
    sortBy
  }), filters = new Promise(function(resolve, reject) {
    (0, import_rxjs.of)(!0).pipe(
      (0, import_rxjs.switchMap)(
        (_) => db.vendorType.findFirstOrThrow({
          where: {
            keyName: pageId,
            isActive: !0
          }
        })
      ),
      (0, import_rxjs.switchMap)((res) => (0, import_rxjs.forkJoin)({
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
                isActive: !0,
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
            isActive: !0,
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
    }, (e) => {
      reject("error");
    });
  });
  return (0, import_node17.defer)({
    result,
    filters,
    page,
    pageId,
    meta: metaInfo
  });
}
function BadgeCounter({ category, activeFilters }) {
  function getSelectedCatgoryCount(categoryList) {
    let categoryIdList = categoryList.map((value) => value.id);
    return activeFilters.filter(
      (value) => categoryIdList.includes(value)
    ).length;
  }
  let selectedCategoryCount = getSelectedCatgoryCount(
    category
  );
  return selectedCategoryCount > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_core41.Badge,
    {
      color: "#faad14",
      children: selectedCategoryCount
    },
    void 0,
    !1,
    {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 226,
      columnNumber: 7
    },
    this
  ) : null;
}
var Page5 = {
  Index: () => {
    let data = (0, import_react57.useLoaderData)(), navigate = (0, import_react57.useNavigate)(), location2 = (0, import_react57.useLocation)();
    function sortItems(x) {
      let searchParams = new URLSearchParams(location2.search);
      searchParams.set("sort", x || ""), searchParams.set("page", "0"), navigate(`${location2.pathname}?${searchParams.toString()}`);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Stack, { gap: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Grid, { gutter: { base: 20, md: 40 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Grid.Col, { span: { base: 12, md: 4, lg: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Page5.Filters, {}, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 251,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 250,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Grid.Col, { span: { base: 12, md: 8, lg: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Stack, { gap: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Title, { order: 3, children: [
            data.meta.name,
            " in Bangalore"
          ] }, void 0, !0, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 256,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Text, { size: "sm", children: data.meta.description }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 257,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 255,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(ListSortBar_default, { onSort: sortItems }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 259,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          import_react58.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Skeleton_default, {}, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 261,
              columnNumber: 29
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react57.Await, { resolve: data.result, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              Page5.Results,
              {
                vendors: (response == null ? void 0 : response.data) || [],
                loadMore: (response == null ? void 0 : response.loadMore) || !0,
                total: (response == null ? void 0 : response.total) || 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/services.$id._index.tsx",
                lineNumber: 265,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 263,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 260,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 254,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 253,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 249,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 247,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this);
  },
  Filters: () => {
    let data = (0, import_react57.useLoaderData)(), navigate = (0, import_react57.useNavigate)(), location2 = (0, import_react57.useLocation)(), [getCategoryFitlers, setCategoryFilters] = (0, import_react58.useState)([]), [openFilterDrawer, setFilterDrawer] = (0, import_react58.useState)(!1);
    (0, import_react58.useEffect)(() => {
      var _a;
      let params = new URLSearchParams(location2.search);
      setCategoryFilters(
        ((_a = params.get("category")) == null ? void 0 : _a.split(",").filter((x) => !!x)) || []
      );
    }, [location2.search]);
    function toggleCategoryFilterItem(value) {
      let list2 = getCategoryFitlers;
      list2.includes(value) ? list2 = list2.filter((x) => x !== value) : list2.push(value), setCategoryFilters(list2);
      let params = new URLSearchParams(location2.search);
      params.set("category", list2.join(",")), params.set("page", "0"), navigate(`${location2.pathname}?${params.toString()}`);
    }
    function clearFilter() {
      setCategoryFilters([]);
      let params = new URLSearchParams(location2.search);
      params.set("page", "0"), params.delete("category"), navigate(`${location2.pathname}?${params.toString()}`);
    }
    function toggleFilterDrawer() {
      setFilterDrawer(!openFilterDrawer);
    }
    let filterList = /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react58.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 324,
      columnNumber: 45
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react57.Await, { resolve: data.filters, children: (filters) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Accordion, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Page5.FilterAccordianItem, { activeFilters: getCategoryFitlers, filters, onChange: toggleCategoryFilterItem }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 328,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 327,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 325,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 324,
      columnNumber: 25
    }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Grid, { gutter: 0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Grid.Col, { span: 12, hiddenFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "filters-section-wrapper", onClick: toggleFilterDrawer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "section-title", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Text, { fw: 500, children: "Filter:" }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 340,
            columnNumber: 19
          }, this),
          getCategoryFitlers != null && getCategoryFitlers.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Badge, { variant: "outline", color: "yellow", children: [
            getCategoryFitlers.length,
            " applied"
          ] }, void 0, !0, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 341,
            columnNumber: 48
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, {}, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 341,
            columnNumber: 135
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Text, { c: "dimmed", children: "Click here to modify" }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 342,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 339,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 338,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 337,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 336,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Grid.Col, { span: 12, visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "filters-section-wrapper _sticky-top", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "section-title", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Group, { justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Text, { size: "lg", fw: 500, children: "Filter:" }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 351,
              columnNumber: 17
            }, this),
            getCategoryFitlers != null && getCategoryFitlers.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Badge, { style: { cursor: "pointer" }, onClick: clearFilter, variant: "outline", color: "red", size: "xs", children: "Clear all" }, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 352,
              columnNumber: 46
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, {}, void 0, !1, {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 352,
              columnNumber: 164
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 350,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 349,
            columnNumber: 15
          }, this),
          filterList
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 348,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 347,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 335,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Drawer, { opened: openFilterDrawer, onClose: toggleFilterDrawer, title: "Apply Filters", children: filterList }, void 0, !1, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 359,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id._index.tsx",
      lineNumber: 334,
      columnNumber: 12
    }, this);
  },
  Results: ({
    vendors,
    total,
    loadMore
  }) => {
    let data = (0, import_react57.useLoaderData)(), navigate = (0, import_react57.useNavigate)(), location2 = (0, import_react57.useLocation)(), [result, setResult] = (0, import_react58.useState)([]);
    (0, import_react58.useEffect)(() => {
      vendors && setResult(vendors);
    }, [vendors]);
    function loadNextPage() {
      let searchParams = new URLSearchParams(location2.search);
      searchParams.set("page", (data.page + 1).toString()), navigate(location2.pathname + "?" + searchParams.toString(), {
        preventScrollReset: !0
      });
    }
    function loadByPage(page) {
      let searchParams = new URLSearchParams(location2.search);
      searchParams.set("page", (page - 1).toString()), navigate(location2.pathname + "?" + searchParams.toString());
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      import_react_infinite_scroll_component2.default,
      {
        dataLength: result.length,
        next: loadNextPage,
        hasMore: !1,
        loader: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { style: { padding: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 409,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 408,
          columnNumber: 11
        }, this),
        endMessage: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Center, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Pagination, { value: data.page + 1, pt: "xl", total, onChange: loadByPage }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 414,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 413,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Box, { children: result == null ? void 0 : result.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(ProfileQuickCard_default, { id: item.id, name: item.name, portfolio: item.portfolio, profileImg: item.profileImg, services: item.services, tag: item.tag, rating: item.rating, startsFrom: item.startsFrom }, item.id, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 419,
          columnNumber: 32
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 418,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 403,
        columnNumber: 7
      },
      this
    );
  },
  FilterAccordianItem: ({ filters, activeFilters, onChange }) => filters.map(
    (filter, index) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Accordion.Item, { value: filter.name, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Accordion.Control, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Group, { justify: "space-between", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Text, { fw: 500, children: filter.name }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 432,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(BadgeCounter, { category: filter.category, activeFilters }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 433,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 431,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 430,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_core41.Stack, { children: [
          filter.category.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            import_core41.Checkbox,
            {
              label: item.name,
              value: item.id,
              checked: activeFilters.includes(item.id),
              onChange: (e) => onChange(item.id)
            },
            item.id,
            !1,
            {
              fileName: "app/routes/services.$id._index.tsx",
              lineNumber: 439,
              columnNumber: 19
            },
            this
          )),
          !((_a = filter.category) != null && _a.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { children: "Unavailable right now." }, void 0, !1, {
            fileName: "app/routes/services.$id._index.tsx",
            lineNumber: 449,
            columnNumber: 46
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 437,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.$id._index.tsx",
          lineNumber: 436,
          columnNumber: 13
        }, this)
      ] }, index, !0, {
        fileName: "app/routes/services.$id._index.tsx",
        lineNumber: 429,
        columnNumber: 18
      }, this);
    }
  )
}, services_id_index_default = Page5.Index;

// app/routes/_api.chat.$groupId.tsx
var api_chat_groupId_exports = {};
__export(api_chat_groupId_exports, {
  action: () => action12,
  loader: () => loader23
});
var import_client17 = require("@prisma/client");
async function action12(args) {
  var _a, _b, _c;
  let formData = await args.request.formData(), chatGroupId = args.params.groupId, cookieHeader = args.request.headers.get("Cookie"), currentUserId = (await getSession(cookieHeader)).get(USER_SESSION_KEY), message = (_a = formData.get("message")) == null ? void 0 : _a.toString(), msgType = (_b = formData.get("type")) == null ? void 0 : _b.toString();
  if (!currentUserId)
    throw new Response("Not found", {
      status: 404
    });
  let memberLookupIds = [currentUserId], member = await db.chatGroupMember.findFirstOrThrow({
    where: {
      chatGroupId,
      userId: currentUserId
    },
    select: {
      id: !0,
      chatGroup: {
        select: {
          booking: {
            select: {
              orderId: !0,
              status: !0
            }
          }
        }
      },
      vendor: {
        select: {
          username: !0
        }
      }
    }
  }), invalidOrder = [import_client17.BookingStatus.COMPLETED, import_client17.BookingStatus.REJECTED, import_client17.BookingStatus.CANCELLED].includes((_c = member.chatGroup.booking) == null ? void 0 : _c.status);
  if (!message || !chatGroupId || invalidOrder)
    return !1;
  let recipient = await db.chatGroupMember.findMany({
    where: {
      chatGroupId,
      OR: [{
        userId: { notIn: memberLookupIds }
      }]
    },
    select: {
      vendor: {
        select: {
          mobileNumber: !0
        }
      },
      user: {
        select: {
          username: !0
        }
      }
    }
  });
  await db.chatThread.create({
    data: {
      id: generateUuid(),
      chatGroupId,
      memberId: member.id,
      message,
      type: msgType
    }
  });
  let notification = new notification_service_default();
  return recipient.forEach((x) => {
    var _a2, _b2, _c2, _d, _e, _f;
    let toNum = ((_a2 = x.user) == null ? void 0 : _a2.username) || ((_b2 = x.vendor) == null ? void 0 : _b2.mobileNumber), fromName = ((_c2 = member.vendor) == null ? void 0 : _c2.username) || "Customer", url = "/", orderId = (_e = (_d = member == null ? void 0 : member.chatGroup) == null ? void 0 : _d.booking) == null ? void 0 : _e.orderId;
    if (orderId ? (_f = x.vendor) != null && _f.mobileNumber ? url = routes_data_default.get("VendorManageOrder", { id: orderId }) : url = routes_data_default.get("UserManageOrder", { id: orderId }) : url = routes_data_default.get("UserInboxGroup", { id: chatGroupId }), toNum) {
      let msgContent = message;
      msgType === import_client17.ChatThread_type.VOICE && (msgContent = "Voice Note"), notification.whatsapp(whatsapp_service_default.notifyOnNewChat(toNum, fromName, msgContent, url));
    }
  }), await notification.publish(), !0;
}
async function loader23(args) {
  var _a, _b, _c;
  let chatGroupId = args.params.groupId, url = new URL(args.request.url), requestType = (_a = url.searchParams.get("type")) == null ? void 0 : _a.toString(), lastTimestamp = ((_b = url.searchParams.get("timestamp")) == null ? void 0 : _b.toString()) || 0, memberId = ((_c = url.searchParams.get("memberId")) == null ? void 0 : _c.toString()) || "", threads = [], members = await db.chatGroupMember.findMany({
    where: {
      chatGroupId
    },
    select: {
      id: !0,
      user: {
        select: {
          name: !0
        }
      },
      vendor: {
        select: {
          username: !0,
          profileImageName: !0
        }
      }
    }
  });
  switch (requestType) {
    case "RECENT" /* RECENT */:
      threads = await db.chatThread.findMany({
        where: {
          chatGroupId,
          created_at: {
            gt: new Date(lastTimestamp)
          }
        },
        select: {
          message: !0,
          type: !0,
          created_at: !0,
          memberId: !0
        },
        orderBy: {
          created_at: "desc"
        }
      });
      break;
    default:
      threads = await db.chatThread.findMany({
        where: {
          chatGroupId
        },
        select: {
          message: !0,
          type: !0,
          created_at: !0,
          memberId: !0
        },
        orderBy: {
          created_at: "asc"
        }
      });
      break;
  }
  return await db.chatGroupMember.update({
    where: {
      id: memberId,
      chatGroupId
    },
    data: {
      lastSeen: /* @__PURE__ */ new Date()
    }
  }), {
    threads,
    members
  };
}

// app/routes/_auth.order.submit.tsx
var auth_order_submit_exports = {};
__export(auth_order_submit_exports, {
  action: () => action13,
  default: () => auth_order_submit_default,
  loader: () => loader24
});
var import_client18 = require("@prisma/client"), import_node18 = require("@remix-run/node");
var ORDER_PREFIX = "CC";
function genOrderId(user) {
  function extractTwoDigit(number) {
    return number % 100;
  }
  let date = /* @__PURE__ */ new Date();
  return ORDER_PREFIX + extractTwoDigit(date.getFullYear()) + date.getMonth() + date.getDay() + extractTwoDigit(+user) + extractTwoDigit(Date.now());
}
async function action13({
  request
}) {
  var _a, _b, _c, _d, _e;
  let cookieHeader = request.headers.get("Cookie"), userId = (await getSession(cookieHeader)).get(USER_SESSION_KEY), form = await request.formData(), paymentMode = (_a = form.get("paymentMode")) == null ? void 0 : _a.toString(), source = (_b = form.get("source")) == null ? void 0 : _b.toString(), coupon = (_c = form.get("coupon")) == null ? void 0 : _c.toString(), orderId = "", REDIRECT_SUCCESS = "/order/success", debug_point = "starting", notification = new notification_service_default();
  try {
    if (!userId)
      return (0, import_node18.redirect)("/user/login");
    let loggedInUser = await db.user.findFirst({
      where: {
        id: userId
      }
    });
    if (!loggedInUser || !paymentMode)
      return (0, import_node18.redirect)("/user/login");
    let cartData = await cartCheckoutCookie.parse(cookieHeader), packageId = cartData == null ? void 0 : cartData.packageId;
    if (!((_d = cartData == null ? void 0 : cartData.cart) != null && _d.length))
      return (0, import_node18.redirect)("/cart/checkout");
    if (debug_point = "2", !((_e = cartData == null ? void 0 : cartData.cart) != null && _e.length))
      return;
    debug_point = "3";
    let summary = await CartService.cartEstimationForCheckout(cartData.cart, coupon, paymentMode, packageId);
    orderId = genOrderId(+loggedInUser.username), debug_point = "4";
    let data = await db.booking.create({
      data: {
        id: generateUuid(),
        userId: loggedInUser.id,
        orderId,
        status: import_client18.BookingStatus.PENDING,
        total: summary.estimation.final,
        subTotal: summary.estimation.total,
        tax: summary.estimation.tax,
        discount: summary.estimation.discount,
        coupon: summary.estimation.coupon,
        paymentMode,
        packageId
      }
    });
    debug_point = "5";
    let orderValue = [];
    if (paymentMode === import_client18.BookingPaymentMode.FULL && orderValue.push(summary.estimation.final), paymentMode === import_client18.BookingPaymentMode.PAY_LATER) {
      let firstPaymentAmount = summary.estimation.final * (common_data_default.PAY_LATER_SLAB_PERCENTAGE / 100), remainingAmount = summary.estimation.final - firstPaymentAmount;
      orderValue.push(firstPaymentAmount), orderValue.push(remainingAmount);
    }
    for (let i = 0; i < orderValue.length; i++)
      await payment_service_default.createOrder({
        amount: orderValue[i],
        orderId,
        bookingId: data.id,
        partialPay: !1
      });
    debug_point = "6", paymentMode === import_client18.BookingPaymentMode.FULL && (REDIRECT_SUCCESS = "/order/payment");
    let chatGroup = await chat_service_default.createChatGroup(orderId, data.id);
    if (await chat_service_default.addUserAsChatGroupMember({
      chatGroupId: chatGroup.id,
      userId: loggedInUser.id
    }), paymentMode === import_client18.BookingPaymentMode.PAY_LATER) {
      let firstItemInfo = summary.groupData[0];
      notification.whatsapp(whatsapp_service_default.remindUserOrderPayment({
        to: loggedInUser.username,
        service: firstItemInfo.group.name,
        orderId
      }));
    }
    console.log("passed"), debug_point = "7";
    for (let i = 0; i < summary.groupData.length; i++) {
      let item = summary.groupData[i], cartItem = cartData.cart.find((x) => x.vendorServiceGroupId === item.id), addons = summary.addonData.filter((x) => x.vendorServiceGroupId === item.id);
      if (!cartItem)
        continue;
      let endDate = "";
      cartItem.date && new Date(cartItem.date).setHours(cartItem.timeHour);
      let serviceData = await db.bookingService.create({
        data: {
          id: generateUuid(),
          bookingId: data.id,
          vendorServiceGroupId: item.id,
          status: import_client18.BookingStatus.PENDING,
          cost: item.cost,
          originalCost: item.cost,
          vendorCost: item.costByVendor,
          date: cartItem.date || null,
          timeHour: cartItem.timeHour,
          duration: cartItem.duration,
          endTime: cartItem.timeHour + cartItem.duration,
          endDate: endDate || null,
          location: cartItem.location,
          locationLat: cartItem.locationLat,
          locationLon: cartItem.locationLon
        }
      });
      await db.bookingAddons.createMany({
        data: addons.map((x) => ({
          id: generateUuid(),
          bookingServiceId: serviceData.id,
          serviceId: x.serviceId,
          serviceName: x.service.name,
          fareMode: x.fareMode,
          status: import_client18.BookingStatus.PENDING,
          cost: x.cost
        }))
      }), await chat_service_default.addVendorAsChatGroupMember({
        chatGroupId: chatGroup.id,
        vendorId: item.vendorId
      }), console.log(i);
    }
    debug_point = "8", REDIRECT_SUCCESS = REDIRECT_SUCCESS + "?id=" + orderId;
  } catch (e) {
    REDIRECT_SUCCESS = "/order/failed?id=" + orderId + "&p=" + debug_point + "e=" + JSON.stringify(e);
  }
  console.log("notifi"), notification.admin("You have a new order: " + orderId), await notification.publish();
  let headers = [
    ["Set-Cookie", await cartCheckoutCookie.serialize(null)]
  ];
  return source === "cart" && headers.push(["Set-Cookie", await userCartCookie.serialize(null)]), (0, import_node18.redirect)(REDIRECT_SUCCESS, {
    headers
  });
}
async function loader24() {
  return null;
}
var auth_order_submit_default = () => "Processing your order. Please wait...";

// app/routes/_auth.order.verify.tsx
var auth_order_verify_exports = {};
__export(auth_order_verify_exports, {
  action: () => action14,
  default: () => auth_order_verify_default,
  loader: () => loader25
});
var import_node19 = require("@remix-run/node");

// app/service/email.service.ts
var nodemailer = require("nodemailer"), SENDER_ID = "team@celebriacollective.com", PASSWORD = "notyourdaddy69", transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: !0,
  auth: {
    user: SENDER_ID,
    pass: PASSWORD
  }
});
async function sendEmail(input) {
  await transporter.sendMail({
    from: '"Celebria Collective" <' + SENDER_ID + ">",
    to: input.to,
    subject: input.subject,
    text: input.subject,
    html: input.html
  });
}
async function notifyVendorNewOrder2(input) {
  if (!input.email)
    return;
  let subject = "You have a new booking", html = `Hello, You have a new booking <br/><br/> Service:<b>${input.serviceName}</b>
    <br/>
    Date: <b>${input.date}</b>
    <br/><br/>
    Order ID:${input.orderId}
    <br/><br/>
    Please login to your account for more information. 
    <a href="http://www.celebriacollective.com">celebriacollective.com</a>
    `, text2 = "Hello, You have a new booking on " + input.date;
  return await sendEmail({
    to: admin_data_default.EMAIL_DATA.ADMIN_EMAIL,
    subject,
    html,
    text: text2
  }), sendEmail({
    to: input.email,
    subject,
    html,
    text: text2
  });
}
var EmailService = {
  notifyVendorNewOrder: notifyVendorNewOrder2
}, email_service_default = EmailService;

// app/routes/_auth.order.verify.tsx
async function action14({
  request
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let cookieHeader = request.headers.get("Cookie"), session = await getSession(cookieHeader), form = await request.formData(), orderId = (_a = form.get("orderId")) == null ? void 0 : _a.toString(), bookingPaymentId = (_b = form.get("bookingPaymentId")) == null ? void 0 : _b.toString(), razorpayPaymentId = (_c = form.get("razorpayPaymentId")) == null ? void 0 : _c.toString(), razorpaySignature = (_d = form.get("razorpaySignature")) == null ? void 0 : _d.toString(), userId = session.get(USER_SESSION_KEY);
  if (!razorpayPaymentId || !bookingPaymentId || !razorpaySignature || !orderId || !userId)
    return null;
  let orderData = await db.booking.findFirstOrThrow({
    where: {
      orderId,
      userId
    },
    select: {
      orderId: !0,
      total: !0,
      user: {
        select: {
          username: !0
        }
      },
      packageId: !0,
      Package: {
        select: {
          name: !0
        }
      },
      bookingService: {
        select: {
          date: !0,
          timeHour: !0,
          vendorCost: !0,
          vendorServiceGroup: {
            select: {
              group: {
                select: {
                  name: !0
                }
              },
              vendor: {
                select: {
                  email: !0,
                  mobileNumber: !0
                }
              }
            }
          }
        }
      }
    }
  }), pendingPayment = await payment_service_default.getPaymentByBookingPaymentId(bookingPaymentId), checkFirstPaymentDone2 = await payment_service_default.checkFirstPaymentDone(orderId);
  if (!pendingPayment)
    return null;
  let success = await payment_service_default.validatePayment(pendingPayment.id, razorpayPaymentId, razorpaySignature), redirectUrl, notification = new notification_service_default();
  return success ? (await payment_service_default.markPaymentDone({ bookingPaymentId }), redirectUrl = "/order/success?id=" + orderData.orderId, checkFirstPaymentDone2 || (orderData.packageId ? (notification.email(email_service_default.notifyVendorNewOrder({
    email: (_e = orderData.bookingService[0].vendorServiceGroup.vendor) == null ? void 0 : _e.email,
    date: "To be notified",
    serviceName: ((_f = orderData.Package) == null ? void 0 : _f.name) || "",
    orderId: orderData.orderId
  })), notification.whatsapp(whatsapp_service_default.notifyVendorNewOrder({
    to: (_g = orderData.bookingService[0].vendorServiceGroup.vendor) == null ? void 0 : _g.mobileNumber,
    orderId: orderData.orderId,
    service: ((_h = orderData.Package) == null ? void 0 : _h.name) || "",
    date: "To be notified",
    cost: 0,
    time: "To be notified"
  }))) : orderData.bookingService.forEach((item) => {
    var _a2, _b2;
    notification.email(email_service_default.notifyVendorNewOrder({
      email: (_a2 = item.vendorServiceGroup.vendor) == null ? void 0 : _a2.email,
      date: item.date ? DateFormatter.short(item.date) : "To be notified",
      serviceName: item.vendorServiceGroup.group.name,
      orderId: orderData.orderId
    })), notification.whatsapp(whatsapp_service_default.notifyVendorNewOrder({
      to: (_b2 = item.vendorServiceGroup.vendor) == null ? void 0 : _b2.mobileNumber,
      orderId: orderData.orderId,
      service: item.vendorServiceGroup.group.name,
      date: item.date ? DateFormatter.short(item.date) : "To be notified",
      cost: item.vendorCost,
      time: DateFormatter.timeHourTo12Hrs(item.timeHour)
    }));
  }), notification.whatsapp(
    whatsapp_service_default.orderConfirmationUser({
      to: orderData.user.username,
      orderId,
      cost: orderData.total,
      date: orderData.bookingService[0].date ? DateFormatter.short(orderData.bookingService[0].date) : "To be notified",
      time: DateFormatter.timeHourTo12Hrs(orderData.bookingService[0].timeHour),
      serviceName: orderData.bookingService[0].vendorServiceGroup.group.name
    })
  )), notification.admin("Payment recieved for " + orderId)) : redirectUrl = "/order/failed?id=" + orderData.orderId, await notification.publish(), (0, import_node19.redirect)(redirectUrl);
}
function loader25() {
  return null;
}
function auth_order_verify_default() {
  return "Please wait...";
}

// app/routes/about.terms._index.tsx
var about_terms_index_exports = {};
__export(about_terms_index_exports, {
  default: () => about_terms_index_default,
  meta: () => meta17
});
var import_core42 = require("@mantine/core");
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), meta17 = page_meta_default({
  title: "Terms & Conditions"
});
function about_terms_index_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_core42.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_core42.Title, { order: 3, children: "Terms & Conditions" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_core42.Space, { h: "md" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Last updated on Aug 12th 2024" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: 'For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean celebria collective, whose registered/operational office is 02, hoodi main road, vasantha towers, krishnarajapuram Bengaluru KARNATAKA 560036 . "you", \u201Cyour\u201D, "user", \u201Cvisitor\u201D shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.' }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "1. Your use of the website and/or purchase from us are governed by following Terms and Conditions:" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "The content of the pages of this website is subject to change without notice." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Our website contains material which is owned by or licensed to us. This material includes, but are  not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Unauthorized use of information provided by us  shall give rise to a claim for damages and/or be a criminal offense." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "You may not create a link to our website from another website or document without celebria collective\u2019s prior written consent." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India ." }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 91,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time" }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.terms._index.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "2. Services Offered" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 107,
      columnNumber: 12
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    "Celebria Collective is an intermediary platform that connects users with photographers, filmmakers, makeup artists, and fashion designers for various services. The platform allows users to book these services based on their requirements.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "3. User Accounts" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 110,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 110,
      columnNumber: 1
    }, this),
    "Account Creation: To use certain features, you may need to create an account. You must provide accurate and complete information and keep your account details up-to-date.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 112,
      columnNumber: 1
    }, this),
    "Account Responsibility: You are responsible for maintaining the confidentiality of your account information, including your password. Any activity under your account is your responsibility.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 113,
      columnNumber: 1
    }, this),
    "Termination: We reserve the right to terminate or suspend your account if we suspect any violation of these terms.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "4. Vendor and User Obligations" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 114,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 114,
      columnNumber: 1
    }, this),
    "Vendors: Vendors must provide accurate information about their services, including pricing, availability, and any other relevant details. Vendors retain ownership of their content (photos, videos, etc.), but by using Celebria Collective, they grant us the right to display this content on our platform.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 116,
      columnNumber: 1
    }, this),
    "Users: Users must provide accurate booking information and adhere to the cancellation policy. Users agree to use the services in a lawful manner and not engage in any fraudulent activities.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "5. Booking and Payments" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 117,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 117,
      columnNumber: 1
    }, this),
    "Booking Process: When a user books a service through the platform, the vendor will receive a notification to accept or reject the booking. Booking details, including date, time, and location, will be shared with both parties.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 119,
      columnNumber: 1
    }, this),
    "Payments: Users must complete payments as per the booking terms. The booking will only be confirmed upon full payment. Refunds and Cancellations:",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "6. Cancellation and Refund Policy" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 121,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 121,
      columnNumber: 1
    }, this),
    "Please refer to our Cancellation and Refund Policy for details on cancellations and refunds.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "7. Content Ownership" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 123,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 123,
      columnNumber: 1
    }, this),
    "Vendor Content: Vendors retain ownership of all photos, videos, and other content they upload. Celebria Collective does not claim ownership of this content. However, vendors grant Celebria Collective the right to use this content on the platform.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 125,
      columnNumber: 1
    }, this),
    "Content Removal: If you believe that your content has been used without permission, please contact us. We will take down any content upon request, provided you can prove ownership.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "8. Privacy Policy" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 126,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 126,
      columnNumber: 1
    }, this),
    "Your use of the platform is also governed by our Privacy Policy. We take your privacy seriously and are committed to protecting your personal information.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "9. Limitation of Liability" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 129,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 129,
      columnNumber: 1
    }, this),
    "Celebria Collective is a platform that connects users with vendors. We are not responsible for the actions or omissions of any vendor. Our liability is limited to the amount paid by the user for the specific service in question.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "10. Dispute Resolution" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 132,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 132,
      columnNumber: 1
    }, this),
    "Any disputes arising out of or related to these terms will be resolved through binding arbitration in [Your Jurisdiction]. Both parties agree to resolve disputes on an individual basis and not as part of a class action.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "11. Governing Law" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 135,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 135,
      columnNumber: 1
    }, this),
    "These terms are governed by the laws of [Your Jurisdiction]. Any legal actions or proceedings arising from these terms must be brought in the courts of [Your Jurisdiction].",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "12. Changes to Terms" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 138,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 138,
      columnNumber: 1
    }, this),
    "Celebria Collective reserves the right to modify these terms at any time. We will notify you of any changes by posting the new terms on our website. Your continued use of the platform constitutes acceptance of the revised terms.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("strong", { children: "13. Contact Information" }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 141,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.terms._index.tsx",
      lineNumber: 141,
      columnNumber: 1
    }, this),
    "If you have any questions or concerns about these terms, please contact us at info@celebriacollective.com."
  ] }, void 0, !0, {
    fileName: "app/routes/about.terms._index.tsx",
    lineNumber: 11,
    columnNumber: 12
  }, this);
}

// app/routes/_api.notify.admin.tsx
var api_notify_admin_exports = {};
__export(api_notify_admin_exports, {
  action: () => action15
});
var import_node20 = require("@remix-run/node");
async function action15({
  request
}) {
  let body = await request.formData(), profileId = body.get("profileId"), service = body.get("service");
  try {
    let message = `Someone has requested a call from profile ${profileId} for service ${service}`;
    await whatsapp_service_default.notifyAdmin(message);
  } catch {
  }
  return (0, import_node20.json)({ success: !0 });
}

// app/routes/user.login._index.tsx
var user_login_index_exports = {};
__export(user_login_index_exports, {
  default: () => user_login_index_default,
  loader: () => loader26
});
var import_core43 = require("@mantine/core"), import_react59 = require("@remix-run/react");
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function loader26(args) {
  return new URL(args.request.url).searchParams.get("redirectUrl");
}
function user_login_index_default() {
  let data = (0, import_react59.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_core43.Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_core43.Grid, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_core43.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(UserLogin_default, { redirectUrl: data }, void 0, !1, {
    fileName: "app/routes/user.login._index.tsx",
    lineNumber: 16,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/user.login._index.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/user.login._index.tsx",
    lineNumber: 14,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/user.login._index.tsx",
    lineNumber: 13,
    columnNumber: 12
  }, this);
}

// app/routes/_auth.user.inbox.tsx
var auth_user_inbox_exports = {};
__export(auth_user_inbox_exports, {
  default: () => auth_user_inbox_default,
  loader: () => loader27
});
var import_core44 = require("@mantine/core"), import_react60 = require("@remix-run/react"), import_react61 = require("react");

// app/styles/accordionInbox.module.css
var accordionInbox_module_default = { root: "accordionInbox-module__root__Sqzxj", item: "accordionInbox-module__item__iund9", chevron: "accordionInbox-module__chevron__H7Tyf" };

// app/routes/_auth.user.inbox.tsx
var import_hooks5 = require("@mantine/hooks"), import_icons_react22 = require("@tabler/icons-react"), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
async function loader27({ params, request }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get(USER_SESSION_KEY);
  return userId ? { groups: await chat_service_default.getAllChatGroupsByUser(userId) } : null;
}
var Inbox = {
  Home: () => {
    let location2 = (0, import_react60.useLocation)(), isMobile = (0, import_hooks5.useMediaQuery)(`(max-width: ${(0, import_core44.em)(992)})`), [showChatGroupsList, setChatGroupsListVisible] = (0, import_react61.useState)(!1);
    return (0, import_react61.useEffect)(() => {
      setChatGroupsListVisible(isMobile ? location2.pathname === routes_data_default.get("UserInbox") : !0);
    }, [location2.pathname, isMobile]), /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Title, { order: 3, children: "Inbox" }, void 0, !1, {
        fileName: "app/routes/_auth.user.inbox.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Space, { h: "lg" }, void 0, !1, {
        fileName: "app/routes/_auth.user.inbox.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Grid, { gutter: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Grid.Col, { hidden: !showChatGroupsList, span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Card, { withBorder: !0, p: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Inbox.Groups, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.inbox.tsx",
          lineNumber: 47,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.inbox.tsx",
          lineNumber: 46,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.inbox.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Grid.Col, { span: { base: 12, md: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react60.Outlet, {}, void 0, !1, {
          fileName: "app/routes/_auth.user.inbox.tsx",
          lineNumber: 51,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.user.inbox.tsx",
          lineNumber: 50,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.user.inbox.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 41,
      columnNumber: 12
    }, this);
  },
  Groups: () => {
    let data = (0, import_react60.useLoaderData)(), navigate = (0, import_react60.useNavigate)();
    function navigateToChat(id) {
      navigate(routes_data_default.get("UserInboxGroup", { id }));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react61.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 65,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react60.Await, { resolve: data == null ? void 0 : data.groups, children: (_response) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Accordion, { defaultValue: "0", classNames: accordionInbox_module_default, children: _response == null ? void 0 : _response.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Accordion.Item, { value: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.Accordion.Control, { icon: item.ChatThread.length && item.ChatGroupMember[0].lastSeen < item.ChatThread[0].created_at ? /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_core44.ThemeIcon, { size: "sm", radius: "lg", color: "yellow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_icons_react22.IconAlertSmall, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 69,
      columnNumber: 199
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 69,
      columnNumber: 151
    }, this) : "", onClick: (v) => navigateToChat(item.id), children: item.name || DateFormatter.short(item.created_at) }, void 0, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 69,
      columnNumber: 33
    }, this) }, item.id, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 68,
      columnNumber: 51
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 67,
      columnNumber: 37
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.inbox.tsx",
      lineNumber: 64,
      columnNumber: 12
    }, this);
  }
}, auth_user_inbox_default = Inbox.Home;

// app/routes/_api.verify-otp.tsx
var api_verify_otp_exports = {};
__export(api_verify_otp_exports, {
  action: () => action16
});
var import_node21 = require("@remix-run/node");
var bcrypt = require("bcryptjs");
async function action16({
  request
}) {
  var _a;
  let body = await request.formData(), username = body.get("phone"), otp = body.get("otp"), redirectUrl = ((_a = body.get("redirectUrl")) == null ? void 0 : _a.toString()) || "/user/home", success = !1, resCode = 400;
  try {
    let existingUser = await db.userOtp.findFirstOrThrow({
      where: {
        username
      }
    });
    if (await bcrypt.compare(otp, existingUser.otpHash)) {
      await db.userOtp.deleteMany({
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
        return session.set(USER_SESSION_KEY, token), (0, import_node21.redirect)(redirectUrl, {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
    }
  } catch {
  }
  return success && (resCode = 200), (0, import_node21.json)({ success }, resCode);
}

// app/routes/_auth.user.home.tsx
var auth_user_home_exports = {};
__export(auth_user_home_exports, {
  default: () => auth_user_home_default,
  loader: () => loader28,
  meta: () => meta18
});
var import_core45 = require("@mantine/core"), import_node22 = require("@remix-run/node"), import_react62 = require("@remix-run/react"), import_react63 = require("react");
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), meta18 = () => [
  { title: "My Account | Orders" },
  { name: "description", content: "Celebria Collective, Find your Pefect vendor" }
];
async function loader28({ params, request }) {
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
        created_at: !0
      }
    }).then((r) => {
      let p = r.map((x) => ({
        id: x.orderId,
        status: x.status,
        date: x.created_at
      }));
      resolve(p);
    }).catch((e) => {
      reject("Connection failed");
    });
  });
  return (0, import_node22.defer)({ orders });
}
var UserHome = {
  Index: () => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Grid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Grid.Col, { span: { base: 12, md: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Title, { order: 3, children: "Manage Bookings" }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(UserHome.AllBookings, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.user.home.tsx",
    lineNumber: 69,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.user.home.tsx",
    lineNumber: 68,
    columnNumber: 16
  }, this),
  AllBookings: () => {
    let data = (0, import_react62.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react63.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Skeleton, {}, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 79,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react62.Await, { resolve: data.orders, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Grid, { children: [
      response.map(
        (booking) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Grid.Col, { span: 12, children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Grid, { justify: "space-between", align: "middle", gutter: 20, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Grid.Col, { span: "auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Group, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Text, { c: "dimmed", fw: 500, children: [
                  "Order ID: ",
                  booking.id
                ] }, void 0, !0, {
                  fileName: "app/routes/_auth.user.home.tsx",
                  lineNumber: 86,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Badge, { color: StatusMarker.get(booking.status) || "gray", children: booking.status }, void 0, !1, {
                  fileName: "app/routes/_auth.user.home.tsx",
                  lineNumber: 87,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 85,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Space, { h: "sm" }, void 0, !1, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 89,
                columnNumber: 37
              }, this),
              "Placed on: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("b", { children: DateFormatter.short(booking.date) }, void 0, !1, {
                fileName: "app/routes/_auth.user.home.tsx",
                lineNumber: 90,
                columnNumber: 48
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 84,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react62.Link, { to: "/user/order/" + booking.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Button, { radius: "xl", size: "middle", children: "View" }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 94,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 93,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.user.home.tsx",
              lineNumber: 92,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.user.home.tsx",
            lineNumber: 83,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/_auth.user.home.tsx",
            lineNumber: 82,
            columnNumber: 88
          }, this)
        ] }, booking.id, !0, {
          fileName: "app/routes/_auth.user.home.tsx",
          lineNumber: 82,
          columnNumber: 50
        }, this)
      ),
      !response.length && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_core45.Grid.Col, { span: 12, children: "Sorry, You haven't scheduled any orders" }, void 0, !1, {
        fileName: "app/routes/_auth.user.home.tsx",
        lineNumber: 103,
        columnNumber: 46
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 81,
      columnNumber: 34
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.user.home.tsx",
      lineNumber: 78,
      columnNumber: 16
    }, this);
  }
}, auth_user_home_default = UserHome.Index;

// app/routes/cart.add._index.tsx
var cart_add_index_exports = {};
__export(cart_add_index_exports, {
  action: () => action17,
  default: () => cart_add_index_default
});
var import_node23 = require("@remix-run/node");
async function action17({
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
  return (0, import_node23.redirect)(redirectUrl ? redirectUrl.href : routes_data_default.get("Cart"), {
    headers: {
      "Set-Cookie": await userCartCookie.serialize(currentCart)
    }
  });
}
var cart_add_index_default = () => "please wait...";

// app/routes/login.redirect.tsx
var login_redirect_exports = {};
__export(login_redirect_exports, {
  action: () => action18,
  loader: () => loader29
});
var import_node24 = require("@remix-run/node");
async function action18({
  request
}) {
  var _a, _b;
  let session = await getSession(
    request.headers.get("Cookie")
  ), body = await request.formData(), userToken = (_a = body.get("id")) == null ? void 0 : _a.toString(), redirectUrl = ((_b = body.get("redirect")) == null ? void 0 : _b.toString()) || "/user/home";
  return userToken ? (session.set(USER_SESSION_KEY, userToken), (0, import_node24.redirect)(redirectUrl, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : (0, import_node24.redirect)(redirectUrl || "/");
}
async function loader29({
  request
}) {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  if (session.has(USER_SESSION_KEY))
    return (0, import_node24.redirect)("/");
  let data = { error: session.get("error") };
  return (0, import_node24.json)(data, {
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
  loader: () => loader30,
  meta: () => meta19
});
var import_react64 = require("@remix-run/react");
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), meta19 = page_meta_default({
  title: "Vendor Signup"
});
function loader30() {
  return null;
}
function PartnerSignupParent() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react64.Outlet, {}, void 0, !1, {
    fileName: "app/routes/partner.signup.tsx",
    lineNumber: 13,
    columnNumber: 12
  }, this);
}
function ErrorBoundary4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { style: { textAlign: "center" }, children: "Oops, Something went wrong! Please reload the page." }, void 0, !1, {
    fileName: "app/routes/partner.signup.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
}

// app/routes/order.success.tsx
var order_success_exports = {};
__export(order_success_exports, {
  default: () => order_success_default,
  loader: () => loader31
});
var import_icons3 = require("@ant-design/icons"), import_core46 = require("@mantine/core"), import_node25 = require("@remix-run/node"), import_react65 = require("@remix-run/react"), import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
async function loader31({
  params,
  request
}) {
  let orderId = new URL(request.url).searchParams.get("id");
  return orderId ? { id: orderId } : ((0, import_node25.redirect)("/404"), null);
}
var getIconStyle = (color) => ({
  width: (0, import_core46.rem)(24),
  height: (0, import_core46.rem)(24),
  color: color ? `var(--mantine-color-${color}-7)` : void 0
}), iconStyle = getIconStyle(), customIcons = {
  1: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_icons3.FrownOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 32,
    columnNumber: 8
  }, this),
  2: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_icons3.FrownOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 33,
    columnNumber: 8
  }, this),
  3: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_icons3.MehOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 34,
    columnNumber: 8
  }, this),
  4: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_icons3.SmileOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 35,
    columnNumber: 8
  }, this),
  5: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_icons3.SmileOutlined, { style: iconStyle }, void 0, !1, {
    fileName: "app/routes/order.success.tsx",
    lineNumber: 36,
    columnNumber: 8
  }, this)
};
var OrderSuccess = {
  Index: () => {
    let data = (0, import_react65.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Grid, { justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Grid.Col, { span: { base: 12, md: 4, lg: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Stack, { gap: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Stack, { justify: "center", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Text, { size: "sm", c: "dimmed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_icons3.CheckCircleOutlined, { style: { fontSize: "50px" } }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 55,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 54,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { style: { textAlign: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Title, { order: 2, children: "Your Order is Confirmed!" }, void 0, !1, {
            fileName: "app/routes/order.success.tsx",
            lineNumber: 58,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Text, { children: [
            "We'll send you a confirmation email",
            /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("br", {}, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Space, { h: "sm" }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 61,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react65.Link, { to: "/user/order/" + (data == null ? void 0 : data.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Button, { variant: "filled", radius: "xl", children: "Check Status" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Title, { order: 5, children: "How was your experience?" }, void 0, !1, {
          fileName: "app/routes/order.success.tsx",
          lineNumber: 68,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_core46.Rating, { emptySymbol: ({ index }) => customIcons[index + 1] }, void 0, !1, {
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
  action: () => action19,
  default: () => profile_user_default,
  loader: () => loader32,
  meta: () => meta20
});
var import_core48 = require("@mantine/core"), import_node26 = require("@remix-run/node"), import_react68 = require("@remix-run/react"), import_icons_react23 = require("@tabler/icons-react"), import_icons_react24 = require("@tabler/icons-react"), import_react69 = require("react");

// app/styles/accordian.module.css
var accordian_module_default = { root: "accordian-module__root__AeZrj", item: "accordian-module__item__DPCxc", chevron: "accordian-module__chevron__TNzMJ" };

// app/routes/profile.$user.tsx
var import_icons_react25 = require("@tabler/icons-react"), import_icons_react26 = require("@tabler/icons-react"), import_icons_react27 = require("@tabler/icons-react");
var import_icons_react28 = require("@tabler/icons-react");

// app/components/ChatWithVendorAffix.tsx
var import_core47 = require("@mantine/core"), import_hooks6 = require("@mantine/hooks"), import_react67 = require("react");

// app/components/VendorCallNowButton.tsx
var import_react66 = require("@remix-run/react"), import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function VendorCallNowButton(props) {
  let fetcher = (0, import_react66.useFetcher)();
  function submit() {
    fetcher.submit({
      profileId: props.profileId,
      service: props.service || "Nil"
    }, {
      method: "post",
      action: "/notify/admin"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { onClick: submit, children: props.children }, void 0, !1, {
    fileName: "app/components/VendorCallNowButton.tsx",
    lineNumber: 26,
    columnNumber: 12
  }, this);
}
var VendorCallNowButton_default = VendorCallNowButton;

// app/components/ChatWithVendorAffix.tsx
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function ChatWithVendorAffix(p) {
  let [scroll2, scrollTo] = (0, import_hooks6.useWindowScroll)(), [showCard, setShowCard] = (0, import_react67.useState)(!0), ctaUrl = "tel:" + SUPPORT_CENTER.PHONE;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Affix, { position: { bottom: 30, right: 30 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Transition, { transition: "slide-up", mounted: showCard && scroll2.y > 0, children: (transitionStyles) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Card, { style: { ...transitionStyles, overflow: "unset" }, bg: "#fffbed", radius: "lg", withBorder: !0, shadow: "xl", pos: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.CloseButton, { size: "sm", onClick: () => setShowCard(!1), pos: "absolute", right: "12px", top: "12px", bg: "#e1e1e1" }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Avatar, { bg: "white", pos: "absolute", size: "lg", src: p.avatar, right: "-8px", bottom: "-8px" }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Title, { order: 5, children: "Got any queries?" }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Space, { h: "5" }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Text, { children: "Get start with a service to chat with me." }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Space, { h: "lg" }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_core47.Group, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("a", { href: ctaUrl || "#book-now-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(VendorCallNowButton_default, { profileId: p.profileId, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      import_core47.Button,
      {
        radius: "xl",
        variant: "gradient",
        gradient: { from: "blue", to: "violet", deg: 122 },
        children: "Call Now"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ChatWithVendorAffix.tsx",
        lineNumber: 28,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 27,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ChatWithVendorAffix.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ChatWithVendorAffix.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ChatWithVendorAffix.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/ChatWithVendorAffix.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

// app/routes/profile.$user.tsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
var meta20 = page_meta_default({
  title: "Book Now"
});
async function action19({ params, request }) {
  let vendorUsername = params.user || "", actionType = (await request.formData()).get("actionType"), userId = (await getSession(request.headers.get("Cookie"))).get(USER_SESSION_KEY);
  if (!userId || !vendorUsername)
    return null;
  switch (actionType) {
    case "WISHLIST_ADD" /* WISHLIST_ADD */:
      return await wishlist_service_default.add({
        userId,
        vendorUsername
      }), !0;
      break;
    case "WISHLIST_REMOVE" /* WISHLIST_REMOVE */:
      return await wishlist_service_default.remove({
        userId,
        vendorUsername
      }), !0;
      break;
  }
}
async function loader32({ params, request }) {
  var _a;
  let id = params.user || "", userId = (await getSession(request.headers.get("Cookie"))).get(USER_SESSION_KEY), preselectedServiceGrpId = (_a = new URL(request.url).searchParams.get("service")) == null ? void 0 : _a.toString(), vendorDetails = VendorQuery.getVendorByUsername(id), serviceList = VendorQuery.getServices(id), getLinkedProfiles2 = VendorQuery.getLinkedProfiles(id), wishlistExists = await wishlist_service_default.checkItemExists({
    vendorUsername: id,
    userId
  });
  return (0, import_node26.defer)({
    username: id,
    profile: vendorDetails,
    services: serviceList,
    serviceGroupId: preselectedServiceGrpId,
    otherProfiles: getLinkedProfiles2,
    wishlistExists
  });
}
var ProfileLayout = {
  Index: () => {
    let [activeGroupData, setActiveGroupData] = (0, import_react69.useState)(), data = (0, import_react68.useLoaderData)(), navigate = (0, import_react68.useNavigate)(), [profileData, setProfileData] = (0, import_react69.useState)();
    function setPreselectedGrpData(d) {
      setActiveGroupData(d || null);
    }
    function switchProfile(value) {
      navigate(routes_data_default.get("VendorProfile", { id: value }));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid, { gutter: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: { base: 12, md: 3 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react69.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Skeleton, {}, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 120,
            columnNumber: 41
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react68.Await, { resolve: data.profile, children: (profile) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(ProfileLayout.Cover, { profile, activeGroupData, onLoad: setProfileData, wishlistExists: data.wishlistExists }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 122,
            columnNumber: 43
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 121,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 120,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Space, { h: "lg" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 125,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(ShareOptions_default, {}, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 126,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 119,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: { base: 12, md: 9 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Stack, { justify: "center", align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { order: 4, c: "gray", children: "Services I'm offering," }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 130,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react69.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Skeleton, {}, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 131,
              columnNumber: 45
            }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react68.Await, { resolve: data.otherProfiles, children: (profiles) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.SegmentedControl, { value: data.username, size: "md", radius: "xl", style: { zIndex: 0 }, color: "pink", data: profiles.map((item) => {
              var _a;
              return {
                value: item.username,
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Center, { style: { gap: 10 }, children: [
                  item.username === data.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react23.IconArrowDown, { style: { width: (0, import_core48.rem)(16), height: (0, import_core48.rem)(16) } }, void 0, !1, {
                    fileName: "app/routes/profile.$user.tsx",
                    lineNumber: 134,
                    columnNumber: 111
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react28.IconPoint, {}, void 0, !1, {
                    fileName: "app/routes/profile.$user.tsx",
                    lineNumber: 134,
                    columnNumber: 175
                  }, this),
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { children: (_a = item.vendorType) == null ? void 0 : _a.vendorIdentifier }, void 0, !1, {
                    fileName: "app/routes/profile.$user.tsx",
                    lineNumber: 134,
                    columnNumber: 190
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 134,
                  columnNumber: 48
                }, this)
              };
            }), onChange: switchProfile }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 133,
              columnNumber: 48
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 132,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 131,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 129,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 139,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react68.Outlet, { context: { profileData, activeGroupData } }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 140,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Divider, { my: "xl" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react69.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Skeleton, {}, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 144,
        columnNumber: 60
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 144,
        columnNumber: 33
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react68.Await, { resolve: data.services, children: (services) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(ProfileLayout.Pricing, { services, preSelectedGroupId: data.serviceGroupId, preSelectedGroup: setPreselectedGrpData }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 146,
        columnNumber: 36
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 145,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(ChatWithVendorAffix, { profileId: data.username, avatar: profileData == null ? void 0 : profileData.avatar }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 117,
      columnNumber: 12
    }, this);
  },
  Cover: ({ profile, activeGroupData, wishlistExists, onLoad }) => {
    let submit = (0, import_react68.useSubmit)(), navigate = (0, import_react68.useNavigate)(), location2 = (0, import_react68.useLocation)();
    (0, import_react69.useEffect)(() => {
      onLoad(profile);
    }, []);
    function addToWishlist2() {
      if (wishlistExists === -1) {
        navigate(routes_data_default.get("UserLogin", {
          redirectUrl: location2.pathname
        }));
        return;
      }
      submit({
        actionType: wishlistExists ? "WISHLIST_REMOVE" /* WISHLIST_REMOVE */ : "WISHLIST_ADD" /* WISHLIST_ADD */
      }, {
        method: "post"
      });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Card, { shadow: "sm", padding: "lg", radius: "md", withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid, { align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: { base: 4, md: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Image, { src: profile == null ? void 0 : profile.avatar, width: "100%", mah: "300px" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 181,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 180,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: { base: 8, md: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Box, { p: "md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Stack, { gap: "xs", justify: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Flex, { gap: "sm", align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { order: 4, children: profile == null ? void 0 : profile.fullName }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 187,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react25.IconDiscountCheckFilled, { size: "20px", style: { color: "var(--ui-color-success)" } }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 188,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 186,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Flex, { align: "center", gap: "xs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react26.IconMapPin, { style: { color: "gray" }, size: "18px" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 191,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { fw: 500, children: locationMap[profile == null ? void 0 : profile.location] || "N/A" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 192,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 190,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 185,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Space, { h: "md" }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 195,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Flex, { justify: "center", gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Box, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("a", { href: "#book-now-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Button, { variant: "filled", radius: "sm", fullWidth: !0, children: "Book a service" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 199,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 198,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 197,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.ActionIcon, { size: "lg", variant: "light", color: "pink", "aria-label": "Favourite", onClick: addToWishlist2, children: wishlistExists > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react23.IconHeartFilled, { style: { width: "70%", height: "70%" }, stroke: 1.5 }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 203,
            columnNumber: 58
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react27.IconHeart, { style: { width: "70%", height: "70%" }, stroke: 1.5 }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 203,
            columnNumber: 133
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 202,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 196,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 184,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 183,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Divider, {}, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 209,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Box, { p: "md", children: activeGroupData ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { c: "dimmed", children: [
            activeGroupData.title,
            " starting from ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(currency_transformer_default, { value: activeGroupData == null ? void 0 : activeGroupData.cost }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 213,
              columnNumber: 92
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 213,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Space, { h: "xs" }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 214,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { c: "dimmed", children: [
            "Other services starting from ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(currency_transformer_default, { value: profile == null ? void 0 : profile.baseCharge }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 215,
              columnNumber: 83
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 215,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 212,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { c: "dimmed", children: [
          "Starting from ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(currency_transformer_default, { value: profile == null ? void 0 : profile.baseCharge }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 217,
            columnNumber: 46
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 217,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 210,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 208,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 179,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 178,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 177,
      columnNumber: 12
    }, this);
  },
  Pricing: ({ services, preSelectedGroupId, preSelectedGroup }) => {
    let data = (0, import_react68.useLoaderData)(), [activeService, setActive] = (0, import_react69.useState)(), [flatList, setFlatList] = (0, import_react69.useState)([]), [showGroupBookDialog, setShowGroupBookDialog] = (0, import_react69.useState)(!1), navigate = (0, import_react68.useNavigate)();
    (0, import_react69.useEffect)(() => {
      let list2 = services.reduce((acc, x) => acc.concat(x.services), []);
      if (setFlatList(list2), preSelectedGroupId) {
        let grpData = list2.find((x) => x.groupId === preSelectedGroupId);
        setActive(grpData), preSelectedGroup(grpData);
      } else
        setActive(list2[0]);
    }, [services, preSelectedGroupId]);
    function setActiveService(id) {
      let item = flatList.find((x) => x.vendorServiceGroupId === id);
      item && setActive(item);
    }
    function showComboOfferDialog() {
      var _a;
      if (!activeService)
        return;
      (((_a = services.find((x) => x.services.find((y) => y.groupId === activeService.groupId))) == null ? void 0 : _a.services.length) || 0) >= common_data_default.MAKE_YOUR_PACKAGE_MIN_SERVICE_COUNT ? setShowGroupBookDialog(!0) : navigate(routes_data_default.get("CartItem", { id: activeService.vendorServiceGroupId }));
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid, { gutter: "xl", id: "book-now-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Card, { withBorder: !0, style: { borderColor: "#1D4ED7" }, p: "10px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { order: 3, mb: (0, import_core48.rem)(20), children: "Save your money now." }, void 0, !1, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 266,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { children: "Secure creative professionals instantly with our 'Book Now, Pay Later' option. Pay 50% within 3 days of booking, and the rest after the completion of service." }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 268,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { children: "Choose easy EMI" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 271,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { children: [
              "Pay 100% upfront for a ",
              common_data_default.FULL_PAYMENT_DISCOUNT,
              "% discount. Flexible, hassle-free, and tailored to your financial preferences."
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 274,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Image, { src: "/assets/savings.png", width: "50%" }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 277,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 267,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 265,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: { base: 12, md: 9 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Group, { align: "end", justify: "space-between", py: (0, import_core48.rem)(40), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { order: 3, children: [
              "Book now",
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 283,
                columnNumber: 46
              }, this),
              "and ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Mark, { color: "lime", children: "Pay later" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 283,
                columnNumber: 56
              }, this),
              "."
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 283,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Box, { ta: "right", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { fw: 500, children: "Having trouble?" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 285,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("a", { href: `mailto:${SUPPORT_CENTER.EMAIL}`, target: "_BLANK", children: "Contact us" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 286,
                columnNumber: 31
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 286,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 284,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 282,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid, { gutter: "xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { hiddenFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
              import_core48.Select,
              {
                label: "Select a service",
                placeholder: "Select",
                clearable: !1,
                allowDeselect: !1,
                value: activeService == null ? void 0 : activeService.vendorServiceGroupId,
                onChange: (x) => setActiveService(x),
                data: services.map((group) => ({ group: group.name, items: group.services.map((x) => ({ value: x.vendorServiceGroupId, label: x.title })) }))
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 291,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 290,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Card, { shadow: "lg", bg: "#F2F5FB", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Stack, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Group, { justify: "space-between", align: "center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { order: 5, children: activeService == null ? void 0 : activeService.title }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 303,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Badge, { variant: "light", color: "teal", children: "Most Booked" }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 304,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 302,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Divider, { size: "md", w: "10%" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 306,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Box, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { c: "dimmed", children: "Starts from:" }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 308,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Group, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { order: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(currency_transformer_default, { value: activeService == null ? void 0 : activeService.cost }, void 0, !1, {
                    fileName: "app/routes/profile.$user.tsx",
                    lineNumber: 310,
                    columnNumber: 58
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/profile.$user.tsx",
                    lineNumber: 310,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { fs: "italic", children: [
                    "or Pay ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("b", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(currency_transformer_default, { value: ((activeService == null ? void 0 : activeService.cost) || 0) * common_data_default.PAY_LATER_SLAB_PERCENTAGE / 100 }, void 0, !1, {
                      fileName: "app/routes/profile.$user.tsx",
                      lineNumber: 311,
                      columnNumber: 71
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/profile.$user.tsx",
                      lineNumber: 311,
                      columnNumber: 68
                    }, this),
                    " now & rest later"
                  ] }, void 0, !0, {
                    fileName: "app/routes/profile.$user.tsx",
                    lineNumber: 311,
                    columnNumber: 41
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 309,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 307,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { fw: 500, children: "Services Included:" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 314,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                import_core48.List,
                {
                  spacing: "xs",
                  size: "sm",
                  center: !0,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react24.IconCircleCheck, { size: 16 }, void 0, !1, {
                    fileName: "app/routes/profile.$user.tsx",
                    lineNumber: 321,
                    columnNumber: 21
                  }, this),
                  children: activeService == null ? void 0 : activeService.included.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.List.Item, { children: item.title }, item.id, !1, {
                    fileName: "app/routes/profile.$user.tsx",
                    lineNumber: 324,
                    columnNumber: 76
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 316,
                  columnNumber: 33
                },
                this
              ),
              activeService != null && activeService.addons.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Stack, { gap: "xs", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { fw: 500, children: "Available Customization" }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 331,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.List, { children: activeService == null ? void 0 : activeService.addons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.List.Item, { children: item.title }, item.id, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 333,
                  columnNumber: 78
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 332,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 330,
                columnNumber: 50
              }, this) : "",
              (activeService == null ? void 0 : activeService.vendorServiceGroupId) && /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("a", { href: `tel:${SUPPORT_CENTER.PHONE}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(VendorCallNowButton_default, { service: activeService == null ? void 0 : activeService.title, profileId: data.username, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Button, { variant: "outline", w: "100%", children: "Call Now" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 337,
                columnNumber: 191
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 337,
                columnNumber: 113
              }, this) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 337,
                columnNumber: 73
              }, this),
              (activeService == null ? void 0 : activeService.vendorServiceGroupId) && /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Button, { onClick: showComboOfferDialog, variant: "filled", w: "100%", children: "Book Now" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 338,
                columnNumber: 73
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 301,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 300,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 299,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Grid.Col, { span: { base: 12, md: 6 }, visibleFrom: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Stack, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { order: 5, children: "Browse Services" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 345,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Divider, { size: "md", w: "10%" }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 346,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Accordion, { unstyled: !0, defaultValue: String(services.findIndex((x) => !!x.services.find((i) => i.groupId === (activeService == null ? void 0 : activeService.groupId))) || 0), children: services.map((group, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Accordion.Item, { value: "" + index, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Accordion.Control, { style: {
                  width: "100%",
                  background: "none",
                  border: "0",
                  textAlign: "left",
                  padding: "10px 20px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  direction: "rtl"
                }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Text, { c: "blue", children: group.name }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 359,
                  columnNumber: 26
                }, this) }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 349,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Accordion.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Accordion, { classNames: accordian_module_default, value: activeService == null ? void 0 : activeService.vendorServiceGroupId, disableChevronRotation: !0, chevron: null, onChange: (x) => setActiveService(x), children: group.services.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Accordion.Item, { value: item.vendorServiceGroupId, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Accordion.Control, { icon: (activeService == null ? void 0 : activeService.vendorServiceGroupId) === item.vendorServiceGroupId ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react23.IconArrowLeft, {}, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 363,
                  columnNumber: 146
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_icons_react23.IconCircle, { size: 12 }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 363,
                  columnNumber: 166
                }, this), color: "inherit", children: item.title }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 363,
                  columnNumber: 53
                }, this) }, item.vendorServiceGroupId, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 362,
                  columnNumber: 79
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 361,
                  columnNumber: 45
                }, this) }, void 0, !1, {
                  fileName: "app/routes/profile.$user.tsx",
                  lineNumber: 360,
                  columnNumber: 41
                }, this)
              ] }, "" + index, !0, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 348,
                columnNumber: 69
              }, this)) }, void 0, !1, {
                fileName: "app/routes/profile.$user.tsx",
                lineNumber: 347,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 344,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 343,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/profile.$user.tsx",
              lineNumber: 342,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.$user.tsx",
            lineNumber: 289,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 281,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 263,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(ProfileLayout.BookGroupSuggestion, { show: showGroupBookDialog, onClose: () => setShowGroupBookDialog(!1), vendorServiceGroupId: (activeService == null ? void 0 : activeService.vendorServiceGroupId) || "" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 376,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 262,
      columnNumber: 12
    }, this);
  },
  BookGroupSuggestion: (props) => {
    let dialogTitle = /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { order: 5, children: "Forgot to add something?" }, void 0, !1, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 380,
      columnNumber: 25
    }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Modal, { styles: { body: { background: "rgba(198, 216, 108, 0.25)" } }, withCloseButton: !1, centered: !0, opened: props.show, onClose: () => props.onClose(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Image, { src: "/assets/ads/combo-offer.png" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 382,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Space, { h: "lg" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 383,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Title, { ta: "center", order: 4, children: [
        "Add ",
        common_data_default.MAKE_YOUR_PACKAGE_MIN_SERVICE_COUNT - 1,
        " more services & Save upto 30%"
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 384,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Space, { h: "lg" }, void 0, !1, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 385,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react68.Link, { to: routes_data_default.get("MakeYourPackage", { vendorGroupId: props.vendorServiceGroupId }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Button, { fullWidth: !0, color: "teal", children: "Add more services" }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 387,
          columnNumber: 105
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 387,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react68.Link, { to: routes_data_default.get("CartItem", { id: props.vendorServiceGroupId }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_core48.Button, { fullWidth: !0, variant: "light", color: "gray", children: "Skip this offer" }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 388,
          columnNumber: 87
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.$user.tsx",
          lineNumber: 388,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.$user.tsx",
        lineNumber: 386,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.$user.tsx",
      lineNumber: 381,
      columnNumber: 12
    }, this);
  }
};
function ErrorBoundary5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { style: { textAlign: "center" }, children: "Oops, Something went wrong! Please reload the page." }, void 0, !1, {
    fileName: "app/routes/profile.$user.tsx",
    lineNumber: 395,
    columnNumber: 10
  }, this);
}
var profile_user_default = ProfileLayout.Index;

// app/routes/_auth.vendor.tsx
var auth_vendor_exports = {};
__export(auth_vendor_exports, {
  default: () => auth_vendor_default,
  loader: () => loader33
});
var import_react70 = require("@remix-run/react");
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
async function loader33(args) {
  let userId = (await getSession(
    args.request.headers.get("Cookie")
  )).get(USER_SESSION_KEY);
  if (!userId)
    return !1;
  let user = await db.user.findFirstOrThrow({
    select: {
      username: !0
    },
    where: {
      id: userId
    }
  });
  if (!await db.vendor.findFirstOrThrow({
    where: {
      mobileNumber: user.username
    },
    select: {
      id: !0
    }
  }))
    throw new Response("Page not found", {
      status: 404
    });
  return !0;
}
function auth_vendor_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react70.Outlet, {}, void 0, !1, {
    fileName: "app/routes/_auth.vendor.tsx",
    lineNumber: 46,
    columnNumber: 12
  }, this);
}

// app/routes/order.failed.tsx
var order_failed_exports = {};
__export(order_failed_exports, {
  default: () => order_failed_default,
  loader: () => loader34
});
var import_core49 = require("@mantine/core"), import_node27 = require("@remix-run/node"), import_react71 = require("@remix-run/react"), import_icons_react29 = require("@tabler/icons-react"), import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
async function loader34({
  params,
  request
}) {
  let orderId = new URL(request.url).searchParams.get("id");
  return orderId ? { id: orderId } : ((0, import_node27.redirect)("/404"), null);
}
var OrderSuccess2 = {
  Index: () => {
    let data = (0, import_react71.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Grid, { justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Grid.Col, { span: { base: 12, md: 4, lg: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Stack, { gap: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Card, { withBorder: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Stack, { justify: "center", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Text, { size: "sm", c: "dimmed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_icons_react29.IconCircleXFilled, { style: { fontSize: "50px" } }, void 0, !1, {
        fileName: "app/routes/order.failed.tsx",
        lineNumber: 36,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/routes/order.failed.tsx",
        lineNumber: 35,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Title, { order: 2, children: "Payment unsuccessful" }, void 0, !1, {
          fileName: "app/routes/order.failed.tsx",
          lineNumber: 39,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Text, { children: "If any amount debited from your account will be refunded back in 3-5 days." }, void 0, !1, {
          fileName: "app/routes/order.failed.tsx",
          lineNumber: 40,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order.failed.tsx",
        lineNumber: 38,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Space, { h: "sm" }, void 0, !1, {
        fileName: "app/routes/order.failed.tsx",
        lineNumber: 42,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react71.Link, { to: "/order/payment?id=" + (data == null ? void 0 : data.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_core49.Button, { variant: "filled", radius: "xl", children: "Retry Payment" }, void 0, !1, {
        fileName: "app/routes/order.failed.tsx",
        lineNumber: 44,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/routes/order.failed.tsx",
        lineNumber: 43,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/order.failed.tsx",
      lineNumber: 34,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/routes/order.failed.tsx",
      lineNumber: 33,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/order.failed.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/order.failed.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/order.failed.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/order.failed.tsx",
      lineNumber: 29,
      columnNumber: 16
    }, this);
  }
}, order_failed_default = OrderSuccess2.Index;

// app/routes/_api.search.tsx
var api_search_exports = {};
__export(api_search_exports, {
  loader: () => loader35
});
var import_node28 = require("@remix-run/node");
var import_fuse = __toESM(require("fuse.js")), fuseOptions = {
  useExtendedSearch: !0,
  keys: [
    "name",
    "vendorType.name",
    "serviceGroupType.name",
    "serviceGroupItem.service.name"
  ]
};
function loader35(args) {
  var _a, _b;
  let query = (_b = (_a = new URL(args.request.url).searchParams.get("q")) == null ? void 0 : _a.toLowerCase()) == null ? void 0 : _b.trim();
  if (!(query != null && query.length))
    return (0, import_node28.defer)({ results: [] });
  let groups = new Promise(function(resolve, reject) {
    db.serviceGroup.findMany({
      where: {
        isActive: !0,
        vendorType: {
          isActive: !0
        }
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
    }, (e) => {
      reject("Invalid search");
    });
  }), vendors = new Promise(function(resolve, reject) {
    db.vendor.findMany({
      where: {
        isActive: !0,
        vendorType: {
          isActive: !0
        },
        username: {
          equals: query
        }
      },
      select: {
        username: !0,
        vendorType: {
          select: {
            name: !0,
            keyName: !0
          }
        }
      }
    }).then((r) => {
      let fuse = r.map((x) => ({ item: { id: x.username, name: x.username, vendorType: x.vendorType, serviceGroupItem: [], serviceGroupType: null } }));
      resolve(fuse);
    }, (e) => {
      reject("Invalid search");
    });
  });
  return (0, import_node28.defer)({
    results: groups,
    vendors
  });
}

// app/routes/blog._index.tsx
var blog_index_exports = {};
__export(blog_index_exports, {
  default: () => blog_index_default,
  loader: () => loader36,
  meta: () => meta21
});
var import_core50 = require("@mantine/core"), import_react72 = require("@remix-run/react");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), meta21 = page_meta_default({
  title: "Blog"
});
async function loader36() {
  return await blog_service_default.getLatestPosts();
}
function blog_index_default() {
  let data = (0, import_react72.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Container, { size: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Title, { order: 3, children: "Blog" }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Space, { h: "xl" }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Grid, { gutter: "xl", children: data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Grid.Col, { span: { base: 12, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Card, { title: item.title, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react72.Link, { to: item.name + "/" + item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        import_core50.Image,
        {
          fallbackSrc: "https://placehold.co/600x400?text=Placeholder",
          src: item.thumbnail.link,
          height: 200,
          alt: "thumb"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 28,
          columnNumber: 29
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 27,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Space, { h: "xl" }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Stack, { justify: "center", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Title, { ta: "center", order: 3, fw: "normal", children: item.title }, void 0, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_core50.Text, { c: "dimmed", size: "sm", children: DateFormatter.short(item.date) }, void 0, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react72.Link, { to: item.name + "/" + item.id, children: "Read More" }, void 0, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 24,
      columnNumber: 31
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this);
}

// app/routes/cart._index.tsx
var cart_index_exports = {};
__export(cart_index_exports, {
  action: () => action20,
  default: () => cart_index_default,
  loader: () => loader37,
  meta: () => meta22
});
var import_core52 = require("@mantine/core"), import_node29 = require("@remix-run/node"), import_react75 = require("@remix-run/react"), import_icons_react31 = require("@tabler/icons-react"), import_icons_react32 = require("@tabler/icons-react"), import_react76 = require("react"), import_react_redux5 = require("react-redux");

// app/components/ConfigureBooking.tsx
var import_core51 = require("@mantine/core"), import_react73 = require("@remix-run/react"), import_icons_react30 = require("@tabler/icons-react"), import_react74 = require("react"), import_react_hook_form2 = require("react-hook-form");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function ConfigureBooking(service) {
  let { control, getValues, handleSubmit, setValue, register } = (0, import_react_hook_form2.useForm)(), [serviceChecklist, setServiceChecklist] = (0, import_react74.useState)([!1, !1, !1]), checkoutForm = (0, import_react74.useRef)(null), checkoutFormInput = (0, import_react74.useRef)(null), [minDuration, setMinDuration] = (0, import_react74.useState)(1);
  (0, import_react74.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Card, { withBorder: !0, title: "Configure Services", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react73.Form, { method: "post", onSubmit: handleSubmit(proceedToCheckout), action: "/cart/add", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("input", { type: "hidden", ...register("vendorServiceGroupId"), value: service.vendorServiceGroupId }, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Grid, { gutter: 30, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Grid.Col, { span: { base: 12, md: 6 }, children: [
          service.options.map((item, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("input", { type: "hidden", ...register(`services.${key}.id`), value: item.id }, item.id, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 70,
            columnNumber: 57
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("input", { type: "hidden", ...register("date") }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 71,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Title, { order: 5, children: "Select date" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 72,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Grid.Col, { span: { base: 12, md: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Title, { order: 5, children: "Choose time slot" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", {}, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 77,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Title, { order: 5, children: "Duration of the service" }, void 0, !1, {
            fileName: "app/components/ConfigureBooking.tsx",
            lineNumber: 81,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
            import_core51.Select,
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
              lineNumber: 82,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Divider, {}, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Grid, { justify: "end", align: "middle", gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Grid.Col, { children: serviceChecklist.includes(!1) ? /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Alert, { title: "Please complete the above step to proceed.", c: "yellow", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_icons_react30.IconInfoCircle, {}, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 101,
          columnNumber: 132
        }, this) }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 101,
          columnNumber: 57
        }, this) : "" }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react73.Link, { to: routes_data_default.get("Cart"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Button, { variant: "outline", children: "View Cart" }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 104,
          columnNumber: 51
        }, this) }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 104,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_core51.Button, { disabled: serviceChecklist.includes(!1), variant: "filled", type: "submit", children: "Add to Cart" }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 107,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/ConfigureBooking.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ConfigureBooking.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react73.Form, { ref: checkoutForm, method: "post", action: "/cart/add", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("input", { type: "hidden", name: "redirectUrl", value: window.location.href }, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("input", { name: "cart", ref: checkoutFormInput }, void 0, !1, {
        fileName: "app/components/ConfigureBooking.tsx",
        lineNumber: 114,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ConfigureBooking.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ConfigureBooking.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ConfigureBooking.tsx",
    lineNumber: 65,
    columnNumber: 12
  }, this);
}
var ConfigureBooking_default = ConfigureBooking;

// app/routes/cart._index.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), meta22 = page_meta_default({
  title: "Cart"
});
async function action20({ request }) {
  var _a;
  let cookieHeader = request.headers.get("Cookie"), data = await userCartCookie.parse(cookieHeader), deleteId = (_a = (await request.formData()).get("delete")) == null ? void 0 : _a.toString();
  return deleteId && (data = data.filter((x) => x.vendorServiceGroupId !== deleteId)), (0, import_node29.redirect)(routes_data_default.get("Cart"), {
    headers: {
      "Set-Cookie": await userCartCookie.serialize(data)
    }
  });
}
async function loader37({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userCartCookie.parse(cookieHeader);
  return (0, import_node29.defer)({
    cartInput: JSON.stringify(cookie),
    data: CartService.summary(cookie)
  });
}
var Cart = {
  Index: () => {
    let user = (0, import_react_redux5.useSelector)(getUser), data = (0, import_react75.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Container, { size: "xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Title, { order: 3, children: "My Cart" }, void 0, !1, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Space, { h: "md" }, void 0, !1, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid, { gutter: 30, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid.Col, { span: { base: 12, md: 4, lg: 8 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react76.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 62,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react75.Await, { resolve: data.data, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Cart.Preview, { cart: response }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 64,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 63,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 62,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid.Col, { span: { base: 12, md: 3, lg: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react76.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Skeleton_default, {}, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 69,
          columnNumber: 41
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react75.Await, { resolve: data.data, children: (response) => response != null && response.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Stack, { gap: "md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Cart.Summary, { data: response }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 73,
            columnNumber: 37
          }, this),
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react75.Form, { method: "post", action: "/order/checkout", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("input", { type: "hidden", name: "source", value: "cart" }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 75,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("input", { type: "hidden", name: "cart", value: data.cartInput }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 76,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Button, { variant: "filled", type: "submit", fullWidth: !0, children: "Place order" }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 77,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 74,
            columnNumber: 45
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(UserLogin_default, { title: "Login to continue", redirectUrl: routes_data_default.get("Cart") }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 77,
            columnNumber: 120
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 72,
          columnNumber: 33
        }, this) : "" }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 70,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 69,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart._index.tsx",
      lineNumber: 57,
      columnNumber: 16
    }, this);
  },
  Preview: ({ cart }) => {
    let [editService, setEditService] = (0, import_react76.useState)();
    function openEdtServiceDialog(id, services) {
      setEditService({ id, services });
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Stack, { children: [
      cart.map((data, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid, { gutter: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid.Col, { span: { base: 12, md: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Card, { withBorder: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
            import_core52.Image,
            {
              style: { width: "100%", height: "100px", objectFit: "cover" },
              src: data.coverImg || ""
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 98,
              columnNumber: 29
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 97,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Space, { h: "sm" }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 103,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Group, { justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Group, { gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Avatar, { src: data.vendorImg }, void 0, !1, {
                fileName: "app/routes/cart._index.tsx",
                lineNumber: 106,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react75.Link, { to: `/profile/${data.vendorId}`, children: data.vendorName }, void 0, !1, {
                fileName: "app/routes/cart._index.tsx",
                lineNumber: 107,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 105,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Badge, { size: "xs", children: data.vendorType }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 109,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 104,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 111,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Text, { size: "sm", fw: 500, children: data.name }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 112,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Space, { h: "sm" }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 113,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Group, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Text, { size: "sm", fw: 500, children: DateFormatter.short(data.date) }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 115,
              columnNumber: 29
            }, this),
            " -",
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Text, { size: "sm", fw: 500, children: [
              "From ",
              data.timeHour,
              " to ",
              data.timeHour + data.duration,
              " (",
              data.duration,
              " hours)"
            ] }, void 0, !0, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 116,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 114,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Space, { h: "md" }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 118,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Divider, {}, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 119,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Space, { h: "sm" }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 120,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Flex, { justify: "end", gap: "xs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react75.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.ActionIcon, { type: "submit", name: "delete", value: data.vendorServiceGroupId, variant: "subtle", color: "red", size: "lg", "aria-label": "remove", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_icons_react32.IconTrash, { style: { width: "70%", height: "70%" }, stroke: 1.5 }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 125,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 124,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 123,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react75.Link, { to: routes_data_default.get("CartAddEdit", { venderServiceGroupId: data.vendorServiceGroupId }) + "?source=cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Button, { leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_icons_react31.IconEdit, { style: { width: "70%", height: "70%" }, stroke: 1.5 }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 129,
              columnNumber: 54
            }, this), variant: "subtle", children: "Modify" }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 129,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 128,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 122,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 96,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid.Col, { span: { base: 12, md: 7 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Text, { size: "sm", fw: 500, children: "Personal Note:" }, void 0, !1, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 138,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
            import_core52.Textarea,
            {
              placeholder: "Write down your requirements here...",
              autosize: !0,
              minRows: 4,
              maxRows: 6
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 139,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 137,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this)
      ] }, data.vendorServiceGroupId + i, !0, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 94,
        columnNumber: 36
      }, this)),
      !(cart != null && cart.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { children: "Sorry, Your cart is empty." }, void 0, !1, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 148,
        columnNumber: 31
      }, this),
      (editService == null ? void 0 : editService.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Cart.Edit, { serviceId: editService.id, services: editService.services, onClose: () => setEditService(void 0) }, void 0, !1, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 150,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart._index.tsx",
      lineNumber: 93,
      columnNumber: 16
    }, this);
  },
  Edit: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Modal, { opened: !0, w: "1000px", onClose: () => params.onClose(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ConfigureBooking_default, { minHour: 1, vendorServiceGroupId: params.serviceId, options: params.services }, void 0, !1, {
    fileName: "app/routes/cart._index.tsx",
    lineNumber: 155,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart._index.tsx",
    lineNumber: 154,
    columnNumber: 16
  }, this),
  Summary: ({ data }) => {
    let [orderSummary2, setOrderSummary] = (0, import_react76.useState)();
    return (0, import_react76.useEffect)(() => {
      let total = data.reduce((arr, i) => arr.concat(i.services), []).reduce((sum, item) => sum + item.cost, 0), tax = 3 * total / 100;
      setOrderSummary({
        total,
        tax,
        gst: 3,
        final: total + tax
      });
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { style: { border: "1px solid #e1e1e1", padding: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Title, { order: 4, children: "Order Summary" }, void 0, !1, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 174,
        columnNumber: 13
      }, this),
      data.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("b", { children: group.name }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 176,
          columnNumber: 17
        }, this),
        group.services.map(
          (service) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid, { gutter: 20, justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Text, { size: "sm", fw: 500, children: service.name }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 178,
              columnNumber: 46
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 178,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Text, { size: "sm", children: [
              service.cost,
              " INR"
            ] }, void 0, !0, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 179,
              columnNumber: 46
            }, this) }, void 0, !1, {
              fileName: "app/routes/cart._index.tsx",
              lineNumber: 179,
              columnNumber: 21
            }, this)
          ] }, service.id, !0, {
            fileName: "app/routes/cart._index.tsx",
            lineNumber: 177,
            columnNumber: 48
          }, this)
        )
      ] }, group.vendorServiceGroupId, !0, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 175,
        columnNumber: 32
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Divider, {}, void 0, !1, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid, { gutter: 20, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Text, { size: "sm", fw: 500, children: "Total" }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 185,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 185,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Grid.Col, { span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_core52.Text, { size: "sm", fw: 500, children: [
          orderSummary2 == null ? void 0 : orderSummary2.total,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 186,
          columnNumber: 42
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart._index.tsx",
          lineNumber: 186,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart._index.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart._index.tsx",
      lineNumber: 173,
      columnNumber: 16
    }, this);
  }
}, cart_index_default = Cart.Index;

// app/routes/_api.login.tsx
var api_login_exports = {};
__export(api_login_exports, {
  action: () => action21
});
var import_node30 = require("@remix-run/node");

// app/service/sms.service.ts
var API_KEY2 = "0472a73f-da12-11ee-8cbb-0200cd936042", SENDER_ID2 = "CELEBR", END_POINT2 = "https://2factor.in/API/R1/";
async function sendSMS(input) {
  let urlencoded = new URLSearchParams();
  urlencoded.append("module", "TRANS_SMS"), urlencoded.append("apikey", API_KEY2), urlencoded.append("to", "" + input.to), urlencoded.append("from", SENDER_ID2), urlencoded.append("msg", input.message), await fetch(END_POINT2, {
    method: "POST",
    body: urlencoded
    // redirect: 'follow'
  });
}
var SmsService = {
  sendSMS
}, sms_service_default = SmsService;

// app/utils/otp.generator.ts
function generateOtp() {
  return Math.floor(1e3 + Math.random() * 9e3);
}

// app/routes/_api.login.tsx
var bcrypt2 = require("bcryptjs");
async function action21({
  request
}) {
  let username = (await request.formData()).get("phone"), data, success = !1;
  try {
    let existingUser = await db.user.findFirst({
      where: {
        username
      }
    });
    existingUser != null && existingUser.id || (data = await user_service_default.Create(username));
    let otp = generateOtp(), otpHash = await bcrypt2.hash("" + otp, 10);
    await db.userOtp.deleteMany({
      where: {
        username
      }
    }), await db.userOtp.create({
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
  return (0, import_node30.json)({ success, data }, 200);
}

// app/routes/redirect.tsx
var redirect_exports = {};
__export(redirect_exports, {
  loader: () => loader38
});
var import_node31 = require("@remix-run/node");
function loader38(args) {
  var _a;
  let redirectUrl = (_a = new URL(args.request.url).searchParams.get("url")) == null ? void 0 : _a.toString();
  if (!redirectUrl)
    throw new Response("Page Not Found", {
      status: 404
    });
  return (0, import_node31.redirect)(redirectUrl);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  loader: () => loader39,
  meta: () => meta23
});
var import_node32 = require("@remix-run/node"), import_react78 = require("react"), import_react79 = require("@remix-run/react");

// app/service/homepage.service.ts
var import_client19 = require("@prisma/client");

// app/utils/generateJumbotronUrl.ts
function generateJumbotronUrl(data) {
  let url = "";
  return data.serviceGroupId && data.vendorTypeId ? url = routes_data_default.get("ServiceGroup", { id: data.vendorTypeId, subId: data.serviceGroupId }) : data.vendorTypeId ? url = routes_data_default.get("Services", { id: data.vendorTypeId }) : data.profileId && (url = routes_data_default.get("VendorProfile", { id: data.profileId })), url;
}

// app/service/homepage.service.ts
function getCategoryCollection() {
  return new Promise(function(resolve, reject) {
    db.vendorType.findMany({
      orderBy: {
        name: "asc"
      },
      where: {
        isActive: !0
      },
      select: {
        id: !0,
        name: !0,
        description: !0,
        keyName: !0,
        serviceGroup: {
          where: {
            isActive: !0
          },
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
            path: routes_data_default.get("CollectionsByVendor", { id: ((_e = item.serviceGroupType) == null ? void 0 : _e.keyName) || "", vendorType: category.keyName }),
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
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function topVendorsByCategory() {
  return new Promise(async function(resolve) {
    let r = await db.vendorType.findMany({
      take: 4,
      where: {
        isActive: !0
      },
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
  return new Promise(function(resolve, reject) {
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
        isActive: !0,
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
        image: x.imageName ? PATH.THUMB_URL + x.imageName : "",
        cost: 0
      })));
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function getCollections() {
  return new Promise(function(resolve, reject) {
    db.serviceGroupType.findMany({
      take: 4,
      select: {
        keyName: !0,
        name: !0,
        ServiceGroup: {
          take: 10,
          where: {
            isActive: !0
          },
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
          image: PATH.THUMB_URL + ((_a = x.ServiceGroup.find((i) => i.imageName)) == null ? void 0 : _a.imageName),
          title: x.name,
          label: x.ServiceGroup.map((g) => g.name).join(", "),
          path: routes_data_default.get("Collections", { id: x.keyName }),
          cost: 0
        };
      }));
    }).catch((e) => {
      reject("Connection failed");
    });
  });
}
function getRandom8Vendors() {
  return db.$queryRaw`SELECT profileImageName from vendors where isActive=true  ORDER BY RAND() LIMIT 8 `;
}
function BannerSet() {
  return new Promise(async function(resolve) {
    let finalList = (await db.websiteBanner.findMany({
      where: {
        targetPage: {
          in: [import_client19.BannerLocation.HOME_1, import_client19.BannerLocation.HOME_2, import_client19.BannerLocation.HOME_3]
        }
      },
      select: {
        targetPage: !0,
        jumbotron: {
          select: {
            title: !0,
            description: !0,
            vendorId: !0,
            vendorTypeId: !0,
            serviceGroupId: !0,
            serviceId: !0,
            imageName: !0,
            vendorType: {
              select: {
                keyName: !0
              }
            },
            group: {
              select: {
                id: !0,
                name: !0,
                imageName: !0,
                vendorType: {
                  select: {
                    keyName: !0
                  }
                },
                VendorServiceGroup: {
                  take: 1,
                  orderBy: {
                    cost: "asc"
                  },
                  select: {
                    cost: !0
                  },
                  where: {
                    isActive: !0,
                    vendor: {
                      isActive: !0
                    }
                  }
                }
              }
            }
          }
        }
      }
    })).map((item) => {
      var _a, _b, _c, _d, _e;
      let x = item.jumbotron, url = generateJumbotronUrl({
        vendorTypeId: ((_a = x.vendorType) == null ? void 0 : _a.keyName) || ((_b = x.group) == null ? void 0 : _b.vendorType.keyName),
        serviceGroupId: x.serviceGroupId,
        serviceId: x.serviceId
      });
      return {
        title: x.title,
        description: x.description,
        img: PATH.THUMB_URL + (x.imageName || ((_c = x.group) == null ? void 0 : _c.imageName)),
        url,
        bannerLocation: item.targetPage,
        cost: (_e = (_d = item.jumbotron.group) == null ? void 0 : _d.VendorServiceGroup[0]) == null ? void 0 : _e.cost
      };
    });
    resolve(finalList);
  });
}

// app/routes/_index.tsx
var import_pure_react_carousel3 = require("pure-react-carousel"), import_react_simple_typewriter = require("react-simple-typewriter"), import_core54 = require("@mantine/core"), import_icons_react34 = require("@tabler/icons-react");
var import_icons_react35 = require("@tabler/icons-react"), import_classnames = __toESM(require("classnames")), import_hooks8 = require("@mantine/hooks");

// app/components/SupportCenterAffix.tsx
var import_core53 = require("@mantine/core"), import_hooks7 = require("@mantine/hooks"), import_icons_react33 = require("@tabler/icons-react"), import_react77 = require("react");
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
function SupportCenterAffix() {
  let [scroll2] = (0, import_hooks7.useWindowScroll)(), [showCard, setShowCard] = (0, import_react77.useState)(!0), btnText = (0, import_hooks7.useMediaQuery)("(min-width: 56.25em)") ? `Call us at ${SUPPORT_CENTER.PHONE}` : "Call us now";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_core53.Affix, { position: { bottom: 100, right: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_core53.Transition, { transition: "slide-up", mounted: showCard && scroll2.y > 0, children: (transitionStyles) => /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_core53.Card, { style: { ...transitionStyles, overflow: "unset" }, bg: "#fffbed", radius: "lg", withBorder: !0, shadow: "xl", pos: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_core53.CloseButton, { size: "sm", onClick: () => setShowCard(!1), pos: "absolute", right: "12px", top: "12px", bg: "#e1e1e1" }, void 0, !1, {
      fileName: "app/components/SupportCenterAffix.tsx",
      lineNumber: 19,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_core53.Title, { order: 5, children: "Need any assistance?\xA0\xA0\xA0\xA0\xA0\xA0" }, void 0, !1, {
      fileName: "app/components/SupportCenterAffix.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_core53.Space, { h: "lg" }, void 0, !1, {
      fileName: "app/components/SupportCenterAffix.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_core53.Group, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("a", { href: "tel:" + SUPPORT_CENTER.PHONE, children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_core53.Button, { radius: "xl", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_icons_react33.IconPhoneCall, {}, void 0, !1, {
      fileName: "app/components/SupportCenterAffix.tsx",
      lineNumber: 27,
      columnNumber: 64
    }, this), variant: "gradient", gradient: { from: "blue", to: "violet", deg: 122 }, children: btnText }, void 0, !1, {
      fileName: "app/components/SupportCenterAffix.tsx",
      lineNumber: 27,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/components/SupportCenterAffix.tsx",
      lineNumber: 26,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/SupportCenterAffix.tsx",
      lineNumber: 25,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SupportCenterAffix.tsx",
    lineNumber: 18,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/components/SupportCenterAffix.tsx",
    lineNumber: 16,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/SupportCenterAffix.tsx",
    lineNumber: 15,
    columnNumber: 14
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime");
async function loader39({ params }) {
  let id = params.user, quickLinks = new Promise(function(resolve, reject) {
    db.serviceGroup.findMany({
      take: 4,
      where: {
        isActive: !0
      },
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
        return { id: x.id, title: x.name, image: x.imageName ? PATH.THUMB_URL + x.imageName : "", label: x.vendorType.name, path: `/services/${x.vendorType.keyName}?category=${x.id}`, cost: (_c = (_b = (_a = x.serviceGroupItem[0]) == null ? void 0 : _a.service) == null ? void 0 : _b.vendorService[0]) == null ? void 0 : _c.cost };
      }));
    }, (e) => {
      reject("Connection failed");
    });
  }), bannerAds = BannerSet(), categories = getCategoryCollection(), popularServices = getPopularServices(), topVendors = topVendorsByCategory(), collections = getCollections(), random8Vendors = await getRandom8Vendors();
  return (0, import_node32.defer)({ categories, quickLinks, popularServices, collections, topVendors, random8Vendors, bannerAds });
}
var meta23 = () => [
  { title: "Celebria Collective" },
  { name: "description", content: "Book a service with us!" }
], FALLBACK_IMG = "https://static.miraheze.org/widdershinswiki/thumb/4/47/Placeholder.png/800px-Placeholder.png", Home = {
  Index: () => {
    let data = (0, import_react79.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_jsx_dev_runtime58.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Container, { size: "xl", p: 0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Home.Jumbotron, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "container no-spacer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Home.Services, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 128,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Container, { size: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Home.KeyFeatures, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Image, { src: "/assets/overlay-divider.png", width: "100%", h: 90, opacity: 0.3 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Space, { h: "xl" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 155,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Home.MainBannerAds, {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 156,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Image, { src: "/assets/overlay-divider.png", width: "100%", h: 90, opacity: 0.3 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Home.PopularServices, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Home.Collections, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 164,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Card, { radius: "md", withBorder: !0, className: "card-style-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { gutter: { base: 20, md: 40 }, align: "center", justify: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Stack, { align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { className: "_text-center", order: 3, children: [
              "We are here to help",
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 172,
                columnNumber: 82
              }, this),
              "you build your brand"
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 172,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Flex, { align: "center", gap: "md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { fw: 500, children: "Check out" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 174,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Link, { to: "/collections/commercial", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Button, { variant: "outline", radius: "xl", children: "Commercial Services" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 175,
                columnNumber: 58
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 175,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 173,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 171,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 12, md: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "card-style-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Stack, { gap: "md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Flex, { align: "center", gap: "sm", justify: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, children: "100+" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 183,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { fw: "bold", c: "dimmed", children: "professionals" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 183,
                columnNumber: 54
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 182,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react78.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Await, { resolve: data.random8Vendors, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Center, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Avatar.Group, { children: response == null ? void 0 : response.map((v) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Avatar, { size: "lg", src: PATH.THUMB_URL + (v == null ? void 0 : v.profileImageName) }, v == null ? void 0 : v.profileImageName, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 189,
              columnNumber: 51
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 188,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 187,
              columnNumber: 40
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 186,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 185,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 181,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 180,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 134,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(SupportCenterAffix, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 203,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 127,
      columnNumber: 12
    }, this);
  },
  Jumbotron: () => {
    let typewriterWords = ["events done", "photographers", "videographers", "makeup artists", "stylists"];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: " homepage-hero-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { align: "stretch", gutter: 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { visibleFrom: "md", span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Box, { className: "homepage-hero-search-wrapper", p: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Space, { h: "xl" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Center, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { gutter: 20, w: "70%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { className: "title-wrapper", order: 1, children: [
            "Now it's easy",
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 216,
              columnNumber: 75
            }, this),
            "to get ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react_simple_typewriter.Typewriter, { typeSpeed: 100, delaySpeed: 400, words: typewriterWords, loop: !0, cursor: !0, cursorColor: "red" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 216,
              columnNumber: 88
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 216,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 12, md: 9 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(SearchInput_default, {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 219,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 218,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 214,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 211,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 12, md: 6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("img", { className: "homepage-hero-img", src: "/assets/homepage-hero-2.png", width: "100%", style: { maxHeight: "400px", objectFit: "contain" } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 208,
      columnNumber: 12
    }, this);
  },
  PopularServices: () => {
    let data = (0, import_react79.useLoaderData)(), isWideScreen = (0, import_hooks8.useMediaQuery)("(min-width: 56.25em)"), navigate = (0, import_react79.useNavigate)();
    function sliderCount() {
      return isWideScreen ? 4 : 2;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { justify: "space-between", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 12, md: 2 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "home-section-card-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 4, children: "Popular Services" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 242,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { c: "dimmed", children: "Explore our in-demand services, loved by many." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 240,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 12, md: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react78.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 247,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Await, { resolve: data.popularServices, children: (resolve) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.Slider, { className: "slider-spacer", children: resolve.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.Slide, { className: "card-style-1", index: i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Link, { to: item.path, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Stack, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Image, { className: "thumbnail", src: item.image || "" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 261,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "title-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { size: "sm", children: item.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 263,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 262,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 260,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconChevronRight, { className: "btn-wrapper" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 266,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 259,
              columnNumber: 17
            }, this) }, "s" + item.id, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 258,
              columnNumber: 75
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 258,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 269,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 269,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 270,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 270,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 249,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 246,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 239,
      columnNumber: 12
    }, this);
  },
  Collections: () => {
    let data = (0, import_react79.useLoaderData)(), isWideScreen = (0, import_hooks8.useMediaQuery)("(min-width: 56.25em)");
    function sliderCount() {
      return isWideScreen ? 4 : 1;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { style: { paddingTop: "45px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "home-section-card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 3, className: "_text-center", children: "Hire the best professionals for any job" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 287,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 285,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 284,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react78.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 292,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Await, { resolve: data.collections, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.Slider, { className: "slider-spacer", children: response.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.Slide, { className: "card-style-2", index: i, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "title-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, children: item.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 307,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 306,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "label-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { size: "sm", children: item.label }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 310,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 309,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "btn-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Button, { radius: "xl", children: "Book now" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 314,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 313,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 312,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 305,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 304,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "card-thumb-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "card-thumb-cover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Image, { src: item.image || "", height: "100%", width: "100%", className: "thumb" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 323,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 322,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 321,
                columnNumber: 17
              }, this)
            ] }, item.id, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 303,
              columnNumber: 76
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 303,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 328,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 328,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 329,
              columnNumber: 49
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 329,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 294,
          columnNumber: 26
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 293,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 292,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 291,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 283,
      columnNumber: 12
    }, this);
  },
  Services: () => {
    let loaderData = (0, import_react79.useLoaderData)(), [modalData, setIsModalOpen] = (0, import_react78.useState)(null), isWideScreen = (0, import_hooks8.useMediaQuery)("(min-width: 56.25em)"), [activeItemIndex, setActiveItem] = (0, import_react78.useState)(0), showModal = (data) => {
      setIsModalOpen(data);
    }, handleCancel = () => {
      setIsModalOpen(null);
    };
    function sliderCount() {
      return isWideScreen ? 5 : 2;
    }
    let CatIconList = [
      {
        name: "video",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconVideo, { size: 30 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 355,
          columnNumber: 13
        }, this)
      },
      {
        name: "photo",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconCamera, { size: 30 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 359,
          columnNumber: 13
        }, this)
      },
      {
        name: "makeup",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconBrush, { size: 30 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 363,
          columnNumber: 13
        }, this)
      },
      {
        name: "design",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react35.IconHanger, { size: 30 }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 367,
          columnNumber: 13
        }, this)
      }
    ];
    return [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react78.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Skeleton_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 371,
        columnNumber: 27
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Await, { resolve: loaderData.categories, children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        import_pure_react_carousel3.CarouselProvider,
        {
          naturalSlideWidth: 300,
          naturalSlideHeight: 400,
          totalSlides: data.length,
          visibleSlides: sliderCount(),
          isIntrinsicHeight: !0,
          step: sliderCount(),
          dragStep: sliderCount(),
          className: "carousel-slider-wrapper slider-homepage-focused _center slider-uplift",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.Slider, { className: "carousel-slider", children: data.map((item, i) => {
              var _a;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.Slide, { className: (0, import_classnames.default)("item-wrapper", { _active: activeItemIndex === i }), index: i, onClick: () => showModal(item), onMouseOver: () => setActiveItem(i), children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "item-spacer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Stack, { children: [
                (_a = CatIconList.find((x) => item.title.toLowerCase().includes(x.name))) == null ? void 0 : _a.icon,
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, style: { color: "white" }, children: item.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 387,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Group, { className: "hover-active", align: "center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { fw: 500, c: "white", children: "Get Started" }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 389,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconArrowNarrowRight, {}, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 390,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 388,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 385,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 384,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 383,
                columnNumber: 15
              }, this) }, "s" + item.id, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 382,
                columnNumber: 72
              }, this);
            }) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 382,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.ButtonBack, { className: "btn _prev", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconArrowNarrowLeft, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 397,
              columnNumber: 47
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 397,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.ButtonNext, { className: "btn _next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconArrowNarrowRight, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 398,
              columnNumber: 47
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 398,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 373,
          columnNumber: 20
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 372,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 371,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Modal, { title: "Browse " + (modalData == null ? void 0 : modalData.title), opened: !!modalData, onClose: handleCancel, centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { gutter: 20, children: [
        modalData == null ? void 0 : modalData.serviceGroup.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_jsx_dev_runtime58.Fragment, { children: [
          !item.isCollection && (index - 1 < 0 || item.isCollection !== modalData.serviceGroup[index - 1].isCollection) ? /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, children: "Other services" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 405,
            columnNumber: 187
          }, this) }, item.id + "col-" + index, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 405,
            columnNumber: 126
          }, this) : "",
          (item.isCollection, /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 6, md: 4 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Link, { to: item.path, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { style: { position: "relative", borderRadius: "10px", overflow: "hidden" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Image, { src: item.imageName ? PATH.THUMB_URL + item.imageName : FALLBACK_IMG, style: { borderRadius: "10px" } }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 419,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { style: {
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
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, style: { color: "white", wordBreak: "normal" }, children: item.name }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 423,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 420,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 418,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 417,
            columnNumber: 15
          }, this) }, item.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 416,
            columnNumber: 27
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 404,
          columnNumber: 57
        }, this)),
        !(modalData != null && modalData.serviceGroup.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: "Sorry, no services found under this category." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 428,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 403,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 402,
        columnNumber: 7
      }, this)
    ];
  },
  TopVendorsList: () => {
    let data = (0, import_react79.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react78.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Skeleton_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 434,
      columnNumber: 32
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Await, { resolve: data.topVendors, children: (res) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 3, children: "Top service providers" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 438,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 437,
        columnNumber: 11
      }, this),
      res.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { base: 12, md: 3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "home-section-card-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, children: category.name }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 442,
          columnNumber: 17
        }, this),
        category.vendor.map((vendor, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { gutter: 20, align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { children: i + 1 }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 444,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
            import_core54.Avatar,
            {
              src: vendor.profileImageName ? PATH.THUMB_URL + vendor.profileImageName : PATH.AVATAR_PLACEHOLDER
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 446,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 445,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "nowrap", style: { maxWidth: "80px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Link, { to: routes_data_default.get("VendorProfile", { id: vendor.username }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { fw: 500, children: vendor.username }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 451,
            columnNumber: 138
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 451,
            columnNumber: 74
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 451,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 450,
            columnNumber: 19
          }, this)
        ] }, vendor.username, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 443,
          columnNumber: 53
        }, this)),
        !category.vendor.length && "Sorry, no data found.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Link, { to: routes_data_default.get("Services", { id: category.keyName }), children: "View all" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 454,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 454,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 441,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 440,
        columnNumber: 13
      }, this) }, "ce" + category.id, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 439,
        columnNumber: 34
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 436,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 435,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 434,
      columnNumber: 12
    }, this);
  },
  MainBannerAds() {
    let data = (0, import_react79.useLoaderData)(), isWideScreen = (0, import_hooks8.useMediaQuery)("(min-width: 56.25em)");
    function sliderCount(length) {
      return isWideScreen ? 3 : 1;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react78.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Await, { resolve: data.bannerAds, children: (response) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
      import_pure_react_carousel3.CarouselProvider,
      {
        naturalSlideWidth: 300,
        naturalSlideHeight: 400,
        totalSlides: response.length,
        visibleSlides: sliderCount(response.length),
        isIntrinsicHeight: !0,
        step: sliderCount(response.length),
        dragStep: sliderCount(response.length),
        className: "carousel-slider-wrapper _center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.Slider, { className: "slider-spacer", children: response.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_pure_react_carousel3.Slide, { index: i, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react79.Link, { to: item.url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Card, { withBorder: !0, p: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Card, { mih: 200, className: "animate-banner-ad", style: { backgroundImage: "url(/assets/card-gradient-overlay.png), url(" + item.img + ")" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Space, { h: "xl" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 486,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Stack, { gap: 0, justify: "center", align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { ta: "center", c: "white", order: 3, children: item.title }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 488,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Box, { h: 45, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { ta: "center", c: "white", children: item.description }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 489,
              columnNumber: 35
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 489,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Space, { h: "lg" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 490,
              columnNumber: 23
            }, this),
            item.cost ? /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Group, { fw: "bold", c: "white", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Text, { children: "Starts from" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 491,
                columnNumber: 67
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(currency_transformer_default, { value: item.cost }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 491,
                columnNumber: 91
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 491,
              columnNumber: 36
            }, this) : "",
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Space, { h: "md" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 492,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Button, { variant: "white", radius: "lg", children: "Book now" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 494,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 493,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 487,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 485,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 484,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 483,
          columnNumber: 15
        }, this) }, "s" + item.bannerLocation, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 482,
          columnNumber: 40
        }, this)) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 481,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 472,
        columnNumber: 22
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 471,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 470,
      columnNumber: 12
    }, this);
  },
  KeyFeatures() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid, { pt: "xl", gutter: "lg", align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { md: "content", base: "content" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Group, { justify: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Image, { w: 60, h: 60, src: "/assets/icons/quality-assurance.png" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 511,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 4, children: "CC Promise" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 512,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 510,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 509,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { visibleFrom: "md", span: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Divider, { orientation: "vertical", h: 40, size: "sm" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 516,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 515,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { md: "content", base: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.ThemeIcon, { variant: "white", color: "yellow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconStarFilled, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 520,
          columnNumber: 53
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 520,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, children: "Verified Professionals" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 521,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 519,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 518,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { md: "content", base: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.ThemeIcon, { variant: "white", color: "yellow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconStarFilled, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 526,
          columnNumber: 53
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 526,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, children: "Hassle Free Booking" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 527,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 525,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 524,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Grid.Col, { span: { md: "content", base: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.ThemeIcon, { variant: "white", color: "yellow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_icons_react34.IconStarFilled, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 532,
          columnNumber: 53
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 532,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_core54.Title, { order: 5, children: "Transparent Pricing" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 533,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 531,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 530,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 508,
      columnNumber: 12
    }, this);
  }
};
var index_default = Home.Index;

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader40
});
var loader40 = async ({ request }) => logout(request);

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => UserLayout,
  loader: () => loader41,
  meta: () => meta24
});
var import_core55 = require("@mantine/core"), import_react80 = require("@remix-run/react");
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime"), meta24 = page_meta_default({
  title: "My Account"
});
async function loader41(args) {
  return !!(await getSession(
    args.request.headers.get("Cookie")
  )).get(USER_SESSION_KEY);
}
function UserLayout() {
  let data = (0, import_react80.useLoaderData)(), location2 = (0, import_react80.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "container", children: data ? /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_react80.Outlet, {}, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 30,
    columnNumber: 15
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_core55.Grid, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_core55.Grid.Col, { span: { md: 4, base: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(UserLogin_default, { redirectUrl: location2.pathname }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 31,
    columnNumber: 8
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 29,
    columnNumber: 12
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-B6BG5DNU.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-4ZE2RFBR.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-VSULR5TW.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OO6NDX2V.js", imports: ["/build/_shared/chunk-UBQQXV52.js", "/build/_shared/chunk-5KZSHQZP.js", "/build/_shared/chunk-R5SXIUUU.js", "/build/_shared/chunk-RX55ZAE2.js", "/build/_shared/chunk-NG3O7H24.js", "/build/_shared/chunk-HEK4DMIR.js", "/build/_shared/chunk-3WZUTLKC.js", "/build/_shared/chunk-FO3EPCVC.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_api.chat.$groupId": { id: "routes/_api.chat.$groupId", parentId: "root", path: "chat/:groupId", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.chat.$groupId-XCENVIKJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_api.login": { id: "routes/_api.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.login-EGZYGHF7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_api.notify.admin": { id: "routes/_api.notify.admin", parentId: "root", path: "notify/admin", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.notify.admin-WX7K7JJQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_api.search": { id: "routes/_api.search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.search-DIFQTRHV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_api.verify-otp": { id: "routes/_api.verify-otp", parentId: "root", path: "verify-otp", index: void 0, caseSensitive: void 0, module: "/build/routes/_api.verify-otp-POBOCWQC.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-ETPN4BLB.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.order.checkout": { id: "routes/_auth.order.checkout", parentId: "routes/_auth", path: "order/checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.order.checkout-TCLJ4PGN.js", imports: ["/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.order.payment": { id: "routes/_auth.order.payment", parentId: "routes/_auth", path: "order/payment", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.order.payment-GBXX7ZVO.js", imports: ["/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_auth.order.submit": { id: "routes/_auth.order.submit", parentId: "routes/_auth", path: "order/submit", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.order.submit-B32ZXRAL.js", imports: ["/build/_shared/chunk-RX55ZAE2.js", "/build/_shared/chunk-5OMCNQEE.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.order.verify": { id: "routes/_auth.order.verify", parentId: "routes/_auth", path: "order/verify", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.order.verify-6TUWAR2J.js", imports: ["/build/_shared/chunk-VTLEF6NQ.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.profile.update": { id: "routes/_auth.profile.update", parentId: "routes/_auth", path: "profile/update", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.profile.update-CNX647CE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.home": { id: "routes/_auth.user.home", parentId: "routes/_auth", path: "user/home", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user.home-GFXP4MPZ.js", imports: ["/build/_shared/chunk-DBP47EGO.js", "/build/_shared/chunk-VTLEF6NQ.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.inbox": { id: "routes/_auth.user.inbox", parentId: "routes/_auth", path: "user/inbox", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user.inbox-KMBO7ZTE.js", imports: ["/build/_shared/chunk-VTLEF6NQ.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-FO3EPCVC.js", "/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.inbox.$chatGroupId._index": { id: "routes/_auth.user.inbox.$chatGroupId._index", parentId: "routes/_auth.user.inbox", path: ":chatGroupId", index: !0, caseSensitive: void 0, module: "/build/routes/_auth.user.inbox.$chatGroupId._index-ORG4CEAQ.js", imports: ["/build/_shared/chunk-NTPHNSKT.js", "/build/_shared/chunk-3WZUTLKC.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-KHT6COLJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.order.$id._index": { id: "routes/_auth.user.order.$id._index", parentId: "routes/_auth", path: "user/order/:id", index: !0, caseSensitive: void 0, module: "/build/routes/_auth.user.order.$id._index-IA4BM2NL.js", imports: ["/build/_shared/chunk-FVD2ZPGU.js", "/build/_shared/chunk-DBP47EGO.js", "/build/_shared/chunk-HEK4DMIR.js", "/build/_shared/chunk-I4JJ2S4S.js", "/build/_shared/chunk-NTPHNSKT.js", "/build/_shared/chunk-VTLEF6NQ.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-3WZUTLKC.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-FO3EPCVC.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.order.$id.invoice._index": { id: "routes/_auth.user.order.$id.invoice._index", parentId: "routes/_auth", path: "user/order/:id/invoice", index: !0, caseSensitive: void 0, module: "/build/routes/_auth.user.order.$id.invoice._index-GQJSIAEK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.user.wishlist": { id: "routes/_auth.user.wishlist", parentId: "routes/_auth", path: "user/wishlist", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.user.wishlist-V724WGNW.js", imports: ["/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.vendor": { id: "routes/_auth.vendor", parentId: "routes/_auth", path: "vendor", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.vendor-EQSRO7UF.js", imports: ["/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-KHT6COLJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.vendor.manage.$orderId._index": { id: "routes/_auth.vendor.manage.$orderId._index", parentId: "routes/_auth.vendor", path: "manage/:orderId", index: !0, caseSensitive: void 0, module: "/build/routes/_auth.vendor.manage.$orderId._index-LI2QXKCO.js", imports: ["/build/_shared/chunk-NTPHNSKT.js", "/build/_shared/chunk-VTLEF6NQ.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-3WZUTLKC.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YMVJI6LJ.js", imports: ["/build/_shared/chunk-NUFBUBS2.js", "/build/_shared/chunk-I4JJ2S4S.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about.company._index": { id: "routes/about.company._index", parentId: "root", path: "about/company", index: !0, caseSensitive: void 0, module: "/build/routes/about.company._index-FGI4OZJU.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about.contact-us._index": { id: "routes/about.contact-us._index", parentId: "root", path: "about/contact-us", index: !0, caseSensitive: void 0, module: "/build/routes/about.contact-us._index-VP7GP5VS.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js", "/build/_shared/chunk-5OMCNQEE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about.privacy-policy._index": { id: "routes/about.privacy-policy._index", parentId: "root", path: "about/privacy-policy", index: !0, caseSensitive: void 0, module: "/build/routes/about.privacy-policy._index-BTOCVKTL.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about.refund-policy._index": { id: "routes/about.refund-policy._index", parentId: "root", path: "about/refund-policy", index: !0, caseSensitive: void 0, module: "/build/routes/about.refund-policy._index-M2VF5UJZ.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about.terms._index": { id: "routes/about.terms._index", parentId: "root", path: "about/terms", index: !0, caseSensitive: void 0, module: "/build/routes/about.terms._index-ALLAZ4CO.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog.$post.$id._index": { id: "routes/blog.$post.$id._index", parentId: "root", path: "blog/:post/:id", index: !0, caseSensitive: void 0, module: "/build/routes/blog.$post.$id._index-E5NKM4MW.js", imports: ["/build/_shared/chunk-MTCVDIXS.js", "/build/_shared/chunk-I4JJ2S4S.js", "/build/_shared/chunk-3PGEQ3NN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog._index": { id: "routes/blog._index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog._index-RPXU3G7Z.js", imports: ["/build/_shared/chunk-VTLEF6NQ.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-3PGEQ3NN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart._index": { id: "routes/cart._index", parentId: "root", path: "cart", index: !0, caseSensitive: void 0, module: "/build/routes/cart._index-SM7WYU4Y.js", imports: ["/build/_shared/chunk-VTLEF6NQ.js", "/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-3PGEQ3NN.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.add.$vendorServiceGroupId": { id: "routes/cart.add.$vendorServiceGroupId", parentId: "root", path: "cart/add/:vendorServiceGroupId", index: void 0, caseSensitive: void 0, module: "/build/routes/cart.add.$vendorServiceGroupId-FT7XHZFY.js", imports: ["/build/_shared/chunk-5SPJNKFU.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-3PGEQ3NN.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.add._index": { id: "routes/cart.add._index", parentId: "root", path: "cart/add", index: !0, caseSensitive: void 0, module: "/build/routes/cart.add._index-752WVJRN.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.checkout.payment._index": { id: "routes/cart.checkout.payment._index", parentId: "root", path: "cart/checkout/payment", index: !0, caseSensitive: void 0, module: "/build/routes/cart.checkout.payment._index-KBXNTJUX.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.package.$username.$packageKey._index": { id: "routes/cart.package.$username.$packageKey._index", parentId: "root", path: "cart/package/:username/:packageKey", index: !0, caseSensitive: void 0, module: "/build/routes/cart.package.$username.$packageKey._index-AMPFVISV.js", imports: ["/build/_shared/chunk-MTCVDIXS.js", "/build/_shared/chunk-I4JJ2S4S.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-3PGEQ3NN.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.package.$vendorGroupId._index": { id: "routes/cart.package.$vendorGroupId._index", parentId: "root", path: "cart/package/:vendorGroupId", index: !0, caseSensitive: void 0, module: "/build/routes/cart.package.$vendorGroupId._index-C2M4LZNM.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/collections.$id.$highlight": { id: "routes/collections.$id.$highlight", parentId: "root", path: "collections/:id/:highlight", index: void 0, caseSensitive: void 0, module: "/build/routes/collections.$id.$highlight-SAPFJ6VX.js", imports: ["/build/_shared/chunk-XHCJF7UX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/collections.$id._index": { id: "routes/collections.$id._index", parentId: "root", path: "collections/:id", index: !0, caseSensitive: void 0, module: "/build/routes/collections.$id._index-ESIIX53U.js", imports: ["/build/_shared/chunk-XHCJF7UX.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login.redirect": { id: "routes/login.redirect", parentId: "root", path: "login/redirect", index: void 0, caseSensitive: void 0, module: "/build/routes/login.redirect-RG3ROWFZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/order.failed": { id: "routes/order.failed", parentId: "root", path: "order/failed", index: void 0, caseSensitive: void 0, module: "/build/routes/order.failed-YUQDK3TK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/order.success": { id: "routes/order.success", parentId: "root", path: "order/success", index: void 0, caseSensitive: void 0, module: "/build/routes/order.success-4FILTJHC.js", imports: ["/build/_shared/chunk-FVD2ZPGU.js", "/build/_shared/chunk-I4JJ2S4S.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup": { id: "routes/partner.signup", parentId: "root", path: "partner/signup", index: void 0, caseSensitive: void 0, module: "/build/routes/partner.signup-SJL62AM3.js", imports: ["/build/_shared/chunk-3PGEQ3NN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/partner.signup._index": { id: "routes/partner.signup._index", parentId: "routes/partner.signup", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup._index-MIERN742.js", imports: ["/build/_shared/chunk-RX55ZAE2.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup.onboard.$id._index": { id: "routes/partner.signup.onboard.$id._index", parentId: "routes/partner.signup", path: "onboard/:id", index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard.$id._index-J6J7E37U.js", imports: ["/build/_shared/chunk-FVD2ZPGU.js", "/build/_shared/chunk-DBP47EGO.js", "/build/_shared/chunk-5KZSHQZP.js", "/build/_shared/chunk-RX55ZAE2.js", "/build/_shared/chunk-HEK4DMIR.js", "/build/_shared/chunk-I4JJ2S4S.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/partner.signup.onboard.$id.success": { id: "routes/partner.signup.onboard.$id.success", parentId: "routes/partner.signup", path: "onboard/:id/success", index: void 0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard.$id.success-Y2K2HLFH.js", imports: ["/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner.signup.onboard._index": { id: "routes/partner.signup.onboard._index", parentId: "routes/partner.signup", path: "onboard", index: !0, caseSensitive: void 0, module: "/build/routes/partner.signup.onboard._index-PMN3PDXL.js", imports: ["/build/_shared/chunk-RX55ZAE2.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user": { id: "routes/profile.$user", parentId: "root", path: "profile/:user", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user-B4HMULDF.js", imports: ["/build/_shared/chunk-MTCVDIXS.js", "/build/_shared/chunk-I4JJ2S4S.js", "/build/_shared/chunk-3PGEQ3NN.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js", "/build/_shared/chunk-DMZCSMEQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/profile.$user._index": { id: "routes/profile.$user._index", parentId: "routes/profile.$user", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/profile.$user._index-ISIPV7WL.js", imports: ["/build/_shared/chunk-NUFBUBS2.js", "/build/_shared/chunk-55OPHICG.js", "/build/_shared/chunk-LAXVRS4F.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-FO3EPCVC.js", "/build/_shared/chunk-YLRW6BQT.js", "/build/_shared/chunk-GXUSWADK.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KHT6COLJ.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user.portfolio": { id: "routes/profile.$user.portfolio", parentId: "routes/profile.$user", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user.portfolio-GKBBCDSM.js", imports: ["/build/_shared/chunk-55OPHICG.js", "/build/_shared/chunk-LAXVRS4F.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-ACOYGDGX.js", "/build/_shared/chunk-SB7CS4RA.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/redirect": { id: "routes/redirect", parentId: "root", path: "redirect", index: void 0, caseSensitive: void 0, module: "/build/routes/redirect-2ERWNORZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services.$id.$subId": { id: "routes/services.$id.$subId", parentId: "root", path: "services/:id/:subId", index: void 0, caseSensitive: void 0, module: "/build/routes/services.$id.$subId-27XGNB3D.js", imports: ["/build/_shared/chunk-WTGZLMHL.js", "/build/_shared/chunk-LAXVRS4F.js", "/build/_shared/chunk-XHCJF7UX.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services.$id._index": { id: "routes/services.$id._index", parentId: "root", path: "services/:id", index: !0, caseSensitive: void 0, module: "/build/routes/services.$id._index-TT6K7TWI.js", imports: ["/build/_shared/chunk-WTGZLMHL.js", "/build/_shared/chunk-LAXVRS4F.js", "/build/_shared/chunk-XHCJF7UX.js", "/build/_shared/chunk-DAVVKSHI.js", "/build/_shared/chunk-DCRWGXZQ.js", "/build/_shared/chunk-5OMCNQEE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user.login._index": { id: "routes/user.login._index", parentId: "root", path: "user/login", index: !0, caseSensitive: void 0, module: "/build/routes/user.login._index-D72FI6TR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "e4df7e9f", hmr: { runtime: "/build/_shared/chunk-VSULR5TW.js", timestamp: 1778309771008 }, url: "/build/manifest-E4DF7E9F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/cart.package.$username.$packageKey._index": {
    id: "routes/cart.package.$username.$packageKey._index",
    parentId: "root",
    path: "cart/package/:username/:packageKey",
    index: !0,
    caseSensitive: void 0,
    module: cart_package_username_packageKey_index_exports
  },
  "routes/_auth.user.inbox.$chatGroupId._index": {
    id: "routes/_auth.user.inbox.$chatGroupId._index",
    parentId: "routes/_auth.user.inbox",
    path: ":chatGroupId",
    index: !0,
    caseSensitive: void 0,
    module: auth_user_inbox_chatGroupId_index_exports
  },
  "routes/_auth.user.order.$id.invoice._index": {
    id: "routes/_auth.user.order.$id.invoice._index",
    parentId: "routes/_auth",
    path: "user/order/:id/invoice",
    index: !0,
    caseSensitive: void 0,
    module: auth_user_order_id_invoice_index_exports
  },
  "routes/_auth.vendor.manage.$orderId._index": {
    id: "routes/_auth.vendor.manage.$orderId._index",
    parentId: "routes/_auth.vendor",
    path: "manage/:orderId",
    index: !0,
    caseSensitive: void 0,
    module: auth_vendor_manage_orderId_index_exports
  },
  "routes/cart.package.$vendorGroupId._index": {
    id: "routes/cart.package.$vendorGroupId._index",
    parentId: "root",
    path: "cart/package/:vendorGroupId",
    index: !0,
    caseSensitive: void 0,
    module: cart_package_vendorGroupId_index_exports
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
  "routes/_auth.user.order.$id._index": {
    id: "routes/_auth.user.order.$id._index",
    parentId: "routes/_auth",
    path: "user/order/:id",
    index: !0,
    caseSensitive: void 0,
    module: auth_user_order_id_index_exports
  },
  "routes/about.privacy-policy._index": {
    id: "routes/about.privacy-policy._index",
    parentId: "root",
    path: "about/privacy-policy",
    index: !0,
    caseSensitive: void 0,
    module: about_privacy_policy_index_exports
  },
  "routes/about.refund-policy._index": {
    id: "routes/about.refund-policy._index",
    parentId: "root",
    path: "about/refund-policy",
    index: !0,
    caseSensitive: void 0,
    module: about_refund_policy_index_exports
  },
  "routes/collections.$id.$highlight": {
    id: "routes/collections.$id.$highlight",
    parentId: "root",
    path: "collections/:id/:highlight",
    index: void 0,
    caseSensitive: void 0,
    module: collections_id_highlight_exports
  },
  "routes/about.contact-us._index": {
    id: "routes/about.contact-us._index",
    parentId: "root",
    path: "about/contact-us",
    index: !0,
    caseSensitive: void 0,
    module: about_contact_us_index_exports
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
  "routes/blog.$post.$id._index": {
    id: "routes/blog.$post.$id._index",
    parentId: "root",
    path: "blog/:post/:id",
    index: !0,
    caseSensitive: void 0,
    module: blog_post_id_index_exports
  },
  "routes/partner.signup._index": {
    id: "routes/partner.signup._index",
    parentId: "routes/partner.signup",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: partner_signup_index_exports
  },
  "routes/_auth.order.checkout": {
    id: "routes/_auth.order.checkout",
    parentId: "routes/_auth",
    path: "order/checkout",
    index: void 0,
    caseSensitive: void 0,
    module: auth_order_checkout_exports
  },
  "routes/_auth.profile.update": {
    id: "routes/_auth.profile.update",
    parentId: "routes/_auth",
    path: "profile/update",
    index: void 0,
    caseSensitive: void 0,
    module: auth_profile_update_exports
  },
  "routes/about.company._index": {
    id: "routes/about.company._index",
    parentId: "root",
    path: "about/company",
    index: !0,
    caseSensitive: void 0,
    module: about_company_index_exports
  },
  "routes/profile.$user._index": {
    id: "routes/profile.$user._index",
    parentId: "routes/profile.$user",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: profile_user_index_exports
  },
  "routes/_auth.order.payment": {
    id: "routes/_auth.order.payment",
    parentId: "routes/_auth",
    path: "order/payment",
    index: void 0,
    caseSensitive: void 0,
    module: auth_order_payment_exports
  },
  "routes/_auth.user.wishlist": {
    id: "routes/_auth.user.wishlist",
    parentId: "routes/_auth",
    path: "user/wishlist",
    index: void 0,
    caseSensitive: void 0,
    module: auth_user_wishlist_exports
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
  "routes/_api.chat.$groupId": {
    id: "routes/_api.chat.$groupId",
    parentId: "root",
    path: "chat/:groupId",
    index: void 0,
    caseSensitive: void 0,
    module: api_chat_groupId_exports
  },
  "routes/_auth.order.submit": {
    id: "routes/_auth.order.submit",
    parentId: "routes/_auth",
    path: "order/submit",
    index: void 0,
    caseSensitive: void 0,
    module: auth_order_submit_exports
  },
  "routes/_auth.order.verify": {
    id: "routes/_auth.order.verify",
    parentId: "routes/_auth",
    path: "order/verify",
    index: void 0,
    caseSensitive: void 0,
    module: auth_order_verify_exports
  },
  "routes/about.terms._index": {
    id: "routes/about.terms._index",
    parentId: "root",
    path: "about/terms",
    index: !0,
    caseSensitive: void 0,
    module: about_terms_index_exports
  },
  "routes/_api.notify.admin": {
    id: "routes/_api.notify.admin",
    parentId: "root",
    path: "notify/admin",
    index: void 0,
    caseSensitive: void 0,
    module: api_notify_admin_exports
  },
  "routes/user.login._index": {
    id: "routes/user.login._index",
    parentId: "root",
    path: "user/login",
    index: !0,
    caseSensitive: void 0,
    module: user_login_index_exports
  },
  "routes/_auth.user.inbox": {
    id: "routes/_auth.user.inbox",
    parentId: "routes/_auth",
    path: "user/inbox",
    index: void 0,
    caseSensitive: void 0,
    module: auth_user_inbox_exports
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
  "routes/cart.add._index": {
    id: "routes/cart.add._index",
    parentId: "root",
    path: "cart/add",
    index: !0,
    caseSensitive: void 0,
    module: cart_add_index_exports
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
  "routes/_auth.vendor": {
    id: "routes/_auth.vendor",
    parentId: "routes/_auth",
    path: "vendor",
    index: void 0,
    caseSensitive: void 0,
    module: auth_vendor_exports
  },
  "routes/order.failed": {
    id: "routes/order.failed",
    parentId: "root",
    path: "order/failed",
    index: void 0,
    caseSensitive: void 0,
    module: order_failed_exports
  },
  "routes/_api.search": {
    id: "routes/_api.search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: api_search_exports
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_index_exports
  },
  "routes/cart._index": {
    id: "routes/cart._index",
    parentId: "root",
    path: "cart",
    index: !0,
    caseSensitive: void 0,
    module: cart_index_exports
  },
  "routes/_api.login": {
    id: "routes/_api.login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: api_login_exports
  },
  "routes/redirect": {
    id: "routes/redirect",
    parentId: "root",
    path: "redirect",
    index: void 0,
    caseSensitive: void 0,
    module: redirect_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
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
