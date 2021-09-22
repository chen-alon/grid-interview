import React from "react";

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((header) => (
          <th key={header.title}>{header.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((movie) => (
        <tr key={movie.Title}>
          <td>{movie.imdbID}</td>
          <td>{movie.Title}</td>
          <td>{movie.imdbRating}</td>
          <td>{config[3].component({ data: movie.Trailer })}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
