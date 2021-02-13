import React from "react";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "../../components/Layout";

const Movie = () => {
  
  return (
    <Layout>
      
    </Layout>
  );
};
/*
export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on persons
  const movies = await sanity.fetch(moviesQuery);
  const paths = movies.map(movie => ({
    params: { id: movie._id }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }) => {
  const movie = await sanity.fetch(singleMovieQuery, { id: params.id });
  return { props: { movie } };
};*/

export default Movie;
