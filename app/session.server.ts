import { createCookie, createCookieSessionStorage, redirect } from "@remix-run/node";
// import invariant from "tiny-invariant";

import type { User } from "@prisma/client";
import { db } from "./utils/database";

// invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
export const userCartCookie = createCookie("cart");

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
            // a Cookie from `createCookie` or the CookieOptions to create one
            cookie: {
                name: "__session",
                // expires: new Date(Date.now() + 60_000),
                httpOnly: true,
                maxAge: 60,
                path: "/",
                sameSite: "lax",
                secrets: ["s3cret1"],
                secure: process.env.NODE_ENV === "production",
            },
        }
    );

const getSessionUserId = async (request: Request) => {
    const session = await getSession(request.headers.get(USER_SESSION_KEY));
    const userId = session.get(USER_SESSION_KEY);
    return userId;
}

async function getSessionUser(request: Request) {
    const userId = await getSessionUserId(request);
    if (!userId) return null;

    const user = await db.user.findFirst({ where: { id: userId } });;
    if (user) return new Promise<User>(function (resolve) { resolve(user) });

    return await logout(request);
}

const logout = async (request: Request) => {
    const session = await getSession(request.headers.get('Cookie'));
    return redirect("/", {
        headers: {
            "Set-Cookie": await SessionStorage.destroySession(session),
        },
    });
}


export { getSession, commitSession, destroySession, USER_SESSION_KEY, getSessionUserId, getSessionUser, logout };