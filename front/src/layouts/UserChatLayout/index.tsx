import React from 'react';
import styled from '@emotion/styled';

const UserChatLayout = ({ children }: { children: React.ReactNode }) => {
  return <Content>{children}</Content>;
};

const Content = styled.div`
  display: flex;
  width: 60%;
  // float: right;
  padding: 1rem;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 2rem;
  border-radius: 0.3rem;
  background-color: #efefef;
  align-items: center;
  // justify-content: center;
  // border: 1px solid black;
`;

export default UserChatLayout;
