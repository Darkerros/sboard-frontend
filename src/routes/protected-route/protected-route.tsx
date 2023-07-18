import React, { FC, ReactNode } from 'react';
import {useAppSelector} from "../../hooks/use-app-selector";
import {Navigate} from "react-router-dom";
import Loader from "../../components/loader/loader";

interface ProtectedRouteProps {
  /*
   * Флаг на нужность авторизации для данного роута
   */
  needAuth: boolean;
  /*
   * Ссылка на редирект при не подходе под условия needAuth
   */
  redirectUrl: string;
  /*
   * Любой компонент или страница для отображения
   */
  children: ReactNode;
}

const ProtectedRoute:FC<ProtectedRouteProps> = ({needAuth, redirectUrl, children}) => {
  const {isError, user} = useAppSelector(state => state.user)

  if (!user && !isError) {
    return (<Loader/>)
  }

  if ((!user && !needAuth) || (user && needAuth) || (isError && !needAuth)) {
    return (<>{children}</>)
  }

  return (<Navigate to={redirectUrl}/>)
};

export default ProtectedRoute;
