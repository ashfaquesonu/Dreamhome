import axios from 'axios';
export const login = async ({ email, password },updateMyState) => {
    try {
        const { data } = await axios.post('/api/users/login', {
            email,
            password,
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
        updateMyState(data)
    } catch (error) {
        console.error('Error:', error);
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            console.error('Server Error Message:', errorMessage);
            // dispatch(loginFailure(errorMessage));
        } else {
            console.error('Generic Error');
            //dispatch(loginFailure("Something went wrong"));
        }
    }
};

export const registerUser = async (userData,updateMyState) => {
    try {
        const { data } = await axios.post('/api/users', {
            userData
        });
        //dispatch(loginSuccess(data))
        localStorage.setItem('userInfo', JSON.stringify(data));
        updateMyState(data)
    } catch (error) {
        //dispatch(loginFailure());
        console.error('Error:', error);

        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            console.error('Server Error Message:', errorMessage);
            //dispatch(loginFailure(errorMessage));
        } else {
            console.error('Generic Error');
            //dispatch(loginFailure("Something went wrong"));
        }
    }
};
