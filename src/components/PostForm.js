import React, { useState } from 'react';
import Axios from 'axios';

const PostForm = ()=>{
    const url = "http://18.223.202.42:3001/api/users"
    const [data, setData] = useState({
        name: "",
        age: "",
        email: "",
        login: "",
        password: "",
        address: ""
    })

    function handle(e){
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            age: data.age,
            email: data.email,
            login: data.login,
            password: data.password,
            address: data.address,
        })
        .then(res=>{
            console.log(res.data)
        })

    }

    return(
        <>
        <h1 className="text-center py-5">Insert Data to API</h1>
        <form onSubmit={(e)=>submit(e)}>
            <div className="row">
                <div className="col">
                    <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" class="form-control my-3" placeholder="Name" />
                </div>
                <div className="col">
                    <input onChange={(e)=>handle(e)} id="age" value={data.age} type="text" class="form-control my-3" placeholder="Age" />
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" class="form-control my-3" placeholder="email" />
                </div>
                <div className="col">
                    <input onChange={(e)=>handle(e)} id="login" value={data.login} type="text" class="form-control my-3" placeholder="login" />
                </div>
            </div>


                <input onChange={(e)=>handle(e)} id="password" value={data.password} type="text" class="form-control my-3" placeholder="password" />
                <input onChange={(e)=>handle(e)} id="address" value={data.address} type="text" class="form-control my-3" placeholder="address" />
            <button className="btn btn-success m-5">Submit</button>
        </form>
        </>
    )
}

export default PostForm