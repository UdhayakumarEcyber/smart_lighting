import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, Button, WidgetWrapper, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import './styles.scss';

// import { Button, FormField, IconButton, MapComponent, NotificationBlock, WidgetWrapper } from 'uxp/components';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string,
    
} 


  const Smart_lightingWidget: React.FunctionComponent<IWidgetProps> = (props) => {

     let [selected, setSelected] = React.useState<string | null>("op-1");

     let [regions, setRegions] = React.useState<any[]>([])
     let [isAddingRegion, setIsAddingRegion] = React.useState<boolean>(false)
 
     let regionCoords = React.useRef<any[]>([])
 

    const addRegion = () => {
        setIsAddingRegion(true);
    }

  

    const GridData = [
        { 
            title: <h3 className="green">46</h3>,
            subTitle: "Lights Online"
        },
        {  
            title: <h3 className="pink">03</h3>,
            subTitle: "Lights Offline"
        },
        { 
            title: <h3 className="white">0 kW h</h3>,
            subTitle: "Not Working"
        },
        { 
            title: <h3 className="orange">35 days</h3>,
            subTitle: "Maintenance Due In"
        }  
    ]  

    const renderGridItem = (item: any, key: number) => {
        return (<ItemCard
            item={item}
            imageField="icon"
            titleField="title"
            subTitleField="subTitle"
            nameField="name"
        />)
    }
 
function addMarker(latlng:any) {
    let W  = window as any;
    if (!W.Markers) W.Markers = [];
    W.Markers.push(latlng);
}
const [isActive, setActive] = React.useState(false);  

const toggleClass = () => {
  setActive(!isActive); 
}; 
 
let className = "energy_content"
 
if (isActive) { 
   className += ' energy_content_toggle';
} 
   

    return (
        <WidgetWrapper className="smart_light"> 

            <div className="transport_map">

                <div className="transport_map-sec" style={{ width: "100%", height: "100%" }}>  
 

                <MapComponent

                    // https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png

                   // mapUrl="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"

                   mapUrl="" 

                    staticImage={{url:'https://static.iviva.com/images/uxp-generic-widgets/map.png', width:2880,height:1724}}

                    onMarkerClick={(el, data) => {  
                        console.log(el)
                        console.log(data)
                        
                    }}

                    onClick ={(e)=> {
                        console.log("Hi", e);
                        addMarker(e.latlng);
                    }} 

                    center={{ position: { latitude: 862, longitude: 1020 }, renderMarker: false }}
                    zoom={-1}
                    maxZoom={10}
                    minZoom ={-10}
                    regions={regions}  
                    zoomOnScroll ={true}

                    markers={[  

                    //     {
                    //           latitude: 0,
                    //           longitude: 0, 
                    //     },

                    //     {
                    //         latitude: 1724,
                    //         longitude: 2880, 
                    //   }

                        {
                            latitude:913,
                            longitude: 1836,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light green-light light_action_more",
                                html : "<div class='more_section'><div class='bulb-tungsten'></div><div class='more-content'>12 More</div></div>",
                               // html : "",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () =>  
                                
                                <>  
                               
                                <div className="energy_content-overall">

                                <div className="energy_content green-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div>
                                    <div className="lights_more">
                                    <ul>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                    </ul>

                                    <ul>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                    </ul>
                                    <ul>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                        <li><div className="light green-light"></div></li>
                                    </ul>

                                    </div>
                                </div>

                                </>
                            } 
                        },
                        
                        {
                            latitude: 903,
                            longitude: 1682,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light green-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content green-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        }, 
 
                        
                        {
                            latitude: 871,
        longitude: 1498,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light green-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content green-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        }, 


                        {
                            latitude: 951,
        longitude: 1494,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light green-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content green-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        }, 
                        
                        {
                            latitude: 979,
                            longitude: 1702,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light dark-red-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content dark-red-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        } , 

                        {
                            latitude: 993,
        longitude: 1888,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light dark-red-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content dark-red-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        } , 
 


                        {
                            latitude: 787,
        longitude: 1308,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light dark-red-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content dark-red-energy_content"> 
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        } , 

                        {
                            latitude: 651,
        longitude: 1208,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light orange-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content orange-energy_content"> 
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        } ,

                        {
                            latitude: 1073,
        longitude: 1288,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light orange-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content orange-energy_content"> 
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        } ,
                        

                        {
                            latitude: 862.6999969482422,
                            longitude: 1098,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light grey-light",
                                html : "<div class='bulb-tungsten'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content grey-energy_content">   
                                    {/* <div className="days">7 days</div> */}
                                    <div className="section-content">
                                        {/* <div className="icon"><img src="/images/grey-light.png" alt=""></img></div> */}
                                        <h5>Offline</h5>
                                        {/* <p>Energy Cosumption</p>   */}
                                    </div>  
                                </div> 
                            } 
                        } ,

                        /////////



                        {
                            "latitude": 1137,
                            "longitude": 1192,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 1177,
                            "longitude": 1112,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 1203,
                            "longitude": 1032,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 1223,
                            "longitude": 922,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 589,
                            "longitude": 1120,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 583,
                            "longitude": 1024,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 575,
                            "longitude": 928,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 585,
                            "longitude": 844,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 869,
                            "longitude": 1318,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        },
                        {
                            "latitude": 963,
                            "longitude": 1318,
                            data: {
                                                    name: "Medina"
                                                },
                                                customHTMLIcon : {
                                                    className : "light green-light",
                                                    html : "<div class='bulb-tungsten'></div>",
                                                    iconSize : [35, 35]
                                                }, 
                                                renderPopup :{
                                                    content : () => 
                                                    
                                                    <div className="energy_content green-energy_content">  
                                                        <div className="days">7 days</div>
                                                        <div className="section-content">
                                                            <div className="icon"></div>
                                                            <h5>0.3 kW h</h5>
                                                            <p>Energy Cosumption</p>  
                                                        </div>  
                                                    </div> 
                                                } 
                        }
                        
                    ]}

                   
                /> 
                    
        </div>   
             

            </div> 

           

            <div className="smart-light-box">

                <div className="smart-light-box-top">

                    <div className="smart-light-box_lft"> 
                        <h4>Global Lighting</h4>
                    </div>
                
                    <div className="smart-light-box_rht"> 
                            <div className="uti-sel-boxes">
                                <div className="uti-sel-box">
                                    <FormField inline className="showcase-input">
                                    <Select
                                            selected={selected}
                                            options={[
                                                { label: "Entire City",  value: "op-1" },
                                                { label: "Hotels", value: "op-2" },
                                                { label: "Hospital", value: "op-3" } 
                                            ]}
                                            onChange={(value) => { setSelected(value) }}
                                            placeholder=" -- select --"
                                        />
                                    </FormField>
                                </div> 
                            </div> 
                        </div>
                   </div>

                <div className="smart-light-box_details" >
                    <DataGrid
                        data={GridData}
                        renderItem={renderGridItem}
                        columns={2}
                    />
                </div>


                </div>
                

        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "smart_lighting",
    widget: Smart_lightingWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "smart_lighting",
    label: "Smart_lighting",
    // click: () => alert("Hello"),
    component: Smart_lightingWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"smart_lighting",
    component: Smart_lightingWidget
});
*/