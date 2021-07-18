
var instance_skel = require('../../instance_skel');
var debug;
var log;

function instance(system, id, config) {
    var self = this;
	self.mic_state = new Array();
	self.mic_uid;

    // super-constructor
    instance_skel.apply(this, arguments);
 
    self.actions(); // export actions
	self.init_Feedbacks();

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
	self.init_udp();

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
  
instance.prototype.actions = function(system) {
    var self = this;
 
    self.setActions({
        'post': {
            label: 'Microphone',
            options: [
                {
                    type: 'number',
                    label: 'Mic number',
                    id: 'mic',
                    min: 1,
                    max: 40,
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
                	]
                }
            ]
        },
        'allmicsoff': {
            label: 'All Microphones Off',
        }
    });
}

instance.prototype.action = function(action) {
    var self = this;
    var cmd;

	if (action.action == 'post') {
		var body;

		cmd = 'http://' + self.config.prefix + '/php/func.php?function=SetMicState&channel=' + action.options.mic + '&state=' + action.options.action;

		self.system.emit('rest', cmd, body, function (err, result) {
			if (err !== null) {
				self.log('error', 'HTTP POST Request failed (' + result.error.code + ')');
				self.status(self.STATUS_ERROR, result.error.code);
			}
			else {
				self.status(self.STATUS_OK);
			}
		});
		
	}


	if (action.action == 'allmicsoff') {
		var body;

		/*
		self.mic_state.filter(item => item.state = 1)
			.foreach(item => {
			cmd = 'http://' + self.config.prefix + '/php/func.php?function=SetMicState&channel=' + item + '&state=0';

			self.system.emit('rest', cmd, body, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP POST Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				}
				else {
					self.mic_state(item, 0);
					self.status(self.STATUS_OK);
				}
			});	
		})
		*/

		// sends off command to mics up to 40.  need to set this to max position in self.mic_state
		for (var count = 1; count <= 40; count++) {
			cmd = 'http://' + self.config.prefix + '/php/func.php?function=SetMicState&channel=' + count + '&state=0';

			self.system.emit('rest', cmd, body, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP POST Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				}
				else {
					self.status(self.STATUS_OK);
				}
			});	
		}
	}
}

instance.prototype.init_udp = function() {
	var self = this;

	const dgram = require('dgram');
	const server = dgram.createSocket('udp4');

//	// Check for existing connection and delete if there is one
//	if (server !== undefined) {
//		server.destroy();
//		delete client
//	}
	
	// If there is a error with the connection log message
	server.on('error', (err) => {
	   console.log(`server error:\n${err.stack}`);
	   server.close();
	});
	
	// Receive messesge
	server.on('message', (msg, rinfo) => {
	   console.log(`G3 udp server sent message: ${msg} from ${rinfo.address}:${rinfo.port}`);
	   
	   // Message is parsed to an array and mic_state is updated.
	   if (msg !== undefined) {
			var udpmessage = JSON.parse(msg)

        	self.mic_state[udpmessage.uid] = udpmessage.status
        	self.mic_uid = udpmessage.uid
        	console.log(`Mic ${self.mic_uid} changed to ${self.mic_state[udpmessage.uid]}`)
        	console.log(`Mic status array ${self.mic_state}`)

			self.checkFeedbacks('mic_on')
			self.checkFeedbacks('mic_req')
			self.checkFeedbacks('mic_prior')
		};
	});
	
	server.on('listening', (rinfo) => {
	   // This event is just so you know the thing started to work.
	   console.log(`G3 upd server listening`);
	});
	
	// Bind to port 8000.
	server.bind(8000);
}

// Define the feedback types and style
instance.prototype.init_Feedbacks = function () {
	var self = this;
	const feedbacks = {}

	feedbacks['mic_on'] = {
		type: 'boolean',
		label: 'Mic on',
		description: 'If the microphone specified is on, change colors of the button',
		style: {
			color: self.rgb(255, 255, 255),
			bgcolor: self.rgb(255, 0, 0)
				},

		options: [{
			type: 'number',
			label: 'Mic number',
			id: 'mic',
			default: 1,
		}],
        callback: function (feedback, bank) {
            console.log(`Testing if Mic ${feedback.options.mic} is on`);
            if (self.mic_uid == feedback.options.mic && self.mic_state[feedback.options.mic] == 1){
				console.log(`Mic is On`);
                return true
            }
			console.log('Mic is off');
            return false    
        },
	},

	feedbacks['mic_req'] = {
		type: 'boolean',
		label: 'Mic in request',
		description: 'If the microphone specified is in request, change colors of the button',
		style: {
			color: self.rgb(255, 255, 255),
			bgcolor: self.rgb(255, 180, 0),
			},

		options: [{
			type: 'number',
			label: 'Mic number',
			id: 'mic',
			default: 1
		}],
        callback: function (feedback, bank) {
            console.log(`Testing if Mic ${feedback.options.mic} is requesting`);
            if (self.mic_uid == feedback.options.mic && self.mic_state[feedback.options.mic] == 2){
				console.log(`Mic is requesting`);
				return true
            }
			console.log('Mic is not requesting')
            return false
        },
	},

	feedbacks['mic_prior'] = {
		type: 'boolean',
		label: 'Mic has priority',
		description: 'If the microphone specified has priority, change colors of the button',
		style: {
			color: self.rgb(255, 255, 255),
			bgcolor: self.rgb(0, 255, 0),
			},

		options: [{
			type: 'number',
			label: 'Mic number',
			id: 'mic',
			default: 1
		}],
        callback: function (feedback, bank) {
            console.log(`Testing if Mic ${feedback.options.mic} has priority`);
            if (self.mic_uid == feedback.options.mic && self.mic_state[feedback.options.mic] == 3){
				console.log(`Mic has priority`);
				return true
            }
			console.log('Mic does not have priority')
            return false
        },
	},

	self.setFeedbackDefinitions(feedbacks)
}

instance_skel.extendedBy(instance)
exports = module.exports = instance