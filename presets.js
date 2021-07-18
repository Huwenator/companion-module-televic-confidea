exports = module.exports = function () {

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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '1',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '1',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '2',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '2',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '3',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '3',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '4',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '4',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '5',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '5',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '6',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '6',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '7',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '7',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '8',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '8',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '9',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '9',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		// 10
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '10',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '10',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '11',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '11',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
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
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '12',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '12',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '13',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '13',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '13',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '13',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '13',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '13',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '14',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '14',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '14',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '14',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '14',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '14',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '15',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '15',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '15',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '15',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '15',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '15',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '16',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '16',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '16',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '16',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '16',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '16',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '17',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '17',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '17',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '17',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '17',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '17',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '18',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '18',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '18',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '18',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '18',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '18',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '19',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '19',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '19',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '19',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '19',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '19',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		// 20
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '20',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '20',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '20',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '20',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '20',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '20',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '21',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '21',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '21',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '21',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '21',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '21',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '22',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '22',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '22',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '22',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '22',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '22',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '23',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '23',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '23',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '23',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '23',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '23',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '24',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '24',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '24',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '24',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '24',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '24',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '25',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '25',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '25',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '25',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '25',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '25',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '26',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '26',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '26',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '26',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '26',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '26',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '27',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '27',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '27',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '27',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '27',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '27',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '28',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '28',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '28',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '28',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '28',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '28',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '29',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '29',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '29',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '29',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '29',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '29',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		// 30
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '30',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '30',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '30',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '30',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '30',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '30',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '31',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '31',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '31',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '31',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '31',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '31',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
		{
			category: 'Microphones',
			label: 'Microphone',
			bank: {
				style: 'text',
				text: '32',
				size: 'auto',
				color: '16777215',
				latch: true,
				bgcolor: self.rgb(0,0,0)
			},
			actions: [
				{
				action: 'post',
				options: {
					mic: '32',
					action: '1',
				}
				}, 
			],
			release_actions: [
				{
				action: 'post',
				options: {
					mic: '32',
					action: '0'
				}
				},
			],
			feedbacks: [
				{
					type: 'mic_on',
					options: {
						mic: '32',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 0, 0),
					},
				},{
					type: 'mic_req',
					options: {
						mic: '32',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(255, 150, 0),
					},
				},{
					type: 'mic_prior',
					options: {
						mic: '32',
					},
					style: {
						color: self.rgb(255, 255, 255),
						bgcolor: self.rgb(0, 150, 50),
					},
				},
			]},
				
			// Add more presets here
	];

	self.setPresetDefinitions(presets)
}