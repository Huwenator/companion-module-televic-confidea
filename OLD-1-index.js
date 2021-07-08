
var instance_skel = require('../../instance_skel');
var udp = require('../../udp');
var debug;
var log;

function instance(system, id, config) {
    var self = this;
    // super-constructor
    instance_skel.apply(this, arguments);
 
    self.actions(); // export actions
 
    return self;
}

instance.prototype.updateConfig = function(config) {
    var self = this;
 
    self.config = config;
 
    self.actions();
}
 
instance.prototype.init = function() {
    var self = this;
 
    self.status(self.STATE_OK);
 
    debug = self.debug;
    log = self.log;
}
 
// Return config fields for instance
instance.prototype.config_fields = function () {
    var self = this;
   
    return [
        {
            type: 'text',
            id: 'info',
            width: 12,
            label: 'Information',
            value: 'Use the \'Controller IP\' field below to define the IP address for the control unit.  </br> Set button lable as $(confidea:micnumber) </br> For button feedback you will need to enable camera control on the G3 and set the IP as the Companion controller and set port number to listen to.  Default is 8000'
        },
        {
            type: 'textinput',
            id: 'prefix',
            label: 'Controller IP',
            width: 4,
            default: '192.168.0.113',
            regex: self.REGEX_IP
        },
        {
            type: 'textinput',
            id: 'port',
            label: 'Listen for UDP on port',
            width: 4,
            default: '8000'
        }
    ]
}
 
// When module gets deleted
instance.prototype.destroy = function() {
    var self = this;
    debug("destroy");

	// Do I need to destroy the UDP listen?
}
 
// Create variable for button lable to match mic number
//  self.setVariable('micnumber', actions.options.mic);
// I'm not sure how to do this
 
instance.prototype.actions = function(system) {
    var self = this;
    //var urlLabel = 'URL'; // Not sure this is required here
 
    self.setActions({
        'post': {
            label: 'Microphone',
            options: [
                {
                    type: 'number',
                    label: 'Mic number',
                    id: 'mic',
                    min: 1,
                    max: 256,
                    range: false,
                    default: ''
                },
                {
                    type: 'dropdown',
                    label: 'Action',
                    id: 'action',
                    default: '',
                    choices: [
                        { id: '0', label: 'Off' },
                        { id: '1', label: 'On' },
                        { id: '2', label: 'Request' }
                      ],
                },
            ]
        },
        'alloff': {
            label: 'All Off',
        },
    });
}
 
instance.prototype.action = function(action) {
    var self = this;
    var cmd;
 
	if ( self.config.prefix !== undefined ) {

		// Action for all mics off - loops through 1 -> 256 sending turn off command
		if (action.actions == 'alloff') {
			var count = 1;

			cmd = 'http://' + self.config.prefix + '/php/func.php?function=SetMicState&channel=' + count + '&state=0';
			
			while(count < 257)
				self.system.emit(cmd, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP POST Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				};

				self.log('Turned mic ' + count + ' off');
				self.status(self.STATUS_OK, 'Turned mic ' + count + ' off');
				count++
			});
		}

		// Action for change single mic state
		if (action.action == 'post') {

			cmd = 'http://' + self.config.prefix + '/php/func.php?function=SetMicState&channel=' + action.options.mic + '&state=' + action.options.action;

			self.system.emit(cmd, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP POST Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				}
				self.log('Turned mic ' + count + ' state to ' + action.options.action);
				self.status(self.STATUS_OK, 'Turned mic ' + count + ' state to ' + action.options.action);
			});
	 	}
	}
}
/*
// Feedback section
// this would be a UDP message on port 8000 from the camera control
// you would need to set the ip of the companion laptop in the mic contoller
// UDP message would be something like {"UID": 7, "status": 1} meaning "Mic 7 is on"
// status options are - 0=off, 1=on 2=request

// I think by adding udp as a var up the top you can query it by udp(self.host, self.port, message)

instance.prototype.udp4 = function() {
	var self = this;
	var client = self.createSocket('udp4');
	var message = '';
	
	// Check for existing connection and delete if there is one
	if (self.client !== undefined) {
		self.client.destroy()
		delete self.client
	}
	
	// Listen for UDP message
	client.on('listening', function (message) {
		// log message
		console.log('Listening for UDP on ' + self.prefix + ":" + self.port);
	});
	
	// Messsage recieved
	client.on('message', function () {
		// log message
		console.log('Message from ' + self.prefix + ':' + self.port +' - ' + message);

	});
	
	//
	// Need to parce message and get MIC# and STATE#
	//
	
	// Sort message 
	switch (client.message) {
		
		case 0:
			
			self.log('Mic off')
		break
		
		case 1:
			self.log('Mic on')
		break
			
		case 2:
			self.log('Mic request')
		break
		
		default:
			self.log('Valid UPD message not recieved from ' + self.prefix)
		
	}
}


instance.prototype.feedback = function() {	
	var self = this;
	const feedbacks = {}
		
		feedbacks['udp'] = {
			type: 'boolean', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
			label: 'Button pressed',
			description: 'Longer description of the feedback',
			style: {
				// The default style change for a boolean feedback
				// The user will be able to customise these values as well as the fields that will be changed
				color: self.rgb(0, 0, 0),
				bgcolor: self.rgb(255, 0, 0)
			},
			// options is how the user can choose the condition the feedback activates for
			options: [{
				type: 'number',
				label: 'Source',
				id: 'source',
				default: 1
			}],
			callback: function (feedback) {
				// This callback will be called whenever companion wants to check if this feedback is 'active' and should affect the button style
				if (self.some_device_state.source == options.source) {
					return true
				} else {
					return false
				}
			}
		}
		self.setFeedbackDefinitions(feedbacks);
}

// Don't think this is required...

//	client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {

//		if (err) throw err;
//		console.log('UDP message sent to ' + HOST +':'+ PORT);

//	});


instance.prototype.init_feedback = function () {
	var self = this;
	const feedbacks = {}

	feedbacks['mic_bg'] = {
		type: 'boolean',
		label: 'Change bg when mic on',
		description: 'If the microphone specified is in use, change colors of the button',
		style: {
			// The default style change for a boolean feedback
			color: self.rgb(0, 0, 0),
			bgcolor: self.rgb(255, 0, 0)
		},
		options: [
			{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: self.rgb(255, 255, 255)
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: self.rgb(255, 0, 0)
			}
		],

		callback: function (feedback) {
			// This callback will be called whenever companion wants to check if this feedback is 'active' and should affect the button style
			if (self.active.source == options.source) {
				return true
			} else {
				return false
			}
		}

	}
}
*/
// self.setFeedbackDefinitions(feedbacks);
// ------------------

instance_skel.extendedBy(instance)
exports = module.exports = instance