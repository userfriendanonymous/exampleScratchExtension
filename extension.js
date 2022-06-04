class CrazyGamesAds {
    getInfo() {
        return {
            id: 'crazygamesads',
            name: 'CrazyGames Ads',
            blocks: [
                {
                    opcode: 'requestad',
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