import {useState} from 'react';
import Auth from '../utils/auth'
import {ADD_USER} from '../utils/mutations';
import { useMutation } from '@apollo/client';

const Signup = () => {
    const [userFormData, setUserFormData] = useState({ username: '', firstName: '', lastName: '', email: '', password: '', role: ''})

    return (
        <div>Signup</div>
    )
}

export default Signup