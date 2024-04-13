import { ActionIcon, Box, Image, LoadingOverlay } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons-react";
import { PhotoView } from "react-photo-view";
import YouTube from "react-youtube";
import { PATH } from "~/path.data";

const elementSize = 400;

function VideoPreviewItem({ ytId }: { ytId: string }) {
    return <PhotoView
        width={elementSize}
        height={elementSize}
        render={({ scale, attrs }) => {
            const width: any = attrs.style?.width || 0;
            const offset = (width - elementSize) / elementSize;
            const childScale = scale === 1 ? scale + offset : 1 + offset;

            return (
                <div {...attrs}>
                    <div style={{ transform: `scale(${childScale})`, width: elementSize, transformOrigin: '0 0' }}>
                        <YouTube
                            videoId={ytId}
                        />
                    </div>
                </div>
            );
        }}
    >
        <Box pos="relative" className="cursor-pointer" h={'100%'}>
            <LoadingOverlay visible={true}
                overlayProps={{
                    backgroundOpacity: 0
                }}
                loaderProps={{
                    children: <ActionIcon variant="filled" color="pink" size="lg" ><IconPlayerPlay /></ActionIcon>
                }} bg={'none'} />
            <Image radius={'md'} src={PATH.YOUTUBE_THUMBNAIL.replace(':id', ytId)} h={'100%'} />
        </Box>
    </PhotoView>
}


export default VideoPreviewItem;