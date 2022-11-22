import * as mqtt from 'mqtt';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Switch from 'react-switch';
import {
	Badge, Card,
	CardBody,
	CardFooter,
	CardTitle, Col, Row, UncontrolledTooltip
} from 'reactstrap';
import { FBTopicPublish, FBTopicSub, FBTopicSub2, PrefixTopic, PrefixTopic2 } from '../../constants/MqttConstants';
import humidity from './../../assets/img/icon/humidity.svg';
import pumpOff from './../../assets/img/icon/pump.svg';
import lightOff from './../../assets/img/icon/lightOff.svg';
import lightOn from './../../assets/img/icon/lightbulb.svg';
import soil from './../../assets/img/icon/soil.svg';
import temperature from './../../assets/img/icon/temperature.svg';
import pumpOn from './../../assets/img/icon/water-pump.svg';

function Home(props: any) {
	const { mqttClient }: { mqttClient: mqtt.MqttClient } = props;
	const mqttData = useSelector((state: any) => state.mqttReducer);
	const [switchRL1, setswitchRL1] = useState<boolean>(false);
	const [switchRL2, setswitchRL2] = useState<boolean>(false);
	const [switchRL3, setswitchRL3] = useState<boolean>(false);
	const [switchRL4, setswitchRL4] = useState<boolean>(false);
	const [switchRL5, setswitchRL5] = useState<boolean>(false);
	const [switchRL6, setswitchRL6] = useState<boolean>(false);
	const [switchRL7, setswitchRL7] = useState<boolean>(false);
	const [switchRL8, setswitchRL8] = useState<boolean>(false);
	const handleChange = useCallback(
		(data, key) => {
			switch (key) {
				case FBTopicSub.rl1:
					setswitchRL1(data);
					mqttClient.publish(FBTopicPublish.ActionOnOff + PrefixTopic.RL1, (+data).toString());
					break;
				case FBTopicSub.rl2:
					setswitchRL2(data);
					mqttClient.publish(FBTopicPublish.ActionOnOff + PrefixTopic.RL2, (+data).toString());
					break;
				case FBTopicSub.rl3:
					setswitchRL3(data);
					mqttClient.publish(FBTopicPublish.ActionOnOff + PrefixTopic.RL3, (+data).toString());
					break;
				case FBTopicSub.rl4:
					setswitchRL4(data);
					mqttClient.publish(FBTopicPublish.ActionOnOff + PrefixTopic.RL4, (+data).toString());
					break;
				case FBTopicSub2.rl1:
					setswitchRL5(data);
					mqttClient.publish(FBTopicPublish.ActionOnOff + PrefixTopic2.RL1, (+data).toString());
					break;
				case FBTopicSub2.rl2:
					setswitchRL6(data);
					mqttClient.publish(FBTopicPublish.ActionOnOff + PrefixTopic2.RL2, (+data).toString());
					break;
				case FBTopicSub2.rl3:
					setswitchRL7(data);
					mqttClient.publish(FBTopicPublish.ActionOnOff + PrefixTopic2.RL3, (+data).toString());
					break;
				case FBTopicSub2.rl4:
					setswitchRL8(data);
					mqttClient.publish(FBTopicPublish.ActionOnOff + PrefixTopic2.RL4, (+data).toString());
					break;
				default:
					break;
			}
		},
		[mqttClient, mqttData[FBTopicSub.rl1]],
	);

	React.useEffect(() => {
		mqttData[FBTopicSub.rl1] !== undefined && setswitchRL1(mqttData[FBTopicSub.rl1]);
		mqttData[FBTopicSub.rl2] !== undefined && setswitchRL2(mqttData[FBTopicSub.rl2]);
		mqttData[FBTopicSub.rl3] !== undefined && setswitchRL3(mqttData[FBTopicSub.rl3]);
		mqttData[FBTopicSub.rl4] !== undefined && setswitchRL4(mqttData[FBTopicSub.rl4]);
	}, [mqttData[FBTopicSub.rl1], mqttData[FBTopicSub.rl2], mqttData[FBTopicSub.rl3], mqttData[FBTopicSub.rl4]]);
	React.useEffect(() => {
		mqttData[FBTopicSub2.rl1] !== undefined && setswitchRL5(mqttData[FBTopicSub2.rl1]);
		mqttData[FBTopicSub2.rl2] !== undefined && setswitchRL6(mqttData[FBTopicSub2.rl2]);
		mqttData[FBTopicSub2.rl3] !== undefined && setswitchRL7(mqttData[FBTopicSub2.rl3]);
		mqttData[FBTopicSub2.rl4] !== undefined && setswitchRL8(mqttData[FBTopicSub2.rl4]);
	}, [mqttData[FBTopicSub2.rl1], mqttData[FBTopicSub2.rl2], mqttData[FBTopicSub2.rl3], mqttData[FBTopicSub2.rl4]]);



	return (
		<>
			<div className='content'>
				<div>Thiết bị 1</div>
				<Row>
					<Col lg='4' md='4' sm='12'>
						<Card className={'card-stats'} id={'temperature-popover'}>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning icon-card'>
											<img src={temperature} alt='' />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											<p className='card-category'>{mqttData[FBTopicSub.temperature] || 0} độ C</p>
											<CardTitle tag='p'>Temperature</CardTitle>
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter></CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='4' sm='12'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning icon-card'>
											<img src={humidity} alt='' />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											<p className='card-category'>{mqttData[FBTopicSub.humidity] || 0}%</p>
											<CardTitle tag='p'>Humidity</CardTitle>
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter></CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='4' sm='12'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning icon-card'>
											<img src={soil} alt='' />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											<p className='card-category'>
												{mqttData[FBTopicSub.percentSoil] || 0}%{' '}
												{(+mqttData[FBTopicSub.percentSoil] || 0) < 20 ? (
													<>
														<Badge color='danger' id='DisabledAutoHideExample'>
															!
														</Badge>
														<UncontrolledTooltip placement='top' target='DisabledAutoHideExample'>
															{`Percent soil < 20%, please water!`}
														</UncontrolledTooltip>
													</>
												) : (
													<></>
												)}
											</p>
											<CardTitle tag='p'>Percent soil</CardTitle>
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter></CardFooter>
						</Card>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col lg='3' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning'>
											<img alt='' className='icon-card' src={!mqttData[FBTopicSub.rl1] ? pumpOff : pumpOn} />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											{/* <p className='card-category'>Revenue</p> */}
											<CardTitle tag='p'>Pump 1</CardTitle>
											{/* <p /> */}
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<Switch onChange={data => handleChange(data, FBTopicSub.rl1)} checked={switchRL1} />
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='3' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning'>
											<img alt='' className='icon-card' src={!mqttData[FBTopicSub.rl2] ? pumpOff : pumpOn} />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											{/* <p className='card-category'>Revenue</p> */}
											<CardTitle tag='p'>Pump 2</CardTitle>
											{/* <p /> */}
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<Switch onChange={data => handleChange(data, FBTopicSub.rl2)} checked={switchRL2} />
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='3' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning'>
											<img alt='' className='icon-card' src={!mqttData[FBTopicSub.rl3] ? lightOff : lightOn} />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											<CardTitle tag='p'>Light 1</CardTitle>
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<Switch onChange={data => handleChange(data, FBTopicSub.rl3)} checked={switchRL3} />
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='3' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning'>
											<img alt='' className='icon-card' src={!mqttData[FBTopicSub.rl4] ? lightOff : lightOn} />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											{/* <p className='card-category'>Followers</p> */}
											<CardTitle tag='p'>Light 2</CardTitle>
											{/* <p /> */}
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<Switch onChange={data => handleChange(data, FBTopicSub.rl4)} checked={switchRL4} />
								</div>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</div>
			<div className='content'>
				<div>Thiết bị 2</div>
				<Row>
					<Col lg='4' md='4' sm='12'>
						<Card className={'card-stats'} id={'temperature-popover'}>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning icon-card'>
											<img src={temperature} alt='' />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											<p className='card-category'>{mqttData[FBTopicSub2.temperature] || 0} độ C</p>
											<CardTitle tag='p'>Temperature</CardTitle>
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter></CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='4' sm='12'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning icon-card'>
											<img src={humidity} alt='' />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											<p className='card-category'>{mqttData[FBTopicSub2.humidity] || 0}%</p>
											<CardTitle tag='p'>Humidity</CardTitle>
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter></CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='4' sm='12'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning icon-card'>
											<img src={soil} alt='' />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											<p className='card-category'>
												{mqttData[FBTopicSub2.percentSoil] || 0}%{' '}
												{(+mqttData[FBTopicSub2.percentSoil] || 0) < 20 ? (
													<>
														<Badge color='danger' id='DisabledAutoHideExample'>
															!
														</Badge>
														<UncontrolledTooltip placement='top' target='DisabledAutoHideExample'>
															{`Percent soil < 20%, please water!`}
														</UncontrolledTooltip>
													</>
												) : (
													<></>
												)}
											</p>
											<CardTitle tag='p'>Percent soil</CardTitle>
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter></CardFooter>
						</Card>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col lg='3' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning'>
											<img alt='' className='icon-card' src={!mqttData[FBTopicSub2.rl1] ? pumpOff : pumpOn} />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											{/* <p className='card-category'>Revenue</p> */}
											<CardTitle tag='p'>Pump 1</CardTitle>
											{/* <p /> */}
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<Switch onChange={data => handleChange(data, FBTopicSub2.rl1)} checked={switchRL5} />
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='3' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning'>
											<img alt='' className='icon-card' src={!mqttData[FBTopicSub2.rl2] ? pumpOff : pumpOn} />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											{/* <p className='card-category'>Revenue</p> */}
											<CardTitle tag='p'>Pump 2</CardTitle>
											{/* <p /> */}
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<Switch onChange={data => handleChange(data, FBTopicSub2.rl2)} checked={switchRL6} />
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='3' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning'>
											<img alt='' className='icon-card' src={!mqttData[FBTopicSub2.rl3] ? lightOff : lightOn} />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											<CardTitle tag='p'>Light 1</CardTitle>
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<Switch onChange={data => handleChange(data, FBTopicSub2.rl3)} checked={switchRL7} />
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='3' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='4' xs='5'>
										<div className='icon-big text-center icon-warning'>
											<img alt='' className='icon-card' src={!mqttData[FBTopicSub2.rl4] ? lightOff : lightOn} />
										</div>
									</Col>
									<Col md='8' xs='7'>
										<div className='numbers'>
											{/* <p className='card-category'>Followers</p> */}
											<CardTitle tag='p'>Light 2</CardTitle>
											{/* <p /> */}
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<Switch onChange={data => handleChange(data, FBTopicSub2.rl4)} checked={switchRL8} />
								</div>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Home;
