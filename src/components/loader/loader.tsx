import React from 'react';
import {keyframes, styled} from "styled-components";
import LoaderIcon from "../../ui/icon/loader-icon/loader-icon";

const SpinAnimation = keyframes`
  0 % {
    & {
      transform: rotate(0deg);
    }
  }
  100% {
    & {
      transform: rotate(360deg);
    }
  }
`

const LoaderContainer = styled.div`
  width: 24px;
  height: 24px;
  animation: ${SpinAnimation} linear infinite .8s;
`

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderIcon/>
    </LoaderContainer>
  );
};

export default Loader;
