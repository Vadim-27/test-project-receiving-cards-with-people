import css from './homePage.module.scss'

const HomePage = () => {
    return (
      <div className={`${css.wrapper} ${css.container}`}>
        <h1 className={css.title}>Test assignment for front-end developer</h1>
        <p className={css.text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button className={css.button}>Sign up</button>
      </div>
    );
}
export default HomePage;