class CrazyGamesAds {
    // ...
    getInfo() {
        return {
            id: 'CrazyGamesAds',
            name: 'CrazyGames Ads',
            blocks: [
                {
                    opcode: 'requestAd',
                    blockType: 'command',
                    text: 'request ad',
                    arguments: {
                    }
                }
            ],

            menus: {

            }
        };
    }
    requestAd({ }) {
        console.log('hi');
    }
}
Scratch.extensions.register(new CrazyGamesAds());