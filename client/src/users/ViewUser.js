import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function ViewUser() {

    let Navigate = useNavigate()

    const {id} = useParams();

    const url = `https://account-service.herokuapp.com/api/v1/account/user/${id}`

    const [user, SetUser] = useState({
        name:"",
        email:"",
        dob:""
    });

    const LoadUser = useCallback(async () => {
        try{
            const result = await axios.get(url);
            SetUser(result.data);
            console.log(result.data);
        }catch (e){
            console.log(e);
        }
    }, [url])
    useEffect(() => {
        LoadUser();
    }, [LoadUser]);

    const BtnOnClick = async (e) => {
        e.preventDefault();
        Navigate("/api/accounts")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="py-1 offset-md5 border rounded p-4 mt-2 shadow">
                    <h2 className={"text-center m-4"}>User Details {user.id}</h2>

                    <div className={"card"}>
                        <div className={"card-header"}>
                            Details of User with id: {id}
                            <ul className={"list-group list-group-flush"}>
                                <li className={"list-group-item"}>
                                    <b>UserName:<td className={"px-2 fw-light"}>{user.name}</td></b>
                                </li>
                                <li className={"list-group-item"}>
                                    <b>E-mail:<td className={"px-2 fw-light"}>{user.email}</td></b>
                                </li>
                                <li className={"list-group-item"}>
                                    <b>Day of birth:<td className={"px-2 fw-light"}>{user.dob}</td></b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className={"btn btn-outline-primary my-2"} to={"/api/accounts"} onClick={(e) => BtnOnClick(e)}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}