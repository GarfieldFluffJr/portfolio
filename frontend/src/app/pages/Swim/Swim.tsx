import { useState } from "react";

import styles from "../../styles/modules/swimPage.module.css";

import useSwim from "./hooks/useSwim";
import { majorMilestones } from "./Data/majorMilestones";
import { Teams } from "./Data/teams";

export const SwimHome = () => {
  const [swimAboutIsOpen, setSwimAboutIsOpen] = useState(false);
  const isMobile = useSwim();

  const handleSwimAboutClick = () => {
    if (isMobile) {
      setSwimAboutIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>My Swim Career</h1>
        <hr className={styles.titleHR} />
        <div className={styles.titleDesc}>
          Welcome to my swim page! Here, you can learn all about my personal
          swim journey along with all of my achievements and milestones.
        </div>
      </div>

      {/* TODO: Add big black button to scroll down to photos */}

      {/* What Swimming Means to Me Section */}
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>My Message to Swimming</h2>
        <div
          className={`${styles.swimCardContainer} card ${
            isMobile &&
            (swimAboutIsOpen
              ? styles.swimCardMobileOpen
              : styles.swimCardMobileClosed)
          }`}
          onClick={handleSwimAboutClick}
        >
          Dear Swimming:
          <br />
          <br />
          I never would have guessed how much of an impact you would have on my
          life. I began learning to swim at 6 years old and you have played an
          irreplaceable role in shaping who I am today.
          <br />
          <br />
          As the years flew by, I became a better swimmer. I am able to
          confidently move in the water and even compete at the national level.
          Furthermore, I am grateful for the opportunity of giving back to my
          community in the form of lifeguarding and swim instructing. However,
          the impact you have had on me extends well beyond the swimming pool.
          <br />
          <br />
          I am able to thrive in high-intensity environments and I find joy in
          hardship as I work towards my goals. I am able to stay concentrated as
          I handle my wins and losses and push myself on my off-days. I am able
          to balance my academics and athletics and stay disciplined as I chase
          that fulfillment of accomplishing my goals.
          <br />
          <br />
          Thanks to you, I am able to be patient. I prioritize long-term impact
          and don't let small setbacks upset me. Beyond swimming, this has
          allowed me to formulate meaningful and deep connections with people I
          care about.
          <br />
          <br />
          Thanks to you, I am able to be humble. I will always remember where I
          started and I am so unbelievably grateful of the many opportunities I
          have had to reach where I am today.
          <br />
          <br />
          Thanks to you, I am able to feel confident. You have raised my
          self-esteem. I am no longer shy to see myself in a mirror nor let
          comparison bring me down.
          <br />
          <br />
          Finally, most importantly, I am able to feel proud of myself. I can
          visibly see the results of my consistent hard work and proudly look
          back on all the progress I have made. I am proud of setting club
          records and qualifying for national standards. I am proud of losing my
          races, being able to reflect, and bounce back. And finally, I am
          proud. Proud of showing up every single day, early in the morning with
          the sun still set, leaving my warm bed to embrace the freezing morning
          breeze without an ounce of motivation.
          <br />
          <br />
          You made me who I am today.
          <br />
          <br />- Louie
        </div>
        <div className="container">
          {isMobile && (
            <button
              className={`big-black-button ${styles.aboutSwimToggleButton}`}
              onClick={handleSwimAboutClick}
            >
              {swimAboutIsOpen ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>

      {/* Major Milestones Section */}
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Major Milestones</h2>
        <div className={styles.milestonesContainer}>
          {majorMilestones.map((milestone, index) => (
            <div className={styles.milestoneItem} key={index}>
              <div className={styles.milestoneItemLeftBorder} />
              <div className={styles.milestoneHeader}>
                <div className={styles.milestoneIcon}>
                  <milestone.icon />
                </div>
                <div className={styles.milestoneRightHeader}>
                  <div className={styles.milestoneItemTitle}>
                    {milestone.title}
                  </div>
                  <div className="grey-caption">{milestone.date}</div>
                </div>
              </div>
              <div className={styles.milestoneDescription}>
                {milestone.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Families Section */}
      <div className={styles.sectionContainer}>
        <div className={styles.teamsBigContainer}>
          <div className={styles.teamsContainer}>
            <h2 className={`${styles.teamsHeader} ${styles.sectionHeader}`}>
              My Teams
            </h2>
            {Teams.map((team, index) => (
              <div className="card" key={index}>
                <div className={styles.teamsGrid}>
                  <div className={styles.teamsLeftContainer}>
                    <div className={styles.teamsLeftHeaderContainer}>
                      <div className={`grey-caption`}>{team.duration}</div>
                      <div className={styles.teamsName}>{team.name}</div>
                    </div>
                    <div className={styles.teamsLocation}>{team.location}</div>
                    <ul className={styles.teamsNotes}>
                      {team.notes.map((note, i) => (
                        <li className={styles.teamsNote} key={i}>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.teamsImageContainer}>
                    <img
                      src={team.imageLink}
                      alt={team.imageAltText}
                      width={250}
                      className={styles.teamsImage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Journey Section */}
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>My Journey</h2>
        <div className={styles.journeyContainer}>
          <div className={styles.journeyGrid}>
            <div />
            <div className="card">
              <div className={styles.journeyHeader}>
                <div className={styles.journeyInnerHeader}>
                  <div className={styles.journeyTitle}>Varsity Swimming</div>
                  <div className="grey-caption">2023 - Present</div>
                </div>
                <div className={styles.journeySubHeader}>
                  <div className={styles.journeyTeam}>
                    University of Waterloo Warriors
                  </div>
                  <div className={styles.journeyLocation}>Waterloo, ON, CA</div>
                </div>
              </div>
              <div className={styles.journeyDescription}>
                Competing at the highest level of university swimming in Canada.
                Representing the Warriors in the OUA conference and USPORTS
                nationals. Training 20+ hours per week while balancing academic
                commitments.
              </div>
              <div className={styles.journeyTechList}>
                <span className="skill">Butterfly</span>
                <span className="skill">Freestyle</span>
                <span className="skill">Team Leadership</span>
                <span className="skill">OUA Conference</span>
                <span className="skill">USPORTS Nationals</span>
              </div>
            </div>
            <div className={styles.journeyDot} />
          </div>

          <div className={styles.journeyGrid}>
            <div />
            <div className="card">
              <div className={styles.journeyHeader}>
                <div className={styles.journeyInnerHeader}>
                  <div className={styles.journeyTitle}>
                    High School Swimming
                  </div>
                  <div className="grey-caption">2020 - 2024</div>
                </div>
                <div className={styles.journeySubHeader}>
                  <div className={styles.journeyTeam}>
                    Parkdale Collegiate Institute
                  </div>
                  <div className={styles.journeyLocation}>Toronto, ON, CA</div>
                </div>
              </div>
              <div className={styles.journeyDescription}>
                Led the Parkdale Panthers to multiple championships. Set school
                records and earned MVP honors. Developed leadership skills as
                team captain and mentor to younger swimmers.
              </div>
              <div className={styles.journeyTechList}>
                <span className="skill">Team Captain</span>
                <span className="skill">School Records</span>
                <span className="skill">TDSB Champions</span>
                <span className="skill">Mentorship</span>
              </div>
            </div>
            <div className={styles.journeyDot} />
          </div>

          <div className={styles.journeyGrid}>
            <div />
            <div className="card">
              <div className={styles.journeyHeader}>
                <div className={styles.journeyInnerHeader}>
                  <div className={styles.journeyTitle}>
                    Club Swimming Development
                  </div>
                  <div className="grey-caption">2018 - 2024</div>
                </div>
                <div className={styles.journeySubHeader}>
                  <div className={styles.journeyTeam}>Toronto Swim Club</div>
                  <div className={styles.journeyLocation}>Toronto, ON, CA</div>
                </div>
              </div>
              <div className={styles.journeyDescription}>
                Built the foundation of my swimming career through dedicated
                training and competition. Progressed from novice to
                national-level competitor, learning discipline and perseverance.
              </div>
              <div className={styles.journeyTechList}>
                <span className="skill">Technical Development</span>
                <span className="skill">National Qualifier</span>
                <span className="skill">Provincial Team</span>
                <span className="skill">Discipline</span>
              </div>
            </div>
            <div className={styles.journeyDot} />
          </div>
          <div className={styles.verticalLine} />
        </div>
      </div>

      {/* Still need swimming resources and photos section (add additional photo albums) */}
    </div>
  );
};
