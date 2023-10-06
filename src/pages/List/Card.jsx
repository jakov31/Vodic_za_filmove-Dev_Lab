const Card = ({ name, image, year, rating, num_ratings }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="Movie Picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{year}</p>
        <p>{rating}</p>
        <p>{num_ratings}</p>
      </div>
    </div>
  );
};

export default Card;
