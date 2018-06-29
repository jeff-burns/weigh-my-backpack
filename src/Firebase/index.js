import firebase from 'firebase';

export default {
    initialize: () => {
        firebase.initializeApp({
            apiKey: 'AIzaSyAHxP2lCe5U3-NDi4f4IAi-QGzXJbQkO_E',
            authDomain: 'manager-c16fa.firebaseapp.com',
            databaseURL: 'https://manager-c16fa.firebaseio.com',
            projectId: 'manager-c16fa',
            storageBucket: '',
            messagingSenderId: '105184938661'
        });
    },
    signInWithEmailAndPassword: (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    createUserWithEmailAndPassword: (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    saveToDatabase: ({ name, phone, shift }) => {
        const { currentUser } = firebase.auth();
        return firebase
            .database()
            .ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift });
    },
    update: ({ name, phone, shift, uid }) => {
        const { currentUser } = firebase.auth();
        return firebase
            .database()
            .ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift });
    },
    fetchEmployees: () => {
        const { currentUser } = firebase.auth();
        return firebase.database().ref(`/users/${currentUser.uid}/employees`);
    },
    delete: uid => {
        const { currentUser } = firebase.auth();
        return firebase
            .database()
            .ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove();
    }
};
