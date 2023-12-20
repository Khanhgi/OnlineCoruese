// import React, { useState } from "react";

// const LoginFormAdmin = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = () => {
//         if (username === "admin" && password === "adminPassword") {
//             console.log("Đăng nhập thành công");
//         } else {
//             setError("Tên đăng nhập hoặc mật khẩu không đúng");
//         }
//     };

//     return (
//         <div>
//             <h2>Đăng nhập Admin</h2>
//             <form>
//                 <label>
//                     Tên đăng nhập:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Mật khẩu:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <button type="button" onClick={handleLogin}>
//                     Đăng nhập
//                 </button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default LoginFormAdmin; 