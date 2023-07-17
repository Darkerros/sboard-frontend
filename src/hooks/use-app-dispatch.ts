import {RootDispatch} from "../services/store";
import {useDispatch} from "react-redux";

export const useAppDispatch: () => RootDispatch = useDispatch;
