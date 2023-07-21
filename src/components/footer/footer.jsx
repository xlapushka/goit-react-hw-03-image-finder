import css from '../styles.module.css';

export function Foooter() {
  return (
    
    <footer>
      <small>
        The project was coded by
        <a 
          href="https://www.facebook.com/xlapushka"
          target="_blank"
          rel="noopener nofollow noreferrer"
          className={css.a}
        >
          xlapushka</a
        >
        and is
        <a
          href="https://github.com/xlapushka/she_codes-hw-2-7-1"
          target="_blank"
          rel="noopener nofollow noreferrer"
          className={css.a}
        >
          open-sourced on GitHub. </a
        >
        All photos are taken from
        <a
          href="https://pixabay.com"
          target="_blank"
          rel="noopener nofollow noreferrer"
          className={css.a}
        >
          Paxabay.</a
        >
      </small>
    </footer>
  );
}; 