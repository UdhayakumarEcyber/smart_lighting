// import * as React from "react";
import React, {useEffect, useState } from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, Button, WidgetWrapper, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter, IMarker } from "uxp/components";
import './styles.scss';
 
 
interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string, 
} 


const Smart_lightingWidget: React.FunctionComponent<IWidgetProps> = (props) => { 

    const [posts, setPosts] = useState([])  

    let [markers, setMarkers] = useState([])

    useEffect(() => {
      const url = 'http://dev.lucy.mscp.city/Lucy/OCBProxy/v2/entities?type=Streetlight&options=keyValues&apikey=SC:mda:04515d5a82a6a95f';
    fetch(url).then(resp=>resp.json())
    .then(resp=>{
        setPosts(resp)
        var _markers:IMarker[] = []
        for(let r of resp ){
            var tempMarker:IMarker= {
                latitude: r.location.coordinates[1],
                longitude: r.location.coordinates[0],

                customHTMLIcon : {
                    className : "light green-light light_action_more", 
                    html : "<div class='more_section hotel-round_more hotel-green_more'><div class='hotel-round'>10</div><div class='more-content'>Circuit 01</div></div>" ,
                    iconSize : [20, 20]
                }, 
                data: {
                    name: "Medina", 
                    zoom : -1
                },
                renderPopup :{
                    content : () =>  
                    
                    <>  
                    
                    <div className="energy_content-overall">  
                        
                        {
                            posts.map(post=><div className="energy_content green-energy_content">  
                                    <div className="days">{post.observationDateTime }</div>  
                                
                                <div className="section-content">
                                    <div className="icon"></div>
                                    <h5>{post.powerConsumption}</h5>
                                    <p>{post.status}</p>  
                                </div>  
                            </div>) 
                        } 
                    

                        <div className="lights_more">
                            <ul> 
                                {
                                posts.map(post=><li><div className="light green-light"></div></li>) 
                                } 
                            </ul> 

                            <ul>
                                <li><div className="light green-light"></div></li>
                                <li><div className="light green-light"></div></li>
                                <li><div className="light green-light"></div></li>
                                <li><div className="light green-light"></div></li> 
                                <li><div className="light green-light"></div></li>
                            </ul>
                                
                        </div>
                    </div>

                    </>
                } 
 
                // customHTMLIcon: r.
            }
            _markers.push(tempMarker)
            
        }
        console.log(_markers, 'hi');
        setMarkers(_markers)
    })
     
    },[])  
  
 
 
     let [selected, setSelected] = React.useState<string | null>("op-1");

     let [regions, setRegions] = React.useState<any[]>([])
     let [isAddingRegion, setIsAddingRegion] = React.useState<boolean>(false)
 
     let regionCoords = React.useRef<any[]>([])
 

    const addRegion = () => {
        setIsAddingRegion(true);
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

                //    mapUrl="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" 

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
                

                   markers={markers}

                   
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
                         


                        <div className="data-grid"> 
                            <ul>
                                {
                                    posts.map(post=><li>
                                        <div className="item-content">
                                            <div className="title"> {post.alternateName }</div>  
                                            <div className="sub-title">  {post.current }  </div>
                                        </div>
                                    </li>) 
                                }
                            </ul>
                        </div>

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


 


function executeAction() {
    throw new Error("Function not implemented.");
}
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
 

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"smart_lighting",
    component: Smart_lightingWidget
});
*/
