import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddUser() {

    let Navigate = useNavigate()

    const url = "https://account-service.herokuapp.com/api/v1/account"

    const [user, SetUser] = useState({
        name:"",
        email:"",
        dob:""
    })
    const {name, email, dob} = user

    const inputOnChange=(e)=>{
        SetUser({...user, [e.target.name]:e.target.value});
    }

    const OnSubmitForm=async (e)=>{
        e.preventDefault();
        await axios.post(url, user)
        Navigate("/api/accounts")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="py-1 offset-md5 border rounded p-4 mt-2 shadow">User Registration</div>

                <form onSubmit={(e)=>OnSubmitForm(e)}>
                    <div className="p-3 mb-2 col-md-13  offset-md5 border rounded p-4 mt-2 shadow">
                        <div className=" justify-content-center bg-light col-md-12 offset-md5 border rounded p-4 mt-2 shadow ">
                            <div className="mb-3">
                                <label htmlFor={"Name"} className={"form-label text-lg-end"}>FullName</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    placeholder={"Enter your full name"}
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
                                    placeholder={"Enter your e-mail address"}
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
                                    placeholder={"YYYY-MM-DD"}
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