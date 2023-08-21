import React from "react";
import bannerImg from "../images/TermsCond.jpg";
import "../css/tnc.css";

const Tnc = () => {
  return (
    <div className="tnc">
      <div className="tnc__banner">
        <img
          className="tnc__banner--img img-fluid"
          src={bannerImg}
          alt="TNC Banner"
        />
      </div>
      <h3 className="tnc__title text-default-color">
        Axis Bank API Hub - Terms and Conditions
      </h3>
      <div className="container">
        <p>
          Thank you for your interest in Axis Bank and welcome to the Axis Bank
          Developer Portal ("Development Portal").
        </p>
        <p>
          Please read these terms and conditions of use carefully, as these
          shall form an agreement between you ("you" or "your") and Axis bank
          Limited ("Axis Bank") and same shall regulate your usage of the Portal
          specified by the Bank.
        </p>
        <p>
          Please note these terms and conditions are in addition to and not in
          derogation with the existing the privacy policies, information
          security policies or such other terms and conditions, as may be
          specified by Axis Bank from time to time.
        </p>
        <p>
          By checking the box indicating your acceptance, you agree to be bound
          by these terms and conditions.
        </p>
        <p>
          If you are accepting on behalf of a legal entity (organisation), then
          you represent that you have the necessary authority and power to
          legally accept these terms and conditions on behalf of said legal
          entity and also to bind said legal entity by the agreement, covered
          under these terms and conditions.If you do not accept this Agreement,
          you cannot use or access the Developer Portal.
        </p>
        <p className="mb-10">
          Axis Bank through the Developer portal, wish to offer you to use its
          Application Program Interface ("API") to enable you to enhance your
          products and services offerings to your concerned customers.
        </p>

        <h3 className="tnc__info--title text-default-color">Definitions</h3>
        <ul className="list-unstyled tnc__list">
          <li>
            “APIs or Mock APIs” means those APIs&nbsp;(“API”) made available via
            the Axis Bank Developer Portal which contains dummy data and are not
            linked to internal Axis bank environment
          </li>
          <li>
            “API Data” means any data or other content that we make available on
            or through the Axis Bank Developer Portal.
          </li>
          <li>
            “API Key” means the unique API Key that we issue to you to enable
            your App to access an API
          </li>
          <li>
            “App” means any software application that you develop, or intend to
            develop, through the use of an API
          </li>
          <li>“Axis Bank, us, we and our” means Axis Bank Limited</li>
          <li>
            “Axis Bank Developer Portal” refers to the online portal which we
            will make available to enable access to APIs and a Sandbox for
            application development
          </li>
          <li>“Data Set” means any data set forming part of the API Data.</li>
          <li>
            “Your Content” means information, material or other works (including
            any App and computer code forming part of such App) which resides on
            the Axis Bank Developer Portal and which is developed, created or
            placed on the Axis Bank Developer Portal by you.
          </li>
          <li>
            “Sandbox” here means a testing environment that isolates untested
            code changes and outright experimentation from production
            environment. It can be used to mimic the characteristics of
            production environment and create simulated responses from all APIs
            the application relies on
          </li>
        </ul>
        <p>
          This Site is operated by Axis Bank Limited. Axis Bank Limited is
          company incorporated within the meaning of the Companies Act, 1956
          carrying on its banking business as per the provisions of the Banking
          Regulation Act 1949 having its Registered Office at [ ] and Corporate
          Officer at Axis House, Wadia International Center, PB Marg, Worli,
          Mumba, Maharashtra.
        </p>
        <p>
          References to the 'Axis Group' mean Axis Bank Limited, its
          subsidiaries and affiliated companies.
        </p>
        <p>
          References to 'Local Sites' mean other Axis Bank pages and web sites
          or pages and web sites issued by other entities within the Axis Bank
          Group.
        </p>
        <p>
          References to 'Site' mean Axis Bank Developer Portal&nbsp;and it’s
          associated APIs.
        </p>

        <p>
            References to ‘API Terms of Use’ mean these terms and conditions.
        </p>

        <p>
          References to 'you', 'your' and 'yours' mean the individual User
          accessing and using the Axis Bank Developer Portal, the APIs and/or
          any API Data on behalf of an organisation or in their capacity as an
          employee or contractor of an organisation
        </p>

        <p>
          We may amend, add to, supplement or replace these API Terms of Use
          from time to time by publishing any such amendment, addition,
          supplement or replacement on the Axis Bank Developer Portal (and you
          should check for any such amendment, addition, supplement or
          replacement each time you log on to the Developer Portal). Your use or
          access of the Axis Bank Developer Portal, APIs or any API Data after
          any such amendment, addition, supplement or replacement has been made
          constitutes your acceptance of such amendments, additions, supplements
          or replacements.
        </p>

        <h3 className="tnc__info--title text-default-color">About Developer portal</h3>

        <ul className="list-unstyled tnc__list ps-4">
          <li>
              This Site gives you information about the mock APIs provided by
              Axis Bank, our subsidiaries and the other partner companies. The
              Site is an information source to inform software developers how to
              access our Banking APIs.
          </li>
          <li>
              Axis Bank's operation of the Site, the APIs, does not constitute
              an offer of any products or services or partnership provided by
              any of the Axis Bank Group members.&nbsp;If the Axis bank business
              team and developer agree to partner with each other based on
              product/service/app created through this portal, then they will
              proceed to UAT&nbsp;and Production testing after all necessary
              approvals and agreements are in place.
          </li>
        </ul>

        <h3 className="tnc__info--title text-default-color">Developer’s Terms</h3>

        <ol className="list-unstyled ps-4">
          <li>
              You represent and warrant that you have the authority to bind
              yourself or your organisation to these API Terms of Use; and also
              to acknowledge the acceptance of these API Terms of Use on your
              behalf or your organisation.
          </li>
          <li>
              You (including organisation) will ensure that all of your
              employees, contractors and agents are aware of, and comply with
              these API Terms of Use; and will be liable for all acts and
              omissions of any person to whom you allow access to the Axis Bank
              Developer portal
          </li>
          <li>
              If you are granted access to Axis Bank Developer Portal, we will
              provide you with certain Developer Program Tools for use in our
              Sandbox.
          </li>
          <li>
              To gain access to the Axis Bank Developer portal, after you have
              provided us with certain required information, we may elect to
              send you an invitation email. The said invitation email will have
              login credentials assigned to you, which will allow you to create
              your online developer account for the purpose of necessary access
              to the APIs/Mock APIs shared by Axis Bank. Please note the login
              credentials assigned to you shall be confidential in nature, which
              cannot be shared or divulge with any unauthorised person in any
              manner whatsoever.
          </li>
          <li>
              Once you have been registered for the Axis Bank Developer Portal
              and wish to access and use the APIs release by Axis Bank, you will
              need to apply separately for an API Key. Please note the AIP Key
              allotted to you shall be proprietary and confidential to Bank, you
              are not permitted or authorised to share or copy or reverse
              engineer the same in any manner whatsoever. On a case-to-case
              basis, we may grant you access to certain APIs and related
              software that we make available through the Developer portal, as
              well as relevant documentation. An API Key for an App will,
              initially, allow you access to our Sandbox environment, which
              contains mock data. You will need to apply for: 
          </li>
        </ol>

        <ol type="a">
            <li><p>A new API Key for each new App;</p></li>
            <li>
                <p>Our approval, and, if we require it, a new API
          Key, for each update or new version to or of an App; and</p>
            </li>
            <li>
                <p>Our approval each time you move an App from the
          sandbox environment to the production environment, which allows access
          to production data</p>
            </li>
        </ol>

        <ol className="list-unstyled ps-4">
          <li>
            <p>
              We will require certain additional information, documentation or
              clarification in respect of any Application(s) you make for an API
              Key shared by Axis Bank and/or for approval of Axis Bank. Please
              note Axis Bank in its sole and exclusive discretion, reserve the
              right either to proceed with or not to proceed with your
              Application(s) which you have made for API Key allocated to you,
              until you have provided such information, documentation or
              clarification to the satisfaction of Axis Bank. Please note
              following factors, we may (but will not be required to) take into
              account in considering any Application(s) you make include:
            </p>

            <ol className="list-unstyled ps-4">
              <li>The nature and purpose of your App
              </li>
              <li>Background of you or your company/employer/agent
              </li>
              <li>Personal details&nbsp;
              </li>
            </ol>
          </li>
          <li>
              Axis Bank, may also require that Your Application(s) made for API
              Key allocated to you, must comply with certain privacy policies,
              end user obligations, and procedures that Axis Bank will stipulate
              from time to time. Please note that your Application(s) including
              its development processes will be subject to an audit and must
              employ secure techniques and rigorous testing parameters. Please
              also account for these realities with any use of our
              APIs.&nbsp;&nbsp;
          </li>
        </ol>

        <h3 className="tnc__info--title text-default-color">App development rights</h3>

        <ol className="list-unstyled ps-4">
          <li>
              You must keep all/ any API Key we issue to you secure, only use it
              for the organisation on whose behalf you agreed to these API Terms
              of Use or, if you are not an individual acting on behalf of an
              organisation or in your capacity as an employee or contractor of
              an organisation, only use it yourself, and must not disclose or
              transfer the API Key to, or otherwise allow the API Key to be used
              by, anyone else
          </li>
          <li>
              You acknowledge and agree that we may independently create apps,
              content, and other products or services that may be similar to or
              compete with your Application(s)&nbsp;and their content. Nothing
              in this Agreement will restrict or prevent us from creating and
              fully exploiting such apps, content, and other items, without any
              obligation to you.
          </li>
          <li><p>You agree not to</p>

            <ol className="list-unstyled ps-4">
              <li>
                  Reverse engineer, reverse compile, decrypt, deobfuscate,
                  unmask, or reverse assemble all or any portion of this
                  website, any Developer Content or any Developer Token (as
                  defined below);&nbsp;or
              </li>
              <li>
                  Distribute, disclose, publish, market, sell, rent, lease,
                  sublicense or assign to any third party any Developer Content
                  to which you have access under these terms unless otherwise
                  specifically authorised in writing by Axis Bank
              </li>
            </ol>
          </li>
        </ol>

        <h3 className="tnc__info--title text-default-color">No warranties and limitation of liability</h3>

        <ol className="list-unstyled ps-4">
          <li>
              The contents of the Site are distributed to you without any
              warranty of any kind. We and the third party content providers
              disclaim any and all warranties. Information on the Site is
              provided on an "as is" and "as available" basis and to the fullest
              extent permitted by law we do not give or make any warranty or
              representation of any kind, whether express or implied in respect
              of such information whether in respect of the Site. Your use of
              the Site is at your sole risk and consequences and Axis Bank
              including its officials, employees, agents shall not be held
              liable or responsible in respect of any loss, cost or expenses
              incurred or suffered by you in any manner whatsoever.
          </li>
          <li>
              Whilst the data provided through this Site’s APIs is as accurate,
              comprehensive and up-to-date as reasonably practicable, no
              warranty, expressed or implied, is made regarding accuracy,
              adequacy, completeness, legality, reliability or usefulness of any
              information. We do not warrant the accuracy, adequacy,
              completeness or timeliness of the information, material, products
              and services or the error-free use of the Site.
          </li>
          <li>
              We shall not be liable for any damages, losses or liabilities
              including without limitation, direct or indirect, special,
              incidental, consequential damages, losses or liabilities, in
              connection with your use of the Site or your reliance on or use or
              inability to use the information, materials, products and services
              on the Site, or in connection with any failure of performance,
              error, omission, interruption, defect, delay in operation or
              transmission, or line or system failure, even if you advise us of
              the possibility of such damages, losses or expenses.
          </li>
          <li>
              Your use of hyperlinks on the Site is at your own risk. We may
              provide hyperlinks to other locations on the Internet for
              information and convenience purposes only. No endorsement of third
              party web sites or content is implied. We are not responsible for
              the content of any other web sites or pages linked to or from the
              Site or any local Site. We have not verified the content of any
              such web sites, or pages. It is recommended that you view the
              linked website's terms or privacy notice pages to understand how
              use of that website may affect you.
          </li>
          <li>
              You hereby agree and acknowledge that, Axis Bank shall not be
              under any obligation of any kind whatsoever with respect to accept
              or use any Application(s) developed or made by you using API Keys
              allotted to you by accessing or using the Axis Bank Development
              Portal, merely by virtue of you are permitted and allowed to
              access and use Axis Bank Development Portal. Axis Bank shall have
              express right and liberty to allow similar access or use to Axis
              Bank Development Portal to any other third party or user and mere
              acceptance of these API Terms of Use by you shall not be construed
              that Axis Bank has allowed you to access to Axis Bank Development
              Portal on exclusivity basis. You also agree and acknowledge that,
              unless and until a definitive agreement have been executed and
              delivered between the Parties, with respect to acceptance and use
              of Application(s) developed by you basis API Key allotted by Axis
              Bank, there shall be no obligation on Axis Bank to accept any such
              Application(s) developed or made by you.
          </li>
        </ol>

        <h3 className="tnc__info--title text-default-color">Termination and Suspension</h3>


        <ol className="list-unstyled ps-4">
          <li>
              Axis Bank shall have right, at its sole and exclusive discretion,
              to terminate your access to the Axis Bank Developer Portal, the
              APIs and any API Data anytime. Axis Bank shall also have right, at
              its sole and exclusive discretion, to immediately suspend or
              terminate your access to the Axis Bank Developer Portal, the APIs
              and any API Data (or any element of them) if there is breach of
              API Terms of Use by you, or if there are reasonable grounds to
              believe, in our sole and exclusive discretion, that you have
              breached these API Terms of Use.
          </li>
          <li>
              Inactivity for 30 days on the Development portal will entail
              suspension of account
          </li>
        </ol>

        <h3 className="tnc__info--title text-default-color">Trademarks and copyright</h3>

        <ol className="list-unstyled ps-4">
          <li>
              We own all rights, title and interest (including any intellectual
              property rights) in and to the Axis Bank Developer Portal
              (including any content on it, other than Your Content), the APIs
              and API Data and all other software and systems used by us in
              connection with the API have right to terminate your access to the
              Axis Bank Developer Portal, the APIs and any API Data anytime.
          </li>
          <li>
              You must not promote or use your App or any API Data or any goods
              and services associated with your App or any API Data which
              implies or suggests your application or those goods and services
              are endorsed by or in any way affiliated with us, or any of our
              related companies
          </li>
          <li>
              You must not use any of our trademarks, logos or brands without
              our express written approval. You will comply with any guidelines
              issued by us regarding use of our trademarks, logos or brands. We
              may revoke any approval given in relation to our trademarks, logos
              or brands at any time Inactivity for 30 days on the portal will
              entail suspension of account
          </li>
          <li>
              Nothing in these API Terms of Use grants or transfers to you any
              intellectual property rights or other interest in any of our
              trademarks, logos or brand
          </li>
          <li>
              You also shall not claim or in any way imply in any advertising
              that your Apps are created, certified, sponsored, or endorsed in
              any manner by Axis bank. To clarify, this means that you cannot
              refer to Axis bank or the Developer portal in advertising,
              publicity releases, or promotional or marketing publications or
              correspondence to third parties without, in each case, securing
              our prior written consent.
          </li>
        </ol>

        <h3 className="tnc__info--title text-default-color">Indemnity</h3>

        <ol className="list-unstyled ps-4">
          <li>
              You agree to indemnify, defend and hold harmless Axis Bank, its
              affiliates, directors, officers, representatives, employees and
              agents (collectively, the “Indemnified Persons”), from and against
              any and all claims, actions, suits, proceedings, costs, damages,
              judgments, amounts paid in settlement and expenses (including
              without limitation reasonable attorneys’ fees and reasonable
              disbursements at actual) (collectively, “Loss”) incurred by the
              Indemnified Persons, to the extent directly suffered (excluding
              consequential or special losses), as a result of, arising from, or
              in connection with or relating to any matter inconsistent with, or
              any breach or inaccuracy of any representation, warranty, covenant
              or agreement made or failure to perform (whether in whole or part)
              any obligation required to be performed by them under this API
              Terms of Use or non-observance / non-compliance of any applicable
              laws, rules and regulations.
          </li>
        </ol>

        <h3 className="tnc__info--title text-default-color">Governing Law and Jurisdiction</h3>

        <ol className="list-unstyled ps-4">
          <li>
              The construction, validity and performance of these API Terms of
              Use shall be governed under the laws of India. The courts at
              Mumbai shall have exclusive jurisdiction in respect of any dispute
              arising out of or in connection with these API Terms of Use and
              access or usage of Axis Bank Development Portal. Axis Bank is
              absolved of any liability arising, direct or indirect, for
              non-compliance with the laws of any country other than India from
              the Axis Bank Development Portal is accessible.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Tnc;
