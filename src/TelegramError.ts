import { TelegramErrorPayload } from './types';

export default class TelegramError extends Error {
    code: number | undefined;
    response: TelegramErrorPayload;
    description: string | undefined;

    constructor(payload: TelegramErrorPayload = {}) {
        super(`${payload.error_code}: ${payload.description}`);

        this.name = `Telegram Error`;
        this.code = payload.error_code;
        this.response = payload;
        this.description = payload.description;
    }
}
