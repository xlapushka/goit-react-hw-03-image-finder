import { ThreeDots  } from  'react-loader-spinner';

import css from '../styles.module.css';


export function Loader() {
    return (
      <div className={css.loader}>
        <ThreeDots 
          height="60" 
          width="60" 
          radius="9"
          color="#155aaf" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
      />
      </div>
   )
}
