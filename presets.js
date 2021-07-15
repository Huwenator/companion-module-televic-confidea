
/*// Button presets
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
*/

