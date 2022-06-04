class CrazyGamesAds {
    getInfo() {
        return {
            id: 'CrazyGamesAds',
            name: 'CrazyGames Ads',
            blocks: [
                {
                    opcode: 'requestAd',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'request ad'
                }
            ]
        };
    }
    requestAd() {
    }
}
Scratch.extensions.register(new CrazyGamesAds());