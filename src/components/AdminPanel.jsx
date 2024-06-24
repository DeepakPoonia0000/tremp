import React from 'react'

const AdminPanel = () => {

    const [userData, setUserData] = useState({
        name: "",
        password: "",
    });

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:4000/addUsers', userData);
            console.log("response is =>", response.data);
        } catch (error) {
            console.log("The error on the frontend is =>", error);
        }
    };

    


    return (
        <div>
            <input type="text" name='name' />
            <input type="password" name="password" id="" />
        </div>
    )
}

export default AdminPanel