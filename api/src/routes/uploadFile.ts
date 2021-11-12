import { Request, Response } from 'express';
import multer from 'multer';
import { encryptFile } from './aes';

import * as admin from 'firebase-admin';
import * as serviceAccount from './key_id.json';

const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});
const storageRef = firebaseAdmin.storage().bucket(`gs://cs4389-security.appspot.com`);

export async function uploadFile(req: Request, res: Response) {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads');
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    });

    const upload = multer({ storage }).single('toBeEncryptedFile');

    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        } else {
            // File is saved in uploads folder
            if (!req.file?.path) {
                console.log('No file was uploaded');
                res.status(500).send('No file was uploaded');
                return;
            }

            if (encryptFile(req.file.path, req.body.key) === true) {
                // TODO: Remove line below and uncomment firebase code when setup
                res.status(200).send('File encrypted successfully');
                if (await uploadToFirebase(req.file.path) === true) {
                    console.log('Successfully uploaded to Firebase');
                    return;
                }
                else {
                    console.log('Failed to upload to Firebase');
                    res.status(500).send("Error uploading to Firebase");
                    return;
                }
            }
            else {
                console.log('Failed to encrypt file');
                res.status(500).send("Error encrypting file");
                return;
            }
        }
    })
}

// Return true or false if the file was uploaded successfully
async function uploadToFirebase(filePath: string) {
    // Upload the File
    var uploaded;
    const storage = await storageRef.upload(filePath, {
        public: true,
        metadata: {
            contentType: 'application/octet-stream'
        }
    }).then((result) => {
        uploaded = true;
    })
        .catch((err) => {
            console.log(err)
            uploaded = false;
        });

    return uploaded;
}