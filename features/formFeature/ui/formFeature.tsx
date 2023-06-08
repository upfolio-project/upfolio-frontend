import styled from "styled-components";
import {borders, shadows} from "@upfolio-project/upfolio-ui";
import React from "react";
import {Container} from "@mui/material";

const FormContainer = styled(Container)`
  max-width: 320px;
  box-sizing: content-box;
  padding: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
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