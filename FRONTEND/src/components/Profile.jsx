import axios from 'axios'
import {useEffect, useState} from 'react'


function Profile(){

    const [data, setData] = useState([])

    async function fetchData(){
        const data = await axios.get('http://localhost:3000/user/history')
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (<>

        <h1> In Profile section</h1>
        {data.map((item) => {
            <div>
                <h1>{item.amount}</h1>
                <h1>{item.balance}</h1>
                <h1>{item.date}</h1>
            </div>
        
        })}
    </>)
}


export default Profile