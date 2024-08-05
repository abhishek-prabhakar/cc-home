import { Flex, Image, Modal, Overlay, Text, px } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { useEffect, useState } from "react";
import { PATH } from "~/path.data";
import Stories from 'react-insta-stories';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

type Story = {
    url?: string;
    seeMore?: Function;
    type?: string;
    duration?: number;
    styles?: object;
    preloadResource?: boolean;
}

type props = {
    album: {
        serviceGroupId: string | null,
        fileName: string,
        name?: string| null,
        serviceGroup?:{name: string | null } | null
    }[],
    stories: Story[],
    onLoadStories: (serviceGroupId: string) => void
}

function StoriesStrip({album,stories, onLoadStories}:props){
    const isWideScreen = useMediaQuery('(min-width: 56.25em)');
    const [storiesList, setStories] = useState<Story[]>([]);

    useEffect(() =>{
        setStories(stories);
    },[stories])

    function sliderCount() { return isWideScreen ? 6 : 3; }
    

    function loadStories(id: string | null) {
        if(id){
            onLoadStories(id);
        }
    }

    function closeStory(){
        setStories([]);
    }

    return <>
        <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={400}
        totalSlides={album.length}
        visibleSlides={sliderCount()}
        isIntrinsicHeight={true}
        step={sliderCount()} dragStep={sliderCount()}
        className="carousel-slider-wrapper"
    >

        <Slider>
            {album?.map((item, i) => <Slide key={'s' + item.serviceGroupId} index={i}>
                <div style={{ borderRadius: '3px', overflow: 'hidden' }}>
                    <div className="story-block" onClick={() => loadStories(item.serviceGroupId)}>
                        <div style={{ position: 'relative', cursor: 'pointer' }}>
                            <Image visibleFrom="md" w={'100%'} h={px('12rem')} radius={'xs'} src={PATH.THUMB_URL + item.fileName} fit="cover" />
                            <Image hiddenFrom="md" w={'100%'} h={px('10rem')} radius={'xs'} src={PATH.THUMB_URL + item.fileName} fit="cover" />
                            <Overlay
                                gradient="linear-gradient(45deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                                opacity={0.85}
                                p={{base: 'xs', md:  'md'}}
                            >
                                <Flex align={'end'} h="100%">
                                    <Text fw={500} c="white">{item?.name || item.serviceGroup?.name || 'Highlights'}</Text>
                                </Flex>
                            </Overlay>
                        </div>
                    </div>
                </div>
            </Slide>)}
        </Slider>
        <ButtonBack className="btn _prev"><IconArrowNarrowLeft /></ButtonBack>
        <ButtonNext className="btn _next"><IconArrowNarrowRight /></ButtonNext>
    </CarouselProvider>
    <Modal.Root opened={!!storiesList.length} onClose={closeStory} p={0} centered>
                <Modal.Overlay />
                <Modal.Content w={472} p={0}>
                    <Modal.Body p={0}>
                        {stories.length ? <Stories
                            stories={stories}
                            defaultInterval={1500}
                            keyboardNavigation={true}
                            width={'100%'}
                            height={'80vh'}
                            onAllStoriesEnd={closeStory}
                        /> : 'Nothing to display'}
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>
</>
}

export type { Story };
export default StoriesStrip;