
interface ESTDeviceManagerDelegate extends NSObjectProtocol {

	deviceManagerDidDiscoverDevices?(manager: ESTDeviceManager, devices: NSArray<ESTDevice>): void;

	deviceManagerDidFailDiscovery?(manager: ESTDeviceManager): void;

	deviceManagerDidFailDiscoveryWithError?(manager: ESTDeviceManager, error: NSError): void;
}

export class ESTDeviceManagerDelegateImpl extends NSObject implements ESTDeviceManagerDelegate{


    static ObjCProtocols = [ESTDeviceManagerDelegate]

    static new(): ESTDeviceManagerDelegateImpl{
        return <ESTDeviceManagerDelegateImpl>super.new()
    }

    deviceManagerDidDiscoverDevices(manager, devices){
        console.log(devices)
    }

    deviceManagerDidFailDiscovery(manager){
        console.log('did fail ?')
    }

    deviceManagerDidFailDiscoveryWithError(manager, error){
        console.log('error')
    }


}

export class Bescon{
    public message: string
    public manager: ESTDeviceManager

    delegate: ESTDeviceManagerDelegateImpl = ESTDeviceManagerDelegateImpl.new()

    constructor(){
        this.manager = ESTDeviceManager.alloc()
        this.manager.delegate = this.delegate
    }
    
    scan(){
        if(this.manager.isScanning){
            this.message = "sanning for devices"
        }else{
            this.message = "not scanning for devices"
        }
    }
}