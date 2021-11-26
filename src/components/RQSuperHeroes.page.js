import { useQuery } from "react-query";
import axios from "axios";
export const RQSuperHeroesPage = () => {
  /* useQuery take atleast 2 argument
  * 1. unique key to identify the query
  * 2. function that returns the promise  
  */
  const {isLoading, data} = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
