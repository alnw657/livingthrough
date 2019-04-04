export const FIREBASE_CONFIG = {
 apiKey: "AIzaSyBS4jK21VSZRG8dHIw9jaQU0aL9fndmrJ8",
    authDomain: "livingthrough-1538047804149.firebaseapp.com",
    databaseURL: "https://livingthrough-1538047804149.firebaseio.com",
    projectId: "livingthrough-1538047804149",
    storageBucket: "livingthrough-1538047804149.appspot.com",
    messagingSenderId: "179988441006"
}

export const snapshotToArray = snapshot => {
let returnArray = [];
snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
    });
    return returnArray;
}