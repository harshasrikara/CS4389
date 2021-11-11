import { Request, Response } from 'express';
import multer from 'multer';
import {encryptFile} from './aes';

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
            if(!req.file?.path) {
                console.log('No file was uploaded');
                res.status(500).send('No file was uploaded');
                return;
            }

            if(encryptFile(req.file.path, req.body.key) === true) {
                // TODO: Remove line below and uncomment firebase code when setup
                res.status(200).send('File encrypted successfully');
                // if(uploadToFirebase(req.file.path) === true) {
                //     console.log('Successfully uploaded to Firebase');
                //     res.status(200).send("Successfully Encrypted and Uploaded!");
                //     return;
                // }
                // else {
                //     console.log('Failed to upload to Firebase');
                //     res.status(500).send("Error uploading to Firebase");
                //     return;
                // }
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
function uploadToFirebase(filePath: string) {
    return false;
    // const bucket = admin.storage().bucket();
    // const file = bucket.file(filePath);

    // const stream = file.createWriteStream({
    //     metadata: {
    //         contentType: 'application/octet-stream'
    //     }
    // });

    // stream.on('error', (err) => {
    //     console.log(err);
    // });

    // stream.on('finish', () => {
    //     console.log('Successfully uploaded to Firebase');
    // });

    // stream.end();
}