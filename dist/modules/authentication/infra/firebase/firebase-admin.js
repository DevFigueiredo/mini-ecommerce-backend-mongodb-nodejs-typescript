"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
require("dotenv/config");
const serviceAccount = {
    type: 'service_account',
    project_id: 'management-events-8cd30',
    private_key_id: '9e432ad0242f64253ac1dd627aa0022ec7915357',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/wFqy/TtwUVNN\nreHzGs88RseeButjN94kYgQtCqPDk/F6ExClJ/AMk6H+LloQJebkprk53MZxW+fK\nprVO4dZerTEWjvYq5gXyv4xbNu9XToZtl+D5VW49BaOUsFr5NJAnzEJWdPEDw26Y\njui8yKJt40nYDW2ybKxxHN9vSdHxrmg6ljGAwGQPGdgY6AATcqVOt7zuf5txwxm4\ny1xSBeEezkCraeKaT7NkBUNE7/JLjjedlU6VsYeoazZlCP2uUXuYpu5xmWF3htzR\nkLOEsiwOaXxDrEM7FI7bOghGY7CHOx000R2GonM4Dks+UgbPFzaOb4gLQ/MZMHB8\ny2tzj0JNAgMBAAECggEADM75OZ4o85DTIWWDw5y4va+CrQXys98RY4ySkXAPZ8SN\nnrIAUu/og1Nac+NxWHiXqqvCXeDNkD8erBtxRMwltcKyFgfFqzCDTDRKvvSowMQg\nWAvxo+YQTFsAkssqJurBofVTpxL+Eg2Vz4xlDbTSa/tNo8HXebgnPd6hkP1odmrE\nB/hWuQ/iVNlTVRX+E/NEfdel+yzZPI0Bgfx01X2XdjxzVTrFcj7PPL8iuJU7uMKa\nyKVPGBSthr0e1bp1fC95gJu+h23cHauMeynPKPyrQoKfPBJXrrWIw+1m5vox9S0Y\n5lQ+wiqjgx7TZfCpkuAW0J6wapf5ySM970aypzTh1wKBgQDuu/qfZHKk6JtM/6ow\nDPay4ie36t+4BG+iX8cF1cZmzCLDhtzuIpVhs57n9+EEsyRocbMOWl7Td/aiHb6n\naS0a3jgLhMnbDfM92I41a9iRd93sdaBid7R3dK1PwzfTJNVF4mDrY3Ji1GMgNBlS\nFljhRsboWfcesOWZeSwgSBPR4wKBgQDNnoPhswflFU9hvH5batSA/8pxm1ayRrLe\ntVmrBMgG9hwgIOa86ZTjYls96KXoJsPnb9p6EThsYIiOkXJqyxg4j4Hmvsb6j1+I\nDewPGA8RV0jV4rDHCR2P8CaauYzlRlY2FxqJp72NomzaSJW/8n+sn1c1VVx0z/L9\nXnLcNQwSDwKBgQDM4AE6nIdOQlhUgevZhKaJ6U9QpH4Ne7EZ1bwEo+q5+WG0Dp62\ntnMf/3fVdoJi+CG8iCazoJZUQFUl1wTwwm/06NOL/w8DsDsYzilsavrWC9olvORA\n3J3BDh5VnyDfUHK+oIGwQA3ABqhy0IMSUR9BZO36JIrQidrgFH7rzS9FJQKBgElJ\nqZoFlNfLG6srYyI0Vp/QDBkoE+OhHVoR627wWldY2zd8YqGM49uUEA9l39R6FLNm\nA8okXycJ1UJzhwOXdf+a7uMOtp9SAOvegnfyzFQS90v866NVlWrbXvchEZ4aztmi\nrHvKBN75uLCo1G9BAM7HUG8bCMQ95k72nhvs8GtzAoGBAM+awpv1/+MIMui3pERG\nYQIoiT1bBjZnSKGFdEtiFps2wOP2enf2vD/aeBWReJ8YYyEAUXXBsDs2SME4eU7B\nDfIhFbgnonyrJhcCsIUl2qztt+HQsPXmk5e7SxtU+S1v896IUaebg/crTLtut2Wu\n4/fo826TSVpORe4bLuruHm3Z\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-6z5ha@management-events-8cd30.iam.gserviceaccount.com',
    client_id: '111655221868480304062',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6z5ha%40management-events-8cd30.iam.gserviceaccount.com'
};
const admin = firebase_admin_1.default.initializeApp({
    projectId: serviceAccount.project_id,
    credential: firebase_admin_1.default.credential.cert(serviceAccount)
});
exports.admin = admin;
