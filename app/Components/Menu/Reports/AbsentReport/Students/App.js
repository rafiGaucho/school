
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View,Dimensions
} from 'react-native';

import { VictoryArea,VictoryGroup,VictoryScatter} from "victory-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.heightScreen= Dimensions.get('window').height;
    this.widthScreen= Dimensions.get('window').width;
}

  render() {
    const size=this.widthScreen*0.5;
         return (
         <View style={{alignItems:'center'}}>
               <VictoryGroup width={this.widthScreen+size-15} colorScale={"qualitative"} >
                <VictoryScatter
                     style={{ data: { fill: "white",stroke:'white',strokeWidth:7 ,strokeOpacity:0.5} }}
                     size={5} data={[ { x: 4, y:53 }]} />
                <VictoryArea
                 height={600} interpolation="natural"
                 style={{ data: { fill: '#f5f6fa' ,fillOpacity: 0.3, stroke: "white", strokeWidth: 1.1} }}
                 data={[
                    { x: '-', y: 60,  },
                    { x: 'Mon', y: 50,  },
                    { x: 'Tue', y: 33,  },
                    { x: 'Wed', y: 53,  },
                    { x: 'Thu', y: 56,  },
                    { x: 'Fri', y: 37,  },
                    { x: 'Sat', y: 51,  },
                    { x: '--', y: 12,  }  ]}    />
               </VictoryGroup>

               <View style={{position:'absolute'}}>
                <VictoryGroup  width={this.widthScreen+size-15} colorScale={"qualitative"}>
                    <VictoryScatter
                      style={{ data: { fill: "white",stroke:'white',strokeWidth:7 ,strokeOpacity:0.5} }}
                      size={5} data={[{ x: 4, y: 7 }]}  />
                    <VictoryArea interpolation="natural"
                       style={{ data: { fill: '#f5f6fa' ,fillOpacity: 0.1, stroke: "white", strokeWidth: 1.1} }}
                       data={[
                         { x: '-', y: 60,  },
                         { x: 'Mon', y:5,  },
                         { x: 'Tue', y:17,  },
                         { x: 'Wed', y: 7,  },
                         { x: 'Thu', y: 4,  },
                         { x: 'Fri', y: 13,  },
                         { x: 'Sat', y: 9,  },
                         { x: '--', y: 1,  }   ]}   />
                 </VictoryGroup>
                </View>
            </View>
         )
     }
 }
