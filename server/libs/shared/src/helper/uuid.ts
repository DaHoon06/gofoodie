import { v1 as uuidV1, V1Options, v5 as uuidV5 } from 'uuid';

/**
 * @description uuid 생성 (Base V1)
 * @param {V1Options} options
 */
export const createUuid = (options?: V1Options): string => {
  return uuidV1(options);
};

/**
 * @description namespace 기준으로 새로운 uuid를 생선한다.
 * @param {string} namespaceId : namespace 역할을 할 uuid 값
 * @param {V1Options} options
 */
export const createUuidByNamespaceId = (
  namespaceId: string,
  options?: V1Options,
): string => {
  const uuidV1 = createUuid(options);
  return uuidV5(uuidV1, namespaceId);
};
