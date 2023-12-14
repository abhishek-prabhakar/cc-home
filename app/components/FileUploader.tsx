import { Form } from "@remix-run/react";
import Uploady, { useUploady, useItemFinishListener } from "@rpldy/uploady";
import { Button } from "antd";
import { useRef, useCallback, useEffect, useState } from "react";

const Uploader = (props: { id?: string, label?: string }) => {
    const { showFileUpload } = useUploady();
    const formButton = useRef<any>(null);
    const formInput = useRef<any>(null);

    const onClick = useCallback(() => {
        showFileUpload();
    }, []);

    useItemFinishListener((item, options) => {
        const data = item.uploadResponse.data;
        if (data) {
            formInput.current.value = data.fileName;
            formButton.current.click();
        }
    });

    return <>
        <Button type="primary" htmlType="submit" disabled={!props.id} onClick={onClick}>{props.label || 'Choose Image'}</Button>
        <div style={{ display: 'none' }}>
            <input type="hidden" name="fileId" ref={formInput} />
            <button type="submit" name="action" value="DOCUMENTS" ref={formButton}>save</button>
        </div>
    </>;
}


export default (props: { id?: string, label?: string }) => {
    const [pageReady, setReady] = useState(false);
    useEffect(() => {
        setReady(true);
    }, [])
    return pageReady ? <Uploady
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
    </Uploady> : '...'
}