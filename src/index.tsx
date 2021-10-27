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
            title: <h3 className="green">2 kW h</h3>,
            subTitle: "Energy Cosumption"
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
 

const [isActive, setActive] = React.useState(false);  

const toggleClass = () => {
  setActive(!isActive); 
}; 
 
let className = "energy_content"
 
if (isActive) { 
   className += ' energy_content_toggle';
} 
   

    return (
        <WidgetWrapper> 

            <div className="transport_map">

                <div className="transport_map-sec" style={{ width: "100%", height: "100%" }}>  
 

                <MapComponent
                    mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    markers={[  

                        {
                            latitude: 24.5247,
                            longitude: 37.5692,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light green-light",
                                html : "<div class='more-content'>More</div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () =>  
                                
                                <>
                                <div className="energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"><img src="/images/green-light.png" alt=""></img></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div>  

                               
                                <div className="energy_content-overall">
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
                            latitude: 24.5247,
                            longitude: 35.5692,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light green-light",
                                html : "<div></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"><img src="/images/green-light.png" alt=""></img></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        }, 
                        
                        {
                            latitude: 24.5247,
                            longitude: 37.5692,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light green-light",
                                html : "<div></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"><img src="/images/green-light.png" alt=""></img></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        }, 
                        {
                            latitude: 24.5247,
                            longitude: 39.5692,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light dark-red-light",
                                html : "<div></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"><img src="/images/dark-red-light.png" alt=""></img></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        } , 

                        {
                            latitude: 22.5247,
                            longitude: 35.5692,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light orange-light",
                                html : "<div></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"><img src="/images/orange-light.png" alt=""></img></div>
                                        <h5>0.3 kW h</h5>
                                        <p>Energy Cosumption</p>  
                                    </div>  
                                </div> 
                            } 
                        } ,

                        {
                            latitude: 21.5247,
                            longitude: 36.5692,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "light grey-light",
                                html : "<div></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="energy_content">  
                                    {/* <div className="days">7 days</div> */}
                                    <div className="section-content">
                                        {/* <div className="icon"><img src="/images/grey-light.png" alt=""></img></div> */}
                                        <h5>Empty</h5>
                                        {/* <p>Energy Cosumption</p>   */}
                                    </div>  
                                </div> 
                            } 
                        } 
                        
                    ]}

                    onMarkerClick={(el, data) => { 

                        console.log(el)
                        console.log(data)
                    }}
                    center={{ position: { latitude: 24.5247, longitude: 39.5692 }, renderMarker: false }}
                    zoom={7}
                    maxZoom={10}
                    minZoom ={-10}
                    regions={regions} 
                
                    zoomOnScroll ={true}
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
                                                { label: "Global Lighting",  value: "op-1" },
                                                { label: "Global Lighting 2", value: "op-2" },
                                                { label: "Global Lighting 3", value: "op-3" } 
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