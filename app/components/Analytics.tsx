import { useLocation } from "@remix-run/react";
import { useEffect } from "react";
import { initFBPixel, setPageAnalytics } from "~/service/analytics.service";
import { startTracker } from "~/tracker";
import TagManager from 'react-gtm-module';

const Analytics ={
    Pixel: (input: { pixelId?: string | null }) =>{
        const location = useLocation();

        useEffect(() =>{
            if(input.pixelId){
                initFBPixel(input.pixelId);
                setPageAnalytics();
            }
        },[]);

        useEffect(() => {
            setPageAnalytics();
        }, [location.pathname])

        return <></>
    },
    OpenReply: (input: { projectkey?: string | null }) =>{
        useEffect(() => {
            if (input.projectkey) {
                startTracker({
                    projectKey: input.projectkey
                });
            }
        }, []);

        return <></>;
    },
    GoogleTag: (input:{ gtmId?: string | null, userId?: string | null}) =>{
        useEffect(() =>{
            if(input.gtmId){
                const tagManagerArgs = {
                    gtmId: input.gtmId,
                    dataLayer: {
                        userId: input.userId,
                        userProject: 'project'
                    }
                }

            TagManager.initialize(tagManagerArgs);
            }
        },[input.userId])
        return <></>;
    }
}

export default Analytics;