/* Write a function for extracting all email addresses from given text.
   All sub-strings that match the format @… should be recognized as emails.
   Return the emails as array of strings. */

function extractEmails(text) {
    return text.match(/\b[A-z][_A-z0-9]+@\w+\.\w+/g);
}

var text = 'My email is nina26@abv.bg, my grand-mother email is baba@softuni.bg, na lelia e lelia_mi17@gmail.com';
console.log(extractEmails(text));

