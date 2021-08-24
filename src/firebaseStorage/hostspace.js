import firebase from './configure';
import 'firebase/storage';
import 'firebase/database';

const userId = JSON.parse(localStorage.getItem('user'))?.userID

//Upload Image
export const hostUploadIamge = ( file ) => {
    const destination = firebase.database().ref('/');
    var key = destination.push().key;

    let store = firebase.storage();
    let storageRef = store.ref();
    if(userId){
        let fileUploadDestination = storageRef.child(`/images/property/${userId}/image${key}`).put(file);
        fileUploadDestination.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                let progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100;
            }, (err) => {
                throw err;
            }, () => {
                fileUploadDestination.snapshot.ref.getDownloadURL().then((url) => {
                    hostRecodeUploadedImage({name:`image${key}`, url:url})
                })
            }
        )

    }
}

//Record FileName and Url
export const hostRecodeUploadedImage = ( data ) => {
    const destination = firebase.database().ref(`/property/host_uploaded_recode/${userId}`);
    var updates = {};
    updates['/' + data.name] = data;
    return destination.update(updates);
}

export const hostReadAllUploadedImage = ( getRecords ) => {
    const destination = firebase.database().ref(`/property/host_uploaded_recode/${userId}`);
    destination.on('value', (snapshot) =>{
        if(snapshot.exists()){
            getRecords(snapshot.val());
          }
          else{
            getRecords(null)
          }
    })
}

export const hostDeleteRecord = async ( name ) => {
    const destination = firebase.database().ref(`/property/host_uploaded_recode/${userId}/${name}`);
    await destination.remove();
}

export const hostRemoveAllRecord = async () => {
    const destination = firebase.database().ref(`/property/host_uploaded_recode/${userId}`);
    await destination.remove();
}

export const hostDeleteImage = async (url) => {
    let pictureRef = firebase.storage().refFromURL(url);
    pictureRef.delete();
}