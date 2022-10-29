import { useEffect, useState } from "react"
import {Container, Row, Col, Card} from "react-bootstrap"

import axios from "axios"

const Movie = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/movie/now_playing`, {
        params: {
          api_key: process.env.REACT_APP_KEY
        }
      }).then((response) => {
        setMovies(response.data.results)
      })
    }, [])

    return (
        <div>
            <Container>
                <h1 className="text-white" id="movie">MOVIE</h1>
                <Row>
                    {movies.map((result, index) => {
                        return(
                        <Col md={3} key={index}>
                        <Card className="movieImage">
                            <div className="overcontain">
                                <Card.Img src={`${process.env.REACT_APP_IMG}/${result.poster_path}`} alt="test"/>
                                <div className="overlay">
                                    <div className="judul">{result.title}</div>
                                    <div className="text"> <h5>Sinopsis</h5> {result.overview}</div>
                                    <div className="text"> <h5>Release Date</h5>{result.release_date}</div>
                                    <h5>Rating</h5>
                                    <Row>
                                        <Col sm={4}>
                                            <div className="rating">
                                                <div className="ratcontain">
                                                    <div className="ratingStarContain">
                                                        <div className="ratingStar">
                                                            <span style={{width: `${result.vote_average*10}%`}}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="text-white">{result.vote_average}</div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card>
                    </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Movie