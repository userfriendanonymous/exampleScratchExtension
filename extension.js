const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

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
    requestad() {
    }
}
Scratch.extensions.register(new CrazyGamesAds());