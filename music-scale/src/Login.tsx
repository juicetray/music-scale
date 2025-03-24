import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import './App.css'

type FormData = {
  email: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
  const navigate = useNavigate();


  const onSubmit = async (data: FormData) => {  
  const { email, password } = data;
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });  

  if (error) {
    alert(error.message);
  } else {
    console.log(data)
    navigate("/Home")
  }
};;

  return (
    <>
      <h1>Music Scale</h1>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" {...register("email", { required: true})} />

    {errors.email && <span className="error-message">
      *Email* is mandatory
    </span>}

      <input type="password" placeholder="password" {...register("password")}/>
      <input type={"submit"} placeholder="submit" />
      </form>

      <p>Don't have an account? <Link to="/Register">Register here</Link></p>
    </>
  )
}

export default Login