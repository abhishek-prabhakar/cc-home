import { ActionIcon, Box, Image, LoadingOverlay } from "@mantine/core";
import { useInViewport, useIntersection } from "@mantine/hooks";
import { IconPlayerPlay } from "@tabler/icons-react";
import { useRef } from "react";
import { PhotoView } from "react-photo-view";
import YouTube from "react-youtube";
import { PATH } from "~/path.data";

const elementSize = 640;

function VideoPreviewItem({ ytId }: { ytId: string }) {

    return <PhotoView
        width={elementSize}
        height={elementSize}
        render={({ scale, attrs }) => {
            const width: any = attrs.style?.width || 0;
            const offset = (width - elementSize) / elementSize;
            const childScale = scale === 1 ? scale + offset : 1 + offset;

            return (
                <div {...attrs}  >
                    <div style={{ transform: `scale(${childScale})`, width: elementSize, transformOrigin: '0 0' }} >
                        <YouTube
                            videoId={ytId}
                        />
                    </div>
                </div>
            );
        }}
    >
        <div className="cursor-pointer" style={{ zIndex: 0, position: 'relative', height: '100%' }}>
            <LoadingOverlay visible={true}
                overlayProps={{
                    backgroundOpacity: 0
                }}
                loaderProps={{
                    children: <ActionIcon variant="filled" color="pink" size="lg" ><IconPlayerPlay /></ActionIcon>
                }} bg={'none'} />
            <Image radius={'md'} src={PATH.YOUTUBE_THUMBNAIL.replace(':id', ytId)} h={'100%'} w={'100%'} fit="cover" />
        </div>
    </PhotoView>
}


export default VideoPreviewItem;