import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={`container-fluid ${styles.supportHero}`} >
      <div className="container">
        <div className={styles.supportWrapper}>
          <p className={styles.supportWrapperText}>Support Portal</p>
          <a href="#" className={styles.supportWrapperText}>Track tickets</a>
        </div>

        <div className="row">
          <div className="col-12 col-md-7">
            <h2 className={`search-heading ${styles.searchHeading}`}>
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              className={`in text-muted ${styles.in} ${styles.supportInput}`}
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
            />

            <div className={styles.supportSectionLink}>
              <a href="#">Track account opening</a>
              <a href="#"> Track segment activation</a>
              <a href="#"> Intraday margins</a>
              <br />
              <a href="#">Kite user manual</a>
            </div>
          </div>

          <div className={`featured col-md-5 col-sm-12 ${styles.featured}`}>
            <h3 className={styles.featuredTitle}>Featured</h3>
            <ol className={styles.featuredList}>
              <h5>
                <li><a href="#">Surveillance measure on scrips - May 2025</a></li>
                <br />
                <li><a href="#">Latest Intraday leverages and Square-off timings</a></li>
              </h5>
            </ol>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </section>
  );
}

export default Hero;
