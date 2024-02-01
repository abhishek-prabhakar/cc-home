import { createCookie, createCookieSessionStorage, redirect } from "@remix-run/node";
// import invariant from "tiny-invariant";
// invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
const cookieAge = 60 * 60 * 24 * 7 * 364;
export const userCartCookie = createCookie("cart", {
    maxAge: cookieAge
});
export const vendorSignupCookie = createCookie("vendor-signup", {
    maxAge: cookieAge
});

export const SessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__session",
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secrets: ['s3cret1'],
        secure: process.env.NODE_ENV === "production",
    },
});

const USER_SESSION_KEY = "userId";


type SessionData = {
    userId: string;
};

type SessionFlashData = {
    error: string;
};

const { getSession, commitSession, destroySession } =
    createCookieSessionStorage<SessionData, SessionFlashData>(
        {
            cookie: {
                name: "__session",
                // expires: new Date(Date.now() + 60_000),
                httpOnly: true,
                maxAge: cookieAge,
                path: "/",
                sameSite: "lax",
                secrets: ["s3cret1"],
                secure: process.env.NODE_ENV === "production",
            },
        }
    );

const logout = async (request: Request) => {
    const session = await getSession(request.headers.get('Cookie'));

    return redirect("/", {
        headers: {
            "Set-Cookie": await SessionStorage.destroySession(session),
        },
    });
}


export { getSession, commitSession, destroySession, USER_SESSION_KEY, logout };