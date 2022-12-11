/* const getPersonList = (firstname: string, lastname: string, yearOfBirth: number, isFemale: boolean) : string => {
    return `<ul>
    <li><b>Förnamn:</b>${firstname}</li>
    <li><b>Efternamn:</b>${lastname}</li>
    <li><b>Födelseår:</b>${yearOfBirth}</li>
    <li><b>Man / kvinna:</b>${isFemale ? "Kvinna" : "Man"}</li>
    </ul>`;
}

const personHTML: string = getPersonList("Theodor", "Will", 1993, false);

console.log(getPersonList("Theodor", "Will", 1993, false)); */

interface Person {
    firstname: string;
    lastname: string;
    yearOfBirth: number;
    isFemale: boolean;
}

const me: Person = {
    firstname: 'random',
    lastname: 'name',
    yearOfBirth: 1993,
    isFemale: false
}

const getPersonList = (person: Person): string => {
    return `<ul>
    <li><b>Förnamn:</b>${person.firstname}</li>
    <li><b>Efternamn:</b>${person.lastname}</li>
    <li><b>Födelseår:</b>${person.yearOfBirth}</li>
    <li><b>Man / kvinna:</b>${person.isFemale ? "Kvinna" : "Man"}</li>
    </ul>`;
}

console.log(getPersonList(me))