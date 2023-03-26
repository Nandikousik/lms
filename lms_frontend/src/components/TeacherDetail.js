import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TeacherDetail(){
    return(
        
        <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <ing src="./logo512.png" className="img-thumbnail" alt="Course Image" />
            </div>
            <div className="col-8">
                <h3>John Doe</h3>
                <p>Using a combination of grid and utility classes, cards can be made horizontal in a
                    mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0
                    and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments
                    may be needed depending on your card content.</p>
                <p className='fw-bold'>Skills: <Link to="/teacher-detail/1">Php</Link>,<Link to="/teacher-detail/1">Python</Link>,<Link to="/teacher-detail/1">JavaSript</Link></p>
                <p className='fw-bold'>Recent Course: <Link to="/teacher-detail/1">React Js</Link></p>
                <p className='fw-bold'>Rating: 4.5/5</p>
            </div>
        </div>
        {/* course videos */}
        <div className="card mt-4">
            <h5 className="card-header">
                Course List
            </h5>
            <div className="list-group list-group-flush">
                <Link to="/detail/1" className="list-group-item list-group-item-action">Php Course 1</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-ation">Php Course 2</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 1</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-ation">Python Course 2</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-action">JavaScript Course 1</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-ation">JavaScript Course 2</Link>
            </div>
        </div>
        
    </div>
    );
}
export default TeacherDetail;

