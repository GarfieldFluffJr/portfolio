import { useState, useEffect } from "react";

import { NavLink, useLocation } from "react-router-dom";

import styles from "../../styles/modules/swimPage.module.css";

import { FiArrowRight } from "react-icons/fi";

import useSwim from "./hooks/useSwim";
import { majorMilestones } from "./Data/majorMilestones";
import { Teams } from "./Data/teams";
import { journeyItems } from "./Data/journeyItems";
import { photoAlbumCovers } from "./Data/photoAlbum";

export const SwimHome = () => {
  const location = useLocation();

  const [swimAboutIsOpen, setSwimAboutIsOpen] = useState(false);
  const isMobile = useSwim();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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

      {/* View Photo Albums Button */}
      <NavLink to="#photos" className={styles.photoAlbumsButton}>
        <span>View Photo Albums</span>
        <FiArrowRight size={16} />
      </NavLink>

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

      {/* My Teams Section */}
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
          {journeyItems.map((item, index) => (
            <div className={styles.journeyGrid} key={index}>
              <div />
              <div className="card">
                <div className={styles.journeyHeader}>
                  <div className={styles.journeyTitle}>{item.title}</div>
                  <div className="grey-caption">{item.date}</div>
                </div>
              </div>
              <div className={styles.journeyDot} />
            </div>
          ))}
          <div className={styles.verticalLine} />
        </div>
      </div>

      {/* Resources */}
      <div className={styles.sectionContainer}>
        <div className={styles.resourcesBigContainer}>
          <div className={styles.resourcesContainer}>
            <h2 className={`${styles.sectionHeader}`}>Swimming Resources</h2>
            <div className="card">
              <ul className={styles.resourcesListContainer}>
                <li>
                  <a
                    href="https://athletics.uwaterloo.ca/sports/mens-swimming-and-diving/roster"
                    target="_blank"
                    rel="noopener"
                    className="resume-link"
                  >
                    Varsity Roster
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swimrankings.net/index.php?page=athleteDetail&athleteId=4787719&athletePage=PBEST"
                    className="resume-link"
                    rel="noopener"
                    target="_blank"
                  >
                    Swim Ranking Stats
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swimming.ca/"
                    className="resume-link"
                    target="_blank"
                    rel="noopener"
                  >
                    Swimming Canada
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swimming.ca/time-standards-and-preliminary-competition-information/"
                    className="resume-link"
                    target="_blank"
                    rel="noopener"
                  >
                    Swim Canada National Standards
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swimontario.com/athletes/time-standards/"
                    className="resume-link"
                    target="_blank"
                    rel="noopener"
                  >
                    Swim Ontario Provincial Standards
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Still need photos section (add additional photo albums), then wave animation */}

      {/* Album section */}
      <div className={styles.sectionContainer} id="photos">
        <h2 className={styles.sectionHeader}>Photo Albums</h2>
        <div className={styles.photoAlbumsContainer}>
          {photoAlbumCovers.map((album, index) => (
            <NavLink
              to={album.destination}
              className={`${styles.photoAlbumCard}`}
              key={index}
            >
              <img
                src={album.photo}
                alt={album.title}
                className={styles.photoAlbumCoverPhoto}
              />
              <div className={styles.photoAlbumTitle}>{album.title}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
