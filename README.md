# SmallBot

> Small telegram bot library.

## Installation

```sh
npm i smallbot
```

## Usage

### Init (javascript)

```js
const SmallBot = require('smallbot').default;
const bot = new SmallBot('token');
```

### Init (typescript)

```ts
import SmallBot from 'smallbot';
const bot = new SmallBot('token');
```

### Sending requests

`bot.<TelegramMethod>()`

### Return types

- `Promise<TelegramResult>`

  - Returned when `ok` is `true`

- `TelegramError`

  - Raised when `ok` is `false`

## Typescript

- `TelegramError` from `smallbot/lib/TelegramError`
- `{ TelegramErrorPayload }` from `smallbot/lib/types`
- `{ TelegramResult }` from `smallbot/lib/types`
- `{ TelegramMethod }` from `smallbot/lib/types`
