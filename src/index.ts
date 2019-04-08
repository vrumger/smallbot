const request = require(`request-promise`);

import TelegramError from './TelegramError';
import { TelegramResult, TelegramMethod } from './types';

const SmallBot = function (token: string) {
    return new Proxy({ token }, {
        get(bot, method: TelegramMethod) {
            return async (body: any): Promise<TelegramResult> => {
                const url = `https://api.telegram.org/bot${bot.token}/${method}`;

                const result = await request({
                    method: `POST`,
                    uri: url,
                    json: true,
                    body: body,
                    simple: false,
                });

                if (!result.ok) {
                    throw new TelegramError(result);
                }

                return result;
            };
        },
    });
};

export default SmallBot;
