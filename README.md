### Service Intergrate with Step Function
1. Lambda
2. DynamoDB
3. SNS

## Graph View:
![Alt text](https://project-image-bucket.s3.ap-south-1.amazonaws.com/stepfunctions_graph.png "Optional title")

### Purpose:

- To Coordinate the task among Lambda Functions,
- Less Code (task) in Lambda, therefore minimum execution time,
- Only execute the functions, based upon new Users(email) else not.
- SNS for,  distributing the workflow.
- Lambda functions to send Email and store in DB based upon new User from client.
