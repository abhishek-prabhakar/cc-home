import { LoaderArgs, TypedResponse, redirect } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import { User } from "~/types"

export async function loader({ params }: LoaderArgs): Promise<User | TypedResponse> {
    const loginSuccess = true;

    if (!loginSuccess) {
        return redirect('/');
    }

    return {
        id: '1',
        name: 'booking 1',
        phone: 1234,
        email: 'test@test.com'
    }

}

export default function UserLayout() {

    return <div className="container">
        <Outlet />
    </div>
}