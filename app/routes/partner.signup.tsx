import { Outlet } from "@remix-run/react"
import PageMetaFunction from "~/utils/page.meta";

export const meta = PageMetaFunction({
	title: 'Vendor Signup',
});

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