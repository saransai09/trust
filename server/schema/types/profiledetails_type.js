const graphql = require('graphql');
const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
}= graphql;


const ProfileDetailType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: { type: GraphQLID},
        email: {type: GraphQLString}
    }
});

module.exports = ProfileDetailType;