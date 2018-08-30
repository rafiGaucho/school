import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ART,
} from 'react-native';

const {
  Surface,
  Group,
  Rectangle,
  ClippingRectangle,
  LinearGradient,
  Shape,
} = ART;

import AnimShape from './anim.js';

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as format from 'd3-format';
import * as axis from 'd3-axis';

const d3 = {
  scale,
  shape,
  format,
  axis,
};

import {
    scaleBand,
    scaleLinear
} from 'd3-scale';

type Props = {
  height: number,
  width: number,
  color: any,
  data: any
};

const margin = 20;
const AnimationDurationMs = 250;

class AreaSpline extends React.Component {

  constructor(props: Props) {
    super(props);
    this._createArea = this._createArea.bind(this);
    this._Xvalue = this._Xvalue.bind(this);
    this._Yvalue = this._Yvalue.bind(this);
    this._label = this._label.bind(this);
  }

  //TODO: expose this methods as part of the AreaSpline interface.
  _Yvalue(item, index) { return -item.value; }

  //TODO: expose this methods as part of the AreaSpline interface.
  _Xvalue(item, index) { return index*15; }

  //TODO: expose this methods as part of the AreaSpline interface.
  _label(item, index) { return item.name; }

  // method that transforms data into a svg path (should be exposed as part of the AreaSpline interface)
  _createArea() {
    var that = this;
    var area = d3.shape.area()
        .x(function(d, index) { return that._Xvalue(d, index); })
        .y1(function(d, index) { return that._Yvalue(d, index); })
        .curve(d3.shape.curveNatural)
        (this.props.data)

    // console.debug(`area: ${JSON.stringify(area)}`);

    return { path : area };
  }
    _value(item) { return item.number; }

  render() {
    const x = margin;
    const y = this.props.height - margin;
    data = [
    {"number":  8, "name": 'Fun activities'},
    {"number": 7, "name": 'Dog'},
    {"number": 16, "name": 'Food'},
    {"number": 23, "name": 'Car'},
    {"number": 42, "name": 'Rent'},
    {"number":  4, "name": 'Misc'},
  ];
  var arcs = d3.shape.pie()
        .value(this._value)
        (data);

    var path = d3.shape.arc()
      .outerRadius(42)  // Radius of the pie
      .padAngle(.05)    // Angle between sections
      .innerRadius(30)  // Inner radius: to create a donut or pie
    //  (arcs[i]);


    return (
      <Surface width={this.props.width} height={this.props.height}>
     <Group x={x} y={y}>
        {
            // pieChart has all the svg paths calculated in step 2)
            pieChart.paths.map( (item, index) =>
              (<Shape
                 key={'pie_shape_' + index}
                 fill={_getcolor(index)}
                 stroke={_getcolor(index)}
                 d={item.path}
                />))
        }
     </Group>
  </Surface>
    );
  }
}

export default AreaSpline;
