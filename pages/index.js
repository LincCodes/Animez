import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Movies = ({ movies }) => {
  return (
    <Layout>
      <div className="movies">
        <ul className="list">
          {movies.map(movie => (
            <li key={movie._id} className="list__item">
              <Link href="/movie/[id]" as={`/movie/${movie._id}`}>
                <a>
                  {movie.poster && (
                    <img
                      src={imageUrlFor(movie.poster)
                        .ignoreImageParams()
                        .width(300)}
                      width="100"
                      height={100 / movie.posterAspect}
                    />
                  )}
                  <div style={{ paddingTop: "0.2em" }}>
                    {movie.releaseDate.substr(0, 4)}
                  </div>
                  <h3>{movie.title}</h3>
                  {movie.director && (
                    <span className="movies-list__directed-by">
                      Directed by {movie.director}
                    </span>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const movies = await sanity.fetch(query);
  return {
    props: { movies } // will be passed to the page component as props
  };
};

export default Movies;
