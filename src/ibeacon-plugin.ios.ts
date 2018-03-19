import { Common } from './ibeacon-plugin.common';


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

export class Beacon extends Common{
    public message: string
    public manager: ESTDeviceManager
    public filter: ESTDeviceFilter
    public delegate: ESTDeviceManagerDelegateImpl = ESTDeviceManagerDelegateImpl.new()

    constructor(){
        super()

        this.manager = ESTDeviceManager.new()
        this.manager.delegate = this.delegate
    }

    startScanning(){
        this.manager.startDeviceDiscoveryWithFilter(this.filter)
    }

    isScanning(){
        return this.manager.isScanning
    }

    stopScanning(){
        this.manager.stopDeviceDiscovery()
    }

}