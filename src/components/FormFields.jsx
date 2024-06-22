
import React from 'react';
import useForm from '../hooks/useForm'
import './FormFields.css'
const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email) errors.email = 'Email is required';
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
    if (!values.age) errors.age = 'Age is required';
    if (values.age && values.age <= 0) errors.age = 'Age must be greater than 0';
    if (values.isAttendingWithGuest === 'Yes' && !values.guestName) errors.guestName = 'Guest name is required';

    return errors;
};

const FormFields = ({onSubmit}) => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm({
        name: '',
        email: '',
        age: '',
        isAttendingWithGuest: 'No',
        guestName: '',
    }, validate, onSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input  placeholder = "name" type="text" name="name" value={values.name} onChange={handleChange} />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label>Email</label>
                <input  placeholder = "email" type="email" name="email" value={values.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label>Age</label>
                <input placeholder = "Age" type="number" name="age" value={values.age} onChange={handleChange} />
                {errors.age && <p className="error">{errors.age}</p>}
            </div>
            <div>
                <label>Are you attending with a guest?</label>
                <select name="isAttendingWithGuest" value={values.isAttendingWithGuest} onChange={handleChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>
            {values.isAttendingWithGuest === 'Yes' && (
                <div>
                    <label>Guest Name</label>
                    <input placeholder = "Guest Name" type="text" name="guestName" value={values.guestName} onChange={handleChange} />
                    {errors.guestName && <p className="error">{errors.guestName}</p>}
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormFields;
