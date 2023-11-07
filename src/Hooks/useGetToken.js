const useGetToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export default useGetToken;
