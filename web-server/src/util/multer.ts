import { randomBytes, randomUUID } from 'crypto';
import { existsSync, mkdirSync } from 'fs';
import * as multer from 'multer';

function getExtension(mime: string): string {
  // image/gif, image/png, image/jpeg, image/bmp, image/webp
  if (mime.match('image/')) {
    const ext = mime.replace('image/', '.');
    return ext;
  } else {
    return '';
  }
}

export const getStorage = (dest: string) =>
  multer.diskStorage({
    destination: function (req, file, callback) {
      if (!existsSync(dest)) {
        mkdirSync(dest);
      }
      callback(null, dest);
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname +
          '-' +
          Date.now() +
          '-' +
          randomBytes(2).toString('hex') +
          getExtension(file.mimetype),
      );
    },
  });

/*export const getStorage = (dest: string) => multer.diskStorage({
  destination: function (req, file, callback) {
    callback(
      null,
      file.filename
    )
  },*/
