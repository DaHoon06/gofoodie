import crypto from 'crypto';

/**
 * @description 암호화
 * @param value
 * @param key
 * @param algorithm
 */
export const encryption = (
  value: string,
  key: string,
  algorithm: string,
): string => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(value);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

export const decryption = (
  value: string,
  key: string,
  algorithm: string,
): string => {
  const encryptKey = Buffer.from(key, 'utf8');

  const [ivHex, encryptedHex] = value.split(':');
  if (!ivHex || !encryptedHex) {
    throw new Error('암호화된 토큰 형식이 올바르지 않습니다.');
  }

  const iv = Buffer.from(ivHex, 'hex');
  const encrypted = Buffer.from(encryptedHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, encryptKey, iv);
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString('utf8');
};
