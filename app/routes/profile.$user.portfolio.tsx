import { LoaderArgs } from "@remix-run/node";

export function loader({ params }: LoaderArgs) {
    const id = params.user;
    return id;
}

export default function Portfolio() {
    return <div>Success</div>
}