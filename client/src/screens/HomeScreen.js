import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Poster from "../components/Poster";
import { useEffect } from "react";
import { getAllPosters } from "../actions/posterActions";
import Loader from "../components/Loader";
import Error from '../components/Error'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const posterState = useSelector((state) => state.getAllPosterReducer);
  const { loading, posters, e } = posterState;
  useEffect(() => {
    dispatch(getAllPosters());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader/>
        ) : e ? (
          <Error error="Something went wrong!"></Error>
        ) : (
          <Row>
            {posters.map((poster) => (
              <Col md={4}>
                <Poster poster={poster} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
