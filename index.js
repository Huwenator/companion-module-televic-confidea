
var instance_skel = require('../../instance_skel');
//var udp = require('../../udp');
var debug;
//var log;

function instance(system, id, config) {
    var self = this;
    // super-constructor
    instance_skel.apply(this, arguments);
 
    self.actions(); // export actions
	self.init_presets(); // button presets
	self.setFeedbackDefinitions(feedbacks);

    return self;
}

instance.prototype.updateConfig = function(config) {
    var self = this;
 
    self.config = config;
 	self.actions();
	self.init_presets();
	self.setFeedbackDefinitions(feedbacks);
}
 
instance.prototype.init = function() {
    var self = this;
 
    self.status(self.STATE_OK);
	self.init_presets();
	//self.setFeedbackDefinitions(feedbacks);
	self.init_feedbacks()

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
						bgcolor: self.rgb(255, 80, 0),
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
					bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]},
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
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
						bgcolor: self.rgb(255, 80, 0),
						color: self.rgb(255, 255, 255),
					},
				},
			]}
																																																																															
			// Add more presets here
	];

	self.setPresetDefinitions(presets);
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
                      ],
                },
            ]
        },
        'allmicsoff': {
            label: 'All Microphones Off',
        },
    });

}
 
instance.prototype.init_variables = function () {
	self.setVariableDefinitions( [
		{
			label: 'Microphone number',
			name: 'mic_num'
		},
	] );
};


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
		var count = 0;  // TODO add var array containing mics with on state

		// sends off command to mics up to 40
		while (count < 40) { 
			count++;
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

// Feedback section
// this would be a UDP message on port 8000 from the camera control of the G3
// you would need to set the ip of the companion laptop in the mic contoller
// UDP message will be JSON formated like this {"UID": 7, "status": 1} meaning "Mic 7 is on"
// status options are - 0=off, 1=on 2=request

// I think by adding udp as a var up the top you can query it by udp(self.host, self.port, message)

/*
instance.prototype.udp = function() {
	var self = this;
	var controller = self.createSocket('udp4');
	var message = '';
	
	// Check for existing connection and delete if there is one
	if (self.controller !== undefined) {
		controller.destroy()
		delete client
	}
	
	// Listen for UDP message
	self.controller.on('listening', function (message) {
		// log message
		console.log('Listening for UDP on ' + self.prefix + ":" + self.port);
	});
	
	// Messsage recieved
	self.controller.on('message', function () {
		// log message
		self.message = JSON.parse(message)
		console.log('Message from ' + self.prefix + ':' + self.port +' - ' + message);
	});
	
	//
	// Need to parce message and get MIC# and STATE#
	
	//
	
	// Sort message 
	switch (self.controller.message) {
		
		case 0:
			self.feedback.type = 'mic_off'
			self.log('Mic off')
		break
		
		case 1:
			self.feedback.type = 'mic_on'
			self.log('Mic on')
		break
			
		case 2:
			self.feedback.type = 'mic_req'
			self.log('Mic request')
		break
		
		default:
			self.log('Valid UPD message not recieved from ' + self.prefix)
		
	}
}
*/

// Define the feedback types and style
instance.prototype.init_feedbacks = function () {
	var self = this;
	var feedbacks = {}

	feedbacks['mic_on'] = {
		label: 'Change bg when mic on',
		description: 'If the microphone specified is on, change colors of the button',
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
			},
			{
				type: 'number',
				label: 'Mic number',
				id: 'mic',
				min: 1,
				max: 40,
				range: false,
				default: ''
			}

		]
	}

	feedbacks['mic_req'] = {
		label: 'Change bg when mic in request',
		description: 'If the microphone specified is in request, change colors of the button',
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
				default: self.rgb(255, 180, 0)
			},
			{
				type: 'number',
				label: 'Mic number',
				id: 'mic',
				min: 1,
				max: 40,
				range: false,
				default: ''
			}
		]
	}

	self.setFeedbackDefinitions(feedbacks)
}

// Apply the feedback styles
instance.prototype.feedback = function(feedback, bank) {	
	var self = this;
		
	if (feedback.type === 'mic_on') {
		// may need to change self.states once UDP is working
		if (self.states['mic_on'] === parseInt(feedback.options.mic)) {
			return { color: feedback.options.fg, bgcolor: feedback.options.bg }
		}
	}

	if (feedback.type === 'mic_req') {
		// may need to change self.states once UDP is working
		if (self.states['mic_req'] === parseInt(feedback.options.mic)) {
			return { color: feedback.options.fg, bgcolor: feedback.options.bg }
		}
	}

	return {}
}

instance_skel.extendedBy(instance)
exports = module.exports = instance