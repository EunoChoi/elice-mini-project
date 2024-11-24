const LeftArrowIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={width} height={height}
      style={{ color: 'inherit' }}>
      <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
    </svg>
  );
}

export default LeftArrowIcon;