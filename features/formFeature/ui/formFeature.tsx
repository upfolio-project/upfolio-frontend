import styled from "styled-components";
import {borders, shadows} from "@/styles/variables";
import React from "react";
import {Container} from "@mui/material";

const FormContainer = styled(Container)`
  max-width: 451px;
  max-height: 465px;
  box-sizing: content-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  padding: 40px;
  width: 100%;
  height: 100%;
  box-shadow: ${shadows.defaultShadow};
  border-radius: ${borders.radius10};
`;

interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "children"> {
    children: React.ReactNode;
}

export const FormFeature = (props: FormProps) => {
    return (
        <FormContainer>
            <Form {...props}>
                {props.children}
            </Form>
        </FormContainer>
    );
};