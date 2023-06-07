import { gql, useQuery } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    countries {
      capital
      currency
    }
  }
`;

const App = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.countries.map((launch) => (
          <li key={launch.capital}>{launch.capital}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
