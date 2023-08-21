import React from "react";


const HowitWerks = () => {
    return (
        <div className="how-it-werks">
            <div className="container">
                <div class="pageheading text-default-color"> 
                    Getting Started with Axis Developer
                </div>
                <p>It's easy! Explore our APIs. Refer to the documentation. Test the APIs instantly on the sandbox. And build your apps using the APIs. All you need to do is register your apps with us.</p>
                <div className="row margin-top-50">
                    <div className="col-md-4"></div>
                    <div className="col-md-7 offset-md-1 how-it-works-content">
                        <h3 className="text-default-color">Step 1: Sign Up with Axis Bank Developer Portal</h3>
                        <p>Sign up with Axis Bank Developer Portal in easy steps. Post your sign up approval, you can login to use our sandbox APIs.</p>
                        <h3 className="text-default-color">Step 2: Create Your Application</h3>
                        <p>Create your app to use our products/APIs. You will get the client id and secret key to use APIs.</p>
                        <h3 className="text-default-color">Step 3: Browse and Subscribe APIs</h3>
                        <p>Take a look at our APIs to see what choices are available. Is there an API you can utilize in one of your applications? Subscribe the required APIs that are best suitable for your use case.</p><h3>Step 4: Test APIs</h3>
                        <p>You can test APIs request/response which will help you to build your app.</p>
                        <p><strong>Note: In UAT and Production environments the API request/response is encrypted as a security feature. You can see the direct comparison and code samples for encrypting by visiting our guide <a className="text-default-color" href="/">here</a>. Alternatively, you can check out all our security features <a className="text-default-color" href="/">here</a>.</strong></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowitWerks;