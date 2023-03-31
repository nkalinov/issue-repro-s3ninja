import {GetObjectCommand, S3Client} from '@aws-sdk/client-s3';

const s3Client = new S3Client({
    endpoint: 'http://localhost:9000',
    forcePathStyle: true,
    logger: {
        trace: (...content) => {
            console.log(...content);
        },
        debug: (...content) => {
            console.log(...content);
        },
        info: (...content) => {
            console.log(...content);
        },
        warn: (...content) => {
            console.log(...content);
        },
        error: (...content) => {
            console.error(...content);
        },
    }
});

try {
    const {Body} = await s3Client.send(
        new GetObjectCommand({
            Key: 'test',
            Bucket: 'test',
        })
    );

    console.log('Body has transformToString method', !!Body.transformToString);
    const bodyAsString = await Body.transformToString();
    console.log('bodyAsString', bodyAsString);

    process.exit(0);
} catch (e) {
    console.error(e)
    process.exit(1);
}