import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Dropdown = styled.div`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.darkFont};
  }
`;

const Dropmenu = styled.div`
  display: flex;
  gap: 10px;
  width: 80px;
  padding: 10px;
  flex-direction: column;
  position: fixed;
  background-color: #fff;

  button {
    background-color: transparent;
    border: none;
  }
`;

export default function DropdownMenu(props) {
  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <>
      <Dropdown>
        <motion.div initial="closed" animate="open" variants={variants}>
          {props.title}
          <Dropmenu>
            <button>Menu</button>
            <button>Menu</button>
            <button>Menu</button>
          </Dropmenu>
        </motion.div>
      </Dropdown>
    </>
  );
}
