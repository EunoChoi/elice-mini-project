const SearchIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg
      style={{
        width,
        height,
        color: 'rgb(34, 34, 34)'
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 1080"
      focusable="false"
      role="img"
      aria-hidden="true"
      data-icon="eilSearch"
      data-prefix="eil"
      data-unicode="">
      <path fill="currentColor" d="M90 441C90 247.05 247.05 90 441 90s351 157.05 351 351c0 80.705-27.193 155.021-72.923 214.291l252.901 252.901-63.639 63.639-252.882-252.882C596.16 764.756 521.78 792 441 792 247.05 792 90 634.95 90 441zm623.25 0c0-150.3-121.95-272.25-272.25-272.25S168.75 290.7 168.75 441 290.7 713.25 441 713.25 713.25 591.3 713.25 441z"></path>
    </svg>
  );
}

export default SearchIcon;