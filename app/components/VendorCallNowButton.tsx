import { Form, useFetcher } from "@remix-run/react"

type Props = {
    profileId: string,
    children: React.ReactNode
}
function VendorCallNowButton(props:Props){
    const fetcher = useFetcher();

    function submit(){
        fetcher.submit({
            profileId:  props.profileId
        }, {
            method: 'post',
            action: '/notify/admin'
    });
    }

    // return <Form action="/notify/admin" method="post">
    //     <input type="hidden" name="profileId" value={props.profileId} />
    //     {props.children}
    // </Form>

    return <div onClick={submit}>{props.children}</div>;
}

export default VendorCallNowButton;