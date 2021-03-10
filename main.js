// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin (user) {
    return user.userRole === 'ADMIN' ? true : false;
}

function getEmail (user) {
    return user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase() + '@codeimmersives.com';
}

function getPlaylistLength (playlist) {
    return playlist.songs.length;
}

function getHardestHomework (homeworks) {
    let hardestHomeworkName = '';
    let score = 101;
    for (const homework of homeworks) {
            if(homework.averageScore < score){
                score = homework.averageScore;
                hardestHomeworkName = homework.name;
            }
    }
    return hardestHomeworkName;
}

function createPhonebook (people, phoneNumbers) {
    let phoneBook = {};
    for (let i = 0; i < people.length; i++){
        phoneBook[people[i]] = phoneNumbers[i];
    }
    return phoneBook;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘


if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};