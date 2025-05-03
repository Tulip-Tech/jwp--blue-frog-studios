/* eslint-disable react/no-unescaped-entities */
import styles from './TermsOfUse.module.scss';

const PrivacyPolicyLink = ({ text }: { text?: string }) => {
  return (
    <>
      {' '}
      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
        {text || 'Privacy Policy'}
      </a>{' '}
    </>
  );
};

const TermsOfUseComponent = () => {
  return (
    <>
      <div className={styles.policyContainer}>
        {/* <h1 className={styles.mainTitle}>BlueFrogPlus.com</h1> */}
        {/* <div className={styles.underline}></div> */}

        <h2 className={styles.sectionTitle}>Terms and Conditions Of Use</h2>

        <div className={styles.termsContent}>
          <p>
            <strong>1. Introduction:</strong> This website is operated by Blue Frog Studios. The terms "we", "us", and "our" refer to Blue Frog Studios. The use
            of our website is subject to the following Terms and conditions of use, as amended from time to time (the "Terms"). The Terms are to be read
            together by you with any terms, conditions or disclaimers provided in the pages of our website. Please review the Terms carefully. The Terms apply
            to all users of our website, including without limitation, users who are browsers, customers, merchants, vendors and/or providers of content. If you
            access and use this website, you accept and agree to be bound by and comply with the Terms and our <PrivacyPolicyLink />. If you do not agree to the
            Terms or our <PrivacyPolicyLink />, you are not authorized to access our website, use any of our website's services or place an order on our
            website.
          </p>

          <p>
            <strong>2. Legal Agreement & Enforceability:</strong> These Terms constitute a legally binding agreement between you and Blue Frog Studios. If you
            do not agree to these Terms, you should discontinue using our website and services. You agree that any dispute arising from these Terms shall be
            governed by the laws specified under the Governing Law & Dispute Resolution section listed below.
          </p>

          <p>
            <strong>3. Use of our Website:</strong> You agree to use our website for legitimate purposes and not for any illegal or unauthorized purpose,
            including without limitation, in violation of any intellectual property or privacy law. By agreeing to the Terms, you represent and warrant that you
            are at least the age of majority in your state or province of residence and are legally capable of entering into a binding contract. You agree to
            not use our website to conduct any activity that would constitute a civil or criminal offence or violate any law. You agree not to attempt to
            interfere with our website’s network or security features or to gain unauthorized access to our systems. You agree to provide us with accurate
            personal information, such as your email address, mailing address and other contact details in order to complete your order or contact you as
            needed. You agree to promptly update your account and information. You authorize us to collect and use this information to contact you in accordance
            with our <PrivacyPolicyLink />.
          </p>

          <p>
            <strong>4. General Conditions:</strong> We reserve the right to refuse service to anyone, at any time, for any reason. We reserve the right to make
            any modifications to the website, including terminating, changing, suspending or discontinuing any aspect of the website at any time, without
            notice. We may impose additional rules or limits on the use of our website. You agree to review the Terms regularly and your continued access or use
            of our website will mean that you agree to any changes. You agree that we will not be liable to you or any third party for any modification,
            suspension or discontinuance of our website or for any service, content, feature or product offered through our website.
          </p>

          <p>
            <strong>5. Restrictions on Use of Video Data:</strong> Users are prohibited from collecting, distributing, or misusing video viewing information in
            violation of the Video Privacy Protection Act (VPPA) or other applicable laws.
          </p>

          <p>
            <strong>6. Opt-In Consent for Video Data Sharing:</strong> We will not share your video consumption data without your explicit consent. You may
            revoke this consent at any time via your account settings.
          </p>

          <p>
            <strong>7. Products or Services:</strong> We reserve the right, in our sole discretion, to refuse orders, including without limitation, orders that
            appear to be placed by distributors or resellers. If we believe that you have made a false or fraudulent order, we will be entitled to cancel the
            order and inform the relevant authorities. We do not guarantee the accuracy of the colour or design of the products on our website. We have made
            efforts to ensure the colour and design of our products are displayed as accurately as possible on our website.
          </p>

          <p>
            <strong>8. Links to Third-Party Websites:</strong> Links from or to websites outside our website are meant for convenience only. We do not review,
            endorse, approve or control, and are not responsible for any sites linked from or to our website, the content of those sites, the third parties
            named therein, or their products and services. Linking to any other site is at your sole risk and we will not be responsible or liable for any
            damages in connection with linking. Links to downloadable software sites are for convenience only and we are not responsible or liable for any
            difficulties or consequences associated with downloading the software. Use of any downloaded software is governed by the terms of the license
            agreement, if any, which accompanies or is provided with the software.
          </p>

          <p>
            <strong>9. Use Comments, Feedback, and Other Submissions:</strong> You acknowledge that you are responsible for the information, profiles, opinions,
            messages, comments, and any other content (collectively, the “Content”) that you post, distribute, or share on or through our website or services
            available in connection with our website. You further acknowledge that you have full responsibility for the Content, including but not limited to
            its legality and its trademark, copyright, and other intellectual property ownership. You agree that any Content submitted by you in response to a
            request by us for a specific submission may be edited, adapted, modified, recreated, published, or distributed by us. You further agree that we are
            under no obligation to maintain any Content in confidence, to pay compensation for any Content, or to respond to any Content. You agree that you
            will not post, distribute, or share any Content on our website that is protected by copyright, trademark, patent, or any other proprietary right
            without the express consent of the owner of such proprietary right. You further agree that your Content will not be unlawful, abusive, or obscene,
            nor will it contain any malware or computer virus that could affect our website’s operations. You will be solely liable for any Content that you
            make and its accuracy. We have no responsibility and assume no liability for any Content posted by you or any third party. We reserve the right to
            terminate your ability to post on our website and to remove and/or delete any Content that we deem objectionable. You consent to such removal and/or
            deletion and waive any claim against us for the removal and/or deletion of your Content.
          </p>

          <p>
            <strong>10. Your Personal Information:</strong> Please see our <PrivacyPolicyLink /> to learn about how we collect, use, and share your personal
            information.
          </p>

          <p>
            <strong>11. Errors and Omissions:</strong> Please note that our website may contain typographical errors or inaccuracies and may not be complete or
            current. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time, without prior
            notice (including after an order has been submitted). Such errors, inaccuracies, or omissions may relate to product descriptions, pricing,
            promotions, and availability, and we reserve the right to cancel or refuse any order placed based on incorrect pricing or availability information,
            to the extent permitted by applicable law. We do not undertake to update, modify, or clarify information on our website, except as required by law.
          </p>

          <p>
            <strong>12. Disclaimer and Limitation of Liability:</strong> You assume all responsibility and risk with respect to your use of our website, which
            is provided “as is” without warranties, representations or conditions of any kind, either express or implied, with regard to information accessed
            from or via our website, including without limitation, all content and materials, and functions and services provided on our website, all of which
            are provided without warranty of any kind, including but not limited to warranties concerning the availability, accuracy, completeness or usefulness
            of content or information, uninterrupted access, and any warranties of title, non-infringement, merchantability or fitness for a particular purpose.
            We do not warrant that our website or its functioning or the content and material of the services made available thereby will be timely, secure,
            uninterrupted or error-free, that defects will be corrected, or that our websites or the servers that make our website available are free of viruses
            or other harmful components. The use of our website is at your sole risk and you assume full responsibility for any costs associated with your use
            of our website. We will not be liable for any damages of any kind related to the use of our website. In no event will we, or our affiliates, our or
            their respective content or service providers, or any of our or their respective directors, officers, agents, contractors, suppliers or employees be
            liable to you for any direct, indirect, special, incidental, consequential, exemplary or punitive damages, losses or causes of action, or lost
            revenue, lost profits, lost business or sales, or any other type of damage, whether based in contract or tort (including negligence), strict
            liability or otherwise, arising from your use of, or the inability to use, or the performance of, our website or the content or material or
            functionality through our website, even if we are advised of the possibility of such damages. Certain jurisdictions do not allow limitation of
            liability or the exclusion or limitation of certain damages. In such jurisdictions, some or all of the above disclaimers, exclusions, or
            limitations, may not apply to you and our liability will be limited to the maximum extent permitted by law.
          </p>

          <p>
            <strong>13. Indemnification:</strong> You agree to defend and indemnify us and hold us and our affiliates harmless, including our and their
            respective directors, officers, agents, contractors, and employees, against any losses, liabilities, claims, and expenses (including legal fees)
            arising from, related to, or in connection with your use of our website, your violation of the Terms, or the posting or transmission of any
            materials on or through the website by you, including but not limited to, any third-party claim that any information or materials provided by you
            infringe upon any third-party proprietary rights.
          </p>

          <p>
            <strong>14. Entire Agreement:</strong> The Terms and any documents expressly referred to in them represent the entire agreement between you and us
            in relation to the subject matter of the Terms and supersede any prior agreement, understanding or arrangement between you and us, whether oral or
            in writing. Both you and we acknowledge that, in entering into these Terms, neither you nor we have relied on any representation, undertaking or
            promise given by the other or implied from anything said or written between you and us prior to such Terms, except as expressly stated in the Terms.
          </p>

          <p>
            <strong>15. Waiver:</strong> Our failure to exercise or enforce any right or provision of the Terms will not constitute a waiver of such right or
            provision. A waiver by us of any default will not constitute a waiver of any subsequent default. No waiver by us is effective unless it is
            communicated to you in writing.
          </p>

          <p>
            <strong>16. Headings:</strong> Any headings and titles herein are for convenience only.
          </p>

          <p>
            <strong>17. Severability:</strong> If any of the provisions of the Terms are determined by any competent authority to be invalid, unlawful, or
            unenforceable, such provision will be severed from the remaining Terms, which will continue to be valid and enforceable to the fullest extent
            permitted by law.
          </p>

          <p>
            <strong>18. Governing Law & Dispute Resolution:</strong> Any disputes arising out of or relating to the Terms, the <PrivacyPolicyLink />, use of our
            website, or our products or services offered on our website will be resolved in accordance with the laws of the Province of British Columbia without
            regard to its conflict of law rules. Any disputes, actions or proceedings relating to the Terms or your access to or use of our website must be
            brought before the courts of the Province of British Columbia in the City of White Rock, BC, and you irrevocably consent to the exclusive
            jurisdiction and venue of such courts.
          </p>

          <p>
            <strong>19. Direct Subscriptions:</strong> By establishing a Payment Method with us, you agree to pay the subscription fee on a periodic basis to
            access the Applications ("Subscription Fee"). To do so, you must be at least the age of majority in your state/province of residence and fully able
            and competent to enter into the terms and conditions of this Agreement, to subscribe to or purchase any third party products or other offerings
            provided through the Applications or otherwise made available for purchase. By agreeing to this Agreement, you accept and agree to be bound by this
            Agreement and to abide by all applicable laws with regard to your purchase and use of any applicable Applications or products, and you represent and
            certify that you are legally able to enter into any and all purchase agreements with us and our partners, vendors, agents, and service providers.
            <br />
            <br />
            All prices posted on the Applications are subject to change without notice. Price increases will only apply to orders placed after such changes.
            Posted prices do not include applicable taxes. To the extent applicable, all such taxes will be added to your purchase total and will be itemized.
            The Subscription Fee will be billed at the time you establish your subscription, and on an ongoing basis unless you cancel your subscription. We
            reserve the right to change, limit, refuse, or cancel any order you place with us at our sole discretion. In the event we change or cancel an order,
            we will attempt to notify you by contacting the e-mail and/or billing address provided at the time the order was made. Terms of payment are within
            our sole discretion and, unless otherwise agreed by us in writing, payment must be received by us before our acceptance of an order. We accept the
            Payment Methods that are shown on the Applications or otherwise displayed during the checkout process for all purchases.
            <br />
            <br />
            By entering into any transaction through the Applications, you represent and warrant that all information you provide is true, correct, and complete
            (including your Payment Method and billing address); that any credit card transactions submitted by you are authorized; that charges incurred by you
            will be honored by your credit card company; that you will pay charges incurred by you at the posted prices, including all applicable taxes, if any,
            regardless of the amount quoted on the Applications at the time of your order; and that you are the legal holder of any Payment Method used to enter
            into any transaction through the Applications. If, in our sole discretion, we determine that (i ) your Payment Method is not valid, (ii) a
            transaction is not authorized, (iii) your Payment Method cannot be processed or verified at the time of any charge, (iv) a charge is disputed for
            any reasons other than failure by us to deliver the product purchased by you, (v) you have abused or misused promotions or promotion codes, or (vi)
            you have otherwise used the Applications to enter into an improper transaction, we reserve the right to immediately terminate any pending
            transactions, suspend your access to the Applications, and terminate all of our obligations hereunder.
            <br />
            <br />
            Once you have created your account, you may update your Payment Method or Cancel your subscription anytime by accessing the payments area in your
            account properties at{' '}
            <a href="/u/payments" target="_blank" rel="noopener noreferrer">
              BlueFrog+
            </a>{' '}
            <br />
            Please note access to the subscription content may end immediately upon cancelling your subscription. No refund for any remaining time left on the
            subscription period would be issued.
          </p>

          <p>
            <strong>20. Free Trial:</strong> Please note that free trials are tied to a viewer’s credit card, and not the BlueFrog+ account. If a second account
            is opened but the same credit card is used to purchase a second subscription, a second free trial will not be provided. A credit card can only be
            used once to obtain a free trial. This is intended to prevent abuse.
          </p>

          <p>
            <strong>21. BlueFrog+ Communications:</strong> By creating an account with Blue Frog Studios / BlueFrog+, you agree to receive email communications
            from us, including newsletters, promotional offers, and account updates. You understand that you can unsubscribe from these communications at any
            time by clicking the unsubscribe link in any such email that you receive from us.
          </p>

          <p>
            <strong>22. Questions or Concerns:</strong> Please send all questions, comments, and feedback to us at{' '}
            <a href="mailto:info@bluefrogstudios.ca">info@bluefrogstudios.ca</a>{' '}
          </p>
          <p>
            <strong>23. InPlayer Terms:</strong> In addition to Blue Frog Plus’ terms and conditions, InPlayer is the platform used by Blue Frog Plus. This
            document also serves as notice that you agree to the terms and conditions of InPlayer by reviewing their content at their webpage{' '}
            <a href="https://inplayer.com/legal/terms" target="_blank" rel="noopener noreferrer">
              https://inplayer.com/legal/terms
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfUseComponent;
