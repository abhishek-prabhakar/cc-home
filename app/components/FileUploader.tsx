import { Form } from "@remix-run/react";
import Uploady, { useUploady, useItemFinishListener, useItemProgressListener, FILE_STATES } from "@rpldy/uploady";
import { Button } from "antd";
import { useRef, useCallback, useEffect, useState } from "react";
import { PATH } from "~/path.data";

type DefaultProps = { id?: string, label?: string, onUpload?: (file: string) => void };


const Uploader = (props: DefaultProps) => {
    const { showFileUpload, } = useUploady();
    const [isBusy, setBusy] = useState(false);

    const onClick = useCallback(() => {
        showFileUpload();
    }, []);

    useItemFinishListener((item, options) => {
        const data = item.uploadResponse.data;
        if (data) {
            if (props?.onUpload) {
                props.onUpload(data.fileName);
            }
        }
        setBusy(false);
    });

    useItemProgressListener(item => {
        setBusy(item.state === FILE_STATES.UPLOADING);
    })

    return <>
        <Button loading={isBusy} type="primary" disabled={!props.id} onClick={onClick}>{props.label || 'Choose Image'}</Button>
    </>;
}


export default (props: DefaultProps & { path?: string }) => {
    const [pageReady, setReady] = useState(false);
    useEffect(() => {
        setReady(true);
    }, [])
    return pageReady ? <Uploady
        inputFieldName="image"
        destination={{
            url: props.path || PATH.FILE_UPLOAD,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }}
        accept="image/*"

    >
        <Uploader id={props.id} label={props.label} onUpload={props.onUpload} />
    </Uploady> : '...'
}