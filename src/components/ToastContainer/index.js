import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useTransition } from "react-spring";

import Toast from "../Toast";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

const ToastContainer = ({ toasts }) => {
  const transitions = useTransition(toasts, toast => toast.id, {
    from: { right: "-100%" },
    enter: { right: "0%" },
    leave: { right: "-100%" }
  });

  return createPortal(
    <Wrapper>
      {transitions.map(({ item, key, props }) => (
        <Toast key={key} id={item.id} style={props}>
          {item.content}
        </Toast>
      ))}
    </Wrapper>,
    document.body
  );
};

export default ToastContainer;
