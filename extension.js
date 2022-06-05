class CrazyGamesAds {
    constructor() { }
    getInfo() {
        return {
            id: 'crazygamesads',
            name: 'CrazyGames Ads',
            color1: '#8BC34A',
            color2: '#7CB342',
            color3: '#689F38',
            blocks: [
                {
                    opcode: 'requestad',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'request ad'
                }
            ]
        };
    }
    requestad() {
    }
}
Scratch.extensions.register(new CrazyGamesAds());