import React from 'react';
import Demo from '../../demo/demo';
import * as azog from 'azog';

export default class LayersDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'layers',
				value: {
					mainLayer: {
						zIndex: 1,
						positionInsideHost: {
							vertical: {
							},
							horizontal: {
							}
						},
						componentInfos: {
							id: 2
						}
					},
					subLayers: [
						{
							zIndex: 0,
							positionInsideHost: {
								vertical: {
									start: 20,
									end: 20
								},
								horizontal: {
									start: 20,
									end: 20
								}
							},
							componentInfos: {
								id: 3
							}
						}
					]
				}
			},
			2: {
				type: 'labelWF',
				value: {
					text: 'hello world',
					style: {
						color: 2,
						size: 2
					}
				}
			},
			3: {
				type: 'uniColorWF',
				value: {
					color: 1
				}
			}
		}
	}

	render() {
		return (
			<Demo azogApp={this._azogApp} title="layers" />
		);
	}
}
