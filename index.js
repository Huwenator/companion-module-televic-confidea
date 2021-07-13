
var instance_skel = require('../../instance_skel');
var debug;
var log;

function instance(system, id, config) {
    var self = this;
    // super-constructor
    instance_skel.apply(this, arguments);
 
	//const MAX_MIC = 40;
	var mic_state = new Array();

    self.actions(); // export actions
	self.init_presets(); // button presets
	self.setFeedbackDefinitions(feedbacks);

	//self.init_udp();

    return self;
}

instance.prototype.updateConfig = function(config) {
    var self = this;
 
    self.config = config;
 	self.actions();
	self.init_presets();
	self.setFeedbackDefinitions(feedbacks);

	//self.init_udp();
}

instance.prototype.init = function() {
    var self = this;
 
    self.status(self.STATE_OK);
	self.init_presets();
	self.setFeedbackDefinitions(feedbacks);
	self.init_Feedbacks();
	self.init_udp();

    debug = self.debug;
    log = self.log;
}

// Button presets
instance.prototype.init_presets = function () {
	var self = this;
	var presets = [
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '1',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '1',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '1',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '1',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '1',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
        {
		category: 'Microphones',
		label: 'Microphone',
		bank: {
			style: 'text',
			text: '2',
			size: 'auto',
			color: '16777215',
			latch: true,
			bgcolor: self.rgb(0,0,0)
			
		},
		actions: [
			{
			action: 'post',
			options: {
				mic: '2',
				action: '1',
			}
			}, 
		],
		release_actions: [
			{
			action: 'post',
			options: {
				mic: '2',
				action: '0'
			}
			},
		],
		feedbacks: [
			{
				type: 'mic_on',
				options: {
					mic: '2',
				},
				style: {
					bgcolor: self.rgb(255, 0, 0),
					color: self.rgb(255, 255, 255),
				},
			},{
				type: 'mic_req',
				options: {
					mic: '2',
				},
				style: {
					bgcolor: self.rgb(255, 255, 0),
					color: self.rgb(255, 255, 255),
				},
			},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '3',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '3',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '3',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '3',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '3',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '4',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '4',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '4',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '4',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '4',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '5',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '5',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '5',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '5',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '5',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '6',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '6',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '6',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '6',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '6',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '7',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '7',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '7',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '7',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '7',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '8',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '8',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '8',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '8',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '8',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '9',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '9',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '9',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '9',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '9',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '10',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '10',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '10',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '10',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '10',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '11',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '11',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '11',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '11',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '11',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '12',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
				
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '12',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '12',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '12',
					},
					style: {
						bgcolor: self.rgb(255, 0, 0),
						color: self.rgb(255, 255, 255),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '12',
					},
					style: {
						bgcolor: self.rgb(255, 255, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]}
																																																																															
			// Add more presets here
	];

	self.setPresetDefinitions(presets)
}
// End of presets

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
 
// ToDo Create variable for button lable to match mic number
//  self.setVariable('micnumber', actions.options.mic);
// I'm not sure how to do this
 
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

/*  Not working yet
instance.prototype.init_variables = function () {
	self.setVariableDefinitions( [
		{
			label: 'Microphone number',
			name: 'mic_num'
		},
	] );
};
*/

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

		// sends off command to mics up to 40
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

// Feedback from UDP section
// this would be a UDP message on port 8000 from the camera control of the G3
// you would need to set the ip of the companion laptop in the mic contoller
// UDP message will be JSON formated like this {"UID": 7, "status": 1} meaning "Mic 7 is on"
// status options are - 0=off, 1=on 2=request

// I think by adding udp as a var up the top you can query it by udp(self.host, self.port, message)


instance.prototype.init_udp = function() {
	var self = this;
//	var mic_state = new Array(40).fill(0);
	var mic_state = new Array();
    var mic_uid;

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
			var udpmessage = JSON.parse(msg);

            mic_state[udpmessage.uid] = udpmessage.status;
            mic_uid = udpmessage.uid;
            console.log('Mic ' + udpmessage.uid + ' changed to ' + udpmessage.status);
            console.log('Mic status ' + mic_state);
            // ----
            // Okay, so when I run it.  All loads okay.  I press the button on the mic and I get the two log's above
            // telling me that message received, it parces correctly and then the mic_state array show's me that 
            // position 1 = 1  when the mic is on and 1 = 0 when the mic is off.
            // Annnd thats it.  Logs further button pushes but doesn't seem to check feedbacks 
            // 
            // Now I'm stuck.
            //----

            self.checkFeedbacks('mic_on');
            self.checkFeedbacks('mic_req');
           // };
		};
	});
	
	server.on('listening', (rinfo) => {
	   // This event is just so you know the thing started to work.
	   // var address = server.address();
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
        callback: function (feedback) {
            console.log('Testing if Mic On ' + options.mic);
            if (self.mic_uid == options.mic){
                return true
            }
            return false    
        }
	}

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
        callback: function (feedback) {
            console.log('Testing if Mic Req ' + options.mic);
            if (self.mic_state[options.mic] == 2) {
                return true
            }
            return false
        }
	}
    
	self.setFeedbackDefinitions(feedbacks)
}

instance_skel.extendedBy(instance)
exports = module.exports = instance