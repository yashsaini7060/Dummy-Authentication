import React, {useState} from 'react';
import "./Login.css"

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
 
    const data = await response.json();
    console.log(data)
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/profile';
    } else {
      console.error(data);
    }
  };

  return (
    <div className="div">
      <div className="div-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d673cbd7b82985693760a7bfd20cec191759c1575893454d94fa98afde9f014?apiKey=07e4f49def61473ab63181c52cce961c&"
          className="img"
          alt="Background"
        />
        <div className="span">
          <div className="span-2">
            <div className="div-3">
              <span style={{ fontWeight: 400, color: "rgba(117,117,117,1)" }}>
                Welcome back!
              </span>
              <span style={{ fontWeight: 400 }}> 👋</span>
            </div>
            <div className="div-4">Sign in to your account</div>
            <div className="div-5">Your email</div>
            <form onSubmit={handleSubmit}>
            <input className="div-6" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            {/* <div className="div-6" /> */}
            <div className="div-7">Password</div>
            <input className="div-8" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
         
            
            {/* <div className="div-8" /> */}
            {/* <span className="span-3">Continue</span> */}
            <button className="span-3" type="submit">Continue</button>
            </form>
            <div className="div-9">Forget your password?</div>
          </div>
          <div className="div-10">
            Don’t have an account?{" "}
            <span style={{ color: "rgba(98,91,247,1)" }}>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
