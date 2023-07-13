import axios from 'axios';
import React from 'react'
import { useState } from 'react';


export default function Member() {
    const[user,Setuser]=useState('')
    const [memberData, setMemberData] = useState({
        Fullname: "",
        Age: "",
        EmailID: "",
        Mobile: "",
        Fees: ""
    });
    const handleChange = (event) => {
        setMemberData({ ...memberData, [event.target.name]: event.target.value })
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(memberData);
    // };
    const handleSubmit= async (event) =>{
        event.preventDefault()
        const post={user:memberData}
        try{
            const result= await axios.post('http://localhost:3000/posts',post)
            console.log(result.data);
        }
        catch(event){
            console.log(event);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Club Membership Form</h1>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>
                                Fullname
                            </td>
                            <td>
                                <input id="txtFullname" name="Fullname"
                                    placeholder="Member Fullname" value={memberData.Fullname}
                                    onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Age
                            </td>
                            <td>
                                <input id="txtAge" name="Age"
                                    placeholder="Member Age" value={memberData.Age}
                                    onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email ID
                            </td>
                            <td>
                                <input id="txtEmailID" name="EmailID"
                                    placeholder="Member Email ID" value={memberData.EmailID}
                                    onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Mobile
                            </td>
                            <td>
                                <input id="txtMobile" name="Mobile"
                                    placeholder="Member Mobile" value={memberData.Mobile}
                                    onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Fees
                            </td>
                            <td>
                                <input id="txtFees" name="Fees"
                                    placeholder="Member Fees" value={memberData.Fees}
                                    onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={handleSubmit}>Submit</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    );
}