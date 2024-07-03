import { Outlet } from "@remix-run/react"

export function loader() {
    return null;
}

export default function PartnerSignupParent() {
    return <Outlet />
}


export function ErrorBoundary() {
    return <div style={{textAlign: 'center'}}>
        Oops, Something went wrong! Please reload the page.
    </div>
}