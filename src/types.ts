export interface TelegramErrorPayload {
    error_code?: number;
    description?: string;
};

export interface TelegramResult {
    ok: boolean;
    result: object;
};

export type TelegramMethod = 'getMe' |
    'sendMessage' |
    'Formatting options' |
    'forwardMessage' |
    'sendPhoto' |
    'sendAudio' |
    'sendDocument' |
    'sendVideo' |
    'sendAnimation' |
    'sendVoice' |
    'sendVideoNote' |
    'sendMediaGroup' |
    'sendLocation' |
    'editMessageLiveLocation' |
    'stopMessageLiveLocation' |
    'sendVenue' |
    'sendContact' |
    'sendChatAction' |
    'getUserProfilePhotos' |
    'getFile' |
    'kickChatMember' |
    'unbanChatMember' |
    'restrictChatMember' |
    'promoteChatMember' |
    'exportChatInviteLink' |
    'setChatPhoto' |
    'deleteChatPhoto' |
    'setChatTitle' |
    'setChatDescription' |
    'pinChatMessage' |
    'unpinChatMessage' |
    'leaveChat' |
    'getChat' |
    'getChatAdministrators' |
    'getChatMembersCount' |
    'getChatMember' |
    'setChatStickerSet' |
    'deleteChatStickerSet' |
    'answerCallbackQuery';
