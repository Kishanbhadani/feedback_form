import React, { useState } from 'react';


const ConnectReact = ()=>{

    const [User,setUser] = useState({
        id: "",
        name: "",
        email:"",
        address:"",
        contact:"",
        exp:"",
        disc:""
    });

    let name, value;
    const getUserData = (event)=>{
        name = event.target.name;
        value = event.target.value;
        setUser({ ...User , [name]:value});
        // console.log(User.exp);s
    }

    const dataToFirebase = async(e)=>{
        e.preventDefault();
        const {name,email,address,contact,exp,disc} = User;
        const res = await fetch(
            "https://survey-734ca-default-rtdb.asia-southeast1.firebasedatabase.app/surveyform.json",
            {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    contact,
                    address,
                    disc,
                    exp
                })
            }
        );

        if(res){
            alert("Data send succesfully");
            setUser({
                name: "",
                email: "",
                contact: "",
                address: "",
                disc: "",
                exp: ""
            })
        }
    }


    return(
        <div className="detail-box">
        <div className='container card p-3 mt-4'>
            <h2>Survey Form</h2>
        </div>
            
            <form className="form-group card p-5" method='POST'>
                <label className="text-left">1. Full Name</label>
                <input type="text" name="name" value={User.name} onChange={getUserData} className="form-control m-2" placeholder='Enter your name' required></input>
        
                <label className="text-left">2. Email Id</label>
                <input type="mail" name="email" value={User.email} onChange={getUserData} className="form-control m-2" placeholder='Enter your Email' required></input>

                <label className="text-left">3. Address</label>
                <input type="mail" name="address" value={User.address} onChange={getUserData} className="form-control m-2" placeholder='Street address , area, locality' required></input>

                <label className="text-left mt-3">4. Phone Number</label>
                <input type="mail" name="contact" value={User.contact} onChange={getUserData} className="form-control m-2" placeholder='Ex: +91 9089787878' required></input>

                <label className="text-left mt-3">5. your Expirence</label>
                <div>
                <input type="radio" name="exp" value="poor" onChange={getUserData} className='ml-2' required></input>
                <label className='pl-1'>poor</label>
                <input type="radio" name="exp" value="good" onChange={getUserData} className='ml-2' required></input>
                <label className='pl-1'>good</label>
                <input type="radio" name="exp" value="excellent" onChange={getUserData} className='ml-2' required></input>
                <label className='pl-1'>excellent</label>
                </div>

                <label className="text-left mt-3">6. Write a Discription</label>
                <textarea type="text" name='disc' value={User.disc} onChange={getUserData} className="form-control" rows="3" placeholder='Type message....(optional)'></textarea>

        
                <button type="submit" className="btn mt-3" onClick={dataToFirebase}>Next</button>
            </form>

            <p className='ml-5'>@ KishanBhadani</p>
        </div>
    )
}

export default ConnectReact;