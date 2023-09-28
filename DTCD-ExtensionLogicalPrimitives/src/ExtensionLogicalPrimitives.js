import primitives from './primitives';
import { ExtensionPlugin } from '../../DTCD-SDK';

export class ExtensionLogicalPrimitives extends ExtensionPlugin {
  static getRegistrationMeta() {
    return {
      type: 'extension',
      target: ['PrimitiveLibraryPanel', 'LiveDashPanel'],
      title: 'Расширение библиотеки примитивов Logical',
      name: 'ExtensionLogicalPrimitives',
    };
  }

  static getExtensionInfo() {
    const result = [];
    primitives.forEach(primitive => {
      const primitiveInfo = primitive.getPrimitiveInfo();
      primitiveInfo.extensionName = this.getRegistrationMeta().name;
      primitiveInfo.primitiveName = primitiveInfo.name;
      result.push(primitiveInfo);
    });
    return result;
  }

  constructor() {
    super();

    const yFiles = this.getDependence('yfiles', 'esm', '2.5.0');

    this.primitives = {};
    primitives.forEach(PrimitiveClass => {
      const { name } = PrimitiveClass.getPrimitiveInfo();
      this.primitives[name] = PrimitiveClass.bind(null, yFiles);
    });
  }
}
