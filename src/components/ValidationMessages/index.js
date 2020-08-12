export const GetMessages = (elem) => {
    const messages = [];
    if (elem.validity.valueMissing) {
        messages.push('Заполните поле');
    }
    if (elem.validity.typeMismatch) {
        messages.push(`Недействительный ${elem.type}`);
    }
    return messages;
};
