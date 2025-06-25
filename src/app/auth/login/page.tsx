import Navbar from "@/components/home/sections/navbar";
import LoginForm from "@/components/login/loginForm";

function Login() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 items-center justify-center">
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
