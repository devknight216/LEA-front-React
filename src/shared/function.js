import moment from 'moment';
import { uploadFile, deleteFile } from 'react-s3';

export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export function getDaysArray(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

//AWS S3 Image Upload 



export const uploadImageToAWS  = async(file, dirName) => {
    const config = {
        bucketName: 'legendarystorage',
        dirName: dirName, 
        region: 'us-east-2',
        accessKeyId: 'AKIA6IJYQ7CQDV4HXQWM',
        secretAccessKey: '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'
    }
    const res = await uploadFile(file, config);
    return res;       
}