class CrazyGamesAds {
    getInfo() {
        return {
            id: 'CrazyGamesAds',
            name: 'CrazyGames Ads',
            blocks: [
                {
                    opcode: 'requestAd',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'request ad',
                    arguments: {
                    }
                }
            ],
        };
    }
    requestAd() {
    }
}
Scratch.extensions.register(new CrazyGamesAds());