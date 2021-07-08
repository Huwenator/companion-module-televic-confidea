var udp           = require('../../udp');
var tcp           = require('../../tcp');
var instance_skel = require('../../instance_skel');
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

	self.init_presets();
	self.init_udp();
}

// create TCP connection
instance.prototype.init_tcp = function() {
	var self = this;

	if (self.socket !== undefined) {
		self.socket.destroy();
		delete self.socket;
	}

	self.status(self.STATE_WARNING, 'Connecting');

	if (self.config.host) {
		self.socket = new tcp(self.config.host, self.config.port);

		self.socket.on('status_change', function (status, message) {
			self.status(status, message);
		});

		self.socket.on('error', function (err) {
			debug("Network error", err);
			self.status(self.STATE_ERROR, err);
			self.log('error',"Network error: " + err.message);
		});

		self.socket.on('connect', function () {
			self.status(self.STATE_OK);
			debug("Connected");
		})

		self.socket.on('data', function (data) {});
	}
};


// Return config fields for web config
instance.prototype.config_fields = function () {
	var self = this;
	return [
		{
			type: 'text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'Mic on/off commands sent by UDP'
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Base unit IP address',
			width: 12,
			regex: self.REGEX_IP
		},
		{
			type: 'textinput',
			id: 'port',
			label: 'TCP Port (Default: 80)',
			width: 4,
			default: 80,
			regex: self.REGEX_PORT
		},

	]
}

// When module gets deleted
instance.prototype.destroy = function() {
	var self = this;
	debug("destroy");
}

/* Variable for button lable
** self.setVariableDefinitions( [
**	{
**		label: 'Set button lable to mic number',
**		name: 'mic_num'
**	}
**  ] );
**
// Preset for a button
presets.push({
    category: 'Commands',
    label: Mic,
    bank: {
      style: 'text',
      text: self.Mic,
      size: '18',
      color: '16777215',
      bgcolor: self.rgb(0,0,0)
    },
    actions: [{
      action: 'run',
      options: {
        id: 'demo',
      }
    }]
**  });
*/

// Set microphone number and option
instance.prototype.actions = function(system) {
	var self = this;

	self.setActions({
		'channel': {
			label: 'Channel',
			options: [
				{
					type: 'number',
					label: 'Mic #',
					id: 'mic',
					default: ''
				},
			]
		},
	});

	self.setActions({
		'state': {
			type: 'dropdown',
			label: 'Mic state',
			id: 'MicState',
			default: '',
			choices: [
			  { id: '0', label: 'Off' },
			  { id: '1', label: 'On' },
			  { id: '2', label: 'Request' }
			],
		  }
	});
}

// Set button lable variable
// self.setVariable('mic_num', self.channel);
 self.init_presets();

instance.prototype.action = function(action) {
	var self = this;
	var cmd;

	if ( self.config.controller !== undefined && action.options.url.substring(0,4) != 'http' ) {
		if ( self.config.prefix.length > 0 ) {
			cmd = self.config.controller + action.options.url;
		}
		else {
			cmd = action.options.url;
		}
	}
	else {
		cmd = action.options.url;
	}
	// get the microphone state
	// if off turn on
	// else turn off
	
	if (action.action == 'get') {
		var header;
		if(!!action.options.header) {
			try {
				header = JSON.parse(action.options.header);
			} catch(e){
				self.log('error', 'HTTP POST Request aborted: Malformed JSON header (' + e.message+ ')');
				self.status(self.STATUS_ERROR, e.message);
				return
			}
			self.system.emit('rest_get', cmd, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP GET Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				}
				else {
					self.status(self.STATUS_OK);
				}
			}, header);
		} else {
			self.system.emit('rest_get', cmd, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP GET Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				}
				else {
					self.status(self.STATUS_OK);
				}
			});
		}
	}

	if (action.action == 'channel') {
		var body;
		var header;
		try {
			body = JSON.parse(action.options.body);
		} catch(e){
			self.log('error', 'HTTP POST Request aborted: Malformed JSON Body (' + e.message+ ')');
			self.status(self.STATUS_ERROR, e.message);
			return
		}
		if(!!action.options.header) {
			try {
				header = JSON.parse(action.options.header);
			} catch(e){
				self.log('error', 'HTTP POST Request aborted: Malformed JSON header (' + e.message+ ')');
				self.status(self.STATUS_ERROR, e.message);
				return
			}
			self.system.emit('rest', cmd, body, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP POST Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				}
				else {
					self.status(self.STATUS_OK);
				}
			}, header);
		} else {
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
	else if (action.action == 'put') {
		var body;
		var header;
		try {
			body = JSON.parse(action.options.body);
		} catch(e){
			self.log('error', 'HTTP PUT Request aborted: Malformed JSON Body (' + e.message+ ')');
			self.status(self.STATUS_ERROR, e.message);
			return
		}
		if(!!action.options.header) {
			try {
				header = JSON.parse(action.options.header);
			} catch(e){
				self.log('error', 'HTTP POST Request aborted: Malformed JSON header (' + e.message+ ')');
				self.status(self.STATUS_ERROR, e.message);
				return
			}
			self.system.emit('rest_put', cmd, body, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP PUT Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				}
				else {
					self.status(self.STATUS_OK);
				}
			}, header);
		} else {
			self.system.emit('rest_put', cmd, body, function (err, result) {
				if (err !== null) {
					self.log('error', 'HTTP PUT Request failed (' + result.error.code + ')');
					self.status(self.STATUS_ERROR, result.error.code);
				}
				else {
					self.status(self.STATUS_OK);
				}
			});
		}
	}
}

/*
instance.prototype.init_feedbacks = function () {
	const self = this
	const feedbacks = {}
	// Set button background to red if on
	feedbacks['mic_on'] = {
		label: 'Change colors for microphone on',
		description: 'If the mic specified is on, change colors of the button',
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
				type: 'dropdown',
				label: 'Input',
				id: 'input',
				default: 1,
				choices: self.mic_on
			}
		]
	}
	// Set button background to orange if in queue
	feedbacks['mic_queue'] = {
		label: 'Change colors for microphone in queue',
		description: 'If the mic specified is waiting in queue, change colors of the button',
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
				default: self.rgb(255, 140, 0)
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'input',
				default: 1,
				choices: self.mic_queue
			}
		]
	}

	self.setFeedbackDefinitions(feedbacks)
	self.init_presets();
}
*/

instance_skel.extendedBy(instance);
exports = module.exports = instance;
