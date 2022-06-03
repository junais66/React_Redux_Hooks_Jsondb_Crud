import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from '../redux/actions';

export default function AddUser() {
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [error, setError] = useState("");

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const { name, email, contact, address } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !email || !contact) {
            setError("Please enter the details");
        } else {
            dispatch(addUser(state));
            navigate("/");
            setError("");
        }
    }

    return (
        <div>
            <div className="container">
                <hr />
                <div className="col-md-6">
                    <h2>Please enter the user details</h2>
                    <hr />
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <div class="form-row">
                            <div className="form-group  col-md-6">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control" value={name}
                                    name="name"
                                    onChange={handleInputChange} />
                            </div>
                            <br />

                            <div className="form-group  col-md-6">
                                <label for="exampleInputEmail1">email</label>
                                <input type="text" className="form-control"
                                    name="email"
                                    value={email} onChange={handleInputChange} />
                            </div>
                            <br />

                            <div className="form-group  col-md-6">
                                <label for="exampleInputEmail1">Contact</label>
                                <input type="text" className="form-control"
                                    name="contact"
                                    value={contact} onChange={handleInputChange} />
                            </div>
                            <br />
                            <div className="form-group  col-md-6">
                                <label for="exampleInputEmail1">Address</label>
                                <input type="text" className="form-control"
                                    name="address"
                                    value={address} onChange={handleInputChange} />
                            </div>
                            <br />
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button className='btn btn-success' >  <i className="fa fa-plus"></i> Submit </button>
                                <button className='btn btn-danger' onClick={() => navigate("/")}>Go Back </button>
                            </div>
                            <br />
                            <div>
                                {error &&
                                    <h3 style={{ color: "red" }}>{error}</h3>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
