import { Story, StoryAlbum } from "~/components/StoriesStrip";
import { PATH } from "~/path.data";

const REMOTE_URL = PATH.GENERAL_ASSETS+'/videos/';
const homePageStoryAlbums: StoryAlbum[] = [
    {
      id: 'album1',
      filePath: REMOTE_URL+'cover-2.mp4',
      name: 'Testimonial',
      type: 'video'
    },
    {
      id: 'album2',
      filePath: REMOTE_URL+'cover-3.mp4',
      name: 'AD/Product',
      type: 'video'
    },
    {
      id: 'album3',
      filePath: REMOTE_URL+'cover-1.mp4',
      name: 'MUA',
      type: 'video'
    },
    {
      id: 'album4',
      filePath: REMOTE_URL+'cover-4.mp4',
      name: 'Wedding',
      type: 'video'
    }];

    const homePageStories:{ [key in string] : Story[]} = {
        album1: [
            {
                url: REMOTE_URL+'t1.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'t2.mp4',
                type:'video',
                preloadResource: true
            }
        ],
        album2: [
            {
                url: REMOTE_URL+'p3.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'p1.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'p2.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'p4.mp4',
                type:'video',
                preloadResource: true
            }
        ],
        album3: [
            {
                url: REMOTE_URL+'m1.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'m2.mp4',
                type:'video',
                preloadResource: true
            }
        ],
        album4: [
            {
                url: REMOTE_URL+'w1.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w2.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w3.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w4.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w5.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w6.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w7.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w8.mp4',
                type:'video',
                preloadResource: true
            }
        ]
    }

    export default {homePageStoryAlbums, homePageStories};