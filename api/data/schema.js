import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import Queries from '../queries';

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: Queries
});

export const Schema = new GraphQLSchema({
    query: queryType
});
