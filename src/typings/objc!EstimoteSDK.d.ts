
interface ESBeaconUpdateInfoDelegate extends NSObjectProtocol {

	beaconUpdateInfoInitialized(beaconUpdateInfo: ESTBeaconUpdateInfo): void;
}
declare var ESBeaconUpdateInfoDelegate: {

	prototype: ESBeaconUpdateInfoDelegate;
};

declare const enum ESBeaconUpdateInfoStatus {

	Idle = 0,

	ReadyToUpdate = 1,

	Updating = 2,

	UpdateSuccess = 3,

	UpdateFailed = 4
}

declare const enum ESBulkUpdaterStatus {

	Idle = 0,

	Updating = 1,

	Completed = 2
}

declare const enum ESTAnalyticsEventType {

	EnterRegion = 0,

	ExitRegion = 1,

	InFar = 2,

	InNear = 3,

	InImmediate = 4,

	InUnknown = 5
}

declare class ESTAnalyticsEventVO extends NSObject implements NSCoding, NSCopying {

	static alloc(): ESTAnalyticsEventVO; // inherited from NSObject

	static getCurrentTimestamp(): number;

	static new(): ESTAnalyticsEventVO; // inherited from NSObject

	readonly eventType: number;

	readonly inForeground: number;

	readonly location: CLLocation;

	readonly region: CLBeaconRegion;

	readonly timestamp: number;

	constructor(o: { beaconRegion: CLBeaconRegion; location: CLLocation; eventType: ESTAnalyticsEventType; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithBeaconRegionLocationEventType(region: CLBeaconRegion, location: CLLocation, eventType: ESTAnalyticsEventType): this;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class ESTAnalyticsManager extends NSObject {

	static alloc(): ESTAnalyticsManager; // inherited from NSObject

	static enableGPSPositioningForAnalytics(enable: boolean): void;

	static enableMonitoringAnalytics(enable: boolean): void;

	static enableRangingAnalytics(enable: boolean): void;

	static getEventTypeForProximity(proximity: CLProximity): ESTAnalyticsEventType;

	static isMonitoringAnalyticsEnabled(): boolean;

	static isRangingAnalyticsEnabled(): boolean;

	static new(): ESTAnalyticsManager; // inherited from NSObject

	static sharedInstance(): ESTAnalyticsManager;

	registerAnalyticsEventWithRegionType(region: CLBeaconRegion, eventType: ESTAnalyticsEventType): void;

	sendRegisteredEvents(): void;
}

declare class ESTBaseVO extends NSObject {

	static alloc(): ESTBaseVO; // inherited from NSObject

	static new(): ESTBaseVO; // inherited from NSObject

	objectForKeyInDictionary(aKey: string, dict: NSDictionary<any, any>): any;
}

declare class ESTBeacon extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): ESTBeacon; // inherited from NSObject

	static new(): ESTBeacon; // inherited from NSObject

	readonly accuracy: number;

	readonly major: number;

	readonly minor: number;

	readonly proximity: CLProximity;

	readonly proximityUUID: NSUUID;

	readonly rssi: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { proximityUUID: NSUUID; major: number; minor: number; proximity: CLProximity; accuracy: number; rssi: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithProximityUUIDMajorMinorProximityAccuracyRssi(proximityUUID: NSUUID, major: number, minor: number, proximity: CLProximity, accuracy: number, rssi: number): this;
}

declare class ESTBeaconBaseVO extends NSObject {

	static alloc(): ESTBeaconBaseVO; // inherited from NSObject

	static new(): ESTBeaconBaseVO; // inherited from NSObject

	objectForKeyInDictionary(aKey: string, dict: NSDictionary<any, any>): any;
}

declare class ESTBeaconBatteryLifetimesVO extends NSObject {

	static alloc(): ESTBeaconBatteryLifetimesVO; // inherited from NSObject

	static new(): ESTBeaconBatteryLifetimesVO; // inherited from NSObject

	constructor(o: { lifetimes: NSDictionary<any, any>; });

	initWithLifetimes(lifetimes: NSDictionary<any, any>): this;

	lifetimeForAdvertisingInterval(interval: number): string;

	lifetimeForBasicPowerModeAndSmart(basic: ESTBeaconPowerSavingMode, smart: ESTBeaconPowerSavingMode): string;

	lifetimeForBroadcastingPower(power: number): string;

	lifetimeForBroadcastingScheme(scheme: ESTBroadcastingScheme): string;

	shouldDisplayAlertForAdvertisingInterval(interval: number): boolean;

	shouldDisplayAlertForBasicPowerModeAndSmart(basic: ESTBeaconPowerSavingMode, smart: ESTBeaconPowerSavingMode): boolean;

	shouldDisplayAlertForBroadcastingPower(power: number): boolean;
}

declare const enum ESTBeaconBatteryType {

	Unknown = 0,

	CR2450 = 1,

	CR2477 = 2
}

declare const enum ESTBeaconCharInfoType {

	WriteRead = 0,

	WriteOnly = 1
}

declare const enum ESTBeaconConditionalBroadcasting {

	Unknown = 0,

	Unsupported = 1,

	Off = 2,

	MotionOnly = 3,

	FlipToStop = 4
}

declare class ESTBeaconConnection extends NSObject {

	static alloc(): ESTBeaconConnection; // inherited from NSObject

	static connectionWithBeaconDelegate(beacon: CLBeacon, delegate: ESTBeaconConnectionDelegate): ESTBeaconConnection;

	static connectionWithIdentifierDelegate(identifier: string, delegate: ESTBeaconConnectionDelegate): ESTBeaconConnection;

	static connectionWithMacAddressDelegate(macAddress: string, delegate: ESTBeaconConnectionDelegate): ESTBeaconConnection;

	static connectionWithProximityUUIDMajorMinorDelegate(proximityUUID: NSUUID, major: number, minor: number, delegate: ESTBeaconConnectionDelegate): ESTBeaconConnection;

	static new(): ESTBeaconConnection; // inherited from NSObject

	readonly advInterval: number;

	readonly basicPowerMode: ESTBeaconPowerSavingMode;

	readonly batteryLevel: number;

	readonly batteryType: ESTBeaconBatteryType;

	readonly broadcastingScheme: ESTBroadcastingScheme;

	readonly color: ESTColor;

	readonly conditionalBroadcastingState: ESTBeaconConditionalBroadcasting;

	readonly connectionStatus: ESTConnectionStatus;

	delegate: ESTBeaconConnectionDelegate;

	readonly eddystoneInstance: string;

	readonly eddystoneNamespace: string;

	readonly eddystoneURL: string;

	readonly estimoteSecureUUIDState: ESTBeaconEstimoteSecureUUID;

	readonly firmwareVersion: string;

	readonly hardwareVersion: string;

	readonly identifier: string;

	readonly indoorLocationIdentifier: string;

	readonly indoorLocationName: string;

	readonly latitude: number;

	readonly location: NSDictionary<any, any>;

	readonly longitude: number;

	readonly macAddress: string;

	readonly major: number;

	readonly minor: number;

	readonly motionDetectionState: ESTBeaconMotionDetection;

	readonly motionProximityUUID: NSUUID;

	readonly motionState: ESTBeaconMotionState;

	readonly motionUUIDState: ESTBeaconMotionUUID;

	readonly name: string;

	readonly peripheral: CBPeripheral;

	readonly power: number;

	readonly proximityUUID: NSUUID;

	readonly remainingLifetime: number;

	readonly rssi: number;

	readonly smartPowerMode: ESTBeaconPowerSavingMode;

	readonly temperatureState: ESTBeaconTemperatureState;

	constructor(o: { beacon: CLBeacon; delegate: ESTBeaconConnectionDelegate; startImmediately: boolean; });

	constructor(o: { identifier: string; delegate: ESTBeaconConnectionDelegate; startImmediately: boolean; });

	constructor(o: { macAddress: string; delegate: ESTBeaconConnectionDelegate; startImmediately: boolean; });

	constructor(o: { proximityUUID: NSUUID; major: number; minor: number; delegate: ESTBeaconConnectionDelegate; startImmediately: boolean; });

	cancelConnection(): void;

	checkFirmwareUpdateWithCompletion(completion: (p1: any, p2: NSError) => void): void;

	disconnect(): void;

	findPeripheralForBeaconWithTimeoutCompletion(timeout: number, completion: (p1: any, p2: NSError) => void): void;

	getMacAddressWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	initWithBeaconDelegateStartImmediately(beacon: CLBeacon, delegate: ESTBeaconConnectionDelegate, startImmediately: boolean): this;

	initWithIdentifierDelegateStartImmediately(identifier: string, delegate: ESTBeaconConnectionDelegate, startImmediately: boolean): this;

	initWithMacAddressDelegateStartImmediately(macAddress: string, delegate: ESTBeaconConnectionDelegate, startImmediately: boolean): this;

	initWithProximityUUIDMajorMinorDelegateStartImmediately(proximityUUID: NSUUID, major: number, minor: number, delegate: ESTBeaconConnectionDelegate, startImmediately: boolean): this;

	readAccelerometerCountWithCompletion(completion: (p1: number, p2: NSError) => void): void;

	readTemperatureWithCompletion(completion: (p1: number, p2: NSError) => void): void;

	resetAccelerometerCountWithCompletion(completion: (p1: number, p2: NSError) => void): void;

	resetToFactorySettingsWithCompletion(completion: (p1: NSError) => void): void;

	startConnection(): void;

	startConnectionWithAttemptsConnectionTimeout(attempts: number, timeout: number): void;

	updateFirmwareWithProgressCompletion(progress: (p1: number, p2: string, p3: NSError) => void, completion: (p1: NSError) => void): void;

	valueObject(): ESTBeaconVO;

	writeAdvIntervalCompletion(interval: number, completion: (p1: number, p2: NSError) => void): void;

	writeBasicPowerModeEnabledCompletion(enable: boolean, completion: (p1: boolean, p2: NSError) => void): void;

	writeBroadcastingSchemeCompletion(broadcastingScheme: ESTBroadcastingScheme, completion: (p1: number, p2: NSError) => void): void;

	writeCalibratedTemperatureCompletion(temperature: number, completion: (p1: number, p2: NSError) => void): void;

	writeConditionalBroadcastingTypeCompletion(conditionalBroadcasting: ESTBeaconConditionalBroadcasting, completion: (p1: boolean, p2: NSError) => void): void;

	writeEddystoneDomainNamespaceCompletion(eddystoneNamespace: string, completion: (p1: string, p2: NSError) => void): void;

	writeEddystoneHexNamespaceCompletion(eddystoneNamespace: string, completion: (p1: string, p2: NSError) => void): void;

	writeEddystoneInstanceCompletion(eddystoneInstance: string, completion: (p1: string, p2: NSError) => void): void;

	writeEddystoneURLCompletion(eddystoneURL: string, completion: (p1: string, p2: NSError) => void): void;

	writeEstimoteSecureUUIDEnabledCompletion(enable: boolean, completion: (p1: boolean, p2: NSError) => void): void;

	writeLatitudeLongitudeCompletion(latitude: number, longitude: number, completion: (p1: NSError) => void): void;

	writeMajorCompletion(major: number, completion: (p1: number, p2: NSError) => void): void;

	writeMinorCompletion(minor: number, completion: (p1: number, p2: NSError) => void): void;

	writeMotionDetectionEnabledCompletion(enable: boolean, completion: (p1: boolean, p2: NSError) => void): void;

	writeMotionUUIDEnabledCompletion(enable: boolean, completion: (p1: boolean, p2: NSError) => void): void;

	writeNameCompletion(name: string, completion: (p1: string, p2: NSError) => void): void;

	writePowerCompletion(power: ESTBeaconPower, completion: (p1: ESTBeaconPower, p2: NSError) => void): void;

	writeProximityUUIDCompletion(pUUID: string, completion: (p1: string, p2: NSError) => void): void;

	writeSmartPowerModeEnabledCompletion(enable: boolean, completion: (p1: boolean, p2: NSError) => void): void;

	writeTagsCompletion(tags: NSSet<string>, completion: (p1: NSError) => void): void;
}

interface ESTBeaconConnectionDelegate extends NSObjectProtocol {

	beaconConnectionDidDisconnectWithError?(connection: ESTBeaconConnection, error: NSError): void;

	beaconConnectionDidFailWithError?(connection: ESTBeaconConnection, error: NSError): void;

	beaconConnectionDidSucceed?(connection: ESTBeaconConnection): void;

	beaconConnectionDidUpdateRSSI?(connection: ESTBeaconConnection, rssi: number): void;

	beaconConnectionDidVerifyWithDataError?(connection: ESTBeaconConnection, data: ESTBeaconVO, error: NSError): void;

	beaconConnectionMotionStateChanged?(connection: ESTBeaconConnection, state: ESTBeaconMotionState): void;
}
declare var ESTBeaconConnectionDelegate: {

	prototype: ESTBeaconConnectionDelegate;
};

declare class ESTBeaconDefinitions extends NSObject {

	static alloc(): ESTBeaconDefinitions; // inherited from NSObject

	static new(): ESTBeaconDefinitions; // inherited from NSObject
}

declare const enum ESTBeaconDetailsFields {

	AllFields = 1,

	FieldMac = 2,

	FieldColor = 4,

	FieldName = 8,

	FieldGPSLocation = 16,

	FieldIndoorLocation = 32,

	FieldPublicIdentifier = 64,

	FieldRemainingBatteryLifetime = 128,

	AllSettings = 256,

	FieldBattery = 512,

	FieldPower = 1024,

	FieldInterval = 2048,

	FieldHardware = 4096,

	FieldFirmware = 8192,

	FieldBasicPowerMode = 16384,

	FieldSmartPowerMode = 32768,

	FieldTimeZone = 65536,

	FieldSecurity = 131072,

	FieldMotionDetection = 262144,

	FieldConditionalBroadcasting = 524288,

	FieldBroadcastingScheme = 1048576,

	FieldUUIDMajorMinor = 2097152,

	FieldEddystoneNamespaceID = 4194304,

	FieldEddystoneInstanceID = 8388608
}

declare const enum ESTBeaconEstimoteSecureUUID {

	Unknown = 0,

	Unsupported = 1,

	On = 2,

	Off = 3
}

declare const enum ESTBeaconFirmwareState {

	Boot = 0,

	App = 1
}

declare class ESTBeaconFirmwareVO extends ESTFirmwareInfoVO {

	static alloc(): ESTBeaconFirmwareVO; // inherited from NSObject

	static new(): ESTBeaconFirmwareVO; // inherited from NSObject

	firmwareCleanerUrl: string;

	firmwareUrl: string;
}

declare class ESTBeaconManager extends NSObject {

	static alloc(): ESTBeaconManager; // inherited from NSObject

	static authorizationStatus(): CLAuthorizationStatus;

	static motionProximityUUIDForProximityUUID(proximityUUID: NSUUID): NSUUID;

	static new(): ESTBeaconManager; // inherited from NSObject

	avoidUnknownStateBeacons: boolean;

	delegate: ESTBeaconManagerDelegate;

	readonly monitoredRegions: NSSet<any>;

	preventUnknownUpdateCount: number;

	readonly rangedRegions: NSSet<any>;

	returnAllRangedBeaconsAtOnce: boolean;

	isAuthorizedForMonitoring(): boolean;

	isAuthorizedForRanging(): boolean;

	requestAlwaysAuthorization(): void;

	requestStateForRegion(region: CLBeaconRegion): void;

	requestWhenInUseAuthorization(): void;

	startAdvertisingWithProximityUUIDMajorMinorIdentifier(proximityUUID: NSUUID, major: number, minor: number, identifier: string): void;

	startMonitoringForRegion(region: CLBeaconRegion): void;

	startRangingBeaconsInRegion(region: CLBeaconRegion): void;

	stopAdvertising(): void;

	stopMonitoringForAllRegions(): void;

	stopMonitoringForRegion(region: CLBeaconRegion): void;

	stopRangingBeaconsInAllRegions(): void;

	stopRangingBeaconsInRegion(region: CLBeaconRegion): void;

	updateRangeLimit(limit: number): void;
}

interface ESTBeaconManagerDelegate extends NSObjectProtocol {

	beaconManagerDidChangeAuthorizationStatus?(manager: any, status: CLAuthorizationStatus): void;

	beaconManagerDidDetermineStateForRegion?(manager: any, state: CLRegionState, region: CLBeaconRegion): void;

	beaconManagerDidEnterRegion?(manager: any, region: CLBeaconRegion): void;

	beaconManagerDidExitRegion?(manager: any, region: CLBeaconRegion): void;

	beaconManagerDidFailWithError?(manager: any, error: NSError): void;

	beaconManagerDidRangeBeaconsInRegion?(manager: any, beacons: NSArray<CLBeacon>, region: CLBeaconRegion): void;

	beaconManagerDidStartAdvertisingError?(manager: any, error: NSError): void;

	beaconManagerDidStartMonitoringForRegion?(manager: any, region: CLBeaconRegion): void;

	beaconManagerMonitoringDidFailForRegionWithError?(manager: any, region: CLBeaconRegion, error: NSError): void;

	beaconManagerRangingBeaconsDidFailForRegionWithError?(manager: any, region: CLBeaconRegion, error: NSError): void;
}
declare var ESTBeaconManagerDelegate: {

	prototype: ESTBeaconManagerDelegate;
};

declare const enum ESTBeaconManagerError {

	InvalidRegion = 1,

	LocationServicesUnauthorized = 2
}

declare const enum ESTBeaconMotionDetection {

	Unknown = 0,

	Unsupported = 1,

	On = 2,

	Off = 3
}

declare const enum ESTBeaconMotionState {

	Unknown = 0,

	Unsupported = 1,

	Moving = 2,

	NotMoving = 3
}

declare const enum ESTBeaconMotionUUID {

	Unknown = 0,

	Unsupported = 1,

	On = 2,

	Off = 3
}

declare class ESTBeaconOperationConnectivityInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationConnectivityInterval; // inherited from NSObject

	static new(): ESTBeaconOperationConnectivityInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingConnectivityInterval, p2: NSError) => void): ESTBeaconOperationConnectivityInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingConnectivityInterval, completion: (p1: ESTSettingConnectivityInterval, p2: NSError) => void): ESTBeaconOperationConnectivityInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationConnectivityPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationConnectivityPower; // inherited from NSObject

	static new(): ESTBeaconOperationConnectivityPower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingConnectivityPower, p2: NSError) => void): ESTBeaconOperationConnectivityPower;

	static writeOperationWithSettingCompletion(setting: ESTSettingConnectivityPower, completion: (p1: ESTSettingConnectivityPower, p2: NSError) => void): ESTBeaconOperationConnectivityPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationDeviceInfoApplicationVersion extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationDeviceInfoApplicationVersion; // inherited from NSObject

	static new(): ESTBeaconOperationDeviceInfoApplicationVersion; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoApplicationVersion, p2: NSError) => void): ESTBeaconOperationDeviceInfoApplicationVersion;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationDeviceInfoBootloaderVersion extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationDeviceInfoBootloaderVersion; // inherited from NSObject

	static new(): ESTBeaconOperationDeviceInfoBootloaderVersion; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoBootloaderVersion, p2: NSError) => void): ESTBeaconOperationDeviceInfoBootloaderVersion;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationDeviceInfoHardwareVersion extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationDeviceInfoHardwareVersion; // inherited from NSObject

	static new(): ESTBeaconOperationDeviceInfoHardwareVersion; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoHardwareVersion, p2: NSError) => void): ESTBeaconOperationDeviceInfoHardwareVersion;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationDeviceInfoUTCTime extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationDeviceInfoUTCTime; // inherited from NSObject

	static new(): ESTBeaconOperationDeviceInfoUTCTime; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoUTCTime, p2: NSError) => void): ESTBeaconOperationDeviceInfoUTCTime;

	static writeOperationWithSettingCompletion(setting: ESTSettingDeviceInfoUTCTime, completion: (p1: ESTSettingDeviceInfoUTCTime, p2: NSError) => void): ESTBeaconOperationDeviceInfoUTCTime;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationDeviceInfoUptime extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationDeviceInfoUptime; // inherited from NSObject

	static new(): ESTBeaconOperationDeviceInfoUptime; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoUptime, p2: NSError) => void): ESTBeaconOperationDeviceInfoUptime;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneConfigurationServiceEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneConfigurationServiceEnable; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneConfigurationServiceEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneConfigurationServiceEnable, p2: NSError) => void): ESTBeaconOperationEddystoneConfigurationServiceEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneConfigurationServiceEnable, completion: (p1: ESTSettingEddystoneConfigurationServiceEnable, p2: NSError) => void): ESTBeaconOperationEddystoneConfigurationServiceEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneEIDEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneEIDEnable; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneEIDEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneEIDEnable, p2: NSError) => void): ESTBeaconOperationEddystoneEIDEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneEIDEnable, completion: (p1: ESTSettingEddystoneEIDEnable, p2: NSError) => void): ESTBeaconOperationEddystoneEIDEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneEIDInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneEIDInterval; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneEIDInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneEIDInterval, p2: NSError) => void): ESTBeaconOperationEddystoneEIDInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneEIDInterval, completion: (p1: ESTSettingEddystoneEIDInterval, p2: NSError) => void): ESTBeaconOperationEddystoneEIDInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneEIDPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneEIDPower; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneEIDPower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneEIDPower, p2: NSError) => void): ESTBeaconOperationEddystoneEIDPower;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneEIDPower, completion: (p1: ESTSettingEddystoneEIDPower, p2: NSError) => void): ESTBeaconOperationEddystoneEIDPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneTLMEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneTLMEnable; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneTLMEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneTLMEnable, p2: NSError) => void): ESTBeaconOperationEddystoneTLMEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneTLMEnable, completion: (p1: ESTSettingEddystoneTLMEnable, p2: NSError) => void): ESTBeaconOperationEddystoneTLMEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneTLMInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneTLMInterval; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneTLMInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneTLMInterval, p2: NSError) => void): ESTBeaconOperationEddystoneTLMInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneTLMInterval, completion: (p1: ESTSettingEddystoneTLMInterval, p2: NSError) => void): ESTBeaconOperationEddystoneTLMInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneTLMPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneTLMPower; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneTLMPower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneTLMPower, p2: NSError) => void): ESTBeaconOperationEddystoneTLMPower;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneTLMPower, completion: (p1: ESTSettingEddystoneTLMPower, p2: NSError) => void): ESTBeaconOperationEddystoneTLMPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneUIDEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneUIDEnable; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneUIDEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneUIDEnable, p2: NSError) => void): ESTBeaconOperationEddystoneUIDEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneUIDEnable, completion: (p1: ESTSettingEddystoneUIDEnable, p2: NSError) => void): ESTBeaconOperationEddystoneUIDEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneUIDInstance extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneUIDInstance; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneUIDInstance; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneUIDInstance, p2: NSError) => void): ESTBeaconOperationEddystoneUIDInstance;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneUIDInstance, completion: (p1: ESTSettingEddystoneUIDInstance, p2: NSError) => void): ESTBeaconOperationEddystoneUIDInstance;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneUIDInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneUIDInterval; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneUIDInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneUIDInterval, p2: NSError) => void): ESTBeaconOperationEddystoneUIDInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneUIDInterval, completion: (p1: ESTSettingEddystoneUIDInterval, p2: NSError) => void): ESTBeaconOperationEddystoneUIDInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneUIDNamespace extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneUIDNamespace; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneUIDNamespace; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneUIDNamespace, p2: NSError) => void): ESTBeaconOperationEddystoneUIDNamespace;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneUIDNamespace, completion: (p1: ESTSettingEddystoneUIDNamespace, p2: NSError) => void): ESTBeaconOperationEddystoneUIDNamespace;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneUIDPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneUIDPower; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneUIDPower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneUIDPower, p2: NSError) => void): ESTBeaconOperationEddystoneUIDPower;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneUIDPower, completion: (p1: ESTSettingEddystoneUIDPower, p2: NSError) => void): ESTBeaconOperationEddystoneUIDPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneURLData extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneURLData; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneURLData; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneURLData, p2: NSError) => void): ESTBeaconOperationEddystoneURLData;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneURLData, completion: (p1: ESTSettingEddystoneURLData, p2: NSError) => void): ESTBeaconOperationEddystoneURLData;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneURLEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneURLEnable; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneURLEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneURLEnable, p2: NSError) => void): ESTBeaconOperationEddystoneURLEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneURLEnable, completion: (p1: ESTSettingEddystoneURLEnable, p2: NSError) => void): ESTBeaconOperationEddystoneURLEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneURLInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneURLInterval; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneURLInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneURLInterval, p2: NSError) => void): ESTBeaconOperationEddystoneURLInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneURLInterval, completion: (p1: ESTSettingEddystoneURLInterval, p2: NSError) => void): ESTBeaconOperationEddystoneURLInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEddystoneURLPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEddystoneURLPower; // inherited from NSObject

	static new(): ESTBeaconOperationEddystoneURLPower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEddystoneURLPower, p2: NSError) => void): ESTBeaconOperationEddystoneURLPower;

	static writeOperationWithSettingCompletion(setting: ESTSettingEddystoneURLPower, completion: (p1: ESTSettingEddystoneURLPower, p2: NSError) => void): ESTBeaconOperationEddystoneURLPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEstimoteLocationEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEstimoteLocationEnable; // inherited from NSObject

	static new(): ESTBeaconOperationEstimoteLocationEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEstimoteLocationEnable, p2: NSError) => void): ESTBeaconOperationEstimoteLocationEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingEstimoteLocationEnable, completion: (p1: ESTSettingEstimoteLocationEnable, p2: NSError) => void): ESTBeaconOperationEstimoteLocationEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEstimoteLocationInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEstimoteLocationInterval; // inherited from NSObject

	static new(): ESTBeaconOperationEstimoteLocationInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEstimoteLocationInterval, p2: NSError) => void): ESTBeaconOperationEstimoteLocationInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingEstimoteLocationInterval, completion: (p1: ESTSettingEstimoteLocationInterval, p2: NSError) => void): ESTBeaconOperationEstimoteLocationInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEstimoteLocationPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEstimoteLocationPower; // inherited from NSObject

	static new(): ESTBeaconOperationEstimoteLocationPower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEstimoteLocationPower, p2: NSError) => void): ESTBeaconOperationEstimoteLocationPower;

	static writeOperationWithSettingCompletion(setting: ESTSettingEstimoteLocationPower, completion: (p1: ESTSettingEstimoteLocationPower, p2: NSError) => void): ESTBeaconOperationEstimoteLocationPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEstimoteTLMEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEstimoteTLMEnable; // inherited from NSObject

	static new(): ESTBeaconOperationEstimoteTLMEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEstimoteTLMEnable, p2: NSError) => void): ESTBeaconOperationEstimoteTLMEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingEstimoteTLMEnable, completion: (p1: ESTSettingEstimoteTLMEnable, p2: NSError) => void): ESTBeaconOperationEstimoteTLMEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEstimoteTLMInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEstimoteTLMInterval; // inherited from NSObject

	static new(): ESTBeaconOperationEstimoteTLMInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEstimoteTLMInterval, p2: NSError) => void): ESTBeaconOperationEstimoteTLMInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingEstimoteTLMInterval, completion: (p1: ESTSettingEstimoteTLMInterval, p2: NSError) => void): ESTBeaconOperationEstimoteTLMInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationEstimoteTLMPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationEstimoteTLMPower; // inherited from NSObject

	static new(): ESTBeaconOperationEstimoteTLMPower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingEstimoteTLMPower, p2: NSError) => void): ESTBeaconOperationEstimoteTLMPower;

	static writeOperationWithSettingCompletion(setting: ESTSettingEstimoteTLMPower, completion: (p1: ESTSettingEstimoteTLMPower, p2: NSError) => void): ESTBeaconOperationEstimoteTLMPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGPIO0StateReflectingOnLEDEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGPIO0StateReflectingOnLEDEnable; // inherited from NSObject

	static new(): ESTBeaconOperationGPIO0StateReflectingOnLEDEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingGPIO0StateReflectingOnLEDEnable, p2: NSError) => void): ESTBeaconOperationGPIO0StateReflectingOnLEDEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingGPIO0StateReflectingOnLEDEnable, completion: (p1: ESTSettingGPIO0StateReflectingOnLEDEnable, p2: NSError) => void): ESTBeaconOperationGPIO0StateReflectingOnLEDEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGPIOConfigPort0 extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGPIOConfigPort0; // inherited from NSObject

	static new(): ESTBeaconOperationGPIOConfigPort0; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingGPIOConfigPort0, p2: NSError) => void): ESTBeaconOperationGPIOConfigPort0;

	static writeOperationWithSettingCompletion(setting: ESTSettingGPIOConfigPort0, completion: (p1: ESTSettingGPIOConfigPort0, p2: NSError) => void): ESTBeaconOperationGPIOConfigPort0;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGPIOConfigPort1 extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGPIOConfigPort1; // inherited from NSObject

	static new(): ESTBeaconOperationGPIOConfigPort1; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingGPIOConfigPort1, p2: NSError) => void): ESTBeaconOperationGPIOConfigPort1;

	static writeOperationWithSettingCompletion(setting: ESTSettingGPIOConfigPort1, completion: (p1: ESTSettingGPIOConfigPort1, p2: NSError) => void): ESTBeaconOperationGPIOConfigPort1;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGPIONotificationEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGPIONotificationEnable; // inherited from NSObject

	static new(): ESTBeaconOperationGPIONotificationEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingGPIONotificationEnable, p2: NSError) => void): ESTBeaconOperationGPIONotificationEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingGPIONotificationEnable, completion: (p1: ESTSettingGPIONotificationEnable, p2: NSError) => void): ESTBeaconOperationGPIONotificationEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGPIOPortsData extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGPIOPortsData; // inherited from NSObject

	static new(): ESTBeaconOperationGPIOPortsData; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingGPIOPortsData, p2: NSError) => void): ESTBeaconOperationGPIOPortsData;

	static writeOperationWithSettingCompletion(setting: ESTSettingGPIOPortsData, completion: (p1: ESTSettingGPIOPortsData, p2: NSError) => void): ESTBeaconOperationGPIOPortsData;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGenericAdvertiserData extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGenericAdvertiserData; // inherited from NSObject

	static new(): ESTBeaconOperationGenericAdvertiserData; // inherited from NSObject

	static readOperationForAdvertiserCompletion(advertiserID: ESTGenericAdvertiserID, completion: (p1: ESTSettingGenericAdvertiserData, p2: NSError) => void): ESTBeaconOperationGenericAdvertiserData;

	static writeOperationForAdvertiserSettingCompletion(advertiserID: ESTGenericAdvertiserID, setting: ESTSettingGenericAdvertiserData, completion: (p1: ESTSettingGenericAdvertiserData, p2: NSError) => void): ESTBeaconOperationGenericAdvertiserData;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGenericAdvertiserEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGenericAdvertiserEnable; // inherited from NSObject

	static new(): ESTBeaconOperationGenericAdvertiserEnable; // inherited from NSObject

	static readOperationForAdvertiserCompletion(advertiserID: ESTGenericAdvertiserID, completion: (p1: ESTSettingGenericAdvertiserEnable, p2: NSError) => void): ESTBeaconOperationGenericAdvertiserEnable;

	static writeOperationForAdvertiserSettingCompletion(advertiserID: ESTGenericAdvertiserID, setting: ESTSettingGenericAdvertiserEnable, completion: (p1: ESTSettingGenericAdvertiserEnable, p2: NSError) => void): ESTBeaconOperationGenericAdvertiserEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGenericAdvertiserInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGenericAdvertiserInterval; // inherited from NSObject

	static new(): ESTBeaconOperationGenericAdvertiserInterval; // inherited from NSObject

	static readOperationForAdvertiserCompletion(advertiserID: ESTGenericAdvertiserID, completion: (p1: ESTSettingGenericAdvertiserInterval, p2: NSError) => void): ESTBeaconOperationGenericAdvertiserInterval;

	static writeOperationForAdvertiserSettingCompletion(advertiserID: ESTGenericAdvertiserID, setting: ESTSettingGenericAdvertiserInterval, completion: (p1: ESTSettingGenericAdvertiserInterval, p2: NSError) => void): ESTBeaconOperationGenericAdvertiserInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationGenericAdvertiserPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationGenericAdvertiserPower; // inherited from NSObject

	static new(): ESTBeaconOperationGenericAdvertiserPower; // inherited from NSObject

	static readOperationForAdvertiserCompletion(advertiserID: ESTGenericAdvertiserID, completion: (p1: ESTSettingGenericAdvertiserPower, p2: NSError) => void): ESTBeaconOperationGenericAdvertiserPower;

	static writeOperationForAdvertiserSettingCompletion(advertiserID: ESTGenericAdvertiserID, setting: ESTSettingGenericAdvertiserPower, completion: (p1: ESTSettingGenericAdvertiserPower, p2: NSError) => void): ESTBeaconOperationGenericAdvertiserPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconEnable; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconEnable, p2: NSError) => void): ESTBeaconOperationIBeaconEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconEnable, completion: (p1: ESTSettingIBeaconEnable, p2: NSError) => void): ESTBeaconOperationIBeaconEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconInterval extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconInterval; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconInterval, p2: NSError) => void): ESTBeaconOperationIBeaconInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconInterval, completion: (p1: ESTSettingIBeaconInterval, p2: NSError) => void): ESTBeaconOperationIBeaconInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconMajor extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconMajor; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconMajor; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconMajor, p2: NSError) => void): ESTBeaconOperationIBeaconMajor;

	static writeOperationWithSettingCompletion(value: ESTSettingIBeaconMajor, completion: (p1: ESTSettingIBeaconMajor, p2: NSError) => void): ESTBeaconOperationIBeaconMajor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconMinor extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconMinor; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconMinor; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconMinor, p2: NSError) => void): ESTBeaconOperationIBeaconMinor;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconMinor, completion: (p1: ESTSettingIBeaconMinor, p2: NSError) => void): ESTBeaconOperationIBeaconMinor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconMotionUUID extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconMotionUUID; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconMotionUUID; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconMotionUUID, p2: NSError) => void): ESTBeaconOperationIBeaconMotionUUID;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconMotionUUIDEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconMotionUUIDEnable; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconMotionUUIDEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconMotionUUIDEnable, p2: NSError) => void): ESTBeaconOperationIBeaconMotionUUIDEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconMotionUUIDEnable, completion: (p1: ESTSettingIBeaconMotionUUIDEnable, p2: NSError) => void): ESTBeaconOperationIBeaconMotionUUIDEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconPower extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconPower; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconPower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconPower, p2: NSError) => void): ESTBeaconOperationIBeaconPower;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconPower, completion: (p1: ESTSettingIBeaconPower, p2: NSError) => void): ESTBeaconOperationIBeaconPower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconProximityUUID extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconProximityUUID; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconProximityUUID; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconProximityUUID, p2: NSError) => void): ESTBeaconOperationIBeaconProximityUUID;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconProximityUUID, completion: (p1: ESTSettingIBeaconProximityUUID, p2: NSError) => void): ESTBeaconOperationIBeaconProximityUUID;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconSecureUUIDEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconSecureUUIDEnable; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconSecureUUIDEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconSecureUUIDEnable, p2: NSError) => void): ESTBeaconOperationIBeaconSecureUUIDEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconSecureUUIDEnable, completion: (p1: ESTSettingIBeaconSecureUUIDEnable, p2: NSError) => void): ESTBeaconOperationIBeaconSecureUUIDEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationIBeaconSecureUUIDPeriodScaler extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationIBeaconSecureUUIDPeriodScaler; // inherited from NSObject

	static new(): ESTBeaconOperationIBeaconSecureUUIDPeriodScaler; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconSecureUUIDPeriodScaler, p2: NSError) => void): ESTBeaconOperationIBeaconSecureUUIDPeriodScaler;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconSecureUUIDPeriodScaler, completion: (p1: ESTSettingIBeaconSecureUUIDPeriodScaler, p2: NSError) => void): ESTBeaconOperationIBeaconSecureUUIDPeriodScaler;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerBatteryPercentage extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerBatteryPercentage; // inherited from NSObject

	static new(): ESTBeaconOperationPowerBatteryPercentage; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerBatteryPercentage, p2: NSError) => void): ESTBeaconOperationPowerBatteryPercentage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerBatteryVoltage extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerBatteryVoltage; // inherited from NSObject

	static new(): ESTBeaconOperationPowerBatteryVoltage; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerBatteryVoltage, p2: NSError) => void): ESTBeaconOperationPowerBatteryVoltage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerDarkToSleepEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerDarkToSleepEnable; // inherited from NSObject

	static new(): ESTBeaconOperationPowerDarkToSleepEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerDarkToSleepEnable, p2: NSError) => void): ESTBeaconOperationPowerDarkToSleepEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingPowerDarkToSleepEnable, completion: (p1: ESTSettingPowerDarkToSleepEnable, p2: NSError) => void): ESTBeaconOperationPowerDarkToSleepEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerFlipToSleepEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerFlipToSleepEnable; // inherited from NSObject

	static new(): ESTBeaconOperationPowerFlipToSleepEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerFlipToSleepEnable, p2: NSError) => void): ESTBeaconOperationPowerFlipToSleepEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingPowerFlipToSleepEnable, completion: (p1: ESTSettingPowerFlipToSleepEnable, p2: NSError) => void): ESTBeaconOperationPowerFlipToSleepEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerMotionOnlyBroadcastingDelay extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerMotionOnlyBroadcastingDelay; // inherited from NSObject

	static new(): ESTBeaconOperationPowerMotionOnlyBroadcastingDelay; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerMotionOnlyBroadcastingDelay, p2: NSError) => void): ESTBeaconOperationPowerMotionOnlyBroadcastingDelay;

	static writeOperationWithSettingCompletion(setting: ESTSettingPowerMotionOnlyBroadcastingDelay, completion: (p1: ESTSettingPowerMotionOnlyBroadcastingDelay, p2: NSError) => void): ESTBeaconOperationPowerMotionOnlyBroadcastingDelay;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerMotionOnlyBroadcastingEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerMotionOnlyBroadcastingEnable; // inherited from NSObject

	static new(): ESTBeaconOperationPowerMotionOnlyBroadcastingEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerMotionOnlyBroadcastingEnable, p2: NSError) => void): ESTBeaconOperationPowerMotionOnlyBroadcastingEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingPowerMotionOnlyBroadcastingEnable, completion: (p1: ESTSettingPowerMotionOnlyBroadcastingEnable, p2: NSError) => void): ESTBeaconOperationPowerMotionOnlyBroadcastingEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerScheduledAdvertisingEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerScheduledAdvertisingEnable; // inherited from NSObject

	static new(): ESTBeaconOperationPowerScheduledAdvertisingEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerScheduledAdvertisingEnable, p2: NSError) => void): ESTBeaconOperationPowerScheduledAdvertisingEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingPowerScheduledAdvertisingEnable, completion: (p1: ESTSettingPowerScheduledAdvertisingEnable, p2: NSError) => void): ESTBeaconOperationPowerScheduledAdvertisingEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerScheduledAdvertisingPeriod extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerScheduledAdvertisingPeriod; // inherited from NSObject

	static new(): ESTBeaconOperationPowerScheduledAdvertisingPeriod; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerScheduledAdvertisingPeriod, p2: NSError) => void): ESTBeaconOperationPowerScheduledAdvertisingPeriod;

	static writeOperationWithSettingCompletion(setting: ESTSettingPowerScheduledAdvertisingPeriod, completion: (p1: ESTSettingPowerScheduledAdvertisingPeriod, p2: NSError) => void): ESTBeaconOperationPowerScheduledAdvertisingPeriod;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationPowerSmartPowerModeEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationPowerSmartPowerModeEnable; // inherited from NSObject

	static new(): ESTBeaconOperationPowerSmartPowerModeEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerSmartPowerModeEnable, p2: NSError) => void): ESTBeaconOperationPowerSmartPowerModeEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingPowerSmartPowerModeEnable, completion: (p1: ESTSettingPowerSmartPowerModeEnable, p2: NSError) => void): ESTBeaconOperationPowerSmartPowerModeEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

interface ESTBeaconOperationProtocol extends NSObjectProtocol {

	associatedOperations?(): NSArray<ESTBeaconOperationProtocol>;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	registerID(): number;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}
declare var ESTBeaconOperationProtocol: {

	prototype: ESTBeaconOperationProtocol;
};

declare class ESTBeaconOperationSensorsAmbientLight extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationSensorsAmbientLight; // inherited from NSObject

	static new(): ESTBeaconOperationSensorsAmbientLight; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingSensorsAmbientLight, p2: NSError) => void): ESTBeaconOperationSensorsAmbientLight;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationSensorsMotionNotificationEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationSensorsMotionNotificationEnable; // inherited from NSObject

	static new(): ESTBeaconOperationSensorsMotionNotificationEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingSensorsMotionNotificationEnable, p2: NSError) => void): ESTBeaconOperationSensorsMotionNotificationEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingSensorsMotionNotificationEnable, completion: (p1: ESTSettingSensorsMotionNotificationEnable, p2: NSError) => void): ESTBeaconOperationSensorsMotionNotificationEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationSensorsPressure extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationSensorsPressure; // inherited from NSObject

	static new(): ESTBeaconOperationSensorsPressure; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingSensorsPressure, p2: NSError) => void): ESTBeaconOperationSensorsPressure;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationSensorsTemperature extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationSensorsTemperature; // inherited from NSObject

	static new(): ESTBeaconOperationSensorsTemperature; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingSensorsTemperature, p2: NSError) => void): ESTBeaconOperationSensorsTemperature;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTBeaconOperationShakeToConnectEnable extends ESTSettingOperation implements ESTBeaconOperationProtocol {

	static alloc(): ESTBeaconOperationShakeToConnectEnable; // inherited from NSObject

	static new(): ESTBeaconOperationShakeToConnectEnable; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingShakeToConnectEnable, p2: NSError) => void): ESTBeaconOperationShakeToConnectEnable;

	static writeOperationWithSettingCompletion(setting: ESTSettingShakeToConnectEnable, completion: (p1: ESTSettingShakeToConnectEnable, p2: NSError) => void): ESTBeaconOperationShakeToConnectEnable;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare const enum ESTBeaconPower {

	Level1 = -30,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4
}

declare const enum ESTBeaconPowerSavingMode {

	Unknown = 0,

	Unsupported = 1,

	On = 2,

	Off = 3
}

declare const enum ESTBeaconPublicDetailsFields {

	AllFields = 1,

	FieldMac = 2,

	FieldColor = 4,

	FieldPublicIdentifier = 8,

	AllSettings = 16,

	FieldPower = 32,

	FieldSecurity = 64,

	FieldBroadcastingScheme = 128,

	FieldUUIDMajorMinor = 256,

	FieldEddystoneNamespaceID = 512,

	FieldEddystoneInstanceID = 1024
}

declare class ESTBeaconRecentConfig extends ESTBeaconBaseVO {

	static alloc(): ESTBeaconRecentConfig; // inherited from NSObject

	static new(): ESTBeaconRecentConfig; // inherited from NSObject

	readonly advInterval: number;

	readonly basicPowerMode: number;

	readonly broadcastingScheme: number;

	readonly conditionalBroadcasting: number;

	readonly firmware: string;

	readonly formattedAddress: string;

	readonly geoLocationDeleted: boolean;

	readonly major: number;

	readonly minor: number;

	readonly motionDetection: number;

	readonly power: number;

	readonly proximityUUID: string;

	readonly security: number;

	readonly smartPowerMode: number;

	readonly 

	constructor(o: { cloudData: NSDictionary<any, any>; });

	initWithCloudData(data: NSDictionary<any, any>): this;
}

declare class ESTBeaconRecentUpdateInfo extends ESTBeaconBaseVO {

	static alloc(): ESTBeaconRecentUpdateInfo; // inherited from NSObject

	static new(): ESTBeaconRecentUpdateInfo; // inherited from NSObject

	readonly config: ESTBeaconRecentConfig;

	readonly createdAt: Date;

	readonly macAddress: string;

	readonly syncedAt: Date;

	constructor(o: { cloudData: NSDictionary<any, any>; andMacAddress: string; });

	initWithCloudDataAndMacAddress(data: NSDictionary<any, any>, mac: string): this;
}

declare class ESTBeaconSettingsManager extends NSObject {

	static alloc(): ESTBeaconSettingsManager; // inherited from NSObject

	static new(): ESTBeaconSettingsManager; // inherited from NSObject

	readonly GPIO: ESTSettingsGPIO;

	readonly connectivity: ESTSettingsConnectivity;

	readonly deviceInfo: ESTSettingsDeviceInfo;

	readonly eddystoneConfigurationService: ESTSettingsEddystoneConfigurationService;

	readonly eddystoneEID: ESTSettingsEddystoneEID;

	readonly eddystoneTLM: ESTSettingsEddystoneTLM;

	readonly eddystoneUID: ESTSettingsEddystoneUID;

	readonly eddystoneURL: ESTSettingsEddystoneURL;

	readonly estimoteLocation: ESTSettingsEstimoteLocation;

	readonly estimoteTLM: ESTSettingsEstimoteTLM;

	readonly iBeacon: ESTSettingsIBeacon;

	readonly power: ESTSettingsPower;

	readonly sensors: ESTSettingsSensors;

	readonly settingsCollection: ESTDeviceSettingsCollection;

	constructor(o: { device: ESTDeviceLocationBeacon; peripheral: ESTPeripheralTypeUtility; });

	initWithDevicePeripheral(device: ESTDeviceLocationBeacon, peripheral: ESTPeripheralTypeUtility): this;

	initializedOfflineSettingsWithCompletion(completion: (p1: NSError) => void): void;

	performOperation(operation: ESTBeaconOperationProtocol): void;

	performOperationsFromArray(operationsArray: NSArray<ESTBeaconOperationProtocol>): void;

	performOperationsFromArrayCompletion(operationsArray: NSArray<ESTBeaconOperationProtocol>, completion: (p1: NSError) => void): void;

	registerNotification(notification: ESTDeviceNotificationProtocol): void;

	synchronizeSettingsWithCompletion(completion: (p1: NSError) => void): void;

	unregisterAllNotifications(): void;

	updatePeripheral(peripheral: ESTPeripheralTypeUtility): void;

	updateSetting(setting: ESTSettingBase): void;
}

declare const enum ESTBeaconTemperatureState {

	Unknown = 0,

	Unsupported = 1,

	Supported = 2
}

declare class ESTBeaconUpdateConfig extends NSObject implements NSCoding, NSCopying {

	static alloc(): ESTBeaconUpdateConfig; // inherited from NSObject

	static new(): ESTBeaconUpdateConfig; // inherited from NSObject

	advInterval: number;

	basicPowerMode: number;

	conditionalBroadcasting: number;

	estimoteSecureUUIDState: number;

	major: number;

	minor: number;

	power: number;

	proximityUUID: string;

	smartPowerMode: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class ESTBeaconUpdateInfo extends NSObject implements NSCoding {

	static alloc(): ESTBeaconUpdateInfo; // inherited from NSObject

	static new(): ESTBeaconUpdateInfo; // inherited from NSObject

	beaconConnection: ESTBeaconConnection;

	config: ESTBeaconUpdateConfig;

	createdAt: Date;

	delegate: ESBeaconUpdateInfoDelegate;

	error: NSError;

	macAddress: string;

	status: ESBeaconUpdateInfoStatus;

	syncedAt: Date;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { macAddress: string; config: ESTBeaconUpdateConfig; });

	constructor(o: { macAddress: string; config: ESTBeaconUpdateConfig; delegate: ESBeaconUpdateInfoDelegate; });

	description(): string;

	encodeWithCoder(aCoder: NSCoder): void;

	findPeripheralWithTimeout(timeout: number): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithMacAddressConfig(macAddress: string, config: ESTBeaconUpdateConfig): this;

	initWithMacAddressConfigDelegate(macAddress: string, config: ESTBeaconUpdateConfig, delegate: ESBeaconUpdateInfoDelegate): this;

	updateWithConfig(config: ESTBeaconUpdateConfig): void;
}

declare class ESTBeaconVO extends NSObject implements NSCoding {

	static alloc(): ESTBeaconVO; // inherited from NSObject

	static new(): ESTBeaconVO; // inherited from NSObject

	advInterval: number;

	basicPowerMode: number;

	batteryLevel: number;

	batteryLifeExpectancy: number;

	broadcastingScheme: ESTBroadcastingScheme;

	city: string;

	color: ESTColor;

	conditionalBroadcasting: ESTBeaconConditionalBroadcasting;

	country: string;

	eddystoneInstanceID: string;

	eddystoneNamespaceID: string;

	eddystoneURL: string;

	firmware: string;

	formattedAddress: string;

	hardware: string;

	indoorLocationIdentifier: string;

	indoorLocationName: string;

	isSecured: boolean;

	latitude: number;

	location: NSDictionary<any, any>;

	longitude: number;

	macAddress: string;

	major: number;

	minor: number;

	motionDetection: number;

	motionUUIDState: ESTBeaconMotionUUID;

	name: string;

	power: ESTBeaconPower;

	proximityUUID: string;

	publicIdentifier: string;

	security: number;

	smartPowerMode: number;

	stateCode: string;

	stateName: string;

	streetName: string;

	streetNumber: string;

	tags: NSSet<string>;

	zipCode: string;

	constructor(o: { cloudData: NSDictionary<any, any>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCloudData(data: NSDictionary<any, any>): this;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class ESTBluetoothBeacon extends ESTDevice {

	static alloc(): ESTBluetoothBeacon; // inherited from NSObject

	static new(): ESTBluetoothBeacon; // inherited from NSObject

	firmwareState: number;

	major: number;

	measuredPower: number;

	minor: number;

	peripheral: CBPeripheral;
}

declare const enum ESTBroadcastingScheme {

	Unknown = 0,

	Estimote = 1,

	IBeacon = 2,

	EddystoneURL = 3,

	EddystoneUID = 4
}

declare class ESTBulkUpdater extends NSObject {

	static alloc(): ESTBulkUpdater; // inherited from NSObject

	static new(): ESTBulkUpdater; // inherited from NSObject

	static sharedInstance(): ESTBulkUpdater;

	static verifyPushNotificationPayload(payload: NSDictionary<any, any>): boolean;

	beaconInfos: NSArray<ESTBeaconUpdateInfo>;

	readonly mode: ESTBulkUpdaterMode;

	readonly status: ESBulkUpdaterStatus;

	cancel(): void;

	getBeaconUpdateInfosForBeaconWithMacAddress(macAddress: string): NSArray<any>;

	getTimeLeftToTimeout(): number;

	isBeaconWaitingForUpdate(macAddress: string): boolean;

	isUpdateInProgressForBeaconWithMacAddress(macAddress: string): boolean;

	startWithBeaconInfosTimeout(beaconInfos: NSArray<any>, timeout: number): void;

	startWithCloudSettingsAndTimeout(timeout: number): void;
}

declare var ESTBulkUpdaterBeginNotification: string;

declare var ESTBulkUpdaterCompleteNotification: string;

declare const enum ESTBulkUpdaterDeviceUpdateStatus {

	Unknown = 0,

	Scanning = 1,

	PendingUpdate = 2,

	Updating = 3,

	Succeeded = 4,

	Failed = 5,

	OutOfRange = 6
}

declare var ESTBulkUpdaterFailNotification: string;

declare const enum ESTBulkUpdaterMode {

	Foreground = 0,

	Background = 1
}

declare var ESTBulkUpdaterProgressNotification: string;

declare const enum ESTBulkUpdaterStatus {

	Idle = 0,

	Running = 1
}

declare var ESTBulkUpdaterTimeoutNotification: string;

declare class ESTCloudManager extends NSObject {

	static alloc(): ESTCloudManager; // inherited from NSObject

	static appID(): string;

	static appToken(): string;

	static enableAnalytics(enable: boolean): void;

	static enableGPSPositioningForAnalytics(enable: boolean): void;

	static enableMonitoringAnalytics(enable: boolean): void;

	static enableRangingAnalytics(enable: boolean): void;

	static isAnalyticsEnabled(): boolean;

	static isAuthorized(): boolean;

	static isMonitoringAnalyticsEnabled(): boolean;

	static isRangingAnalyticsEnabled(): boolean;

	static new(): ESTCloudManager; // inherited from NSObject

	static setupAppIDAndAppToken(appID: string, appToken: string): void;

	assignCurrentGPSLocationToBeaconCompletion(beacon: CLBeacon, completion: (p1: any, p2: NSError) => void): void;

	assignCurrentGPSLocationToBeaconWithMacCompletion(macAddress: string, completion: (p1: any, p2: NSError) => void): void;

	assignCurrentGPSLocationToBeaconWithProximityUUIDMajorMinorCompletion(uuid: NSUUID, major: number, minor: number, completion: (p1: any, p2: NSError) => void): void;

	assignGPSLocationToBeaconCompletion(location: CLLocation, beacon: CLBeacon, completion: (p1: any, p2: NSError) => void): void;

	assignGPSLocationToBeaconWithMacCompletion(location: CLLocation, macAddress: string, completion: (p1: any, p2: NSError) => void): void;

	fetchBeaconDetailsCompletion(beaconUID: string, completion: (p1: any, p2: NSError) => void): void;

	fetchColorForBeaconCompletion(beacon: CLBeacon, completion: (p1: any, p2: NSError) => void): void;

	fetchColorForBeaconWithMacAddressCompletion(macAddress: string, completion: (p1: any, p2: NSError) => void): void;

	fetchColorForBeaconWithProximityUUIDMajorMinorCompletion(proximityUUID: NSUUID, major: number, minor: number, completion: (p1: any, p2: NSError) => void): void;

	fetchEstimoteBeaconsWithCompletion(completion: (p1: NSArray<any>, p2: NSError) => void): void;

	fetchEstimoteNearablesWithCompletion(completion: (p1: NSArray<any>, p2: NSError) => void): void;

	fetchMacAddressForBeaconCompletion(beacon: CLBeacon, completion: (p1: string, p2: NSError) => void): void;

	fetchNearableDetailsCompletion(nearableUID: string, completion: (p1: any, p2: NSError) => void): void;

	fetchPendingBeaconsSettingsWithCompletion(completion: (p1: NSArray<any>, p2: NSError) => void): void;

	registerDeviceForRemoteManagementCompletion(deviceToken: NSData, completion: (p1: NSError) => void): void;
}

declare class ESTCloudOperationDeviceInfoColor extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationDeviceInfoColor; // inherited from NSObject

	static new(): ESTCloudOperationDeviceInfoColor; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoColor, p2: NSError) => void): ESTCloudOperationDeviceInfoColor;

	static writeOperationWithSettingCompletion(setting: ESTSettingDeviceInfoColor, completion: (p1: ESTSettingDeviceInfoColor, p2: NSError) => void): ESTCloudOperationDeviceInfoColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTCloudOperationDeviceInfoDevelopmentMode extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationDeviceInfoDevelopmentMode; // inherited from NSObject

	static new(): ESTCloudOperationDeviceInfoDevelopmentMode; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoDevelopmentMode, p2: NSError) => void): ESTCloudOperationDeviceInfoDevelopmentMode;

	static writeOperationWithSettingCompletion(setting: ESTSettingDeviceInfoDevelopmentMode, completion: (p1: ESTSettingDeviceInfoDevelopmentMode, p2: NSError) => void): ESTCloudOperationDeviceInfoDevelopmentMode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTCloudOperationDeviceInfoFirmwareVersion extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationDeviceInfoFirmwareVersion; // inherited from NSObject

	static new(): ESTCloudOperationDeviceInfoFirmwareVersion; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoFirmwareVersion, p2: NSError) => void): ESTCloudOperationDeviceInfoFirmwareVersion;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTCloudOperationDeviceInfoGeoLocation extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationDeviceInfoGeoLocation; // inherited from NSObject

	static new(): ESTCloudOperationDeviceInfoGeoLocation; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoGeoLocation, p2: NSError) => void): ESTCloudOperationDeviceInfoGeoLocation;

	static writeOperationWithSettingCompletion(setting: ESTSettingDeviceInfoGeoLocation, completion: (p1: ESTSettingDeviceInfoGeoLocation, p2: NSError) => void): ESTCloudOperationDeviceInfoGeoLocation;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTCloudOperationDeviceInfoIndoorLocationIdentifier extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationDeviceInfoIndoorLocationIdentifier; // inherited from NSObject

	static new(): ESTCloudOperationDeviceInfoIndoorLocationIdentifier; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoIndoorLocationIdentifier, p2: NSError) => void): ESTCloudOperationDeviceInfoIndoorLocationIdentifier;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTCloudOperationDeviceInfoName extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationDeviceInfoName; // inherited from NSObject

	static new(): ESTCloudOperationDeviceInfoName; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoName, p2: NSError) => void): ESTCloudOperationDeviceInfoName;

	static writeOperationWithSettingCompletion(setting: ESTSettingDeviceInfoName, completion: (p1: ESTSettingDeviceInfoName, p2: NSError) => void): ESTCloudOperationDeviceInfoName;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTCloudOperationDeviceInfoTags extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationDeviceInfoTags; // inherited from NSObject

	static new(): ESTCloudOperationDeviceInfoTags; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoTags, p2: NSError) => void): ESTCloudOperationDeviceInfoTags;

	static writeOperationWithSettingCompletion(setting: ESTSettingDeviceInfoTags, completion: (p1: ESTSettingDeviceInfoTags, p2: NSError) => void): ESTCloudOperationDeviceInfoTags;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTCloudOperationIBeaconNonStrictMode extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationIBeaconNonStrictMode; // inherited from NSObject

	static new(): ESTCloudOperationIBeaconNonStrictMode; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconNonStrictMode, p2: NSError) => void): ESTCloudOperationIBeaconNonStrictMode;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconNonStrictMode, completion: (p1: ESTSettingIBeaconNonStrictMode, p2: NSError) => void): ESTCloudOperationIBeaconNonStrictMode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

declare class ESTCloudOperationPowerBatteryLifetime extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTCloudOperationProtocol {

	static alloc(): ESTCloudOperationPowerBatteryLifetime; // inherited from NSObject

	static new(): ESTCloudOperationPowerBatteryLifetime; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerBatteryLifetime, p2: NSError) => void): ESTCloudOperationPowerBatteryLifetime;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSettingWithData(data: NSData): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueCloud(): any;

	valueData(): NSData;
}

interface ESTCloudOperationProtocol extends NSObjectProtocol {

	settingClass(): typeof NSObject;

	updateSettingWithSetting(setting: ESTSettingBase): void;
}
declare var ESTCloudOperationProtocol: {

	prototype: ESTCloudOperationProtocol;
};

interface ESTCloudSettingProtocol extends ESTSettingProtocol {
}
declare var ESTCloudSettingProtocol: {

	prototype: ESTCloudSettingProtocol;
};

declare const enum ESTColor {

	Unknown = 0,

	MintCocktail = 1,

	IcyMarshmallow = 2,

	BlueberryPie = 3,

	SweetBeetroot = 4,

	CandyFloss = 5,

	LemonTart = 6,

	VanillaJello = 7,

	LiquoriceSwirl = 8,

	White = 9,

	Black = 10,

	CoconutPuff = 11,

	Transparent = 12
}

declare class ESTConfig extends NSObject {

	static alloc(): ESTConfig; // inherited from NSObject

	static appID(): string;

	static appToken(): string;

	static enableGPSPositioningForAnalytics(enable: boolean): void;

	static enableMonitoringAnalytics(enable: boolean): void;

	static enableRangingAnalytics(enable: boolean): void;

	static googleAPIKey(): string;

	static isAuthorized(): boolean;

	static isMonitoringAnalyticsEnabled(): boolean;

	static isRangingAnalyticsEnabled(): boolean;

	static new(): ESTConfig; // inherited from NSObject

	static setupAppIDAndAppToken(appID: string, appToken: string): void;

	static setupGoogleAPIKey(googleAPIKey: string): void;
}

declare const enum ESTConnectablePowerLevel {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare const ESTConnectionIdentifierMissingError: number;

declare const ESTConnectionInternetConnectionError: number;

declare const ESTConnectionNotAuthorizedError: number;

declare const ESTConnectionNotConnectedToReadWrite: number;

declare const enum ESTConnectionStatus {

	Disconnected = 0,

	Connecting = 1,

	Connected = 2,

	Updating = 3
}

declare class ESTDateRule extends ESTRule {

	static alloc(): ESTDateRule; // inherited from NSObject

	static hourBetween(firstHour: number): ESTDateRule;

	static hourEarlierThan(hour: number): ESTDateRule;

	static hourLaterThan(hour: number): ESTDateRule;

	static new(): ESTDateRule; // inherited from NSObject

	afterHour: number;

	beforeHour: number;
}

declare class ESTDefinitions extends NSObject {

	static alloc(): ESTDefinitions; // inherited from NSObject

	static nameForEstimoteColor(color: ESTColor): string;

	static new(): ESTDefinitions; // inherited from NSObject
}

declare class ESTDevice extends NSObject {

	static alloc(): ESTDevice; // inherited from NSObject

	static new(): ESTDevice; // inherited from NSObject

	readonly discoveryDate: Date;

	readonly identifier: string;

	readonly macAddress: string;

	readonly peripheralIdentifier: NSUUID;

	readonly rssi: number;

	constructor(o: { deviceIdentifier: string; peripheralIdentifier: NSUUID; rssi: number; discoveryDate: Date; });

	initWithDeviceIdentifierPeripheralIdentifierRssiDiscoveryDate(identifier: string, peripheralIdentifier: NSUUID, rssi: number, discoveryDate: Date): this;
}

declare class ESTDeviceConnectable extends ESTDevice {

	static alloc(): ESTDeviceConnectable; // inherited from NSObject

	static new(): ESTDeviceConnectable; // inherited from NSObject

	readonly connectionStatus: ESTConnectionStatus;

	delegate: ESTDeviceConnectableDelegate;

	checkFirmwareUpdateWithCompletion(completion: (p1: any, p2: NSError) => void): void;

	connect(): void;

	connectAndUpdate(): void;

	disconnect(): void;

	updateFirmwareWithProgressCompletion(progress: (p1: number) => void, completion: (p1: NSError) => void): void;
}

interface ESTDeviceConnectableDelegate extends NSObjectProtocol {

	estDeviceConnectionDidSucceed?(device: ESTDeviceConnectable): void;

	estDeviceDidDisconnectWithError?(device: ESTDeviceConnectable, error: NSError): void;

	estDeviceDidFailConnectionWithError?(device: ESTDeviceConnectable, error: NSError): void;
}
declare var ESTDeviceConnectableDelegate: {

	prototype: ESTDeviceConnectableDelegate;
};

declare class ESTDeviceDetails extends ESTBaseVO {

	static alloc(): ESTDeviceDetails; // inherited from NSObject

	static new(): ESTDeviceDetails; // inherited from NSObject

	readonly color: ESTColor;

	readonly formFactor: string;

	readonly hardwareFootprint: string;

	readonly hardwareRevision: string;

	readonly hardwareType: string;

	readonly identifier: string;

	readonly pendingSettings: ESTDeviceSettings;

	readonly settings: ESTDeviceSettings;

	readonly shadow: ESTDeviceShadow;

	readonly statusReport: ESTDeviceStatusReport;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;
}

interface ESTDeviceFilter extends NSObjectProtocol {

	devicesPredicate: NSPredicate;

	getScanInfoClasses(): NSArray<typeof NSObject>;
}
declare var ESTDeviceFilter: {

	prototype: ESTDeviceFilter;
};

declare class ESTDeviceFilterBeaconV1 extends NSObject implements ESTDeviceFilter {

	static alloc(): ESTDeviceFilterBeaconV1; // inherited from NSObject

	static new(): ESTDeviceFilterBeaconV1; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly devicesPredicate: NSPredicate; // inherited from ESTDeviceFilter

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { identifier: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getScanInfoClasses(): NSArray<typeof NSObject>;

	initWithIdentifier(identifier: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTDeviceFilterLocationBeacon extends NSObject implements ESTDeviceFilter {

	static alloc(): ESTDeviceFilterLocationBeacon; // inherited from NSObject

	static new(): ESTDeviceFilterLocationBeacon; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly devicesPredicate: NSPredicate; // inherited from ESTDeviceFilter

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { identifier: string; });

	constructor(o: { identifiers: NSArray<string>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getScanInfoClasses(): NSArray<typeof NSObject>;

	initWithIdentifier(identifier: string): this;

	initWithIdentifiers(identifiers: NSArray<string>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTDeviceFilterNearable extends NSObject implements ESTDeviceFilter {

	static alloc(): ESTDeviceFilterNearable; // inherited from NSObject

	static new(): ESTDeviceFilterNearable; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly devicesPredicate: NSPredicate; // inherited from ESTDeviceFilter

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { identifier: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getScanInfoClasses(): NSArray<typeof NSObject>;

	initWithIdentifier(identifier: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTDeviceGeoLocation extends ESTBaseVO {

	static alloc(): ESTDeviceGeoLocation; // inherited from NSObject

	static new(): ESTDeviceGeoLocation; // inherited from NSObject

	readonly accuracy: number;

	readonly city: string;

	readonly country: string;

	readonly formattedAddress: string;

	readonly latitude: number;

	readonly longitude: number;

	readonly state: string;

	readonly stateCode: string;

	readonly streetName: string;

	readonly streetNumber: string;

	readonly timezone: string;

	readonly zipCode: string;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	constructor(o: { latitude: number; longitude: number; });

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;

	initWithLatitudeLongitude(latitude: number, longitude: number): this;
}

declare class ESTDeviceIndoorLocation extends ESTBaseVO {

	static alloc(): ESTDeviceIndoorLocation; // inherited from NSObject

	static new(): ESTDeviceIndoorLocation; // inherited from NSObject

	readonly identifier: string;

	readonly name: string;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ESTDeviceLocationBeacon extends ESTDeviceConnectable {

	static alloc(): ESTDeviceLocationBeacon; // inherited from NSObject

	static new(): ESTDeviceLocationBeacon; // inherited from NSObject

	readonly isShaken: number;

	scanReports: ESTMeshScanReportsManager;

	readonly settings: ESTBeaconSettingsManager;

	storage: ESTStorageManager;

	constructor(o: { deviceIdentifier: string; peripheralIdentifier: NSUUID; rssi: number; discoveryDate: Date; isShaken: number; });

	connectForStorageRead(): void;

	initWithDeviceIdentifierPeripheralIdentifierRssiDiscoveryDateIsShaken(identifier: string, peripheralIdentifier: NSUUID, rssi: number, discoveryDate: Date, isShaken: number): this;
}

declare const enum ESTDeviceLocationBeaconError {

	CloudVerificationFailed = 0,

	BluetoothConnectionFailed = 1,

	ServicesDiscoveryFailed = 2,

	AuthorizationFailed = 3,

	SettingsSynchronizationFailed = 4,

	FirmwareUpdateDeviceNotConnected = 5,

	FirmwareUpdateCloudResponseFailed = 6,

	FirmwareUpdateNoUpdate = 7,

	FirmwareUpdateInProgress = 8
}

declare class ESTDeviceManager extends NSObject {

	static alloc(): ESTDeviceManager; // inherited from NSObject

	static new(): ESTDeviceManager; // inherited from NSObject

	delegate: ESTDeviceManagerDelegate;

	readonly isScanning: boolean;

	constructor(o: { CBCentralManagerQueue: NSObject; });

	initWithCBCentralManagerQueue(queue: NSObject): this;

	registerForTelemetryNotification(info: ESTTelemetryNotificationProtocol): void;

	registerForTelemetryNotifications(infos: NSArray<any>): void;

	startDeviceDiscoveryWithFilter(filter: ESTDeviceFilter): void;

	stopDeviceDiscovery(): void;

	unregisterForTelemetryNotification(info: ESTTelemetryNotificationProtocol): void;
}

interface ESTDeviceManagerDelegate extends NSObjectProtocol {

	deviceManagerDidDiscoverDevices?(manager: ESTDeviceManager, devices: NSArray<ESTDevice>): void;

	deviceManagerDidFailDiscovery?(manager: ESTDeviceManager): void;

	deviceManagerDidFailDiscoveryWithError?(manager: ESTDeviceManager, error: NSError): void;
}
declare var ESTDeviceManagerDelegate: {

	prototype: ESTDeviceManagerDelegate;
};

declare class ESTDeviceNearable extends ESTDeviceConnectable {

	static alloc(): ESTDeviceNearable; // inherited from NSObject

	static new(): ESTDeviceNearable; // inherited from NSObject

	readonly settings: ESTNearableSettingsManager;
}

declare const enum ESTDeviceNearableError {

	DeviceNotConnected = 0,

	ConnectionOwnershipVerificationFail = 1,

	DisconnectDuringConnection = 2,

	ConnectionVersionReadFailed = 3,

	SettingNotSupported = 4,

	SettingWriteValueMissing = 5,

	ConnectionCloudConfirmationFailed = 6,

	UpdateNotAvailable = 7,

	FailedToDownloadFirmware = 8,

	FailedToConfirmUpdate = 9
}

interface ESTDeviceNearableSettingProtocol extends ESTDeviceSettingProtocol {

	size(): number;
}
declare var ESTDeviceNearableSettingProtocol: {

	prototype: ESTDeviceNearableSettingProtocol;
};

interface ESTDeviceNotificationProtocol extends NSObjectProtocol {

	fireHandlerWithData(data: NSData): void;

	registerID(): number;

	supportedFirmwareVersion(): string;
}
declare var ESTDeviceNotificationProtocol: {

	prototype: ESTDeviceNotificationProtocol;
};

declare class ESTDeviceSchedule extends ESTBaseVO {

	static alloc(): ESTDeviceSchedule; // inherited from NSObject

	static new(): ESTDeviceSchedule; // inherited from NSObject

	readonly enabled: number;

	readonly startTime: number;

	readonly stopTime: number;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	cloudDictionary(): NSDictionary<any, any>;

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;
}

interface ESTDeviceSettingProtocol extends ESTSettingProtocol {

	getValueData(): NSData;

	isAvailableForFirmwareVersion(firmwareVersion: string): boolean;

	registerID(): number;

	updateValueInSettings?(settings: any): void;

	updateValueWithData(data: NSData): void;

	validateValue?(): NSError;
}
declare var ESTDeviceSettingProtocol: {

	prototype: ESTDeviceSettingProtocol;
};

declare class ESTDeviceSettings extends ESTBaseVO implements NSCopying {

	static alloc(): ESTDeviceSettings; // inherited from NSObject

	static new(): ESTDeviceSettings; // inherited from NSObject

	readonly connectivity: NSArray<ESTDeviceSettingsAdvertiserConnectivity>;

	readonly eddystoneEID: NSArray<ESTDeviceSettingsAdvertiserEddystoneEID>;

	readonly eddystoneTLM: NSArray<ESTDeviceSettingsAdvertiserEddystoneTLM>;

	readonly eddystoneUID: NSArray<ESTDeviceSettingsAdvertiserEddystoneUID>;

	readonly eddystoneURL: NSArray<ESTDeviceSettingsAdvertiserEddystoneURL>;

	readonly estimoteLocation: NSArray<ESTDeviceSettingsAdvertiserEstimoteLocation>;

	readonly estimoteTLM: NSArray<ESTDeviceSettingsAdvertiserEstimoteTLM>;

	readonly general: ESTDeviceSettingsGeneral;

	readonly generic: NSArray<ESTDeviceSettingsAdvertiserGeneric>;

	readonly iBeacon: NSArray<ESTDeviceSettingsAdvertiserIBeacon>;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	cloudDictionary(): NSDictionary<any, any>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;

	settingsUpdatedWithDeviceSettings(deviceSettings: ESTDeviceSettings): ESTDeviceSettings;
}

declare class ESTDeviceSettingsAdvertiser extends ESTBaseVO implements NSCopying {

	static alloc(): ESTDeviceSettingsAdvertiser; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiser; // inherited from NSObject

	readonly enabled: number;

	readonly index: number;

	readonly intervalInSeconds: number;

	readonly name: string;

	readonly powerInDBm: number;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	cloudDictionary(): NSDictionary<any, any>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;

	updateWithAdvertiserSettings(advertiserSettings: ESTDeviceSettingsAdvertiser): void;
}

declare class ESTDeviceSettingsAdvertiserConnectivity extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserConnectivity; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserConnectivity; // inherited from NSObject

	readonly shakeToConnectEnabled: number;
}

declare class ESTDeviceSettingsAdvertiserEddystoneEID extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserEddystoneEID; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserEddystoneEID; // inherited from NSObject

	readonly identityKey: string;

	readonly registeredInstanceID: string;

	readonly registeredNamespaceID: string;

	readonly rotationScaler: number;
}

declare class ESTDeviceSettingsAdvertiserEddystoneTLM extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserEddystoneTLM; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserEddystoneTLM; // inherited from NSObject
}

declare class ESTDeviceSettingsAdvertiserEddystoneUID extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserEddystoneUID; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserEddystoneUID; // inherited from NSObject

	readonly instanceID: string;

	readonly namespaceID: string;
}

declare class ESTDeviceSettingsAdvertiserEddystoneURL extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserEddystoneURL; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserEddystoneURL; // inherited from NSObject

	readonly url: string;
}

declare class ESTDeviceSettingsAdvertiserEstimoteLocation extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserEstimoteLocation; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserEstimoteLocation; // inherited from NSObject
}

declare class ESTDeviceSettingsAdvertiserEstimoteTLM extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserEstimoteTLM; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserEstimoteTLM; // inherited from NSObject
}

declare class ESTDeviceSettingsAdvertiserGeneric extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserGeneric; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserGeneric; // inherited from NSObject

	readonly payload: string;
}

declare class ESTDeviceSettingsAdvertiserIBeacon extends ESTDeviceSettingsAdvertiser {

	static alloc(): ESTDeviceSettingsAdvertiserIBeacon; // inherited from NSObject

	static new(): ESTDeviceSettingsAdvertiserIBeacon; // inherited from NSObject

	readonly major: number;

	readonly minor: number;

	readonly motionUUIDEnabled: number;

	readonly nonStrictModeEnabled: number;

	readonly proximityUUID: NSUUID;

	readonly securityEnabled: number;

	readonly securityIntervalScaler: number;
}

declare const enum ESTDeviceSettingsAdvertiserSettingsPower {

	Power1 = -30,

	Power2 = -20,

	Power3 = -16,

	Power4 = -12,

	Power5 = -8,

	Power6 = -4,

	Power7 = 0,

	Power8 = 4
}

declare class ESTDeviceSettingsCollection extends NSObject implements NSCopying {

	static alloc(): ESTDeviceSettingsCollection; // inherited from NSObject

	static new(): ESTDeviceSettingsCollection; // inherited from NSObject

	constructor(o: { settingsArray: NSArray<ESTSettingBase>; });

	addOrReplaceSetting(setting: ESTSettingBase): void;

	addOrReplaceSettings(settings: NSArray<ESTSettingBase>): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getAllSettingsForClass(targetedClass: typeof NSObject): NSArray<ESTSettingBase>;

	getSettingForClass(targetedClass: typeof NSObject): any;

	getSettings(): NSArray<any>;

	initWithSettingsArray(settingsArray: NSArray<ESTSettingBase>): this;
}

declare class ESTDeviceSettingsGeneral extends ESTBaseVO implements NSCopying {

	static alloc(): ESTDeviceSettingsGeneral; // inherited from NSObject

	static new(): ESTDeviceSettingsGeneral; // inherited from NSObject

	readonly automaticFirmwareUpdateEnabled: number;

	readonly darkToSleepEnabled: number;

	readonly darkToSleepThresholdInLux: number;

	readonly eddystoneConfigurationServiceEnabled: number;

	readonly flipToSleepEnabled: number;

	readonly magnetometerCalibrationData: NSArray<number>;

	readonly motionDetectionEnabled: number;

	readonly motionOnlyDelay: number;

	readonly motionOnlyEnabled: number;

	readonly schedule: ESTDeviceSchedule;

	readonly smartPowerModeEnabled: number;

	readonly temperatureOffsetInCelsius: number;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	cloudDictionary(): NSDictionary<any, any>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;

	updateWithGeneralSettings(generalSettings: ESTDeviceSettingsGeneral): void;
}

declare const enum ESTDeviceSettingsManagerError {

	SynchronizationInProgress = 0,

	SettingNotSupported = 1,

	SettingNotProvidedForWrite = 2,

	SettingValidationFailed = 3,

	SettingCloudReadFailed = 4,

	SettingCloudSaveFailed = 5
}

declare class ESTDeviceShadow extends ESTBaseVO {

	static alloc(): ESTDeviceShadow; // inherited from NSObject

	static new(): ESTDeviceShadow; // inherited from NSObject

	readonly developmentMode: number;

	readonly geoLocation: ESTDeviceGeoLocation;

	readonly identifier: string;

	readonly indoorLocation: ESTDeviceIndoorLocation;

	readonly name: string;

	readonly tags: NSArray<string>;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ESTDeviceStatusReport extends ESTBaseVO {

	static alloc(): ESTDeviceStatusReport; // inherited from NSObject

	static new(): ESTDeviceStatusReport; // inherited from NSObject

	readonly batteryLifetime: number;

	readonly batteryPercentage: number;

	readonly batteryVoltageInVolts: number;

	readonly clockOffsetInSeconds: number;

	readonly firmwareVersion: string;

	readonly lastSync: Date;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ESTDeviceUpdateInfo extends ESTBaseVO {

	static alloc(): ESTDeviceUpdateInfo; // inherited from NSObject

	static new(): ESTDeviceUpdateInfo; // inherited from NSObject

	readonly firmwareUpdateAvailable: boolean;

	readonly identifier: string;

	readonly pendingSettingsAvailable: boolean;

	constructor(o: { cloudDictionary: NSDictionary<any, any>; });

	constructor(o: { deviceIdentifier: string; pendingSettingsAvailable: boolean; firmwareUpdateAvailable: boolean; });

	initWithCloudDictionary(dictionary: NSDictionary<any, any>): this;

	initWithDeviceIdentifierPendingSettingsAvailableFirmwareUpdateAvailable(identifier: string, pendingSettingsAvailable: boolean, firmwareUpdateAvailable: boolean): this;
}

declare class ESTEddystone extends NSObject implements NSCopying {

	static alloc(): ESTEddystone; // inherited from NSObject

	static new(): ESTEddystone; // inherited from NSObject

	accuracy: number;

	discoveryDate: Date;

	macAddress: string;

	measuredPower: number;

	peripheralIdentifier: NSUUID;

	proximity: ESTEddystoneProximity;

	rssi: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqualToEddystone(eddystone: ESTEddystone): boolean;

	updateWithEddystone(eddystone: ESTEddystone): void;
}

declare class ESTEddystoneAttachment extends NSObject implements NSCopying {

	static alloc(): ESTEddystoneAttachment; // inherited from NSObject

	static new(): ESTEddystoneAttachment; // inherited from NSObject

	readonly data: string;

	readonly namespacedType: string;

	constructor(o: { cloudData: NSDictionary<any, any>; });

	constructor(o: { namespacedType: string; data: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithCloudData(cloudData: NSDictionary<any, any>): this;

	initWithNamespacedTypeData(namespacedType: string, data: string): this;
}

declare class ESTEddystoneEID extends ESTEddystone {

	static alloc(): ESTEddystoneEID; // inherited from NSObject

	static new(): ESTEddystoneEID; // inherited from NSObject

	attachments: NSArray<ESTEddystoneAttachment>;

	readonly ephemeralID: string;

	readonly isResolved: boolean;

	constructor(o: { ephemeralID: string; resolved: boolean; });

	initWithEphemeralIDResolved(ephemeralID: string, resolved: boolean): this;
}

declare const enum ESTEddystoneEIDPower {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare class ESTEddystoneFilter extends NSObject {

	static alloc(): ESTEddystoneFilter; // inherited from NSObject

	static new(): ESTEddystoneFilter; // inherited from NSObject

	filterEddystones(eddystones: NSArray<ESTEddystone>): NSArray<ESTEddystone>;
}

declare class ESTEddystoneFilterEID extends ESTEddystoneFilter {

	static alloc(): ESTEddystoneFilterEID; // inherited from NSObject

	static new(): ESTEddystoneFilterEID; // inherited from NSObject
}

declare class ESTEddystoneFilterUID extends ESTEddystoneFilter {

	static alloc(): ESTEddystoneFilterUID; // inherited from NSObject

	static new(): ESTEddystoneFilterUID; // inherited from NSObject

	readonly instanceID: string;

	readonly namespaceID: string;

	constructor(o: { namespaceID: string; });

	constructor(o: { namespaceID: string; instanceID: string; });

	initWithNamespaceID(namespaceID: string): this;

	initWithNamespaceIDInstanceID(namespaceID: string, instanceID: string): this;
}

declare class ESTEddystoneFilterURL extends ESTEddystoneFilter {

	static alloc(): ESTEddystoneFilterURL; // inherited from NSObject

	static new(): ESTEddystoneFilterURL; // inherited from NSObject

	readonly eddystoneURL: string;

	constructor(o: { URL: string; });

	initWithURL(eddystoneURL: string): this;
}

declare class ESTEddystoneFilterURLDomain extends ESTEddystoneFilter {

	static alloc(): ESTEddystoneFilterURLDomain; // inherited from NSObject

	static new(): ESTEddystoneFilterURLDomain; // inherited from NSObject

	readonly eddystoneURLDomain: string;

	constructor(o: { URLDomain: string; });

	initWithURLDomain(eddystoneURLDomain: string): this;
}

declare class ESTEddystoneManager extends NSObject {

	static alloc(): ESTEddystoneManager; // inherited from NSObject

	static new(): ESTEddystoneManager; // inherited from NSObject

	delegate: ESTEddystoneManagerDelegate;

	readonly filtersInDiscovery: NSArray<ESTEddystoneFilter>;

	startEddystoneDiscoveryWithFilter(eddystoneFilter: ESTEddystoneFilter): void;

	stopEddystoneDiscoveryWithFilter(eddystoneFilter: ESTEddystoneFilter): void;
}

interface ESTEddystoneManagerDelegate extends NSObjectProtocol {

	eddystoneManagerDidDiscoverEddystonesWithFilter?(manager: ESTEddystoneManager, eddystones: NSArray<ESTEddystone>, eddystoneFilter: ESTEddystoneFilter): void;

	eddystoneManagerDidFailDiscoveryWithError?(manager: ESTEddystoneManager, error: NSError): void;
}
declare var ESTEddystoneManagerDelegate: {

	prototype: ESTEddystoneManagerDelegate;
};

declare const enum ESTEddystoneManagerState {

	Idle = 0,

	Scanning = 1
}

declare const enum ESTEddystoneProximity {

	Unknown = 0,

	Immediate = 1,

	Near = 2,

	Far = 3
}

declare class ESTEddystoneTLM extends ESTEddystone {

	static alloc(): ESTEddystoneTLM; // inherited from NSObject

	static new(): ESTEddystoneTLM; // inherited from NSObject

	batteryVoltage: number;

	packetCount: number;

	temperature: number;

	uptimeMillis: number;

	constructor(o: { batteryVoltage: number; temperature: number; packetCount: number; uptimeMillis: number; });

	initWithBatteryVoltageTemperaturePacketCountUptimeMillis(batteryVoltage: number, temperature: number, packetCont: number, uptimeMillis: number): this;
}

declare const enum ESTEddystoneTLMPower {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare class ESTEddystoneUID extends ESTEddystone {

	static alloc(): ESTEddystoneUID; // inherited from NSObject

	static new(): ESTEddystoneUID; // inherited from NSObject

	readonly instanceID: string;

	readonly namespaceID: string;

	constructor(o: { namespaceID: string; });

	constructor(o: { namespaceID: string; instanceID: string; });

	initWithNamespaceID(namespaceID: string): this;

	initWithNamespaceIDInstanceID(namespaceID: string, instanceID: string): this;
}

declare const enum ESTEddystoneUIDPower {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare class ESTEddystoneURL extends ESTEddystone {

	static alloc(): ESTEddystoneURL; // inherited from NSObject

	static new(): ESTEddystoneURL; // inherited from NSObject

	readonly url: string;

	constructor(o: { URL: string; });

	initWithURL(url: string): this;
}

declare const enum ESTEddystoneURLPower {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare const enum ESTEstimoteLocationPower {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare const enum ESTEstimoteTLMPower {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare class ESTFeaturesetBackgroundMode extends NSObject {

	static alloc(): ESTFeaturesetBackgroundMode; // inherited from NSObject

	static classNamesToSettings(): NSDictionary<string, ESTSettingBase>;

	static classNamesToSettingsForDeviceIdentifier(deviceIdentifier: string): NSDictionary<string, ESTSettingBase>;

	static featuresetEnabledForSettingsForDeviceIdentifier(settingsToTest: NSArray<ESTSettingBase>, deviceIdentifier: string): boolean;

	static getWriteOperations(): NSArray<ESTBeaconOperationProtocol>;

	static getWriteOperationsForDeviceIdentifier(deviceIdentifier: string): NSArray<ESTBeaconOperationProtocol>;

	static new(): ESTFeaturesetBackgroundMode; // inherited from NSObject

	constructor(o: { device: ESTDeviceLocationBeacon; });

	initWithDevice(device: ESTDeviceLocationBeacon): this;

	readSettingsWithCompletion(completion: (p1: boolean, p2: NSArray<NSError>) => void): void;

	writeEnableSettingsWithCompletion(enabled: boolean, completion: (p1: NSArray<NSError>) => void): void;
}

declare class ESTFeaturesetEstimoteMonitoring extends NSObject {

	static alloc(): ESTFeaturesetEstimoteMonitoring; // inherited from NSObject

	static classNamesToSettings(): NSDictionary<string, ESTSettingBase>;

	static classNamesToSettingsForDeviceIdentifier(deviceIdentifier: string): NSDictionary<string, ESTSettingBase>;

	static featuresetEnabledForSettingsForDeviceIdentifier(settingsToTest: NSArray<ESTSettingBase>, deviceIdentifier: string): boolean;

	static getWriteOperations(): NSArray<ESTBeaconOperationProtocol>;

	static getWriteOperationsForDeviceIdentifier(deviceIdentifier: string): NSArray<ESTBeaconOperationProtocol>;

	static new(): ESTFeaturesetEstimoteMonitoring; // inherited from NSObject

	constructor(o: { device: ESTDeviceLocationBeacon; });

	initWithDevice(device: ESTDeviceLocationBeacon): this;

	readSettingsWithCompletion(completion: (p1: boolean, p2: NSArray<NSError>) => void): void;

	writeEnableSettingsWithCompletion(enabled: boolean, completion: (p1: NSArray<NSError>) => void): void;
}

declare class ESTFirmwareInfoV4VO extends NSObject {

	static alloc(): ESTFirmwareInfoV4VO; // inherited from NSObject

	static firmwareVersionIsBiggerThan(firmwareVersion: string, referenceFirmwareVersion: string): boolean;

	static new(): ESTFirmwareInfoV4VO; // inherited from NSObject

	applicationVersion: string;

	bootloaderVersion: string;

	changelog: string;

	hardwareVersion: string;

	softdeviceVersion: string;

	tarURL: string;

	updateAvailable: boolean;

	version: string;
}

declare class ESTFirmwareInfoVO extends NSObject {

	static alloc(): ESTFirmwareInfoVO; // inherited from NSObject

	static new(): ESTFirmwareInfoVO; // inherited from NSObject

	changelog: string;

	firmwareVersion: string;

	hardwareVersion: string;

	isUpdateAvailable: boolean;
}

declare const enum ESTGPIOConfig {

	InputNoPull = 0,

	InputPullDown = 1,

	InputPullUp = 2,

	Output = 3,

	UART = 4
}

declare const enum ESTGPIOConfigError {

	ValueNotAllowed = 1
}

declare const enum ESTGPIOPort {

	Port0 = 0,

	Port1 = 1
}

declare const enum ESTGPIOPortValue {

	Unknown = -1,

	Low = 0,

	High = 1
}

declare class ESTGPIOPortsData extends NSObject implements NSCopying {

	static alloc(): ESTGPIOPortsData; // inherited from NSObject

	static new(): ESTGPIOPortsData; // inherited from NSObject

	constructor(o: { port0Value: ESTGPIOPortValue; port1Value: ESTGPIOPortValue; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValueForPort(port: ESTGPIOPort): ESTGPIOPortValue;

	initWithPort0ValuePort1Value(port0Value: ESTGPIOPortValue, port1Value: ESTGPIOPortValue): this;

	setPortValue(port: ESTGPIOPort, value: ESTGPIOPortValue): NSError;
}

declare const enum ESTGPIOPortsDataError {

	IncorrectPort = 0,

	IncorrectValue = 1
}

declare const enum ESTGenericAdvertiserID {

	D1 = 1,

	D2 = 2
}

declare const enum ESTGenericAdvertiserPowerLevel {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare const enum ESTIBeaconPower {

	Level1 = -30,

	Level1A = -40,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4,

	Level9 = 10,

	Level9A = 20
}

declare class ESTLocationBeaconBulkUpdateConfiguration extends NSObject {

	static alloc(): ESTLocationBeaconBulkUpdateConfiguration; // inherited from NSObject

	static new(): ESTLocationBeaconBulkUpdateConfiguration; // inherited from NSObject

	createdAt: Date;

	readonly deviceIdentifier: string;

	readonly firmwareUpdateAvailable: boolean;

	lastDetectedAt: Date;

	readonly settingsOperations: NSArray<ESTSettingOperation>;

	constructor(o: { deviceIdentifier: string; settingsOperations: NSArray<ESTSettingOperation>; firmwareUpdateAvailable: boolean; });

	initWithDeviceIdentifierSettingsOperationsFirmwareUpdateAvailable(deviceIdentifier: string, settingsOperations: NSArray<ESTSettingOperation>, firmwareUpdateAvailable: boolean): this;
}

declare class ESTLocationBeaconBulkUpdater extends NSObject {

	static alloc(): ESTLocationBeaconBulkUpdater; // inherited from NSObject

	static new(): ESTLocationBeaconBulkUpdater; // inherited from NSObject

	delegate: ESTLocationBeaconBulkUpdaterDelegate;

	readonly fetchInterval: number;

	skipsFirmwareUpdateStep: boolean;

	readonly status: ESTBulkUpdaterStatus;

	readonly timeout: number;

	readonly updateConfigurations: NSArray<ESTLocationBeaconBulkUpdateConfiguration>;

	cancel(): void;

	numberOfFailedUpdates(): number;

	numberOfSuccessfulUpdates(): number;

	start(): void;

	startWithTimeout(timeout: number): void;

	startWithTimeoutFetchInterval(timeout: number, fetchInterval: number): void;

	startWithUpdateConfigurations(updateConfigurations: NSArray<ESTLocationBeaconBulkUpdateConfiguration>): void;

	startWithUpdateConfigurationsTimeout(updateConfigurations: NSArray<ESTLocationBeaconBulkUpdateConfiguration>, timeout: number): void;

	statusForDeviceWithIdentifier(deviceIdentifier: string): ESTBulkUpdaterDeviceUpdateStatus;
}

interface ESTLocationBeaconBulkUpdaterDelegate extends NSObjectProtocol {

	bulkUpdaterDidCancel?(bulkUpdater: ESTLocationBeaconBulkUpdater): void;

	bulkUpdaterDidFailWithError?(bulkUpdater: ESTLocationBeaconBulkUpdater, error: NSError): void;

	bulkUpdaterDidFetchDevices?(bulkUpdater: ESTLocationBeaconBulkUpdater): void;

	bulkUpdaterDidFinish?(bulkUpdater: ESTLocationBeaconBulkUpdater): void;

	bulkUpdaterDidUpdateStatusForDeviceWithIdentifier?(bulkUpdater: ESTLocationBeaconBulkUpdater, updateStatus: ESTBulkUpdaterDeviceUpdateStatus, deviceIdentifier: string): void;
}
declare var ESTLocationBeaconBulkUpdaterDelegate: {

	prototype: ESTLocationBeaconBulkUpdaterDelegate;
};

declare const enum ESTLocationBeaconBulkUpdaterError {

	DeviceDiscoveryFailed = 0,

	NoPendingChanges = 1,

	Timeout = 2
}

declare const enum ESTLogLevel {

	None = 0,

	Error = 1,

	Warning = 2,

	Debug = 3,

	Info = 4,

	Verbose = 5
}

declare class ESTLogger extends NSObject {

	static alloc(): ESTLogger; // inherited from NSObject

	static clearLogCache(): void;

	static dumpLogCacheToFile(): void;

	static getLogCache(): string;

	static logWithLevel(message: string, level: ESTLogLevel): void;

	static new(): ESTLogger; // inherited from NSObject

	static setCacheLogLevel(level: ESTLogLevel): void;

	static setConsoleLogLevel(level: ESTLogLevel): void;
}

declare class ESTMesh extends ESTBaseVO implements NSCoding, NSCopying {

	static alloc(): ESTMesh; // inherited from NSObject

	static new(): ESTMesh; // inherited from NSObject

	devices: NSArray<string>;

	readonly networkIdentifier: number;

	readonly networkName: string;

	readonly networkType: ESTMeshNetworkType;

	readonly settings: ESTDeviceSettings;

	constructor(o: { cloudData: NSDictionary<any, any>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addDeviceCompletion(device: ESTDeviceLocationBeacon, completion: (p1: NSError) => void): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCloudData(cloudData: NSDictionary<any, any>): this;

	initWithCoder(aDecoder: NSCoder): this;

	removeDeviceCompletion(device: ESTDeviceLocationBeacon, completion: (p1: NSError) => void): void;
}

declare const enum ESTMeshError {

	InvalidArguments = 0,

	AddingDeviceFailed = 1,

	RemovingDeviceFailed = 2
}

declare class ESTMeshGateway extends NSObject {

	static alloc(): ESTMeshGateway; // inherited from NSObject

	static new(): ESTMeshGateway; // inherited from NSObject

	delegate: ESTMeshGatewayDelegate;

	start(): void;

	stop(): void;
}

interface ESTMeshGatewayDelegate extends NSObjectProtocol {

	gatewayDidReadScanReportWithSettingsVersionForNetwork?(gateway: ESTMeshGateway, scanReport: ESTMeshNearablesScanReportVO, settingsVersion: number, networkIdentifier: number): void;
}
declare var ESTMeshGatewayDelegate: {

	prototype: ESTMeshGatewayDelegate;
};

declare class ESTMeshManager extends NSObject {

	static alloc(): ESTMeshManager; // inherited from NSObject

	static new(): ESTMeshManager; // inherited from NSObject

	delegate: ESTMeshManagerDelegate;

	readonly isConfirmingMeshSettings: boolean;

	constructor(o: { delegate: ESTMeshManagerDelegate; });

	constructor(o: { delegate: ESTMeshManagerDelegate; cbCentralManagerQueue: NSObject; });

	configureNetworkSettingsCompletion(networkIdentifier: number, deviceSettings: ESTDeviceSettingsCollection, completion: (p1: NSError) => void): void;

	createMeshFromDevicesNetworkNameNetworkTypeReferenceSettingsCompletion(devices: NSArray<string>, name: string, type: ESTMeshNetworkType, settings: ESTDeviceSettings, completion: (p1: ESTMesh, p2: NSError) => void): void;

	enableAssetTrackingForNetworkIdentifierCompletion(networkIdentifier: number, completion: (p1: NSError) => void): void;

	fetchMeshDetailsWithIdentifierCompletion(identifier: number, completion: (p1: ESTMesh, p2: NSError) => void): void;

	fetchMeshListWithCompletion(completion: (p1: NSArray<ESTMesh>, p2: NSError) => void): void;

	initWithDelegate(delegate: ESTMeshManagerDelegate): this;

	initWithDelegateCbCentralManagerQueue(delegate: ESTMeshManagerDelegate, queue: NSObject): this;

	prepareNearablesScanReportCommandForNetworkIdentifierCompletion(networkIdentifier: number, completion: (p1: NSError) => void): void;

	queueAutomappingCommandInCloudForNetworkIdentifierCompletion(networkIdentifier: number, completion: (p1: NSError) => void): void;

	startConfirmingMeshSettings(): void;

	stopConfirmingMeshSettings(): void;
}

interface ESTMeshManagerDelegate extends NSObjectProtocol {

	meshManagerDidConfirmMeshSettingsForDeviceIdentifiers?(manager: ESTMeshManager, deviceIdentifiers: NSArray<string>): void;

	meshManagerDidFailMeshSettingsConfirmationWithError?(manager: ESTMeshManager, error: NSError): void;
}
declare var ESTMeshManagerDelegate: {

	prototype: ESTMeshManagerDelegate;
};

declare const enum ESTMeshManagerError {

	ErrorInvalidValue = 0,

	BluetoothNotSupported = 1,

	UnauthorizedToUseBluetooth = 2,

	BluetoothOff = 3,

	ErrorAutomappingFailed = 4,

	ErrorAssetTrackingFailed = 5,

	ErrorPrepareNearablesScanReportFailed = 6,

	ErrorConfigurationFailed = 7
}

declare class ESTMeshNearablesScanReportVO extends NSObject {

	static alloc(): ESTMeshNearablesScanReportVO; // inherited from NSObject

	static new(): ESTMeshNearablesScanReportVO; // inherited from NSObject

	collectedAt: Date;

	constructor(o: { data: NSArray<NSData>; collectedAt: Date; });

	cloudDictionary(): NSDictionary<any, any>;

	initWithDataCollectedAt(data: NSArray<NSData>, collectedAt: Date): this;

	scanResultsForShortDeviceIdentifier(deviceIdentifier: string): NSArray<ESTMeshNearablesScanResultVO>;
}

declare class ESTMeshNearablesScanResultVO extends NSObject {

	static alloc(): ESTMeshNearablesScanResultVO; // inherited from NSObject

	static new(): ESTMeshNearablesScanResultVO; // inherited from NSObject

	readonly distance: number;

	readonly measuredPower: number;

	readonly nearableIdentifier: string;

	readonly rssi: number;

	constructor(o: { data: NSData; });

	constructor(o: { identifier: string; rssi: number; });

	data(): NSData;

	initWithData(data: NSData): this;

	initWithIdentifierRssi(deviceIdentifier: string, rssi: number): this;
}

declare const enum ESTMeshNetworkType {

	Standard = 0,

	Cluster = 1
}

declare class ESTMeshScanReportsManager extends NSObject {

	static alloc(): ESTMeshScanReportsManager; // inherited from NSObject

	static new(): ESTMeshScanReportsManager; // inherited from NSObject

	constructor(o: { peripheral: ESTPeripheralTypeUtility; });

	initWithPeripheral(peripheral: ESTPeripheralTypeUtility): this;

	readScanReportWithCompletion(completion: (p1: ESTMeshNearablesScanReportVO, p2: NSError) => void): void;
}

declare class ESTMonitoringManager extends NSObject {

	static alloc(): ESTMonitoringManager; // inherited from NSObject

	static new(): ESTMonitoringManager; // inherited from NSObject

	delegate: ESTMonitoringManagerDelegate;

	startDefaultMonitoringForIdentifier(identifier: string): void;

	startMonitoringForIdentifierInProximity(identifier: string, proximity: ESTMonitoringProximity): void;

	startTurboMode(): void;

	stopMonitoring(): void;

	stopTurboMode(): void;
}

interface ESTMonitoringManagerDelegate extends NSObjectProtocol {

	monitoringManagerDidEnterRangeOfIdentifier?(manager: ESTMonitoringManager, identifier: string): void;

	monitoringManagerDidExitRangeOfIdentifier?(manager: ESTMonitoringManager, identifier: string): void;

	monitoringManagerDidFailWithError?(manager: ESTMonitoringManager, error: NSError): void;

	monitoringManagerDidStart?(manager: ESTMonitoringManager): void;
}
declare var ESTMonitoringManagerDelegate: {

	prototype: ESTMonitoringManagerDelegate;
};

declare const enum ESTMonitoringManagerError {

	BluetoothNotSupported = 1,

	UnauthorizedToUseBluetooth = 2,

	BluetoothOff = 3,

	ConnectionFail = -1,

	NoData = -2,

	BadRequest = 400,

	Unauthorized = 401,

	Forbidden = 403,

	NotFound = 404,

	InternalServerError = 500
}

declare const enum ESTMonitoringProximity {

	Unknown = 0,

	Near = 1,

	Medium = 2,

	Far = 3
}

declare const enum ESTMonitoringState {

	Unknown = 0,

	InsideZone = 1,

	OutsideZone = 2
}

declare class ESTMonitoringV2Manager extends NSObject {

	static alloc(): ESTMonitoringV2Manager; // inherited from NSObject

	static new(): ESTMonitoringV2Manager; // inherited from NSObject

	readonly authorizationStatus: CLAuthorizationStatus;

	readonly backgroundSupportRegion: CLBeaconRegion;

	delegate: ESTMonitoringV2ManagerDelegate;

	readonly desiredMeanTriggerDistance: number;

	readonly monitoredIdentifiers: NSSet<string>;

	constructor(o: { desiredMeanTriggerDistance: number; delegate: ESTMonitoringV2ManagerDelegate; });

	initWithDesiredMeanTriggerDistanceDelegate(meanTriggerDistance: number, delegate: ESTMonitoringV2ManagerDelegate): this;

	requestAlwaysAuthorization(): void;

	requestWhenInUseAuthorization(): void;

	startMonitoringForIdentifiers(identifiers: NSArray<string>): void;

	stateForBeaconWithIdentifier(identifier: string): ESTMonitoringState;

	stopMonitoring(): void;
}

interface ESTMonitoringV2ManagerDelegate extends NSObjectProtocol {

	monitoringManagerDidChangeAuthorizationStatus?(manager: ESTMonitoringV2Manager, authorizationStatus: CLAuthorizationStatus): void;

	monitoringManagerDidDetermineInitialStateForBeaconWithIdentifier?(manager: ESTMonitoringV2Manager, state: ESTMonitoringState, identifier: string): void;

	monitoringManagerDidEnterDesiredRangeOfBeaconWithIdentifier?(manager: ESTMonitoringV2Manager, identifier: string): void;

	monitoringManagerDidExitDesiredRangeOfBeaconWithIdentifier?(manager: ESTMonitoringV2Manager, identifier: string): void;

	monitoringManagerDidFailWithError(manager: ESTMonitoringV2Manager, error: NSError): void;

	monitoringManagerDidStart?(manager: ESTMonitoringV2Manager): void;
}
declare var ESTMonitoringV2ManagerDelegate: {

	prototype: ESTMonitoringV2ManagerDelegate;
};

declare const enum ESTMonitoringV2ManagerError {

	BluetoothNotSupported = 1,

	UnauthorizedToUseBluetooth = 2,

	BluetoothOff = 3,

	DesiredDistanceTooLow = 4,

	UnauthorizedToMonitorBeacons = 5
}

declare class ESTMotionRule extends ESTNearableRule {

	static alloc(): ESTMotionRule; // inherited from NSObject

	static motionStateEqualsForNearableIdentifier(motionState: boolean, identifier: string): ESTMotionRule;

	static motionStateEqualsForNearableType(motionState: boolean, type: ESTNearableType): ESTMotionRule;

	static new(): ESTMotionRule; // inherited from NSObject

	motionState: boolean;
}

declare class ESTNearable extends NSObject implements NSCoding, NSCopying {

	static alloc(): ESTNearable; // inherited from NSObject

	static new(): ESTNearable; // inherited from NSObject

	readonly advInterval: number;

	readonly broadcastingScheme: ESTNearableBroadcastingScheme;

	readonly color: ESTColor;

	readonly currentMotionStateDuration: number;

	readonly eddystoneURL: string;

	readonly firmwareState: ESTNearableFirmwareState;

	readonly firmwareVersion: string;

	readonly hardwareVersion: string;

	readonly identifier: string;

	readonly idleBatteryVoltage: number;

	readonly isMoving: boolean;

	readonly major: number;

	readonly minor: number;

	readonly orientation: ESTNearableOrientation;

	readonly power: number;

	readonly previousMotionStateDuration: number;

	readonly proximityUUID: string;

	readonly rssi: number;

	readonly stressBatteryVoltage: number;

	readonly temperature: number;

	readonly type: ESTNearableType;

	readonly xAcceleration: number;

	readonly yAcceleration: number;

	readonly zAcceleration: number;

	readonly 

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	beaconRegion(): CLBeaconRegion;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isMotionBroken(): boolean;

	isTemperatureBroken(): boolean;
}

declare const enum ESTNearableBroadcastingScheme {

	Unknown = -1,

	Nearable = 0,

	IBeacon = 1,

	EddystoneURL = 2
}

declare class ESTNearableDefinitions extends ESTDefinitions {

	static alloc(): ESTNearableDefinitions; // inherited from NSObject

	static nameForNearableBroadcastingScheme(scheme: ESTNearableBroadcastingScheme): string;

	static nameForType(type: ESTNearableType): string;

	static new(): ESTNearableDefinitions; // inherited from NSObject
}

declare const enum ESTNearableFirmwareState {

	Boot = 0,

	App = 1
}

declare class ESTNearableFirmwareUpdateVO extends NSObject {

	static alloc(): ESTNearableFirmwareUpdateVO; // inherited from NSObject

	static new(): ESTNearableFirmwareUpdateVO; // inherited from NSObject
}

declare class ESTNearableFirmwareVO extends NSObject {

	static alloc(): ESTNearableFirmwareVO; // inherited from NSObject

	static new(): ESTNearableFirmwareVO; // inherited from NSObject

	firmwareId: number;

	firmwareName: string;
}

declare class ESTNearableManager extends NSObject {

	static alloc(): ESTNearableManager; // inherited from NSObject

	static new(): ESTNearableManager; // inherited from NSObject

	delegate: ESTNearableManagerDelegate;

	startMonitoringForIdentifier(identifier: string): void;

	startMonitoringForType(type: ESTNearableType): void;

	startRangingForIdentifier(identifier: string): void;

	startRangingForType(type: ESTNearableType): void;

	stopMonitoring(): void;

	stopMonitoringForIdentifier(identifier: string): void;

	stopMonitoringForType(type: ESTNearableType): void;

	stopRanging(): void;

	stopRangingForIdentifier(identifier: string): void;

	stopRangingForType(type: ESTNearableType): void;
}

interface ESTNearableManagerDelegate extends NSObjectProtocol {

	nearableManagerDidEnterIdentifierRegion?(manager: ESTNearableManager, identifier: string): void;

	nearableManagerDidEnterTypeRegion?(manager: ESTNearableManager, type: ESTNearableType): void;

	nearableManagerDidExitIdentifierRegion?(manager: ESTNearableManager, identifier: string): void;

	nearableManagerDidExitTypeRegion?(manager: ESTNearableManager, type: ESTNearableType): void;

	nearableManagerDidRangeNearable?(manager: ESTNearableManager, nearable: ESTNearable): void;

	nearableManagerDidRangeNearablesWithType?(manager: ESTNearableManager, nearables: NSArray<ESTNearable>, type: ESTNearableType): void;

	nearableManagerMonitoringFailedWithError?(manager: ESTNearableManager, error: NSError): void;

	nearableManagerRangingFailedWithError?(manager: ESTNearableManager, error: NSError): void;
}
declare var ESTNearableManagerDelegate: {

	prototype: ESTNearableManagerDelegate;
};

declare class ESTNearableOperationApplicationVersion extends ESTSettingOperation implements ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationApplicationVersion; // inherited from NSObject

	static new(): ESTNearableOperationApplicationVersion; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoApplicationVersion, p2: NSError) => void): ESTNearableOperationApplicationVersion;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationBroadcastingScheme extends ESTSettingOperation implements ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationBroadcastingScheme; // inherited from NSObject

	static new(): ESTNearableOperationBroadcastingScheme; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingNearableBroadcastingScheme, p2: NSError) => void): ESTNearableOperationBroadcastingScheme;

	static writeOperationWithSettingCompletion(setting: ESTSettingNearableBroadcastingScheme, completion: (p1: ESTSettingNearableBroadcastingScheme, p2: NSError) => void): ESTNearableOperationBroadcastingScheme;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationEddystoneURL extends ESTSettingOperation implements ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationEddystoneURL; // inherited from NSObject

	static new(): ESTNearableOperationEddystoneURL; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingNearableEddystoneURL, p2: NSError) => void): ESTNearableOperationEddystoneURL;

	static writeOperationWithSettingCompletion(setting: ESTSettingNearableEddystoneURL, completion: (p1: ESTSettingNearableEddystoneURL, p2: NSError) => void): ESTNearableOperationEddystoneURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationHardware extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationHardware; // inherited from NSObject

	static new(): ESTNearableOperationHardware; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoHardwareVersion, p2: NSError) => void): ESTNearableOperationHardware;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationIBeaconMajor extends ESTSettingOperation implements ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationIBeaconMajor; // inherited from NSObject

	static new(): ESTNearableOperationIBeaconMajor; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconMajor, p2: NSError) => void): ESTNearableOperationIBeaconMajor;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconMajor, completion: (p1: ESTSettingIBeaconMajor, p2: NSError) => void): ESTNearableOperationIBeaconMajor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationIBeaconMinor extends ESTSettingOperation implements ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationIBeaconMinor; // inherited from NSObject

	static new(): ESTNearableOperationIBeaconMinor; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconMinor, p2: NSError) => void): ESTNearableOperationIBeaconMinor;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconMinor, completion: (p1: ESTSettingIBeaconMinor, p2: NSError) => void): ESTNearableOperationIBeaconMinor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationIBeaconProximityUUID extends ESTSettingOperation implements ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationIBeaconProximityUUID; // inherited from NSObject

	static new(): ESTNearableOperationIBeaconProximityUUID; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingIBeaconProximityUUID, p2: NSError) => void): ESTNearableOperationIBeaconProximityUUID;

	static writeOperationWithSettingCompletion(setting: ESTSettingIBeaconProximityUUID, completion: (p1: ESTSettingIBeaconProximityUUID, p2: NSError) => void): ESTNearableOperationIBeaconProximityUUID;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationMotionOnly extends ESTSettingOperation implements ESTBeaconOperationProtocol, ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationMotionOnly; // inherited from NSObject

	static new(): ESTNearableOperationMotionOnly; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingPowerMotionOnlyBroadcastingEnable, p2: NSError) => void): ESTNearableOperationMotionOnly;

	static writeOperationWithSettingCompletion(setting: ESTSettingPowerMotionOnlyBroadcastingEnable, completion: (p1: ESTSettingPowerMotionOnlyBroadcastingEnable, p2: NSError) => void): ESTNearableOperationMotionOnly;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	associatedOperations(): NSArray<ESTBeaconOperationProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	fireSuccessBlockWithData(result: NSData): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	updateSettingWithData(data: NSData): void;

	valueCloud(): any;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationName extends ESTSettingOperation implements ESTCloudOperationProtocol, ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationName; // inherited from NSObject

	static new(): ESTNearableOperationName; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingDeviceInfoName, p2: NSError) => void): ESTNearableOperationName;

	static writeOperationWithSettingCompletion(setting: ESTSettingDeviceInfoName, completion: (p1: ESTSettingDeviceInfoName, p2: NSError) => void): ESTNearableOperationName;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	updateSettingWithSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationNearableInterval extends ESTSettingOperation implements ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationNearableInterval; // inherited from NSObject

	static new(): ESTNearableOperationNearableInterval; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingNearableInterval, p2: NSError) => void): ESTNearableOperationNearableInterval;

	static writeOperationWithSettingCompletion(setting: ESTSettingNearableInterval, completion: (p1: ESTSettingNearableInterval, p2: NSError) => void): ESTNearableOperationNearableInterval;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

declare class ESTNearableOperationNearablePower extends ESTSettingOperation implements ESTNearableOperationProtocol {

	static alloc(): ESTNearableOperationNearablePower; // inherited from NSObject

	static new(): ESTNearableOperationNearablePower; // inherited from NSObject

	static readOperationWithCompletion(completion: (p1: ESTSettingNearablePower, p2: NSError) => void): ESTNearableOperationNearablePower;

	static writeOperationWithSettingCompletion(setting: ESTSettingNearablePower, completion: (p1: ESTSettingNearablePower, p2: NSError) => void): ESTNearableOperationNearablePower;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}

interface ESTNearableOperationProtocol extends NSObjectProtocol {

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlock(): void;

	getSetting(): ESTSettingBase;

	registerID(): number;

	settingClass(): typeof NSObject;

	shouldSynchronize(): boolean;

	storageType(): ESTSettingStorageType;

	supportedFirmwareVersion(): string;

	type(): ESTSettingOperationType;

	updateSetting(setting: ESTSettingBase): void;

	valueData(): NSData;

	valueDataSize(): number;
}
declare var ESTNearableOperationProtocol: {

	prototype: ESTNearableOperationProtocol;
};

declare const enum ESTNearableOrientation {

	Unknown = 0,

	Horizontal = 1,

	HorizontalUpsideDown = 2,

	Vertical = 3,

	VerticalUpsideDown = 4,

	LeftSide = 5,

	RightSide = 6
}

declare const enum ESTNearablePower {

	Level1 = -30,

	Level2 = -20,

	Level3 = -16,

	Level4 = -12,

	Level5 = -8,

	Level6 = -4,

	Level7 = 0,

	Level8 = 4
}

declare class ESTNearableRule extends ESTRule {

	static alloc(): ESTNearableRule; // inherited from NSObject

	static new(): ESTNearableRule; // inherited from NSObject

	readonly nearableIdentifier: string;

	readonly nearableType: ESTNearableType;

	constructor(o: { nearableIdentifier: string; });

	constructor(o: { nearableType: ESTNearableType; });

	initWithNearableIdentifier(identifier: string): this;

	initWithNearableType(type: ESTNearableType): this;

	updateWithNearable(nearable: ESTNearable): void;
}

declare class ESTNearableSettingsManager extends NSObject implements ESTPeripheralNearableDelegate {

	static alloc(): ESTNearableSettingsManager; // inherited from NSObject

	static new(): ESTNearableSettingsManager; // inherited from NSObject

	readonly settingsCollection: ESTDeviceSettingsCollection;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { device: ESTDeviceNearable; peripheral: ESTPeripheralNearable; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDevicePeripheral(device: ESTDeviceNearable, peripheral: ESTPeripheralNearable): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performOperation(operation: ESTNearableOperationProtocol): void;

	performOperationsFromArray(operations: NSArray<ESTNearableOperationProtocol>): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	peripheralDidFailOperationWithError(peripheral: ESTPeripheral, operation: ESTNearableOperationProtocol, error: NSError): void;

	peripheralDidPerformOperationAndReceivedData(peripheral: ESTPeripheral, operation: ESTNearableOperationProtocol, data: NSData): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	synchronizeUsingNearableVOForFirmwareVersionCompletion(nearableVO: ESTNearableVO, firmwareVersion: string, completion: () => void): void;
}

declare const enum ESTNearableSettingsManagerError {

	SynchronizationInProgress = 0,

	SettingNotSupported = 1,

	SettingNotProvidedForWrite = 2,

	SettingValidationFailed = 3,

	SettingCloudReadFailed = 4,

	CloudSaveFailed = 5
}

declare const enum ESTNearableType {

	Unknown = 0,

	Dog = 1,

	Car = 2,

	Fridge = 3,

	Bag = 4,

	Bike = 5,

	Chair = 6,

	Bed = 7,

	Door = 8,

	Shoe = 9,

	Generic = 10,

	All = 11
}

declare class ESTNearableVO extends NSObject implements NSCoding {

	static alloc(): ESTNearableVO; // inherited from NSObject

	static new(): ESTNearableVO; // inherited from NSObject

	advInterval: number;

	broadcastingScheme: number;

	color: ESTColor;

	eddystoneURL: string;

	firmware: string;

	hardware: string;

	identifier: string;

	indoorLocationIdentifier: string;

	indoorLocationName: string;

	major: number;

	minor: number;

	motionOnly: number;

	name: string;

	power: number;

	proximityUUID: string;

	type: ESTNearableType;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { data: NSDictionary<any, any>; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithData(data: NSDictionary<any, any>): this;
}

declare const enum ESTNearableZone {

	Unknown = 0,

	Immediate = 1,

	Near = 2,

	Far = 3
}

declare const enum ESTNotification {

	DidSaveNearableZoneDescription = 0,

	DidSaveNearable = 1,

	DidBeaconEnterRegion = 2,

	DidBeaconExitRegion = 3,

	DidNearableEnterRegion = 4,

	DidNearableExitRegion = 5,

	DidRangeNearables = 6
}

declare class ESTNotificationGPIOData extends NSObject implements ESTDeviceNotificationProtocol, NSCopying {

	static alloc(): ESTNotificationGPIOData; // inherited from NSObject

	static new(): ESTNotificationGPIOData; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { handlerBlock: (p1: ESTGPIOPortsData) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	fireHandlerWithData(data: NSData): void;

	initWithHandlerBlock(handler: (p1: ESTGPIOPortsData) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	supportedFirmwareVersion(): string;
}

declare class ESTNotificationMotion extends NSObject implements ESTDeviceNotificationProtocol, NSCopying {

	static alloc(): ESTNotificationMotion; // inherited from NSObject

	static new(): ESTNotificationMotion; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { handlerBlock: (p1: boolean) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	fireHandlerWithData(data: NSData): void;

	initWithHandlerBlock(handler: (p1: boolean) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerID(): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	supportedFirmwareVersion(): string;
}

declare class ESTNotificationTransporter extends NSObject {

	static alloc(): ESTNotificationTransporter; // inherited from NSObject

	static new(): ESTNotificationTransporter; // inherited from NSObject

	static sharedTransporter(): ESTNotificationTransporter;

	readonly currentAppGroupIdentifier: string;

	addObserverSelectorForNotification(observer: any, selector: string, notification: ESTNotification): void;

	didRangeNearables(nearables: NSArray<any>): boolean;

	notifyDidEnterIdentifierRegion(identifier: string): void;

	notifyDidEnterRegion(region: CLBeaconRegion): void;

	notifyDidExitIdentifierRegion(identifier: string): void;

	notifyDidExitRegion(region: CLBeaconRegion): void;

	readIdentifierForMonitoringEvents(): string;

	readNearable(): ESTNearable;

	readNearableZoneDescription(): string;

	readRangedNearables(): NSArray<any>;

	removeObserver(observer: any): void;

	saveNearable(nearable: ESTNearable): boolean;

	saveNearableZoneDescription(zone: string): boolean;

	setAppGroupIdentifier(identifier: string): void;
}

declare class ESTOrientationRule extends ESTNearableRule {

	static alloc(): ESTOrientationRule; // inherited from NSObject

	static new(): ESTOrientationRule; // inherited from NSObject

	static orientationEqualsForNearableIdentifier(orientation: ESTNearableOrientation, identifier: string): ESTOrientationRule;

	static orientationEqualsForNearableType(orientation: ESTNearableOrientation, type: ESTNearableType): ESTOrientationRule;

	orientation: ESTNearableOrientation;
}

interface ESTPeripheral extends NSObjectProtocol {

	discoverServicesAndCharacteristicsWithCompletion(completion: (p1: NSError) => void): void;

	initWithPeripheral?(peripheral: CBPeripheral): ESTPeripheral;
}
declare var ESTPeripheral: {

	prototype: ESTPeripheral;
};

declare const enum ESTPeripheralDiscoveryError {

	NoServices = 1000,

	ServicesFailure = 1001,

	CharacteristicsFailure = 1002
}

declare const enum ESTPeripheralFirmwareState {

	Unknown = 0,

	Boot = 1,

	App = 2
}

declare class ESTPeripheralNearable extends NSObject implements ESTPeripheral {

	static alloc(): ESTPeripheralNearable; // inherited from NSObject

	static new(): ESTPeripheralNearable; // inherited from NSObject

	delegate: ESTPeripheralNearableDelegate;

	readonly peripheral: CBPeripheral;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { peripheral: CBPeripheral; }); // inherited from ESTPeripheral

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	discoverServicesAndCharacteristicsWithCompletion(completion: (p1: NSError) => void): void;

	initWithPeripheral(peripheral: CBPeripheral): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	otaCommandReboot(): void;

	otaEraseWithCompletion(completion: (p1: NSError) => void): void;

	otaVerifyWithCompletion(completion: (p1: NSError) => void): void;

	otaWriteFirmwareChunkCompletion(chunk: NSData, completion: (p1: any, p2: NSError) => void): void;

	performNearableOperation(nearableOperation: ESTNearableOperationProtocol): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	readAuthorizationSeedWithCompletion(completion: (p1: any, p2: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	writeAuthorizationSeedCompletion(seed: NSData, completion: (p1: any, p2: NSError) => void): void;

	writeAuthorizationSourceCompletion(seed: NSData, completion: (p1: any, p2: NSError) => void): void;
}

interface ESTPeripheralNearableDelegate extends NSObjectProtocol {

	peripheralDidFailOperationWithError(peripheral: ESTPeripheral, operation: ESTNearableOperationProtocol, error: NSError): void;

	peripheralDidPerformOperationAndReceivedData(peripheral: ESTPeripheral, operation: ESTNearableOperationProtocol, data: NSData): void;
}
declare var ESTPeripheralNearableDelegate: {

	prototype: ESTPeripheralNearableDelegate;
};

declare const enum ESTPeripheralNearableError {

	Unknown = 0,

	InvalidOperation = 1,

	TimeoutReached = 2,

	PacketError = 3
}

interface ESTPeripheralNotificationDelegate extends NSObjectProtocol {

	peripheralDidReceiveNotificationWithData(peripheral: ESTPeripheral, notification: ESTDeviceNotificationProtocol, data: NSData): void;
}
declare var ESTPeripheralNotificationDelegate: {

	prototype: ESTPeripheralNotificationDelegate;
};

declare class ESTPeripheralTypeUtility extends NSObject implements ESTPeripheral {

	static alloc(): ESTPeripheralTypeUtility; // inherited from NSObject

	static new(): ESTPeripheralTypeUtility; // inherited from NSObject

	delegate: ESTPeripheralTypeUtilityDelegate;

	readonly firmwareState: ESTPeripheralFirmwareState;

	notificationDelegate: ESTPeripheralNotificationDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { peripheral: CBPeripheral; }); // inherited from ESTPeripheral

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	discoverServicesAndCharacteristicsWithCompletion(completion: (p1: NSError) => void): void;

	initWithPeripheral(peripheral: CBPeripheral): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performSettingOperation(operation: ESTBeaconOperationProtocol): void;

	registerNotification(notification: ESTDeviceNotificationProtocol): void;

	resetPeripheralToBootWithCompletion(completion: (p1: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	unregisterAllNotifications(): void;
}

interface ESTPeripheralTypeUtilityDelegate extends NSObjectProtocol {

	peripheralDidFailOperationWithError(peripheral: ESTPeripheral, operation: ESTBeaconOperationProtocol, error: NSError): void;

	peripheralDidPerformOperationAndReceivedData(peripheral: ESTPeripheral, operation: ESTBeaconOperationProtocol, data: NSData): void;
}
declare var ESTPeripheralTypeUtilityDelegate: {

	prototype: ESTPeripheralTypeUtilityDelegate;
};

declare const enum ESTPeripheralTypeUtilityError {

	ReadWriteOperationFailed = 0,

	PacketGenerationFailed = 1
}

declare const enum ESTPeripheralTypeUtilityErrorCode {

	Unknown = 0,

	InvalidCRC = 1,

	RegisterIDChanged = 2,

	InvalidChunkIndex = 3,

	InvalidLength = 4,

	InvalidValueSize = 5,

	InvalidValue = 6,

	InvalidRegisterID = 7,

	InvalidOperation = 8,

	TooLowAuthLevel = 9,

	OperationBlocked = 10,

	NoDataReturned = 11,

	WaitingForMore = 12
}

declare class ESTProximityRule extends ESTNearableRule {

	static alloc(): ESTProximityRule; // inherited from NSObject

	static inRangeOfNearableIdentifier(identifier: string): ESTProximityRule;

	static inRangeOfNearableType(type: ESTNearableType): ESTProximityRule;

	static new(): ESTProximityRule; // inherited from NSObject

	static outsideRangeOfNearableIdentifier(identifier: string): ESTProximityRule;

	static outsideRangeOfNearableType(type: ESTNearableType): ESTProximityRule;

	inRange: boolean;
}

declare class ESTRequestAnalyticsTrack extends ESTRequestPostJSON {

	static alloc(): ESTRequestAnalyticsTrack; // inherited from NSObject

	static new(): ESTRequestAnalyticsTrack; // inherited from NSObject

	constructor(o: { events: NSArray<any>; });

	initWithEvents(events: NSArray<any>): this;

	sendRequestWithCompletion(completion: (p1: NSError) => void): void;
}

declare class ESTRequestAssignGPSLocation extends ESTRequestPutJSON {

	static alloc(): ESTRequestAssignGPSLocation; // inherited from NSObject

	static new(): ESTRequestAssignGPSLocation; // inherited from NSObject

	constructor(o: { beacon: CLBeacon; location: CLLocation; });

	constructor(o: { macAddress: string; location: CLLocation; });

	constructor(o: { proximityUUID: NSUUID; major: number; minor: number; });

	initWithBeaconLocation(beacon: CLBeacon, location: CLLocation): this;

	initWithMacAddressLocation(macAddress: string, location: CLLocation): this;

	initWithProximityUUIDMajorMinor(proximityUUID: NSUUID, major: number, minor: number): this;

	sendRequestWithCompletion(completion: (p1: CLLocation, p2: NSError) => void): void;
}

declare const enum ESTRequestAssignGPSLocationError {

	GPSLocationNotAvailable = 0
}

declare class ESTRequestBase extends NSObject implements NSURLConnectionDataDelegate, NSURLConnectionDelegate {

	static alloc(): ESTRequestBase; // inherited from NSObject

	static new(): ESTRequestBase; // inherited from NSObject

	code: number;

	completionBlock: (p1: any, p2: NSError) => void;

	connection: NSURLConnection;

	delegate: ESTRequestBaseDelegate;

	receivedData: NSMutableData;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancelRequest(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connectionCanAuthenticateAgainstProtectionSpace(connection: NSURLConnection, protectionSpace: NSURLProtectionSpace): boolean;

	connectionDidCancelAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidFailWithError(connection: NSURLConnection, error: NSError): void;

	connectionDidFinishLoading(connection: NSURLConnection): void;

	connectionDidReceiveAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidReceiveData(connection: NSURLConnection, data: NSData): void;

	connectionDidReceiveResponse(connection: NSURLConnection, response: NSURLResponse): void;

	connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite(connection: NSURLConnection, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	connectionNeedNewBodyStream(connection: NSURLConnection, request: NSURLRequest): NSInputStream;

	connectionShouldUseCredentialStorage(connection: NSURLConnection): boolean;

	connectionWillCacheResponse(connection: NSURLConnection, cachedResponse: NSCachedURLResponse): NSCachedURLResponse;

	connectionWillSendRequestForAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionWillSendRequestRedirectResponse(connection: NSURLConnection, request: NSURLRequest, response: NSURLResponse): NSURLRequest;

	createRequestWithUrl(url: string): NSMutableURLRequest;

	fireRequest(request: NSMutableURLRequest): void;

	isEqual(object: any): boolean;

	isEqualToRequest(request: ESTRequestBase): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectForKeyInDictionary(aKey: string, dict: NSDictionary<any, any>): any;

	parseError(error: NSError): void;

	parseErrorWithCodeReason(errorCode: ESTRequestBaseError, reason: string): void;

	parseRespondedData(data: any): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendRequest(): void;

	sendRequestWithCompletion(completion: (p1: any, p2: NSError) => void): void;
}

interface ESTRequestBaseDelegate extends NSObjectProtocol {

	requestDidFailLoadingWithError(request: ESTRequestBase, error: NSError): void;

	requestDidFinishLoadingWithResposne(request: ESTRequestBase, response: any): void;
}
declare var ESTRequestBaseDelegate: {

	prototype: ESTRequestBaseDelegate;
};

declare const enum ESTRequestBaseError {

	ConnectionFail = -1,

	NoData = -2,

	BadRequest = 400,

	Unauthorized = 401,

	PaymentRequired = 402,

	Forbidden = 403,

	NotFound = 404,

	InternalServerError = 500
}

declare class ESTRequestBeaconColor extends ESTRequestGetJSON {

	static alloc(): ESTRequestBeaconColor; // inherited from NSObject

	static new(): ESTRequestBeaconColor; // inherited from NSObject

	readonly macAddress: string;

	readonly major: number;

	readonly minor: number;

	readonly proximityUUID: NSUUID;

	constructor(o: { beacon: CLBeacon; });

	constructor(o: { macAddress: string; });

	constructor(o: { proximityUUID: NSUUID; major: number; minor: number; });

	initWithBeacon(beacon: CLBeacon): this;

	initWithMacAddress(macAddress: string): this;

	initWithProximityUUIDMajorMinor(proximityUUID: NSUUID, major: number, minor: number): this;

	sendRequestWithCompletion(completion: (p1: ESTColor, p2: NSError) => void): void;
}

declare const enum ESTRequestBeaconColorError {

	ColorNotAvailable = 0
}

declare class ESTRequestBeaconDetails extends ESTRequestGetJSON {

	static alloc(): ESTRequestBeaconDetails; // inherited from NSObject

	static new(): ESTRequestBeaconDetails; // inherited from NSObject

	readonly beaconUID: string;

	constructor(o: { beacon: CLBeacon; });

	constructor(o: { macAddress: string; });

	constructor(o: { proximityUUID: NSUUID; major: number; minor: number; });

	initWithBeacon(beacon: CLBeacon): this;

	initWithMacAddress(macAddress: string): this;

	initWithProximityUUIDMajorMinor(proximityUUID: NSUUID, major: number, minor: number): this;

	sendRequestWithCompletion(completion: (p1: ESTBeaconVO, p2: NSError) => void): void;
}

declare const enum ESTRequestBeaconDetailsError {

	DetailsNotAvailable = 0
}

declare class ESTRequestBeaconMac extends ESTRequestGetJSON {

	static alloc(): ESTRequestBeaconMac; // inherited from NSObject

	static new(): ESTRequestBeaconMac; // inherited from NSObject

	readonly beaconMajor: number;

	readonly beaconMinor: number;

	readonly beaconProximityUUID: NSUUID;

	constructor(o: { beacon: CLBeacon; });

	constructor(o: { proximityUUID: NSUUID; major: number; minor: number; });

	initWithBeacon(beacon: CLBeacon): this;

	initWithProximityUUIDMajorMinor(proximityUUID: NSUUID, major: number, minor: number): this;

	sendRequestWithCompletion(completion: (p1: string, p2: NSError) => void): void;
}

declare const enum ESTRequestBeaconMacError {

	Unknown = 0
}

declare class ESTRequestCancelPendingSettings extends ESTRequestDelete {

	static alloc(): ESTRequestCancelPendingSettings; // inherited from NSObject

	static new(): ESTRequestCancelPendingSettings; // inherited from NSObject

	readonly macAddress: string;

	constructor(o: { macAddress: string; });

	initWithMacAddress(macAddress: string): this;

	sendRequestWithCompletion(completion: (p1: NSError) => void): void;
}

declare class ESTRequestDelete extends ESTRequestBase {

	static alloc(): ESTRequestDelete; // inherited from NSObject

	static new(): ESTRequestDelete; // inherited from NSObject

	setParamsForRequest(params: any, request: NSMutableURLRequest): void;
}

declare class ESTRequestFirmwareV4 extends ESTRequestGetJSON {

	static alloc(): ESTRequestFirmwareV4; // inherited from NSObject

	static new(): ESTRequestFirmwareV4; // inherited from NSObject

	constructor(o: { publicID: string; });

	initWithPublicID(publicID: string): this;
}

declare class ESTRequestGetBeacons extends ESTRequestGetJSON {

	static alloc(): ESTRequestGetBeacons; // inherited from NSObject

	static new(): ESTRequestGetBeacons; // inherited from NSObject

	sendRequestWithCompletion(completion: (p1: NSArray<ESTBeaconVO>, p2: NSError) => void): void;
}

declare class ESTRequestGetBeaconsDetails extends ESTRequestGetJSON {

	static alloc(): ESTRequestGetBeaconsDetails; // inherited from NSObject

	static new(): ESTRequestGetBeaconsDetails; // inherited from NSObject

	readonly beaconIdentifiers: NSArray<string>;

	readonly fields: ESTBeaconDetailsFields;

	constructor(o: { beacons: NSArray<CLBeacon>; andFields: ESTBeaconDetailsFields; });

	constructor(o: { macAddresses: NSArray<string>; andFields: ESTBeaconDetailsFields; });

	initWithBeaconsAndFields(beacons: NSArray<CLBeacon>, fields: ESTBeaconDetailsFields): this;

	initWithMacAddressesAndFields(macAddresses: NSArray<string>, fields: ESTBeaconDetailsFields): this;

	sendRequestWithCompletion(completion: (p1: NSArray<any>, p2: NSError) => void): void;
}

declare const enum ESTRequestGetBeaconsError {

	Unknown = 0
}

declare class ESTRequestGetBeaconsPublicDetails extends ESTRequestGetJSON {

	static alloc(): ESTRequestGetBeaconsPublicDetails; // inherited from NSObject

	static new(): ESTRequestGetBeaconsPublicDetails; // inherited from NSObject

	readonly beaconIdentifiers: NSArray<string>;

	readonly fields: ESTBeaconPublicDetailsFields;

	constructor(o: { beacons: NSArray<CLBeacon>; andFields: ESTBeaconPublicDetailsFields; });

	constructor(o: { macAddresses: NSArray<string>; andFields: ESTBeaconPublicDetailsFields; });

	initWithBeaconsAndFields(beacons: NSArray<CLBeacon>, fields: ESTBeaconPublicDetailsFields): this;

	initWithMacAddressesAndFields(macAddresses: NSArray<string>, fields: ESTBeaconPublicDetailsFields): this;

	sendRequestWithCompletion(completion: (p1: NSArray<any>, p2: NSError) => void): void;
}

declare class ESTRequestGetDeviceDetails extends ESTRequestGetJSON {

	static alloc(): ESTRequestGetDeviceDetails; // inherited from NSObject

	static new(): ESTRequestGetDeviceDetails; // inherited from NSObject

	constructor(o: { deviceIdentifier: string; });

	initWithDeviceIdentifier(deviceIdentifier: string): this;

	sendRequestWithCompletion(completion: (p1: ESTDeviceDetails, p2: NSError) => void): void;
}

declare class ESTRequestGetDevices extends ESTRequestGetJSON {

	static alloc(): ESTRequestGetDevices; // inherited from NSObject

	static new(): ESTRequestGetDevices; // inherited from NSObject

	constructor(o: { identifiers: NSArray<string>; type: ESTRequestGetDevicesTypeMask; });

	constructor(o: { identifiers: NSArray<string>; type: ESTRequestGetDevicesTypeMask; page: number; });

	initWithIdentifiersType(identifiers: NSArray<string>, deviceType: ESTRequestGetDevicesTypeMask): this;

	initWithIdentifiersTypePage(identifiers: NSArray<string>, deviceType: ESTRequestGetDevicesTypeMask, page: number): this;

	sendRequestWithCompletion(completion: (p1: NSArray<ESTDeviceDetails>, p2: number, p3: number, p4: NSError) => void): void;
}

declare const enum ESTRequestGetDevicesTypeMask {

	Beacon = 1,

	Mirror = 2,

	Sticker = 4,

	All = 7
}

declare class ESTRequestGetJSON extends ESTRequestBase {

	static alloc(): ESTRequestGetJSON; // inherited from NSObject

	static new(): ESTRequestGetJSON; // inherited from NSObject
}

declare class ESTRequestGetNearables extends ESTRequestGetJSON {

	static alloc(): ESTRequestGetNearables; // inherited from NSObject

	static new(): ESTRequestGetNearables; // inherited from NSObject

	sendRequestWithCompletion(completion: (p1: NSArray<ESTNearable>, p2: NSError) => void): void;
}

declare const enum ESTRequestGetNearablesError {

	Unknown = 0
}

declare class ESTRequestGetPendingSettings extends ESTRequestGetJSON {

	static alloc(): ESTRequestGetPendingSettings; // inherited from NSObject

	static new(): ESTRequestGetPendingSettings; // inherited from NSObject

	sendRequestWithCompletion(completion: (p1: NSArray<ESTBeaconUpdateInfo>, p2: NSError) => void): void;
}

declare class ESTRequestGetSettingsHistory extends ESTRequestGetJSON {

	static alloc(): ESTRequestGetSettingsHistory; // inherited from NSObject

	static new(): ESTRequestGetSettingsHistory; // inherited from NSObject

	readonly macAddress: string;

	constructor(o: { macAddress: string; });

	initWithMacAddress(macAddress: string): this;

	sendRequestWithCompletion(completion: (p1: NSArray<ESTBeaconUpdateInfo>, p2: NSError) => void): void;
}

declare class ESTRequestPatchJSON extends ESTRequestBase {

	static alloc(): ESTRequestPatchJSON; // inherited from NSObject

	static new(): ESTRequestPatchJSON; // inherited from NSObject

	setParamsForRequest(params: any, request: NSMutableURLRequest): void;
}

declare class ESTRequestPostFormData extends ESTRequestBase {

	static alloc(): ESTRequestPostFormData; // inherited from NSObject

	static new(): ESTRequestPostFormData; // inherited from NSObject

	setFilePathForRequest(filePath: string, request: NSMutableURLRequest): void;
}

declare class ESTRequestPostJSON extends ESTRequestBase {

	static alloc(): ESTRequestPostJSON; // inherited from NSObject

	static new(): ESTRequestPostJSON; // inherited from NSObject

	setParamsForRequest(params: any, request: NSMutableURLRequest): void;
}

declare class ESTRequestPutJSON extends ESTRequestPostJSON {

	static alloc(): ESTRequestPutJSON; // inherited from NSObject

	static new(): ESTRequestPutJSON; // inherited from NSObject
}

declare class ESTRequestRegisterDevice extends ESTRequestPostJSON {

	static alloc(): ESTRequestRegisterDevice; // inherited from NSObject

	static new(): ESTRequestRegisterDevice; // inherited from NSObject

	readonly deviceToken: NSData;

	constructor(o: { deviceToken: NSData; });

	initWithDeviceToken(deviceToken: NSData): this;

	sendRequestWithCompletion(completion: (p1: NSError) => void): void;
}

declare class ESTRequestV2DeletePendingSettings extends ESTRequestPostJSON {

	static alloc(): ESTRequestV2DeletePendingSettings; // inherited from NSObject

	static new(): ESTRequestV2DeletePendingSettings; // inherited from NSObject

	readonly deviceIdentifiers: NSArray<string>;

	constructor(o: { deviceIdentifiers: NSArray<string>; });

	initWithDeviceIdentifiers(deviceIdentifiers: NSArray<string>): this;
}

declare class ESTRequestV2DevicesUpdate extends ESTRequestGetJSON {

	static alloc(): ESTRequestV2DevicesUpdate; // inherited from NSObject

	static new(): ESTRequestV2DevicesUpdate; // inherited from NSObject

	sendRequestWithCompletion(completion: (p1: NSArray<ESTDeviceUpdateInfo>, p2: NSError) => void): void;
}

declare class ESTRequestV2GetDeviceDetails extends ESTRequestGetJSON {

	static alloc(): ESTRequestV2GetDeviceDetails; // inherited from NSObject

	static new(): ESTRequestV2GetDeviceDetails; // inherited from NSObject

	constructor(o: { deviceIdentifier: string; });

	initWithDeviceIdentifier(deviceIdentifier: string): this;

	sendRequestWithCompletion(completion: (p1: ESTDeviceDetails, p2: NSError) => void): void;
}

declare class ESTRequestV2GetDevices extends ESTRequestGetJSON {

	static alloc(): ESTRequestV2GetDevices; // inherited from NSObject

	static new(): ESTRequestV2GetDevices; // inherited from NSObject

	sendRequestWithCompletion(completion: (p1: NSArray<ESTDeviceDetails>, p2: NSError) => void): void;
}

declare class ESTRequestV2GetDevicesPending extends ESTRequestGetJSON {

	static alloc(): ESTRequestV2GetDevicesPending; // inherited from NSObject

	static new(): ESTRequestV2GetDevicesPending; // inherited from NSObject

	sendRequestWithCompletion(completion: (p1: NSArray<string>, p2: NSError) => void): void;
}

declare class ESTRequestV3GetDeviceOwner extends ESTRequestGetJSON {

	static alloc(): ESTRequestV3GetDeviceOwner; // inherited from NSObject

	static new(): ESTRequestV3GetDeviceOwner; // inherited from NSObject

	constructor(o: { deviceIdentifier: string; });

	initWithDeviceIdentifier(deviceIdentifier: string): this;

	sendRequestWithCompletion(completion: (p1: string, p2: NSError) => void): void;
}

declare class ESTRequestV3GetFirmwares extends ESTRequestGetJSON {

	static alloc(): ESTRequestV3GetFirmwares; // inherited from NSObject

	static new(): ESTRequestV3GetFirmwares; // inherited from NSObject
}

declare class ESTRule extends NSObject {

	static alloc(): ESTRule; // inherited from NSObject

	static new(): ESTRule; // inherited from NSObject

	state: boolean;

	update(): void;
}

declare class ESTSecureBeaconManager extends NSObject {

	static alloc(): ESTSecureBeaconManager; // inherited from NSObject

	static authorizationStatus(): CLAuthorizationStatus;

	static new(): ESTSecureBeaconManager; // inherited from NSObject

	delegate: ESTSecureBeaconManagerDelegate;

	readonly monitoredRegions: NSSet<any>;

	readonly rangedRegions: NSSet<any>;

	requestAlwaysAuthorization(): void;

	requestStateForRegion(region: CLBeaconRegion): void;

	requestWhenInUseAuthorization(): void;

	startMonitoringForRegion(region: CLBeaconRegion): void;

	startRangingBeaconsInRegion(region: CLBeaconRegion): void;

	stopMonitoringForRegion(region: CLBeaconRegion): void;

	stopRangingBeaconsInRegion(region: CLBeaconRegion): void;
}

interface ESTSecureBeaconManagerDelegate extends NSObjectProtocol {

	beaconManagerDidChangeAuthorizationStatus?(manager: any, status: CLAuthorizationStatus): void;

	beaconManagerDidDetermineStateForRegion?(manager: any, state: CLRegionState, region: CLBeaconRegion): void;

	beaconManagerDidEnterRegion?(manager: any, region: CLBeaconRegion): void;

	beaconManagerDidExitRegion?(manager: any, region: CLBeaconRegion): void;

	beaconManagerDidFailWithError?(manager: any, error: NSError): void;

	beaconManagerDidRangeBeaconsInRegion?(manager: any, beacons: NSArray<ESTBeacon>, region: CLBeaconRegion): void;

	beaconManagerDidStartMonitoringForRegion?(manager: any, region: CLBeaconRegion): void;

	beaconManagerMonitoringDidFailForRegionWithError?(manager: any, region: CLBeaconRegion, error: NSError): void;

	beaconManagerRangingBeaconsDidFailForRegionWithError?(manager: any, region: CLBeaconRegion, error: NSError): void;
}
declare var ESTSecureBeaconManagerDelegate: {

	prototype: ESTSecureBeaconManagerDelegate;
};

declare class ESTSettingBase extends NSObject {

	static alloc(): ESTSettingBase; // inherited from NSObject

	static new(): ESTSettingBase; // inherited from NSObject

	device: ESTDeviceConnectable;

	constructor(o: { data: NSData; });

	initWithData(data: NSData): this;

	isDuplicateOfSetting(setting: ESTSettingBase): boolean;
}

declare const enum ESTSettingBaseError {

	DeviceReferenceNotAvailable = 0
}

declare const enum ESTSettingConnectableIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare const enum ESTSettingConnectablePowerError {

	ValueNotAllowed = 1
}

declare class ESTSettingConnectivityInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingConnectivityInterval; // inherited from NSObject

	static new(): ESTSettingConnectivityInterval; // inherited from NSObject

	static validationErrorForValue(interval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(interval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingConnectivityInterval, p2: NSError) => void): void;

	writeValueCompletion(interval: number, completion: (p1: ESTSettingConnectivityInterval, p2: NSError) => void): void;
}

declare class ESTSettingConnectivityPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingConnectivityPower; // inherited from NSObject

	static new(): ESTSettingConnectivityPower; // inherited from NSObject

	static validationErrorForValue(power: ESTConnectablePowerLevel): NSError;

	constructor(o: { value: ESTConnectablePowerLevel; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTConnectablePowerLevel;

	initWithValue(power: ESTConnectablePowerLevel): this;

	readValueWithCompletion(completion: (p1: ESTSettingConnectivityPower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTConnectablePowerLevel, completion: (p1: ESTSettingConnectivityPower, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoApplicationVersion extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingDeviceInfoApplicationVersion; // inherited from NSObject

	static new(): ESTSettingDeviceInfoApplicationVersion; // inherited from NSObject

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(applicationVersion: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoApplicationVersion, p2: NSError) => void): void;
}

declare const enum ESTSettingDeviceInfoApplicationVersionError {

	NilValue = 0,

	EmptyString = 1
}

declare class ESTSettingDeviceInfoBootloaderVersion extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingDeviceInfoBootloaderVersion; // inherited from NSObject

	static new(): ESTSettingDeviceInfoBootloaderVersion; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoBootloaderVersion, p2: NSError) => void): void;
}

declare const enum ESTSettingDeviceInfoBootloaderVersionError {

	NilValue = 0,

	EmptyString = 1
}

declare class ESTSettingDeviceInfoColor extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingDeviceInfoColor; // inherited from NSObject

	static new(): ESTSettingDeviceInfoColor; // inherited from NSObject

	constructor(o: { value: ESTColor; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTColor;

	initWithValue(color: ESTColor): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoColor, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoDevelopmentMode extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingDeviceInfoDevelopmentMode; // inherited from NSObject

	static new(): ESTSettingDeviceInfoDevelopmentMode; // inherited from NSObject

	static validationErrorForValue(developmentMode: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(developmentMode: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoDevelopmentMode, p2: NSError) => void): void;

	writeValueCompletion(developmentMode: boolean, completion: (p1: ESTSettingDeviceInfoDevelopmentMode, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoFirmwareVersion extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingDeviceInfoFirmwareVersion; // inherited from NSObject

	static new(): ESTSettingDeviceInfoFirmwareVersion; // inherited from NSObject

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(version: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoFirmwareVersion, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoGeoLocation extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingDeviceInfoGeoLocation; // inherited from NSObject

	static new(): ESTSettingDeviceInfoGeoLocation; // inherited from NSObject

	static validationErrorForValue(geoLocation: ESTDeviceGeoLocation): NSError;

	constructor(o: { value: ESTDeviceGeoLocation; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTDeviceGeoLocation;

	initWithValue(geoLocation: ESTDeviceGeoLocation): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoGeoLocation, p2: NSError) => void): void;

	writeValueCompletion(geoLocation: ESTDeviceGeoLocation, completion: (p1: ESTSettingDeviceInfoGeoLocation, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoHardwareVersion extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingDeviceInfoHardwareVersion; // inherited from NSObject

	static new(): ESTSettingDeviceInfoHardwareVersion; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoHardwareVersion, p2: NSError) => void): void;
}

declare const enum ESTSettingDeviceInfoHardwareVersionError {

	NilValue = 0,

	EmptyString = 1
}

declare class ESTSettingDeviceInfoIndoorLocationIdentifier extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingDeviceInfoIndoorLocationIdentifier; // inherited from NSObject

	static new(): ESTSettingDeviceInfoIndoorLocationIdentifier; // inherited from NSObject

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(indoorLocationIdentifier: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoIndoorLocationIdentifier, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoIndoorLocationName extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingDeviceInfoIndoorLocationName; // inherited from NSObject

	static new(): ESTSettingDeviceInfoIndoorLocationName; // inherited from NSObject

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(name: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoIndoorLocationName, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoName extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingDeviceInfoName; // inherited from NSObject

	static new(): ESTSettingDeviceInfoName; // inherited from NSObject

	static validationErrorForValue(name: string): NSError;

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(name: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoName, p2: NSError) => void): void;

	writeValueCompletion(name: string, completion: (p1: ESTSettingDeviceInfoName, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoTags extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingDeviceInfoTags; // inherited from NSObject

	static new(): ESTSettingDeviceInfoTags; // inherited from NSObject

	static validationErrorForValue(tags: NSSet<string>): NSError;

	constructor(o: { value: NSSet<string>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): NSSet<string>;

	initWithValue(tags: NSSet<string>): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoTags, p2: NSError) => void): void;

	writeValueCompletion(tags: NSSet<string>, completion: (p1: ESTSettingDeviceInfoTags, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoUTCTime extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingDeviceInfoUTCTime; // inherited from NSObject

	static new(): ESTSettingDeviceInfoUTCTime; // inherited from NSObject

	static validationErrorForValue(UTCTime: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(UTCTime: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoUTCTime, p2: NSError) => void): void;

	writeValueCompletion(UTCTime: number, completion: (p1: ESTSettingDeviceInfoUTCTime, p2: NSError) => void): void;
}

declare class ESTSettingDeviceInfoUptime extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingDeviceInfoUptime; // inherited from NSObject

	static new(): ESTSettingDeviceInfoUptime; // inherited from NSObject

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(uptime: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingDeviceInfoUptime, p2: NSError) => void): void;
}

declare class ESTSettingEddystoneConfigurationServiceEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneConfigurationServiceEnable; // inherited from NSObject

	static new(): ESTSettingEddystoneConfigurationServiceEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(eddystoneConfigurationServiceEnable: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneConfigurationServiceEnable, p2: NSError) => void): void;

	writeValueCompletion(eddystoneConfigurationServiceEnable: boolean, completion: (p1: ESTSettingEddystoneConfigurationServiceEnable, p2: NSError) => void): void;
}

declare class ESTSettingEddystoneEIDEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneEIDEnable; // inherited from NSObject

	static new(): ESTSettingEddystoneEIDEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enable: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneEIDEnable, p2: NSError) => void): void;

	writeValueCompletion(enable: boolean, completion: (p1: ESTSettingEddystoneEIDEnable, p2: NSError) => void): void;
}

declare class ESTSettingEddystoneEIDInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneEIDInterval; // inherited from NSObject

	static new(): ESTSettingEddystoneEIDInterval; // inherited from NSObject

	static validationErrorForValue(interval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(interval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneEIDInterval, p2: NSError) => void): void;

	writeValueCompletion(interval: number, completion: (p1: ESTSettingEddystoneEIDInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneEIDIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare class ESTSettingEddystoneEIDPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneEIDPower; // inherited from NSObject

	static new(): ESTSettingEddystoneEIDPower; // inherited from NSObject

	static validationErrorForValue(power: ESTEddystoneEIDPower): NSError;

	constructor(o: { value: ESTEddystoneEIDPower; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTEddystoneEIDPower;

	initWithValue(power: ESTEddystoneEIDPower): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneEIDPower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTEddystoneEIDPower, completion: (p1: ESTSettingEddystoneEIDPower, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneEIDPowerError {

	ValueNotAllowed = 1
}

declare class ESTSettingEddystoneTLMEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneTLMEnable; // inherited from NSObject

	static new(): ESTSettingEddystoneTLMEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneTLMEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingEddystoneTLMEnable, p2: NSError) => void): void;
}

declare class ESTSettingEddystoneTLMInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneTLMInterval; // inherited from NSObject

	static new(): ESTSettingEddystoneTLMInterval; // inherited from NSObject

	static validationErrorForValue(advertisingInterval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(advertisingInterval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneTLMInterval, p2: NSError) => void): void;

	writeValueCompletion(advertisingInterval: number, completion: (p1: ESTSettingEddystoneTLMInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneTLMIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare class ESTSettingEddystoneTLMPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneTLMPower; // inherited from NSObject

	static new(): ESTSettingEddystoneTLMPower; // inherited from NSObject

	static validationErrorForValue(power: ESTEddystoneTLMPower): NSError;

	constructor(o: { value: ESTEddystoneTLMPower; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTEddystoneTLMPower;

	initWithValue(power: ESTEddystoneTLMPower): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneTLMPower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTEddystoneTLMPower, completion: (p1: ESTSettingEddystoneTLMPower, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneTLMPowerError {

	ValueNotAllowed = 1
}

declare class ESTSettingEddystoneUIDEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneUIDEnable; // inherited from NSObject

	static new(): ESTSettingEddystoneUIDEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneUIDEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingEddystoneUIDEnable, p2: NSError) => void): void;
}

declare class ESTSettingEddystoneUIDInstance extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneUIDInstance; // inherited from NSObject

	static new(): ESTSettingEddystoneUIDInstance; // inherited from NSObject

	static validationErrorForValue(instanceID: string): NSError;

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(instanceID: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneUIDInstance, p2: NSError) => void): void;

	writeValueCompletion(instanceID: string, completion: (p1: ESTSettingEddystoneUIDInstance, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneUIDInstanceError {

	InvalidFormat = 1,

	TooShort = 2,

	TooLong = 3
}

declare class ESTSettingEddystoneUIDInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneUIDInterval; // inherited from NSObject

	static new(): ESTSettingEddystoneUIDInterval; // inherited from NSObject

	static validationErrorForValue(advertisingInterval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(advertisingInterval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneUIDInterval, p2: NSError) => void): void;

	writeValueCompletion(advertisingInterval: number, completion: (p1: ESTSettingEddystoneUIDInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneUIDIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare class ESTSettingEddystoneUIDNamespace extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneUIDNamespace; // inherited from NSObject

	static namespaceHexStringForEddystoneDomain(domain: string): string;

	static new(): ESTSettingEddystoneUIDNamespace; // inherited from NSObject

	static validationErrorForValue(namespaceID: string): NSError;

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(namespaceID: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneUIDNamespace, p2: NSError) => void): void;

	writeValueCompletion(namespaceID: string, completion: (p1: ESTSettingEddystoneUIDNamespace, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneUIDNamespaceError {

	InvalidFormat = 1,

	TooShort = 2,

	TooLong = 3
}

declare class ESTSettingEddystoneUIDPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneUIDPower; // inherited from NSObject

	static new(): ESTSettingEddystoneUIDPower; // inherited from NSObject

	static validationErrorForValue(power: ESTEddystoneUIDPower): NSError;

	constructor(o: { value: ESTEddystoneUIDPower; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTEddystoneUIDPower;

	initWithValue(power: ESTEddystoneUIDPower): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneUIDPower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTEddystoneUIDPower, completion: (p1: ESTSettingEddystoneUIDPower, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneUIDPowerError {

	ValueNotAllowed = 1
}

declare class ESTSettingEddystoneURLData extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneURLData; // inherited from NSObject

	static new(): ESTSettingEddystoneURLData; // inherited from NSObject

	static validationErrorForValue(eddystoneURL: string): NSError;

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(eddystoneURL: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneURLData, p2: NSError) => void): void;

	writeValueCompletion(eddystoneURL: string, completion: (p1: ESTSettingEddystoneURLData, p2: NSError) => void): void;
}

declare class ESTSettingEddystoneURLEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneURLEnable; // inherited from NSObject

	static new(): ESTSettingEddystoneURLEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneURLEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingEddystoneURLEnable, p2: NSError) => void): void;
}

declare class ESTSettingEddystoneURLInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneURLInterval; // inherited from NSObject

	static new(): ESTSettingEddystoneURLInterval; // inherited from NSObject

	static validationErrorForValue(advertisingInterval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(advertisingInterval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneURLInterval, p2: NSError) => void): void;

	writeValueCompletion(advertisingInterval: number, completion: (p1: ESTSettingEddystoneURLInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneURLIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare const enum ESTSettingEddystoneURLNamespaceError {

	DataErrorInvalidURL = 1
}

declare class ESTSettingEddystoneURLPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEddystoneURLPower; // inherited from NSObject

	static new(): ESTSettingEddystoneURLPower; // inherited from NSObject

	static validationErrorForValue(power: ESTEddystoneURLPower): NSError;

	constructor(o: { value: ESTEddystoneURLPower; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTEddystoneURLPower;

	initWithValue(power: ESTEddystoneURLPower): this;

	readValueWithCompletion(completion: (p1: ESTSettingEddystoneURLPower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTEddystoneURLPower, completion: (p1: ESTSettingEddystoneURLPower, p2: NSError) => void): void;
}

declare const enum ESTSettingEddystoneURLPowerError {

	ValueNotAllowed = 1
}

declare class ESTSettingEstimoteLocationEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEstimoteLocationEnable; // inherited from NSObject

	static new(): ESTSettingEstimoteLocationEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingEstimoteLocationEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingEstimoteLocationEnable, p2: NSError) => void): void;
}

declare class ESTSettingEstimoteLocationInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEstimoteLocationInterval; // inherited from NSObject

	static new(): ESTSettingEstimoteLocationInterval; // inherited from NSObject

	static validationErrorForValue(advertisingInterval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(advertisingInterval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingEstimoteLocationInterval, p2: NSError) => void): void;

	writeValueCompletion(advertisingInterval: number, completion: (p1: ESTSettingEstimoteLocationInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingEstimoteLocationIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare class ESTSettingEstimoteLocationPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEstimoteLocationPower; // inherited from NSObject

	static new(): ESTSettingEstimoteLocationPower; // inherited from NSObject

	static validationErrorForValue(power: ESTEstimoteLocationPower): NSError;

	constructor(o: { value: ESTEstimoteLocationPower; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTEstimoteLocationPower;

	initWithValue(power: ESTEstimoteLocationPower): this;

	readValueWithCompletion(completion: (p1: ESTSettingEstimoteLocationPower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTEstimoteLocationPower, completion: (p1: ESTSettingEstimoteLocationPower, p2: NSError) => void): void;
}

declare const enum ESTSettingEstimoteLocationPowerError {

	ValueNotAllowed = 1
}

declare class ESTSettingEstimoteTLMEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEstimoteTLMEnable; // inherited from NSObject

	static new(): ESTSettingEstimoteTLMEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingEstimoteTLMEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingEstimoteTLMEnable, p2: NSError) => void): void;
}

declare class ESTSettingEstimoteTLMInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEstimoteTLMInterval; // inherited from NSObject

	static new(): ESTSettingEstimoteTLMInterval; // inherited from NSObject

	static validationErrorForValue(advertisingInterval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(advertisingInterval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingEstimoteTLMInterval, p2: NSError) => void): void;

	writeValueCompletion(advertisingInterval: number, completion: (p1: ESTSettingEstimoteTLMInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingEstimoteTLMIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare class ESTSettingEstimoteTLMPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingEstimoteTLMPower; // inherited from NSObject

	static new(): ESTSettingEstimoteTLMPower; // inherited from NSObject

	static validationErrorForValue(power: ESTEstimoteTLMPower): NSError;

	constructor(o: { value: ESTEstimoteTLMPower; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTEstimoteTLMPower;

	initWithValue(power: ESTEstimoteTLMPower): this;

	readValueWithCompletion(completion: (p1: ESTSettingEstimoteTLMPower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTEstimoteTLMPower, completion: (p1: ESTSettingEstimoteTLMPower, p2: NSError) => void): void;
}

declare const enum ESTSettingEstimoteTLMPowerError {

	ValueNotAllowed = 1
}

declare class ESTSettingGPIO0StateReflectingOnLEDEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGPIO0StateReflectingOnLEDEnable; // inherited from NSObject

	static new(): ESTSettingGPIO0StateReflectingOnLEDEnable; // inherited from NSObject

	static validationErrorForValue(gpio0StateReflectingOnLEDEnable: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(gpio0StateReflectingOnLEDEnable: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingGPIO0StateReflectingOnLEDEnable, p2: NSError) => void): void;

	writeValueCompletion(gpio0StateReflectingOnLEDEnable: boolean, completion: (p1: ESTSettingGPIO0StateReflectingOnLEDEnable, p2: NSError) => void): void;
}

declare class ESTSettingGPIOConfigPort0 extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGPIOConfigPort0; // inherited from NSObject

	static new(): ESTSettingGPIOConfigPort0; // inherited from NSObject

	static validationErrorForValue(config: ESTGPIOConfig): NSError;

	constructor(o: { value: ESTGPIOConfig; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTGPIOConfig;

	initWithValue(config: ESTGPIOConfig): this;

	readValueWithCompletion(completion: (p1: ESTSettingGPIOConfigPort0, p2: NSError) => void): void;

	writeValueCompletion(config: ESTGPIOConfig, completion: (p1: ESTSettingGPIOConfigPort0, p2: NSError) => void): void;
}

declare class ESTSettingGPIOConfigPort1 extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGPIOConfigPort1; // inherited from NSObject

	static new(): ESTSettingGPIOConfigPort1; // inherited from NSObject

	static validationErrorForValue(config: ESTGPIOConfig): NSError;

	constructor(o: { value: ESTGPIOConfig; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTGPIOConfig;

	initWithValue(config: ESTGPIOConfig): this;

	readValueWithCompletion(completion: (p1: ESTSettingGPIOConfigPort1, p2: NSError) => void): void;

	writeValueCompletion(config: ESTGPIOConfig, completion: (p1: ESTSettingGPIOConfigPort1, p2: NSError) => void): void;
}

declare class ESTSettingGPIONotificationEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGPIONotificationEnable; // inherited from NSObject

	static new(): ESTSettingGPIONotificationEnable; // inherited from NSObject

	static validationErrorForValue(enabled: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingGPIONotificationEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingGPIONotificationEnable, p2: NSError) => void): void;
}

declare class ESTSettingGPIOPortsData extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGPIOPortsData; // inherited from NSObject

	static new(): ESTSettingGPIOPortsData; // inherited from NSObject

	static validationErrorForValue(portsData: ESTGPIOPortsData): NSError;

	constructor(o: { value: ESTGPIOPortsData; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTGPIOPortsData;

	initWithValue(portsData: ESTGPIOPortsData): this;

	readValueWithCompletion(completion: (p1: ESTSettingGPIOPortsData, p2: NSError) => void): void;

	writeValueCompletion(portsData: ESTGPIOPortsData, completion: (p1: ESTSettingGPIOPortsData, p2: NSError) => void): void;
}

declare class ESTSettingGenericAdvertiserData extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGenericAdvertiserData; // inherited from NSObject

	static new(): ESTSettingGenericAdvertiserData; // inherited from NSObject

	static validationErrorForValueAdvertiserID(data: NSData, advertiserID: ESTGenericAdvertiserID): NSError;

	readonly advertiserID: number;

	constructor(o: { data: NSData; advertiserID: ESTGenericAdvertiserID; });

	constructor(o: { value: NSData; advertiserID: ESTGenericAdvertiserID; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): NSData;

	initWithDataAdvertiserID(data: NSData, advertiserID: ESTGenericAdvertiserID): this;

	initWithValueAdvertiserID(genericAdvertiserData: NSData, advertiserID: ESTGenericAdvertiserID): this;

	readValueWithCompletion(completion: (p1: ESTSettingGenericAdvertiserData, p2: NSError) => void): void;

	writeValueCompletion(genericAdvertiserData: NSData, completion: (p1: ESTSettingGenericAdvertiserData, p2: NSError) => void): void;
}

declare const enum ESTSettingGenericAdvertiserDataError {

	CanNotBeNil = 1,

	InvalidAdvertiserID = 2
}

declare class ESTSettingGenericAdvertiserEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGenericAdvertiserEnable; // inherited from NSObject

	static new(): ESTSettingGenericAdvertiserEnable; // inherited from NSObject

	static validationErrorForValueAdvertiserID(enabled: boolean, advertiserID: ESTGenericAdvertiserID): NSError;

	readonly advertiserID: number;

	constructor(o: { data: NSData; advertiserID: ESTGenericAdvertiserID; });

	constructor(o: { value: boolean; advertiserID: ESTGenericAdvertiserID; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithDataAdvertiserID(data: NSData, advertiserID: ESTGenericAdvertiserID): this;

	initWithValueAdvertiserID(genericAdvertiserEnabled: boolean, advertiserID: ESTGenericAdvertiserID): this;

	readValueWithCompletion(completion: (p1: ESTSettingGenericAdvertiserEnable, p2: NSError) => void): void;

	writeValueCompletion(genericAdvertiserEnabled: boolean, completion: (p1: ESTSettingGenericAdvertiserEnable, p2: NSError) => void): void;
}

declare const enum ESTSettingGenericAdvertiserEnableError {

	InvalidAdvertiserID = 1
}

declare class ESTSettingGenericAdvertiserInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGenericAdvertiserInterval; // inherited from NSObject

	static new(): ESTSettingGenericAdvertiserInterval; // inherited from NSObject

	static validationErrorForValueAdvertiserID(interval: number, advertiserID: ESTGenericAdvertiserID): NSError;

	readonly advertiserID: number;

	constructor(o: { data: NSData; advertiserID: ESTGenericAdvertiserID; });

	constructor(o: { value: number; advertiserID: ESTGenericAdvertiserID; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithDataAdvertiserID(data: NSData, advertiserID: ESTGenericAdvertiserID): this;

	initWithValueAdvertiserID(genericAdvertiserInterval: number, advertiserID: ESTGenericAdvertiserID): this;

	readValueWithCompletion(completion: (p1: ESTSettingGenericAdvertiserInterval, p2: NSError) => void): void;

	writeValueCompletion(genericAdvertiserInterval: number, completion: (p1: ESTSettingGenericAdvertiserInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingGenericAdvertiserIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2,

	InvalidAdvertiserID = 3
}

declare class ESTSettingGenericAdvertiserPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingGenericAdvertiserPower; // inherited from NSObject

	static new(): ESTSettingGenericAdvertiserPower; // inherited from NSObject

	static validationErrorForValueAdvertiserID(power: ESTGenericAdvertiserPowerLevel, advertiserID: ESTGenericAdvertiserID): NSError;

	readonly advertiserID: number;

	constructor(o: { data: NSData; advertiserID: ESTGenericAdvertiserID; });

	constructor(o: { value: ESTGenericAdvertiserPowerLevel; advertiserID: ESTGenericAdvertiserID; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTGenericAdvertiserPowerLevel;

	initWithDataAdvertiserID(data: NSData, advertiserID: ESTGenericAdvertiserID): this;

	initWithValueAdvertiserID(genericAdvertiserPower: ESTGenericAdvertiserPowerLevel, advertiserID: ESTGenericAdvertiserID): this;

	readValueWithCompletion(completion: (p1: ESTSettingGenericAdvertiserPower, p2: NSError) => void): void;

	writeValueCompletion(genericAdvertiserPower: ESTGenericAdvertiserPowerLevel, completion: (p1: ESTSettingGenericAdvertiserPower, p2: NSError) => void): void;
}

declare const enum ESTSettingGenericAdvertiserPowerError {

	ValueNotAllowed = 1,

	InvalidAdvertiserID = 2
}

declare class ESTSettingIBeaconEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconEnable; // inherited from NSObject

	static new(): ESTSettingIBeaconEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingIBeaconEnable, p2: NSError) => void): void;
}

declare class ESTSettingIBeaconInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconInterval; // inherited from NSObject

	static new(): ESTSettingIBeaconInterval; // inherited from NSObject

	static validationErrorForValue(advertisingInterval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(advertisingInterval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconInterval, p2: NSError) => void): void;

	writeValueCompletion(advertisingInterval: number, completion: (p1: ESTSettingIBeaconInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingIBeaconIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare class ESTSettingIBeaconMajor extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconMajor; // inherited from NSObject

	static new(): ESTSettingIBeaconMajor; // inherited from NSObject

	static validationErrorForValue(major: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(major: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconMajor, p2: NSError) => void): void;

	writeValueCompletion(value: number, completion: (p1: ESTSettingIBeaconMajor, p2: NSError) => void): void;
}

declare const enum ESTSettingIBeaconMajorError {

	EqualsZero = 1
}

declare class ESTSettingIBeaconMinor extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconMinor; // inherited from NSObject

	static new(): ESTSettingIBeaconMinor; // inherited from NSObject

	static validationErrorForValue(minor: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(minor: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconMinor, p2: NSError) => void): void;

	writeValueCompletion(minor: number, completion: (p1: ESTSettingIBeaconMinor, p2: NSError) => void): void;
}

declare const enum ESTSettingIBeaconMinorError {

	EqualsZero = 1
}

declare class ESTSettingIBeaconMotionUUID extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingIBeaconMotionUUID; // inherited from NSObject

	static motionProximityUUIDForProximityUUID(proximityUUID: NSUUID): NSUUID;

	static new(): ESTSettingIBeaconMotionUUID; // inherited from NSObject

	constructor(o: { value: NSUUID; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): NSUUID;

	initWithValue(motionUUID: NSUUID): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconMotionUUID, p2: NSError) => void): void;
}

declare class ESTSettingIBeaconMotionUUIDEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconMotionUUIDEnable; // inherited from NSObject

	static new(): ESTSettingIBeaconMotionUUIDEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconMotionUUIDEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingIBeaconMotionUUIDEnable, p2: NSError) => void): void;
}

declare class ESTSettingIBeaconNonStrictMode extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconNonStrictMode; // inherited from NSObject

	static new(): ESTSettingIBeaconNonStrictMode; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(nonStrictMode: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconNonStrictMode, p2: NSError) => void): void;

	writeValueCompletion(nonStrictMode: boolean, completion: (p1: ESTSettingIBeaconNonStrictMode, p2: NSError) => void): void;
}

declare class ESTSettingIBeaconPower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconPower; // inherited from NSObject

	static new(): ESTSettingIBeaconPower; // inherited from NSObject

	static validationErrorForValue(power: ESTIBeaconPower): NSError;

	constructor(o: { value: ESTIBeaconPower; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTIBeaconPower;

	initWithValue(power: ESTIBeaconPower): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconPower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTIBeaconPower, completion: (p1: ESTSettingIBeaconPower, p2: NSError) => void): void;
}

declare const enum ESTSettingIBeaconPowerError {

	ValueNotAllowed = 1
}

declare class ESTSettingIBeaconProximityUUID extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconProximityUUID; // inherited from NSObject

	static new(): ESTSettingIBeaconProximityUUID; // inherited from NSObject

	constructor(o: { value: NSUUID; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): NSUUID;

	initWithValue(proximityUUID: NSUUID): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconProximityUUID, p2: NSError) => void): void;

	writeValueCompletion(proximityUUID: NSUUID, completion: (p1: ESTSettingIBeaconProximityUUID, p2: NSError) => void): void;
}

declare const enum ESTSettingIBeaconProximityUUIDError {

	InvalidValue = 1
}

declare class ESTSettingIBeaconSecureUUIDEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconSecureUUIDEnable; // inherited from NSObject

	static new(): ESTSettingIBeaconSecureUUIDEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconSecureUUIDEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingIBeaconSecureUUIDEnable, p2: NSError) => void): void;
}

declare class ESTSettingIBeaconSecureUUIDPeriodScaler extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingIBeaconSecureUUIDPeriodScaler; // inherited from NSObject

	static new(): ESTSettingIBeaconSecureUUIDPeriodScaler; // inherited from NSObject

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(scaler: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingIBeaconSecureUUIDPeriodScaler, p2: NSError) => void): void;

	writeValueCompletion(scaler: number, completion: (p1: ESTSettingIBeaconSecureUUIDPeriodScaler, p2: NSError) => void): void;
}

declare class ESTSettingNearableBroadcastingScheme extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingNearableBroadcastingScheme; // inherited from NSObject

	static new(): ESTSettingNearableBroadcastingScheme; // inherited from NSObject

	static validationErrorForValue(broadcastingScheme: ESTNearableBroadcastingScheme): NSError;

	constructor(o: { value: ESTNearableBroadcastingScheme; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTNearableBroadcastingScheme;

	initWithValue(broadcastingScheme: ESTNearableBroadcastingScheme): this;

	readValueWithCompletion(completion: (p1: ESTSettingNearableBroadcastingScheme, p2: NSError) => void): void;

	writeValueCompletion(broadcastingScheme: ESTNearableBroadcastingScheme, completion: (p1: ESTSettingNearableBroadcastingScheme, p2: NSError) => void): void;
}

declare const enum ESTSettingNearableBroadcastingSchemeError {

	NotAllowed = 1,

	ConvenienceAPIUnsupported = 2
}

declare class ESTSettingNearableEddystoneURL extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingNearableEddystoneURL; // inherited from NSObject

	static new(): ESTSettingNearableEddystoneURL; // inherited from NSObject

	static validationErrorForValue(eddystoneURL: string): NSError;

	constructor(o: { value: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): string;

	initWithValue(eddystoneURL: string): this;

	readValueWithCompletion(completion: (p1: ESTSettingNearableEddystoneURL, p2: NSError) => void): void;

	writeValueCompletion(eddystoneURL: string, completion: (p1: ESTSettingNearableEddystoneURL, p2: NSError) => void): void;
}

declare const enum ESTSettingNearableEddystoneURLError {

	InvalidURL = 1,

	ConvenienceAPIUnsupported = 2
}

declare class ESTSettingNearableInterval extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingNearableInterval; // inherited from NSObject

	static new(): ESTSettingNearableInterval; // inherited from NSObject

	static validationErrorForValue(interval: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(interval: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingNearableInterval, p2: NSError) => void): void;

	writeValueCompletion(interval: number, completion: (p1: ESTSettingNearableInterval, p2: NSError) => void): void;
}

declare const enum ESTSettingNearableIntervalError {

	ValueTooSmall = 1,

	ValueTooBig = 2,

	ConvenienceAPIUnsupported = 3
}

declare class ESTSettingNearablePower extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingNearablePower; // inherited from NSObject

	static new(): ESTSettingNearablePower; // inherited from NSObject

	static validationErrorForValue(Power: ESTNearablePower): NSError;

	constructor(o: { value: ESTNearablePower; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTNearablePower;

	initWithValue(power: ESTNearablePower): this;

	readValueWithCompletion(completion: (p1: ESTSettingNearablePower, p2: NSError) => void): void;

	writeValueCompletion(power: ESTNearablePower, completion: (p1: ESTSettingNearablePower, p2: NSError) => void): void;
}

declare const enum ESTSettingNearablePowerError {

	ValueNotAllowed = 1,

	ConvenienceAPIUnsupported = 2
}

declare class ESTSettingOperation extends NSObject {

	static alloc(): ESTSettingOperation; // inherited from NSObject

	static new(): ESTSettingOperation; // inherited from NSObject

	device: ESTDeviceConnectable;

	status: ESTSettingOperationStatus;

	constructor(o: { type: ESTSettingOperationType; });

	initWithType(type: ESTSettingOperationType): this;

	storageType(): ESTSettingStorageType;

	type(): ESTSettingOperationType;
}

declare const enum ESTSettingOperationStatus {

	InProgress = 0,

	Complete = 1,

	Failed = 2
}

declare const enum ESTSettingOperationType {

	Read = 0,

	Write = 1
}

declare class ESTSettingPowerBatteryLifetime extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingPowerBatteryLifetime; // inherited from NSObject

	static new(): ESTSettingPowerBatteryLifetime; // inherited from NSObject

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(batteryLifetime: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerBatteryLifetime, p2: NSError) => void): void;
}

declare class ESTSettingPowerBatteryPercentage extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingPowerBatteryPercentage; // inherited from NSObject

	static new(): ESTSettingPowerBatteryPercentage; // inherited from NSObject

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(batteryPercentage: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerBatteryPercentage, p2: NSError) => void): void;
}

declare class ESTSettingPowerBatteryVoltage extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingPowerBatteryVoltage; // inherited from NSObject

	static new(): ESTSettingPowerBatteryVoltage; // inherited from NSObject

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(voltage: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerBatteryVoltage, p2: NSError) => void): void;
}

declare class ESTSettingPowerDarkToSleepEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingPowerDarkToSleepEnable; // inherited from NSObject

	static new(): ESTSettingPowerDarkToSleepEnable; // inherited from NSObject

	static validationErrorForValue(enabled: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerDarkToSleepEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingPowerDarkToSleepEnable, p2: NSError) => void): void;
}

declare class ESTSettingPowerFlipToSleepEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingPowerFlipToSleepEnable; // inherited from NSObject

	static new(): ESTSettingPowerFlipToSleepEnable; // inherited from NSObject

	static validationErrorForValue(enabled: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerFlipToSleepEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingPowerFlipToSleepEnable, p2: NSError) => void): void;
}

declare class ESTSettingPowerMotionOnlyBroadcastingDelay extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingPowerMotionOnlyBroadcastingDelay; // inherited from NSObject

	static new(): ESTSettingPowerMotionOnlyBroadcastingDelay; // inherited from NSObject

	static validationErrorForValue(motionOnlyBroadcastingDelay: number): NSError;

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(motionOnlyBroadcastingDelay: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerMotionOnlyBroadcastingDelay, p2: NSError) => void): void;

	writeValueCompletion(motionOnlyBroadcastingDelay: number, completion: (p1: ESTSettingPowerMotionOnlyBroadcastingDelay, p2: NSError) => void): void;
}

declare const enum ESTSettingPowerMotionOnlyBroadcastingDelayError {

	ValueTooSmall = 1,

	ValueTooBig = 2
}

declare class ESTSettingPowerMotionOnlyBroadcastingEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingPowerMotionOnlyBroadcastingEnable; // inherited from NSObject

	static new(): ESTSettingPowerMotionOnlyBroadcastingEnable; // inherited from NSObject

	static validationErrorForValue(enabled: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerMotionOnlyBroadcastingEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingPowerMotionOnlyBroadcastingEnable, p2: NSError) => void): void;
}

declare class ESTSettingPowerScheduledAdvertisingEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingPowerScheduledAdvertisingEnable; // inherited from NSObject

	static new(): ESTSettingPowerScheduledAdvertisingEnable; // inherited from NSObject

	static validationErrorForValue(enable: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enable: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerScheduledAdvertisingEnable, p2: NSError) => void): void;

	writeValueCompletion(enable: boolean, completion: (p1: ESTSettingPowerScheduledAdvertisingEnable, p2: NSError) => void): void;
}

declare class ESTSettingPowerScheduledAdvertisingPeriod extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingPowerScheduledAdvertisingPeriod; // inherited from NSObject

	static new(): ESTSettingPowerScheduledAdvertisingPeriod; // inherited from NSObject

	static validationErrorForValue(period: ESTTimePeriod): NSError;

	constructor(o: { value: ESTTimePeriod; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): ESTTimePeriod;

	initWithValue(period: ESTTimePeriod): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerScheduledAdvertisingPeriod, p2: NSError) => void): void;

	writeValueCompletion(period: ESTTimePeriod, completion: (p1: ESTSettingPowerScheduledAdvertisingPeriod, p2: NSError) => void): void;
}

declare const enum ESTSettingPowerScheduledAdvertisingPeriodError {

	StartTimeTooBig = 1,

	EndTimeTooBig = 2
}

declare class ESTSettingPowerSmartPowerModeEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingPowerSmartPowerModeEnable; // inherited from NSObject

	static new(): ESTSettingPowerSmartPowerModeEnable; // inherited from NSObject

	static validationErrorForValue(smartPowerModeEnable: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(smartPowerModeEnable: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingPowerSmartPowerModeEnable, p2: NSError) => void): void;

	writeValueCompletion(smartPowerModeEnable: boolean, completion: (p1: ESTSettingPowerSmartPowerModeEnable, p2: NSError) => void): void;
}

interface ESTSettingProtocol extends NSCopying, NSObjectProtocol {

	fireFailureBlockWithError(error: NSError): void;

	fireSuccessBlockWithData(result: NSData): void;

	getValue(): any;
}
declare var ESTSettingProtocol: {

	prototype: ESTSettingProtocol;
};

declare class ESTSettingReadOnly extends ESTSettingBase {

	static alloc(): ESTSettingReadOnly; // inherited from NSObject

	static new(): ESTSettingReadOnly; // inherited from NSObject

	readValueWithCompletion(completion: (p1: ESTSettingBase, p2: NSError) => void): void;
}

declare class ESTSettingReadWrite extends ESTSettingReadOnly {

	static alloc(): ESTSettingReadWrite; // inherited from NSObject

	static new(): ESTSettingReadWrite; // inherited from NSObject

	writeValueCompletion(value: any, completion: (p1: ESTSettingBase, p2: NSError) => void): void;
}

declare class ESTSettingSensorsAmbientLight extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingSensorsAmbientLight; // inherited from NSObject

	static new(): ESTSettingSensorsAmbientLight; // inherited from NSObject

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(ambientLight: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingSensorsAmbientLight, p2: NSError) => void): void;
}

declare class ESTSettingSensorsMotionNotificationEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingSensorsMotionNotificationEnable; // inherited from NSObject

	static new(): ESTSettingSensorsMotionNotificationEnable; // inherited from NSObject

	static validationErrorForValue(enabled: boolean): NSError;

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(enabled: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingSensorsMotionNotificationEnable, p2: NSError) => void): void;

	writeValueCompletion(enabled: boolean, completion: (p1: ESTSettingSensorsMotionNotificationEnable, p2: NSError) => void): void;
}

declare class ESTSettingSensorsPressure extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingSensorsPressure; // inherited from NSObject

	static new(): ESTSettingSensorsPressure; // inherited from NSObject

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	initWithValue(pressure: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingSensorsPressure, p2: NSError) => void): void;
}

declare class ESTSettingSensorsTemperature extends ESTSettingReadOnly implements NSCopying {

	static alloc(): ESTSettingSensorsTemperature; // inherited from NSObject

	static new(): ESTSettingSensorsTemperature; // inherited from NSObject

	constructor(o: { value: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): number;

	getValueInFahrenheit(): number;

	initWithValue(temperature: number): this;

	readValueWithCompletion(completion: (p1: ESTSettingSensorsTemperature, p2: NSError) => void): void;
}

declare class ESTSettingShakeToConnectEnable extends ESTSettingReadWrite implements NSCopying {

	static alloc(): ESTSettingShakeToConnectEnable; // inherited from NSObject

	static new(): ESTSettingShakeToConnectEnable; // inherited from NSObject

	constructor(o: { value: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getValue(): boolean;

	initWithValue(shakeToConnectEnable: boolean): this;

	readValueWithCompletion(completion: (p1: ESTSettingShakeToConnectEnable, p2: NSError) => void): void;

	writeValueCompletion(shakeToConnectEnable: boolean, completion: (p1: ESTSettingShakeToConnectEnable, p2: NSError) => void): void;
}

declare const enum ESTSettingStorageType {

	DeviceCloud = 0,

	CloudOnly = 1,

	DeviceOnly = 2
}

declare class ESTSettingsConnectivity extends NSObject {

	static alloc(): ESTSettingsConnectivity; // inherited from NSObject

	static new(): ESTSettingsConnectivity; // inherited from NSObject

	readonly interval: ESTSettingConnectivityInterval;

	readonly power: ESTSettingConnectivityPower;

	readonly shakeToConnectEnable: ESTSettingShakeToConnectEnable;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsDeviceInfo extends NSObject {

	static alloc(): ESTSettingsDeviceInfo; // inherited from NSObject

	static new(): ESTSettingsDeviceInfo; // inherited from NSObject

	readonly color: ESTSettingDeviceInfoColor;

	readonly developmentMode: ESTSettingDeviceInfoDevelopmentMode;

	readonly firmwareVersion: ESTSettingDeviceInfoFirmwareVersion;

	readonly geoLocation: ESTSettingDeviceInfoGeoLocation;

	readonly hardwareVersion: ESTSettingDeviceInfoHardwareVersion;

	readonly indoorLocationIdentifier: ESTSettingDeviceInfoIndoorLocationIdentifier;

	readonly indoorLocationName: ESTSettingDeviceInfoIndoorLocationName;

	readonly name: ESTSettingDeviceInfoName;

	readonly tags: ESTSettingDeviceInfoTags;

	readonly uptime: ESTSettingDeviceInfoUptime;

	readonly utcTime: ESTSettingDeviceInfoUTCTime;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsEddystoneConfigurationService extends NSObject {

	static alloc(): ESTSettingsEddystoneConfigurationService; // inherited from NSObject

	static new(): ESTSettingsEddystoneConfigurationService; // inherited from NSObject

	readonly enabled: ESTSettingEddystoneConfigurationServiceEnable;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsEddystoneEID extends NSObject {

	static alloc(): ESTSettingsEddystoneEID; // inherited from NSObject

	static new(): ESTSettingsEddystoneEID; // inherited from NSObject

	readonly enable: ESTSettingEddystoneEIDEnable;

	readonly interval: ESTSettingEddystoneEIDInterval;

	readonly power: ESTSettingEddystoneEIDPower;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsEddystoneTLM extends NSObject {

	static alloc(): ESTSettingsEddystoneTLM; // inherited from NSObject

	static new(): ESTSettingsEddystoneTLM; // inherited from NSObject

	readonly enable: ESTSettingEddystoneTLMEnable;

	readonly interval: ESTSettingEddystoneTLMInterval;

	readonly power: ESTSettingEddystoneTLMPower;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsEddystoneUID extends NSObject {

	static alloc(): ESTSettingsEddystoneUID; // inherited from NSObject

	static new(): ESTSettingsEddystoneUID; // inherited from NSObject

	readonly enable: ESTSettingEddystoneUIDEnable;

	readonly instanceID: ESTSettingEddystoneUIDInstance;

	readonly interval: ESTSettingEddystoneUIDInterval;

	readonly namespaceID: ESTSettingEddystoneUIDNamespace;

	readonly power: ESTSettingEddystoneUIDPower;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsEddystoneURL extends NSObject {

	static alloc(): ESTSettingsEddystoneURL; // inherited from NSObject

	static new(): ESTSettingsEddystoneURL; // inherited from NSObject

	readonly URLData: ESTSettingEddystoneURLData;

	readonly enable: ESTSettingEddystoneURLEnable;

	readonly interval: ESTSettingEddystoneURLInterval;

	readonly power: ESTSettingEddystoneURLPower;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsEstimoteLocation extends NSObject {

	static alloc(): ESTSettingsEstimoteLocation; // inherited from NSObject

	static new(): ESTSettingsEstimoteLocation; // inherited from NSObject

	readonly enable: ESTSettingEstimoteLocationEnable;

	readonly interval: ESTSettingEstimoteLocationInterval;

	readonly power: ESTSettingEstimoteLocationPower;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsEstimoteTLM extends NSObject {

	static alloc(): ESTSettingsEstimoteTLM; // inherited from NSObject

	static new(): ESTSettingsEstimoteTLM; // inherited from NSObject

	readonly enable: ESTSettingEstimoteTLMEnable;

	readonly interval: ESTSettingEstimoteTLMInterval;

	readonly power: ESTSettingEstimoteTLMPower;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsGPIO extends NSObject {

	static alloc(): ESTSettingsGPIO; // inherited from NSObject

	static new(): ESTSettingsGPIO; // inherited from NSObject

	readonly configPort0: ESTSettingGPIOConfigPort0;

	readonly configPort1: ESTSettingGPIOConfigPort1;

	readonly gpio0StateReflectingOnLEDEnable: ESTSettingGPIO0StateReflectingOnLEDEnable;

	readonly notificationEnable: ESTSettingGPIONotificationEnable;

	readonly portsData: ESTSettingGPIOPortsData;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsIBeacon extends NSObject {

	static alloc(): ESTSettingsIBeacon; // inherited from NSObject

	static new(): ESTSettingsIBeacon; // inherited from NSObject

	readonly enable: ESTSettingIBeaconEnable;

	readonly interval: ESTSettingIBeaconInterval;

	readonly major: ESTSettingIBeaconMajor;

	readonly minor: ESTSettingIBeaconMinor;

	readonly motionUUID: ESTSettingIBeaconMotionUUID;

	readonly motionUUIDEnable: ESTSettingIBeaconMotionUUIDEnable;

	readonly nonStrictModeEnable: ESTSettingIBeaconNonStrictMode;

	readonly power: ESTSettingIBeaconPower;

	readonly proximityUUID: ESTSettingIBeaconProximityUUID;

	readonly secureUUIDEnable: ESTSettingIBeaconSecureUUIDEnable;

	readonly secureUUIDPeriodScaler: ESTSettingIBeaconSecureUUIDPeriodScaler;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsPower extends NSObject {

	static alloc(): ESTSettingsPower; // inherited from NSObject

	static new(): ESTSettingsPower; // inherited from NSObject

	readonly batteryLifetime: ESTSettingPowerBatteryLifetime;

	readonly batteryPercentage: ESTSettingPowerBatteryPercentage;

	readonly batteryVoltage: ESTSettingPowerBatteryVoltage;

	readonly darkToSleepEnable: ESTSettingPowerDarkToSleepEnable;

	readonly flipToSleepEnable: ESTSettingPowerFlipToSleepEnable;

	readonly motionOnlyBroadcastingDelay: ESTSettingPowerMotionOnlyBroadcastingDelay;

	readonly motionOnlyBroadcastingEnable: ESTSettingPowerMotionOnlyBroadcastingEnable;

	readonly scheduledAdvertisingEnable: ESTSettingPowerScheduledAdvertisingEnable;

	readonly scheduledAdvertisingPeriod: ESTSettingPowerScheduledAdvertisingPeriod;

	readonly smartPowerModeEnable: ESTSettingPowerSmartPowerModeEnable;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSettingsSensors extends NSObject {

	static alloc(): ESTSettingsSensors; // inherited from NSObject

	static new(): ESTSettingsSensors; // inherited from NSObject

	readonly ambientLight: ESTSettingSensorsAmbientLight;

	readonly motionNotificationEnable: ESTSettingSensorsMotionNotificationEnable;

	readonly pressure: ESTSettingSensorsPressure;

	readonly temperature: ESTSettingSensorsTemperature;

	constructor(o: { settingsCollection: ESTDeviceSettingsCollection; });

	initWithSettingsCollection(settingsCollection: ESTDeviceSettingsCollection): this;
}

declare class ESTSimulatedNearableManager extends ESTNearableManager implements ESTNearableManagerDelegate {

	static alloc(): ESTSimulatedNearableManager; // inherited from NSObject

	static new(): ESTSimulatedNearableManager; // inherited from NSObject

	readonly nearables: NSMutableArray<ESTNearable>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { delegate: ESTNearableManagerDelegate; });

	constructor(o: { delegate: ESTNearableManagerDelegate; pathForJSON: string; });

	addNearableToSimulationWithTypeZoneRssi(identifier: string, type: ESTNearableType, zone: ESTNearableZone, rssi: number): void;

	addNearablesToSimulationWithPath(path: string): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	generateRandomNearableAndAddToSimulator(add: boolean): ESTNearable;

	initWithDelegate(delegate: ESTNearableManagerDelegate): this;

	initWithDelegatePathForJSON(delegate: ESTNearableManagerDelegate, path: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	nearableManagerDidEnterIdentifierRegion(manager: ESTNearableManager, identifier: string): void;

	nearableManagerDidEnterTypeRegion(manager: ESTNearableManager, type: ESTNearableType): void;

	nearableManagerDidExitIdentifierRegion(manager: ESTNearableManager, identifier: string): void;

	nearableManagerDidExitTypeRegion(manager: ESTNearableManager, type: ESTNearableType): void;

	nearableManagerDidRangeNearable(manager: ESTNearableManager, nearable: ESTNearable): void;

	nearableManagerDidRangeNearablesWithType(manager: ESTNearableManager, nearables: NSArray<ESTNearable>, type: ESTNearableType): void;

	nearableManagerMonitoringFailedWithError(manager: ESTNearableManager, error: NSError): void;

	nearableManagerRangingFailedWithError(manager: ESTNearableManager, error: NSError): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	simulateDidEnterRegionForNearable(nearable: ESTNearable): void;

	simulateDidExitRegionForNearable(nearable: ESTNearable): void;

	simulateZoneForNearable(zone: ESTNearableZone, identifier: string): void;
}

declare class ESTStorageManager extends NSObject {

	static alloc(): ESTStorageManager; // inherited from NSObject

	static new(): ESTStorageManager; // inherited from NSObject

	readonly storageDictionary: NSDictionary<any, any>;

	constructor(o: { deviceIdentifier: string; peripheral: ESTPeripheralTypeUtility; });

	initWithDeviceIdentifierPeripheral(deviceIdentifier: string, peripheral: ESTPeripheralTypeUtility): this;

	readStorageDictionaryWithCompletion(completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;

	saveStorageDictionaryWithCompletion(dictionary: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
}

declare class ESTTelemetryInfo extends NSObject {

	static alloc(): ESTTelemetryInfo; // inherited from NSObject

	static new(): ESTTelemetryInfo; // inherited from NSObject

	readonly shortIdentifier: string;

	constructor(o: { shortIdentifier: string; });

	initWithShortIdentifier(shortIdentifier: string): this;
}

declare class ESTTelemetryInfoAmbientLight extends ESTTelemetryInfo {

	static alloc(): ESTTelemetryInfoAmbientLight; // inherited from NSObject

	static new(): ESTTelemetryInfoAmbientLight; // inherited from NSObject

	readonly ambientLightLevelInLux: number;

	constructor(o: { ambientLightLevelInLux: number; shortIdentifier: string; });

	initWithAmbientLightLevelInLuxShortIdentifier(ambientLightLevelInLux: number, shortIdentifier: string): this;
}

declare class ESTTelemetryInfoGPIO extends ESTTelemetryInfo {

	static alloc(): ESTTelemetryInfoGPIO; // inherited from NSObject

	static new(): ESTTelemetryInfoGPIO; // inherited from NSObject

	readonly portsData: ESTGPIOPortsData;

	constructor(o: { GPIOPortsData: ESTGPIOPortsData; shortIdentifier: string; });

	initWithGPIOPortsDataShortIdentifier(portsData: ESTGPIOPortsData, shortIdentifier: string): this;
}

declare class ESTTelemetryInfoMagnetometer extends ESTTelemetryInfo {

	static alloc(): ESTTelemetryInfoMagnetometer; // inherited from NSObject

	static new(): ESTTelemetryInfoMagnetometer; // inherited from NSObject

	readonly normalizedMagneticFieldX: number;

	readonly normalizedMagneticFieldY: number;

	readonly normalizedMagneticFieldZ: number;

	constructor(o: { normalizedMagneticFieldX: number; normalizedMagneticFieldY: number; normalizedMagneticFieldZ: number; shortIdentifier: string; });

	initWithNormalizedMagneticFieldXNormalizedMagneticFieldYNormalizedMagneticFieldZShortIdentifier(fieldX: number, fieldY: number, fieldZ: number, shortIdentifier: string): this;
}

declare class ESTTelemetryInfoMotion extends ESTTelemetryInfo {

	static alloc(): ESTTelemetryInfoMotion; // inherited from NSObject

	static new(): ESTTelemetryInfoMotion; // inherited from NSObject

	readonly accelerationX: number;

	readonly accelerationY: number;

	readonly accelerationZ: number;

	readonly currentMotionStateDurationInSeconds: number;

	readonly motionState: number;

	readonly previousMotionStateDurationInSeconds: number;

	constructor(o: { accelerationX: number; accelerationY: number; accelerationZ: number; previousMotionStateDurationInSeconds: number; currentMotionStateDurationInSeconds: number; motionState: number; shortIdentifier: string; });

	initWithAccelerationXAccelerationYAccelerationZPreviousMotionStateDurationInSecondsCurrentMotionStateDurationInSecondsMotionStateShortIdentifier(accelerationX: number, accelerationY: number, accelerationZ: number, previousMotionStateDurationInSeconds: number, currentMotionStateDurationInSeconds: number, motionState: number, shortIdentifier: string): this;
}

declare class ESTTelemetryInfoPressure extends ESTTelemetryInfo {

	static alloc(): ESTTelemetryInfoPressure; // inherited from NSObject

	static new(): ESTTelemetryInfoPressure; // inherited from NSObject

	readonly pressureInPascals: number;

	constructor(o: { pressureInPascals: number; shortIdentifier: string; });

	initWithPressureInPascalsShortIdentifier(pressureInPascals: number, shortIdentifier: string): this;
}

declare class ESTTelemetryInfoSystemStatus extends ESTTelemetryInfo {

	static alloc(): ESTTelemetryInfoSystemStatus; // inherited from NSObject

	static new(): ESTTelemetryInfoSystemStatus; // inherited from NSObject

	readonly batteryVoltageInMillivolts: number;

	readonly uptimeInSeconds: number;

	constructor(o: { batteryVoltageInMillivolts: number; uptimeInSeconds: number; shortIdentifier: string; });

	initWithBatteryVoltageInMillivoltsUptimeInSecondsShortIdentifier(batteryVoltageInMillivolts: number, uptimeInSeconds: number, shortIdentifier: string): this;
}

declare class ESTTelemetryInfoTemperature extends ESTTelemetryInfo {

	static alloc(): ESTTelemetryInfoTemperature; // inherited from NSObject

	static new(): ESTTelemetryInfoTemperature; // inherited from NSObject

	readonly temperatureInCelsius: number;

	constructor(o: { temperature: number; shortIdentifier: string; });

	initWithTemperatureShortIdentifier(temperature: number, shortIdentifier: string): this;
}

declare class ESTTelemetryNotificationAmbientLight extends NSObject implements ESTTelemetryNotificationProtocol {

	static alloc(): ESTTelemetryNotificationAmbientLight; // inherited from NSObject

	static new(): ESTTelemetryNotificationAmbientLight; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { notificationBlock: (p1: ESTTelemetryInfoAmbientLight) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireNotificationBlockWithTelemetryInfo(info: ESTTelemetryInfo): void;

	getInfoClass(): typeof NSObject;

	initWithNotificationBlock(block: (p1: ESTTelemetryInfoAmbientLight) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTTelemetryNotificationGPIO extends NSObject implements ESTTelemetryNotificationProtocol {

	static alloc(): ESTTelemetryNotificationGPIO; // inherited from NSObject

	static new(): ESTTelemetryNotificationGPIO; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { notificationBlock: (p1: ESTTelemetryInfoGPIO) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireNotificationBlockWithTelemetryInfo(info: ESTTelemetryInfo): void;

	getInfoClass(): typeof NSObject;

	initWithNotificationBlock(notificationBlock: (p1: ESTTelemetryInfoGPIO) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTTelemetryNotificationMagnetometer extends NSObject implements ESTTelemetryNotificationProtocol {

	static alloc(): ESTTelemetryNotificationMagnetometer; // inherited from NSObject

	static new(): ESTTelemetryNotificationMagnetometer; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { notificationBlock: (p1: ESTTelemetryInfoMagnetometer) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireNotificationBlockWithTelemetryInfo(info: ESTTelemetryInfo): void;

	getInfoClass(): typeof NSObject;

	initWithNotificationBlock(block: (p1: ESTTelemetryInfoMagnetometer) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTTelemetryNotificationMotion extends NSObject implements ESTTelemetryNotificationProtocol {

	static alloc(): ESTTelemetryNotificationMotion; // inherited from NSObject

	static new(): ESTTelemetryNotificationMotion; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { notificationBlock: (p1: ESTTelemetryInfoMotion) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireNotificationBlockWithTelemetryInfo(info: ESTTelemetryInfo): void;

	getInfoClass(): typeof NSObject;

	initWithNotificationBlock(block: (p1: ESTTelemetryInfoMotion) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTTelemetryNotificationPressure extends NSObject implements ESTTelemetryNotificationProtocol {

	static alloc(): ESTTelemetryNotificationPressure; // inherited from NSObject

	static new(): ESTTelemetryNotificationPressure; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { notificationBlock: (p1: ESTTelemetryInfoPressure) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireNotificationBlockWithTelemetryInfo(info: ESTTelemetryInfo): void;

	getInfoClass(): typeof NSObject;

	initWithNotificationBlock(block: (p1: ESTTelemetryInfoPressure) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface ESTTelemetryNotificationProtocol extends NSObjectProtocol {

	fireNotificationBlockWithTelemetryInfo(info: ESTTelemetryInfo): void;

	getInfoClass(): typeof NSObject;
}
declare var ESTTelemetryNotificationProtocol: {

	prototype: ESTTelemetryNotificationProtocol;
};

declare class ESTTelemetryNotificationSystemStatus extends NSObject implements ESTTelemetryNotificationProtocol {

	static alloc(): ESTTelemetryNotificationSystemStatus; // inherited from NSObject

	static new(): ESTTelemetryNotificationSystemStatus; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { notificationBlock: (p1: ESTTelemetryInfoSystemStatus) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireNotificationBlockWithTelemetryInfo(info: ESTTelemetryInfo): void;

	getInfoClass(): typeof NSObject;

	initWithNotificationBlock(block: (p1: ESTTelemetryInfoSystemStatus) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTTelemetryNotificationTemperature extends NSObject implements ESTTelemetryNotificationProtocol {

	static alloc(): ESTTelemetryNotificationTemperature; // inherited from NSObject

	static new(): ESTTelemetryNotificationTemperature; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { notificationBlock: (p1: ESTTelemetryInfoTemperature) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fireNotificationBlockWithTelemetryInfo(info: ESTTelemetryInfo): void;

	getInfoClass(): typeof NSObject;

	initWithNotificationBlock(block: (p1: ESTTelemetryInfoTemperature) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ESTTemperatureRule extends ESTNearableRule {

	static alloc(): ESTTemperatureRule; // inherited from NSObject

	static new(): ESTTemperatureRule; // inherited from NSObject

	static temperatureBetween(minValue: number): ESTTemperatureRule;

	static temperatureGraterThanForNearableIdentifier(value: number, identifier: string): ESTTemperatureRule;

	static temperatureGraterThanForNearableType(value: number, type: ESTNearableType): ESTTemperatureRule;

	static temperatureLowerThanForNearableIdentifier(value: number, identifier: string): ESTTemperatureRule;

	static temperatureLowerThanForNearableType(value: number, type: ESTNearableType): ESTTemperatureRule;

	maxValue: number;

	minValue: number;
}

declare class ESTTime extends NSObject implements NSCopying {

	static alloc(): ESTTime; // inherited from NSObject

	static new(): ESTTime; // inherited from NSObject

	readonly secondsSinceMidnight: number;

	constructor(o: { hours: number; minutes: number; });

	constructor(o: { hours: number; minutes: number; seconds: number; });

	constructor(o: { secondsSinceMidnight: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithHoursMinutes(hours: number, minutes: number): this;

	initWithHoursMinutesSeconds(hours: number, minutes: number, seconds: number): this;

	initWithSecondsSinceMidnight(seconds: number): this;
}

declare class ESTTimePeriod extends NSObject implements NSCopying {

	static alloc(): ESTTimePeriod; // inherited from NSObject

	static new(): ESTTimePeriod; // inherited from NSObject

	readonly endTime: ESTTime;

	readonly startTime: ESTTime;

	constructor(o: { startTime: ESTTime; endTime: ESTTime; });

	constructor(o: { startTimeSeconds: number; endTimeSeconds: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithStartTimeEndTime(startTime: ESTTime, endTime: ESTTime): this;

	initWithStartTimeSecondsEndTimeSeconds(startTimeSeconds: number, endTimeSeconds: number): this;
}

declare class ESTTrigger extends NSObject {

	static alloc(): ESTTrigger; // inherited from NSObject

	static new(): ESTTrigger; // inherited from NSObject

	delegate: ESTTriggerDelegate;

	readonly identifier: string;

	readonly rules: NSArray<ESTRule>;

	readonly state: boolean;

	constructor(o: { rules: NSArray<ESTRule>; identifier: string; });

	initWithRulesIdentifier(rules: NSArray<ESTRule>, identifier: string): this;
}

interface ESTTriggerDelegate extends NSObjectProtocol {

	triggerDidChangeState?(trigger: ESTTrigger): void;
}
declare var ESTTriggerDelegate: {

	prototype: ESTTriggerDelegate;
};

declare class ESTTriggerManager extends NSObject implements ESTTriggerDelegate {

	static alloc(): ESTTriggerManager; // inherited from NSObject

	static new(): ESTTriggerManager; // inherited from NSObject

	delegate: ESTTriggerManagerDelegate;

	readonly triggers: NSArray<ESTTrigger>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startMonitoringForTrigger(trigger: ESTTrigger): void;

	stateForTriggerWithIdentifier(identifier: string): boolean;

	stopMonitoringForTriggerWithIdentifier(identifier: string): void;

	triggerDidChangeState(trigger: ESTTrigger): void;
}

interface ESTTriggerManagerDelegate extends NSObjectProtocol {

	triggerManagerTriggerChangedState?(manager: ESTTriggerManager, trigger: ESTTrigger): void;
}
declare var ESTTriggerManagerDelegate: {

	prototype: ESTTriggerManagerDelegate;
};

declare class ESTUtilityManager extends NSObject {

	static alloc(): ESTUtilityManager; // inherited from NSObject

	static new(): ESTUtilityManager; // inherited from NSObject

	delegate: ESTUtilityManagerDelegate;

	readonly state: ESTUtilityManagerState;

	startEstimoteBeaconDiscovery(): void;

	startEstimoteBeaconDiscoveryWithUpdateInterval(interval: number): void;

	startEstimoteNearableDiscovery(): void;

	startEstimoteNearableDiscoveryWithUpdateInterval(interval: number): void;

	stopEstimoteBeaconDiscovery(): void;

	stopEstimoteNearableDiscovery(): void;
}

interface ESTUtilityManagerDelegate extends NSObjectProtocol {

	utilityManagerDidDiscoverBeacons?(manager: ESTUtilityManager, beacons: NSArray<ESTBluetoothBeacon>): void;

	utilityManagerDidDiscoverNearables?(manager: ESTUtilityManager, nearables: NSArray<ESTDeviceNearable>): void;

	utilityManagerDidFailDiscovery?(manager: ESTUtilityManager): void;
}
declare var ESTUtilityManagerDelegate: {

	prototype: ESTUtilityManagerDelegate;
};

declare const enum ESTUtilityManagerState {

	Idle = 0,

	Scanning = 1
}

declare const enum EStrequestV3GetFirmwresError {

	IvalidValue = 1
}
