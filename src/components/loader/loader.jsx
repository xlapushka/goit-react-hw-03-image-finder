// import PropTypes from 'prop-types';
// import css from '../styles.module.css';
import { ThreeDots  } from  'react-loader-spinner'


export function Loader() {
    return (
    <ThreeDots 
      height="60" 
      width="60" 
      radius="9"
      color="#155aaf" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />)
}
