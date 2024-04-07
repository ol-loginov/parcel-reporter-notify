//@flow
import {Reporter} from '@parcel/plugin';
import path from 'path';
import notifier from "node-notifier";

const goodIcon = path.join(__dirname, 'notify.png');
const badIcon = path.join(__dirname, 'notify-error.png');

const notifierOptions = {
    sound: true,
    title: 'Parcel notify'
};

// noinspection JSUnusedGlobalSymbols
export default new Reporter({
    async report(opts: { event: { type: string }, options: PluginOptions }) {
        if (opts.event.type === 'buildSuccess') {
            notifier.notify({...notifierOptions, icon: goodIcon, message: 'Build success!'});
        }
        if (opts.event.type === 'buildFailure') {
            notifier.notify({...notifierOptions, icon: badIcon, message: `Build is broken, bro...`});
        }
    },
});
