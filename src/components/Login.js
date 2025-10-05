import {useForm} from "react-hook-form";

function Login() {
    const {handleSubmit, register, setValue} = useForm();

    const onSubmitLogin = (data) => {

    }

    return <div className={'wrapperLoginPage'}>
        <div id="signupPage" className="auth-page active">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Login</h1>
                    <p>Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit(onSubmitLogin)} className={'form-control'} id={'loginForm'}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="loginEmail">Email</label>
                        <input
                            type="email"
                            id="loginEmail"
                            className="form-input"
                            placeholder="Enter email"
                            {...register("email")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="loginPassword">Password</label>
                        <input
                            type="email"
                            id="loginPassword"
                            className="form-input"
                            placeholder="Enter password"
                            {...register("password")}
                        />
                    </div>

                    <button type="submit" className="submit-button" form={'loginForm'}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
}
export default Login;