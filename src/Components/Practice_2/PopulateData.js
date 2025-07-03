import useFetchData from './useFetchData'

function PopulateData() {
    const {data, loading, error}=useFetchData('https://jsonplaceholder.typicode.com/posts');
    if(loading) return <p>loading.....</p>;
    if(error) return <p>Error: {error}</p>
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default PopulateData
