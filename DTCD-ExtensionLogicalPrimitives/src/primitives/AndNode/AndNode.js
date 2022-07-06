import icon from './and.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Узел И',
      name: 'ANDNode',
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
      shape: this.yfiles.ShapeNodeShape.TRIANGLE,
      stroke: 'rgb(0, 0, 0)',
      fill: 'rgb(0, 150, 100)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 130, 60);
    instance.tag = {
      properties: {
        onlyConnectedPorts: {
          expression: 'true',
          type: 'expression',
        },
      },
      initPorts: [
        {
          primitiveName: 'inPort_1',
          portPosition: {
            x: 0.2,
            y: 0.95,
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
          primitiveName: 'inPort_2',
          portPosition: {
            x: 0.8,
            y: 0.95,
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
          primitiveName: 'outPort_1',
          portPosition: {
            x: 0.5,
            y: 0.05,
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
    inEdges.reduce((result, current) => result && Boolean(eval(current.sourcePort.tag.primitiveID).status), 1)
  }
}
else{
  inEdges.reduce((result, current) => result && Boolean(eval(current.sourcePort.tag.primitiveID).status), 1)
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
