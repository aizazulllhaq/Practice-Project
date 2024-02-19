import { useContext } from "react";
import PostDispatchContext from "../context/PostDispatchContext";

function usePostDispatch() {
    return useContext(PostDispatchContext);
}

export default usePostDispatch;