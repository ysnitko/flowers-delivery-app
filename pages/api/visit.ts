// import axios from 'axios';
// import type { NextRequest, NextResponse } from 'next/server';

// export default async function handler(req: NextRequest, res: NextResponse) {
//   // Отправка сообщения в Telegram
//   try {
//     const botToken = process.env.BOT_TOKEN;
//     const chatId = process.env.CHAT_ID;
//     const message = 'Кто-то посетил ваш сайт!';

//     await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//       chat_id: chatId,
//       text: message,
//     });

//     res.ok;
//   } catch (error: any) {
//     console.error('Ошибка при отправке сообщения в Telegram:', error.message);
//   }
// }
