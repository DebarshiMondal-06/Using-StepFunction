const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = async(event) => {
    var { token } = event;
    const tokenName = Math.random().toString(36).substring(2, 8);
    var params = {
        TableName: 'TokenTable',
        Item: {
            tokenName: `${tokenName}`.toUpperCase(),
            token
        }
    };
    return await DynamoDB.put(params).promise();
};


// Second Function *************************************
const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB.DocumentClient();
const get_data = async() => {
    var params = {
        TableName: 'TokenTable'
    }
    return await DynamoDB.scan(params).promise();
}
exports.handler = async(event) => {
    const result = await get_data();
    
    const response = {
        statusCode: 200,
         headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(result),
    };
    return response;
};


// Third Function ************************************
const AWS = require('aws-sdk');
const StepFunction = new AWS.StepFunctions();
const DynamoDB = new AWS.DynamoDB.DocumentClient();
const delete_Item = async(tokenName) => {
    var set_params = {
        TableName: "TokenTable",
        Key: {
            tokenName: `${tokenName}`,
        },
    };
    return await DynamoDB.delete(set_params).promise();
};
exports.handler = async(event) => {
    const { tokenName, token } = JSON.parse(event.body) || {};
    var params = {
        output: JSON.stringify({ statusCode: 200, message: 'Successfully Executed' }),
        taskToken: token
    };
    const result = await StepFunction.sendTaskSuccess(params).promise();
    if (result) {
        await delete_Item(tokenName);
        const response = {
            statusCode: 200,
            body: 'From Third Lambda v3.0',
        };
        return response;
    }
};
