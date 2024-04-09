import { Button } from "@mantine/core";
import Uploady, { useUploady, useItemFinishListener, useItemProgressListener, useItemErrorListener, FILE_STATES } from "@rpldy/uploady";
import { useCallback, useEffect, useState } from "react";
import { PATH } from "~/path.data";

type DefaultProps = { id?: string, label?: string, buttonType?: 'primary' | 'default', onUpload?: (file: string) => void };


const Uploader = (props: DefaultProps) => {
    const { showFileUpload, } = useUploady();
    const [isBusy, setBusy] = useState(false);

    const onClick = useCallback(() => {
        showFileUpload();
    }, []);

    useItemFinishListener((item, options) => {
        const data = item.uploadResponse.data;
        if (data) {
            (data.names as string[])?.forEach(fid => {
                if (props?.onUpload) { props.onUpload(fid) }
            });
        }
        setBusy(false);
    });

    useItemProgressListener(item => {
        setBusy(item.state === FILE_STATES.UPLOADING);
    });

    useItemErrorListener(item => {
        setBusy(false);
    })

    return <>
        <Button loading={isBusy} variant={props.buttonType === 'primary' ? 'filled' : 'outline'} disabled={!props.id} onClick={onClick}>{props.label || 'Choose Image'}</Button>
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
        <Uploader id={props.id} buttonType={props.buttonType} label={props.label} onUpload={props.onUpload} />
    </Uploady> : '...'
}