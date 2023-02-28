import styled from "styled-components";
import Image from "next/image";

const ExampleImage = styled(Image)`
  width: 40px;
  height: 40px;
  background-color: aqua;
  border-radius: 50%;
  object-fit: contain;
  object-position: top;
  padding-top: 4px;
`;

export {ExampleImage};