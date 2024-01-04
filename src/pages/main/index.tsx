import { Helmet } from 'react-helmet-async';
import MainContainer from '@containers/main';
import { META_PAGE } from '@constants/static/meta';

export default function mainPage() {
  const { title } = META_PAGE.default;
  const { description } = META_PAGE.default;

  // render meta
  const renderMetaHelmet = () => {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    );
  };

  return (
    <>
      {renderMetaHelmet()}
      <MainContainer />
    </>
  );
}
