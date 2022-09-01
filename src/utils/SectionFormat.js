export function SectionFormat(contacts) {
  let contactsArr = [];
  let aCode = 'A'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    let currChar = String.fromCharCode(aCode + i);
    let obj = {
      title: currChar,
    };

    let currContacts = contacts.filter(item => {
      return item.first_name[0].toUpperCase() === currChar;
    });
    if (currContacts.length > 0) {
      currContacts.sort((a, b) => a.first_name.localeCompare(b.first_name));
      obj.data = currContacts;
      contactsArr.push(obj);
    }
  }
  return contactsArr;
}
