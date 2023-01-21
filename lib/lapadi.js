import { Lapadi } from '@lapadi/node-sdk';
export const lapadi = new Lapadi({
    api: {
        protocol: 'http://',
        host: 'localhost:4000',
        version: 'v1',
    },
    app: {
        id: process.env.NEXT_PUBLIC_LAPADI_APP_ID,
        token: process.env.NEXT_PUBLIC_LAPADI_APP_TOKEN
    }
});

export default lapadi;

