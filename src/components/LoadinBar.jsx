import { useIsFetching } from "@tanstack/react-query";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useLocation } from "react-router-dom";

NProgress.configure({
  showSpinner: false,
});
export default function LoadingBar() {
  const {pathname,search}=useLocation()
  const isFetching = useIsFetching({
     predicate: (query) => query.state.status === "pending",
  });

  

  useEffect(() => {
    if ( isFetching >0) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [pathname,search,isFetching]);

  return null;
}