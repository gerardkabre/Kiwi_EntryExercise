const months = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dic: 12
}

function dateFormatter(date) {
    const dateArray = date.toString().split(' ');
    const month = monthToNumber(dateArray[1]);
    const day = dateArray[2];
    const year = dateArray[3];
    return `${day}/${month}/${year}`;
}

function monthToNumber(month) {
    for (let key in months) {
        if (key === month) return months[key]
    }
}

export default dateFormatter;



