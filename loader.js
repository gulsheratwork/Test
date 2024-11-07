// chat-widget.js

// Load styles dynamically
const style = document.createElement('style');
style.innerHTML = `/* Container for the entire welcome message section */
.welcome-message-container {
  position: absolute;
  bottom: 20px; /* Adjust this value as needed to control how close it is to the bottom */
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px; /* Adds some padding around the message */
  box-sizing: border-box;
}

/* Styling for the welcome message text */
.welcome-message {
  font-family: 'Poppins', sans-serif;
  font-size: 16px; /* Adjust font size as needed */
  color: #ffffff; /* Set color for text */
  background: rgba(0, 0, 0, 0.6); /* Adds a semi-transparent background */
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
}

/* Button styling */
.welcome-button {
  margin-top: 10px; /* Space between message and button */
  padding: 10px 20px;
  font-size: 14px;
  color: #007AFF;
  background-color: #ffffff;
  border: 2px solid #007AFF;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

/* Ensuring the container is at the bottom */
.video-container {
  position: relative; /* Positioning context for absolute positioning */
}

.body {
  font-family: 'poppins' !important;
  line-height: 1.5 !important;
}

.text-launcher {
  margin-top: 30px !important;
}

.loading-border {
  left: 30px !important;
}

.submitt-icon {
  text-align: left;
  background-color: hsla(0, 0%, 100%, 0.85);
  border: 2px solid #007AFF;
  padding: 9px 14px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 10px;
  width: fit-content;
  box-sizing: border-box;
  font-family: 'poppins' !important;
  display: flex !important;
}

.submitt-icon span {
  width: 20px; height: 20px; border: 2px solid #498FE1; border-radius: 50%; display: inline-block; margin-right: 10px;
}

.chat-container {
  position: fixed;
  bottom: 430px;
  right: -50px;
  width: 400px;
  z-index: 2000;
  display: flex;
  font-family: 'poppins' !important;
  display: flex;
  top: 50% !important;
  right: 0 !important;
  transform: translateY(-50%) !important;
  z-index: 1000 !important;
  width: 365px !important;
  line-height: 1.5 !important;
}

@media only screen and (max-width: 480px) {
  .chat-container {
      top: 80% !important;
  }

  .chat-widget {
      margin-top: -170px !important;
  }
}

.wec-whit {
  color: black !important;
  margin-bottom: 15px;
  margin-top: 5px;
}

.video-thumbnail {
  position: relative;
  width: 110px;
  height: 110px;
  padding: 5px;
  cursor: pointer;
  overflow: hidden;
}

.video-circle {
  position: relative;
/* Important for positioning the green            dot */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: -2px 2px 8px rgba(60, 60, 60, .6);
}

.online-dot {
  position: absolute;
  bottom: 0px;
/* Adjust this value based on where you want               the dot */
  right: 20px;
/* Adjust this value based on where you want               the dot */
  width: 20px;
  height: 20px;
  background-color: #2ECC71;
  border-radius: 50%;
  border: 2px solid white;
/* Optional: Adds a small white               border around the dot */
}

#thumbnail-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chat-widget {
  display: none;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #fff;
  position: fixed;
  bottom: 190px;
  right: 50px;
  z-index: 999;
  overflow: hidden;
  top: 50% !important;
  transform: translateY(-50%) !important;
  width: 350px !important;
  box-shadow: -5px 5px 8px rgba(60, 60, 60, .6);
  border: 1px solid #737373;
  margin-top: 0px !important;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  z-index: -1;
}

#background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
}

.chat-header {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  align-items: center;
  z-index: 3;
  padding: 10px;
/* margin-top: 10px !important; */
  margin-right: -18px !important;
}

#refresh-btn,
#close-btn {
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  margin-right: 10px;
}

#close-btn {
  color: white;
  border-radius: 5px;
  font-size: 16px;
  position: relative;
}

.chat-content {
  position: relative;
  z-index: 1;
/* padding: 20px; */
  color: rgb(0, 0, 0);
  overflow-y: auto;
  scrollbar-width: thin;
  box-sizing: border-box;
/* margin-bottom: 10px; */
  padding: 45px 10px 0 15px !important;
  height: 85%;
}


.message {
  font-size: 16px;
  padding: 10px 0px;
  margin-bottom: 8px;
  border-radius: 20px;
  width: fit-content;
  word-wrap: break-word;
  position: relative;
}

.dropdown-btn {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Dropdown content styling */
.dropdown-content {
    display: none;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    margin-top: 8px;
    padding: 10px;
    width: 100%;
    max-width: 93%;
}

.dropdown-content label {
    display: block;
    padding: 8px 0;
    font-size: 16px;
}

.message.bot-message {
  color: black;
  margin-right: auto;
  text-align: left;
}

.message ot-message {
  color: rgb(0, 0, 0) !important;
  margin-right: auto;
  text-align: left;
  padding-left: 5px;
}

.message.user-message {
	overflow: hidden !important;
	max-width: 65% !important;
  background-color: hsla(0, 0%, 100%, 0.85);
  border: 2px solid #007AFF;
  color: black;
  margin-left: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
}

.chat-options {
  display: block;
  flex-direction: column;
  max-height: 1100px;
  overflow-y: initial;
}

.option-btn {
  text-align: left;
  background-color: hsla(0, 0%, 100%, 0.85);
  border: 2px solid #007AFF;
  padding: 9px 14px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 10px;
  width: fit-content;
  box-sizing: border-box;
  font-family: 'poppins' !important;
}

.option-btn:hover {
  background-color: #007AFF;
  color: white;
}



.input-group {
  display: block;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 10px;
}

.input-field {
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
  margin-right: 0px;
  border: 2px solid #007AFF !important;
}

.submit-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.submit-btn:hover {
  background-color: #218838;
}

.submit-icon {
  padding-top: 7px;
  padding-bottom: 7px;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 0px;
  width: 100%;
  border-radius: 4px;
  border: navajowhite;
  background: #007AFF;
}

.submit-icon img {
  width: 20px !important;
  height: 20px !important;
}

.move-video-to-corner {
  width: 120px !important;
  height: 214px !important;
  position: relative;
  margin-bottom: 10px;
  z-index: 3;
  transition: all 0.5s ease;
  border-radius: 20px;
  overflow: hidden;
  z-index: -3;
/* margin-top: -40px; */
}

.move-video-to-corner #play-pause-btn, pay-pause-btn {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

#play-pause-btn, pay-pause-btn {
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  margin-right: 15px;
}

.chat-hear-hide {
  display: none !important;
}

#white-overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 4;
}

h1.text-launch {
  font-size: 20px;
}

img#close-icon {
  width: 30px;
}

img#refresh-icon,
img#play-pause-icon,
img#mute-unmute-icon {
  width: 30px;
}

.Empty-container {
  height: 332px;
}

.text-launch {
  box-shadow: -2px 2px 10px rgba(60, 60, 60, .6);
  background-color: #fff !important;
  border-radius: .625rem !important;
  font-size: 15px !important;
  font-weight: 400;
  margin: 0 10px;
  max-width: 300px;
  overflow: visible !important;
  padding: 0px 10px;
  position: relative;
  text-overflow: ellipsis;
  white-space: normal;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  height: 40px;
}

button#mute-unmute-btn {
  background-color: transparent;
  padding: 0;
  border: none;
  margin-right: auto;
  text-align: left;
}

.play-option {
  z-index: 3;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  position: relative;
}

img#play-pause-icon.play-option {
  margin-bottom: -100px;
  margin-left: 40px;
}

.edit-btn, .undo-btn {
  border: none;
  cursor: pointer;
  margin-left: auto;
  align-items: center;
  display: flex;
  margin-right: 0px;
  text-align: end;
  background-color: #007AFF;
  border-radius: 20px;
  color: #fff;
  min-width: 50px;
  line-height: 28px;
  height: 28px;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  padding: 0 5px;
  text-align: center;
  justify-content: center;
}

.edit-btn img, .undo-btn img {
  width: 16px;
  height: 16px;
}

.typing-indicator {
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 14px;
  color: #999;
}

.typing-indicator img {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 50px;
}

.option-btn:hover {
    color: white !important;
}

select#state-select, .option-select {
  width: 100%;
  padding: 10px 6px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
}

.message-container {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
}

.undop {
    margin-bottom: 0px !important;
    margin-top: 0px !important
}

.message {
  border-radius: 10px;
  margin-right: 10px;
  max-width: 98%;
  word-wrap: break-word;
}

.edit-btn, .undo-btn {
  border: none;
  cursor: pointer;
  margin-left: 5px;
}

.edit-btn img, .undo-btn img {
  width: 16px;
  height: 16px;
  margin-right: 3px;
}

select.country-code-dropdown {
  margin-right: 7px;
  width: 28%;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: -12px;
  border-width: 2px;
  border-color: #007AFF;
  border-radius: 10px;
}

.text-launch:after {
  border: 8px solid;
  border-color: transparent transparent transparent #fff !important;
  bottom: auto;
  content: " ";
  height: 0;
  left: auto;
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
}

.option-select {
    padding: 10px;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border: 2px solid #007aff;
    font-weight: 500;
    font-family: 'Poppins';
    border-radius: 10px;
}

.message.ot-message {
  color: white;
}

select#find-us-select {
  width: 100%;
}

span.message-time {
  color: #c3c3c3;
  opacity: .87;
  font-size: 8px;
  margin-top: 9px;
  text-align: center;
  position: absolute;
  padding-left: 6px;
}

img.user-image {
  width: 25px;
  height: 25px;
  border-radius: 50px;
}

.input-group {
  display: block;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.input-field {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  width: 45%;
}

.submit-icon img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.bot-message {
  margin: 15px 0px !important;
}

.first-name {
  width: 48.4% !important;
}

.phone-num {
  width: 69% !important;
  margin-bottom: 10px;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
  margin-right: 0px !important;
  font-size: 16px;
}

.first-name,
.phone-num {
  border: 2px solid #007AFF !important;
}

#state-select,
#month-select,
#year-select,
#find-us-select {
  border: 2px solid #007AFF !important;
  border-radius: 8px !important;
}

#month-select,
#year-select {
  width: 100% !important;
}

.country-code-dropdown {
  font-size: 14px !important;
}

img.user-image {
  margin-top: 5px;
}

.sticky-header {
  position: absolute;
  top: 15px;
  right: 20px;
  height: 30px;
  z-index: 2;
  justify-content: space-between;
}

.open-tab-link {
  background-image: url(https://intaker.azureedge.net/new-dashboard/iconsChat/openTabWithShadow.svg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: -38px;
  cursor: pointer;
  display: inline-block;
  height: 42px;
  position: absolute;
  width: 42px;
/* background-color: black; */
  top: 80px;
  right: 160px;
}

.footer {
  display: flex;
  justify-content: center;
}

.powered-style {
  color: rgba(39, 39, 39, .17);
}

.img-powered {
  width: 100px;
  height: 20px;
  margin-top: 7px;
  margin-left: 8px;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: none;
/* Hidden by default */
  align-items: center;
  justify-content: center;
  z-index: 4;
}

.loading-content {
  text-align: center;
}

.loading-circle {
  position: relative;
  width: 120px;
/* Adjust size as needed */
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.loading-border {
  position: absolute;
  top: 0;
  left: 30;
  width: 100%;
  height: 100%;
  border-top: 4px solid #007AFF;
/* Color for the loading animation */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-logo {
  width: 70px;
/* Adjust as needed */
  position: relative;
/* Ensure logo stays centered */
left: 30px;
}

@keyframes spin {
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
}



/* Error Message Style */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  margin-left: 5px;
}

.footer {
  background-color: white !important;
}

.progress-bar-container {
  position: absolute;
  top: 0;
/* Position at the top */
  left: 0;
  width: 100%;
  height: 4px;
/* Adjust height as desired */
  background-color: rgba(255, 255, 255, 0.3);
/* Background color for the container */
}

.progress-bar {
  width: 0;
  height: 100%;
  background-color: #007AFF;
/* Progress color */
  transition: width 0.1s linear;
/* Smooth transition */
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
  display: none !important;
}

.undo-btn img {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.undo-btn {
  display: flex;
  margin-top: 10px !important;
}

.save-btn {
  border: #007AFF 2px solid;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: -6px;
  padding-left: 5px;
  padding-right: 5px;
  background: #007AFF;
  color: white;
}

.edit-btn {
  margin-right: 5px;
}

/* Add this CSS to your stylesheet */
.selected {
  background-color: #007AFF !important; /* Change this color to whatever you want when selected */
  color: white !important;
}

input#visitorRange {
  width: 60% !important;
}

#pay-pause-btn {
  background-color: transparent !important;
  border: none !important;
  display: none;
}

.empty-container-1 {
  width: 290px;
  height: 40px;
  margin-top: 16px;
  margin-bottom: 22px;
}

.poweredBox {
  display: inline-flex !important;
  padding-bottom: 10px !important;
}

.powered-style {
  margin: 0 !important;
  padding-top: 5px !important;
}

#product-options .option-btn:hover {
    color: #fff !important;
}

.chat-content {
  height: 81%;
}

.Empty-container {
    height: 305px;
}

.bef:hover {
    color: white !important;
    background-color: #007AFF !important;
}

.bef {
  color: black !important;
}

.option-btn {
    color: black !important;
}

button.undo-btn:hover {
    background-color: #007aff;
}

button#submit-btn:hover {
    background-color: #007aff;
}

.selected {
    color: white !important;
    background-color: #007AFF !important;
}

button#refresh-btn {
    margin-right: 0px !important;
}

div#recommender-options .option-btn {
    color: black !important;
}

div#recommender-options .option-btn:hover {
    color: white !important;
    background-color: #007AFF;
}

#product-options .option-btn:hover {
    background-color: #127cfc !important;
}


.edit-btn:hover {
    background-color: #127cfc;
}

div#live-chat-options .option-btn {
    color: black !important;
}

#submitVisitorBtn {
    color: black;
}

#submitVisitorBtn:hover {
    color: black;
}


select {
    display: inline-block !important;
}



.country-code-dropdown {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

#situation-options .option-btn {
    color: black !important;
}

#situation-options .option-btn:hover {
  color: white !important;
}

#role-options .option-btn:hover {
  color: white !important;
}

#live-chat-options .option-btn:hover {
  color: white !important;
}

#submitVisitorBtn:hover {
  color: white !important;
}
.open-chat-button {
  cursor: pointer;
}

@media (max-width: 430px) {
.chat-widget{
right: 0px;
height: 100vh !important;
width: 100% !important;
  border-radius: 0px;
  background-color: #fff;
  position: fixed;
  right: auto;
  z-index: 999;
  overflow: hidden;
  box-shadow: -5px 5px 8px rgba(60, 60, 60, .6);
  transform: translateY(0%) !important;
  border: 0px solid #737373;
  bottom: 0 !important;
  top: -1063% !important;
  
}
.chat-container{
  top: 0px !important;
      height: 100vh;
      width: 100% !important;
}
.video-background {
height: 100vh !important;
}
.chat-content{
height: 87.5% !important;
}

.chat-container {
  position: fixed;
  font-family: 'poppins' !important;
  right: 0 !important;
  transform: translateY(-0%) !important;
  z-index: 1000 !important;
  line-height: 1.5 !important;
  top: 85% !important;
  height: 8vh !important;
  left: 0% !important;
}

.Empty-container {
  height: 80% !important;
}

.open-tab-link {
  top: 45px;
  right: 20px;
}

.text-launcher {
  top: 85%;
  position: absolute;
  left: 18%;
}

#video-container {
  display: block;
  bottom: 0%;
  right: -65%;
}

#pay-pause-btn {
  left: 16%;
}


}`;
document.head.appendChild(style);

// Create the chat widget
const chatWidget = document.createElement('div');
chatWidget.innerHTML = `
  
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="chat-container">
        <div class="text-launcher">
            <h1 class="text-launch">👋 Try The Intake Bot™</h1>

            <a href="https://chatwidget.automatikpro.com/the-intake-bot" id="icw--avatar-direct-link" class="open-tab-link" target="_blank" rel="noopener"></a>
        </div>

        <div class="video-thumbnail" id="video-container" aria-label="Open chat widget">
            <div class="video-circle">
                <video id="thumbnail-video" autoplay loop muted>
                    <source
                        src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/67254cb3eb590d0e18640c33.mp4"
                        type="video/mp4">
                </video>
            </div>
            <span class="online-dot"></span> <!-- Green online dot -->
        </div>


        <div class="chat-widget" id="chat-widget" aria-hidden="true">
            <div class="video-background" id="video-background">
                <video id="background-video" autoplay loop muted>
                    <source src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/6725484582949649ceb22d7a.mp4" type="video/mp4">
                </video>
                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-bar"></div>
                </div>
            </div>             
            <div id="loading-overlay" class="loading-overlay">
              <div class="loading-content">
                  <div class="loading-circle">
                      <div class="loading-border"></div>
                      <img src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/671fca508468fa0f04d8e8b5.png" alt="Loading Logo" class="loading-logo">
                  </div>
                  <p>One moment please...</p>
              </div>
          </div>          
          
            <div class="chat-header" id="chat-header">
                <button id="play-pause-btn" class="control-btn" aria-label="Play/Pause">
                    <img id="play-pause-icon" class="control-btn" aria-label="Play/Pause"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png"
                        alt="Play/Pause Icon">
                </button>

                <button id="mute-unmute-btn" class="control-btn" aria-label="Mute/Unmute">
                    <img id="mute-unmute-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png"
                        alt="Mute/Unmute Icon">
                </button>

                <button id="refresh-btn" class="control-btn" aria-label="Refresh">
                    <img id="refresh-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb04eaa256dd3e330dde51.png"
                        alt="Refresh Icon">
                </button>

                <button id="close-btn" aria-label="Close chat widget">
                    <img id="close-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0456b8d5546df6dc3dac.png"
                        alt="Close Icon">
                </button>
            </div>

            <div class="chat-content" id="chat-content">
                <div class="Empty-container"></div>
                <div class="message ot-message">Hi 👋🏼 Let's find out if The Intake Bot™ can help your firm in </div>
                <div class="chat-options">
                    <button class="option-btn bef" onclick="selectOption('Go ahead', true)">Go ahead</button>
                </div>
            </div>
            <div class="footer">
                <div _ngcontent-pna-c93="" class="poweredBox"><p _ngcontent-pna-c93="" class="powered-style">Powered
                        by</p><img src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/67193d949965e3aa9919d4a9.png" alt="" class="img-powered"></a></div>
            </div>
        </div>
    </div>
    <div id="white-overlay"></div>
    
    <script src="Script.js"></script>
</body>

</html>

`;
document.body.appendChild(chatWidget);
let collectedData = {};
let questionStack = [];

document.getElementById("video-container").addEventListener("click", () => {
    toggleChatWidget(true);
});

document.getElementById("close-btn").addEventListener("click", () => {
    toggleChatWidget(false);
});

function openChatWidget() {
    const chatWidget = document.getElementById("chat-widget"); // Replace "chat-widget" with the actual ID of your chat widget container
    const videoContainer = document.getElementById("video-container"); // Assuming you want to hide the video container when chat opens

    if (chatWidget) {
        chatWidget.style.display = "block";  // Show the chat widget
        chatWidget.setAttribute('aria-hidden', false);
    }

    if (videoContainer) {
        videoContainer.style.display = "none"; // Hide the video container
    }
}

function toggleChatWidget(isOpen) {
    const widget = document.getElementById("chat-widget");
    const videoContainer = document.getElementById("video-container");
    widget.style.display = isOpen ? "block" : "none";
    videoContainer.style.display = isOpen ? "none" : "block";
    widget.setAttribute('aria-hidden', !isOpen);

    // Initialize the video and progress bar when the chat widget opens
    const video = document.getElementById('background-video');
    const progressBar = document.getElementById('progress-bar');
    if (video && progressBar) {
        initializeVideoProgress(video, progressBar);
    }
}

// Function to initialize video progress tracking
function initializeVideoProgress(video, progressBar) {
    // Remove any existing event listener to prevent duplication
    video.removeEventListener('timeupdate', updateProgressBar);

    // Add event listener for timeupdate to update the progress bar
    video.addEventListener('timeupdate', updateProgressBar);

    function updateProgressBar() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

const backgroundVideo = document.getElementById('background-video');
const thumbnailVideo = document.getElementById('thumbnail-video');
    // Initialize the video and progress bar
    const video = document.getElementById('background-video');
    const progressBar = document.getElementById('progress-bar');
    initializeVideoProgress(video, progressBar);

// Select the empty container and add a click event listener
const emptyContainer = document.querySelector('.Empty-container');
// Create Play/Pause button dynamically
const playPauseBtn = document.createElement('button');
playPauseBtn.id = 'pay-pause-btn';
playPauseBtn.className = 'control-btn';
playPauseBtn.setAttribute('aria-label', 'Play/Pause');

const playPauseIcon = document.createElement('img');
playPauseIcon.id = 'play-pause-icon';
playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0ca1f9de91588ec93e8c.png';
playPauseIcon.alt = 'Play/Pause Icon';
playPauseBtn.appendChild(playPauseIcon);

// Append the button
document.getElementById('chat-content').appendChild(playPauseBtn);

// Now attach the event listener after the button is created
playPauseBtn.addEventListener('click', () => {
    togglePlayPause();
});

//not need to delete
document.getElementById('play-pause-btn').addEventListener('click', () => {
    console.log("play button call");

    const playPauseIcon = document.getElementById('play-pause-icon');
    if (backgroundVideo.paused) {
        backgroundVideo.play();
        thumbnailVideo.play();
        playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png';
    } else {
        backgroundVideo.pause();
        thumbnailVideo.pause();
        playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0ca1f9de91588ec93e8c.png';
    }
});

document.getElementById('mute-unmute-btn').addEventListener('click', () => {
    const muteIcon = document.getElementById('mute-unmute-icon');
    if (backgroundVideo.muted) {
        backgroundVideo.muted = false;
        thumbnailVideo.muted = false;
        muteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0d81f003010e66500af7.png';
    } else {
        backgroundVideo.muted = true;
        thumbnailVideo.muted = true;
        muteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png';
    }
});

document.getElementById('refresh-btn').addEventListener('click', resetChatAndReload);

function resetChatAndReload() {
  collectedData = {};
  
  // Show loading overlay
  const loadingOverlay = document.getElementById('loading-overlay');
  if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
  }

  // Set max-height of .chat-content to 85%
  const chatContent = document.querySelector('.chat-content');
  if (chatContent) {
      chatContent.style.maxHeight = '81%';
  }

  // Simulate loading time before rendering the chat widget
  setTimeout(() => {
      renderChatWidget();
      
      // Hide loading overlay after content reloads
      if (loadingOverlay) {
          loadingOverlay.style.display = 'none';
      }
  }, 1000); // Adjust delay as needed
}

function showTypingIndicator() {
    const chatContent = document.getElementById('chat-content');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/67255312eb590d1f356415d3.jpeg" alt="Typing..."> Typing...';
    chatContent.appendChild(typingIndicator);
    scrollToBottom();
    return typingIndicator;
}

function removeTypingIndicator(typingIndicator) {
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Example of an askSituation function with updated Undo functionality
function askSituation() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("Are you looking to grow your Law Firm? 📈", 'bot-message', messageTime);

        const situationOptions = `
        <div id="situation-options" class="chat-options">
            <select id="situation-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes">Yes</option>
                <option class="opt-cstm" value="No">No</option>
                <option class="opt-cstm" value="I don't have a Law Firm">I don't have a Law Firm</option>
            </select>
            <button class="submit-icon" onclick="handleSituation()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = situationOptions;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handleSituation() {
    const situation = document.getElementById('situation-select').value;
    if (!situation) {
        alert('Please select an option');
        return;
    }

    // Remove the options after selection
    document.getElementById('situation-options').remove();
    
    // Store the user's choice and show it in the chat with an Undo option
    appendSubmittedMessage(situation, 'user-message', true); // Pass 'true' to enable the Undo button
    collectedData.situation = situation; // Only set the situation data
    questionStack[questionStack.length - 1].answer = situation; // Update the answer in the question stack

    // Proceed to the next question based on the option selected
    if (situation === 'Yes') {
        setTimeout(() => askProductInterest('situation'), 1000);
    } else if (situation === 'No') {
        setTimeout(() => askCashSave(), 1000);
    } else {
        setTimeout(() => askIndustry(), 1000);
    }
}



function askProductInterest(selectedQuestion) {
    if (selectedQuestion === "cashSave") {
        questionStack.push({ question: "cashSave", answer: null });
    } else {
        questionStack.push({ question: "situation", answer: null });
    }

    const typingIndicator = showTypingIndicator();
    const messageTime = new Date(); // Capture message time

    setTimeout(() => {
        removeTypingIndicator(typingIndicator); // Remove typing indicator
        appendMessageWithImageAndTime("Which Intake Bot™ products are you interested in? Select and submit when ready.", 'bot-message', messageTime, true);

        const productOptions = `
        <div id="product-options" class="chat-options">
            <div class="dropdown">
                <button class="dropdown-btn" onclick="toggleDropdown()">Select Products</button>
                <div class="dropdown-content" id="dropdown-content">
                    <label><input type="checkbox" value="Website Chat" /> Website Chat</label>
                    <label><input type="checkbox" value="Live Call-Connect" /> Live Call-Connect</label>
                    <label><input type="checkbox" value="Texting" /> Texting</label>
                    <label><input type="checkbox" value="1-click Retainers" /> 1-click Retainers</label>
                    <label><input type="checkbox" value="LSA Responder" /> LSA Responder</label>
                    <button id="submit-btn" class="submit-icon" onclick="handleSubmitProductInterest()">
                      <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
                    </button>
                </div>
            </div>
        </div>
        `;

        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = productOptions;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom(); // Scroll to bottom after appending options
    }, 1000);
}

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "none" || dropdownContent.style.display === "" ? "block" : "none";
    scrollToBottom(); // Ensure scroll to bottom after toggling the dropdown
}

function handleSubmitProductInterest() {
    const checkboxes = document.querySelectorAll("#dropdown-content input[type='checkbox']");
    const selectedProducts = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    if (selectedProducts.length === 0) {
        const messageTime = new Date();
        appendMessageWithImageAndTime("Please select at least one product before submitting.", 'bot-message', messageTime, true);
        scrollToBottom(); // Ensure scroll to bottom if no option selected and message is shown
    } else {
        const submittedProductsMessage = `${selectedProducts.join(', ')}`;
        appendSubmittedMessage(submittedProductsMessage, 'user-message', true); // Pass true to show undo button
        collectedData.productInterest = selectedProducts; // Collect selected products
        questionStack[questionStack.length - 1].answer = selectedProducts; // Update the last question stack with answer

        document.getElementById('product-options').style.display = 'none'; // Hide options after submission
        scrollToBottom(); // Ensure scroll to bottom after hiding options

        setTimeout(() => askRoleAtLawFirm(), 1000); // Proceed to next question
    }
}




function appendSubmittedMessage(message, className, isUndo = false) {
    const chatContent = document.getElementById('chat-content');
    const messageContainer = document.createElement('div');
    messageContainer.className = className;
    messageContainer.style.display = 'flex';
    messageContainer.style.justifyContent = 'flex-end';

    if (isUndo) {
        // Undo button to handle the undo functionality
        const undoButton = document.createElement('button');
        undoButton.className = 'undo-btn';
        undoButton.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66facd71721de4859347dd07.png" alt="Undo"><p class="undop">Undo</p>';
        undoButton.onclick = () => handleUndo(); // Call handleUndo when clicked
        disablePreviousUndoButtons();
        messageContainer.appendChild(undoButton);
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.textContent = message;

    messageContainer.appendChild(messageDiv);
    chatContent.appendChild(messageContainer);
    scrollToBottom();
}

function askRoleAtLawFirm() {
    // Push the correct question type onto the question stack
    questionStack.push({ question: "productInterest", answer: null });
    
    const typingIndicator = showTypingIndicator();
    const messageTime = new Date(); // Capture the message time

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);

        // Bot message with message time
        appendMessageWithImageAndTime("What do you do at your Law Firm?", 'bot-message', messageTime, true);

        // Create dropdown for role options
        const roleOptions = `
        <div id="role-options" class="chat-options">
            <select id="role-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select your role</option>
                <option class="opt-cstm" value="Owner">Owner</option>
                <option class="opt-cstm" value="Marketer">Marketer</option>
                <option class="opt-cstm" value="Partner">Partner</option>
                <option class="opt-cstm" value="Other">Other</option>
            </select>
            <button class="submit-icon" onclick="handleRoleSelection()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        // Append role options to chat content
        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = roleOptions;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom(); // Ensure scroll is at the bottom after adding options
    }, 1000);
}

// Function to handle role selection with undo functionality
function handleRoleSelection() {
    const role = document.getElementById('role-select').value;
    
    if (!role) {
        alert('Please select a role');
        return;
    }

    // Remove the role options immediately
    document.getElementById('role-options').remove();

    // Append the user's choice to the chat
    appendSubmittedMessage(role, 'user-message', true); // Add 'true' to show the undo button
    collectedData.roleAtLawFirm = role; // Collect the role selection
    questionStack[questionStack.length - 1].answer = role; // Update the last question stack with answer

    // Scroll to the bottom after user's choice is added
    scrollToBottom();

    // Proceed to the next question (ask for the name)
    setTimeout(() => askFullName(), 1000);
}


function handleUndo() {
    if (questionStack.length > 0) {
        const lastQuestion = questionStack.pop();
        delete collectedData[lastQuestion.question];

        const chatContent = document.getElementById('chat-content');
        
        // Set the number of elements to remove based on the question type
        let elementsToRemove;
        switch (lastQuestion.question) {
            case "initialQuestion":
                elementsToRemove = 9;
                break;
            case "recommenderQuestion":
                elementsToRemove = 6; // Remove 9 elements for initial question and recommender name
                break;
            case "websiteVisitors":
                elementsToRemove = 10; // Remove 10 elements for website visitors question
                break;
            default:
                elementsToRemove = 5; // Default to 5 elements for other questions
                break;
        }

        // Remove the specified number of elements associated with the last question type
        while (elementsToRemove > 0 && chatContent.lastChild) {
            chatContent.removeChild(chatContent.lastChild);
            elementsToRemove--;
        }

        // Re-ask the last question based on the question type
        askQuestion(lastQuestion.question);
    } else {
        console.log("No previous question to undo.");
    }
}

function askQuestion(type) {
    switch (type) {
            case "situation":
                askSituation();
                break;
            case "productInterest":
                askProductInterest('cashSave');
                break;
            case "roleAtLawFirm":
                askRoleAtLawFirm();
                break;
            case "cashSave":
                askCashSave();
                break;
            case "industry":
                askIndustry();
                break;
            case "fullName":
                askFullName();
                break;
            case "phoneNumber":
                askPhoneNumber();
                break;
            case "email":
                askEmail();
                break;
            case "initialQuestion":
                askInitialQuestion();
                break;
            case "usingLiveChat":
                askInitialQuestion();
                break;
            case "leadsPerMonth":
                askLeadsPerMonth();
                break;
            case "websiteVisitors":
                askWebsiteVisitors();
                break;
            case "recommenderQuestion":
                askRecommenderQuestion();
                break;
            case "recommenderName":
                askRecommenderName();
                break;
            case "finalQuestion":
                askFinalQuestion();
                break;
                default:
                    console.warn("Unknown question type:", type);
            }
        }

// Function to show typing indicator with undo
function appendMessageWithImageAndTime(message, className, messageTime, isOption = true) {
    const messageContainer = document.createElement('div');
    messageContainer.className = className;

    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageContainer.appendChild(messageText);

    if (isOption) {
        // Add undo button for option responses
        const undoButton = document.createElement('button');
        undoButton.className = 'undo-btn';
        undoButton.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66facd71721de4859347dd07.png" alt="Undo"><p>Undo</p>';
        undoButton.onclick = () => {
            renderChatWidget(); // Restart the chat on Undo
        };
        disablePreviousUndoButtons();
        messageContainer.appendChild(undoButton);
    }

    const timeElement = document.createElement('span');
    timeElement.textContent = `Sent at: ${messageTime.toLocaleTimeString()}`;
    timeElement.className = 'message-time';
    messageContainer.appendChild(timeElement);

    document.getElementById('chat-content').appendChild(messageContainer);
    scrollToBottom(); // Scroll to bottom after appending message
}

function removeInputGroup() {
    const inputGroup = document.querySelector('.input-group');
    if (inputGroup) {
        inputGroup.remove();
    }
}

function appendMessage(message, className) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(className, 'message-container');

    // Create message text element
    const messageText = document.createElement('div');
    messageText.classList.add('message-text');
    messageText.textContent = message;

    // Create time element
    const timestamp = document.createElement('span');
    timestamp.classList.add('time-ago');
    timestamp.textContent = formatTimeAgo(new Date()); // Display time ago based on current time

    // Append text and time to the message container
    messageContainer.appendChild(messageText);
    messageContainer.appendChild(timestamp);

    // Append to chat content
    document.getElementById('chat-content').appendChild(messageContainer);
    scrollToBottom();
}

// Helper function to format time as "time ago"
function formatTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours} hours ago`;
}

function askCashSave() { 
    // Push the correct question type onto the question stack
    questionStack.push({ question: "situation", answer: null });

    const typingIndicator = showTypingIndicator();
    const messageTime = new Date(); // Capture the message time

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);

        // Bot message with message time and an option to display image
        appendMessageWithImageAndTime("What if I could help you save some cash 💵?", 'bot-message', messageTime, true);

        // Create dropdown for cash save option
        const cashSaveOption = `
        <div id="cash-save-options" class="chat-options">
            <select id="cash-save-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Okay, I'm listening!">Okay, I'm listening!</option>
            </select>
            <button class="submit-icon" onclick="handleCashSave()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;

        // Append cash save option to chat content
        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = cashSaveOption;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom(); // Ensure scroll is at the bottom after adding options
    }, 1000);
}

// Updated handleCashSave function to handle dropdown selection
function handleCashSave() {
    const cashSaveOption = document.getElementById('cash-save-select').value;
    
    if (!cashSaveOption) {
        alert('Please select an option');
        return;
    }

    // Remove the cash save options immediately
    document.getElementById('cash-save-options').remove();

    // Append the user's choice to the chat
    appendSubmittedMessage(cashSaveOption, 'user-message', true); // Add 'true' to show the undo button
    collectedData.cashSaveInterest = true; // Collect this data point
    questionStack[questionStack.length - 1].answer = cashSaveOption; // Update the last question stack with answer

    // Scroll to the bottom after user's choice is added
    scrollToBottom();

    // Proceed to the next question (ask for the product interest or other follow-up)
    setTimeout(() => askProductInterest("cashSave"), 1000);
}




function askIndustry() {
    debugger;
    // Push the question onto the question stack
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("We serve a variety of industries! What is your industry?", 'bot-message', messageTime, true);
        
        const industryOptions = `
        <div id="industry-options" class="chat-options">
            <select id="industry-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an industry</option>
                <option class="opt-cstm" value="Home & Construction">Home & Construction</option>
                <option class="opt-cstm" value="Doctor">Doctor</option>
                <option class="opt-cstm" value="Chiropractic">Chiropractic</option>
                <option class="opt-cstm" value="Medical">Medical</option>
                <option class="opt-cstm" value="Marketing & Advertising">Marketing & Advertising</option>
                <option class="opt-cstm" value="Professional services">Professional services</option>
                <option class="opt-cstm" value="Colleges">Colleges</option>
                <option class="opt-cstm" value="Other">Other</option>
            </select>
            <button class="submit-icon" onclick="handleIndustry()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
        `;
        
        // Append options to chat content
        const inputGroup = document.createElement('div');
        inputGroup.innerHTML = industryOptions;
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handleIndustry() {
    const industry = document.getElementById('industry-select').value;
    if (!industry) {
        alert('Please select an industry');
        return;
    }

    // Store the industry specifically
    document.getElementById('industry-options').style.display = 'none';
    appendSubmittedMessage(industry, 'user-message', true);
    collectedData.industry = industry; // Only set the industry data
    questionStack[questionStack.length - 1].answer = industry;

    scrollToBottom();
    setTimeout(() => askFullName("industry"), 1000);
}


function askFullName(selectedQuestion) {
    if (selectedQuestion === "industry") {
        questionStack.push({ question: "industry", answer: null });
    } else {
        questionStack.push({ question: "roleAtLawFirm", answer: null });
    }
    
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time

        // Bot message with isOption = false for this question
        appendMessageWithImageAndTime(
            'Great! Your business is qualified. ' + 
            "I'd like to send you a limited time special offer: 20% off your first month. " + 
            'May I ask your full name?', 
            'bot-message', 
            messageTime, 
            false // false for isOption to avoid the undo button
        );

        // Create the input group with first and last name fields
        const inputGroup = createInputGroup('First Name', handleFullName, '', 'text', false, 'Last Name');

        // Get first and last name input elements
        const [firstNameInput, lastNameInput] = inputGroup.querySelectorAll('input');

        if (firstNameInput && lastNameInput) {
            firstNameInput.classList.add('first-name');
            lastNameInput.classList.add('last-name');
        }

        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handleFullName(firstName, lastName) {
    const firstNameField = document.querySelector('.first-name'); // Select the first name input field
    const lastNameField = document.querySelector('.last-name');   // Select the last name input field
    let hasError = false;

    // Check if either field is empty and apply error styling
    if (!firstName.trim()) {
        firstNameField.style.borderColor = 'red';
        firstNameField.placeholder = 'Please enter first name';
        firstNameField.classList.add('error-placeholder');
        hasError = true;
    } else {
        firstNameField.style.borderColor = ''; // Reset styling
        firstNameField.placeholder = 'First Name';
        firstNameField.classList.remove('error-placeholder');
    }

    if (!lastName.trim()) {
        lastNameField.style.borderColor = 'red';
        lastNameField.placeholder = 'Please enter last name';
        lastNameField.classList.add('error-placeholder');
        hasError = true;
    } else {
        lastNameField.style.borderColor = ''; // Reset styling
        lastNameField.placeholder = 'Last Name';
        lastNameField.classList.remove('error-placeholder');
    }

    if (hasError) return; // Exit if there's an error

    // Append the name if no error, with isOption = false for user-typed input
    appendMessage(`${firstName} ${lastName}`, 'user-message', false);
    collectedData.firstName = firstName;
    collectedData.lastName = lastName;
    removeInputGroup();
    setTimeout(() => askPhoneNumber(), 1000);
}

// New function to append message with image and "time ago"
function appendMessageWithImageAndTime(message, className, messageTime, isOption) {
    const messageContainer = document.createElement('div');
    messageContainer.className = className;

    // Create the message text
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageContainer.appendChild(messageText);

    // Add user profile image
    const userImage = document.createElement('img');
    userImage.src = 'https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/67255312eb590d1f356415d3.jpeg';  // Replace with actual image path
    userImage.alt = 'User';
    userImage.className = 'user-image';  // You can style this in CSS
    messageContainer.appendChild(userImage);


    
    // Add "time ago" element
    const timeElement = document.createElement('span');
    timeElement.className = 'message-time';  // Style in CSS
    messageContainer.appendChild(timeElement);

    // Append the message container
    document.getElementById('chat-content').appendChild(messageContainer);
    scrollToBottom();

    // Update the "time ago" label initially and every minute
    updateTimeAgo(timeElement, messageTime);
    setInterval(() => updateTimeAgo(timeElement, messageTime), 60000);  // Update every minute

    
}

// Function to calculate and display "time ago"
function updateTimeAgo(element, messageTime) {
    const now = new Date();
    const timeDifference = Math.floor((now - messageTime) / 1000); // Time difference in seconds

    let timeAgo = '';
    if (timeDifference < 60) {
        timeAgo = 'just now';
    } else if (timeDifference < 3600) {
        const minutes = Math.floor(timeDifference / 60);
        timeAgo = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400) {
        const hours = Math.floor(timeDifference / 3600);
        timeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        const days = Math.floor(timeDifference / 86400);
        timeAgo = `${days} day${days > 1 ? 's' : ''} ago`;
    }

    element.textContent = timeAgo;
}

function askPhoneNumber() {
    debugger
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const messageTime = new Date(); // Capture the message time

        // Bot message with isOption = true for question
        appendMessageWithImageAndTime("What's the best phone number to reach you?", 'bot-message', messageTime, true);

        // Create the input group
        const inputGroup = createInputGroup('Type Phone Number', handlePhoneNumber, '', 'tel', true); // Changed 'text' to 'tel' for better input control

        // Change the input class of the phone number input to 'phone-num'
        const phoneNumberInput = inputGroup.querySelector('input'); // Target the phone number input field
        if (phoneNumberInput) {
            phoneNumberInput.classList.remove('input-field'); // Remove the default 'input-field' class
            phoneNumberInput.classList.add('phone-num'); // Add the 'phone-num' class

            // Only allow numeric input (phone numbers)
            phoneNumberInput.addEventListener('input', (event) => {
                event.target.value = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
            });
        }

        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handlePhoneNumber(phoneNumber) {
    const countryCode = document.getElementById('country-code-select').value; // Use only the country code select element
    if (!phoneNumber.trim() || phoneNumber.length < 7) {
        alert("Please enter a valid phone number.");
        return;
    }

    appendMessage(`${countryCode} ${phoneNumber}`, 'user-message', false); // Append phone with country code
    collectedData.phone = `${countryCode} ${phoneNumber}`; // Store only phone number and correct country code
    removeInputGroup();
    setTimeout(() => askEmail(), 1000);
}

function askEmail() {
    questionStack.push({ question: "situation", answer: null });
    const typingIndicator = showTypingIndicator();
    const messageTime = new Date(); // Capture the message time
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);

        // Bot message with isOption = true for question
        appendMessageWithImageAndTime("And an email address?", 'bot-message', messageTime, true);

        const inputGroup = createInputGroup('Type Email Address', handleEmail, '', 'email');
        document.getElementById('chat-content').appendChild(inputGroup);
        scrollToBottom();
    }, 1000);
}

function handleEmail(email) {
    if (!email.trim() || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Append the email as a user message with isOption = false for typed input
    appendMessage(email, 'user-message', false);
    collectedData.email = email;
    removeInputGroup();
    setTimeout(() => askInitialQuestion(), 1000);
}

function askInitialQuestion() {
    questionStack.push({ question: "usingLiveChat", answer: null });
    const messageTime = new Date(); // Capture the message time
    
    // Append message with unique class for "usingLiveChat" question
    appendMessageWithImageAndTime(
        "Please answer a couple of questions to help us send you more information about The Intake Bot™! Are you currently using a live chat on your website?", 
        'bot-message question-usingLiveChat', 
        messageTime
    );

    // Create dropdown for live chat options
    const initialOptions = `
        <div id="live-chat-options" class="chat-options question-usingLiveChat">
            <select id="live-chat-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes, We have chat">Yes, We have chat</option>
                <option class="opt-cstm" value="No">No</option>
            </select>
            <button class="submit-icon" onclick="handleLiveChatOption()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;

    document.getElementById('chat-content').insertAdjacentHTML('beforeend', initialOptions);
    scrollToBottom();
}

// Updated handleLiveChatOption function to handle dropdown selection
function handleLiveChatOption() {
    const liveChatOption = document.getElementById('live-chat-select').value;
    
    if (!liveChatOption) {
        alert('Please select an option');
        return;
    }

    // Remove the options after selection
    document.getElementById('live-chat-options').remove();
    
    // Append the user's choice with the unique class
    appendSubmittedMessage(liveChatOption, 'user-message question-usingLiveChat', true); // Add 'true' to show the Undo button
    collectedData.usingLiveChat = liveChatOption; // Collect the user's choice
    questionStack[questionStack.length - 1].answer = liveChatOption; // Update the last question stack with answer

    scrollToBottom();

    // Proceed based on the selected option
    if (liveChatOption === 'Yes, We have chat') {
        setTimeout(() => askWebsiteVisitors(), 1000);
    } else {
        setTimeout(() => askWebsiteVisitors(), 1000);
    }
}



function askLeadsPerMonth() {
    // Push the question onto the question stack
    questionStack.push({ question: "initialQuestion", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("How many leads do you receive from your chat every month? A rough estimate works!", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Enter lead number', handleLeadsInput);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleLeadsInput(leadNumber) {
    if (!leadNumber.trim()) {
        alert("Please enter a valid number.");
        return;
    }

    // Append the user's input with Undo functionality
    appendSubmittedMessage(`${leadNumber} leads`, 'user-message', true); // Add 'true' to show the Undo button
    collectedData.leadsPerMonth = leadNumber; // Store lead number
    questionStack[questionStack.length - 1].answer = leadNumber; // Update the last question stack with the answer

    removeInputGroup(); // Remove the input field
    scrollToBottom();

    setTimeout(() => askRecommenderQuestion(), 1000); // Move to the next question
}

function askWebsiteVisitors() {
    questionStack.push({ question: "initialQuestion", answer: null });
    appendMessageWithImageAndTime("How many website visitors do you have on your site every month?", 'bot-message');

    const visitorSlider = `
        <div id="visitor-slider-container" class="visitor-slider">
            <input type="range" min="0" max="50000" step="100" value="0" id="visitorRange" oninput="updateVisitorCount(this.value)">
            <span id="visitorCount">0</span> visitors
        </div>
    `;
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', visitorSlider);
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', `<button id="submitVisitorBtn" class="option-btn" onclick="submitVisitorCount()">Submit</button>`);
}

function updateVisitorCount(value) {
    document.getElementById('visitorCount').innerHTML = value;
}

function submitVisitorCount() {
    const visitors = document.getElementById('visitorRange').value;
    
    // Append the user's input with Undo functionality
    appendSubmittedMessage(`${visitors} visitors`, 'user-message', true); // Add 'true' to show the Undo button
    collectedData.visitorsPerMonth = visitors; // Store the visitor count
    questionStack[questionStack.length - 1].answer = visitors; // Update the last question stack with the answer

    // Hide the slider and submit button after submission
    document.getElementById('visitor-slider-container').style.display = 'none';
    document.getElementById('submitVisitorBtn').style.display = 'none';

    // Proceed to the next question
    scrollToBottom();
    setTimeout(() => askRecommenderQuestion(), 1000);
}

function askRecommenderQuestion() {
    // Push the question onto the question stack
    questionStack.push({ question: "websiteVisitors", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("Did anyone recommend The Intake Bot™ to you?", 'bot-message', messageTime);

    // Create dropdown for recommender options
    const recommenderOptions = `
        <div id="recommender-options" class="chat-options">
            <select id="recommender-select" class="option-select">
                <option class="opt-cstm" value="" disabled selected>Select an option</option>
                <option class="opt-cstm" value="Yes">Yes, someone did</option>
                <option class="opt-cstm" value="Nope">Nope</option>
            </select>
            <button class="submit-icon" onclick="handleRecommenderOption()">
              <img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png" alt="submit">
            </button>
        </div>
    `;
    document.getElementById('chat-content').insertAdjacentHTML('beforeend', recommenderOptions);
    scrollToBottom();
}

// Updated handleRecommenderOption function to handle dropdown selection
function handleRecommenderOption() {
    const recommenderOption = document.getElementById('recommender-select').value;
    
    if (!recommenderOption) {
        alert('Please select an option');
        return;
    }

    // Remove the options after selection
    document.getElementById('recommender-options').remove(); // Hide options after selection

    // Append the user's choice with Undo functionality
    appendSubmittedMessage(recommenderOption, 'user-message', true); // Add 'true' to show the Undo button
    collectedData.recommender = recommenderOption; // Collect the answer
    questionStack[questionStack.length - 1].answer = recommenderOption; // Update the last question stack with the answer

    if (recommenderOption === 'Yes') {
        setTimeout(() => askRecommenderName(), 1000);
    } else {
        setTimeout(() => askFinalQuestion(), 1000);
    }
}


function askRecommenderName() {
    questionStack.push({ question: "recommenderQuestion", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("What's their name? We'd love to send them a thank you note!", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Enter name', handleRecommenderNameInput);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleRecommenderNameInput(name) {
    if (!name.trim()) {
        alert("Please enter a valid name.");
        return;
    }

    appendMessage(name, 'user-message', false); // Show the name input
    collectedData.recommenderName = name; // Store recommender name
    removeInputGroup(); // Remove the input field
    setTimeout(() => askFinalQuestion(), 1000); // Move to the next question
}

function askFinalQuestion() {
    questionStack.push({ question: "recommenderQuestion", answer: null });
    const messageTime = new Date(); // Capture the message time
    appendMessageWithImageAndTime("Are there any other questions I should pass to my team before they reach out?", 'bot-message', messageTime);

    const inputGroup = createInputGroup('Type here...', handleFinalQuestionInput);
    document.getElementById('chat-content').appendChild(inputGroup);
    scrollToBottom();
}

function handleFinalQuestionInput(finalQuestion) {
    appendMessage(finalQuestion, 'user-message', false); // Show the final question input
    collectedData.finalQuestion = finalQuestion; // Store final question
    removeInputGroup(); // Remove the input field

    // Thank you message at the end
    const messageTime = new Date(); // Capture the message time
    setTimeout(() => {
        submitData(); // Automatically submit data after the last question
    }, 1000);
}

function submitData() {
    console.log("Final collectedData before submission:", collectedData); // Add this line

    const payload = {
        "Situation": collectedData.situation || '',
        "Product Interest": collectedData.productInterest ? collectedData.productInterest.join(', ') : '',
        "Role at Law Firm": collectedData.roleAtLawFirm || '',
        "Cash Save Interest": collectedData.cashSaveInterest || '',
        "Industry": collectedData.industry || '',
        "Full Name": `${collectedData.firstName || ''} ${collectedData.lastName || ''}`,
        "Phone Number": collectedData.phone || '',
        "Email": collectedData.email || '',
        "Using Live Chat": collectedData.usingLiveChat || '',
        "Leads Per Month": collectedData.leadsPerMonth || '',
        "Website Visitors Per Month": collectedData.visitorsPerMonth || '',
        "Recommender": collectedData.recommender || '',
        "Recommender Name": collectedData.recommenderName || '',
        "Final Question": collectedData.finalQuestion || ''
    };
    

    console.log("Payload to be submitted:", payload); // Add this line

    fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzNDA0MzU1MjZmNTUzZDUxMzMi_pc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.json();
    })
    .then(data => {
        const messageTime = new Date(); // Capture the message time
        appendMessageWithImageAndTime("Thank you for contacting The Intake Bot™. One of our account executives will contact you shortly. We are looking forward to learning more about your firm!", 'bot-message', messageTime);
        addCustomHTMLSection(); // Show the thank-you section with scheduling option
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessage("Error submitting data. Please refresh the page talk with chat widget again.", 'bot-message');
    });
}

function addCustomHTMLSection() {
    const chatContent = document.getElementById('chat-content');

    // Create a new div
    const customSection = document.createElement('div');
    customSection.className = 'custom-section';
    
    // Adding custom content to the div
    customSection.innerHTML = `
        <div style="
            width: auto;
            justify-content: center;
            border: 1px solid #fff;
            border-radius: 20px;
            margin-left: 8px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            margin-right: 8px;
            margin-bottom: 15px;
        " class="custom-section">
            <img src="https://intaker.blob.core.windows.net/general/11-1636053810.png" alt="appointment-image" class="appointment-image" style="
                width: 100%;
                max-width: 300px;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
                height: 160px;
            ">
            <h3 class="appointment-ht" style="
                margin: 0;
                font-size: 16px;
                padding-left: 10px;
                color: #498FE1;
            ">Schedule an Intro Call</h3>
            <p class="appointment-para" style="
                margin: 0;
                font-size: 14px;
                padding-left: 10px;
                padding-right: 10px;
                margin-bottom: 10px;
            ">Schedule a short call to see if The Intake Bot™ is a good fit for your business.</p>
            <a id="schedule-meeting-btn" href="https://api.theintakebot.com/widget/bookings/theintakebot-intro-chat-widget" target="_blank" style="text-decoration: none;" rel="noopener">
                <button class="appointment-button" style="
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                    background-color: #43a047;
                    color: white;
                    font-size: 16px;
                    border: none;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 15px;
                    padding-left: 20px;
                    padding-right: 20px;
                    border-radius: 20px;
                ">
                    <img src="https://intaker.azureedge.net/new-dashboard/iconsChat/eventW.svg" class="img-app" style="
                        width: 16px;
                        height: 17px;
                        display: inline-block;
                        background-size: 100%;
                        margin-right: 2px;
                        margin-bottom: -2px;
                    ">
                    Schedule a meeting
                </button>
            </a> 
        </div>
    `;

    // Append the custom section to the chat content
    chatContent.appendChild(customSection);

    // Add click event to "Schedule a meeting" button
    document.getElementById('schedule-meeting-btn').addEventListener('click', function() {
        // Append the "Schedule a meeting" message as a user message without undo/edit button
        appendMessage("Schedule a meeting", 'user-message', false);

        // Hide the custom section
        customSection.style.display = 'none';
    });

    scrollToBottom(); // Scroll to the bottom of the chat after adding the new content
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function createInputGroup(placeholder, callback, value = '', type = 'text', includeCountryCode = false, secondPlaceholder = '') {
  const inputGroup = document.createElement('div');
  inputGroup.className = 'input-group';

  if (includeCountryCode) {
      const countryCodeDropdown = createCountryCodeDropdown();
      inputGroup.appendChild(countryCodeDropdown);
  }

  const inputField = document.createElement('input');
  inputField.className = 'input-field';
  inputField.type = type;
  inputField.value = value;
  inputField.placeholder = placeholder;  // Placeholder for the input
  inputField.style = 'padding: 10px; border-radius: 10px; border: 1px solid #ddd; width: 100%; margin-right: 10px; display: inline-block; box-sizing: border-box;';
  inputGroup.appendChild(inputField);

  // Listen for the "Enter" key to trigger callback
  inputField.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Prevent default "Enter" behavior
          if (secondPlaceholder) {
              callback(inputField.value, secondInputField.value); // If second input exists
          } else {
              callback(inputField.value, document.querySelector('select')?.value || ''); // For single input
          }
      }
  });

  if (secondPlaceholder) {
      const secondInputField = document.createElement('input');
      secondInputField.className = 'input-field';
      secondInputField.type = type;
      secondInputField.placeholder = secondPlaceholder;
      secondInputField.style = 'padding: 10px; border-radius: 10px; border: 1px solid #ddd; width: 48.4%; display: inline-block; box-sizing: border-box;';
      inputGroup.appendChild(secondInputField);

      const submitIcon = createSubmitIcon(() => callback(inputField.value, secondInputField.value));
      inputGroup.appendChild(submitIcon);
  } else {
      const submitIcon = createSubmitIcon(() => callback(inputField.value, document.querySelector('select')?.value || ''));
      inputGroup.appendChild(submitIcon);
  }

  return inputGroup;
}

function createCountryCodeDropdown() {
    const dropdown = document.createElement('select');
    dropdown.className = 'country-code-dropdown';
    dropdown.id = 'country-code-select'; // Set a unique ID for the country code

    const countryCodes = [
        { code: '+1', country: 'USA' },
        { code: '+44', country: 'UK' },
        { code: '+91', country: 'India' },
        { code: '+93', country: 'Afghanistan' },
        { code: '+355', country: 'Albania' },
        { code: '+213', country: 'Algeria' },
        { code: '+376', country: 'Andorra' },
        { code: '+244', country: 'Angola' },
        { code: '+54', country: 'Argentina' },
        { code: '+374', country: 'Armenia' },
        { code: '+297', country: 'Aruba' },
        { code: '+61', country: 'Australia' },
        { code: '+43', country: 'Austria' },
        { code: '+994', country: 'Azerbaijan' },
        { code: '+973', country: 'Bahrain' },
        { code: '+880', country: 'Bangladesh' },
        { code: '+375', country: 'Belarus' },
        { code: '+32', country: 'Belgium' },
        { code: '+501', country: 'Belize' },
        { code: '+229', country: 'Benin' },
        { code: '+975', country: 'Bhutan' },
        { code: '+591', country: 'Bolivia' },
        { code: '+387', country: 'Bosnia and Herzegovina' },
        { code: '+267', country: 'Botswana' },
        { code: '+55', country: 'Brazil' },
        { code: '+673', country: 'Brunei' },
        { code: '+359', country: 'Bulgaria' },
        { code: '+226', country: 'Burkina Faso' },
        { code: '+257', country: 'Burundi' },
        { code: '+855', country: 'Cambodia' },
        { code: '+237', country: 'Cameroon' },
        { code: '+1', country: 'Canada' },
        { code: '+238', country: 'Cape Verde' },
        { code: '+236', country: 'Central African Republic' },
        { code: '+235', country: 'Chad' },
        { code: '+56', country: 'Chile' },
        { code: '+86', country: 'China' },
        { code: '+57', country: 'Colombia' },
        { code: '+269', country: 'Comoros' },
        { code: '+242', country: 'Congo' },
        { code: '+682', country: 'Cook Islands' },
        { code: '+506', country: 'Costa Rica' },
        { code: '+385', country: 'Croatia' },
        { code: '+53', country: 'Cuba' },
        { code: '+357', country: 'Cyprus' },
        { code: '+420', country: 'Czech Republic' },
        { code: '+45', country: 'Denmark' },
        { code: '+253', country: 'Djibouti' },
        { code: '+593', country: 'Ecuador' },
        { code: '+20', country: 'Egypt' },
        { code: '+503', country: 'El Salvador' },
        { code: '+240', country: 'Equatorial Guinea' },
        { code: '+291', country: 'Eritrea' },
        { code: '+372', country: 'Estonia' },
        { code: '+251', country: 'Ethiopia' },
        { code: '+679', country: 'Fiji' },
        { code: '+358', country: 'Finland' },
        { code: '+33', country: 'France' },
        { code: '+241', country: 'Gabon' },
        { code: '+220', country: 'Gambia' },
        { code: '+995', country: 'Georgia' },
        { code: '+49', country: 'Germany' },
        { code: '+233', country: 'Ghana' },
        { code: '+30', country: 'Greece' },
        { code: '+299', country: 'Greenland' },
        { code: '+502', country: 'Guatemala' },
        { code: '+224', country: 'Guinea' },
        { code: '+245', country: 'Guinea-Bissau' },
        { code: '+592', country: 'Guyana' },
        { code: '+509', country: 'Haiti' },
        { code: '+504', country: 'Honduras' },
        { code: '+852', country: 'Hong Kong' },
        { code: '+36', country: 'Hungary' },
        { code: '+354', country: 'Iceland' },
        { code: '+62', country: 'Indonesia' },
        { code: '+98', country: 'Iran' },
        { code: '+964', country: 'Iraq' },
        { code: '+353', country: 'Ireland' },
        { code: '+972', country: 'Israel' },
        { code: '+39', country: 'Italy' },
        { code: '+81', country: 'Japan' },
        { code: '+962', country: 'Jordan' },
        { code: '+7', country: 'Kazakhstan' },
        { code: '+254', country: 'Kenya' },
        { code: '+686', country: 'Kiribati' },
        { code: '+383', country: 'Kosovo' },
        { code: '+965', country: 'Kuwait' },
        { code: '+996', country: 'Kyrgyzstan' },
        { code: '+856', country: 'Laos' },
        { code: '+371', country: 'Latvia' },
        { code: '+961', country: 'Lebanon' },
        { code: '+266', country: 'Lesotho' },
        { code: '+231', country: 'Liberia' },
        { code: '+218', country: 'Libya' },
        { code: '+423', country: 'Liechtenstein' },
        { code: '+370', country: 'Lithuania' },
        { code: '+352', country: 'Luxembourg' },
        { code: '+853', country: 'Macau' },
        { code: '+389', country: 'Macedonia' },
        { code: '+261', country: 'Madagascar' },
        { code: '+265', country: 'MaLaw Firmi' },
        { code: '+60', country: 'Malaysia' },
        { code: '+960', country: 'Maldives' },
        { code: '+223', country: 'Mali' },
        { code: '+356', country: 'Malta' },
        { code: '+692', country: 'Marshall Islands' },
        { code: '+222', country: 'Mauritania' },
        { code: '+230', country: 'Mauritius' },
        { code: '+52', country: 'Mexico' },
        { code: '+691', country: 'Micronesia' },
        { code: '+373', country: 'Moldova' },
        { code: '+377', country: 'Monaco' },
        { code: '+976', country: 'Mongolia' },
        { code: '+382', country: 'Montenegro' },
        { code: '+212', country: 'Morocco' },
        { code: '+258', country: 'Mozambique' },
        { code: '+95', country: 'Myanmar' },
        { code: '+264', country: 'Namibia' },
        { code: '+674', country: 'Nauru' },
        { code: '+977', country: 'Nepal' },
        { code: '+31', country: 'Netherlands' },
        { code: '+64', country: 'New Zealand' },
        { code: '+505', country: 'Nicaragua' },
        { code: '+227', country: 'Niger' },
        { code: '+234', country: 'Nigeria' },
        { code: '+683', country: 'Niue' },
        { code: '+850', country: 'North Korea' },
        { code: '+47', country: 'Norway' },
        { code: '+968', country: 'Oman' },
        { code: '+92', country: 'Pakistan' },
        { code: '+680', country: 'Palau' },
        { code: '+507', country: 'Panama' },
        { code: '+675', country: 'Papua New Guinea' },
        { code: '+595', country: 'Paraguay' },
        { code: '+51', country: 'Peru' },
        { code: '+63', country: 'Philippines' },
        { code: '+48', country: 'Poland' },
        { code: '+351', country: 'Portugal' },
        { code: '+974', country: 'Qatar' },
        { code: '+40', country: 'Romania' },
        { code: '+7', country: 'Russia' },
        { code: '+250', country: 'Rwanda' },
        { code: '+685', country: 'Samoa' },
        { code: '+378', country: 'San Marino' },
        { code: '+239', country: 'Sao Tome and Principe' },
        { code: '+966', country: 'Saudi Arabia' },
        { code: '+221', country: 'Senegal' },
        { code: '+381', country: 'Serbia' },
        { code: '+248', country: 'Seychelles' },
        { code: '+232', country: 'Sierra Leone' },
        { code: '+65', country: 'Singapore' },
        { code: '+421', country: 'Slovakia' },
        { code: '+386', country: 'Slovenia' },
        { code: '+677', country: 'Solomon Islands' },
        { code: '+252', country: 'Somalia' },
        { code: '+27', country: 'South Africa' },
        { code: '+82', country: 'South Korea' },
        { code: '+34', country: 'Spain' },
        { code: '+94', country: 'Sri Lanka' },
        { code: '+249', country: 'Sudan' },
        { code: '+597', country: 'Suriname' },
        { code: '+268', country: 'Swaziland' },
        { code: '+46', country: 'Sweden' },
        { code: '+41', country: 'Switzerland' },
        { code: '+963', country: 'Syria' },
        { code: '+886', country: 'Taiwan' },
        { code: '+992', country: 'Tajikistan' },
        { code: '+255', country: 'Tanzania' },
        { code: '+66', country: 'Thailand' },
        { code: '+228', country: 'Togo' },
        { code: '+676', country: 'Tonga' },
        { code: '+216', country: 'Tunisia' },
        { code: '+90', country: 'Turkey' },
        { code: '+993', country: 'Turkmenistan' },
        { code: '+688', country: 'Tuvalu' },
        { code: '+256', country: 'Uganda' },
        { code: '+380', country: 'Ukraine' },
        { code: '+971', country: 'United Arab Emirates' },
        { code: '+598', country: 'Uruguay' },
        { code: '+998', country: 'Uzbekistan' },
        { code: '+678', country: 'Vanuatu' },
        { code: '+58', country: 'Venezuela' },
        { code: '+84', country: 'Vietnam' },
        { code: '+967', country: 'Yemen' },
        { code: '+260', country: 'Zambia' },
        { code: '+263', country: 'Zimbabwe' }
    ];

    countryCodes.forEach(({ code, country }) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} (${country})`;
        dropdown.appendChild(option);
    });

    return dropdown;
}

function createSubmitIcon(callback) {
    const submitIcon = document.createElement('div');
    submitIcon.className = 'submit-icon';
    const iconImg = document.createElement('img');
    iconImg.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66fa91a7923b423d630ec12e.png';
    submitIcon.appendChild(iconImg);
    submitIcon.onclick = callback;
    return submitIcon;
}

function removeInputGroup() {
    const inputGroup = document.querySelector('.input-group');
    if (inputGroup) {
        inputGroup.remove();
    }
}

function removeOptions() {
    const options = document.querySelector('.chat-options');
    if (options) {
        options.remove();
    }
}

function appendMessage(text, className, isOption = false) {
    
    const chatContent = document.getElementById('chat-content');
    const messageContainer = document.createElement('div'); // Container for message and button
    messageContainer.className = `message-container ${className}`;
    messageContainer.style.display = 'flex'; // Use flexbox for alignment

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;

    if (className === 'user-message') {
        // Align user messages to the right
        messageContainer.style.justifyContent = 'flex-end';

        const actionButton = document.createElement('button');
        
        if (isOption) {
            // Use setTimeout to delay adding the Undo button
            setTimeout(() => {
                // Undo button for option responses
                actionButton.className = 'undo-btn';
                actionButton.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66facd71721de4859347dd07.png" alt="Undo"><p class="undop">Undo</p>';
                actionButton.onclick = () => {
                    renderChatWidget(); // Restart the chat on Undo
                };
                disablePreviousUndoButtons(); // Disable previous Undo buttons

                // Place undo button on the left (before the message)
                messageContainer.insertBefore(actionButton, messageDiv);
                scrollToBottom(); // Ensure scroll is updated after the button is added
            }, 1000); // 1000ms (1 second) delay
        } else {
            // Edit button for typed responses
            actionButton.className = 'edit-btn';
            actionButton.innerHTML = '<img src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/6710017e97369c4cdced00fb.png" alt="Edit">';
            actionButton.onclick = () => handleEdit(messageDiv, (newText) => {
                collectedData.situation = newText;
            });

            // Place edit button after the message
            messageContainer.appendChild(actionButton);
        }

        messageContainer.appendChild(messageDiv);
    } else {
        // For bot messages, just append the message
        messageContainer.appendChild(messageDiv);
    }

    chatContent.appendChild(messageContainer);
    scrollToBottom();
}  

function scrollToBottom() {
    const chatContent = document.getElementById('chat-content');
    requestAnimationFrame(() => {
        chatContent.scrollTop = chatContent.scrollHeight;
    });
}

function handleEdit(element, callback) {
    // Store the current text content of the message
    const originalText = element.textContent;
    const inputField = document.createElement('input');
    inputField.className = 'input-field';
    inputField.value = originalText;
    element.parentNode.replaceChild(inputField, element);

    // Save button for the inline edit
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'save-btn';

    // Save button functionality
    saveButton.onclick = () => {
        const newText = inputField.value;
        element.textContent = newText;
        inputField.parentNode.replaceChild(element, inputField);
        saveButton.remove();
        callback(newText);  // Update the `collectedData` object
    };

    inputField.parentNode.appendChild(saveButton);
}

// Initialize video progress
function initializeVideoProgress(video, progressBar) {
    if (video && progressBar) {
        video.addEventListener('timeupdate', () => {
            const progress = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${progress}%`;
        });
    }
}

function selectOption(optionText, isOption) {
    questionStack.push({ question: "service", answer: optionText }); // Track question in stack
    const progressBarContainer = document.querySelector('.progress-bar-container');
    if (progressBarContainer) {
        progressBarContainer.style.display = 'none';
    }
  

  const emptyContainer = document.querySelector('.Empty-container');
  if (emptyContainer) {
      emptyContainer.style.display = 'none';
  }

  
  const playPauseButton = document.querySelector('#play-pause-btn');
  if (playPauseButton) {
      playPauseButton.style.display = 'none';
  }

  const payPauseButton = document.querySelector('#pay-pause-btn');
  if (payPauseButton) {
      payPauseButton.style.display = 'block';
  }

  const muteUnmuteButton = document.querySelector('#mute-unmute-btn');
  if (muteUnmuteButton) {
      muteUnmuteButton.style.display = 'none';
  }

  const chatHeader = document.querySelector('.chat-header');
  if (chatHeader) {
      chatHeader.classList.add('sticky-header');
  }
  
  const chatContent = document.querySelector('.chat-content');
  chatContent.style.setProperty('height', '95%', 'important'); // Set height to 95% with !important
  chatContent.style.setProperty('max-height', '95%', 'important');
  
  // Create a new div for the video container
  const videoContainer = document.createElement('div');
  videoContainer.className = 'video-container';
  videoContainer.style.position = 'relative';

  // Move the background video into the new container
  const backgroundVideo = document.getElementById('background-video');
  videoContainer.appendChild(backgroundVideo);



  // Append the icon to the button
  playPauseBtn.appendChild(playPauseIcon);

  // Style the button (optional)
  playPauseBtn.style.position = 'absolute';
  playPauseBtn.style.top = '45%';
  playPauseBtn.style.left = '20%';
  playPauseBtn.style.transform = 'translate(-50%, -50%)';

  // Append the play/pause button to the video container
  videoContainer.appendChild(playPauseBtn);

  // Insert the video container into chat content
  chatContent.insertBefore(videoContainer, chatContent.firstChild);

  // Add class for moving the video to the corner and pause it
  backgroundVideo.classList.add("move-video-to-corner");
  backgroundVideo.pause();

  // Change the message class for previous bot messages
  const elementsToChange = document.querySelectorAll('.message.ot-message');
  elementsToChange.forEach(element => {
      element.classList.replace('message', 'wec-whit');
      element.classList.remove('bot-message');
  });

  console.log("option_text:", optionText);

  appendMessage(optionText, 'user-message', isOption);
  collectedData.service = optionText;
  document.querySelector('.chat-options').innerHTML = '';

  // Call askSituation after a brief delay
  setTimeout(() => askSituation(), 1000);
}

function togglePlayPause() {
    console.log("calling togglePlayPause");

    const video = document.getElementById('background-video');
    const playPauseIcon = document.getElementById('play-pause-icon');
    
    if (video.paused) {
        video.play(); // Play the video
        playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png'; // Change icon to pause
    } else {
        video.pause(); // Pause the video
        playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0ca1f9de91588ec93e8c.png'; // Change icon to play
    }
}

function toggleMute() {
    const video = document.getElementById('background-video');
    const muteUnmuteIcon = document.getElementById('mute-unmute-icon');

    if (video.muted) {
        video.muted = false; // Unmute the video
        muteUnmuteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0d81f003010e66500af7.png'; // Set path to your unmute icon
    } else {
        video.muted = true; // Mute the video
        muteUnmuteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png'; // Set path to your mute icon
    }
}


function closeWidget() {
    toggleChatWidget(false);
}

function disablePreviousUndoButtons() {
    // Select all undo buttons that aren't already disabled
    const previousUndoButtons = document.querySelectorAll('.undo-btn:not(.disabled)');
    previousUndoButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled'); // Optionally add a 'disabled' style
    });
}

function initializePayPauseButton() {
    const payPauseBtn = document.getElementById('pay-pause-btn');
    if (payPauseBtn) {
        payPauseBtn.addEventListener('click', renderCustomerSupportWidget); // Call renderChatWidget on click
    }
}

// Function to render the chat widget (as provided)
function renderChatWidget() {
    const chatWidgetContainer = document.getElementById('chat-widget');
    chatWidgetContainer.style.display = 'block'; // Show the chat widget

    // Clear previous content
    const chatContent = document.getElementById('chat-content');
    chatContent.style.maxHeight = '81%'; // Set max-height to 85%
    chatContent.innerHTML = ''; // Clear current content

    const chatHeader = document.getElementById('chat-header');
    if (chatHeader) {
        chatHeader.classList.remove('sticky-header');
    }
    chatHeader.innerHTML = "";

    // Video background and progress bar
    const videoBackground = document.getElementById('video-background');
    videoBackground.innerHTML = `
        <video id="background-video" autoplay loop muted>
            <source src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/6725484582949649ceb22d7a.mp4" type="video/mp4">
        </video>
        <div class="progress-bar-container">
            <div class="progress-bar" id="progress-bar"></div>
        </div>
    `;

    // Initialize the video and progress bar
    const video = document.getElementById('background-video');
    const progressBar = document.getElementById('progress-bar');
    initializeVideoProgress(video, progressBar);

    let emptyContainer = document.querySelector('.Empty-container');
    if (emptyContainer) {
        emptyContainer.style.display = 'none';
    } else {
        emptyContainer = document.createElement('div');
        emptyContainer.className = 'Empty-container';
        chatContent.appendChild(emptyContainer);
    }

    // Create Play/Pause button
    const playPauseBtn = document.createElement('button');
    playPauseBtn.id = 'play-pause-btn';
    playPauseBtn.className = 'control-btn';
    playPauseBtn.setAttribute('aria-label', 'Play/Pause');

    const playPauseIcon = document.createElement('img');
    playPauseIcon.id = 'play-pause-icon';
    playPauseIcon.className = 'control-btn';
    playPauseIcon.setAttribute('aria-label', 'Play/Pause');
    playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png';
    playPauseIcon.alt = 'Play/Pause Icon';

    playPauseBtn.appendChild(playPauseIcon);
    playPauseBtn.onclick = togglePlayPause;

    // Create Mute/Unmute button
    const muteUnmuteBtn = document.createElement('button');
    muteUnmuteBtn.id = 'mute-unmute-btn';
    muteUnmuteBtn.className = 'control-btn';
    muteUnmuteBtn.setAttribute('aria-label', 'Mute/Unmute');
    muteUnmuteBtn.onclick = toggleMute;

    const muteUnmuteIcon = document.createElement('img');
    muteUnmuteIcon.id = 'mute-unmute-icon';
    muteUnmuteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png';
    muteUnmuteBtn.appendChild(muteUnmuteIcon);

    // Create Refresh button
    const refreshBtn = document.createElement('button');
    refreshBtn.id = 'refresh-btn';
    refreshBtn.className = 'control-btn';
    refreshBtn.setAttribute('aria-label', 'Refresh');

    const refreshIcon = document.createElement('img');
    refreshIcon.id = 'refresh-icon';
    refreshIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb04eaa256dd3e330dde51.png';
    refreshBtn.onclick = resetChatAndReload;
    refreshBtn.appendChild(refreshIcon);

    // Create Close button
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-btn';
    closeBtn.setAttribute('aria-label', 'Close chat widget');
    closeBtn.onclick = closeWidget;

    const closeIcon = document.createElement('img');
    closeIcon.id = 'close-icon';
    closeIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0456b8d5546df6dc3dac.png';
    closeBtn.appendChild(closeIcon);

    // Append buttons to chat header
    chatHeader.appendChild(playPauseBtn);
    chatHeader.appendChild(muteUnmuteBtn);
    chatHeader.appendChild(refreshBtn);
    chatHeader.appendChild(closeBtn);

    // Welcome message
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'message ot-message';
    welcomeMessage.textContent = `Hi 👋🏼 Let's find out if The Intake Bot™ can help your firm in`;

    // Chat options
    const chatOptions = document.createElement('div');
    chatOptions.className = 'chat-options';
    
    const options = ['Go ahead'];

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn bef';
        button.textContent = option;
        button.onclick = () => {
            selectOption(option, true); // Call selectOption when button is clicked
        };
        chatOptions.appendChild(button);
    });

    // Append welcome message and options to chat content
    chatContent.appendChild(welcomeMessage);
    chatContent.appendChild(chatOptions);
}

document.addEventListener('DOMContentLoaded', function () {
    // Call initializePayPauseButton or other initialization functions here
    initializePayPauseButton();
});

document.getElementById('chat-content').addEventListener('click', function(event) {
    if (event.target && event.target.id === 'pay-pause-btn') {
        togglePlayPause();
    }
});

// Function to render the customer support chat widget
function renderCustomerSupportWidget() {
    const chatWidgetContainer = document.getElementById('chat-widget');
    chatWidgetContainer.style.display = 'block'; // Show the chat widget

    // Clear previous content
    const chatContent = document.getElementById('chat-content');
    chatContent.style.maxHeight = '81%'; // Set max-height to 85%
    chatContent.innerHTML = ''; // Clear current content

    const chatHeader = document.getElementById('chat-header');
    if (chatHeader) {
        chatHeader.classList.remove('sticky-header');
    }
    chatHeader.innerHTML = "";

    // Video background and progress bar
    const videoBackground = document.getElementById('video-background');
    videoBackground.innerHTML = `
        <video id="background-video" autoplay loop muted>
            <source src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/6725484582949649ceb22d7a.mp4" type="video/mp4">
        </video>
        <div class="progress-bar-container">
            <div class="progress-bar" id="progress-bar"></div>
        </div>
    `;

    // Initialize the video and progress bar
    const video = document.getElementById('background-video');
    const progressBar = document.getElementById('progress-bar');
    initializeVideoProgress(video, progressBar);

    let emptyContainer = document.querySelector('.Empty-container');
    if (emptyContainer) {
        emptyContainer.style.display = 'none';
    } else {
        emptyContainer = document.createElement('div');
        emptyContainer.className = 'Empty-container';
        chatContent.appendChild(emptyContainer);
    }

    // Create Play/Pause button
    const playPauseBtn = document.createElement('button');
    playPauseBtn.id = 'play-pause-btn';
    playPauseBtn.className = 'control-btn';
    playPauseBtn.setAttribute('aria-label', 'Play/Pause');

    const playPauseIcon = document.createElement('img');
    playPauseIcon.id = 'play-pause-icon';
    playPauseIcon.className = 'control-btn';
    playPauseIcon.setAttribute('aria-label', 'Play/Pause');
    playPauseIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png';
    playPauseIcon.alt = 'Play/Pause Icon';

    playPauseBtn.appendChild(playPauseIcon);
    playPauseBtn.onclick = togglePlayPause;

    // Create Mute/Unmute button
    const muteUnmuteBtn = document.createElement('button');
    muteUnmuteBtn.id = 'mute-unmute-btn';
    muteUnmuteBtn.className = 'control-btn';
    muteUnmuteBtn.setAttribute('aria-label', 'Mute/Unmute');
    muteUnmuteBtn.onclick = toggleMute;

    const muteUnmuteIcon = document.createElement('img');
    muteUnmuteIcon.id = 'mute-unmute-icon';
    muteUnmuteIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png';
    muteUnmuteBtn.appendChild(muteUnmuteIcon);

    // Create Refresh button
    const refreshBtn = document.createElement('button');
    refreshBtn.id = 'refresh-btn';
    refreshBtn.className = 'control-btn';
    refreshBtn.setAttribute('aria-label', 'Refresh');

    const refreshIcon = document.createElement('img');
    refreshIcon.id = 'refresh-icon';
    refreshIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb04eaa256dd3e330dde51.png';
    refreshBtn.onclick = resetChatAndReload;
    refreshBtn.appendChild(refreshIcon);

    // Create Close button
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-btn';
    closeBtn.setAttribute('aria-label', 'Close chat widget');
    closeBtn.onclick = closeWidget;

    const closeIcon = document.createElement('img');
    closeIcon.id = 'close-icon';
    closeIcon.src = 'https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0456b8d5546df6dc3dac.png';
    closeBtn.appendChild(closeIcon);

    // Append buttons to chat header
    chatHeader.appendChild(playPauseBtn);
    chatHeader.appendChild(muteUnmuteBtn);
    chatHeader.appendChild(refreshBtn);
    chatHeader.appendChild(closeBtn);

    // Welcome message
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'message ot-message';
    welcomeMessage.textContent = `Hi 👋🏼 Let's find out if The Intake Bot™ can help your firm in`;

    // Chat options
    const chatOptions = document.createElement('div');
    chatOptions.className = 'chat-options';
    
    const options = ['Go ahead'];

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn bef';
        button.textContent = option;
        button.onclick = () => {
            selectOption(option, true); // Call selectOption when button is clicked
        };
        chatOptions.appendChild(button);
    });
    // Append welcome message and options to chat content
    chatContent.appendChild(welcomeMessage);
    chatContent.appendChild(chatOptions);
}

document.addEventListener('DOMContentLoaded', function() {
    const chatButtons = document.querySelectorAll('.open-chat-button'); // Yeh 'open-chat-button' class hai

    chatButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            openChatWidget();
        });
    });
});
