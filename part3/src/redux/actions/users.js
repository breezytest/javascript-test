import axios from "axios";

export const USER_DETAILS = "USER_DETAILS";
export const USER_DETAILS_ERR = "USER_DETAILS_ERR";
export const WEB_USER_OR_STATUS = "WEB_USER_OR_STATUS";
export const WEB_TEMP_VAL = "WEB_TEMP_VAL";
export const LOC_TEMP_VAL = "LOC_TEMP_VAL";
export const WEB_PERM_VAL = "WEB_PERM_VAL";
export const LOC_PERM_VAL = "LOC_PERM_VAL";
const usersUrl =  "https://jsonplaceholder.typicode.com/users";

export const webOrLocUserStatus = (users = []) => dispatch => {
   dispatch({
      type:WEB_USER_OR_STATUS,
      payload: users
   });
}

export const onChangeWeb = (users = []) =>  dispatch => {
   dispatch({
      type:LOC_TEMP_VAL,
      payload: users
   });
}

export const onChangeLoc = (users = []) =>  dispatch => {
   dispatch({
      type:WEB_TEMP_VAL,
      payload: users
   });
}

export const onSubmitWeb = (users = []) =>  dispatch => {
   dispatch({
      type:WEB_TEMP_VAL,
      payload: users
   });
}

export const onSubmitLoc = (users = []) => dispatch => {
   dispatch({
      type:LOC_PERM_VAL,
      payload: users
   });
}

export const getUsers = () => async dispatch => {
   await axios.get(usersUrl)
   .then(function (response) {
      const status = {
         webEditStatus: false,
         locationEditStatus: false,
         tempWebVal: "",
         tempLatVal: "",
         tempLngVal: ""
      }
      const newResponseObject = [];
      response.data.map((value) => {
         Object.assign(value, status);
         newResponseObject.push(value);
      });
      dispatch({
         type: USER_DETAILS,
         payload: newResponseObject
      });
   }).catch(function (error) {
      dispatch({
         type: USER_DETAILS_ERR,
         payload: error
      });
   })
}