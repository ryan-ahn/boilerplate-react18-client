import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import jscookie from 'js-cookie';

export default function hocWithAccess(WrappedComponent: any) {
  // function
  function withAccess(props: any) {
    // inner hooks
    const navigate = useNavigate();

    // inner cycle
    useEffect(() => {
      const accessToken = jscookie.get('access');
      // 실행시 조건 falsy 값으로 수정
      if (accessToken) {
        navigate('/signin');
      }
    }, []);

    // inner render
    return <WrappedComponent {...props} />;
  }

  // default render
  return withAccess;
}
