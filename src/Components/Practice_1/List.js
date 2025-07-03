import useFetch from "./useFetch";

function List() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;
  if (!data) return null;

  if (!Array.isArray(data)) {
    return <p>Unexpected data format</p>;
  }

  return (
    <ul>
      {data.slice(0, 100).map((item) => (
        <li key={item.id}>{item.body}</li>
      ))}
    </ul>
  );
}

export default List;
