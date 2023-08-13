import styled from 'styled-components';
import { CONTENT_PAGE } from '@common/content';

export default function index() {
  // variable
  const contentTitle = CONTENT_PAGE.main.title;
  const contentDescription = CONTENT_PAGE.main.description;

  const test = () => {
    console.log('hi');
  };
  test();

  return (
    <Wrapper>
      <h1>{contentTitle}</h1>
      <p>{contentDescription}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  ${({ theme }) => theme.boxSet('100%', '100vh', '0px')};
  ${({ theme }) => theme.colorSet('white', '#252525')};
  gap: 20px;
  & > h1 {
    ${({ theme }) => theme.fontSet(70, 700, 70)};
    white-space: pre-wrap;
    text-align: center;
  }
  & > p {
    ${({ theme }) => theme.fontSet(25, 300, 23)};
  }
`;
