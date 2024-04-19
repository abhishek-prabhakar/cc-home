import { v4 as uuidV4 } from 'uuid'

export const OPENREPLY_KEY = 'rTOIL6yXtT3QWBpBcTSB';

function defaultGetUserId() {
    return uuidV4()
}

type TrackerConfig = {
    projectKey: string,
    userIdEnabled?: boolean,
    getUserId?: () => string
}

export function startTracker(config: TrackerConfig) {
    let tracker = null;
    let Tracker = null
    let userId = "";

    (async () => {
        //dynamic import 
        Tracker = (await import('@openreplay/tracker')).default

        const getUserId = (config?.userIdEnabled && config?.getUserId) ? config.getUserId : defaultGetUserId

        const trackerConfig: TrackerConfig = {
            projectKey: config?.projectKey
        }

        tracker = new Tracker(trackerConfig);

        if (config?.userIdEnabled) {
            userId = getUserId()
            tracker.setUserID(userId)
        }


        tracker.start();

    })()

    return {
        tracker,
        userId
    }
}