const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - NU-Immigration`;
  }, [title]);
};

export default useTitle;
