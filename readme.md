# Google Cloud Functions with TypeScript example project
This is a template for creating a Google Cloud Function written in TypeScript.  
It contains a simple function that listens to standard HTTP request and responds with a simple message and logs it to console.

## Requirements
You need some tooling installed and configured to make this work:
* NodeJS
* Yarn (or npm)
* TypeScript
* Google Cloud SDK

Note: Make sure to have your Google Cloud SDK configured to the project where you want the cloud function to be deployed.

## Clone the project
Clone the project to your desired workspace:
```bash
git clone git@github.com:rodob/google-cloud-typescript-functions.git
```

## Install required node modules
```bash
yarn install
```

## Run the compiler
```bash
yarn build
```
This is running the TypeScript compiler `tsc` - configured in `package.json`

Alternatively run the TypeScript compiler directly with:
```bash
tsc
```

## Deploy the function
```bash
yarn deploy
```
This is running the `gcloud` command for deploying to the current active Google Cloud project - configured in `package.json`

Alternatively run the command directly with:
```bash
gcloud functions deploy helloGET --runtime nodejs8 --trigger-http
```

If the function is successfully deployed you should see a url to where you can access the function.