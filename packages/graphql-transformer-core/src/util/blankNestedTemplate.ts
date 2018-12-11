import Template from 'cloudform-types/types/template'
import { ResourceConstants } from 'graphql-transformer-common';
import { StringParameter } from 'cloudform-types';
import Parameter from 'cloudform-types/types/parameter';

/**
 * Nested stacks will have all parameters forwarded & have the GraphQL API ID
 * injected from the parent stack.
 * @param description The stack description.
 */
export default function blankNestedTemplate(
    params: { [key: string]: Parameter } = {}
): Template {
    return {
        AWSTemplateFormatVersion: '2010-09-09',
        Description: `A nested stack generated by the GraphQL transform.`,
        Metadata: {},
        Parameters: {
            [ResourceConstants.PARAMETERS.AppSyncApiId]: new StringParameter({
                Description: `The id of the AppSync API associated with this project.`,
            }),
            ...params
        },
        Resources: {},
        Outputs: {}
    }
}
