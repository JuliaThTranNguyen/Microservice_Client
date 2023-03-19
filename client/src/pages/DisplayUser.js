import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
export default function DisplayUser() {
    const [user, setUser] = useState([]);


    const url = "https://account-service.herokuapp.com/api/v1/account"

    useEffect(() => {
        loadUsers();
    },[]);

    const DeleteUser = async (id, url) => {
        try{
            const result = await axios.delete(url+`/user/${id}`)
                .then(() => true)
            console.log(result.data);
            console.log(id);
            console.log(url+`/user/${id}`);
            loadUsers();
        }catch (e) {
            console.log(e);
        }
    }

    const loadUsers=async () => {
        try{
            const result = await axios.get(url);
            setUser(result.data);
            console.log(result.data);
        }catch (e){
            console.log(e);
        }
    };

    const ListALLUsers = user.map((person, index) =>
            <tr key={index}>
                <th scope="row" key={index}>{index+1}</th>
                <td >{person.id}</td>
                <td >{person.name}</td>
                <td >{person.email}</td>
                <td >{person.age}</td>
                <td >
                    <Link className="btn btn-primary mx-2 btn-outline-light"
                        to={`/view/${person.id}`}
                    >View</Link>
                    <Link className="btn btn-success mx-2 btn-outline-light"
                          to={`/editUser/${person.id}`}
                    >Edit</Link>
                    <button className="btn btn-warning mx-2 btn-outline-light"
                        onClick={() => DeleteUser(person.id, url)}
                    >Delete{person.id}</button>
                </td>
            </tr>
    );


    return (
        <div className="container">
                <div className="py-4">
                    <div className="py-1 text-bg-info">Fetching Account data from Springboot server</div>

                    <table className="table border-3 shadow">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {ListALLUsers}
                        </tbody>
                    </table>
                </div>
        </div>
    )
}