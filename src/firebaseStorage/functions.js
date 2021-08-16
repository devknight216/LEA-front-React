import firebase from './configure';
import 'firebase/storage'
import 'firebase/database'

const uploadImageToFirebase = async ( file, setProgress, getImageUrl ) => {
    const task = firebase.database().ref('/');
    console.log(file);
    var key = task.push().key;
    //Get Reference of Firebase store
    let store = firebase.storage();
    let storageRef = store.ref();
    let uploadTask = storageRef.child(`images/property/image${key}`).put(file);
    uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
            let progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100;
            setProgress(progress)
        },(error) =>{
            throw error
        },() =>{
            uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
                getImageUrl(url);
                recordImagedata({name:`image${key}`, url:url})
            })
        }
    )
} 

const recordImagedata = async ( data ) => {
    const task = firebase.database().ref('/property/imageRecord');
    var updates = {};
    updates['/' + data.name] = data;
    return task.update(updates);
}

const removeStore = async () => {
    const task = firebase.database().ref('/property/imageRecord');
    task.remove();
}

const deleteImage = async (url) => {
    let pictureRef = firebase.storage().refFromURL(url);
    pictureRef.delete();
}

export { uploadImageToFirebase, recordImagedata, removeStore, deleteImage };