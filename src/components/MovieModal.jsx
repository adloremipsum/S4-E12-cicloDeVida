import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Link} from 'react-router-dom'

function MovieModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.movie.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <img
              className="img-fluid listPoster"
              src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
              alt=""
            />
          </div>
          <div className="col">
            <h4>Overview</h4>
            <p>{props.movie.overview}</p>
            <small>Rating {props.movie.vote_average}</small>
            <Link to={`/movie/${props.movie.id}`} className="btn btn-primary m-3">More details</Link>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;
