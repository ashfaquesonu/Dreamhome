import axios from "axios";

export const addEngineers = async (userData) => {
    try {
        const { data } = await axios.post('/api/engineers', {
            userData
        });
        console.log(data);
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

export const getAllEngineers = async () => {
    try {
        const { data } = await axios.post('/api/engineers/getAllEngineers');
        console.log(data);
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