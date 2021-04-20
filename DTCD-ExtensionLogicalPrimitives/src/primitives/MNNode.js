import icon from './AND_DIN.svg';

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
      properties: {},
      initPorts: [
        {
          portName: 'inPort1',
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
          portName: 'inPort2',
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
          portName: 'outPort1',
          portPosition: {
            x: 0.5,
            y: 0.05,
          },
          type: 'OUT',
          properties: {
            status: {
              expression: ``,
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
