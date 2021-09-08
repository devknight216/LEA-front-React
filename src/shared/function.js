import moment from 'moment';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
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
        bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
        dirName: dirName, 
        region: process.env.REACT_APP_AWS_REGION,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    }
    const res = await uploadFile(file, config);
    return res;       
}

//Private Route
export function PrivateRoute({ children,  isAuth, ...rest}) {
    const authUser = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    let auth = false;
    if(token && authUser.role === 'user'){
      auth = true;
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}


//Default Header
export const setDefaultHdeader = () => {
  const token = useSelector((state) => state.auth.token);
    axios.defaults.headers.common['Authorization'] =  `${token}`;
    axios.defaults.headers.common['X-Requested-With'] =  `XMLHttpRequest`;
    axios.defaults.headers.common['Content-Type'] =  `application/json`;
}
  