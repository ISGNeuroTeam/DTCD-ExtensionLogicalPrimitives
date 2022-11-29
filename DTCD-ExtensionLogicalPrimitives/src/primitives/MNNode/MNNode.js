import icon from './mn.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Узел M из N',
      name: 'MNNode',
      groups: ['Логические узлы'],
      icon,
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles.default;
  }

  create() {
    const instance = new this.yfiles.SimpleNode();
    instance.style = new this.yfiles.ShapeNodeStyle({
      shape: this.yfiles.ShapeNodeShape.TRAPEZ2,
      stroke: 'rgb(0, 0, 0)',
      fill: 'rgb(80, 50, 130)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 130, 60);
    instance.tag = {
      properties: {
        M: {
          expression: '',
          type: 'expression',
        },
        onlyConnectedPorts: {
          expression: 'true',
          type: 'expression',
        },
      },
      initPorts: [
        {
          primitiveName: 'inPort1',
          portPosition: {
            x: 0.2,
            y: 1,
          },
          type: 'IN',
          properties: {
            status: {
              expression: '',
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'inPort2',
          portPosition: {
            x: 0.5,
            y: 1,
          },
          type: 'IN',
          properties: {
            status: {
              expression: '',
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'inPort3',
          portPosition: {
            x: 0.8,
            y: 1,
          },
          type: 'IN',
          properties: {
            status: {
              expression: '',
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'outPort1',
          portPosition: {
            x: 0.5,
            y: 0,
          },
          type: 'OUT',
          properties: {
            status: {
              expression: `let portOwner = graph.ports.find(port => port.tag.primitiveID == primitiveID).owner;
let inEdges = graph.inEdgesAt(portOwner).toArray()
if(inEdges.length < 1) false
else if (!eval(portOwner.tag.primitiveID).onlyConnectedPorts) {
  if(inEdges.length < portOwner.ports.size - 1) throw new Error("Connect remaining pots of node '" + portOwner.tag.primitiveID + "'!")
  else {
    if(inEdges.reduce((result, current) => result + Boolean(eval(current.sourcePort.tag.primitiveID).status), 0)
    >= eval(portOwner.tag.primitiveID).M) true
    else false
  }
}
else {
  if(inEdges.reduce((result, current) => result + Boolean(eval(current.sourcePort.tag.primitiveID).status), 0)
  >= eval(portOwner.tag.primitiveID).M) true
  else false
}`,
              type: 'expression',
            },
          },
        },
      ],
    };
    this.instance = instance;
    return instance;
  }
}
