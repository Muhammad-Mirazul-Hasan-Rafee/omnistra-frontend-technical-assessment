import styles from "./Navbar.module.css";
import NavLight from "../../../assets/navbarIcons/navLight.svg?react";
import NavCorner from "../../../assets/navbarIcons/navCorner.svg?react"; 
import Logo1 from "../../../assets/navbarIcons/logo1.svg?react";
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      {/* first line*/}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {/* duplicate 1 */}
          <div className={styles.marqueeContent}>
            <NavLight className={styles.navLightIcon} />
            
            <span>
              <strong>Announcing our $35m series a funding</strong>{' '}
              To take down friendly fraud - read more →
            </span>
            
            <NavLight className={styles.navLightIcon} />
          </div>

          {/* duplicate 2 */}
          <div className={styles.marqueeContent}>
           <NavCorner className={styles.navCornerIcon} />
            
            <span>
              <strong>Announcing our $35m series a funding</strong>{' '}
              To take down friendly fraud - read more →
            </span>
            
            <NavCorner className={styles.navCornerIcon} />
          </div>

          {/* duplicate 3*/}
          <div className={styles.marqueeContent}>
            <NavLight className={styles.navLightIcon} />
            
            <span>
              <strong>Announcing our $35m series a funding</strong>{' '}
              To take down friendly fraud - read more →
            </span>
            
            <NavCorner className={styles.navCornerIcon} />
          </div>

          {/* duplicate 4*/}
          <div className={styles.marqueeContent}>
            <NavLight className={styles.navLightIcon} />
            
            <span>
              <strong>Announcing our $35m series a funding</strong>{' '}
              To take down friendly fraud - read more →
            </span>
            
            <NavCorner className={styles.navCornerIcon} />
          </div>
        </div>
      </div>

     {/* second line */}
{/* NAV MAIN ROW */}
<div className={styles.navMain}>
  {/* LEFT */}
  <div className={styles.logoRow}>
    <NavLight className={styles.logoIcon} />
    <Logo1 className={styles.logoText} />
  </div>

  {/* CENTER */}
  <div className={styles.navMiddleContainer}>
    <a href="">Product</a>
    <a href="">Customers</a>
    <a href="">Pricing</a>
    <a href="">Integrations</a>
    <a href="">Resources</a>
    <a href="">Company</a>
  </div>

  {/* RIGHT */}
  <div className={styles.navRightBtns}>
    <button className={styles.signIn}>Signin</button>
    <button className={styles.signUp}>Signup</button>
  </div>

</div>
    </div>
  );
};

export default Navbar;