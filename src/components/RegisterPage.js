import {useForm} from "react-hook-form";


function RegisterPage() {
    const {handleSubmit, register, setValue} = useForm();

    const onSubmitRegister = (data) => {

    }

    return <div className={'wrapperRegisterPage'}>
        <div id="signupPage" className="auth-page active">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Sign Up</h1>
                    <p>Register to enjoy all the benefits</p>
                </div>

                <form onSubmit={handleSubmit(onSubmitRegister)} className={'form-control'} id={'registerForm'}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="loginFullName">Full Name</label>
                        <input
                            type="text"
                            id="loginFullName"
                            className="form-input "
                            placeholder="Enter Full Name"
                            {...register("fullName")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="loginPhoneNumber">Phone number</label>
                        <input
                            type="text"
                            id="loginPhoneNumber"
                            className="form-input "
                            placeholder="Enter Phone Number"
                            {...register("phoneNumber")}
                        />
                    </div>
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

                    <button type="submit" className="submit-button" form={'registerForm'}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
}

export default RegisterPage;