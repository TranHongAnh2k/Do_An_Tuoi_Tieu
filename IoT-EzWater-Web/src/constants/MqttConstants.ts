import { macAddress } from "./InitMacAddress";

export const PrefixTopic = {
	RL0: 'RL0' + macAddress.device1,
	RL1: 'RL1' + macAddress.device1,
	RL2: 'RL2' + macAddress.device1,
	RL3: 'RL3' + macAddress.device1,
	RL4: 'RL4' + macAddress.device1,
}
export const PrefixTopic2 = {
	RL0: 'RL0' + macAddress.device2,
	RL1: 'RL1' + macAddress.device2,
	RL2: 'RL2' + macAddress.device2,
	RL3: 'RL3' + macAddress.device2,
	RL4: 'RL4' + macAddress.device2,
}

export const FBTopicSub = {
	temperature: 'ESP/temperature' + macAddress.device1,
	humidity: 'ESP/humidity' + macAddress.device1,
	percentSoil: 'ESP/percent_soil' + macAddress.device1,
	rl1: 'ESPg/RL1' + macAddress.device1,
	rl2: 'ESPg/RL2' + macAddress.device1,
	rl3: 'ESPg/RL3' + macAddress.device1,
	rl4: 'ESPg/RL4' + macAddress.device1,
}
export const FBTopicSub2 = {
	temperature: 'ESP/temperature' + macAddress.device2,
	humidity: 'ESP/humidity' + macAddress.device2,
	percentSoil: 'ESP/percent_soil' + macAddress.device2,
	rl1: 'ESPg/RL1' + macAddress.device2,
	rl2: 'ESPg/RL2' + macAddress.device2,
	rl3: 'ESPg/RL3' + macAddress.device2,
	rl4: 'ESPg/RL4' + macAddress.device2,
}

export const FBTopicPublish = {
	ActionOnOff: 'ESPn/',
	HourUp: 'APPgH1/RL1',
	MinuteUp: 'APPgM1/RL1',
	HourDown: 'APPgH2/RL1',
	MinuteDown: 'APPgM2/RL1',
}
