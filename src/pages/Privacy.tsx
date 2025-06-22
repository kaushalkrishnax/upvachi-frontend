import React from "react";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {children}
  </a>
);

const InternalLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <a href={href} className={`text-blue-600 hover:underline ${className}`}>
    {children}
  </a>
);

const Privacy = () => {
  return (
    <div className="bg-white text-gray-800 font-sans p-4 sm:p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center">PRIVACY POLICY</h1>
        <p className="text-center text-gray-500 font-bold text-[15px] mt-2">
          Last updated June 22, 2025
        </p>

        <div className="mt-8 text-[15px] text-gray-700 space-y-4">
          <p className="leading-relaxed">
            This Privacy Notice for{" "}
            <span className="font-semibold">UpVachi</span> ("<strong>we</strong>
            ," "<strong>us</strong>," or "<strong>our</strong>"), describes how
            and why we might access, collect, store, use, and/or share ("
            <strong>process</strong>") your personal information when you use
            our services ("<strong>Services</strong>"), including when you:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              Visit our website at{" "}
              <Link href="https://upvachi.vercel.app">
                https://upvachi.vercel.app
              </Link>{" "}
              or any website of ours that links to this Privacy Notice
            </li>
            <li>
              Download and use our mobile application (UpVachi), our Facebook
              application (UpVachi), or any other application of ours that links
              to this Privacy Notice
            </li>
            <li>
              Use UpVachi. UpVachi is an AI-powered chat automation platform for
              individuals, creators, and businesses. Users can connect their
              social accounts (such as WhatsApp, Facebook, and Instagram) to
              automate messaging, manage conversations, engage audiences, and
              personalize responses using advanced artificial intelligence.
              UpVachi offers tools for conversation management, analytics, and
              integrations with popular messaging platforms.
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <p className="leading-relaxed">
            <strong>Questions or concerns?</strong> Reading this Privacy Notice
            will help you understand your privacy rights and choices. We are
            responsible for making decisions about how your personal information
            is processed. If you do not agree with our policies and practices,
            please do not use our Services. If you still have any questions or
            concerns, please contact us at upvachi@gmail.com.
          </p>
        </div>

        <div className="mt-10 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">SUMMARY OF KEY POINTS</h2>
          <p className="text-[15px] italic">
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <InternalLink href="#toc">table of contents</InternalLink> below to
            find the section you are looking for.
          </p>
          <div className="mt-6 space-y-4 text-[15px]">
            <p>
              <strong>What personal information do we process?</strong> When you
              visit, use, or navigate our Services, we may process personal
              information depending on how you interact with us and the
              Services, the choices you make, and the products and features you
              use. Learn more about{" "}
              <InternalLink href="#personalinfo">
                personal information you disclose to us
              </InternalLink>
              .
            </p>
            <p>
              <strong>Do we process any sensitive personal information?</strong>{" "}
              Some of the information may be considered "special" or "sensitive"
              in certain jurisdictions, for example your racial or ethnic
              origins, sexual orientation, and religious beliefs. We do not
              process sensitive personal information.
            </p>
            <p>
              <strong>Do we collect any information from third parties?</strong>{" "}
              We do not collect any information from third parties.
            </p>
            <p>
              <strong>How do we process your information?</strong> We process
              your information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent. We process your information only when
              we have a valid legal reason to do so. Learn more about{" "}
              <InternalLink href="#infouse">
                how we process your information
              </InternalLink>
              .
            </p>
            <p>
              <strong>
                In what situations and with which parties do we share personal
                information?
              </strong>{" "}
              We may share information in specific situations and with specific
              third parties. Learn more about{" "}
              <InternalLink href="#whoshare">
                when and with whom we share your personal information
              </InternalLink>
              .
            </p>
            <p>
              <strong>How do we keep your information safe?</strong> We have
              adequate organizational and technical processes and procedures in
              place to protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Learn more about{" "}
              <InternalLink href="#infosafe">
                how we keep your information safe
              </InternalLink>
              .
            </p>
            <p>
              <strong>What are your rights?</strong> Depending on where you are
              located geographically, the applicable privacy law may mean you
              have certain rights regarding your personal information. Learn
              more about{" "}
              <InternalLink href="#privacyrights">
                your privacy rights
              </InternalLink>
              .
            </p>
            <p>
              <strong>How do you exercise your rights?</strong> The easiest way
              to exercise your rights is by submitting a{" "}
              <Link href="https://app.termly.io/notify/2f9dc683-f51a-4442-8f8b-5c799aec8efe">
                data subject access request
              </Link>
              , or by contacting us. We will consider and act upon any request
              in accordance with applicable data protection laws.
            </p>
            <p>
              Want to learn more about what we do with any information we
              collect?{" "}
              <InternalLink href="#toc">
                Review the Privacy Notice in full
              </InternalLink>
              .
            </p>
          </div>
        </div>

        <div id="toc" className="mt-12">
          <h2 className="text-3xl font-bold mb-4">TABLE OF CONTENTS</h2>
          <nav className="space-y-2 text-[15px]">
            <InternalLink href="#infocollect" className="block">
              1. WHAT INFORMATION DO WE COLLECT?
            </InternalLink>
            <InternalLink href="#infouse" className="block">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </InternalLink>
            <InternalLink href="#legalbases" className="block">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </InternalLink>
            <InternalLink href="#whoshare" className="block">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </InternalLink>
            <InternalLink href="#cookies" className="block">
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </InternalLink>
            <InternalLink href="#ai" className="block">
              6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
            </InternalLink>
            <InternalLink href="#sociallogins" className="block">
              7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </InternalLink>
            <InternalLink href="#inforetain" className="block">
              8. HOW LONG DO WE KEEP YOUR INFORMATION?
            </InternalLink>
            <InternalLink href="#infosafe" className="block">
              9. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </InternalLink>
            <InternalLink href="#infominors" className="block">
              10. DO WE COLLECT INFORMATION FROM MINORS?
            </InternalLink>
            <InternalLink href="#privacyrights" className="block">
              11. WHAT ARE YOUR PRIVACY RIGHTS?
            </InternalLink>
            <InternalLink href="#DNT" className="block">
              12. CONTROLS FOR DO-NOT-TRACK FEATURES
            </InternalLink>
            <InternalLink href="#uslaws" className="block">
              13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </InternalLink>
            <InternalLink href="#policyupdates" className="block">
              14. DO WE MAKE UPDATES TO THIS NOTICE?
            </InternalLink>
            <InternalLink href="#contact" className="block">
              15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </InternalLink>
            <InternalLink href="#request" className="block">
              16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </InternalLink>
          </nav>
        </div>

        <div
          id="infocollect"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <div id="personalinfo">
            <h3 className="text-lg font-bold mt-4 mb-2">
              Personal information you disclose to us
            </h3>
            <p className="italic">
              <strong>In Short:</strong> We collect personal information that
              you provide to us.
            </p>
            <p className="mt-4">
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in
              obtaining information about us or our products and Services, when
              you participate in activities on the Services, or otherwise when
              you contact us.
            </p>
            <p className="mt-4">
              <strong>Personal Information Provided by You.</strong> The
              personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
              <li>names</li>
              <li>email addresses</li>
              <li>mailing addresses</li>
              <li>job titles</li>
              <li>usernames</li>
              <li>passwords</li>
              <li>contact preferences</li>
              <li>contact or authentication data</li>
              <li>billing addresses</li>
              <li>debit/credit card numbers</li>
              <li>phone numbers</li>
            </ul>
          </div>
          <div id="sensitiveinfo" className="mt-4">
            <p>
              <strong>Sensitive Information.</strong> We do not process
              sensitive information.
            </p>
          </div>
          <div className="mt-4">
            <p>
              <strong>Payment Data.</strong> We may collect data necessary to
              process your payment if you choose to make purchases, such as your
              payment instrument number, and the security code associated with
              your payment instrument. All payment data is handled and stored by
              Paypal and Razorpay. You may find their privacy notice link(s)
              here:{" "}
              <Link href="https://www.paypal.com/us/legalhub/paypal/privacy-full">
                https://www.paypal.com/us/legalhub/paypal/privacy-full
              </Link>{" "}
              and{" "}
              <Link href="https://razorpay.com/privacy/">
                https://razorpay.com/privacy/
              </Link>
              .
            </p>
          </div>
          <div className="mt-4">
            <p>
              <strong>Social Media Login Data.</strong> We may provide you with
              the option to register with us using your existing social media
              account details, like your Facebook, X, or other social media
              account. If you choose to register in this way, we will collect
              certain profile information about you from the social media
              provider, as described in the section called "
              <InternalLink href="#sociallogins">
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </InternalLink>
              " below.
            </p>
          </div>
          <div className="mt-4">
            <p>
              <strong>Application Data.</strong> If you use our application(s),
              we also may collect the following information if you choose to
              provide us with access or permission:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
              <li>
                <em>Mobile Device Data.</em> We automatically collect device
                information (such as your mobile device ID, model, and
                manufacturer), operating system, version information and system
                configuration information, device and application identification
                numbers, browser type and version, hardware model Internet
                service provider and/or mobile carrier, and Internet Protocol
                (IP) address (or proxy server). If you are using our
                application(s), we may also collect information about the phone
                network associated with your mobile device, your mobile device’s
                operating system or platform, the type of mobile device you use,
                your mobile device’s unique device ID, and information about the
                features of our application(s) you accessed.
              </li>
              <li>
                <em>Push Notifications.</em> We may request to send you push
                notifications regarding your account or certain features of the
                application(s). If you wish to opt out from receiving these
                types of communications, you may turn them off in your device's
                settings.
              </li>
            </ul>
            <p className="mt-2">
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and for our
              internal analytics and reporting purposes.
            </p>
          </div>
          <p className="mt-4">
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>

          <div>
            <h3 className="text-lg font-bold mt-6 mb-2">
              Information automatically collected
            </h3>
            <p className="italic">
              <strong>In Short:</strong> Some information — such as your
              Internet Protocol (IP) address and/or browser and device
              characteristics — is collected automatically when you visit our
              Services.
            </p>
            <p className="mt-4">
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p className="mt-4">
              Like many businesses, we also collect information through cookies
              and similar technologies. You can find out more about this in our
              Cookie Notice:{" "}
              <Link href="https://upvachi.vercel.app/cookies">
                https://upvachi.vercel.app/cookies
              </Link>
              .
            </p>
            <p className="mt-4">The information we collect includes:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
              <li>
                <em>Log and Usage Data.</em> Log and usage data is
                service-related, diagnostic, usage, and performance information
                our servers automatically collect when you access or use our
                Services and which we record in log files. Depending on how you
                interact with us, this log data may include your IP address,
                device information, browser type, and settings and information
                about your activity in the Services (such as the date/time
                stamps associated with your usage, pages and files viewed,
                searches, and other actions you take such as which features you
                use), device event information (such as system activity, error
                reports (sometimes called "crash dumps"), and hardware
                settings).
              </li>
              <li>
                <em>Device Data.</em> We collect device data such as information
                about your computer, phone, tablet, or other device you use to
                access the Services. Depending on the device used, this device
                data may include information such as your IP address (or proxy
                server), device and application identification numbers,
                location, browser type, hardware model, Internet service
                provider and/or mobile carrier, operating system, and system
                configuration information.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mt-6 mb-2">Google API</h3>
            <p>
              Our use of information received from Google APIs will adhere to{" "}
              <Link href="https://developers.google.com/terms/api-services-user-data-policy">
                Google API Services User Data Policy
              </Link>
              , including the{" "}
              <Link href="https://developers.google.com/terms/api-services-user-data-policy#limited-use">
                Limited Use requirements
              </Link>
              .
            </p>
          </div>

          <div>
            <p className="mt-4">
              <strong>
                Information collected when you use our Facebook application(s).
              </strong>{" "}
              We by default access your Facebook basic account information,
              including your name, email, gender, birthday, current city, and
              profile picture URL, as well as other information that you choose
              to make public. We may also request access to other permissions
              related to your account, such as friends, check-ins, and likes,
              and you may choose to grant or deny us access to each individual
              permission. For more information regarding Facebook permissions,
              refer to the{" "}
              <Link href="https://developers.facebook.com/docs/facebook-login/permissions">
                Facebook Permissions Reference
              </Link>{" "}
              page.
            </p>
          </div>
        </div>

        <div
          id="infouse"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> We process your information to provide,
            improve, and administer our Services, communicate with you, for
            security and fraud prevention, and to comply with law. We process
            the personal information for the following purposes listed below. We
            may also process your information for other purposes only with your
            prior explicit consent.
          </p>
          <p className="mt-4">
            <strong>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </strong>
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
            <li>
              <strong>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </strong>{" "}
              We may process your information so you can create and log in to
              your account, as well as keep your account in working order.
            </li>
            <li>
              <strong>
                To deliver and facilitate delivery of services to the user.
              </strong>{" "}
              We may process your information to provide you with the requested
              service.
            </li>
            <li>
              <strong>
                To respond to user inquiries/offer support to users.
              </strong>{" "}
              We may process your information to respond to your inquiries and
              solve any potential issues you might have with the requested
              service.
            </li>
            <li>
              <strong>To send administrative information to you.</strong> We may
              process your information to send you details about our products
              and services, changes to our terms and policies, and other similar
              information.
            </li>
            <li>
              <strong>To fulfill and manage your orders.</strong> We may process
              your information to fulfill and manage your orders, payments,
              returns, and exchanges made through the Services.
            </li>
            <li>
              <strong>To enable user-to-user communications.</strong> We may
              process your information if you choose to use any of our offerings
              that allow for communication with another user.
            </li>
            <li>
              <strong>
                To save or protect an individual's vital interest.
              </strong>{" "}
              We may process your information when necessary to save or protect
              an individual’s vital interest, such as to prevent harm.
            </li>
          </ul>
        </div>

        <div
          id="legalbases"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> We only process your personal information
            when we believe it is necessary and we have a valid legal reason
            (i.e., legal basis) to do so under applicable law, like with your
            consent, to comply with laws, to provide you with services to enter
            into or fulfill our contractual obligations, to protect your rights,
            or to fulfill our legitimate business interests.
          </p>
          <p className="italic mt-4">
            <strong>
              <u>
                If you are located in the EU or UK, this section applies to you.
              </u>
            </strong>
          </p>
          <p className="mt-4">
            The General Data Protection Regulation (GDPR) and UK GDPR require us
            to explain the valid legal bases we rely on in order to process your
            personal information. As such, we may rely on the following legal
            bases to process your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
            <li>
              <strong>Consent.</strong> We may process your information if you
              have given us permission (i.e., consent) to use your personal
              information for a specific purpose. You can withdraw your consent
              at any time. Learn more about{" "}
              <InternalLink href="#withdrawconsent">
                withdrawing your consent
              </InternalLink>
              .
            </li>
            <li>
              <strong>Performance of a Contract.</strong> We may process your
              personal information when we believe it is necessary to fulfill
              our contractual obligations to you, including providing our
              Services or at your request prior to entering into a contract with
              you.
            </li>
            <li>
              <strong>Legal Obligations.</strong> We may process your
              information where we believe it is necessary for compliance with
              our legal obligations, such as to cooperate with a law enforcement
              body or regulatory agency, exercise or defend our legal rights, or
              disclose your information as evidence in litigation in which we
              are involved.
            </li>
            <li>
              <strong>Vital Interests.</strong> We may process your information
              where we believe it is necessary to protect your vital interests
              or the vital interests of a third party, such as situations
              involving potential threats to the safety of any person.
            </li>
          </ul>
          <p className="italic mt-6">
            <strong>
              <u>If you are located in Canada, this section applies to you.</u>
            </strong>
          </p>
          <p className="mt-4">
            We may process your information if you have given us specific
            permission (i.e., express consent) to use your personal information
            for a specific purpose, or in situations where your permission can
            be inferred (i.e., implied consent). You can{" "}
            <InternalLink href="#withdrawconsent">
              withdraw your consent
            </InternalLink>{" "}
            at any time.
          </p>
          <p className="mt-4">
            In some exceptional cases, we may be legally permitted under
            applicable law to process your information without your consent,
            including, for example:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
            <li>
              If collection is clearly in the interests of an individual and
              consent cannot be obtained in a timely way
            </li>
            <li>For investigations and fraud detection and prevention</li>
            <li>
              For business transactions provided certain conditions are met
            </li>
            <li>
              If it is contained in a witness statement and the collection is
              necessary to assess, process, or settle an insurance claim
            </li>
            <li>
              For identifying injured, ill, or deceased persons and
              communicating with next of kin
            </li>
            <li>
              If we have reasonable grounds to believe an individual has been,
              is, or may be victim of financial abuse
            </li>
            <li>
              If it is reasonable to expect collection and use with consent
              would compromise the availability or the accuracy of the
              information and the collection is reasonable for purposes related
              to investigating a breach of an agreement or a contravention of
              the laws of Canada or a province
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant,
              court order, or rules of the court relating to the production of
              records
            </li>
            <li>
              If it was produced by an individual in the course of their
              employment, business, or profession and the collection is
              consistent with the purposes for which the information was
              produced
            </li>
            <li>
              If the collection is solely for journalistic, artistic, or
              literary purposes
            </li>
            <li>
              If the information is publicly available and is specified by the
              regulations
            </li>
            <li>
              We may disclose de-identified information for approved research or
              statistics projects, subject to ethics oversight and
              confidentiality commitments
            </li>
          </ul>
        </div>

        <div
          id="whoshare"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following third
            parties.
          </p>
          <p className="mt-4">
            We may need to share your personal information in the following
            situations:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
          </ul>
        </div>

        <div
          id="cookies"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> We may use cookies and other tracking
            technologies to collect and store your information.
          </p>
          <p className="mt-4">
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to gather information when you interact with our
            Services. Some online tracking technologies help us maintain the
            security of our Services and your account, prevent crashes, fix
            bugs, save your preferences, and assist with basic site functions.
          </p>
          <p className="mt-4">
            We also permit third parties and service providers to use online
            tracking technologies on our Services for analytics and advertising,
            including to help manage and display advertisements, to tailor
            advertisements to your interests, or to send abandoned shopping cart
            reminders (depending on your communication preferences). The third
            parties and service providers use their technology to provide
            advertising about products and services tailored to your interests
            which may appear either on our Services or on other websites.
          </p>
          <p className="mt-4">
            To the extent these online tracking technologies are deemed to be a
            "sale"/"sharing" (which includes targeted advertising, as defined
            under the applicable laws) under applicable US state laws, you can
            opt out of these online tracking technologies by submitting a
            request as described below under section "
            <InternalLink href="#uslaws">
              DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </InternalLink>
            "
          </p>
          <p className="mt-4">
            Specific information about how we use such technologies and how you
            can refuse certain cookies is set out in our Cookie Notice:{" "}
            <Link href="https://upvachi.vercel.app/cookies">
              https://upvachi.vercel.app/cookies
            </Link>
            .
          </p>
        </div>

        <div id="ai" className="mt-12 space-y-4 text-[15px] leading-relaxed">
          <h2 className="text-2xl font-bold">
            6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> We offer products, features, or tools
            powered by artificial intelligence, machine learning, or similar
            technologies.
          </p>
          <p className="mt-4">
            As part of our Services, we offer products, features, or tools
            powered by artificial intelligence, machine learning, or similar
            technologies (collectively, "AI Products"). These tools are designed
            to enhance your experience and provide you with innovative
            solutions. The terms in this Privacy Notice govern your use of the
            AI Products within our Services.
          </p>
          <h3 className="font-bold mt-4">Use of AI Technologies</h3>
          <p>
            We provide the AI Products through third-party service providers
            ("AI Service Providers"), including Groq, Hugging Face, Amazon Web
            Services (AWS) AI and Google Cloud AI. As outlined in this Privacy
            Notice, your input, output, and personal information will be shared
            with and processed by these AI Service Providers to enable your use
            of our AI Products for purposes outlined in "
            <InternalLink href="#legalbases">
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </InternalLink>
            " You must not use the AI Products in any way that violates the
            terms or policies of any AI Service Provider.
          </p>
          <h3 className="font-bold mt-4">Our AI Products</h3>
          <p>Our AI Products are designed for the following functions:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
            <li>AI automation</li>
            <li>AI insights</li>
            <li>Text analysis</li>
            <li>Video analysis</li>
            <li>Image analysis</li>
            <li>AI bots</li>
            <li>Natural language processing</li>
          </ul>
          <h3 className="font-bold mt-4">How We Process Your Data Using AI</h3>
          <p>
            All personal information processed using our AI Products is handled
            in line with our Privacy Notice and our agreement with third
            parties. This ensures high security and safeguards your personal
            information throughout the process, giving you peace of mind about
            your data's safety.
          </p>
          <h3 className="font-bold mt-4">How to Opt Out</h3>
          <p>
            We believe in giving you the power to decide how your data is used.
            To opt out, you can:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
            <li>
              Log in to your account settings and update your user account
            </li>
            <li>Contact us using the contact information provided</li>
          </ul>
        </div>

        <div
          id="sociallogins"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> If you choose to register or log in to
            our Services using a social media account, we may have access to
            certain information about you.
          </p>
          <p className="mt-4">
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or X
            logins). Where you choose to do this, we will receive certain
            profile information about you from your social media provider. The
            profile information we receive may vary depending on the social
            media provider concerned, but will often include your name, email
            address, friends list, and profile picture, as well as other
            information you choose to make public on such a social media
            platform. If you log in using Facebook, we may also request access
            to other permissions related to your account, such as your friends,
            check-ins, and likes, and you may choose to grant or deny us access
            to each individual permission.
          </p>
          <p className="mt-4">
            We will use the information we receive only for the purposes that
            are described in this Privacy Notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </p>
        </div>

        <div
          id="inforetain"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            8. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this Privacy Notice
            unless otherwise required by law.
          </p>
          <p className="mt-4">
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this Privacy Notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </p>
          <p className="mt-4">
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </div>

        <div
          id="infosafe"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            9. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> We aim to protect your personal
            information through a system of organizational and technical
            security measures.
          </p>
          <p className="mt-4">
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>
        </div>

        <div
          id="infominors"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            10. DO WE COLLECT INFORMATION FROM MINORS?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> We do not knowingly collect data from or
            market to children under 18 years of age or the equivalent age as
            specified by law in your jurisdiction.
          </p>
          <p className="mt-4">
            We do not knowingly collect, solicit data from, or market to
            children under 18 years of age or the equivalent age as specified by
            law in your jurisdiction, nor do we knowingly sell such personal
            information. By using the Services, you represent that you are at
            least 18 or the equivalent age as specified by law in your
            jurisdiction or that you are the parent or guardian of such a minor
            and consent to such minor dependent’s use of the Services. If we
            learn that personal information from users less than 18 years of age
            or the equivalent age as specified by law in your jurisdiction has
            been collected, we will deactivate the account and take reasonable
            measures to promptly delete such data from our records. If you
            become aware of any data we may have collected from children under
            age 18 or the equivalent age as specified by law in your
            jurisdiction, please contact us at upvachi@gmail.com.
          </p>
        </div>

        <div
          id="privacyrights"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            11. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> Depending on your state of residence in
            the US or in some regions, such as the European Economic Area (EEA),
            United Kingdom (UK), Switzerland, and Canada, you have rights that
            allow you greater access to and control over your personal
            information. You may review, change, or terminate your account at
            any time, depending on your country, province, or state of
            residence.
          </p>
          <p className="mt-4">
            In some regions (like the EEA, UK, Switzerland, and Canada), you
            have certain rights under applicable data protection laws. These may
            include the right (i) to request access and obtain a copy of your
            personal information, (ii) to request rectification or erasure;
            (iii) to restrict the processing of your personal information; (iv)
            if applicable, to data portability; and (v) not to be subject to
            automated decision-making. If a decision that produces legal or
            similarly significant effects is made solely by automated means, we
            will inform you, explain the main factors, and offer a simple way to
            request human review. In certain circumstances, you may also have
            the right to object to the processing of your personal information.
            You can make such a request by contacting us by using the contact
            details provided in the section "
            <InternalLink href="#contact">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </InternalLink>
            " below.
          </p>
          <p className="mt-4">
            We will consider and act upon any request in accordance with
            applicable data protection laws.
          </p>
          <p className="mt-4">
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your{" "}
            <Link href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
              Member State data protection authority
            </Link>{" "}
            or{" "}
            <Link href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
              UK data protection authority
            </Link>
            .
          </p>
          <p className="mt-4">
            If you are located in Switzerland, you may contact the{" "}
            <Link href="https://www.edoeb.admin.ch/edoeb/en/home.html">
              Federal Data Protection and Information Commissioner
            </Link>
            .
          </p>

          <div id="withdrawconsent" className="mt-6">
            <p>
              <strong>
                <u>Withdrawing your consent:</u>
              </strong>{" "}
              If we are relying on your consent to process your personal
              information, which may be express and/or implied consent depending
              on the applicable law, you have the right to withdraw your consent
              at any time. You can withdraw your consent at any time by
              contacting us by using the contact details provided in the section
              "
              <InternalLink href="#contact">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </InternalLink>
              " below.
            </p>
            <p className="mt-4">
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>
          </div>

          <div className="mt-6">
            <p>
              <strong>
                <u>Opting out of marketing and promotional communications:</u>
              </strong>{" "}
              You can unsubscribe from our marketing and promotional
              communications at any time by clicking on the unsubscribe link in
              the emails that we send, or by contacting us using the details
              provided in the section "
              <InternalLink href="#contact">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </InternalLink>
              " below. You will then be removed from the marketing lists.
              However, we may still communicate with you — for example, to send
              you service-related messages that are necessary for the
              administration and use of your account, to respond to service
              requests, or for other non-marketing purposes.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold">Account Information</h3>
            <p className="mt-2">
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
              <li>
                Log in to your account settings and update your user account.
              </li>
            </ul>
            <p className="mt-2">
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal
              requirements.
            </p>
          </div>

          <div className="mt-6">
            <p>
              <strong>
                <u>Cookies and similar technologies:</u>
              </strong>{" "}
              Most Web browsers are set to accept cookies by default. If you
              prefer, you can usually choose to set your browser to remove
              cookies and to reject cookies. If you choose to remove cookies or
              reject cookies, this could affect certain features or services of
              our Services. For further information, please see our Cookie
              Notice:{" "}
              <Link href="https://upvachi.vercel.app/cookies">
                https://upvachi.vercel.app/cookies
              </Link>
              .
            </p>
          </div>
          <p className="mt-6">
            If you have questions or comments about your privacy rights, you may
            email us at upvachi@gmail.com.
          </p>
        </div>

        <div id="DNT" className="mt-12 space-y-4 text-[15px] leading-relaxed">
          <h2 className="text-2xl font-bold">
            12. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <p>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage, no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this Privacy Notice.
          </p>
          <p>
            California law requires us to let you know how we respond to web
            browser DNT signals. Because there currently is not an industry or
            legal standard for recognizing or honoring DNT signals, we do not
            respond to them at this time.
          </p>
        </div>

        <div
          id="uslaws"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> If you are a resident of California,
            Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
            Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
            Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may
            have the right to request access to and receive details about the
            personal information we maintain about you and how we have processed
            it, correct inaccuracies, get a copy of, or delete your personal
            information. You may also have the right to withdraw your consent to
            our processing of your personal information. These rights may be
            limited in some circumstances by applicable law. More information is
            provided below.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">
            Categories of Personal Information We Collect
          </h3>
          <p>
            The table below shows the categories of personal information we have
            collected in the past twelve (12) months. The table includes
            illustrative examples of each category and does not reflect the
            personal information we collect from you. For a comprehensive
            inventory of all personal information we process, please refer to
            the section "
            <InternalLink href="#infocollect">
              WHAT INFORMATION DO WE COLLECT?
            </InternalLink>
            "
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-black text-[15px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-black p-2 text-left font-bold w-1/3">
                    Category
                  </th>
                  <th className="border border-black p-2 text-left font-bold w-1/2">
                    Examples
                  </th>
                  <th className="border border-black p-2 text-left font-bold w-auto">
                    Collected
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 align-top">
                    A. Identifiers
                  </td>
                  <td className="border border-black p-2 align-top">
                    Contact details, such as real name, alias, postal address,
                    telephone or mobile contact number, unique personal
                    identifier, online identifier, Internet Protocol address,
                    email address, and account name
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    B. Personal information as defined in the California
                    Customer Records statute
                  </td>
                  <td className="border border-black p-2 align-top">
                    Name, contact information, education, employment, employment
                    history, and financial information
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    C. Protected classification characteristics under state or
                    federal law
                  </td>
                  <td className="border border-black p-2 align-top">
                    Gender, age, date of birth, race and ethnicity, national
                    origin, marital status, and other demographic data
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    D. Commercial information
                  </td>
                  <td className="border border-black p-2 align-top">
                    Transaction information, purchase history, financial
                    details, and payment information
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    E. Biometric information
                  </td>
                  <td className="border border-black p-2 align-top">
                    Fingerprints and voiceprints
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    F. Internet or other similar network activity
                  </td>
                  <td className="border border-black p-2 align-top">
                    Browsing history, search history, online behavior, interest
                    data, and interactions with our and other websites,
                    applications, systems, and advertisements
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    G. Geolocation data
                  </td>
                  <td className="border border-black p-2 align-top">
                    Device location
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    H. Audio, electronic, sensory, or similar information
                  </td>
                  <td className="border border-black p-2 align-top">
                    Images and audio, video or call recordings created in
                    connection with our business activities
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    I. Professional or employment-related information
                  </td>
                  <td className="border border-black p-2 align-top">
                    Business contact details in order to provide you our
                    Services at a business level or job title, work history, and
                    professional qualifications if you apply for a job with us
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    J. Education Information
                  </td>
                  <td className="border border-black p-2 align-top">
                    Student records and directory information
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    K. Inferences drawn from collected personal information
                  </td>
                  <td className="border border-black p-2 align-top">
                    Inferences drawn from any of the collected personal
                    information listed above to create a profile or summary
                    about, for example, an individual’s preferences and
                    characteristics
                  </td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 align-top">
                    L. Sensitive personal Information
                  </td>
                  <td className="border border-black p-2 align-top"></td>
                  <td className="border border-black p-2 align-top text-center">
                    NO
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            We may also collect other personal information outside of these
            categories through instances where you interact with us in person,
            online, or by phone or mail in the context of:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>
              Facilitation in the delivery of our Services and to respond to
              your inquiries.
            </li>
          </ul>
          <p>
            We will use and retain the collected personal information as needed
            to provide the Services or for:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Category H - As long as the user has an account with us</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">
            Sources of Personal Information
          </h3>
          <p>
            Learn more about the sources of personal information we collect in "
            <InternalLink href="#infocollect">
              WHAT INFORMATION DO WE COLLECT?
            </InternalLink>
            "
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">
            How We Use and Share Personal Information
          </h3>
          <p>
            Learn more about how we use your personal information in the
            section, "
            <InternalLink href="#infouse">
              HOW DO WE PROCESS YOUR INFORMATION?
            </InternalLink>
            "
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">
            Will your information be shared with anyone else?
          </h3>
          <p>
            We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Learn more about how we disclose personal information to in the
            section, "
            <InternalLink href="#whoshare">
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </InternalLink>
            "
          </p>
          <p>
            We may use your personal information for our own business purposes,
            such as for undertaking internal research for technological
            development and demonstration. This is not considered to be
            "selling" of your personal information.
          </p>
          <p>
            We have not disclosed, sold, or shared any personal information to
            third parties for a business or commercial purpose in the preceding
            twelve (12) months. We will not sell or share personal information
            in the future belonging to website visitors, users, and other
            consumers.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Your Rights</h3>
          <p>
            You have rights under certain US state data protection laws.
            However, these rights are not absolute, and in certain cases, we may
            decline your request as permitted by law. These rights include:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              <strong>Right to know</strong> whether or not we are processing
              your personal data
            </li>
            <li>
              <strong>Right to access</strong> your personal data
            </li>
            <li>
              <strong>Right to correct</strong> inaccuracies in your personal
              data
            </li>
            <li>
              <strong>Right to request</strong> the deletion of your personal
              data
            </li>
            <li>
              <strong>Right to obtain a copy</strong> of the personal data you
              previously shared with us
            </li>
            <li>
              <strong>Right to non-discrimination</strong> for exercising your
              rights
            </li>
            <li>
              <strong>Right to opt out</strong> of the processing of your
              personal data if it is used for targeted advertising (or sharing
              as defined under California’s privacy law), the sale of personal
              data, or profiling in furtherance of decisions that produce legal
              or similarly significant effects ("profiling")
            </li>
          </ul>
          <p className="mt-4">
            Depending upon the state where you live, you may also have the
            following rights:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Right to access the categories of personal data being processed
              (as permitted by applicable law, including the privacy law in
              Minnesota)
            </li>
            <li>
              Right to obtain a list of the categories of third parties to which
              we have disclosed personal data (as permitted by applicable law,
              including the privacy law in California, Delaware, and Maryland)
            </li>
            <li>
              Right to obtain a list of specific third parties to which we have
              disclosed personal data (as permitted by applicable law, including
              the privacy law in Minnesota and Oregon)
            </li>
            <li>
              Right to review, understand, question, and correct how personal
              data has been profiled (as permitted by applicable law, including
              the privacy law in Minnesota)
            </li>
            <li>
              Right to limit use and disclosure of sensitive personal data (as
              permitted by applicable law, including the privacy law in
              California)
            </li>
            <li>
              Right to opt out of the collection of sensitive data and personal
              data collected through the operation of a voice or facial
              recognition feature (as permitted by applicable law, including the
              privacy law in Florida)
            </li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">
            How to Exercise Your Rights
          </h3>
          <p>
            To exercise these rights, you can contact us by submitting a{" "}
            <Link href="https://app.termly.io/notify/2f9dc683-f51a-4442-8f8b-5c799aec8efe">
              data subject access request
            </Link>
            , by emailing us at upvachi@gmail.com, by visiting{" "}
            <Link href="https://upvachi.vercel.app/contact">
              https://upvachi.vercel.app/contact
            </Link>
            , or by referring to the contact details at the bottom of this
            document.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Request Verification</h3>
          <p>
            Upon receiving your request, we will need to verify your identity to
            determine you are the same person about whom we have the information
            in our system. We will only use personal information provided in
            your request to verify your identity or authority to make the
            request. However, if we cannot verify your identity from the
            information already maintained by us, we may request that you
            provide additional information for the purposes of verifying your
            identity and for security or fraud-prevention purposes.
          </p>
          <p className="mt-4">
            If you submit the request through an authorized agent, we may need
            to collect additional information to verify your identity before
            processing your request and the agent will need to provide a written
            and signed permission from you to submit such request on your
            behalf.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Appeals</h3>
          <p>
            Under certain US state data protection laws, if we decline to take
            action regarding your request, you may appeal our decision by
            emailing us at upvachi@gmail.com. We will inform you in writing of
            any action taken or not taken in response to the appeal, including a
            written explanation of the reasons for the decisions. If your appeal
            is denied, you may submit a complaint to your state attorney
            general.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">
            California "Shine The Light" Law
          </h3>
          <p>
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us by using the contact
            details provided in the section "
            <InternalLink href="#contact">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </InternalLink>
            "
          </p>
        </div>

        <div
          id="policyupdates"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            14. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p className="italic">
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </p>
          <p className="mt-4">
            We may update this Privacy Notice from time to time. The updated
            version will be indicated by an updated "Revised" date at the top of
            this Privacy Notice. If we make material changes to this Privacy
            Notice, we may notify you either by prominently posting a notice of
            such changes or by directly sending you a notification. We encourage
            you to review this Privacy Notice frequently to be informed of how
            we are protecting your information.
          </p>
        </div>

        <div
          id="contact"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p>
            If you have questions or comments about this notice, you may email
            us at upvachi@gmail.com or contact us by post at:
          </p>
          <div className="mt-2 not-italic">
            <p>UpVachi</p>
            <p>House No. 8, Aashriya Colony</p>
            <p>Phase 2, Sri Ram Nagar, Huzir</p>
            <p>RANCHI, Jharkhand 835217</p>
            <p>India</p>
          </div>
        </div>

        <div
          id="request"
          className="mt-12 space-y-4 text-[15px] leading-relaxed"
        >
          <h2 className="text-2xl font-bold">
            16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <p>
            Based on the applicable laws of your country or state of residence
            in the US, you may have the right to request access to the personal
            information we collect from you, details about how we have processed
            it, correct inaccuracies, or delete your personal information. You
            may also have the right to withdraw your consent to our processing
            of your personal information. These rights may be limited in some
            circumstances by applicable law. To request to review, update, or
            delete your personal information, please fill out and submit a{" "}
            <Link href="https://app.termly.io/notify/2f9dc683-f51a-4442-8f8b-5c799aec8efe">
              data subject access request
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
