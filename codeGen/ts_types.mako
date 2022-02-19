## Template to create TS interfaces from the model types
<%
    import yacg.model.model as model
    import yacg.templateHelper as templateHelper

    templateFile = 'ts_types.mako'
    templateVersion = '0.1.0'

    def printTypescriptType(prop):
        type = prop.type
        if type is None:
            return 'unknown' if not prop.isArray else 'unknown[]'
        elif isinstance(type, model.IntegerType):
            return 'number' if not prop.isArray else 'number[]'
        elif isinstance(type, model.ObjectType):
            return 'Object' if not prop.isArray else 'Object[]'
        elif isinstance(type, model.NumberType):
            return 'number' if not prop.isArray else 'number[]'
        elif isinstance(type, model.BooleanType):
            return 'boolean' if not prop.isArray else 'boolean[]'
        elif isinstance(type, model.StringType):
            return 'string' if not prop.isArray else 'string[]'
        elif isinstance(type, model.UuidType):
            # this is needed to simplify later the handling for mongodb
            return 'string | any' if not prop.isArray else 'string[] | any[]'
        elif isinstance(type, model.EnumType):
            return "{type}".format(type=type.name) if not prop.isArray else "{type}[]".format(type=type.name)
        elif isinstance(type, model.DateTimeType):
            return 'Date' if not prop.isArray else 'Date[]'
        elif isinstance(type, model.DateType):
            return 'Date' if not prop.isArray else 'Date[]'
        elif isinstance(type, model.BytesType):
             return 'number[]' if not prop.isArray else 'number[][]'
        elif isinstance(type, model.DictionaryType):
            return "Map<String, {}>".format(printTypescriptType(type.valueType))  if not prop.isArray else "Map<String, {}>[]".format(printTypescriptType(type.valueType))
        elif isinstance(type, model.ComplexType):
            return "{type}".format(type=type.name) if not prop.isArray else "{type}[]".format(type=type.name)
        else:
            return type
%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/

% for currentType in modelTypes:
    % if currentType.description != None:
/**
${templateHelper.addLineBreakToDescription(currentType.description,4)}
*/
    % endif
    % if isinstance(currentType, model.EnumType):
export enum ${currentType.name} {
    % for value in currentType.values:
        ${value} = "${value}",
    % endfor
}

    % else:
export interface ${currentType.name} {
    % if hasattr(currentType,'properties'):
    % for prop in currentType.properties:
        % if prop.description != None:

    /**
    ${templateHelper.addLineBreakToDescription(prop.description,4)}
    */
        % endif
    ${prop.name}${'' if prop.required else '?'}: ${printTypescriptType(prop)};
    % endfor
    % endif
}

% endif
% endfor
