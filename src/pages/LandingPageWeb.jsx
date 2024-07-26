import TopNav from "../components/TopNav";
import styles from "./LandingPageWeb.module.css";

const LandingPageWeb = () => {
  return (
    <div className={styles.landingPageWeb}>
      <TopNav />
      <main className={styles.content}>
        <section className={styles.frameParent}>
          <div className={styles.quoteContentWrapper}>
            <div className={styles.quoteContent}>
              <div className={styles.quoteParagraph}>
                <b className={styles.b}>
                  <span>
                    <span className={styles.span}>{`ከሚቀበል ይልቅ የሚሰጥ `}</span>
                    <span className={styles.span1}>ብፁዕ</span>
                    <span className={styles.span2}> ነው፡፡ ሐዋ</span>
                  </span>
                  <span className={styles.span3}>
                    <span className={styles.span4}>{` `}</span>
                    <span>ሥራ 20፡35</span>
                  </span>
                </b>
                <div className={styles.div}>
                  በአሐዱ በኩል እርዳታ የሚሰበሰብላቸውን የተለያዩ ክንውኖች ይደግፉ፡፡
                </div>
              </div>
              <button className={styles.btn}>
                <div className={styles.exploreCampaigns}>Explore Campaigns</div>
                <img
                  className={styles.arrowRight02Icon}
                  alt=""
                  src="/arrowright02.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.illustrationComponents}>
              <img
                className={styles.backgroundSimpleIcon}
                alt=""
                src="/background-simple.svg"
              />
              <img className={styles.floorIcon} alt="" src="/floor.svg" />
              <img className={styles.wallIcon} alt="" src="/wall.svg" />
              <img
                className={styles.plantsIcon}
                loading="lazy"
                alt=""
                src="/plants.svg"
              />
              <img
                className={styles.character2Icon}
                alt=""
                src="/character-2.svg"
              />
              <div className={styles.group}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
                <div className={styles.group1}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group-1.svg"
                  />
                  <img className={styles.groupIcon2} alt="" src="/group1.svg" />
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="/group-2@2x.png"
                  />
                  <img
                    className={styles.groupIcon4}
                    alt=""
                    src="/group-3.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-4.svg"
                  />
                  <img
                    className={styles.vectorIcon4}
                    loading="lazy"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
              </div>
              <img
                className={styles.illustrationComponentsChild}
                loading="lazy"
                alt=""
                src="/vector-336.svg"
              />
              <img
                className={styles.groupIcon5}
                loading="lazy"
                alt=""
                src="/group-4.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPageWeb;
