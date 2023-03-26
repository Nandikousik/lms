import { Link } from 'react-router-dom';
import AllCourses from './AllCourses';

function Home() {
  return (
    <div className="container mt-4">
      {/* Latest Courses */}
      <h3 className="pb-1 mb-4">Latest Courses <Link to="/all-courses" class="float-end">See All</Link></h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/1"><img src="logo512.png" class="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End Latest Courses */}
      {/* Popular Courses */}
      <h3 className="pb-1 mb-4 mt-5">Popular Courses<Link to="/popular-courses" class="float-end">See All</Link></h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating:4.5/5</span>
                <span className="float-end">Views:234</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating:4.5/5</span>
                <span className="float-end">Views:234</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating:4.5/5</span>
                <span className="float-end">Views:234</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating:4.5/5</span>
                <span className="float-end">Views:234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Courses */}
      {/* Popular Teachers */}
      <h3 className="pb-1 mb-4 mt-5">Popular Teachers<Link to="/popular-teachers" class="float-end">See All</Link></h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Teacher</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating:4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Teacher</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating:4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Teacher</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating:4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#"><img src="logo512.png" class="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Teacher</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating:4.5/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Teachers */}
    </div>
  );
}

export default Home;