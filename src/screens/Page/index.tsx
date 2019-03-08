import * as React from 'react';
import {RouteComponentProps} from 'react-router';

interface IRouteProps {
  number: string;
}

type IProps = RouteComponentProps<IRouteProps>;

const Page = (props: IProps) => {
  const [focused, setFocused] = React.useState('active');
  const [page, setPage] = React.useState('home');

  React.useEffect(() => {
    let currPage = props.location.pathname.replace(/\/page\//gi, '');
    if (currPage !== '/') {
      setPage(currPage);
    } else {
      setPage('home');
    }
  });

  return (
    <section className="Screen">
      <header className="Screen__Header">
        <h2>{page === 'home' ? `${page}` : `Title ${page}`}</h2>
        <div className="Screen__Focus-List">
          <button
            className={
              'Screen__Focus-List-Button' +
              (focused === 'active' ? ' focused' : '')
            }
            onClick={() => setFocused('active')}
          >
            Active
          </button>
          <button
            className={
              'Screen__Focus-List-Button' +
              (focused === 'deleted' ? ' focused' : '')
            }
            onClick={() => setFocused('deleted')}
          >
            Deleted
          </button>
        </div>
      </header>
      <div className="Screen__Contents">
        {focused === 'active' && <p>active container</p>}
        {focused === 'deleted' && <p>deleted container</p>}
      </div>
    </section>
  );
};

export default Page;
