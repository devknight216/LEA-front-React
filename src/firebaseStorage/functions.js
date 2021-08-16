import firebase from './configure';
import 'firebase/storage'
import 'firebase/database'

const uploadImageToFirebase = async ( file, setProgress, getImageUrl ) => {
    const task = firebase.database().ref('/');
    var key = task.push().key;
    //Get Reference of Firebase store
    let store = firebase.storage();
    let storageRef = store.ref();
    let uploadTask = storageRef.child(`images/property/${file.name.split('.')[0]}${key}`).put(file);
    uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
            let progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100;
            setProgress(progress)
        },(error) =>{
            throw error
        },() =>{
            uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
                getImageUrl(url);
                recordImagedata({name: `${file.name.split('.')[0]}${key}`,url:url})
            })
        }
    )
} 

const recordImagedata = async ( data ) => {
    const task = firebase.database().ref('/property/imageRecord');
    var key = task.push().key;
    var updates = {};
    updates['/' + key] = data;
    return task.update(updates);
}

const removeStore = async () => {
    const task = firebase.database().ref('/property/imageRecord');
    task.remove();
}

export { uploadImageToFirebase, recordImagedata, removeStore };