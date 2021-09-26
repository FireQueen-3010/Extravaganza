export default function Search(props) {
  return (
    <div className="search">
      <input
        className="search--input"
        value={props.value}
        onChange={(event) => props.setSearch(event.target.value)}
        placeholder="Search a movie here"
      ></input>
    </div>
  );
}
