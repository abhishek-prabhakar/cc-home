import { Story, StoryAlbum } from "~/components/StoriesStrip";
import { PATH } from "~/path.data";

const REMOTE_URL = PATH.GENERAL_ASSETS+'/videos/';
const homePageStoryAlbums: StoryAlbum[] = [
    {
      id: 'album1',
      filePath: REMOTE_URL+'cover-2a.mp4',
      name: 'Testimonial',
      type: 'video'
    },
    {
      id: 'album2',
      filePath: REMOTE_URL+'cover-3a.mp4',
      name: 'AD/Product',
      type: 'video'
    },
    {
      id: 'album3',
      filePath: REMOTE_URL+'cover-1a.mp4',
      name: 'MUA',
      type: 'video'
    },
    {
      id: 'album4',
      filePath: REMOTE_URL+'cover-4a.mp4',
      name: 'Wedding',
      type: 'video'
    }];

    const homePageStories:{ [key in string] : Story[]} = {
        album1: [
            {
                url: REMOTE_URL+'t1a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'t2a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'t3a.mp4',
                type:'video',
                preloadResource: true
            }
        ],
        album2: [
            {
                url: REMOTE_URL+'p1a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'p3a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'p2a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'p4a.mp4',
                type:'video',
                preloadResource: true
            }
        ],
        album3: [
            {
                url: REMOTE_URL+'m1a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'m2a.mp4',
                type:'video',
                preloadResource: true
            }
        ],
        album4: [
            {
                url: REMOTE_URL+'w1a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w2a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w3a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w4a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w5a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w6a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w7a.mp4',
                type:'video',
                preloadResource: true
            },
            {
                url: REMOTE_URL+'w8a.mp4',
                type:'video',
                preloadResource: true
            }
        ]
    }

    export default {homePageStoryAlbums, homePageStories};