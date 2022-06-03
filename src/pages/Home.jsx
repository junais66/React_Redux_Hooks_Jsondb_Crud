import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUser } from '../redux/actions';
import { useNavigate } from 'react-router-dom';


export default function Home() {

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const { users } = useSelector(state => state.data);
    useEffect(() => {
        dispatch(loadUser());
    }, []);
    const handleDelete = (id) => {
        if(window.confirm("Are you sure wate to delete the user?")){
            dispatch(deleteUser(id));
        }
    }
    return (
        <div className="hero">
            <hr />
            <div className="container">
            <button className='btn btn-primary center' onClick={()=> navigate("/addUser")}> <i className="fa fa-user-plus"></i> Add User</button>
            </div>
            <hr />
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.name}</th>
                                <td>{user.email} </td>
                                <td>{user.contact} </td>
                                <td>{user.address} </td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button className='btn btn-success' onClick={()=> navigate(`/editUser/${user.id}`)}>
                                            <i className="fa fa-pencil-square-o"></i>
                                            </button>
                                        <button className='btn btn-danger' onClick={() => handleDelete(user.id)}><i className="fa fa-trash-o"></i></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
