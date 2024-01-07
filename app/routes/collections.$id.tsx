import { Outlet } from "@remix-run/react";


const CollectionsPage = {
    Index: () => {
        return <div>
            <Outlet />
        </div>
    }
}


export default CollectionsPage.Index;