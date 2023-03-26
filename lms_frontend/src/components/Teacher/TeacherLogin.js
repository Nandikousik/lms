import {Link} from 'react-router-dom';

function TeacherLogin(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header"></h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail" className="form-label">UserName</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="mb-3 from-check">
                                    <input type="checkbox" className="form-check-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLogin;

