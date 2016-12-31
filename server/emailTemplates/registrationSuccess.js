'use strict';


function buildTemplate(data) {
	return `
		<div style="max-width:800px;position:relative;margin:20px auto;padding:15px;border:2px solid black;box-shadow:0 0 5px 2px lightgray;letter-spacing:1px;">
			<div style="text-align:center;">
				<h1 style="font-size:40px; font-size:40px; padding-bottom:5px; margin-top:15px;  border-bottom:1px solid #cacaca;">Welcome New User!</h1>
				<h2 style="font-size:28px">...your new account was successfully created.</h2>
			</div>

			<h4 style="font-size="18px">Thank you for subscribing to Tree Machine Records,</h4>

			<p style="font-size:14px">We believe the future is guided only by the past, and the present is decided only by our choices here and now. As technology advances, so much continues to change culturally and in many of the same ways across the globe. Tree Machine Records is our way of giving you a portal to peer into the past, and listen to the sounds that shape our future. Artists have connected with us and vice versa from various parts of the diverse, aural landscapes of the world that bring us together at the deepest level. It's our honor to create records of these mucisians' will to find meaning, in the beauty of life, throughout any given time.</p>

			<div style="text-align:center;">
				<b>Follow the link to login and update your account.</b>
			</div>

			<div style="text-align:center;margin:20px 0;">
				<a style="padding: 6px 12px;font-size: 20px;line-height: 1.42857143;border-radius: 3px;background: #278ECA;color: white;text-decoration: none;" href="http://www.treemachinerecords.com/login">Login</a>
			</div>

			<div style="text-align:center; border-top:1px solid #cacaca; padding:20px 0 0;">
				<img src="http://www.treemachinerecords.com/images/treemachinerecords-email.png">
			</div>
		</div>
	`
}

module.exports = buildTemplate;
