import AWS from 'aws-sdk'

AWS.config.update({
  region: 'sa-east-1'
})
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' })

export default sqs
