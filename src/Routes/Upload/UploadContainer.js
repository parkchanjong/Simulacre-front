import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import MarkdownRenderer from 'react-markdown-renderer';

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

const a = `# This is a H1  \n## This is a H2  \n###### This is a H6
`;

export default ({ onSubmit, firstName, lastName, username, bio }) => (
  <Wrapper>
    <>
      <Form>
        <Helmet>
          <title>Edit Profile | Simulacre</title>
        </Helmet>
        <form onSubmit={onSubmit}>
          <Input placeholder={'First name'} {...firstName} />
          <Input placeholder={'Last name'} {...lastName} />
          <Input placeholder={'Username'} {...username} />
          <Input placeholder={'Bio'} {...bio} />

          <Button text={'Sign up'} />
        </form>
      </Form>
      <MarkdownRenderer markdown={a} className={'markdown'} />
    </>
  </Wrapper>
);
