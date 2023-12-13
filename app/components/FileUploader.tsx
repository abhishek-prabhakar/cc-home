// import { Form } from "@remix-run/react";
import Uploady, { useUploady, useItemFinishListener } from "@rpldy/uploady";
import { useRef, useCallback } from "react";

const Uploader = (props: { id?: string, label?: string }) => {
    const { showFileUpload } = useUploady();
    const formButton = useRef<any>(null);
    const formInput = useRef<any>(null);

    const onClick = useCallback(() => {
        showFileUpload();
    }, []);

    useItemFinishListener((item, options) => {
        const data = item.uploadResponse.data;
        formInput.current.value = data.fileName;
        formButton.current.click();
    });

    return <div>
        <button disabled={!props.id} onClick={onClick}>{props.label || 'Choose Image'}</button>
        <div style={{ display: 'none' }}>
            <form method="post" action="">
                <input type="hidden" name="id" value={props.id} />
                <input type="hidden" name="fileId" ref={formInput} />
                <button type="submit" name="action" value="upload" ref={formButton}>save</button>
            </form>
        </div>
    </div>;
}


export default (props: { id?: string, label?: string }) => {
    return <Uploady
        inputFieldName="image"
        destination={{
            url: "https://celebria.makewithabhishek.com/upload/",
            // url: "http://localhost:3003/upload/",
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }}
        accept="image/*"
    >
        <Uploader id={props.id} label={props.label} />
    </Uploady>
}