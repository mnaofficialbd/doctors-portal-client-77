import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('https://mna-doctors-portal.herokuapp.com/user').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-2xl text-center'>All Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index )=><UserRow
                            key={user._id}
                            index={index}
                            user={user}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;