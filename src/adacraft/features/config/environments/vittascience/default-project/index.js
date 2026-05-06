const assetId = '3071275c1077cd6b11953b25eece18ae'
import assetContent from '!raw-loader!./3071275c1077cd6b11953b25eece18ae.svg';

export default {
    blocks: {
        '^J6p3^:4weg)AoDq2E3Q': {
            opcode: 'event_whenflagclicked',
            next: 'UMN=a*UxIePF)/x/5kNZ',
            parent: null,
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: true,
            x: 187,
            y: 123
        },
        'UMN=a*UxIePF)/x/5kNZ': {
            opcode: 'looks_sayforsecs',
            next: null,
            parent: '^J6p3^:4weg)AoDq2E3Q',
            inputs: {
                MESSAGE: [
                    1,
                    [
                        10,
                        'Bonjour !'
                    ]
                ],
                SECS: [
                    1,
                    [
                        4,
                        '2'
                    ]
                ]
            },
            fields: {},
            shadow: false,
            topLevel: false
        }
    },
    costume: {
        assetContent,
        assetType: 'ImageVector',
        projectData: {
            assetId,
            name: 'Vittabot',
            bitmapResolution: 1,
            md5ext: `${assetId}.svg`,
            dataFormat: 'svg',
            rotationCenterX: 45,
            rotationCenterY: 83
        }
    }
};