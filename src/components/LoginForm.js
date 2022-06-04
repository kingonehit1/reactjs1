import React, {useState} from "react";



function LoginForm({ Login, Register}){
    const [details, setDetails] = useState({name: "", email: "", password:""});


    const [detailsRegister, setDetailsRegister] = useState({emailRegister: "", passwordRegister:""});

    const submitHadler = e =>{
        e.preventDefault();
        Login(details);
    }

    const onSubmit = data => {
        data.preventDefault();
      };

    return(     
        <>
        <form onSubmit={submitHadler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR! */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>
                <div className="from-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className="from-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <input type="submit" value="Login"></input>
            </div>
        </form>
        <form onSubmit={onSubmit}>
            <div className="form-inner">
                <h2>Register</h2>
                <div className="from-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="emailRegister" id="emailRegister" onChange={data => setDetailsRegister({...detailsRegister, emailRegister: data.target.value})} value={detailsRegister.emailRegister}></input>
                </div>
                <div className="from-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="passwordRegister" id="passwordRegister" onChange={data => setDetailsRegister({...detailsRegister, passwordRegister: data.target.value})} value={detailsRegister.passwordRegister}></input>
                </div>
                <input type="submit" value="Register"></input>
            </div>
        </form>
        </>  
    )
}

export default LoginForm