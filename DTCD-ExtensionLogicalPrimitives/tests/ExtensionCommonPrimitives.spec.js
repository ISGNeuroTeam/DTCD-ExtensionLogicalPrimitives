import { ExtensionLogicalPrimitives } from '../src/ExtensionLogicalPrimitives';

describe('ExtensionLogicalPrimitives:getRegistrationMeta', () => {
  test('should be defined', () => {
    expect(ExtensionLogicalPrimitives.getRegistrationMeta).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionLogicalPrimitives.getRegistrationMeta()).toEqual({
      type: 'extension',
      target: expect.any(Array),
      title: 'Расширение библиотеки примитивов Logical',
      name: 'ExtensionLogicalPrimitives',
    });
  });
});

describe('ExtensionLogicalPrimitives:getExtensionInfo', () => {
  test('should be defined', () => {
    expect(ExtensionLogicalPrimitives.getExtensionInfo).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionLogicalPrimitives.getExtensionInfo()).toEqual(expect.any(Array));
  });
});
