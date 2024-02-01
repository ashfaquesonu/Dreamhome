import axios from "axios";

export const addEngineers = async (userData) => {
    try {
        const { data } = await axios.post('/api/engineers', {
            userData
        });
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

export const updateEngineer = async (engineerId, userData) => {
    try {
        const { data } = await axios.put(`/api/engineers/updateEngineer/${engineerId}`, {
            userData
        });
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

export const deleteEngineer = async (engineerId) => {
    try {
        const { data } = await axios.delete(`/api/engineers/deleteEngineer/${engineerId}`);
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
