import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient.ts"
import './App.css';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {

    const { email, password } = data

    const { error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        alert(error.message);
    } else {
        alert("Check your email to confirm your registration.");
    };

    navigate("/"); 
  };

  return (
    <>
      <h1>Register</h1>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Username" {...register("name", { required: "Username is required" })} />
        {errors.name && <span className="error-message">{errors.name.message}</span>}

        <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} />
        {errors.email && <span className="error-message">{errors.email.message}</span>}

        <input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} />
        {errors.password && <span className="error-message">{errors.password.message}</span>}

        <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: "Please confirm your password" })} />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}

        <input type="submit" value="Register" />
      </form>

      <p>Already have an account? <Link to="/">Login here</Link></p>
    </>
  );
}

export default Register;
