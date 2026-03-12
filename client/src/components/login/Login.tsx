import { useState } from "react";
import {type LoginForm } from "../../services/authServices";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";

function Login() {

const {user, login} = useAuthStore();

const [formData, setFormData] = useState<LoginForm>({
  agentCode: '',
  password: ''
});
const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(formData);
    console.log(user);
    navigate("/");
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="agentCode">Agent Code</label>
      <input type="text" name="agentCode" id="agentCode" value={formData.agentCode} onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
