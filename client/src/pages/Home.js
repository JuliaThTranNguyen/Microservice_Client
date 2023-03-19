import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
                <div className={"container bg-light p-3 mb-2 col-md-13  offset-md5 border rounded p-4 mt-2 shadow"}>
                    <div className=" justify-content-center bg-light col-md-12 offset-md5 border rounded p-4 mt-2 shadow ">
                        <div className="row">
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="https://github.com/e1800930/MicroService_Webservices/blob/master/assets/Microservice_Architecture.png?raw=true" className="card-img-top" alt="Microservice" />
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Introduction to the 2023 - Web Service course.</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="https://github.com/e1800930/MicroService_Webservices/blob/master/assets/intro.png?raw=true" alt="Intro"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Project Architecture Diagram</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="https://github.com/e1800930/MicroService_Webservices/blob/master/assets/CRUD.png?raw=true" alt="crud"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Simple CRUD Architecture & Explanation</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="https://github.com/e1800930/MicroService_Webservices/blob/master/assets/heroku.png?raw=true" alt="heroku"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Simple Heroku Architecture & Explanation</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="https://github.com/e1800930/MicroService_Webservices/blob/master/assets/java.png?raw=true" alt="java"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Account Service model with SpringBoot & PostgreSQL</p>
                                </div>
                                <Link className={"btn btn-outline-light bg-primary"} to={"/api/accounts"}>Accounts</Link>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="https://github.com/e1800930/MicroService_Webservices/blob/master/assets/dotnet.png?raw=true" alt="dotnet"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Shipping Service model with C# - Dotnet & PostgreSQL</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="https://github.com/e1800930/MicroService_Webservices/blob/master/assets/python.png?raw=true" alt="python"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Shopping Service model with Django & PostgreSQL</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}