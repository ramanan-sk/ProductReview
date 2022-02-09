import React from 'react'
import Home from './HomePage'
const PageFrame = () => {
    return (
        <div>
            <div id="productSpecsArea" >
                
            <h1>OnePlus Nord 5G</h1>
               <div className="container bg-dark " style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-3">General</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Brand</td>
                                <td className="col-sm-8">OnePlus</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Model</td>
                                <td className="col-sm-8">Nord 5G</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Launced</td>
                                <td className="col-sm-8">21st July 2020</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Dimensions</td>
                                <td className="col-sm-8">158.30 x 73.30 x 8.20</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Battery</td>
                                <td className="col-sm-8">4115 maH</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Wireless Charging</td>
                                <td className="col-sm-8">No</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Colours</td>
                                <td className="col-sm-8">Blue Marble, Gray Onux</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Camera</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Rear Camera</td>
                                <td className="col-sm-8">48MP + 8MP + 5MP + 2MP</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Rear Flash</td>
                                <td className="col-sm-8">Dual LED</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Rear AutoFocus</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Front Camera</td>
                                <td className="col-sm-8">32MP + 8MP</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Front AutoFocus</td>
                                <td className="col-sm-8">No</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Front Flash</td>
                                <td className="col-sm-8">No</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Pop-up Camera</td>
                                <td className="col-sm-8">No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Hardware</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Processor</td>
                                <td className="col-sm-8">2.4GHz octa-core</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Processor Model</td>
                                <td className="col-sm-8">Qualcomm Snapdragon 765G</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">RAM</td>
                                <td className="col-sm-8">12GB</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Internal Storage</td>
                                <td className="col-sm-8">256GB</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Expandable Storage</td>
                                <td className="col-sm-8">No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Software</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Operating System</td>
                                <td className="col-sm-8">Android 10</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Skin</td>
                                <td className="col-sm-8">OxygenOS 10.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Connectivity</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">WiFi</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">GPS</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Bluetooth</td>
                                <td className="col-sm-8">Yes, v 5.10</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">NFC</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">USB</td>
                                <td className="col-sm-8">Type-C</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Sim Slot</td>
                                <td className="col-sm-8">2, Nano-Sim</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Sim 1</td>
                                <td className="col-sm-8">5G/4G supported</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Sim 2</td>
                                <td className="col-sm-8">5G/4G supported</td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>

                <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">Sensors</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4">Face Unlock</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Fingerprint Sensor</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">In-Disply FingerPrint Sensor</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Compass</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Proximity Sensor</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Accelerometer</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Ambient light sensor</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-sm-4">Gyroscope</td>
                                <td className="col-sm-8">Yes</td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>


                {/* <div className="container bg-dark" style={{borderRadius:"20px"}}>
                    <h4 className="text-white pt-2">General</h4>
                    <table class="table table-dark table-striped table-hover ">
                        <tbody>
                            <tr className="d-flex">
                                <td className="col-sm-4"></td>
                                <td className="col-sm-8"></td>
                            </tr>
                        
                        
                        </tbody>
                    </table>
                </div> */}

            </div>
        </div>
    )
}

export default PageFrame
