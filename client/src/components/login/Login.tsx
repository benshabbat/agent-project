import { useState } from "react";
import { loginRequest, type LoginForm } from "../../services/authServices";

function Login() {
const [formData, setFormData] = useState<LoginForm>({
  agentCode: '',
  password: ''
});


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await loginRequest(formData);
    console.log(data);
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
