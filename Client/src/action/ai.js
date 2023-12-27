import axios from 'axios'

export const ai = async (selectedModel, room, image ) => {
 console.log(room,image,selectedModel)
    try {
        const { data } = await axios.post('/api/ai', {
            selectedModel,
            room,
            image,
        });
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};