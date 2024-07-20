import { useLocation } from "@remix-run/react";
import { useEffect } from "react";
import { initFBPixel, setPageAnalytics } from "~/service/analytics.service";
import { startTracker } from "~/tracker";

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
    }
}

export default Analytics;