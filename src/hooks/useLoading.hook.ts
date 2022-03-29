import { useEffect } from "react";
import { useState } from "react";
export const useLoading = (props: unknown) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!Boolean(props));
  }, [props]);

  return loading;
};
