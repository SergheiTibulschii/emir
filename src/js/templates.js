export const templates = {
    sms: (userName, number) =>
        `Привет, я ${userName}. Напомни мне пожалуйста о вебинаре через смс. Мой номер: ${number}`,
    tel: (userName, number) =>
        `Привет, я ${userName}. Напомни мне пожалуйста о вебинаре через телегу. Мой номер: ${number}`,
    viber: (userName, number) =>
        `Привет, я ${userName}. Напомни мне пожалуйста о вебинаре через вайбер. Мой номер: ${number}`,
    wa: (userName, number) =>
        `Привет, я ${userName}. Напомни мне пожалуйста о вебинаре через whatsapp. Мой номер: ${number}`,
    mail: (userName, number) =>
        `Привет, я ${userName}. Напомни мне пожалуйста о вебинаре через емайл. Моя почта: ${number}`,
};
