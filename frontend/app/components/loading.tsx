const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500" />
    </div>
  );
};

export default LoadingSpinner;