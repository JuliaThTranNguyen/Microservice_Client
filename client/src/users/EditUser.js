import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditUser() {

    let Navigate = useNavigate()

    let {id} = useParams()

    const url = `https://account-service.herokuapp.com/api/v1/account/user/${id}`

    const [user, SetUser] = useState({
        name:"",
        email:"",
        dob:""
    });
    const { name, email, dob} = user;

    const inputOnChange=(e)=>{
        SetUser({...user, [e.target.name]:e.target.value});
    }
    const loadUsers = useCallback(async () => {
        try{
            const result = await axios.get(url);
            SetUser(result.data);
            console.log(url)
            console.log(result.data);
        }catch (e) {
            console.log(e);
        }
    }, [url]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    const OnSubmitForm=async (e)=>{
        e.preventDefault();
        await axios.put(url, user);
        Navigate("/api/accounts");
    };


    return (
        <div className="container">
            <div className="row">
                <div className="py-1 offset-md5 border rounded p-4 mt-2 shadow">Edit User {id}</div>

                <form onSubmit={(e)=>OnSubmitForm(e)}>
                    <div className="p-3 mb-2 col-md-13  offset-md5 border rounded p-4 mt-2 shadow">
                        <div className=" justify-content-center bg-light col-md-12 offset-md5 border rounded p-4 mt-2 shadow ">
                            <div className="mb-3">
                                <label htmlFor={"Name"} className={"form-label text-lg-end"}>FullName</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    placeholder={user.name}            //{"Enter your Full Name"}
                                    name={"name"}
                                    value={name}
                                    onChange={(e)=>inputOnChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor={"Email"} className={"form-label text-lg-end"}>Email</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    placeholder={user.email}        //{"Enter your e-mail address"}
                                    name={"email"}
                                    value={email}
                                    onChange={(e)=>inputOnChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor={"DOB"} className={"form-label text-lg-end"}>Day of Birth</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    placeholder={user.dob}        //{"YYYY-MM-DD"}
                                    name={"dob"}
                                    value={dob}
                                    onChange={(e)=>inputOnChange(e)}
                                />
                            </div>

                            <button type={"submit"} className={"btn btn-outline-secondary"}>Submit</button>
                            <Link className={"btn btn-outline-warning"} to={"/"}>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}