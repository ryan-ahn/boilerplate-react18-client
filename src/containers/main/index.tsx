import { CONTENT_PAGE } from '@common/content';
import styled from 'styled-components';

export default function index() {
  // variable
  const contentTitle = CONTENT_PAGE.main.title;
  const contentDescription = CONTENT_PAGE.main.description;

  return (
    <Wrapper>
      <h1>{contentTitle}</h1>
      <p>{contentDescription}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
