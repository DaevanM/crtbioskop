import { useEffect, useState } from "react"
import {Container, Row, Col, Card} from "react-bootstrap"

import axios from "axios"

const TvList = () => {
    const [TV, setTv] = useState([])
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/tv/top_rated`, {
        params: {
          api_key: process.env.REACT_APP_KEY
        }
      }).then((response) => {
        setTv(response.data.results)
      })
    }, [])

    return (
        <div>
            <Container>
                <h1 className="text-white" id="tv">TV Series</h1>
                <Row>
                    {TV.map((result, index) => {
                        return(
                        <Col md={3} key={index}>
                        <Card className="movieImage">
                            <div className="overcontain">
                                <Card.Img src={`${process.env.REACT_APP_IMG}/${result.poster_path}`} alt="test"/>
                                <div className="overlay">
                                    <div className="judul">{result.name}</div>
                                    <div className="text-tv"> <h6>Sinopsis</h6> {result.overview}</div>
                                    <div className="text"> <h6>Release Date</h6>{result.first_air_date}</div>
                                    <h6>Rating</h6>
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

export default TvList