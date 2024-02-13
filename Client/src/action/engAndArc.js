import axios from "axios";
import { loginSuccess } from "../reducers/userReducer";

// export const addEngineers = async (userData) => {
//     try {
//         const { data } = await axios.post('/api/engineers', {
//             userData
//         });
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);

//         if (error.response && error.response.data) {
//             const errorMessage = error.response.data.message;
//             console.error('Server Error Message:', errorMessage);
//         } else {
//             console.error('Generic Error');
//         }
//     }
// };

export const getAllEngineers = async () => {
    try {
        const { data } = await axios.get('/api/engineers/getAllEngineers');
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);

        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            console.error('Server Error Message:', errorMessage);
        } else {
            console.error('Generic Error');
        }
    }
};

export const profileUpdate = (engineerId, userData) => async (dispatch) => {
    console.log(userData);
    try {
        const { data } = await axios.put(`/api/engineers/profileUpdate/${engineerId}`, {
            userData
        });
        dispatch(loginSuccess(data))
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        console.error('Error:', error);

        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            console.error('Server Error Message:', errorMessage);
        } else {
            console.error('Generic Error');
        }
    }
};

export const deleteUser = async (engineerId) => {
    try {
        const { data } = await axios.delete(`/api/engineers/deleteUser/${engineerId}`);
        console.log(data);
    } catch (error) {
        console.error('Error:', error);

        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            console.error('Server Error Message:', errorMessage);
        } else {
            console.error('Generic Error');
        }
    }
};


export const updateRole = (userId, userData) => async (dispatch) => {
    console.log(userData);
    try {
        const { data } = await axios.put(`/api/engineers/updateRole/${userId}`, {
            userData
        });

    } catch (error) {
        console.error('Error:', error);

        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            console.error('Server Error Message:', errorMessage);
        } else {
            console.error('Generic Error');
        }
    }
};