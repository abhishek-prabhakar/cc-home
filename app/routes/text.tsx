import FileUploader from "~/components/FileUploader"

export function loader() {
    return true;
}
export default function () {
    return <FileUploader id="sd" label="Choose file" />
}