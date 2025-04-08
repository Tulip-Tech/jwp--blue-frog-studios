import CookiebotDeclaration from '../../components/Cookiebot/Cookiebot';

import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicyComponent = () => {
  return (
    <div className={styles.policyContainer}>
      {/* <h1 className={styles.mainTitle}>BlueFrogPlus.com</h1> */}
      {/* <div className={styles.underline}></div> */}

      <h2 className={styles.sectionTitle}>Privacy Policy</h2>

      <div className={styles.termsContent}>
        <p>
          <strong>1. Introduction:</strong> This website, bluefrogplus.com, is operated by Blue Frog Studios. The terms “we”, “us”, and “our” refer to Blue Frog
          Studios. We are responsible for maintaining and protecting the Personal Information under our control. We have designated an individual or individuals
          who is/are responsible for compliance with our privacy policy.
        </p>

        <p>
          <strong>2. Our Commitment:</strong> We are committed to maintaining the accuracy, confidentiality, and security of your personally identifiable
          information (&#34;Personal Information&#34;). As part of this commitment, our privacy policy governs our actions as they relate to the collection, use
          and disclosure of Personal Information. Our privacy policy is based upon the values set by the Canadian Standards Association&#39;s Model Code for the
          Protection of Personal Information and{' '}
          <span style={{ fontStyle: 'italic' }}>Canada&#39;s Personal Information Protection and Electronic Documents Act.</span>
        </p>

        <p>
          <strong>3. Identifying Purposes:</strong> We collect, use and disclose Personal Information to provide you with the product or service you have
          requested and to offer you additional products and services we believe you might be interested in. The purposes for which we collect Personal
          Information will be identified before or at the time we collect the information. In certain circumstances, the purposes for which information is
          collected may be clear, and consent may be implied, such as where your name, address and payment information is provided as part of the order process.
        </p>

        <p>
          <strong>4. Consent:</strong> Knowledge and consent are required for the collection, use or disclosure of Personal Information except where required or
          permitted by law. Providing us with your Personal Information is always your choice. However, your decision not to provide certain information may
          limit our ability to provide you with our products or services. We will not require you to consent to the collection, use, or disclosure of
          information as a condition to the supply of a product or service, except as required to be able to supply the product or service.
        </p>

        <p>
          <strong>5. Collection of Video Viewing Information:</strong> We may collect information related to your interactions with video content, including but
          not limited to:
          <ol style={{ listStyleType: 'lower-alpha', listStylePosition: 'inside' }}>
            <li>Video titles viewed</li>
            <li>Watch history</li>
            <li>Engagement metrics (e.g., likes, shares, duration of views)</li>
          </ol>
          This information is collected for personalized recommendations, analytics, and service improvements.
        </p>

        <p>
          <strong>6. Use of Video Viewing Data:</strong> Your data is used for:
          <ol style={{ listStyleType: 'lower-alpha', listStylePosition: 'inside' }}>
            <li>Personalizing recommendations</li>
            <li>Analyzing viewership trends</li>
            <li>Improving platform functionality</li>
            <li>Delivering targeted advertisements (subject to consent)</li>
          </ol>
        </p>

        <p>
          <strong>7. Consent for Data Sharing:</strong>We do not share your personally identifiable video consumption data without your explicit opt-in consent.
          Consent can be withdrawn at any time.
        </p>
        <p>
          <strong>8. Data Retention & Deletion:</strong>We retain video data only as necessary for outlined purposes or as required by law. You may request data
          deletion by contacting <a href="mailto:info@bluefrogstudios.ca">info@bluefrogstudios.ca</a>
        </p>

        <p>
          <strong>9. Third-Party Data Sharing & Compliance:</strong> We work with third-party analytics and advertising providers, ensuring compliance with VPPA
          and restricting unauthorized use of your video data.
        </p>

        <p>
          <strong>10. Private Right of Action:</strong> Under VPPA, you have the right to take legal action if your video privacy rights are violated. Contact{' '}
          <a href="mailto:info@bluefrogstudios.ca">info@bluefrogstudios.ca</a> for concerns.
        </p>

        <p>
          <strong>11. Compliance with State & Federal Laws:</strong> Residents of jurisdictions such as California (CCPA) or the European Union (GDPR) may have
          additional data rights, including access, correction, and deletion of personal data.
        </p>
        <p>
          <strong>12. Limiting Collection:</strong> The Personal Information collected will be limited to those details necessary for the purposes identified by
          us. With your consent, we may collect Personal Information from you in person, over the telephone or by corresponding with you via mail, facsimile, or
          the Internet.
        </p>
        <p>
          <strong>13. Limiting Use, Disclosure and Retention:</strong> Personal Information may only be used or disclosed for the purpose for which it was
          collected unless you have otherwise consented, or when it is required or permitted by law. Personal Information will only be retained for the period
          of time required to fulfill the purpose for which we collected it or as may be required by law.
        </p>

        <p>
          <strong>14. Accuracy:</strong> Personal Information will be maintained in as accurate, complete, and up-to-date form as is necessary to fulfill the
          purposes for which it is to be used.
        </p>

        <p>
          <strong>15. Safeguarding Customer Information:</strong> Personal Information will be protected by security safeguards that are appropriate to the
          sensitivity level of the information. We take all reasonable precautions to protect your Personal Information from any loss or unauthorized use,
          access, or disclosure.
        </p>

        <p>
          <strong>16. Openness:</strong> We will make information available to you about our policies and practices with respect to the management of your
          Personal Information.
        </p>

        <p>
          <strong>17. Customer Access:</strong> Upon request, you will be informed of the existence, use, and disclosure of your Personal Information, and will
          be given access to it. You may verify the accuracy and completeness of your Personal Information and may request that it be amended, if appropriate.
          However, in certain circumstances permitted by law, we will not disclose certain information to you. For example, we may not disclose information
          relating to you if other individuals are referenced or if there are legal, security, or commercial proprietary restrictions.
        </p>

        <p>
          <strong>18. Handling Customer Complaints and Suggestions:</strong> You may direct any questions or inquiries with respect to our privacy policy or our
          practices by contacting Blue Frog Studios via email at <a href="mailto:info@bluefrogstudios.ca">info@bluefrogstudios.ca</a>.
        </p>

        <p>
          <strong>19. Other Websites:</strong> Our website may contain links to other third-party sites that are not governed by this privacy policy. Although
          we endeavor to only link to sites with high privacy standards, our privacy policy will no longer apply once you leave our website. Additionally, we
          are not responsible for the privacy practices employed by third-party websites. Therefore, we suggest that you examine the privacy statements of those
          sites to learn how your information may be collected, used, shared, and disclosed.
        </p>
      </div>

      <h2 className={styles.sectionTitle}>Cookie Declaration</h2>

      <div className={styles.privacyContent}>
        <CookiebotDeclaration />
        <p>
          <br />
          <strong>Third-Party Targeted Advertising</strong> <br />
          Third-party advertising cookies are placed by advertisers, ad networks, data exchanges, and other service providers. These cookies track your browsing
          activities across multiple websites and services to serve relevant ads on our site and others. They may also be used to assess ad performance, such as
          tracking how many people interact with an ad. These cookies do not collect personal data.
          <br />
          These third-party cookies are often linked to the site functionality provided by the third party, meaning that clicking on an ad may redirect you to
          their website.
          <br />
          <br />
          Although we cannot always control the third-party cookies placed on our site, we monitor and manage cookies from external service providers,
          requesting the removal of specific third-party advertising cookies when needed.
        </p>
        <p>
          <br />
          <strong>Bluefrogplus.com Targeted Advertising</strong> <br />
          We (or service providers acting on our behalf) may place targeted advertising cookies on your device. These cookies help us recognize if you have
          interacted with our content or ads, so we can show you more relevant advertisements. These cookies can also limit how often you see the same ad. While
          the information collected is anonymous, if you have a registered account, we may associate it with your account to provide more targeted advertising.
        </p>
        <p>
          <br />
          <strong>For Registered Users</strong> <br />
          We may analyze the online activities of registered users across our websites using cookies and other tracking technologies. If you have opted to
          receive communications from us, we may use this data to personalize future messages to your interests.
          <br />
          Additionally, cookies may be used within our communications to track whether they have been opened, what content you engage with, and which links you
          follow. This allows us to better tailor our future communications to your preferences.
          <br />
          You can opt-out of receiving targeted communications at any time by logging into your account and adjusting your marketing preferences. To opt-out of
          behavior-based advertising across this and other websites, follow the instructions in the &#34;Targeted Advertising&#34; section.
        </p>
        <p>
          <br />
          <strong>Managing Cookies in Your Browser</strong>
          <br />
          You can manage cookies and tracking technologies in several ways through your browser settings. You can accept or decline cookies or set your browser
          to alert you before accepting a cookie from any website. Keep in mind that disabling cookies may prevent some features from functioning properly.
          <br />
          <br /> If you use multiple computers, be sure to adjust your browser settings on each one. <br />
          <br /> You can delete cookies installed in your browser’s cookie folder. Each browser has its own procedure for managing settings, so check the
          following links for specific instructions:
          <ol>
            <li>
              <a
                href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Microsoft Edge / Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge / Internet Explorer
              </a>
            </li>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/en-us/105082" target="_blank" rel="noopener noreferrer">
                Apple Safari on MacOS and iOS
              </a>
            </li>
          </ol>
          <br />
          For other browsers, use the “help” function to find instructions for managing cookie settings. <br />
          <br />
          Please note, while you may not be able to opt-out of all third-party advertising cookies, you can opt-out of receiving cookies from us via the icon
          mentioned earlier. Disabling cookies does not remove other types of analytics products that collect general information about how visitors use our
          website.
        </p>
        <p>
          <strong>How to Manage Cookies</strong>
          <br />
          To manage cookies, you can configure your browser not to accept them, and you can delete cookies using the steps provided above. However, some
          features of our website may not work as expected if you disable cookies.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyComponent;
