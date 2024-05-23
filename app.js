const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>

<script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css" />



  
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>




    <style id="custom-css-hk">
    .alertify-notifier.ajs-bottom {
        bottom: 100px !important;
    }

    * {
        font-family: 'Poppins', sans-serif;
    }

    .custom-form {
        border-radius: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        padding: 2% 5%;
    }

    .main-header {
        background-color: #0c71c3;
        color: white;
        padding: 2rem;
    }

    .main-header * {
        color: white;
    }


    .custom-form .form-grid {
        /* display: grid; */
        width: fit-content;
        /* margin-top: 30px;     */

    }



    .custom-form .form-grid label {
        margin: auto 0;
        font-weight: 400;
        display: block;
        margin-top: 20px;
        font-size: 0.9rem;
        margin-bottom: 7px;
        color: black;
    }

    .custom-form .form-grid input {
        font-size: 1rem;
        padding: 9px 17px;
        border-radius: 5px;
        outline: 0;
        color: black;
        border: 1px solid #636363;
        width: 100%;
    }

    input[type=radio] {
        width: fit-content !important;
    }


    input[type=checkbox] {
        width: fit-content !important;
    }


    .custom-form .form-grid h1 {
        margin: 0;
        font-size: 1rem;
        color: white;
        padding: 3px 10px;
        background-color: #0c71c3;

    }

    .custom-form .form-grid h1:hover {
        cursor: pointer;

        background-color: #cccccc;
    }

    #custom-form-submit {

        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 600;
        background-color: #0c71c3;
        color: white;
        border: none;
        box-shadow: 2px 2px black;
        /* border: 2px solid black; */
        transition: 0.2s;
        font-size: 1rem;
    }

    #custom-form-submit:hover {
        /* transform: translateY(-1px); */
        box-shadow: none;

    }

    @keyframes submit-btn-anim {
        from {
            opacity: 0.3;
        }

        to {
            opacity: 1;
        }
    }

    #custom-form-submit.loading {
        animation: linear alternate 0.5s submit-btn-anim infinite;
    }

    .custom-form .small {
        font-size: 0.7rem;
        font-weight: 600;
    }


    #send_otp_button {
        background-color: #0c71c3;
        border: none;
        color: white;
        border-radius: 0px;
        padding: 10px 20px;
        transition: 0.2s;
        border-radius: 5px;
        font-size: 1rem;
    }

    #send_otp_button:hover {
        background-color: #0e8ef7;
        /* scale: 1.02; */
    }

    #send_otp_button:disabled {
        background-color: #084272;

    }

    #send_otp_button:disabled:hover {
        background-color: #0c71c3;

    }

    #thankyou-view {
        /* display: block; */
        display: none;
        border: 3px solid #0e8ef7;
    }

    #form-view {
        /* display: none; */
        display: block;

    }

    .alertify-notifier.ajs-right {
        right: 0 !important;
        left: 0 !important;
        width: 100% !important;
    }

    .alertify-notifier.ajs-right .ajs-message {

        right: 0 !important;
        background-color: #0b70c3 !important;
        color: white !important;
        left: 50% !important;
        transform: translate(-50%, -200%) !important;
        text-shadow: none !important;
    }

    .alertify-notifier .ajs-message.ajs-error {
        font-weight: 600 !important;
        text-shadow: none !important;
        background-color: #CA1111 !important;
        top: 50% !important;
        left: 50% !important;
        right: 0 !important;
        bottom: 0 !important;
        transform: translate(-50%, -200%) !important;
    }





    .alertify-notifier .ajs-message.ajs-success {
        font-weight: 600 !important;
        text-shadow: none !important;
        background-color: green !important;
        top: 50% !important;
        left: 50% !important;
        right: 0 !important;
        bottom: 0 !important;
        transform: translate(-50%, -200%) !important;
    }

    #enter-otp-field {
        display: none;
    }
</style>


<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/46254236.js"></script>
<!-- End of HubSpot Embed Code -->

  </head>
  <body>
    <section>
      Hello from Render!
    </section>



     <div style="text-align: center;" class="main-header">
        <h1 style="
        line-height: 1.3;
        font-size: 1.4rem;
    ">Get the Justice You Deserve
        </h1>
        <h5 style="
        line-height: 1.5;
        font-size: 0.9rem;
    ;">Complete the form below to find out if you qualify for compensation.</h5>
    </div>
    <div class="custom-form">
        <div class="thankyou-switcher">

            <div id="form-view" class="form-view">

                <form onsubmit="return false;" id="contactForm-custom">
                    <div class="form-grid">
                        <label for="name">Name (Alphabets only):</label>
                        <input type="text" id="name" name="firstname" pattern="[A-Za-z ]+" required>
                        <br />
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        <br />

                        <label for="phone">Phone (xxx-xxx-xxxx or xxxxxxxxxx):</label>
                        <div>
                            <div onclick="document.getElementById('phone').focus()"
                                style="display:flex;border:1px solid #636363; width: 100%;border-radius: 5px">
                                <p style="margin:auto 0;padding:0.5rem;font-size: 0.8rem;color:black;">+1</p>
                                <input style="border:none;" type="number" id="phone" name="phone"
                                    pattern="^\d{3}-\d{3}-\d{4}$|^\d{10}$" required>
                            </div>

                            <button type="button" style="display: inline-flex;margin-top:5px;" id="send_otp_button"
                                onclick="handleSubmit()">Send OTP</button>
                        </div>

                        <div id="enter-otp-field">

                            <label for="phone">Verify Mobile Number</label>
                            <input type="number" id="otp" name="otp" required>
                            <br />
                        </div>
                        <br />


                        <div>
                            <label>Were you or your loved one directly or indirectly exposed to Roundup at your
                                occupation
                                or
                                residential?</label>
                        </div>
                        <div>
                            <input type="radio" id="occupation-yes"
                                name="were_you_or_your_loved_one__directly_or_indirectly_exposed_to_roundup_at_your_occupation_or_residen"
                                value="yes" required>
                            <label style="display: inline-flex;margin-top: 0;" for="occupation-yes">Yes</label>
                            <input type="radio" id="occupation-no"
                                name="were_you_or_your_loved_one__directly_or_indirectly_exposed_to_roundup_at_your_occupation_or_residen"
                                value="no" required>
                            <label style="display: inline-flex;margin-top: 0;" for="occupation-no">No</label>
                        </div>
                        <div>
                            <label>Were you or your loved one diagnosed with Non-Hodgkin’s Lymphoma?
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="diagnosed-yes"
                                name="w_ere_you_or_your_loved__one_diagnosed_with_non_hodgkin_s_lymphoma_" value="yes"
                                required>
                            <label style="display: inline-flex;margin-top: 0;" for="diagnosed-yes">Yes</label>
                            <input type="radio" id="diagnosed-no"
                                name="w_ere_you_or_your_loved__one_diagnosed_with_non_hodgkin_s_lymphoma_" value="no"
                                required>
                            <label style="display: inline-flex;margin-top: 0;" for="diagnosed-no">No</label>
                        </div>
                        <div>

                        </div>
                        <div>
                            <div style="display: flex;margin-top:20px">
                                <input style="display:block;margin-top: 6px;margin-bottom: auto;margin-right: 3px;"
                                    type="checkbox" id="consent_roundup_new_no_otp" name="consent_roundup_new_no_otp"
                                    value="accepted" required>

                                <label for="consent" style="margin-top: 0;">By selecting this box,
                                    By selecting this box, I expressly consent to receive autodialed calls and texts at
                                    the number provided above for the purposes of facilitating my retention of counsel.
                                    I acknowledge that I am not required to provide this consent as a condition of
                                    retaining counsel or utilizing services. This request and permission override any
                                    do-not-call registry rules or list, or any other applicable law or regulation. Those
                                    responding to this ad confirm they have carefully read and consent to the <a href="https://publicjusticeadvocates.com/terms-of-use/" target="”_blank”" rel="noopener">Terms of
                                  Use</a> and <a href="https://publicjusticeadvocates.com/privacypolicy/" target="”_blank”" rel="noopener">Privacy Policy</a> contained in any links, website or publication by the law
                                    firm and/or its representatives, marketing or otherwise. I understand that
                                    submitting this information does not create an attorney-client relationship.
                                </label>
                            </div>
                        </div>
                        <button id="custom-form-submit" class="" type="submit">Verify OTP & Submit Form</button>
                        <p class="small">*You can submit the form only after verifying your number</p>

                    </div>

                </form>
            </div>
            <div id="thankyou-view" class="thankyou-view">
                <h1 style="text-align: center;">Form has been submitted, Thank You for showing interest ! </h1>
            </div>
        </div>
    </div>


  </body>





</html>
`
