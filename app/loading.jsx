'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingPage = () => {
  return (
    <ClipLoader
      color="#3B82F6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingPage;
